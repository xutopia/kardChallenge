export const filterTransactions = (transactions, debit, credit) => {
  if (debit && credit) {
    return transactions.filter(transaction => {
      return transaction;
    });
  } else if (credit) {
    return transactions.filter(transaction => {
      return transaction.amount > 0;
    });
  } else if (debit) {
    return transactions.filter(transaction => {
      return transaction.amount < 0;
    });
  } else {
    return [];
  }
}

export const filterTransactionsByAccountId = (transactions, accountId, debit, credit) => {
  let transactionsByAccountId = transactions.filter(transaction => {
    return transaction.account_id === accountId;
  });

  return filterTransactions(transactionsByAccountId, debit, credit);
}
