import { inject, injectable } from "inversify";
import { ContainerTypes } from "../Types/ContainerTypes";
import { IAsyncValidationHandler } from "../Interfaces/IAsyncValidationHandler";
import { IValidationRuleConfig } from "../Interfaces/IValidationRuleConfig";
import { IAsyncValidator } from "../Interfaces/IAsyncValidator";

@injectable()
export class AsyncValidatorFactory {
  constructor(
    @inject(ContainerTypes.SignalRValidationHandler)
    private signalRHandler: IAsyncValidationHandler,

    @inject(ContainerTypes.HttpValidationHandler)
    private httpHandler: IAsyncValidationHandler
  ) {}

  createAsyncValidators(rules: IValidationRuleConfig[]): IAsyncValidator[] {
    return rules
      .filter(rule => rule.type === "signalr" || rule.type === "http")
      .map(rule => {
        const handler = this.resolveHandler(rule.type);

        return {
          rule,
          validate: (value: string, context: Record<string, any>) =>
            handler.validateAsync(rule, value, context)
        };
      });
  }

  private resolveHandler(type: string): IAsyncValidationHandler {
    switch (type) {
      case "signalr":
        return this.signalRHandler;
      case "http":
        return this.httpHandler;
      default:
        throw new Error(`[AsyncValidatorFactory] Unsupported async validator type: ${type}`);
    }
  }
}