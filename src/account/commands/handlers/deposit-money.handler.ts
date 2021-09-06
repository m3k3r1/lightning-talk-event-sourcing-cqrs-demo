import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { AccountRepository } from 'src/account/repository/account.repository';
import { DepositMoneyCommand } from '../impl/deposit-money.command';

@CommandHandler(DepositMoneyCommand)
export class DepositMoneyCommandHandler
  implements ICommandHandler<DepositMoneyCommand>
{
  constructor(
    private readonly repository: AccountRepository,
    private readonly publisher: EventPublisher,
  ) {}

  async execute(command: DepositMoneyCommand) {
    console.log(`Async DepositMoneyCommand... -> ${command.value}`);

    const { accountId, value } = command;
    const account = this.publisher.mergeObjectContext(
      await this.repository.findOneById(accountId),
    );
    account.deposit(value);
    account.commit();
  }
}
