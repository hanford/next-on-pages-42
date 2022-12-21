https://github.com/cloudflare/next-on-pages/issues/42

Running the application normally works:

```sh
$ yarn install
$ yarn dev
```

Visit http://localhost:3000/my/nested/app

See that linking inside the application is working as expected

To see the bug, try building:

```
$ yarn build-pages
```

And you'll see:

```sh
▲ Created all serverless functions in: 523.929ms
▲
▲ Collected static files (public/, static/, .next/static): 2.571ms
▲
▲ Build Completed in .vercel/output [6s]
▲
⚡️
⚡️
⚡️ Completed 'npx vercel build'.
⚡️
⚡️ ERROR: Could not map all functions to an entry in the manifest.
⚡️ Please report this at https://github.com/cloudflare/next-on-pages/issues.
```

--

Notes

1. When removing `basePath` from next.config.js, the build command works
2. The patch just prevents `next-on-pages` from double installing dependencies and is not related
