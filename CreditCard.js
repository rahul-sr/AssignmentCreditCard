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
  constructor(name, maxLimit = CARD_DEFAULT_LIMIT) {
    this.maxLimit = maxLimit;
    this.name = name;
    this.number = new uuid();
    this.balance = 0;
    this.persistence = new PersistenceInMemory();
  }

  setLimit() {}

  debit(amount, uid) {
    this.persistence.debit(amount, uid);
  }

  credit() {}

  checkBalance() {}
}

let card1 = new CreditCard();

// localstorage
// sql
// mongodb
