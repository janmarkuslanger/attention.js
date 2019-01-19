# attention.js

A vanilla js library for creating stylish alerts, prompts and confirms.

## Install
 
Install attention.js is quit easy.

### 

## Usage

### Alert

**Alert(title <string>, content <string>, options <object>)**

``` javascript

    import { Alert } from 'attention';

    new Alert('This is a Title', 'This is my content', {
        onRender(component, element) {
            // do something
        }
    })

```

### Confirm

**Confirm(title <string>, content <string>, options <object>)**

``` javascript

    import { Confirm } from 'attention';

    new Confirm('This is a Title', 'This is my content', {
        onRender(component, element) {
            // do something
        },
        onAccept(component, element) {
            // do something
        },
        onCancel(component, element) {

        }
    })

```

### Prompt

**Prompt(title <string>, content <string>, options <object>)**

``` javascript

    import { Prompt } from 'attention';

    new Prompt('This is a Title', 'This is my content', {
        onRender(component, element) {
            // do something
        },
        onInput(component, element) {

        }
    })

```
