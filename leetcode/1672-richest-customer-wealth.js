const maximumWealth = (accountGrid) => {
  return accountGrid.reduce((maxSoFar, customerAccounts) => { 
    const customerWealth = customerAccounts.reduce((a, b) => a + b);
    if (customerWealth > maxSoFar) {
      maxSoFar = customerWealth;
    }
    return maxSoFar;
  }, 0)
}

module.exports = maximumWealth;