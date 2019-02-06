# attention.js

A vanilla js library for creating stylish alerts, prompts and confirms.

<p>
    <img src="https://img.shields.io/github/size/janmarkuslanger/attention.js/dist/attention.js.svg">
</p>

---

## <a href="https://janmarkuslanger.github.io/attention.js/">Demo</a>

## Need help?
Create an issue or write me jan-markus@gmx.de

## Install

Install attention.js is quit easy.

### Install script

Just include the script `dist/attention.js` into your project and put the script before the closing body tag.
You also need to put the css into your project `dist/attention.css`.

``` html
<html>
    <head>
        <link href="dist/attention.css" rel="stylesheet">
        </style>
    </head>
    <body>
        <script src="dist/attention.js"></script>
    </body>
</html>

```


## Components

### Alert

**Alert(config <object>)**

``` javascript

    import { Alert } from 'attention';

    new Alert({
        title: 'This is a Title',
        content: 'This is my content'
    });

```

## Confirm

**Confirm(config <object>)**

``` javascript

    import { Confirm } from 'attention';

    new Confirm({
        title: 'This is a Confirm',
        content: 'This is my content',
        onAccept(component) {
            console.log('Accepted');
        },
        onCancel(component) {
            console.log('Canceled');
        }
    });

```

### Prompt

**Prompt(config <object>)**

``` javascript

    import { Prompt } from 'attention';

    new Prompt({
        title: 'This is a Prompt',
        content: 'This is my content',
        onSubmit(component, value) {
            console.log(`Value: ${value}`
        }
    });

```

## Config / Option

When creating a new Object of an Alert, Prompt or Confirm, it is needed to pass an object.
This object has a few options that you can change.

key | description | type | mandatory|
----|-----------|----|-----|
title | Title | string | true |
content | Content | string | true |
buttonCancel | Text for the cancel button (confirm) | string | false |
buttonConfirm | Text for the confirm button (confirm)| string | false |
placeholderText | Placeholder text (prompt) | string | false
submitText | Text for the submit button (prompt) | false | 



## Methods

Attention offers a lot of lifecycle methods. These methods are giving the opportunity to change the behaviour of a life of a component.


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
onAccept(component) | fires when user has accepted |
onCancel(component) | fires when user has canceled |


### Methods - Prompt

name | description |
-----|---------|
onSubmit(component, value) | fires when the user has entered the input |
