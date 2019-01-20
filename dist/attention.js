(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = global || self, factory(global.Attention = {}));
}(this, function (exports) { 'use strict';

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  var isString = function isString(s) {
    return typeof s === 'string';
  };
  var isEvent = function isEvent(event) {
    return (event.startsWith('on') ? event.toLowerCase() : "on".concat(event)) in window;
  };

  var h = function h() {
    var tag = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'div';
    var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    var childs = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
    var el = document.createElement(tag);

    if (props !== null) {
      var _loop = function _loop(key) {
        if (isEvent(key)) {
          el.addEventListener(key, function (e) {
            props[key](e, el);
          });
        } else {
          el.setAttribute(key, props[key]);
        }
      };

      for (var key in props) {
        _loop(key);
      }
    }

    if (childs.length > 0) {
      childs.forEach(function (child) {
        if (typeof child === 'string') {
          el.appendChild(document.createTextNode(child));
        } else {
          el.appendChild(child);
        }
      });
    }

    return el;
  };

  var fadeIn = function fadeIn(element, callback) {
    var counter = 0;
    var step = 4;

    var run = function run() {
      if (counter >= 100) {
        window.cancelAnimationFrame(run);

        if (callback) {
          callback(element);
        }
      } else {
        counter += step;
        element.style.opacity = (counter / 100).toString();
        window.requestAnimationFrame(run);
      }
    };

    window.requestAnimationFrame(run);
  };
  var fadeOut = function fadeOut(element, callback) {
    var counter = 100;
    var step = 4;

    var run = function run() {
      if (counter <= 0) {
        window.cancelAnimationFrame(run);

        if (callback) {
          callback(element);
        }
      } else {
        counter -= step;
        element.style.opacity = (counter / 100).toString();
        window.requestAnimationFrame(run);
      }
    };

    window.requestAnimationFrame(run);
  };

  var close = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z\"/><path d=\"M0 0h24v24H0z\" fill=\"none\"/></svg>"; // Thanks Google!

  var Component =
  /*#__PURE__*/
  function () {
    function Component(options) {
      _classCallCheck(this, Component);

      this.options = options;

      if (!options.title || !options.content) {
        return;
      }

      if (isString(options.title)) {
        this.title = options.title;
      }

      if (isString(options.content)) {
        this.content = options.content;
      }

      if (options.animation && (typeof options.animation === 'boolean' || isString(options.animation))) {
        this.animation = options.animation;
      } else {
        this.animation = 'fade';
      }

      this.port = null;
      this.template = this.createBase();
    }

    _createClass(Component, [{
      key: "createBase",
      value: function createBase() {
        var _this = this;

        var close$$1 = h('div', {
          class: 'close',
          click: function click() {
            _this.close();
          }
        });
        close$$1.innerHTML = close;
        this.port = h('div', {
          class: 'port'
        });
        var style;

        if (this.animation === 'fade') {
          style = 'opacity:0;';
        } else {
          style = '';
        }

        this.container = h('div', {
          class: 'attention-component',
          style: style
        }, [h('div', {
          class: 'inner'
        }, [h('div', {
          class: 'content'
        }, [close$$1, this.port])])]);
        return this.container;
      }
    }, {
      key: "render",
      value: function render() {
        var container = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document.body;

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
    }, {
      key: "destroy",
      value: function destroy() {
        this.container.parentElement.removeChild(this.container);

        if (this.options.afterClose) {
          this.options.beforeClose(this);
        }
      }
    }, {
      key: "close",
      value: function close$$1() {
        var _this2 = this;

        if (this.options.beforeClose) {
          this.options.beforeClose(this);
        }

        if (!this.animation) {
          this.destroy();
        } else if (this.animation === 'fade') {
          fadeOut(this.container, function () {
            _this2.destroy();
          });
        }
      }
    }]);

    return Component;
  }();

  var Alert =
  /*#__PURE__*/
  function (_Component) {
    _inherits(Alert, _Component);

    function Alert(options) {
      var _this;

      _classCallCheck(this, Alert);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(Alert).call(this, options));

      _this.injectTemplate();

      _this.render();

      return _this;
    }

    _createClass(Alert, [{
      key: "injectTemplate",
      value: function injectTemplate() {
        var head = h('div', {
          class: 'head'
        }, [h('p', {
          class: 'title'
        }, [this.title])]);
        this.port.appendChild(head);
        var innerContainer = h('div', {
          class: 'inner-container'
        }, [h('p', {
          class: 'content'
        }, [this.content])]);
        this.port.appendChild(head);
        this.port.appendChild(innerContainer);
      }
    }]);

    return Alert;
  }(Component);

  var Prompt =
  /*#__PURE__*/
  function (_Component) {
    _inherits(Prompt, _Component);

    function Prompt(options) {
      var _this;

      _classCallCheck(this, Prompt);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(Prompt).call(this, options));
      _this.buttonText = isString(options.buttonText) ? options.buttonText : 'Send';
      _this.placeholderText = isString(options.placeholderText) ? options.placeholderText : 'Type';

      _this.injectTemplate();

      _this.render();

      return _this;
    }

    _createClass(Prompt, [{
      key: "handleInput",
      value: function handleInput(e, el) {
        if (e.key === 'Enter' || e.keyCode === 13) {
          this.submit();
        }
      }
    }, {
      key: "submit",
      value: function submit() {
        var value = this.input.value;

        if (value === '') {
          return;
        }

        this.close();

        if (this.options.onSubmit) {
          this.options.onSubmit(this, value);
        }
      }
    }, {
      key: "injectTemplate",
      value: function injectTemplate() {
        var _this2 = this;

        var head = h('div', {
          class: 'head'
        }, [h('p', {
          class: 'title'
        }, [this.title])]);
        this.port.appendChild(head);
        this.input = h('input', {
          type: 'text',
          class: 'input',
          placeholder: this.placeholderText,
          keyup: function keyup(e, el) {
            _this2.handleInput(e, el);
          }
        });
        var inputRow = h('div', {
          class: 'prompt-elements'
        }, [this.input, h('button', {
          class: 'button',
          click: function click() {
            _this2.submit();
          }
        }, [this.buttonText])]);
        var innerContainer = h('div', {
          class: 'inner-container'
        }, [h('p', {
          class: 'content'
        }, [this.content]), inputRow]);
        this.port.appendChild(head);
        this.port.appendChild(innerContainer);
      }
    }]);

    return Prompt;
  }(Component);

  var Confirm =
  /*#__PURE__*/
  function (_Component) {
    _inherits(Confirm, _Component);

    function Confirm(options) {
      var _this;

      _classCallCheck(this, Confirm);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(Confirm).call(this, options));
      _this.buttonCancel = isString(options.buttonCancel) ? options.buttonCancel : 'No';
      _this.buttonConfirm = isString(options.buttonConfirm) ? options.buttonConfirm : 'Agree';

      _this.injectTemplate();

      _this.render();

      return _this;
    }

    _createClass(Confirm, [{
      key: "injectTemplate",
      value: function injectTemplate() {
        var _this2 = this;

        var head = h('div', {
          class: 'head'
        }, [h('p', {
          class: 'title'
        }, [this.title])]);
        this.port.appendChild(head);
        var innerContainer = h('div', {
          class: 'inner-container'
        }, [h('p', {
          class: 'content'
        }, [this.content])]);
        innerContainer.appendChild(h('div', {
          class: 'buttons'
        }, [h('button', {
          class: 'cancel',
          click: function click() {
            _this2.close();

            if (_this2.options.onCancel) {
              _this2.options.onCancel(_this2);
            }
          }
        }, [this.buttonCancel]), h('button', {
          class: 'confirm',
          click: function click() {
            _this2.close();

            if (_this2.options.onConfirm) {
              _this2.options.onConfirm(_this2);
            }
          }
        }, [this.buttonConfirm])]));
        this.port.appendChild(head);
        this.port.appendChild(innerContainer);
      }
    }]);

    return Confirm;
  }(Component);

  var version = '0.1.0';

  exports.Alert = Alert;
  exports.Prompt = Prompt;
  exports.Confirm = Confirm;
  exports.version = version;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
