export interface DepositRequest {
  userId: string;
  amount: number;
  asset: string;
}

export interface TransferRequest {
  fromUserId: string;
  toUserId: string;
  amount: number;
  asset: string;
}

export interface WithdrawRequest {
  userId: string;
  amount: number;
  asset: string;
}

export interface WithdrawWithFeeRequest {
  userId: string;
  amount: number;
  asset: string;
  fee: number;
}
