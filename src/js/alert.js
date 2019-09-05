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

        let innerContainer;

        if (this.useInnerHTML) {
          const content = h('div', {class: 'content'});
          content.innerHTML = this.content;

          innerContainer = h('div', {class: 'inner-container'}, [
            content
          ]);

        } else {
          innerContainer = h('div', {class: 'inner-container'}, [
              h('p', {class: 'content'}, [this.content])
          ]);
        }

        this.port.appendChild(head);
        this.port.appendChild(innerContainer);
    }

};
