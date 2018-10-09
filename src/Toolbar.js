import PropTypes from 'prop-types'
import React from 'react'
import cn from 'classnames'
import { navigate } from './utils/constants'

class Toolbar extends React.Component {
  static propTypes = {
    view: PropTypes.string.isRequired,
    views: PropTypes.arrayOf(PropTypes.string).isRequired,
    label: PropTypes.node.isRequired,
    localizer: PropTypes.object,
    onNavigate: PropTypes.func.isRequired,
    onView: PropTypes.func.isRequired,
  }

  render() {
    let {
      localizer: { messages },
      label,
    } = this.props

    return (
      <div className="rbc-toolbar">
        <span className="rbc-btn-group">
          <button
            type="button"
            onClick={this.navigate.bind(null, navigate.TODAY)}
          >
            {messages.today}
          </button>
        </span>
        <div className="rbc-toolbar-label-group">
          <button
            type="button"
            onClick={this.navigate.bind(null, navigate.PREVIOUS)}
            className="rbc-toolbar-label-button"
          >
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAMFBMVEUAAABVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV67uviAAAAD3RSTlMAAQIhJjY3OFBzd3h5lbXp2xrRAAAAP0lEQVQIW2NgAAFFBghgeisAYej9N4AIvP8OE0iACnyDCQSgqmCY/wvK4Py/ACb0Gy50ACb0By7kAGXNYEAAACjLFV0Yq7spAAAAAElFTkSuQmCC" />
          </button>
          <span className="rbc-toolbar-label">{label}</span>

          <button
            type="button"
            onClick={this.navigate.bind(null, navigate.NEXT)}
            className="rbc-toolbar-label-button"
          >
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAANlBMVEUAAABVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVU8VfA3AAAAEXRSTlMAAQIOEh5Me4KDhYyVotXo+eyqZjUAAAA5SURBVBhXrcg5FoAgAMTQoLixOve/LC2jnc90PwCEHSsUZT9Jz3O9zvnpVOmYvd3q649euhtic1sDjF4C1F0iZL0AAAAASUVORK5CYII=" />
          </button>
        </div>

        <span className="rbc-btn-group">{this.viewNamesGroup(messages)}</span>
      </div>
    )
  }

  navigate = action => {
    this.props.onNavigate(action)
  }

  view = view => {
    this.props.onView(view)
  }

  viewNamesGroup(messages) {
    let viewNames = this.props.views
    const view = this.props.view

    if (viewNames.length > 1) {
      return viewNames.map(name => (
        <button
          type="button"
          key={name}
          className={cn({ 'rbc-active': view === name })}
          onClick={this.view.bind(null, name)}
        >
          {messages[name]}
        </button>
      ))
    }
  }
}

export default Toolbar
