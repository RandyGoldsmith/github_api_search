import React from 'react';
import SearchBar from './SearchBar';
import github from './API/github';
import Card from './Card';
import './App.css';



class App extends React.Component {

  state = { card: ''};

  onSearchSubmit =  async term => {
    const response = await github.get(`/${term}`);
      
      this.setState({ card: response.data});              
  }

  renderContent() {  
    if (Object.keys(this.state.card).length > 0) {
      return (
      <div className="card-container">
        <Card card={this.state.card}/>
      </div>
      )
    }
  }

  render() {   
    return (
      <div className="container">
        <SearchBar onSubmit={this.onSearchSubmit}/>
        {this.renderContent()}
      </div>
    )
  }

  
  
} 

export default App;