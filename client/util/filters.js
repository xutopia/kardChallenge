export const filterTransactions = (transactions, debit, credit) => {
  if (debit && credit) {
    return transactions.filter(transaction => {
      return transaction;
    });
  } else if (credit) {
    return transactions.filter(transaction => {
      return transaction.amount > 0;
    });
  } else {
    return transactions.filter(transaction => {
      return transaction.amount < 0;
    });
  }
}
