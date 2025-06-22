import { injectable, inject } from "inversify";
import { SimpleSubject } from "../Utils/SimpleSubject";
import { ContainerTypes } from "../Types/ContainerTypes";
import { IFormParserService } from "../Interfaces/IFormParserService";
import { IFormGroupFactory } from "../Interfaces/IFormGroupFactory";
import { IReactiveFormGroup } from "../Interfaces/IReactiveFormGroup";
import { ReactiveFormDebugState } from "../Interfaces/IReactiveFormGroupState";

@injectable()
export class ReactiveFormApi {
  private debug$ = new SimpleSubject<ReactiveFormDebugState>();

  constructor(
    @inject(ContainerTypes.FormParserService) private parser: IFormParserService,
    @inject(ContainerTypes.FormGroupFactory) private groupFactory: IFormGroupFactory
  ) {}

  /**
   * Parses and wires up all forms with `[data-reactive-form]`.
   */
  initializeForms(): IReactiveFormGroup[] {
    const parsedForms = this.parser.parseAll();
    const groups: IReactiveFormGroup[] = [];

    for (const parsed of parsedForms) {
      const group = this.groupFactory.createGroup(parsed) as IReactiveFormGroup;
      group.onDebugUpdate((debugState) => {
        this.debug$.next(debugState);
      });
      groups.push(group);
    }

    return groups;
  }

  /**
   * Subscribe to live debug snapshots of form state, validators, values, etc.
   */
  onDebugUpdate(cb: (snapshot: ReactiveFormDebugState) => void): void {
    this.debug$.subscribe(cb);
  }
}