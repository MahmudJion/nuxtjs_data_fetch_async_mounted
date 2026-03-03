# nuxtjs_data_fetch_async_mounted

This repository demonstrates basic data fetching with Nuxt.js.

> **Security & production notes**
> - Dependencies have been updated to mitigate known vulnerabilities.  Some issues
>   remain in the Nuxt 2.x ecosystem; fully eliminating them requires migrating
>   to Nuxt 3 or replacing core packages.
> - `@nuxtjs/axios` plugin was removed in favor of direct `axios` imports and
>   a package override to force version `>=1.13.5` for all consumers.
> - Ensure your Node.js runtime is **v14+** (v18 or v20 recommended).  Nuxt 2 is
>   in maintenance mode; use a supported LTS release, or upgrade to Nuxt 3 if
>   you need the latest security fixes.

## Build & development

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate a static project (optional)
$ npm run generate
```

For detailed explanation on how things work, see the [Nuxt.js docs](https://nuxtjs.org).

