import React, { Component } from 'react'
import Input from './Input'
import List from './List'

export default class App extends Component {
  render() {
    return (
      <div className='container mt-4'>
        <Input />
        <List />
      </div>
    )
  }
}
