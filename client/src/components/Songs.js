import React, {Component} from 'react' 
import { Button, Container, Grid, Header } from 'semantic-ui-react'
import Song from './Song'
import SongForm from './SongForm'
import axios from 'axios'
import styled, { keyframes } from 'styled-components'
import SongContainer from '../SongContainer'
import MainHeader from './MainHeader'
import FormCard from '../FormCard'
import MyButton from './MyButton'

class Songs extends Component {
  state = {
    songs: [],
    showForm: false,
  }

  componentDidMount() {
    console.log('mounted')
    this.getSongs()
  }

  getSongs = async () => {
    try{
    let res = await axios.get('/songs')
    this.setState({songs: res.data})
    }catch(err){
      console.log(err)
    }
  }

  addSong = async (song) => {
    try{
    await axios.post('/songs', song)
    this.setState({
      songs: [song, ...this.state.songs]
    })
    }catch(err){
      console.log(err)
    }
  }

  updateSong = async (song) => {
    try{
    await axios.put(`/songs/${song.id}`, song)
    const updatedSongs = this.state.songs.map((s)=> s.id === song.id ? song : s)
    this.setState({
      songs: updatedSongs
    })
    }catch(err){
      console.log(err)
    }
  } 

  deleteSong = async (id) => {
    try{
    await axios.delete(`/songs/${id}`)
    const filteredSongs = this.state.songs.filter((s)=> s.id !== id)
    this.setState({
      songs: filteredSongs
    })
    }catch(err){
      console.log(err)
    }
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
      <>
        <MainHeader>
          <h1>Songs App</h1>
          <MyButton onClick={this.toggleForm} >{this.state.showForm ? 'Cancel' : 'Add'}</MyButton>
          {this.state.showForm && <FormCard><SongForm toggleForm={this.toggleForm} addSong={this.addSong}/></FormCard>}
        </MainHeader>
        <SongContainer>
          <Grid>
            {this.renderSongs()}
          </Grid>
        </SongContainer>
      </>
    )
  }
}

export default Songs