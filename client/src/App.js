import './App.css';
import React, {Component} from 'react'
import Songs from './components/Songs';
import { Container } from 'semantic-ui-react';
import styled from 'styled-components';

class App extends Component {
  render() {
    return (
      <AppContainer>
        <Songs />
      </AppContainer>
    )
  }
}

const AppContainer = styled.div`
  min-height: 100vh;
  background-color: #000ff;
  padding: 10px;
  margin: 10px;
`

export default App
