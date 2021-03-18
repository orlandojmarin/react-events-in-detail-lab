// Code CoordinatesButton Component Here

import React from 'react'

export default class Clicker extends React.Component {
    render() {
      return (
        <button onClick={(event) => this.props.onReceiveCoordinates([event.clientX, event.clientY])}>Click me for Mouse Coordinates!</button>
      )
    }
    }