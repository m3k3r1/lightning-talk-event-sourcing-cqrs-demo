import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { MoneyWasWithdrewEvent } from '../impl/money-was-withdrew.event';

@EventsHandler(MoneyWasWithdrewEvent)
export class MoneyWasWithdrewHandler
  implements IEventHandler<MoneyWasWithdrewEvent>
{
  handle(event: MoneyWasWithdrewEvent) {
    console.log(`Async MoneyWasWithdrewEvent... -> ${event.value} $`);
  }
}
