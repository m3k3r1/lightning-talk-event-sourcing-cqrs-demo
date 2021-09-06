import { Body, Controller, Param, Post } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { DepositMoneyCommand } from './commands/impl/deposit-money.command';
import { WithdrawMoneyCommand } from './commands/impl/withdraw-money.command';
import { TransactionDto } from './dtos/transaction.dto';

@Controller('account')
export class AccountController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  @Post(':id/withdraw')
  async withdraw(@Param('id') id: string, @Body() dto: TransactionDto) {
    return this.commandBus.execute(new WithdrawMoneyCommand(id, dto.value));
  }

  @Post(':id/deposit')
  async deposit(@Param('id') id: string, @Body() dto: TransactionDto) {
    return this.commandBus.execute(new DepositMoneyCommand(id, dto.value));
  }
}
