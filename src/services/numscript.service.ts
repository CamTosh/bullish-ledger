import { SDK } from "@formance/formance-sdk";
import config from "../config";
import path from 'node:path';
import { getFormanceSDK } from "./formance";

export abstract class NumscriptService {
  private client: SDK = getFormanceSDK();

  constructor(private readonly folder: string) {}

  async execute(scriptName: string, variables: Record<string, any>) {
    const scriptPath = path.join(__dirname, '..', '__numscripts__', this.folder, `${scriptName}.num`);
    
    const file = Bun.file(scriptPath);
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