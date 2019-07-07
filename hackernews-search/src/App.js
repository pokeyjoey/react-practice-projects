import React from 'react';
import StoryList from './StoryList';
import './App.css';

class App extends React.Component {

  state = {
    search: '',
    searchURL: '',
    results: []
  }

  hackerNewsRequest = async(search) => {
    let searchURL = `https://hn.algolia.com/api/v1/search?query=${this.input.value}&tags=story`; 

    try {
      let response = await fetch(searchURL);
      let data = await response.json();
      let results = data.hits;
      this.setState((state, props) => {
        return {
          search: search,
          searchURL:  searchURL,
          results: results
        }
      });
    } catch(e) {
      console.log("Data didnt load", e);
    };
  }

  showValue = () => {
    console.log(`Search: ${this.input.value}`);

    // set the search url
    let searchURL = `https://hn.algolia.com/api/v1/search?query=${this.input.value}&tags=story`; 

    // get the results
    this.hackerNewsRequest(searchURL);
  }

  render() {
    console.log('[render]');
    console.log(`searchURL: ${this.state.searchURL}`);
    return (
      <div className="App">
        <div className="Search">
          <input type="text" ref={input => this.input = input} />
          <button onClick={this.showValue}> Search </button>
        </div>
          <StoryList items={this.state.results}/>
      </div>
    );
  }
}

export default App;
