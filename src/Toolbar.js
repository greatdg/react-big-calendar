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

        <span className="rbc-btn-group">{this.viewNamesGroup()}</span>
      </div>
    )
  }

  navigate = action => {
    this.props.onNavigate(action)
  }

  view = view => {
    this.props.onView(view)
  }

  viewNamesGroup() {
    // let viewNames = this.props.views
    // let viewNames = ['month', 'agenda']
    const view = this.props.view

    return (
      <div>
        <button
          type="button"
          onClick={this.view.bind(null, 'month')}
          className="rbc-toolbar-label-button"
        >
          <img
            className={cn({
              'rbc-active': view === 'month',
            })}
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAMAAADzapwJAAAAb1BMVEUAAABVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVT/dfLAAAAJHRSTlMAAQYREy8wOjtASVBRVltiaGlvcXuFnaq8wcPFx9PZ2u/x9/knlf4EAAAAkklEQVQYlb2QSQ7CQBADC8IW0sM+abKSgP//Rg4hEssNIepiqQ62ZICkUJEAcOz7AyNlHeoSYKHdXvNRKxAEkAmUATA7RQWCYoyxEqiKmwm0kgJBAyBJqyG2bF+0DaH+YXW9Pus3DBSAC4ADaQp8oVt3v7m7d+7eNO7+u+7/T/ZuZp2ZWWtmeW5mWsOy+zjwPOUOu10dBKkwp8sAAAAASUVORK5CYII="
          />
        </button>

        <button
          type="button"
          onClick={this.view.bind(null, 'agenda')}
          className={cn('rbc-toolbar-label-button', {
            'rbc-active': view === 'agenda',
          })}
        >
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUAgMAAADw5/WeAAAADFBMVEUAAABVVVVVVVVVVVWH3s5DAAAAA3RSTlMAEEDGaJcfAAAAKElEQVQIW2NkAAHGVf8TFzAw/v8v+AFBMjEgSJ4Fz8DiD6EkRBcFegEEuTAFdWxDPgAAAABJRU5ErkJggg==" />
        </button>
      </div>
    )
  }
}

export default Toolbar
