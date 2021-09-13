import React, { Component } from 'react'
import { Button, Icon } from 'semantic-ui-react'
import SongForm from './SongForm'

class Song extends Component {
  state = {
    showForm: false
  }

  toggleForm =() => {
    this.setState({
      showForm: !this.state.showForm
    })
  }

  render(){
    if(this.state.showForm){
      return(
      <div>
        <SongForm updateSong={this.props.updateSong} {...this.props}/>  
        <Button onClick={this.toggleForm}>Cancel</Button>
      </div>
      )
    }
    return(
      <div key={this.props.id}>
        <h1>{this.props.name}</h1>
        <p>{this.props.author}</p>
        <Icon name='trash' color='red' onClick={()=> this.props.deleteSong(this.props.id)}/>
        <Button onClick={this.toggleForm}>Edit</Button>
      </div>
    )
  }
}

export default Song