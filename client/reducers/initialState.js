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
    publicKey: '',
    plaidENV: '',
  }
}

export default initialState;
