# attention.js

A vanilla js library for creating stylish alerts, prompts and confirms.

## Install

Install attention.js is quit easy.

### npm

``` npm
$ npm install attention --save-dec
```

### script

Just include the script `dist/attention.js` into your project and put the script before the closing body tag.

``` html
test
```



## Usage

### Alert

**Alert(config <object>)**

``` javascript

    import { Alert } from 'attention';

    new Alert({
        title: 'This is a Title',
        content: 'This is my content'
    });

```

### Confirm

**Confirm(config <object>)**

``` javascript

    import { Confirm } from 'attention';

    new Confirm({
        title: 'This is a Confirm',
        content: 'This is my content'
    });

```

### Prompt

**Prompt(config <object>)**

``` javascript

    import { Prompt } from 'attention';

    new Prompt({
        title: 'This is a Prompt',
        content: 'This is my content'
    });

```

## Config / Option

When creating a new Object of an Alert, Prompt or Confirm, it is needed to pass an object.
This object has a few options that you can change.

key | description | type | mandatory|
----|-----------|----|-----|
title | Title | string | true |
content | Content | string | true |


## Methods

Attention offers a lot of lifecycle methods. These methods are giving the oportunity to change the behaviour of a life of a component.

Here is a list of available methods. These methods are available in every component.

name | description |
----|----------|
beforeRender | fires before rendering a component |
afterRender | fires after rendering a component |
beforeClose | fires before closing a component |
afterClose | fires after closing a component |

Furthermore we have methods which are only available in some methods.

### Methods - Confirm

name | description |
-----|---------|
onAccept | fires when user has accepted |
onCancel | fires when user has canceled |

### Methods - Prompt

name | description |
-----|---------|
onSend | fires when the user has entered the input |
