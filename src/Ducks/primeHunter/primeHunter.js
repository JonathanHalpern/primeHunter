import PrimeFinderService from "../../Services/PrimeMethods";

const UPDATE_IS_SEARCHING = "prime-hunter/prime-hunter/UPDATE_IS_SEARCHING";

const primeHunter = (state = { isSearching: false }, action = {}) => {
  switch (action.type) {
    case UPDATE_IS_SEARCHING:
      console.log(action);
      return { ...state, isSearching: action.value };
    default:
      return state;
  }
};

export const updateIsSearching = value => ({
  type: UPDATE_IS_SEARCHING,
  value
});

export const search = n => (dispatch, getState) => {
  dispatch(updateIsSearching(true));
  console.log(getState());
  PrimeFinderService.findNthPrime(10000).then(results => {
    dispatch(updateIsSearching(false));
    console.log('stop')
  });
};

export default primeHunter;
