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
  }

  getIconAsHtml(icon) {
    let dom = new DOMParser().parseFromString(icon.svg, 'text/html');
    return dom.body.firstChild;
  }

  static get properties() {
    return {
      value: { type: String },
      error: { type: String }
    };
  }

  handleClickClear() {
    this.shadowRoot.getElementById('input-element').value = "";
    this.value = "";
  }

  handleInput(e) {
    this.value = e.target.value;    
  }

  render() {
    this.inputClasses = { 
      "inputText": true, 
      "inputText--filled": this.value,
      "error": this.error
    };

    return html`
      ${componentProperties}
      ${styleCss}
      ${iconProperties}

      <input 
        @input="${this.handleInput}"
        value="${this.value}" 
        id="input-element" 
        type="text" 
        required 
        class="${classMap(this.inputClasses)}" 
      />
      
      <label class="inputText-label">The label:</label>      

      ${this.error ? 
        html`
          <p class="inputText-errorText">${this.error}</p>
          <div class="inputText-icon alertIcon">
            ${this.alertSvg}
          </div>` :
        html`
          <p class="inputText-helpText">Help text</p>
          <button
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
