
import { Container } from "inversify";

import { ContainerTypes } from "../Types/ContainerTypes";
import { IFormParserService } from "../Interfaces/IFormParserService";
import { FormParserService } from "../../Services/FormParserService";
import { FormStateProvider } from "../Providers/FormStateProvider";
import { IFieldStateProvider } from "../Interfaces/IFieldStateProvider";
import { IFormStateProvider } from "../Interfaces/IFormStateProvider";
import { IReactiveFormControl } from "../Interfaces/IReactiveFormControl";
import { IReactiveFormGroup } from "../Interfaces/IReactiveFormGroup";
import { ReactiveFormGroup } from "../FormGroup/ReactiveFormGroup";
import { ReactiveFormControl } from "../FormControl/ReactiveFormControl";
import { SignalRConnectionProvider } from "../Providers/SignalRConnectionProvider";
import { ISignalRConnectionProvider } from "../Interfaces/ISignalRConnectionProvider";


import { HttpValidationHandler } from "../Handlers/HttpValidationHandler";

import { SignalRValidationHandler } from "../Handlers/SignalRValidationHandler";
import { IAsyncValidationHandler } from "../Interfaces/IAsyncValidationHandler";
import { AsyncValidatorFactory } from "../Factory/AsyncValidationFactory";
import { IFormControlFactory } from "../Interfaces/IFormControlFactory";
import { FormControlFactory } from "../Factory/FormControlFactory";
import { IValidatorFactory } from "../Interfaces/IValidatorFactory";
import { ValidatorFactory } from "../Factory/ValidatorFactory";
import { IReactiveFormControlFactory } from "../Interfaces/IReactiveFormControlFactory";
import { ReactiveFormControlFactory } from "../Factory/ReactiveFormControlFactory";
import { IFormGroupFactory } from "../Interfaces/IFormGroupFactory";
import { FormGroupFactory } from "../Factory/FormGroupFactory";
import { IReactiveFormBuilder } from "../Interfaces/IReactiveFormBuilder";
import { ReactiveFormBuilder } from "../Builders/ReactiveFormBuilder";
import { IReactiveFormService } from "../Interfaces/IReactiveFormService";
import { ReactiveFormService } from "../../Services/ReactiveFormService";
import { IReactiveValidatorService } from "../Interfaces/IReactiveValidatorService";
import { ReactiveValidatorService } from "../../Services/ReactiveValidatorService";
import { IFormBinderBootstrapper } from "../Interfaces/IFormBinderBoostrapper";
import { FormBinderBootstrapper } from "../Bootstrapper/FormBinderBoostrapper";


// Init container
const container = new Container();

// Parser
container.bind<IFormParserService>(ContainerTypes.FormParserService).to(FormParserService);

// State Provider (dual-interface binding)
container.bind<FormStateProvider>(FormStateProvider).toSelf().inSingletonScope();
container.bind<IFieldStateProvider>(ContainerTypes.FieldStateProvider).toService(FormStateProvider);
container.bind<IFormStateProvider>(ContainerTypes.FormStateProvider).toService(FormStateProvider);
// Builders
container.bind<IReactiveFormBuilder>(ContainerTypes.ReactiveFormBuilder).to(ReactiveFormBuilder).inSingletonScope();
// Reactive controls
container.bind<IReactiveFormControl>(ContainerTypes.ReactiveFormControl).to(ReactiveFormControl);
container.bind<IReactiveFormGroup>(ContainerTypes.ReactiveFormGroup).to(ReactiveFormGroup);

// Validator Handlers
container.bind<ISignalRConnectionProvider>(ContainerTypes.SignalRConnectionProvider).to(SignalRConnectionProvider).inSingletonScope();
container.bind<IAsyncValidationHandler>(ContainerTypes.SignalRValidationHandler).to(SignalRValidationHandler);
container.bind<IAsyncValidationHandler>(ContainerTypes.HttpValidationHandler).to(HttpValidationHandler);

// Factories
container.bind<AsyncValidatorFactory>(ContainerTypes.AsyncValidatorFactory).to(AsyncValidatorFactory).inSingletonScope();


container.bind<IFormControlFactory>(ContainerTypes.FormControlFactory).to(FormControlFactory).inSingletonScope();
container.bind<IReactiveFormControlFactory>(ContainerTypes.ReactiveFormControlFactory).to(ReactiveFormControlFactory).inSingletonScope();
container.bind<IValidatorFactory>(ContainerTypes.ValidatorFactory).to(ValidatorFactory).inSingletonScope();
container.bind<IFormGroupFactory>(ContainerTypes.FormGroupFactory).to(FormGroupFactory).inSingletonScope();

// Services
container.bind<IReactiveFormService>(ContainerTypes.ReactiveFormService).to(ReactiveFormService).inSingletonScope();
container.bind<IReactiveValidatorService>(ContainerTypes.ReactiveValidatorService).to(ReactiveValidatorService).inSingletonScope();


// Bootstrapper (deferred binding to avoid circular dependency issues)
container.bind<IFormBinderBootstrapper>(ContainerTypes.FormBinderBootstrapper).to(FormBinderBootstrapper).inSingletonScope();

export { container };