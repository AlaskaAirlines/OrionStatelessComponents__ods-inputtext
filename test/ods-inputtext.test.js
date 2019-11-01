import { fixture, html, expect } from '@open-wc/testing';
 
import '../src/ods-inputtext.js';
 
describe('ods-inputtext', () => {
  it('renders the label', async () => {
    const el = await fixture(html`
      <ods-inputtext label="First name"></ods-inputtext>
    `);
 
    const root = el.shadowRoot;
    const label = root.querySelector('label');
    expect(label.textContent).to.equal('First name (optional)');
  });
 
  it('sets value on the input', async () => {
    const el = await fixture(html`
      <ods-inputtext value="other value" label="First name"></ods-inputtext>
    `);
 
    const input = el.shadowRoot.querySelector('input');
    expect(input.value).to.equal('other value');
  });
 
  it('clears the value when clicked', async () => {
    const el = await fixture(html`
      <ods-inputtext value="other value" label="First name"></ods-inputtext>
    `);
 
    const clearButton = el.shadowRoot.querySelector('button');
    clearButton.click();
    expect(el.value).to.equal('');
  });
});