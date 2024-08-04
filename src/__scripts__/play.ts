import { UserService } from "../services";

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
}

main();