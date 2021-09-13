import React, { Component } from 'react'
import { Button, Form } from 'semantic-ui-react'

class SongForm extends Component {
  state = {
    name: this.props.name ? this.props.name : '',
    author: this.props.author ? this.props.author : ''
  }

  handleChange = (e, {value}) => {
    this.setState({
      [e.target.name]: value,
    })
  }


  handleSubmit = (e) => {
    if(this.props.id) {
      this.props.updateSong({ id: this.props.id, ...this.state })
      this.props.toggleForm()
    }else {
      this.props.addSong({ ...this.state })
      this.props.toggleForm()
    }
  }


  render(){
    return(
      <Form>
        <Form.Input label="Name" name={'name'} value={this.state.name} onChange={this.handleChange}/>
        <Form.Input label="author" name={'author'} value={this.state.author} onChange={this.handleChange}/>
        <Button onClick={this.handleSubmit}>{this.props.id ? 'Update' : 'Add'}</Button>
      </Form>
    )
  }
}

export default SongForm