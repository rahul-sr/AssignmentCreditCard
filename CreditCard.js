// Credit Card

// - add a card
// - details: number, name (unique)
// - max limit
// - debit (purchase)
// - spend
// - credit
// - user can't spend more than limit

import { CARD_DEFAULT_LIMIT } from "./constants";
import PersistenceInMemory from "./persistenceInMemory";

// uuid
// timestamp + sequence

class CreditCard {
  constructor(name, userId, maxLimit = CARD_DEFAULT_LIMIT) {
    this.maxLimit = maxLimit;
    this.name = name;
    this.number = new uuid();
    this.balance = 0;
    // here we can replace PersistenceInMemory with PersistenceSQL
    this.persistence = new PersistenceInMemory();
    this.persistence.set(userId, { name, number, maxLimit, balance });
  }

  setLimit() {}

  debit(amount, uid) {
    this.persistence.debit(amount, uid);
  }

  credit(amount, uid) {
    this.persistence.debit(amount, uid);
  }

  checkBalance() {}
}

let card1 = new CreditCard("_name_", "_userId_");

// localstorage
// sql
// mongodb
