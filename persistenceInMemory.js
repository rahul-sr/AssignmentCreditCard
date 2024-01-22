let db = ["IN_MEMORY", "MYSQL", "MONGODB"];

// Implementation of IN_MEMORY

class PersistenceInMemory {
  constructor() {}

  set(key, value) {}

  get(key) {}

  debit(key, value) {
    let { balance, maxLimit } = this.get(uid);
    let expectedCurrBalance = balance + value;
    // call validation util
    if (maxLimit > expectedCurrBalance) {
      throw "Max Credit Card Limit Exceeded";
    }
    // update
    this.uid.balance = expectedCurrBalance;
  }
}

// {
//     uid: {
//         maxLimit: maxLimit;
//         name: "";
//         number: new uuid();
//         balance: 10000;
//     }
// }
