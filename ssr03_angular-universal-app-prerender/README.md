# Angular Universal App - Server-Side Pre-Rendering

This is a normal Angular application with Server-Side Pre-Rendering added. The Pre-Rendering version builds off of the Server-Side Rendering version.

To support pre-rendering, install the following packages.

```bash
npm install --save-dev node-fetch
npm install --save-dev @types/node-fetch
```

The following files were added to the application manually:

- prerender.ts
- tsconfig.prerender.json

To generate the pre-rendered version, run the following commands:

```bash
npm run build:prerender
npm run prerender
```

To run the pre-rendered, published application:

```bash
npm run serve:ssr
```

This example was inspired by [https://simply-how.com/angular-web-app-with-ssr-and-prerendering-example](https://simply-how.com/angular-web-app-with-ssr-and-prerendering-example).