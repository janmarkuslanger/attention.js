import { isString } from './is';

export class Component {
    constructor(options) {
        this.options = options;

        if (isString(options.title)) {
            this.title = options.title;
        }

        if (isString(options.content)){
            this.content = options.content;
        }

        this.container = null;

        this.port = null;
    }

    render(container = document.body) {
        container.appendChild(this.template);
    }

    close() {
        this.container.parentElement.removeChild(this.container);
    }

}
