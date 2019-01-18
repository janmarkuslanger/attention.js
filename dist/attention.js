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

  var Component =
  /*#__PURE__*/
  function () {
    function Component(title, content, options) {
      _classCallCheck(this, Component);

      if (isString(title)) {
        this.title = title;
      }

      if (isString(content)) {
        this.content = content;
      }

      this.options = options;
      this.container = null;
      this.port = null;
    }

    _createClass(Component, [{
      key: "render",
      value: function render() {
        var container = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document.body;
        container.appendChild(this.template);
      }
    }]);

    return Component;
  }();

  var Alert =
  /*#__PURE__*/
  function (_Component) {
    _inherits(Alert, _Component);

    function Alert(title, content, options) {
      var _this;

      _classCallCheck(this, Alert);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(Alert).call(this, title, content, options));
      _this.template = _this.renderTemplate();

      _this.render();

      return _this;
    }

    _createClass(Alert, [{
      key: "renderTemplate",
      value: function renderTemplate() {
        this.container = h('div', {
          class: 'attention-alert'
        });
        this.port = h('div', {
          class: 'inner'
        });
        var content = h('div', {
          class: 'content'
        }, [h('p', null, [this.title]), h('p', null, [this.content])]);
        this.port.appendChild(content);
        this.container.appendChild(this.port);
        return this.container;
      }
    }]);

    return Alert;
  }(Component);

  exports.Alert = Alert;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
