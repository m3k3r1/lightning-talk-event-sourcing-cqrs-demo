import { IEvent } from '@nestjs/cqrs';

export class MoneyWasWithdrewEvent implements IEvent {
  constructor(
    public readonly accountId: string,
    public readonly value: number,
  ) {}
}
