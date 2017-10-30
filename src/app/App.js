import React, { Component } from 'react';
import style from './App.scss';
import HomePage from '../homepage/HomePage';
import ShowsPage from '../shows/ShowsPage';
import CharactersPage from '../characters/CharactersPage';
import PeoplePage from '../people/PeoplePage';
import MangaPage from '../manga/MangaPage';
import SearchPage from '../search/SearchPage';
import { Switch, Route } from 'react-router-dom';

const pages = [
  {
    name: "Homepage",
    link: "/",
    node: (props) => <HomePage {...props} />,
  },
  {
    name: "Anime",
    link: "/shows",
    node: (props) => <ShowsPage {...props} />,
  },
  {
    name: "Characters",
    link: "/characters",
    node: (props) => <CharactersPage {...props} />,
  },
  {
    name: "Manga",
    link: "/manga",
    node: (props) => <MangaPage {...props} />,
  },
  {
    name: "Voice Actors",
    link: "/people",
    node: (props) => <PeoplePage {...props} />,
  },
  {
    name: "Search",
    link: "/search",
    node: (props) => <SearchPage {...props} />,
    filters: [],
    sorts: [],
  }
];

class App extends Component {

  render() {
    return (
      <div className={style.appContainer}>
        <Switch>
          {pages.map(page => {
            return (
              <Route
                key={page.name}
                exact={page.link === "/"}
                path={page.link} 
                render={() => page.node({pages: pages})} />
            );
          })}
        </Switch>
      </div>
    );
  }
}

export default App;
