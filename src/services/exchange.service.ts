import { ExecuteTradeRequest, PlaceOrderRequest, CancelOrderRequest } from "types";
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
  async cancelBuyOrder(request: CancelOrderRequest) {
    return await this.execute('buy_order.cancel', {
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

  async cancelSellOrder(request: CancelOrderRequest) {
    return await this.execute('sell_order.cancel', {
      user: `users:${request.userId}`,
      order_amount: {
        amount: request.amount,
        asset: request.asset,
      },
    });
  }

  async executeTrade(request: ExecuteTradeRequest) {
    return await this.execute('trade.execute', {
      buyer: `users:${request.buyerId}`,
      seller: `users:${request.sellerId}`,
      trade_amount: {
        amount: request.amount,
        asset: request.asset,
      },
    });
  }
}