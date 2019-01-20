import { h } from './h';
import { Component } from './component';

export class Alert extends Component {

    constructor(options) {
        super(options);
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

        this.port.appendChild(head);
        this.port.appendChild(innerContainer);
    }

};
