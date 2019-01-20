import { h } from './h';
import { Component } from './component';
import { isString } from './is';

export class Confirm extends Component {

    constructor(options) {
        super(options);
        this.buttonCancel = isString(options.buttonCancel) ? options.buttonCancel : 'No';
        this.buttonConfirm = isString(options.buttonConfirm) ? options.buttonConfirm : 'Agree';
        this.injectTemplate();
        this.render();
    }

    injectTemplate() {

        const head = h('div', {class: 'head'}, [
            h('p', {class: 'title'}, [this.title])
        ]);

        this.port.appendChild(head);

        const innerContainer = h('div', {class: 'inner-container'}, [
            h('p', {class: 'content'}, [this.content])
        ]);

        innerContainer.appendChild(
            h('div', {class: 'buttons'}, [
                h('button', {class: 'cancel', click: () => {
                    this.close();
                    if (this.options.onCancel) {
                        this.options.onCancel(this);
                    }
                }}, [this.buttonCancel]),
                h('button', {class: 'confirm', click: () => {
                    this.close();
                    if (this.options.onConfirm) {
                        this.options.onConfirm(this);
                    }
                }}, [this.buttonConfirm])
            ])
        );

        this.port.appendChild(head);
        this.port.appendChild(innerContainer);
    }

};
