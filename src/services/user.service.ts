import { DepositRequest } from "types";
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
}