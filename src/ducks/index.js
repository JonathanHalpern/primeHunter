import PrimeFinderService from "../services/PrimeMethods";

const UPDATE_N = "prime-hunter/UPDATE_N"
const UPDATE_IS_SEARCHING = "prime-hunter/UPDATE_IS_SEARCHING";
const UPDATE_RESULTS = "prime-hunter/UPDATE_RESULTS";

const initalState = {
  n: 10001,
  nthPrime: null,
  primeArray: [],
  timeDifference: null,
  isSearching: false,
  showResults: false
}

const primeHunter = (state = initalState, action = {}) => {
  switch (action.type) {
    case UPDATE_N:
      return { ...state, n: action.n, showResults: false };
    case UPDATE_IS_SEARCHING:
      return { ...state, isSearching: action.isSearching };
    case UPDATE_RESULTS:
      return {
        ...state,
        isSearching: false,
        showResults: true,
        nthPrime: action.nthPrime,
        primeArray: action.primeArray,
        timeDifference: action.timeDifference,
      };
    default:
      return state;
  }
};

export const updateN = n => ({
  type: UPDATE_N,
  n
});

export const updateIsSearching = isSearching => ({
  type: UPDATE_IS_SEARCHING,
  isSearching
});

export const updateResults = ({ nthPrime, primeArray, timeDifference }) => ({
  type: UPDATE_RESULTS,
  nthPrime,
  primeArray,
  timeDifference,
});

export const search = () => (dispatch, getState) => {
  dispatch(updateIsSearching(true));
  const state = getState();
  const n = state.n;
  PrimeFinderService.findNthPrime(n).then(results => {
    dispatch(updateIsSearching(false));
    dispatch(updateResults(results));
  });
};

export default primeHunter;
