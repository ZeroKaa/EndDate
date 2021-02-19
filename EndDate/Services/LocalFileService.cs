using Microsoft.AspNetCore.Hosting;
using System;
using System.Collections.Generic;
using System.IO;
using System.Text.Json;
using System.Threading.Tasks;

namespace EndDate.Services
{
    public interface ILocalFileService<T> {
        Task SaveAsync(List<T> entities);
        Task<List<T>> LoadAsync();
    }
    public class LocalFileService<T> : ILocalFileService<T>
    {
        private readonly IWebHostEnvironment _env;
        private string filePath;
        public LocalFileService(IWebHostEnvironment env)
        {
            this._env = env;
            filePath = Path.Combine(env.WebRootPath, "storage", typeof(T).Name + ".json");
        }

        public async Task<List<T>> LoadAsync()
        {
            var fInfo = new FileInfo(filePath);
            if (fInfo.Exists)
            {
                using (StreamReader reader = new StreamReader(filePath))
                {
                    var json = reader.ReadToEnd();
                    return JsonSerializer.Deserialize<List<T>>(json);
                }
            }
            else return new List<T>();
        }

        public async Task SaveAsync(List<T> entities)
        {
            var json = JsonSerializer.Serialize(entities);
            using (StreamWriter writer = new StreamWriter(filePath,false)) {
                writer.Write(json);
                writer.Flush();
                writer.Close();
            }
        }
    }
}
