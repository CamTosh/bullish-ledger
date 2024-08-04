import { PlaceOrderRequest } from "types";
import { NumscriptService } from "./numscript.service";

export class ExchangeService extends NumscriptService {
  constructor() {
    super('exchange');
  }

  async placeBuyOrder(request: PlaceOrderRequest) {
    return await this.execute('buy_order.place', {
      user: `users:${request.userId}`,
      order_amount: {
        amount: request.amount,
        asset: request.asset,
      },
    });
  }

  async placeSellOrder(request: PlaceOrderRequest) {
    return await this.execute('sell_order.place', {
      user: `users:${request.userId}`,
      order_amount: {
        amount: request.amount,
        asset: request.asset,
      },
    });
  }
}