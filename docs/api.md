# ods-inputtext-light

## Properties

| Property                  | Attribute                 | Type         | Default                     |
|---------------------------|---------------------------|--------------|-----------------------------|
| `alertSvg`                |                           | `any \| any` |                             |
| `allowedInputTypes`       |                           | `string[]`   | ["text","email","password"] |
| `closeSvg`                |                           | `any \| any` |                             |
| `customValidationMessage` | `customValidationMessage` | `string`     |                             |
| `disabled`                | `disabled`                | `boolean`    |                             |
| `error`                   | `error`                   | `string`     |                             |
| `helpText`                | `helpText`                | `string`     |                             |
| `id`                      | `id`                      | `string`     |                             |
| `isValid`                 | `isValid`                 | `boolean`    |                             |
| `label`                   | `label`                   | `string`     |                             |
| `name`                    | `name`                    | `string`     |                             |
| `required`                | `required`                | `boolean`    |                             |
| `type`                    | `type`                    | `string`     |                             |
| `uniqueID`                |                           | `string`     |                             |
| `value`                   | `value`                   | `string`     |                             |

## Methods

| Method             | Type                             |
|--------------------|----------------------------------|
| `createRenderRoot` | `(): this`                       |
| `focus`            | `(): void`                       |
| `getDisabledClass` | `(): "is-disabled" \| ""`        |
| `getErrorMessage`  | `(): any`                        |
| `getIconAsHtml`    | `(icon: any): ChildNode \| null` |
| `getInputType`     | `(type: any): any`               |
| `handleBlur`       | `(): void`                       |
| `handleClickClear` | `(): void`                       |
| `handleInput`      | `(e: any): void`                 |
| `validate`         | `(): void`                       |


# ods-inputtext

## Properties

| Property                  | Attribute                 | Type         | Default                     |
|---------------------------|---------------------------|--------------|-----------------------------|
| `alertSvg`                |                           | `any \| any` |                             |
| `allowedInputTypes`       |                           | `string[]`   | ["text","email","password"] |
| `closeSvg`                |                           | `any \| any` |                             |
| `customValidationMessage` | `customValidationMessage` | `string`     |                             |
| `disabled`                | `disabled`                | `boolean`    |                             |
| `error`                   | `error`                   | `string`     |                             |
| `helpText`                | `helpText`                | `string`     |                             |
| `id`                      | `id`                      | `string`     |                             |
| `isValid`                 | `isValid`                 | `boolean`    |                             |
| `label`                   | `label`                   | `string`     |                             |
| `name`                    | `name`                    | `string`     |                             |
| `required`                | `required`                | `boolean`    |                             |
| `type`                    | `type`                    | `string`     |                             |
| `uniqueID`                |                           | `string`     |                             |
| `value`                   | `value`                   | `string`     |                             |

## Methods

| Method             | Type                             |
|--------------------|----------------------------------|
| `focus`            | `(): void`                       |
| `getDisabledClass` | `(): "is-disabled" \| ""`        |
| `getErrorMessage`  | `(): any`                        |
| `getIconAsHtml`    | `(icon: any): ChildNode \| null` |
| `getInputType`     | `(type: any): any`               |
| `handleBlur`       | `(): void`                       |
| `handleClickClear` | `(): void`                       |
| `handleInput`      | `(e: any): void`                 |
| `validate`         | `(): void`                       |
