import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { MoneyWasDepositedEvent } from '../impl/money-was-deposited.event';

@EventsHandler(MoneyWasDepositedEvent)
export class MoneyWasDepositedHandler
  implements IEventHandler<MoneyWasDepositedEvent>
{
  handle(event: MoneyWasDepositedEvent) {
    console.log(`Async MoneyWasDepositEvent... -> ${event.value}$`);
  }
}
