import React from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

import './App.css';

class App extends React.Component {
  constructor() {
    super();
    
    this.state = {
      monsters: [],
      searchField: '',
      title: ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ monsters: users }))
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
    this.setState({ title: e.target.value });
  }

  render() {
    const { monsters, searchField, title } = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))

    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
        <h2>Search Keyword: { title }</h2>
        <SearchBox placeholder="Search Monsters" handleChange={ this.handleChange } />
        <CardList monsters={ filteredMonsters } />
      </div>
    );
  }
}

export default App;