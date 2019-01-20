import { h } from './h';
import { Component } from './component';
import { isString } from './is';

export class Prompt extends Component {

    constructor(options) {
        super(options);
        this.submitText = isString(options.submitText) ? options.submitText : 'Send';
        this.placeholderText = isString(options.placeholderText) ? options.placeholderText : 'Type';
        this.injectTemplate();
        this.render();
    }

    handleInput(e, el) {
        if (e.key === 'Enter' || e.keyCode === 13) {
            this.submit();
        }
    }

    submit() {
        const value = this.input.value;

        if (value === '') {
            return;
        }

        this.close();

        if (this.options.onSubmit) {
            this.options.onSubmit(this, value);
        }
    }

    injectTemplate() {

        const head = h('div', {class: 'head'}, [
            h('p', {class: 'title'}, [this.title])
        ]);

        this.port.appendChild(head);

        this.input = h('input', {type: 'text', class: 'input', placeholder: this.placeholderText, keyup: (e, el) => {
            this.handleInput(e, el);
        }});

        const inputRow = h('div', {class: 'prompt-elements'}, [
            this.input,
            h('button', {class: 'button', click: () => {
                this.submit();
            }}, [this.submitText])
        ]);


        const innerContainer = h('div', {class: 'inner-container'}, [
            h('p', {class: 'content'}, [this.content]),
            inputRow
        ]);

        this.port.appendChild(head);
        this.port.appendChild(innerContainer);
    }

};
