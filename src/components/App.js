import React from 'react';
import SearchBar from './SearchBar';
import github from './API/github';
import Card from './Card';
import './App.css';



class App extends React.Component {

  state = { data: []};

  onSearchSubmit =  async term => {
    const response = await github.get(`/${term}`);
      this.setState({ data: response.data});              
  }


  render() {
    return (
      <div className="container">
        <SearchBar onSubmit={this.onSearchSubmit}/>
        <div className="card-container">
          <Card data={this.state.data}/>
        </div>       
      </div>
    )
  }

  
  
} 

export default App;