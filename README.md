# Quick note app landing page

This page has 2 sections
1. Home page served from `docs/index.html`. Home page is an independent html file
2. [Nextra](https://nextra-v2-oe0zrpzjp-shud.vercel.app)
- Nextra generates docs.
- The source code is in `pages/` directory
- The documentation is generated in `docs/docs/`

## Files and directories
`docs` github pages root folder
`docs/index.html` is a standalone homepage made using bootstrap
`docs/img` contains img only for homepage

`docs/docs` is generated using 

`pages/` contain the source code of docs

## Nextra Commands

`npm run build` generates static help pages at `docs/docs`

`npx http-server docs` to run local web server for testing
