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

export default class OdsInputText extends LitElement {
  constructor() {
    super();

    this.closeSvg = this.getIconAsHtml(closelg);
    this.alertSvg = this.getIconAsHtml(alert);

    this.allowedInputTypes = ["text", "email"];

    // Default property values
    this.id = "input-element";
    this.label = "Input label";

    // Internal error state used in custom getter/setter
    this._error = null;
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

  set error(value) {
    // custom setter so we can re-validate on update
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

  focus() {
    this.inputElement.focus();
  }

  getIconAsHtml(icon) {
    let dom = new DOMParser().parseFromString(icon.svg, 'text/html');
    return dom.body.firstChild;
  }

  handleClickClear() {
    this.inputElement.value = "";
    this.value = "";
    this.validate();
  }

  handleInput(e) {
    this.value = e.target.value;

    if (this.hasBlurred) {
      this.validate();
    }
  }

  handleBlur() {
    this.hasBlurred = true;
    this.inputElement.scrollLeft = 0;
    this.validate();
  }

  validate() {
    /*
     * If the error property is set, then the error message should persist
     * and take precedence over client side validation
     */
    if (this.error && this.error.length > 0) {
      this.isValid = false;
      return;
    }

    this.isValid = this.inputElement.checkValidity();
    this.internalError = this.isValid ? null : this.inputElement.validationMessage;
  }

  getInputType(type) {
    if (this.allowedInputTypes.includes(type)) {
      return type;
    }
    return "text";
  }

  getErrorMessage() {
    if (this.error) {
      return this.error;
    }
    if (this.customValidationMessage) {
      return this.customValidationMessage;
    }
    return this.internalError;
  }

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
      />

      ${this.required ?
        html`<label for=${this.id} class="inputText-label ${this.getDisabledClass()}">${this.label}</label>` :
        html`<label for=${this.id} class="inputText-label ${this.getDisabledClass()}">${this.label} (optional)</label>`
      }

      ${!this.isValid ?
        html`
          <p class="inputText-helpText error" aria-live="polite">${this.getErrorMessage()}</p>
          <div class="iconContainer">
            <div class="inputText-icon alertIcon">
              ${this.alertSvg}
            </div>
          </div>` :
        html`
          <p class="inputText-helpText ${this.getDisabledClass()}" aria-live="polite">${this.helpText}</p>
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

// define the name of the custom component
customElements.define("ods-inputtext", OdsInputText);
