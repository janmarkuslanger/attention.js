import { h } from './h';
import { Component } from './component';

export class Alert extends Component {

    constructor(title, content, options) {
        super(title, content, options);
        this.template = this.renderTemplate();
        this.render();
    }

    renderTemplate() {
        this.container = h('div', {class: 'attention-alert'});
        this.port = h('div', {class: 'inner'});

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
