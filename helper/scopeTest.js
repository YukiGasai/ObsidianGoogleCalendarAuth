/*
    Helper function to make sure that only scopes String only contains calendar scopes
*/
export const scopeTest = (scopesString ) => {
    if(!scopesString) return true;
    const scopes = scopesString.split(" ");

    // Allow only calendar scopes
    // Allow /calendar scope and other non calendar scopes for compatibility with older clients
    const allowedScopes = [
        "https://www.googleapis.com/auth/calendar",
        "https://www.googleapis.com/auth/calendar.events",
        "https://www.googleapis.com/auth/calendar.readonly",
        "email",
        "https://www.googleapis.com/auth/userinfo.email",
        "profile",
        "https://www.googleapis.com/auth/userinfo.profile",
        "openid",
    ];

    return scopes.every(scope => allowedScopes.indexOf(scope) > -1);
}