import style from './loading-item.scss'
import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
const img = require('./loading-item.png');

export default function () {
    return (
      <ReactCSSTransitionGroup
        transitionName="loadingItem"
        transitionAppear={true}
        transitionAppearTimeout={500}
        transitionEnterTimeout={500}
        transitionLeaveTimeout={300}>
        <img className="feed__loading-item" src={img} />
      </ReactCSSTransitionGroup>
    )
  }