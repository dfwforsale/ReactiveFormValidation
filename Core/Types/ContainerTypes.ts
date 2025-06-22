import { FormControlFactory } from "../Factory/FormControlFactory";
import { ValidatorFactory } from "../Factory/ValidatorFactory";

export const ContainerTypes = {
  FormParserService: Symbol.for("FormParserService"),
  FieldStateProvider: Symbol.for("FieldStateProvider"),
  FormStateProvider: Symbol.for("FormStateProvider"),
  ReactiveFormControl: Symbol.for("ReactiveFormControl"),
  ReactiveFormGroup: Symbol.for("ReactiveFormGroup"),
  SignalRConnectionProvider: Symbol.for("SignalRConnectionProvider"),
  SignalRValidationHandler: Symbol.for("SignalRValidatorHandler"),
  HttpValidationHandler: Symbol.for("HttpValidatorHandler"),
  AsyncValidatorFactory: Symbol.for("AsyncValidatorFactory"),
  ValidatorFactory: Symbol.for("ValidatorFactory"),
  FormControlFactory: Symbol.for("FormControlFactory"),
  ReactiveFormControlFactory: Symbol.for("ReactiveFormControlFactory"),
  FormGroupFactory: Symbol.for("FormGroupFactory"),
  ReactiveFormBuilder: Symbol.for("ReactiveFormBuilder"),
  ReactiveFormService: Symbol.for("ReactiveFormService"),
  ReactiveValidatorService: Symbol.for("ReactiveValidatorService"),
  FormBinderBootstrapper: Symbol.for("FormBinderBootstrapper"),

};
