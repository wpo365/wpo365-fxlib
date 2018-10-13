# WordPress + Microsoft Office 365 (WPO365) integration helper library

wpo365-fxlib is a tiny helper library intended to offer developers that want to build custom integrations for WordPress and Microsoft Office 365 on top of the wpo365-login plugin an easy-to-use API to kickstart their project.

## Description

Solutions that combine the power of WordPress and Microsoft Office 365 would need (in a user delegation scenario) to be able to sign in WordPress users with Microsoft. They need to do so in order to obtain an authorization code that later is exchanged for oauth access (bearer) token(s) e.g. to access SharePoint Online, Microsoft Graph etc.

This library therefore expects the WordPress Single Sign-on plugin for Office 365 / Azure AD (slug wpo365-login(-premium) to be installed, activated and configured.

This tiny JS library provides you with a really easy-to-use API to call the custom (oauth) Token Cache WordPress AJAX service that is installed as part of the wpo365-login plugin.

For documentation please visit [https://www.wpo365.com/](https://www.wpo365.com/).

## Dependencies

...

## Example

...
