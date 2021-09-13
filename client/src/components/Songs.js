import React, {Component} from 'react' 
import { Button, Container } from 'semantic-ui-react'
import Song from './Song'
import SongForm from './SongForm'

class Songs extends Component {
  state = {
    songs: [
    {id: 1, name:'song1', author: 'author1'},
    {id: 2, name:'song2', author: 'author2'},
    {id: 3, name:'song3', author: 'author3'}
    ],
    showForm: false,
  }

  addSong = (song) => {
    this.setState({
      songs: [song, ...this.state.songs]
    })
  }

  updateSong = (song) => {
    const updatedSongs = this.state.songs.map((s)=> s.id === song.id ? song : s)
    this.setState({
      songs: updatedSongs
    })
  } 

  deleteSong = (id) => {
    const filteredSongs = this.state.songs.filter((s)=> s.id !== id)
    this.setState({
      songs: filteredSongs
    })
  }

  toggleForm =() => {
    this.setState({
      showForm: !this.state.showForm
    })
  }

  renderSongs = () => {
    return this.state.songs.map((s)=> <Song updateSong={this.updateSong} deleteSong={this.deleteSong} {...s} />)
  }
  
  render() {
    return(
      <Container>
      <h1>Songs here</h1>
      <Button onClick={this.toggleForm} >{this.state.showForm ? 'Cancel' : 'Add'}</Button>
      {this.state.showForm && <SongForm addSong={this.addSong}/>}
      {this.renderSongs()}
      </Container>
    )
  }
}

export default Songs