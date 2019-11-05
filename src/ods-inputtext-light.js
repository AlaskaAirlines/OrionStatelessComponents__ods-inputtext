// Copyright (c) Alaska Air. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

import OdsInputText from "./ods-inputtext.js";

class OdsInputTextLight extends OdsInputText {
  createRenderRoot() {
    return this;
  }
}

// define the name of the custom component
customElements.define("ods-inputtext-light", OdsInputTextLight);
