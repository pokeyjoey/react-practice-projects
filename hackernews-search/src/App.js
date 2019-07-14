import React from 'react';
import StoryList from './StoryList';
import './App.css';

class App extends React.Component {

  state = {
    results: []
  }

  // Retrieve JSON for stories from the API
  hackerNewsRequest = async(tags, search) => {
    console.log('[hackerNewsRequest]');

    let query = (search === undefined) ? '': `query=${search}&`;
    let searchURL = `https://hn.algolia.com/api/v1/search?${query}tags=${tags}`;

    try {
      let response = await fetch(searchURL);
      let data = await response.json();
      let results = data.hits;
      this.setState((state, props) => {
        return {
          results: results
        }
      });
    } catch(e) {
      console.log("Data didnt load", e);
    };
  }

  // Display the results for any customer search
  displaySearch = () => {
    console.log('[displaySearch]');
    console.log(`Search: ${this.input.value}`);

    // get the results
    this.hackerNewsRequest('story', this.input.value);
  }

  // Called immediatly after the first render.
  componentDidMount() {
    console.log('[componentDidMount]', 'Mounted');

    // get the data for top stories for initial view.
    this.hackerNewsRequest('front_page');
  }

  render() {
    console.log('[render]');

    return (
      <div className="App">
        <div className="Search">
          <input type="text" ref={input => this.input = input} />
          <button onClick={this.displaySearch}> Search </button>
        </div>
          <StoryList items={this.state.results}/>
      </div>
    );
  }
}

export default App;
