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
    transactions: [],
  },
  config: {
    errors: [],
    publicKey: '',
    plaidENV: '',
  }
}

export default initialState;
