import { isString } from './is';

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

        this.container = null;

        this.port = null;
    }

    render(container = document.body) {
        container.appendChild(this.template);
    }

    close() {

        if (options.beforeClose) {
            options.beforeClose(this);
        }
        this.container.parentElement.removeChild(this.container);
        if (options.afterClose) {
            options.beforeClose(this);
        }
    }

}
