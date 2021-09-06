import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { AccountRepository } from 'src/account/repository/account.repository';
import { HighValueTransactionCommand } from '../impl/high-value-transaction.command';

@CommandHandler(HighValueTransactionCommand)
export class HighValueTransactionCommandHandler
  implements ICommandHandler<HighValueTransactionCommand>
{
  constructor(
    private readonly repository: AccountRepository,
    private readonly publisher: EventPublisher,
  ) {}

  async execute(command: HighValueTransactionCommand) {
    console.log('Async HighValueTransactionCommand... ⚠️');

    const { accountId } = command;
    const account = this.publisher.mergeObjectContext(
      await this.repository.findOneById(accountId),
    );
    account.flagAccount();
    account.commit();
  }
}
