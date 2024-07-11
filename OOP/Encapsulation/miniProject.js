class BankAccount {
  #balance;
  constructor(initialBalance) {
    if (initialBalance < 0) {
      throw new error("Initial Balance cannot be negative");
    }
    this.#balance = initialBalance;
  }
  deposit(amount) {
    if (amount <= 0) {
      throw new error("Enter a amount greated than 0");
    }
    this.#balance += amount;
    console.log(`Deposited $${amount}. New balance: $${this.#balance}`);
  }
  withdraw(amount) {
    if (amount <= 0) {
      throw new error("Enter a amount greated than 0");
    }
    if (amount > this.#balance) {
      throw new error("Insufficient Balance");
    }
    this.#balance -= amount;
    console.log(`Withdrawn $${amount}. New balance: $${this.#balance}`);
  }
  getBalance() {
    console.log(`Your balance is: $${this.#balance}`);
  }
}
let account1 = new BankAccount(500);
account1.deposit(500);
account1.withdraw(500);
account1.deposit(500);
account1.deposit(1500);
account1.withdraw(2500);
account1.deposit(5300);
account1.getBalance();
