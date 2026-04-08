# Lesson 02: Component Composition with a Product Catalog

This lesson is a Vite-based Angular application that teaches how to split a page into reusable standalone components.

## What this lesson teaches

- How a parent component owns the source of truth
- How child components receive data through typed `input()` bindings
- How child components send events upward through typed `output()` bindings
- How to organize a screen into focused, reusable UI pieces
- How typed models help several components share the same data safely
- How parent components coordinate selection, filtering, and derived views

## Main components

- `app.component`: owns product data, filtering state, and selection state
- `product-filter.component`: emits search and category changes
- `product-list.component`: renders the collection and forwards child events
- `product-card.component`: renders one reusable product card
- `product-detail.component`: displays the selected product summary

## Suggested exploration order

1. Open `src/app/product.model.ts` and inspect the shared types.
2. Read `src/app/app.component.ts` and find the source-of-truth state.
3. Follow the inputs and outputs across the child components.
4. Run the app and select products, change filters, and toggle shortlist state.
5. Move one piece of markup mentally between components and notice what data it needs from the parent.

## Why this example is realistic

Real Angular applications rarely keep a whole page inside one component. Product catalogs, dashboards, admin screens, and internal tools all benefit from being split into smaller components with clear responsibilities.

## Run the lesson

```bash
npm install
npm run dev
```

## Next lesson

Lesson 03 will introduce Angular forms in more depth with validation and typed reactive form structure.
