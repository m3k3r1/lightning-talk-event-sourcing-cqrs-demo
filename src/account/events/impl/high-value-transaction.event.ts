import { IEvent } from '@nestjs/cqrs';

export class HighValueTransactionEvent implements IEvent {
  constructor(public readonly accountId: string) {}
}
