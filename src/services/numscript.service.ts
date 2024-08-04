import { SDK } from "@formance/formance-sdk";
import config from '../config';

export abstract class NumscriptService {
  private client: SDK;

  constructor() {
    this.client = new SDK({
      authorization: config.apiKey,
      serverURL: config.apiUrl,
    });
  }

  async execute(scriptName: string, variables: Record<string, any>): Promise<any> {
    const scriptPath = [__dirname, '..', '__numscripts__', `${scriptName}.num`].join('/');
    
    const file = Bun.file(scriptPath)
    const script = await file.text();

    try {
      const result = await this.client.ledger.createTransaction({
        ledger: config.ledgerName,
        postTransaction: {
          script: {
            plain: script,
            vars: variables,
          },
        }
      });

      return result.transactionsResponse;
    } catch (error) {
      console.error(`Error executing Numscript script ${scriptName}`, variables, error);
      throw error;
    }
  }
}