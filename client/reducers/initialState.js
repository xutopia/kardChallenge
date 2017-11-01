const initialState = {
  status: {
    isLoading: false,
    errors: [],
  },
  user: {
    errors: [],
  },
  bank: {
    accounts: [],
    errors: [],
  },
  config: {
    errors: [],
    publicKey: '',
    plaidENV: '',
  }
}

export default initialState;
