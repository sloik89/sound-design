### E-comerce project Sound Design

Technologies that I use

- frontend
  - React 18
- backend
  - serverless netlify
  - airtable database

## Setting up the authorization

- install packecged `npm install @auth0/auth0-react`
- wrap whole aplication with Auth0Provider

```js
<Auth0Provider
  domain="Domain value"
  clientId="client id"
  authorizationParams={{
    redirect_uri: window.location.origin,
  }}
  cacheLocation="localstorage"
></Auth0Provider>
```
