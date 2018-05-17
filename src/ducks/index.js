import { findNthPrime } from "../services/PrimeMethods";
import { findSearchTime } from "../services/Utils";

const UPDATE_N = "prime-hunter/UPDATE_N";
const UPDATE_IS_SEARCHING = "prime-hunter/UPDATE_IS_SEARCHING";
const UPDATE_RESULTS = "prime-hunter/UPDATE_RESULTS";

const initalState = {
  n: 10001,
  nthPrime: null,
  primeArray: [],
  timeDifference: null,
  isSearching: false,
  showResults: false
};

const primeHunter = (state = initalState, action = {}) => {
  switch (action.type) {
    case UPDATE_N:
      return { ...state, n: action.n, showResults: false };
    case UPDATE_IS_SEARCHING:
      return { ...state, isSearching: true, showResults: false };
    case UPDATE_RESULTS:
      return {
        ...state,
        isSearching: false,
        showResults: true,
        nthPrime: action.nthPrime,
        primeArray: action.primeArray,
        timeDifference: action.timeDifference
      };
    default:
      return state;
  }
};

export const updateN = n => ({
  type: UPDATE_N,
  n
});

export const updateIsSearching = () => ({
  type: UPDATE_IS_SEARCHING
});

export const updateResults = ({ nthPrime, primeArray, timeDifference }) => ({
  type: UPDATE_RESULTS,
  nthPrime,
  primeArray,
  timeDifference
});

export const search = () => (dispatch, getState) => {
  dispatch(updateIsSearching());
  const state = getState();
  const n = state.n;
  setTimeout(() => {
    findNthPrime(n).then(results => {
      dispatch(updateResults(results));
    });
  });
};

export const primeListSelector = state => state.primeArray.join(", ");
export const searchTimeSelector = state => findSearchTime(state.timeDifference)

export default primeHunter;
