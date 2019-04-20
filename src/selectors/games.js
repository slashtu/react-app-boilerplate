import { createSelector } from 'reselect';

export const selectGames = state => state.games;

export const selectGameList = createSelector(
  selectGames,
  games => games.list
);
