export interface PlaceOrderRequest {
  userId: string;
  amount: number;
  asset: string;
}

export interface CancelOrderRequest {
  userId: string;
  amount: number;
  asset: string;
}

export interface ExecuteTradeRequest {
  buyerId: string;
  sellerId: string;
  amount: number;
  asset: string;
}