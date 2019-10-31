// Copyright (c) Alaska Air. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

import { LitElement, html } from "lit-element";
import { classMap } from 'lit-html/directives/class-map.js';

import "focus-visible/dist/focus-visible.min.js";
import componentProperties from "./tokens/componentShapeProperties-css.js";
import styleCss from "./style-css.js";
import iconProperties from '@alaskaairux/orion-icons/dist/tokens/CSSTokenProperties-css.js';
import closelg from '@alaskaairux/orion-icons/dist/icons/closelg_es6.js';
import alert from '@alaskaairux/orion-icons/dist/icons/alert_es6.js';

class OdsInputText extends LitElement {
  constructor() {
    super();
    this.closeSvg = this.getIconAsHtml(closelg);
    this.alertSvg = this.getIconAsHtml(alert);
    this.label = "Input Label";
    this.value = "";
  }

  static get properties() {
    return {
      value: { type: String },
      required: { type: Boolean },
      label: { type: String },
      helpText: { type: String },
      error: { type: String },
      isValid: { type: Boolean }
    };
  }

  connectedCallback() {
    super.connectedCallback();
    this.isValid = !this.error;
  }

  firstUpdated() {
    this.inputElement = this.shadowRoot.getElementById('input-element');
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

    this.validate();
  }

  validate() {
    /*
     * If the error property is set, then the error message should persist
     * and take precedence over client side validation
     */  
    if (this.error) {
      return;
    }

    this.isValid = this.inputElement.checkValidity();
    this.internalError = this.isValid ? null : this.inputElement.validationMessage;
  }


  render() {
    this.inputClasses = {
      "inputText": true,
      "inputText--filled": this.value,
      "error": !this.isValid
    };

    return html`
      ${componentProperties}
      ${styleCss}
      ${iconProperties}

      <input 
        @input="${this.handleInput}"
        @blur="${this.validate}"
        value="${this.value}" 
        id="input-element" 
        type="text" 
        ?required="${this.required}" 
        class="${classMap(this.inputClasses)}" 
      />
      
      ${this.required ?
        html`<label class="inputText-label">${this.label}</label>` :
        html`<label class="inputText-label">${this.label} (optional)</label>`
      }

      ${!this.isValid ?
        html`
          <p class="inputText-errorText">${this.error || this.internalError}</p>
          <div class="inputText-icon alertIcon">
            ${this.alertSvg}
          </div>` :
        html`
          <p class="inputText-helpText">${this.helpText}</p>
          <button
            tabindex="-1"
            @click="${this.handleClickClear}"
            class="inputText-icon iconButton">
            ${this.closeSvg}
          </button>`
      }
    `;
  }
}

// define the name of the custom component
customElements.define("ods-inputtext", OdsInputText);
