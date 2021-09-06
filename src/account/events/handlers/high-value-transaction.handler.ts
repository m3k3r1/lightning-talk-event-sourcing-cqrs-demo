import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { HighValueTransactionEvent } from '../impl/high-value-transaction.event';
import { MoneyWasDepositedEvent } from '../impl/money-was-deposited.event';

@EventsHandler(HighValueTransactionEvent)
export class HighValueTransactionEventHandler
  implements IEventHandler<HighValueTransactionEvent>
{
  handle(event: HighValueTransactionEvent) {
    console.log('Async HighValueTransactionEvent...');
  }
}
