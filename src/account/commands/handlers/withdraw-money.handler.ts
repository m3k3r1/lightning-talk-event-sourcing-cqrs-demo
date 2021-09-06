import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { AccountRepository } from 'src/account/repository/account.repository';
import { WithdrawMoneyCommand } from '../impl/withdraw-money.command';

@CommandHandler(WithdrawMoneyCommand)
export class WithdrawMoneyCommandHandler
  implements ICommandHandler<WithdrawMoneyCommand>
{
  constructor(
    private readonly repository: AccountRepository,
    private readonly publisher: EventPublisher,
  ) {}

  async execute(command: WithdrawMoneyCommand) {
    console.log(`Async WithdrawMoneyCommand... ${command.value}`);

    const { accountId, value } = command;
    const account = this.publisher.mergeObjectContext(
      await this.repository.findOneById(accountId),
    );
    account.withdraw(value);
    account.commit();
  }
}
