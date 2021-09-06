import { IEvent } from '@nestjs/cqrs';

export class MoneyWasDepositedEvent implements IEvent {
  constructor(
    public readonly accountId: string,
    public readonly value: number,
  ) {}
}
