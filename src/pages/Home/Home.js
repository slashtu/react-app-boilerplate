import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { fetchGames, fetchGetError } from 'modules/games';
import { selectGameList } from 'selectors/games';
import styles from './Home.scss';

const mapStateToProps = state => {
  const games = selectGameList(state);

  return { games };
};

@connect(
  mapStateToProps,
  { fetchGames, fetchGetError }
)
class Home extends Component {
  static propTypes = {
    games: PropTypes.array.isRequired
  };

  componentDidMount() {
    this.props.fetchGames();
    this.props.fetchGetError();
  }

  render() {
    return (
      <div className={styles.root}>
        {this.props.games.map(g => {
          return <div key={g.id}>{g.name}</div>;
        })}
      </div>
    );
  }
}

export default Home;
