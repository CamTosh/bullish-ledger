import { DepositRequest, TransferRequest, WithdrawRequest } from "types";
import { NumscriptService } from "./numscript.service";

export class UserService extends NumscriptService {
  constructor() {
    super('user');
  }

  async depositFunds(request: DepositRequest) {
    return await this.execute('deposit_funds', {
      user: `users:${request.userId}`,
      deposit_amount: {
        amount: request.amount,
        asset: request.asset,
      },
    });
  }

  async transferFunds(request: TransferRequest) {
    return await this.execute('transfer_funds', {
      from_user: `users:${request.fromUserId}`,
      to_user: `users:${request.toUserId}`,
      transfer_amount: {
        amount: request.amount,
        asset: request.asset,
      },
      transfer_asset: request.asset,
    });
  }

  async withdrawFunds(request: WithdrawRequest) {
    return await this.execute('withdraw_funds', {
      user: `users:${request.userId}`,
      withdraw_amount: {
        amount: request.amount,
        asset: request.asset,
      },
      withdraw_asset: request.asset,
    });
  }
}