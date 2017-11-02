export const calculateAccountsTotal = (accounts, type) => {
  // TODO: this helper only works for 'depository' or 'credit'. Can expand on this function to work with other types of accounts.
  if (type === 'debit') {
    return accounts.filter(account => {
      return account.type === 'depository';
    }).reduce((total, debitAccounts) => {
      return total + debitAccounts.balances.current;
    }, 0);
  } else {
    return accounts.filter(account => {
      return account.type === 'credit';
    }).reduce((total, creditAccounts) => {
      return total + creditAccounts.balances.current;
    }, 0);
  }
}
