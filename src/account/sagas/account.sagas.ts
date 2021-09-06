import { Injectable } from '@nestjs/common';
import { ICommand, ofType, Saga } from '@nestjs/cqrs';
import { Observable } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { HighValueTransactionCommand } from '../commands/impl/high-value-transaction.command';
import { MoneyWasDepositedEvent } from '../events/impl/money-was-deposited.event';

@Injectable()
export class AccountSagas {
  @Saga()
  highValueTransaction = (events$: Observable<any>): Observable<ICommand> => {
    return events$.pipe(
      ofType(MoneyWasDepositedEvent),
      delay(1000),
      map((event) => {
        if (event.value > 2000) {
          console.log(
            `Inside [AccountSagas] HighValueTransaction Saga -> ${event.value}$`,
          );
          return new HighValueTransactionCommand(event.accountId);
        }
      }),
    );
  };
}
