[![Build Status](https://travis-ci.org/AlaskaAirlines/ods-inputtext.svg?branch=master)](https://travis-ci.org/AlaskaAirlines/ods-inputtext)
![npm (scoped)](https://img.shields.io/npm/v/@alaskaairux/ods-inputtext.svg?color=orange)
![NPM](https://img.shields.io/npm/l/@alaskaairux/ods-inputtext.svg?color=blue)

# \<ods-inputtext>

`<ods-inputtext>` is a wrapper component containing styling and behavior for a HTML `<input>` element and associated `<label>`. You can pass helper text to be displayed with the input. It will also perform client-side validation of the input and display any resulting errors.

## Docs

All information regarding Project Setup, Technical Details, Tests and information regarding ODS Stateless Components can be found in the [docs](https://github.com/AlaskaAirlines/auro_docs/tree/master/src) project repository.

## UI development browser support

For the most up to date information on UI development browser support, see [docs/BROWSER_SUPPORT.md](https://github.com/AlaskaAirlines/auro_docs/blob/master/src/BROWSER_SUPPORT.md)

## Install

```shell
$ npm i @alaskaairux/ods-inputtext
```

Installing as a direct, dev or peer dependency is up to the user installing the package. If you are unsure as to what type of dependency you should use, consider reading this [stack overflow](https://stackoverflow.com/questions/18875674/whats-the-difference-between-dependencies-devdependencies-and-peerdependencies) answer.

### Design Token CSS Custom Property dependency

The use of any ODS custom element has a dependency on the [ODS Design Tokens](https://github.com/AlaskaAirlines/OrionDesignTokens). There are two options for including the necessary tokens. Choosing between Sass or CSS is specifically an option for how it is imported into the project. The content of the files are the same. 

| file | syntax | variable type | description |
|---|---|---|---|
| CSSCustomProperties.css | CSS | css custom property | full array of Auro Design Tokens |
| SassCustomProperties.scss | Sass | css custom property | full array of Auro Design Tokens |
| CSSSizeCustomProperties.css | CSS | css custom property | sub-set of Auro Design Tokens, filtered on size |
| SassSizeCustomProperties.scss | Sass | css custom property | sub-set of Auro Design Tokens, filtered on size |

For additional details in regards to using Orion Design Tokens with components, please see [docs/TECH_DETAILS.md](https://github.com/AlaskaAirlines/auro_docs/blob/master/src/TECH_DETAILS.md)

### CSS Custom Property fallbacks

[CSS custom properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) are [not supported](https://github.com/AlaskaAirlines/OrionStatelessComponents__docs/blob/master/src/CUSTOM_PROPERTIES.md) in older browsers. For this, fallback properties are pre-generated and included with the npm.

Any update to the Orion Design Tokens will be immediately reflected with browsers that support CSS custom properties, legacy browsers will require updated components with pre-generated fallback properties.

### Define dependency in project component

Defining the component dependency within each component that is using the \<ods-inputtext> component.

```javascript
import "@alaskaairux/ods-inputtext";
```

**Reference component in HTML**

```html
<ods-inputtext label="First name" required></ods-inputtext>
```

## inputtext use cases

The `<ods-inputtext>` element should be used in situations where users may:

* enter a single line of text into a form
* enter their email into a form

## Properties:

| Attribute | Value type | Description |
|----|----|----|
| customValidationMessage | string | Overrides the browser validation message when the input is invalid.  |
| disabled | boolean | If set, disables the input. |
| error | string | Sets a persistent error message (e.g. an error message returned from the server). |
| helpText | string | Sets the help text displayed below the input. |
| isValid | boolean | Can be accessed to determine if the input is in an error state or not. Not intended to be set by the consumer. |
| label | string | Sets the label text for the input. |
| name | string | Populates the `name` attribute on the input. |
| required | boolean | Populates the `required` attribute on the input. Used for client-side validation. |
| type | string | Populates the `type` attribute on the input. Allowed values are `email` or `text`. If given value is not allowed or set, defaults to `text`. |
| value | string | Populates the `value` attribute on the input. Can also be read to retrieve the current value of the input. |

## API Code Examples

### Required input with label and help text
```html
<ods-inputtext label="First name" helptext="Enter your first name" required></ods-inputtext>
```

### Required input with label and value
```html
<ods-inputtext label="First name" value="Alaska" required></ods-inputtext>
```

### Optional input with label
```html
<ods-inputtext label="First name"></ods-inputtext>
```

### Required email input
```html
<ods-inputtext type="email" label="Email" required></ods-inputtext>
```

### Disabled input
```html
<ods-inputtext label="First name" disabled required></ods-inputtext>
```

### Input with persistent error
```html
<ods-inputtext label="First name" value="Alaska" error="This name already exists" required></ods-inputtext>
```

## Development

In order to develop against this project, if you are not part of the core team, you will be required to fork the project prior to submitting a pull request.

Please be sure to review the [contribution guidelines](https://github.com/AlaskaAirlines/auro_docs/blob/master/src/CONTRIBUTING.md) for this project. Please make sure to **pay special attention** to the [conventional commits](https://github.com/AlaskaAirlines/auro_docs/blob/master/src/CONTRIBUTING.md#conventional-commits) section of the document.

### Start development environment

Once the project has been cloned to your local resource and you have installed all the dependencies you will need to open three different shell sessions. One is for the **Gulp tasks**, the second is for a series of **npm tasks** and the last is to run the **Polymer server**.

**Peer dependency:** Please make sure Polymer is installed globally in order to run the Polymer server. See [ODS Web Component Development Details](https://github.com/AlaskaAirlines/auro_docs/blob/master/src/TECH_DETAILS.md) for more information.

```bash
$ npm i polymer-cli
```

```shell
// shell terminal one
$ gulp dev

// shell terminal two
$ npm run dev

// shell terminal three
polymer serve
```

### Testing
Automated tests are required for every Orion component. See `.\test\ods-inputtext.test.js` for the tests for this component. Run `npm test` to run the tests and check code coverage. Tests must pass and meet a certain coverage threshold to commit. See [the testing documentation](https://github.com/AlaskaAirlines/auro_docs/blob/master/src/TESTS.md) for more details. 

##
<footer>
Alaska Airlines Orion Design System<br>
Copyright 2019 Alaska Airlines, Inc. or its affiliates. All Rights Reserved.
</footer>
