import React, { Component } from 'react';
import api from './api';

class App extends Component {

  state= {
    filmes: [],
  }

  async componentDidMount(){
    const response = await api.get('');

    console.log(response.data);

    this.setState({ filmes: response.data});
  }

  render(){
    return(
      <div>
        <h1>Listar os Filmes</h1>
      </div>
    );
  };
};

export default App;
