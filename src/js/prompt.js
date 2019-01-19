import { h } from './h';
import { Component } from './component';
import { close as closeIcon } from './constants';

export class Prompt extends Component {

    constructor(options) {
        super(options);
        this.template = this.renderTemplate();
        this.render();
    }

    renderTemplate() {

        const close = h('div', {class: 'close', click: () => {
            this.close();
        }});
        close.innerHTML = closeIcon;

        this.port = h('div', {class: 'port'});

        this.port.appendChild(h('p', {class: 'title'}, [this.title]));
        this.port.appendChild(h('p', {class: 'content'}, [this.content]));

        let style;

        if (this.animation === 'fade') {
            style = 'opacity:0;';
        } else {
            style = '';
        }

        this.container = h('div', {class: 'attention-alert attention-component', style: style}, [
            h('div', {class: 'inner'}, [
                h('div', {class: 'content'}, [
                    close,
                    this.port
                ])
            ])
        ]);

        return this.container;
    }

};
