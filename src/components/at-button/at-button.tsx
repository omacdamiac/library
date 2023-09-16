import { Component, Prop, h, Host } from '@stencil/core';

@Component({
  tag: 'at-button',
  styleUrl: 'at-button.scss',
  shadow: true,
})
export class AtButton {
  @Prop() text: string;
  @Prop() color: string;
  // @Event() valueChanged: EventEmitter;

  // changed(event: any) {
  //   this.valueChanged.emit(event.target.value);
  //   console.log(event)
  //   // console.log(event.target.value)
  // }

  render() {
    // return <button class={this.color} onClick={(event) => this.changed(event)}>{this.text}</button>;
    return (
      <Host>
        <button class={this.color}>{this.text}</button>
      </Host>)
    // return (
    //   <Host>
    //     <slot></slot>
    //   </Host>
    // );
  }

}
