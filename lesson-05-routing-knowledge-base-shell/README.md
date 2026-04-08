# Lesson 05: Routing with a Knowledge Base Application Shell

This lesson is a Vite-based Angular application that teaches how routing turns a single screen into a multi-page application with a persistent shell.

## What this lesson teaches

- How to register routes with `provideRouter`
- How to create an application shell with `RouterOutlet`
- How to navigate with `routerLink`
- How to highlight active links with `routerLinkActive`
- How redirects work for default routes
- How route parameters drive detail pages
- How a wildcard route handles unknown URLs

## Main files

- `src/app/app.config.ts`: router registration with `provideRouter`
- `src/app/app.routes.ts`: route table for the app
- `src/app/app.component.html`: persistent shell and navigation
- `src/app/pages/article-detail-page.component.ts`: route parameter usage through `ActivatedRoute`

## Suggested exploration order

1. Open `src/app/app.routes.ts` and inspect the route table.
2. Read `src/app/app.config.ts` to see where routing is registered.
3. Read `src/app/app.component.html` and identify the persistent app shell.
4. Open the articles list and navigate into an article detail route.
5. Visit an invalid URL manually to see the wildcard route.

## Why this example is realistic

Most Angular applications are not single pages. They have navigation, default landing routes, detail pages based on identifiers, and fallback behavior when a URL does not exist. This lesson introduces that structure without adding unnecessary complexity.

## Run the lesson

```bash
npm install
npm run dev
```

## Next lesson

Lesson 06 will connect Angular to an API and introduce HTTP-based async data flows.
