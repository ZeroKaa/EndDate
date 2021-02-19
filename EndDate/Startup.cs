using EndDate.Models;
using EndDate.Services;

using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;

using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;

namespace EndDate.Core
{
    public class Startup
    {
        // This method gets called by the runtime. Use this method to add services to the container.
        // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddControllers();

            services.AddScoped<ILocalFileService<BankHolidaysDto>, LocalFileService<BankHolidaysDto>>();
            services.AddScoped<ILocalFileService<LeaveTypeDto>, LocalFileService<LeaveTypeDto>>();
            services.AddScoped<ICalculationService, CalculationService>();

            services.AddAuthentication(options =>
            {
                options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;

            }).AddJwtBearer(options =>
            {
                options.Authority = "https://login.microsoftonline.com/941ba334-2f43-428b-a77c-f6bac64f847a";
                options.SaveToken = true;
                options.TokenValidationParameters.ValidateAudience = false;
                options.TokenValidationParameters.ValidateLifetime = true;
                options.TokenValidationParameters.ValidateIssuer = false;
                options.Events = new JwtBearerEvents
                {

                    OnTokenValidated = async ctx =>
                    {
                        //var email = ctx.Principal.FindFirstValue("preferred_username");
                        //var claims = new List<Claim>{new Claim(ClaimTypes.PrimarySid, email)};
                        //var appIdentity = new ClaimsIdentity(claims);
                        //ctx.Principal.AddIdentity(appIdentity);
                    },
                    OnMessageReceived = context =>
                    {
                        var accessToken = context.Request.Query["access_token"];

                        if (!string.IsNullOrWhiteSpace(accessToken))
                        {
                            context.Token = accessToken;
                        }

                        return Task.CompletedTask;
                    }
                };
            });

        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseHttpsRedirection();

            app.Use(async (context, next) =>
            {
                await next().ConfigureAwait(true);

                if (context.Response.StatusCode == 404 && !Path.HasExtension(context.Request.Path.Value) && !context.Request.Path.Value.Contains("/api/files"))
                {
                    context.Request.Path = "/index.html";
                    await next().ConfigureAwait(true);
                }
            });

            app.UseDefaultFiles();

            app.UseStaticFiles(new StaticFileOptions
            {
                OnPrepareResponse = ctx =>
                {
                    if (ctx.Context.Request.Path == "/index.html")
                    {
                        ctx.Context.Response.Headers.Append("Cache-Control", $"public, max-age=0");
                    }
                }

            });

           

            app.UseRouting();

            app.UseAuthentication();
            app.UseAuthorization();

            var storage = Path.Combine(env.WebRootPath, "storage");
            var dInfo = new DirectoryInfo(storage);
            if (dInfo.Exists == false)
            {
                dInfo.Create();
            }

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });



        }
    }
}
