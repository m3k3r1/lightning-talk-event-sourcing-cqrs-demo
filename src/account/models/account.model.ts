import { AggregateRoot } from '@nestjs/cqrs';
import { HighValueTransactionEvent } from '../events/impl/high-value-transaction.event';
import { MoneyWasDepositedEvent } from '../events/impl/money-was-deposited.event';
import { MoneyWasWithdrewEvent } from '../events/impl/money-was-withdrew.event';

export class Account extends AggregateRoot {
  constructor(private readonly id: string) {
    super();
  }

  withdraw(value: number) {
    this.apply(new MoneyWasWithdrewEvent(this.id, value));
  }
  deposit(value: number) {
    this.apply(new MoneyWasDepositedEvent(this.id, value));
  }
  flagAccount() {
    this.apply(new HighValueTransactionEvent(this.id));
  }
}
