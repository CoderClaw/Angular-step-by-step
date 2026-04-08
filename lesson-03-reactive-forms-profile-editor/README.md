# Lesson 03: Reactive Forms with a Profile Editor

This lesson is a Vite-based Angular application that teaches typed reactive forms, validation, and form submission with a realistic profile editor.

## What this lesson teaches

- How to build a typed reactive form with `FormGroup` and `FormControl`
- How Angular validators work on individual controls
- How to create a custom cross-field validator for business rules
- How to display validation feedback in the template
- How to submit only valid form data
- How `getRawValue()` returns a typed payload that matches your domain model

## Main files

- `src/app/app.component.ts`: typed form definition and submit logic
- `src/app/app.component.html`: form bindings and validation messages
- `src/app/profile.model.ts`: saved payload types
- `src/app/validators/notification-preference.validator.ts`: custom business validator

## Suggested exploration order

1. Open `src/app/profile.model.ts` and inspect the saved data shape.
2. Read `src/app/app.component.ts` and identify each typed form control.
3. Inspect the custom validator and see why it belongs at the form-group level.
4. Run the app and intentionally trigger validation errors.
5. Submit a valid form and compare the saved preview with the form definition.

## Why this example is realistic

Many Angular applications include profile editors, admin settings, onboarding screens, or configuration forms. Reactive forms are useful when a screen needs explicit validation, predictable state, and cross-field rules.

## Run the lesson

```bash
npm install
npm run dev
```

## Next lesson

Lesson 04 will move logic out of the component and into services using Angular dependency injection.
