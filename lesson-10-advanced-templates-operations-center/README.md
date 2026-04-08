# Lesson 10: Advanced Templates with an Operations Center

This lesson is a Vite-based Angular application that teaches advanced template reuse with content projection and parent-supplied templates.

## What this lesson teaches

- How to project content into reusable components with `ng-content`
- How to create parent-owned rendering blocks with `ng-template`
- How a reusable component can render those blocks with `ngTemplateOutlet`
- How to expose flexible action slots without hard-coding buttons into a reusable component
- How to keep layout structure reusable while leaving row rendering to the consuming screen

## Main files

- `src/app/components/panel-shell.component.ts`: reusable layout shell using content projection
- `src/app/components/template-grid.component.ts`: reusable grid component driven by template inputs
- `src/app/app.component.html`: parent-owned row templates and empty-state templates

## Suggested exploration order

1. Read `panel-shell.component.html` and inspect the projected action slot.
2. Read `template-grid.component.html` and follow how `ngTemplateOutlet` renders a parent template.
3. Open `app.component.html` and compare the approval row template to the incident row template.
4. Notice that both screens reuse the same surrounding components while customizing only the template blocks.
5. Run the app and remove data in code to see the parent-defined empty states render.

## Why this example is realistic

Admin tools, internal operations screens, and dashboards often need the same layout or grid shell reused across many feature areas while each feature still controls its own row content, action buttons, and empty states. Angular templates are well suited to that style of reuse.

## Run the lesson

```bash
npm install
npm run dev
```

## Next lesson

Lesson 11 will introduce custom directives and pipes for reusable presentation behavior.
