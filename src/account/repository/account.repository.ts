import { Injectable } from '@nestjs/common';
import { Account } from '../models/account.model';
import { fakeAccount } from './fixtures/account';

@Injectable()
export class AccountRepository {
  async findOneById(id: string): Promise<Account> {
    return fakeAccount;
  }

  async findAll(): Promise<Account[]> {
    return [fakeAccount];
  }
}
