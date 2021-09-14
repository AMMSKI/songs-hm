import './App.css';
import React, {Component} from 'react'
import Songs from './components/Songs';
import { Container } from 'semantic-ui-react';

class App extends Component {
  render() {
    return (
      <Container>
        <Songs />
      </Container>
    )
  }

}

export default App
