import { Module } from '@nestjs/common';
import { CqrsModule, EventsHandler } from '@nestjs/cqrs';
import { AccountController } from './account.controller';
import { CommandHandlers } from './commands/handlers';
import { EventsHandlers } from './events/handlers';
import { AccountRepository } from './repository/account.repository';
import { AccountSagas } from './sagas/account.sagas';

@Module({
  imports: [CqrsModule],
  controllers: [AccountController],
  providers: [
    AccountRepository,
    ...CommandHandlers,
    ...EventsHandlers,
    AccountSagas,
  ],
})
export class AccountModule {}
