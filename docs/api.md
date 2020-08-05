# ods-inputtext

InputText provides users a way to enter data into a form.

## Properties

| Property                  | Attribute                 | Type         | Default                     | Description                                      |
|---------------------------|---------------------------|--------------|-----------------------------|--------------------------------------------------|
| `alertSvg`                |                           | `any \| any` |                             | Value is SVG for use                             |
| `allowedInputTypes`       |                           | `string[]`   | ["text","email","password"] | Set input type for element                       |
| `closeSvg`                |                           | `any \| any` |                             | Value is SVG for use                             |
| `customValidationMessage` | `customValidationMessage` | `String`     |                             | Overrides the browser validation message when the input is invalid. |
| `disabled`                | `disabled`                | `Boolean`    |                             | If set, disables the input.                      |
| `error`                   | `error`                   | `String`     |                             | Sets a persistent error message (e.g. an error message returned from the server). |
| `helpText`                | `helpText`                | `String`     |                             | Sets the help text displayed below the input.    |
| `id`                      | `id`                      | `String`     |                             | Sets the unique ID of the element.               |
| `isValid`                 | `isValid`                 | `Boolean`    |                             | Can be accessed to determine if the input is in an error state or not. Not intended to be set by the consumer. |
| `label`                   | `label`                   | `String`     |                             | Sets the label text for the input.               |
| `name`                    | `name`                    | `String`     |                             | Populates the `name` attribute on the input.     |
| `required`                | `required`                | `Boolean`    |                             | Populates the `required` attribute on the input. Used for client-side validation. |
| `type`                    | `type`                    | `String`     |                             | Populates the `type` attribute on the input. Allowed values are `password`, `email` or `text`. If given value is not allowed or set, defaults to `text`. |
| `uniqueID`                |                           | `string`     |                             | Value is unique ID set at runtime                |
| `value`                   | `value`                   | `String`     |                             | Populates the `value` attribute on the input. Can also be read to retrieve the current value of the input. |

## Methods

| Method             | Type                             | Description                                      |
|--------------------|----------------------------------|--------------------------------------------------|
| `getDisabledClass` | `(): "is-disabled" \| ""`        | Custom function to apply disabled CSS class      |
| `getErrorMessage`  | `(): any`                        | Evaluates different error type messages          |
| `getIconAsHtml`    | `(icon: any): ChildNode \| null` | Parse imported CVG object data to string for HTML use |
| `getInputType`     | `(type: any): any`               | Iterates over allowed input types                |
| `handleBlur`       | `(): void`                       | Ensures that the element is always to the left on blur |
| `handleClickClear` | `(): void`                       | Clears data entered into the input element       |
| `handleInput`      | `(e: any): void`                 | Validates value of the input in blur             |
| `validate`         | `(): void`                       | If the error property is set, then the error message should persist<br />and take precedence over client side validation |
