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

class OdsInputText extends LitElement {
  constructor() {
    super();
    this.dom = new DOMParser().parseFromString(closelg.svg, 'text/html');
    this.closesvg = this.dom.body.firstChild;
  }

  connectedCallback() {
    super.connectedCallback()
    this.inputClasses = { "inputText": true, "inputText--filled": this.value !== undefined };
  }  

  static get properties() {
    return {
      value: { type: String },
    };
  }

  handleClickClear() {
    this.shadowRoot.getElementById('input-element').value = "";
    this.value = "";
    this.updateFilledClass(false);
  }

  handleInput(e) {
    this.value = e.target.value;    
  }

  handleChange(e) {
    let isFilled = !!e.target.value;
    this.updateFilledClass(isFilled);
  }

  updateFilledClass(isFilled) {
    this.inputClasses = { ...this.inputClasses, "inputText--filled": isFilled };      
    this.requestUpdate();
  }

  render() {
    return html`
      ${componentProperties}
      ${styleCss}
      ${iconProperties}

      <input 
        @input="${this.handleInput}" 
        @change="${this.handleChange}"
        value="${this.value}" 
        id="input-element" 
        type="text" 
        required 
        class="${classMap(this.inputClasses)}" 
      />
      
      <label class="inputText-label">The label:</label>
      <label class="inputText-helpText">Help text</label>

      <button
        @click="${this.handleClickClear}"
        class="inputText-icon">
        ${this.closesvg}
      </button>
    `;
  }
}

// define the name of the custom component
customElements.define("ods-inputtext", OdsInputText);
