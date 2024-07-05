class BankAccount {
  constructor() {
    this._balance = 0;
    this._transactions = [];
  }

  get balance() {
    return this._balance;
  }

  set balance(newBalance) {
    if (newBalance >= 0) {
      this._balance = newBalance;
    } else {
      throw new Error("Balance must be a non-negative value.");
    }
  }

  addTransaction(amount) {
    this._transactions.push(amount);
    this._balance += amount;
  }

  addBalance(amount) {
    if (amount > 0) {
      this._balance += amount;
      this._transactions.push(amount);
    } else {
      throw new Error("Amount to add must be greater than zero.");
    }
  }
}

let account = new BankAccount();
console.log(account.balance);

account.addBalance(100);
console.log(account.balance);

account.addBalance(50);
console.log(account.balance);

account.addTransaction(-20);
console.log(account._transactions);
