import React from 'react';
import SearchBar from './SearchBar';
import github from './API/github';



class App extends React.Component {

  state = { data: []};

  onSearchSubmit =  async term => {
    const response = await github.get(`/${term}`);
      this.setState({ data: response.data});              
  }


  render() {
    return (
      <div>
        <SearchBar onSubmit={this.onSearchSubmit}/>
      </div>
    )
  }

  
  
} 

export default App;