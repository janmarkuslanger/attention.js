import { h } from './h';
import { Component } from './component';
import { close as closeIcon } from './constants';

export class Alert extends Component {

    constructor(options) {
        super(options);
        this.template = this.renderTemplate();
        this.render();
    }

    renderTemplate() {
        this.container = h('div', {class: 'attention-alert'});
        this.port = h('div', {class: 'inner'});

        const close = h('div', {class: 'close', click: () => {
            this.close();
        }});
        close.innerHTML = closeIcon;

        this.port.appendChild(
            close
        );

        const content = h('div', {class: 'content'}, [
            h('p', null, [this.title]),
            h('p', null, [this.content])
        ]);

        this.port.appendChild(
            content
        );

        this.container.appendChild(this.port);

        return this.container;
    }

};
