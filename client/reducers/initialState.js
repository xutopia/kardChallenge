const initialState = {
  status: {
    isLoading: false,
    errors: [],
  },
  user: {
    errors: [],
  },
  bank: {
    errors: [],
  },
  config: {
    errors: [],
    publicToken: '',
    plaidENV: '',
  }
}

export default initialState;
