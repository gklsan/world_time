import React, { Component } from 'react'

class TimezoneItem extends Component {
 render(){
  return (
      <div>
       <p> { this.props.item.value} - { this.props.item.abbr}</p>
      </div>
  )
 }
}
export default TimezoneItem
