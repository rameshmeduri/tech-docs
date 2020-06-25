# Request parameters

---

| Property | Description |
| --: | :-- |
| .app | holds a reference to the Express app object |
| .baseUrl | the base path on which the app responds |
| .body | contains the data submitted in the request body (must be parsed and populated manually before you can access it) |
| .cookies | contains the cookies sent by the request (needs the cookie-parser middleware) |
| .hostname | the server hostname |
| .ip | the server IP |
| .method | the HTTP method used |
| .params | the route named parameters |
| .path | the URL path |
| .protocol | the request protocol |
| .query | an object containing all the query strings used in the request |
| .secure | true if the request is secure (uses HTTPS) |
| .signedCookies | contains the signed cookies sent by the request (needs the cookieparser middleware) |
| .xhr | true if the request is an XMLHttpRequest |
