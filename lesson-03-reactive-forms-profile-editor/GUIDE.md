# Lesson 03 Guide: Reactive Forms

This lesson introduces a more structured way to handle forms in Angular.

Lesson 1 used `ngModel`, which is useful for simple inputs. But as forms become more complex, Angular applications often switch to reactive forms because they make form state explicit and programmable.

## What This Lesson Is About

The project is a profile editor.

That makes it a good form example because real applications often need:

- multiple fields
- validation rules
- cross-field rules
- controlled submission behavior
- user feedback when the form is invalid

This lesson is about treating the form itself as application state.

## Template-Driven vs Reactive Forms

You have already seen a simpler style in Lesson 1.

Reactive forms are different because the form is created in TypeScript first.

That means the component defines:

- what controls exist
- what their initial values are
- what validation rules apply
- how the form should be read and submitted

The template then connects to that pre-defined structure.

This is why reactive forms feel more explicit and scalable.

## `FormGroup` and `FormControl`

At the center of reactive forms are two important ideas.

### `FormControl`

A `FormControl` represents one field.

Examples:

- a name field
- an email field
- a notification preference

Each control holds:

- the current value
- whether it is valid
- whether it was touched
- whether it is dirty
- any validation errors

### `FormGroup`

A `FormGroup` is a collection of controls.

It lets Angular treat the whole form as one object while still keeping the fields separate.

This is important because many form decisions happen at the group level:

- can the form be submitted?
- should we show a group-level error?
- how do we read the entire value at once?

## Validation

Validation is one of the main reasons developers choose reactive forms.

This lesson likely includes:

- required fields
- field-level validation
- a custom cross-field validator

### Field-Level Validation

Field-level validation checks one control in isolation.

Examples:

- a field must not be empty
- an email must have a valid format
- a text input must be at least a certain length

### Cross-Field Validation

Cross-field validation checks whether multiple fields make sense together.

This is an important step up in complexity.

A form can have fields that are individually valid but still logically inconsistent when combined.

That is why Angular supports custom validators at the group level.

## Why Typed Forms Matter

This lesson also introduces typed reactive forms.

That means TypeScript helps describe the shape of the form values.

This gives you better safety because:

- you know what fields exist
- you know what types those values should be
- refactoring becomes easier

Typed forms are especially valuable as form complexity grows.

## The Workflow of a Reactive Form

A useful mental model is:

1. Build the form in TypeScript.
2. Connect the template to the form controls.
3. Let Angular track value and validation state.
4. Read the form state when needed.
5. Only submit when the form is valid.

That is much more controlled than manually reading DOM inputs.

## Why This Matters in Real Apps

Profile editors, checkout flows, settings panels, onboarding forms, and admin tools all depend on reliable form state.

If the form structure is weak, bugs appear quickly:

- inconsistent validation
- confusing error states
- duplicated logic in the template
- accidental bad submissions

Reactive forms help solve those problems by centralizing form logic in the component.

## What to Look For in This Lesson

When reading the code, focus on:

- where the form is created
- how controls are grouped
- where validators are attached
- how the custom validator works
- how the submit logic reads the form value

Do not just read the template. The TypeScript form setup is the real center of this lesson.

## Good Practice to Learn Here

This lesson teaches a discipline that matters later:

The form should describe the rules of the UI, not just collect input.

That means the form model should not be treated as an afterthought.

## Exercises

Try these after understanding the lesson:

1. Add one more field with its own validator.
2. Add a second cross-field rule.
3. Show a friendlier error message in the template.
4. Reset the form after a successful save.

## Before Moving On

Make sure you can explain:

- why reactive forms are useful
- the difference between a `FormControl` and a `FormGroup`
- why validation can happen at both field and group level
- why typed forms improve reliability

The next lesson moves away from forms and into services and dependency injection, which is another major Angular building block.
