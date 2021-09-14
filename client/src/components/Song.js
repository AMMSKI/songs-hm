import React, { Component } from 'react'
import { Button, Card, Grid, Icon } from 'semantic-ui-react'
import SongForm from './SongForm'
import FormCard from '../FormCard'
import SongCard from './SongCard'
import styled from 'styled-components'
import MyButton from './MyButton'


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
      <Grid.Column computer={4} tablet={8} mobile={16}>
        <FormCard>
          <SongForm updateSong={this.props.updateSong} toggleForm={this.toggleForm} {...this.props}/>  
          <MyButton onClick={this.toggleForm}>Close</MyButton>
        </FormCard>
      </Grid.Column>
      )
    }
    return(
      <Grid.Column computer={4} tablet={8} mobile={16}>
        <SongCard fluid key={this.props.id}>
          <Card.Header>{this.props.name}</Card.Header>
          <Card.Meta>{this.props.author}</Card.Meta>
          <div className='options'>
          <MyButton onClick={this.toggleForm}>Edit</MyButton>
          <Trash><Icon size='large' name='trash' color='red' onClick={()=> this.props.deleteSong(this.props.id)}/></Trash>
          </div>
        </SongCard>
      </Grid.Column>
    )
  }
}

const Trash = styled.div`
  display: inline-block;
  &:hover {
    transform: scale(1.2);
  }
`


export default Song