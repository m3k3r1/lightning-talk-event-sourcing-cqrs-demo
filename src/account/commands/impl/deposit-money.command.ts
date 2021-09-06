export class DepositMoneyCommand {
  constructor(
    public readonly accountId: string,
    public readonly value: number,
  ) {}
}
