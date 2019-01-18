import { isString } from './is';

export class Component {
    constructor(title, content, options) {

        if (isString(title)) {
            this.title = title;
        }

        if (isString(content)){
            this.content = content;
        }

        this.options = options;

        this.container = null;

        this.port = null;
    }

    render(container = document.body) {
        container.appendChild(this.template);
    }

}
