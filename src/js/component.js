import { isString } from './is';
import { fadeIn, fadeOut } from './animations';

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
            this.options.beforeClose(this);
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
