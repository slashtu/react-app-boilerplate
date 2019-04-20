import { to } from 'utils/process';

export const FETCH_GAMES = 'FETCH_GAMES';
export const FETCH_GAMES_SUCCESS = 'FETCH_GAMES_SUCCESS';
export const FETCH_GAMES_FAILURE = 'FETCH_GAMES_FAILURE';

export const FETCH_GET_ERROR = 'FETCH_GET_ERROR';

const initialState = { list: [], error: null };

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_GAMES:
      return state;
    case FETCH_GAMES_SUCCESS:
      return { list: action.games };
    case FETCH_GAMES_FAILURE:
      return state;
    case FETCH_GET_ERROR:
      return { ...state, error: action.error };
    default:
      return state;
  }
};

export const fetchGames = () => async dispatch => {
  dispatch({ type: FETCH_GAMES });

  const [res] = await to(fetch('/api/games'));
  const games = await res.json();

  dispatch({ type: FETCH_GAMES_SUCCESS, games: games });
};

export const fetchGetError = () => async dispatch => {
  dispatch({ type: FETCH_GAMES });

  const [res, error] = await to(fetch('/api/error'));

  if (error) {
    dispatch({ type: FETCH_GET_ERROR, error: error.message });
  }
};
