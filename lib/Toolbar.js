'use strict'

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault')

exports.__esModule = true
exports.default = void 0

var _inheritsLoose2 = _interopRequireDefault(
  require('@babel/runtime/helpers/inheritsLoose')
)

var _propTypes = _interopRequireDefault(require('prop-types'))

var _react = _interopRequireDefault(require('react'))

var _classnames = _interopRequireDefault(require('classnames'))

var _constants = require('./utils/constants')

var Toolbar =
  /*#__PURE__*/
  (function(_React$Component) {
    ;(0, _inheritsLoose2.default)(Toolbar, _React$Component)

    function Toolbar() {
      var _this

      for (
        var _len = arguments.length, args = new Array(_len), _key = 0;
        _key < _len;
        _key++
      ) {
        args[_key] = arguments[_key]
      }

      _this =
        _React$Component.call.apply(_React$Component, [this].concat(args)) ||
        this

      _this.navigate = function(action) {
        _this.props.onNavigate(action)
      }

      _this.view = function(view) {
        _this.props.onView(view)
      }

      return _this
    }

    var _proto = Toolbar.prototype

    _proto.render = function render() {
      var _this$props = this.props,
        messages = _this$props.localizer.messages,
        label = _this$props.label
      return _react.default.createElement(
        'div',
        {
          className: 'rbc-toolbar',
        },
        _react.default.createElement(
          'span',
          {
            className: 'rbc-btn-group',
          },
          _react.default.createElement(
            'button',
            {
              type: 'button',
              onClick: this.navigate.bind(null, _constants.navigate.TODAY),
            },
            messages.today
          )
        ),
        _react.default.createElement(
          'div',
          {
            className: 'rbc-toolbar-label-group',
          },
          _react.default.createElement(
            'button',
            {
              type: 'button',
              onClick: this.navigate.bind(null, _constants.navigate.PREVIOUS),
              className: 'rbc-toolbar-label-button',
            },
            _react.default.createElement('img', {
              src:
                'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAMFBMVEUAAABVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV67uviAAAAD3RSTlMAAQIhJjY3OFBzd3h5lbXp2xrRAAAAP0lEQVQIW2NgAAFFBghgeisAYej9N4AIvP8OE0iACnyDCQSgqmCY/wvK4Py/ACb0Gy50ACb0By7kAGXNYEAAACjLFV0Yq7spAAAAAElFTkSuQmCC',
            })
          ),
          _react.default.createElement(
            'span',
            {
              className: 'rbc-toolbar-label',
            },
            label
          ),
          _react.default.createElement(
            'button',
            {
              type: 'button',
              onClick: this.navigate.bind(null, _constants.navigate.NEXT),
              className: 'rbc-toolbar-label-button',
            },
            _react.default.createElement('img', {
              src:
                'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAANlBMVEUAAABVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVU8VfA3AAAAEXRSTlMAAQIOEh5Me4KDhYyVotXo+eyqZjUAAAA5SURBVBhXrcg5FoAgAMTQoLixOve/LC2jnc90PwCEHSsUZT9Jz3O9zvnpVOmYvd3q649euhtic1sDjF4C1F0iZL0AAAAASUVORK5CYII=',
            })
          )
        ),
        _react.default.createElement(
          'span',
          {
            className: 'rbc-btn-group',
          },
          this.viewNamesGroup(messages)
        )
      )
    }

    _proto.viewNamesGroup = function viewNamesGroup(messages) {
      // let viewNames = this.props.views
      var viewNames = ['month', 'agenda']
      var view = this.props.view
      return _react.default.createElement(
        'div',
        null,
        _react.default.createElement(
          'button',
          {
            type: 'button',
            onClick: this.view.bind(null, 'month'),
            className: 'rbc-toolbar-label-button',
          },
          _react.default.createElement('img', {
            className: (0, _classnames.default)({
              'rbc-active': view === 'month',
            }),
            src:
              'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAMAAADzapwJAAAAb1BMVEUAAABVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVT/dfLAAAAJHRSTlMAAQYREy8wOjtASVBRVltiaGlvcXuFnaq8wcPFx9PZ2u/x9/knlf4EAAAAkklEQVQYlb2QSQ7CQBADC8IW0sM+abKSgP//Rg4hEssNIepiqQ62ZICkUJEAcOz7AyNlHeoSYKHdXvNRKxAEkAmUATA7RQWCYoyxEqiKmwm0kgJBAyBJqyG2bF+0DaH+YXW9Pus3DBSAC4ADaQp8oVt3v7m7d+7eNO7+u+7/T/ZuZp2ZWWtmeW5mWsOy+zjwPOUOu10dBKkwp8sAAAAASUVORK5CYII=',
          })
        ),
        _react.default.createElement(
          'button',
          {
            type: 'button',
            onClick: this.view.bind(null, 'agenda'),
            className: (0, _classnames.default)('rbc-toolbar-label-button', {
              'rbc-active': view === 'agenda',
            }),
          },
          _react.default.createElement('img', {
            src:
              'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUAgMAAADw5/WeAAAADFBMVEUAAABVVVVVVVVVVVWH3s5DAAAAA3RSTlMAEEDGaJcfAAAAKElEQVQIW2NkAAHGVf8TFzAw/v8v+AFBMjEgSJ4Fz8DiD6EkRBcFegEEuTAFdWxDPgAAAABJRU5ErkJggg==',
          })
        )
      )
    }

    return Toolbar
  })(_react.default.Component)

Toolbar.propTypes = {
  view: _propTypes.default.string.isRequired,
  views: _propTypes.default.arrayOf(_propTypes.default.string).isRequired,
  label: _propTypes.default.node.isRequired,
  localizer: _propTypes.default.object,
  onNavigate: _propTypes.default.func.isRequired,
  onView: _propTypes.default.func.isRequired,
}
var _default = Toolbar
exports.default = _default
module.exports = exports['default']
