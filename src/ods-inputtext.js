// Copyright (c) Alaska Air. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

import { LitElement, html } from "lit-element";
import { classMap } from 'lit-html/directives/class-map.js';
import { ifDefined } from 'lit-html/directives/if-defined.js';

import "focus-visible/dist/focus-visible.min.js";
import styleCss from "./style-css.js";
import closelg from '@alaskaairux/icons/dist/icons/interface/x-lg_es6.js';
import alert from '@alaskaairux/icons/dist/icons/alert/error_es6.js';

/**
 * InputText provides users a way to enter data into a form.
 *
 * @attr {String} customValidationMessage - Overrides the browser validation message when the input is invalid.
 * @attr {String} error - Sets a persistent error message (e.g. an error message returned from the server).
 * @attr {String} helpText - Sets the help text displayed below the input.
 * @attr {String} id - Sets the unique ID of the element.
 * @attr {String} label - Sets the label text for the input.
 * @attr {String} name - Populates the `name` attribute on the input.
 * @attr {String} type - Populates the `type` attribute on the input. Allowed values are `password`, `email` or `text`. If given value is not allowed or set, defaults to `text`.
 * @attr {String} value - Populates the `value` attribute on the input. Can also be read to retrieve the current value of the input.
 * @attr {Boolean} disabled - If set, disables the input.
 * @attr {Boolean} isValid - Can be accessed to determine if the input is in an error state or not. Not intended to be set by the consumer.
 * @attr {Boolean} required - Populates the `required` attribute on the input. Used for client-side validation.
 */

export default class OdsInputText extends LitElement {
  constructor() {
    super();

    /**
     * Value is SVG for use
     */
    this.closeSvg = this.getIconAsHtml(closelg);
    /**
     * Value is SVG for use
     */
    this.alertSvg = this.getIconAsHtml(alert);

    /**
     * Set input type for element
     */
    this.allowedInputTypes = ["text", "email", "password"];

    /**
     * Internal error state used in custom getter/setter
     */
    this._error = null;

    /**
     * Value is unique ID set at runtime
     */
    this.uniqueID = Math.random().toString(36).substring(2, 8);
  }

  static get properties() {
    return {
      customValidationMessage: { type: String },
      error:                   { type: String },
      helpText:                { type: String },
      id:                      { type: String },
      label:                   { type: String },
      name:                    { type: String },
      type:                    { type: String },
      value:                   { type: String },
      disabled:                { type: Boolean },
      isValid:                 { type: Boolean },
      required:                { type: Boolean }
    };
  }


  /**
   * custom setter so we can re-validate on update
   */
  set error(value) {
    let oldVal = this._error;
    this._error = value;
    this.requestUpdate('error', oldVal).then(this.validate.bind(this));
  }

  get error() {
    return this._error;
  }

  connectedCallback() {
    super.connectedCallback();
    this.isValid = !this.error;
  }

  firstUpdated() {
    this.inputElement = this.renderRoot.querySelector('input');
  }

  /**
   * Custom function to ensure that element is programmatically focusable
   */
  focus() {
    this.inputElement.focus();
  }

  /**
   * Parse imported CVG object data to string for HTML use
   */
  getIconAsHtml(icon) {
    let dom = new DOMParser().parseFromString(icon.svg, 'text/html');
    return dom.body.firstChild;
  }

  /**
   * Clears data entered into the input element
   */
  handleClickClear() {
    this.inputElement.value = "";
    this.value = "";
    this.validate();
  }

  /**
   * Validates value of the input in blur
   */
  handleInput(e) {
    this.value = e.target.value;

    if (this.hasBlurred) {
      this.validate();
    }
  }

  /**
   * Ensures that the element is always to the left on blur
   */
  handleBlur() {
    this.hasBlurred = true;
    this.inputElement.scrollLeft = 100;
    this.validate();
  }

  /**
    * If the error property is set, then the error message should persist
    * and take precedence over client side validation
    */
  validate() {

    if (this.error && this.error.length > 0) {
      this.isValid = false;
      return;
    }

    this.isValid = this.inputElement.checkValidity();
    this.internalError = this.isValid ? null : this.inputElement.validationMessage;
  }

  /**
    * Iterates over allowed input types
    */
  getInputType(type) {
    if (this.allowedInputTypes.includes(type)) {
      return type;
    }
    return "text";
  }

  /**
    * Evaluates different error type messages
    */
  getErrorMessage() {
    if (this.error) {
      return this.error;
    }
    if (this.customValidationMessage) {
      return this.customValidationMessage;
    }
    return this.internalError;
  }

  /**
    * Custom function to apply disabled CSS class
    */
  getDisabledClass() {
    return this.disabled ? "is-disabled" : "";
  }

  render() {
    this.inputClasses = {
      "inputText": true,
      "inputText--filled": this.value,
      "error": !this.isValid
    };

    return html`
      ${styleCss}

      <input
        @input="${this.handleInput}"
        @blur="${this.handleBlur}"
        class="${classMap(this.inputClasses)}"
        id="${this.id}"
        name="${ifDefined(this.name)}"
        type="${this.getInputType(this.type)}"
        ?required="${this.required}"
        ?disabled="${this.disabled}"
        .value="${ifDefined(this.value)}"
        aria-describedby="${this.uniqueID}"
      />

      ${this.required ?
        html`<label for=${this.id} class="inputText-label ${this.getDisabledClass()}">${this.label}</label>` :
        html`<label for=${this.id} class="inputText-label ${this.getDisabledClass()}">${this.label} (optional)</label>`
      }

      ${!this.isValid ?
        html`
          <p class="inputText-helpText error" role="alert" aria-live="assertive">${this.getErrorMessage()}</p>
          <div class="iconContainer">
            <div class="inputText-icon alertIcon">
              ${this.alertSvg}
            </div>
          </div>` :
        html`
          <p id="${this.uniqueID}" class="inputText-helpText ${this.getDisabledClass()}">${this.helpText}</p>
          <div class="iconContainer">
            <button
              @click="${this.handleClickClear}"
              aria-hidden="true"
              class="inputText-icon iconButton"
              tabindex="-1">
              ${this.closeSvg}
            </button>
          </div>`
      }
    `;
  }
}

/* istanbul ignore else */
// define the name of the custom component
if (!customElements.get("ods-inputtext")) {
  customElements.define("ods-inputtext", OdsInputText);
}
