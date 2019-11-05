import { fixture, html, expect } from '@open-wc/testing';
import '../src/ods-inputtext-light.js';
 
describe('ods-inputtext-light', () => {
  it('does not have a shadow root', async () => {
    const el = await fixture(html`
      <ods-inputtext-light label="First name"></ods-inputtext>
    `);
 
    expect(el.shadowRoot).to.be.null;
  });

  // it('does not have :host selectors in css', async () => {
  //   const el = await fixture(html`
  //     <ods-inputtext-light label="First name"></ods-inputtext>
  //   `);
 
  //   expect(el.innerHTML).not.to.contain(':host');
  // });
});