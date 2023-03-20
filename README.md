# Dom-content-loading-testing
This repo can help you to learn how browser loads scripts and files, builds dom, emits DOMContentLoaded etc.
## Installing
```shell
npm install
```
## Running with live reload
```shell
npm run start:dev
```

## Access credentials
```typescript
export const adminCredentials: Credentials = {
  login: 'admin',
  password: 'admin'
};
```

## Experiments
### index.html
```html
<script src="/resources/a.js?delay=2000&log=helloworld"></script>
<h1 class="a">A</h1>
<link rel="stylesheet" href="/resources/a.css?delay=3000">
```

### Query string parameters:
- <strong>delay</strong> (milliseconds) is used to simulate large files or custom network lags, you can change it for any request and see what happens.

- <strong>log</strong> parameter will make app server to console.log your message.
 
## Basic access authentication
```typescript
app.use(auth());
```
This repo is also a simple example of how [basic access authentication](https://en.wikipedia.org/wiki/Basic_access_authentication) works.
