import config from "config";
import { UserService, getFormanceSDK } from "../services";

async function main() {

  const service = new UserService();
  const { data } = await service.depositFunds({
    userId: '123',
    amount: 100,
    asset: 'USD',
  });
  
  const [{metadata, postings, timestamp, txid}] = data;

  console.log({txid})
  console.log(metadata)
  console.log(timestamp)
  console.log(postings)

  const { balancesCursorResponse } = await getFormanceSDK().ledger.getBalances({
    address: 'users:123',
    ledger: config.ledgerName,
  })

  console.log(balancesCursorResponse.cursor.data[0])
}

main();