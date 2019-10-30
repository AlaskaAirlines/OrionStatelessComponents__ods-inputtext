// Copyright (c) Alaska Air. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

import { LitElement, html } from "lit-element";

import "focus-visible/dist/focus-visible.min.js";
import componentProperties from "./tokens/componentShapeProperties-css.js";
import styleCss from "./style-css.js";
import iconProperties from '@alaskaairux/orion-icons/dist/tokens/CSSTokenProperties-css.js';
import closelg from '@alaskaairux/orion-icons/dist/icons/closelg_es6.js';

class OdsInputtext extends LitElement {
  constructor() {
    super();
    this.dom = new DOMParser().parseFromString(closelg.svg, 'text/html');
    this.closesvg = this.dom.body.firstChild;
  }

  // function to define props used within the scope of thie component
  static get properties() {
    return {
      cssClass: { type: String },
    };
  }

  handleClickClear(e) {
    this.shadowRoot.getElementById('input-element').value = "";
  }

  // function that renders the HTML and CSS into  the scope of the component
  render() {
    return html`
      ${componentProperties}
      ${styleCss}
      ${iconProperties}

      <input id="input-element" type="text" required class="ods-inputText" />
      
      <label class="ods-inputText--label">The label:</label>
      <label class="ods-inputText--helpText">Help text</label>

      <button
        @click="${this.handleClickClear}"
        class="ods-inputText--icon">
        ${this.closesvg}
      </button>
    `;
  }
}

// define the name of the custom component
customElements.define("ods-inputtext", OdsInputtext);
