import { DepositMoneyCommandHandler } from './deposit-money.handler';
import { HighValueTransactionCommandHandler } from './high-value-transaction.handler';
import { WithdrawMoneyCommandHandler } from './withdraw-money.handler';

export const CommandHandlers = [
  DepositMoneyCommandHandler,
  WithdrawMoneyCommandHandler,
  HighValueTransactionCommandHandler,
];
