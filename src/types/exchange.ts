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