import { HighValueTransactionEventHandler } from './high-value-transaction.handler';
import { MoneyWasDepositedHandler } from './money-was-deposited.handler';
import { MoneyWasWithdrewHandler } from './money-was-withdrew.handler';

export const EventsHandlers = [
  MoneyWasWithdrewHandler,
  MoneyWasDepositedHandler,
  HighValueTransactionEventHandler,
];
