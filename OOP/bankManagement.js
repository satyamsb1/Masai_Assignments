function BankAccount(accountNumber, name, type, balance) {
    this.accountNumber = accountNumber;
    this.name = name;
    this.type = type;
    this.balance = balance;
    this.active = true;
  }
  
  BankAccount.prototype.deposit = function(amount) {
    this.balance += amount;
  };
  
  BankAccount.prototype.withdraw = function(amount) {
    if (this.balance < amount) {
      return "Insufficient funds";
    }
  
    this.balance -= amount;
  };
  
  BankAccount.prototype.checkBalance = function() {
    console.log("The balance of account number " + this.accountNumber + " is " + this.balance);
  };
  
  BankAccount.prototype.isActive = function() {
    return this.active;
  };
  
  function getTotalBalance(accounts) {
    let totalBalance = 0;
  
    for (let account of accounts) {
      if (account.isActive()) {
        totalBalance += account.balance;
      }
    }
  
    return totalBalance;
  }
  
  const account1 = new BankAccount("123456789", "John Doe", "Savings", 1000);
  const account2 = new BankAccount("987654321", "Jane Doe", "Checking", 500);
  const account3 = new BankAccount("000000000", "Jane Doe", "Savings", 2000);
  
  account1.deposit(500);
  account2.withdraw(200);
  
  account1.checkBalance();
  account2.checkBalance();
  
  const totalBalance = getTotalBalance([account1, account2, account3]);
  console.log("The total balance of all active accounts is " + totalBalance);
  