import { AuthConfig } from 'angular-oauth2-oidc';

export const authConfig: AuthConfig = {
    issuer: 'https://login.microsoftonline.com/941ba334-2f43-428b-a77c-f6bac64f847a',
    redirectUri: window.location.origin,
    clientId: 'da864598-d823-4484-b8dc-7597968ba8a6',
    scope: 'offline_access openid profile',
    skipIssuerCheck: true,
    strictDiscoveryDocumentValidation: false,
    resource: 'da864598-d823-4484-b8dc-7597968ba8a6',
    clearHashAfterLogin: true,
    //customQueryParams: { 'domain_hint': 'consultpoint.net' },
    showDebugInformation: false
};
