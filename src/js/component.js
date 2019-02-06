import { h } from './h';
import { isString } from './is';
import { fadeIn, fadeOut } from './animations';
import { close as closeIcon } from './constants';

export class Component {
    constructor(options) {
        this.options = options;

        if (!options.title || !options.content) {
            return;
        }

        if (isString(options.title)) {
            this.title = options.title;
        }

        if (isString(options.content)){
            this.content = options.content;
        }

        if (options.animation && (typeof options.animation === 'boolean' || isString(options.animation))) {
            this.animation = options.animation;
        } else {
            this.animation = 'fade';
        }

        this.port = null;

        this.template = this.createBase();
    }

    createBase() {
        const close = h('div', {class: 'close', click: () => {
            this.close();
        }});
        close.innerHTML = closeIcon;

        this.port = h('div', {class: 'port'});

        let style;

        if (this.animation === 'fade') {
            style = 'opacity:0;';
        } else {
            style = '';
        }

        this.container = h('div', {class: 'attention-component', style: style}, [
            h('div', {class: 'inner'}, [
                h('div', {class: 'content'}, [
                    close,
                    this.port
                ])
            ])
        ]);

        return this.container;
    }

    render(container = document.body) {
        if (this.options.beforeRender) {
            this.options.beforeRender(this);
        }

        container.appendChild(this.template);

        if (this.options.afterRender) {
            this.options.afterRender(this);
        }

        if (this.animation === 'fade') {
            fadeIn(this.template);

        }
    }

    destroy() {
        this.container.parentElement.removeChild(this.container);

        if (this.options.afterClose) {
            this.options.afterClose(this);
        }
    }

    close() {

        if (this.options.beforeClose) {
            this.options.beforeClose(this);
        }

        if (!this.animation) {
            this.destroy();
        } else if (this.animation === 'fade') {
            fadeOut(this.container, () => {
                this.destroy();
            })
        }

    }

}
