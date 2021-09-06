export class WithdrawMoneyCommand {
  constructor(
    public readonly accountId: string,
    public readonly value: number,
  ) {}
}
