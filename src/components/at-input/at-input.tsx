import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'at-input',
  styleUrl: 'at-input.scss',
  shadow: true,
})
export class AtInput {
  @Prop() text: string;
  @Prop() name: string;
  @Prop() required: string;
  formControlName: string;
  render() {
    return (
      <Host>
        {/* <slot></slot> */}
        <label htmlFor={this.name}>{this.text}</label>
        <input name={this.name} id={this.name} type="text"/>
      </Host>
    );
  }

}
