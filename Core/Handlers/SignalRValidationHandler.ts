import { inject, injectable } from "inversify";

import { ISignalRConnectionProvider } from "../Interfaces/ISignalRConnectionProvider";
import { ContainerTypes } from "../Types/ContainerTypes";

import { IAsyncValidationHandler } from "../Interfaces/IAsyncValidationHandler";
import { IValidationRuleConfig } from "../Interfaces/IValidationRuleConfig";
@injectable()
export class SignalRValidationHandler implements IAsyncValidationHandler {
  constructor(
    @inject(ContainerTypes.SignalRConnectionProvider)
    private connectionProvider: ISignalRConnectionProvider
  ) {}

  async validateAsync(
    rule: IValidationRuleConfig,
    value: string,
    context: Record<string, any>
  ): Promise<{ isValid: boolean; message?: string }> {
    const connection = await this.connectionProvider.getConnection();
    const result = await connection.invoke<{ isValid: boolean; message?: string }>(
      rule.methodName!,
      value,
      context,
      rule.args ?? []
    );

    return result;
  }
}