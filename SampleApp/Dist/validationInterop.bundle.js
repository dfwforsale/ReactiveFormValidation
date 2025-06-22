
/******/ var __webpack_modules__ = ({

/***/ "../Core/Builders/ReactiveFormBuilder.ts":
/*!***********************************************!*\
  !*** ../Core/Builders/ReactiveFormBuilder.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReactiveFormBuilder: () => (/* binding */ ReactiveFormBuilder)
/* harmony export */ });
/* harmony import */ var inversify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/esm/index.js");
/* harmony import */ var _Types_ContainerTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Types/ContainerTypes */ "../Core/Types/ContainerTypes.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};

 // Update the path as needed
let ReactiveFormBuilder = class ReactiveFormBuilder {
    parser;
    formGroupFactory;
    controlFactory;
    constructor(parser, formGroupFactory, controlFactory) {
        this.parser = parser;
        this.formGroupFactory = formGroupFactory;
        this.controlFactory = controlFactory;
    }
    buildAll() {
        const parsedForms = this.parser.parseAll();
        return parsedForms.map(def => this.buildFormInternal(def)).filter(Boolean);
    }
    buildForm(form) {
        const def = this.parser.parseForm(form);
        return def ? this.buildFormInternal(def) : null;
    }
    buildFormInternal(def) {
        const group = this.formGroupFactory.create(def);
        for (const controlDef of def.controls) {
            const control = this.controlFactory.createControl(controlDef.key, controlDef.rules);
            group.registerControl(controlDef.key, control);
        }
        return group;
    }
};
ReactiveFormBuilder = __decorate([
    (0,inversify__WEBPACK_IMPORTED_MODULE_0__.injectable)(),
    __param(0, (0,inversify__WEBPACK_IMPORTED_MODULE_0__.inject)(_Types_ContainerTypes__WEBPACK_IMPORTED_MODULE_1__.ContainerTypes.FormParserService)),
    __param(1, (0,inversify__WEBPACK_IMPORTED_MODULE_0__.inject)(_Types_ContainerTypes__WEBPACK_IMPORTED_MODULE_1__.ContainerTypes.FormGroupFactory)),
    __param(2, (0,inversify__WEBPACK_IMPORTED_MODULE_0__.inject)(_Types_ContainerTypes__WEBPACK_IMPORTED_MODULE_1__.ContainerTypes.FormControlFactory)),
    __metadata("design:paramtypes", [Object, Object, Object])
], ReactiveFormBuilder);



/***/ }),

/***/ "../Core/DependencyInjection/container-config.ts":
/*!*******************************************************!*\
  !*** ../Core/DependencyInjection/container-config.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   container: () => (/* binding */ container)
/* harmony export */ });
/* harmony import */ var inversify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/esm/index.js");
/* harmony import */ var reflect_metadata__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reflect-metadata */ "../node_modules/reflect-metadata/Reflect.js");
/* harmony import */ var reflect_metadata__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reflect_metadata__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Types_ContainerTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Types/ContainerTypes */ "../Core/Types/ContainerTypes.ts");
/* harmony import */ var _Services_FormParserService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Services/FormParserService */ "../Services/FormParserService.ts");
/* harmony import */ var _Providers_FormStateProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Providers/FormStateProvider */ "../Core/Providers/FormStateProvider.ts");
/* harmony import */ var _FormGroup_ReactiveFormGroup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../FormGroup/ReactiveFormGroup */ "../Core/FormGroup/ReactiveFormGroup.ts");
/* harmony import */ var _FormControl_ReactiveFormControl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../FormControl/ReactiveFormControl */ "../Core/FormControl/ReactiveFormControl.ts");
/* harmony import */ var _Providers_SignalRConnectionProvider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Providers/SignalRConnectionProvider */ "../Core/Providers/SignalRConnectionProvider.ts");
/* harmony import */ var _Handlers_HttpValidationHandler__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Handlers/HttpValidationHandler */ "../Core/Handlers/HttpValidationHandler.ts");
/* harmony import */ var _Handlers_SignalRValidationHandler__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Handlers/SignalRValidationHandler */ "../Core/Handlers/SignalRValidationHandler.ts");
/* harmony import */ var _Factory_AsyncValidationFactory__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Factory/AsyncValidationFactory */ "../Core/Factory/AsyncValidationFactory.ts");
/* harmony import */ var _Factory_FormControlFactory__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../Factory/FormControlFactory */ "../Core/Factory/FormControlFactory.ts");
/* harmony import */ var _Factory_ValidatorFactory__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../Factory/ValidatorFactory */ "../Core/Factory/ValidatorFactory.ts");
/* harmony import */ var _Factory_ReactiveFormControlFactory__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../Factory/ReactiveFormControlFactory */ "../Core/Factory/ReactiveFormControlFactory.ts");
/* harmony import */ var _Factory_FormGroupFactory__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../Factory/FormGroupFactory */ "../Core/Factory/FormGroupFactory.ts");
/* harmony import */ var _Builders_ReactiveFormBuilder__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../Builders/ReactiveFormBuilder */ "../Core/Builders/ReactiveFormBuilder.ts");
/* harmony import */ var _Services_ReactiveFormService__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../Services/ReactiveFormService */ "../Services/ReactiveFormService.ts");
/* harmony import */ var _Services_ReactiveValidatorService__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../Services/ReactiveValidatorService */ "../Services/ReactiveValidatorService.ts");


















// Init container
const container = new inversify__WEBPACK_IMPORTED_MODULE_0__.Container();
// Parser
container.bind(_Types_ContainerTypes__WEBPACK_IMPORTED_MODULE_2__.ContainerTypes.FormParserService).to(_Services_FormParserService__WEBPACK_IMPORTED_MODULE_3__.FormParserService);
// State Provider (dual-interface binding)
container.bind(_Providers_FormStateProvider__WEBPACK_IMPORTED_MODULE_4__.FormStateProvider).toSelf().inSingletonScope();
container.bind(_Types_ContainerTypes__WEBPACK_IMPORTED_MODULE_2__.ContainerTypes.FieldStateProvider).toService(_Providers_FormStateProvider__WEBPACK_IMPORTED_MODULE_4__.FormStateProvider);
container.bind(_Types_ContainerTypes__WEBPACK_IMPORTED_MODULE_2__.ContainerTypes.FormStateProvider).toService(_Providers_FormStateProvider__WEBPACK_IMPORTED_MODULE_4__.FormStateProvider);
// Builders
container.bind(_Types_ContainerTypes__WEBPACK_IMPORTED_MODULE_2__.ContainerTypes.ReactiveFormBuilder).to(_Builders_ReactiveFormBuilder__WEBPACK_IMPORTED_MODULE_15__.ReactiveFormBuilder).inSingletonScope();
// Reactive controls
container.bind(_Types_ContainerTypes__WEBPACK_IMPORTED_MODULE_2__.ContainerTypes.ReactiveFormControl).to(_FormControl_ReactiveFormControl__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormControl);
container.bind(_Types_ContainerTypes__WEBPACK_IMPORTED_MODULE_2__.ContainerTypes.ReactiveFormGroup).to(_FormGroup_ReactiveFormGroup__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormGroup);
// Validator Handlers
container.bind(_Types_ContainerTypes__WEBPACK_IMPORTED_MODULE_2__.ContainerTypes.SignalRConnectionProvider).to(_Providers_SignalRConnectionProvider__WEBPACK_IMPORTED_MODULE_7__.SignalRConnectionProvider).inSingletonScope();
container.bind(_Types_ContainerTypes__WEBPACK_IMPORTED_MODULE_2__.ContainerTypes.SignalRValidationHandler).to(_Handlers_SignalRValidationHandler__WEBPACK_IMPORTED_MODULE_9__.SignalRValidationHandler);
container.bind(_Types_ContainerTypes__WEBPACK_IMPORTED_MODULE_2__.ContainerTypes.HttpValidationHandler).to(_Handlers_HttpValidationHandler__WEBPACK_IMPORTED_MODULE_8__.HttpValidationHandler);
// Factories
container.bind(_Types_ContainerTypes__WEBPACK_IMPORTED_MODULE_2__.ContainerTypes.AsyncValidatorFactory).to(_Factory_AsyncValidationFactory__WEBPACK_IMPORTED_MODULE_10__.AsyncValidatorFactory).inSingletonScope();
container.bind(_Types_ContainerTypes__WEBPACK_IMPORTED_MODULE_2__.ContainerTypes.AsyncValidatorFactory).to(_Factory_AsyncValidationFactory__WEBPACK_IMPORTED_MODULE_10__.AsyncValidatorFactory).inSingletonScope();
container.bind(_Types_ContainerTypes__WEBPACK_IMPORTED_MODULE_2__.ContainerTypes.FormControlFactory).to(_Factory_FormControlFactory__WEBPACK_IMPORTED_MODULE_11__.FormControlFactory).inSingletonScope();
container.bind(_Types_ContainerTypes__WEBPACK_IMPORTED_MODULE_2__.ContainerTypes.ReactiveFormControlFactory).to(_Factory_ReactiveFormControlFactory__WEBPACK_IMPORTED_MODULE_13__.ReactiveFormControlFactory).inSingletonScope();
container.bind(_Types_ContainerTypes__WEBPACK_IMPORTED_MODULE_2__.ContainerTypes.ValidatorFactory).to(_Factory_ValidatorFactory__WEBPACK_IMPORTED_MODULE_12__.ValidatorFactory).inSingletonScope();
container.bind(_Types_ContainerTypes__WEBPACK_IMPORTED_MODULE_2__.ContainerTypes.FormGroupFactory).to(_Factory_FormGroupFactory__WEBPACK_IMPORTED_MODULE_14__.FormGroupFactory).inSingletonScope();
// Services
container.bind(_Types_ContainerTypes__WEBPACK_IMPORTED_MODULE_2__.ContainerTypes.ReactiveFormService).to(_Services_ReactiveFormService__WEBPACK_IMPORTED_MODULE_16__.ReactiveFormService).inSingletonScope();
container.bind(_Types_ContainerTypes__WEBPACK_IMPORTED_MODULE_2__.ContainerTypes.ReactiveValidatorService).to(_Services_ReactiveValidatorService__WEBPACK_IMPORTED_MODULE_17__.ReactiveValidatorService).inSingletonScope();
// Export the configured container



/***/ }),

/***/ "../Core/Factory/AsyncValidationFactory.ts":
/*!*************************************************!*\
  !*** ../Core/Factory/AsyncValidationFactory.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AsyncValidatorFactory: () => (/* binding */ AsyncValidatorFactory)
/* harmony export */ });
/* harmony import */ var inversify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/esm/index.js");
/* harmony import */ var _Types_ContainerTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Types/ContainerTypes */ "../Core/Types/ContainerTypes.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


let AsyncValidatorFactory = class AsyncValidatorFactory {
    signalRHandler;
    httpHandler;
    constructor(signalRHandler, httpHandler) {
        this.signalRHandler = signalRHandler;
        this.httpHandler = httpHandler;
    }
    createAsyncValidators(rules) {
        return rules
            .filter(rule => rule.type === "signalr" || rule.type === "http")
            .map(rule => {
            const handler = this.resolveHandler(rule.type);
            return {
                rule,
                validate: (value, context) => handler.validateAsync(rule, value, context),
            };
        });
    }
    resolveHandler(type) {
        switch (type) {
            case "signalr":
                return this.signalRHandler;
            case "http":
                return this.httpHandler;
            default:
                throw new Error(`[AsyncValidatorFactory] Unknown async validator type: ${type}`);
        }
    }
};
AsyncValidatorFactory = __decorate([
    (0,inversify__WEBPACK_IMPORTED_MODULE_0__.injectable)(),
    (0,inversify__WEBPACK_IMPORTED_MODULE_0__.injectable)(),
    __param(0, (0,inversify__WEBPACK_IMPORTED_MODULE_0__.inject)(_Types_ContainerTypes__WEBPACK_IMPORTED_MODULE_1__.ContainerTypes.SignalRValidationHandler)),
    __param(1, (0,inversify__WEBPACK_IMPORTED_MODULE_0__.inject)(_Types_ContainerTypes__WEBPACK_IMPORTED_MODULE_1__.ContainerTypes.HttpValidationHandler)),
    __metadata("design:paramtypes", [Object, Object])
], AsyncValidatorFactory);



/***/ }),

/***/ "../Core/Factory/FormControlFactory.ts":
/*!*********************************************!*\
  !*** ../Core/Factory/FormControlFactory.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FormControlFactory: () => (/* binding */ FormControlFactory)
/* harmony export */ });
/* harmony import */ var inversify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/esm/index.js");
/* harmony import */ var _Types_ContainerTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Types/ContainerTypes */ "../Core/Types/ContainerTypes.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


let FormControlFactory = class FormControlFactory {
    validatorFactory;
    asyncValidatorFactory;
    controlFactory;
    constructor(validatorFactory, asyncValidatorFactory, controlFactory) {
        this.validatorFactory = validatorFactory;
        this.asyncValidatorFactory = asyncValidatorFactory;
        this.controlFactory = controlFactory;
    }
    createControl(key, rules) {
        const validators = this.validatorFactory.createValidators(rules);
        const asyncValidators = this.asyncValidatorFactory.createAsyncValidators(rules);
        return this.create(key, validators, asyncValidators);
    }
    create(key, validators, asyncValidators = []) {
        const control = this.controlFactory.createInstance();
        control.initialize(key, validators, asyncValidators);
        return control;
    }
};
FormControlFactory = __decorate([
    (0,inversify__WEBPACK_IMPORTED_MODULE_0__.injectable)(),
    __param(0, (0,inversify__WEBPACK_IMPORTED_MODULE_0__.inject)(_Types_ContainerTypes__WEBPACK_IMPORTED_MODULE_1__.ContainerTypes.ValidatorFactory)),
    __param(1, (0,inversify__WEBPACK_IMPORTED_MODULE_0__.inject)(_Types_ContainerTypes__WEBPACK_IMPORTED_MODULE_1__.ContainerTypes.AsyncValidatorFactory)),
    __param(2, (0,inversify__WEBPACK_IMPORTED_MODULE_0__.inject)(_Types_ContainerTypes__WEBPACK_IMPORTED_MODULE_1__.ContainerTypes.ReactiveFormControlFactory)),
    __metadata("design:paramtypes", [Object, Object, Object])
], FormControlFactory);



/***/ }),

/***/ "../Core/Factory/FormGroupFactory.ts":
/*!*******************************************!*\
  !*** ../Core/Factory/FormGroupFactory.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FormGroupFactory: () => (/* binding */ FormGroupFactory)
/* harmony export */ });
/* harmony import */ var inversify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/esm/index.js");
/* harmony import */ var _Types_ContainerTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Types/ContainerTypes */ "../Core/Types/ContainerTypes.ts");
/* harmony import */ var _FormGroup_ReactiveFormGroup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../FormGroup/ReactiveFormGroup */ "../Core/FormGroup/ReactiveFormGroup.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



let FormGroupFactory = class FormGroupFactory {
    controlFactory;
    constructor(controlFactory) {
        this.controlFactory = controlFactory;
    }
    // Optional alias or overload for more semantic naming
    createGroup(parsed) {
        return this.create(parsed);
    }
    create(formDef) {
        const group = new _FormGroup_ReactiveFormGroup__WEBPACK_IMPORTED_MODULE_2__.ReactiveFormGroup();
        for (const def of formDef.controls) {
            const control = this.controlFactory.createControl(def.key, def.rules);
            group.registerControl(def.key, control);
        }
        return group;
    }
};
FormGroupFactory = __decorate([
    (0,inversify__WEBPACK_IMPORTED_MODULE_0__.injectable)(),
    __param(0, (0,inversify__WEBPACK_IMPORTED_MODULE_0__.inject)(_Types_ContainerTypes__WEBPACK_IMPORTED_MODULE_1__.ContainerTypes.FormControlFactory)),
    __metadata("design:paramtypes", [Object])
], FormGroupFactory);



/***/ }),

/***/ "../Core/Factory/ReactiveFormControlFactory.ts":
/*!*****************************************************!*\
  !*** ../Core/Factory/ReactiveFormControlFactory.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReactiveFormControlFactory: () => (/* binding */ ReactiveFormControlFactory)
/* harmony export */ });
/* harmony import */ var inversify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/esm/index.js");
/* harmony import */ var _FormControl_ReactiveFormControl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../FormControl/ReactiveFormControl */ "../Core/FormControl/ReactiveFormControl.ts");
/* harmony import */ var _Types_ContainerTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Types/ContainerTypes */ "../Core/Types/ContainerTypes.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



let ReactiveFormControlFactory = class ReactiveFormControlFactory {
    fieldStateProvider;
    constructor(fieldStateProvider) {
        this.fieldStateProvider = fieldStateProvider;
    }
    createInstance() {
        return new _FormControl_ReactiveFormControl__WEBPACK_IMPORTED_MODULE_1__.ReactiveFormControl(this.fieldStateProvider);
    }
};
ReactiveFormControlFactory = __decorate([
    (0,inversify__WEBPACK_IMPORTED_MODULE_0__.injectable)(),
    __param(0, (0,inversify__WEBPACK_IMPORTED_MODULE_0__.inject)(_Types_ContainerTypes__WEBPACK_IMPORTED_MODULE_2__.ContainerTypes.FormStateProvider)),
    __metadata("design:paramtypes", [Object])
], ReactiveFormControlFactory);



/***/ }),

/***/ "../Core/Factory/ValidatorFactory.ts":
/*!*******************************************!*\
  !*** ../Core/Factory/ValidatorFactory.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ValidatorFactory: () => (/* binding */ ValidatorFactory)
/* harmony export */ });
/* harmony import */ var inversify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/esm/index.js");
/* harmony import */ var _Validators_RequiredValidator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Validators/RequiredValidator */ "../Core/Validators/RequiredValidator.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


let ValidatorFactory = class ValidatorFactory {
    createValidators(rules) {
        return rules
            .map((rule) => this.createValidator(rule))
            .filter((v) => v !== null);
    }
    createValidator(rule) {
        switch (rule.type) {
            case "required":
                return new _Validators_RequiredValidator__WEBPACK_IMPORTED_MODULE_1__.RequiredValidator(rule);
            case "minLength":
                return new _Validators_RequiredValidator__WEBPACK_IMPORTED_MODULE_1__.MinLengthValidator(rule);
            case "maxLength":
                return new _Validators_RequiredValidator__WEBPACK_IMPORTED_MODULE_1__.MaxLengthValidator(rule);
            case "pattern":
                return new _Validators_RequiredValidator__WEBPACK_IMPORTED_MODULE_1__.PatternValidator(rule);
            case "matches":
                return new _Validators_RequiredValidator__WEBPACK_IMPORTED_MODULE_1__.MatchesValidator(rule);
            default:
                console.warn(`[ValidatorFactory] Unknown validator type: ${rule.type}`);
                return null;
        }
    }
};
ValidatorFactory = __decorate([
    (0,inversify__WEBPACK_IMPORTED_MODULE_0__.injectable)()
], ValidatorFactory);



/***/ }),

/***/ "../Core/FormControl/ReactiveFormControl.ts":
/*!**************************************************!*\
  !*** ../Core/FormControl/ReactiveFormControl.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReactiveFormControl: () => (/* binding */ ReactiveFormControl)
/* harmony export */ });
/* harmony import */ var inversify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/esm/index.js");
/* harmony import */ var _Utils_SimpleSubject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Utils/SimpleSubject */ "../Core/Utils/SimpleSubject.ts");
/* harmony import */ var _Types_ContainerTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Types/ContainerTypes */ "../Core/Types/ContainerTypes.ts");
/* harmony import */ var _Utils_Debounce__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Utils/Debounce */ "../Core/Utils/Debounce.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




let ReactiveFormControl = class ReactiveFormControl {
    stateProvider;
    key;
    value = "";
    state = "idle";
    errorMessage = null;
    dirty = false;
    touched = false;
    validatedOnce = false;
    validators = [];
    asyncValidators = [];
    currentRunId = 0;
    lastValidatedValue = null;
    formGroup;
    value$ = new _Utils_SimpleSubject__WEBPACK_IMPORTED_MODULE_1__.SimpleSubject();
    error$ = new _Utils_SimpleSubject__WEBPACK_IMPORTED_MODULE_1__.SimpleSubject();
    state$ = new _Utils_SimpleSubject__WEBPACK_IMPORTED_MODULE_1__.SimpleSubject();
    debouncer;
    constructor(stateProvider) {
        this.stateProvider = stateProvider;
        this.debouncer = new _Utils_Debounce__WEBPACK_IMPORTED_MODULE_3__.Debouncer(this.updateValueDebounced.bind(this), 300);
    }
    initialize(key, validators, asyncValidators = []) {
        this.key = key;
        this.validators = validators;
        this.asyncValidators = asyncValidators;
    }
    setFormGroup(group) {
        this.formGroup = group;
    }
    onValueChange(cb) {
        this.value$.subscribe(cb);
    }
    onErrorChange(cb) {
        this.error$.subscribe(cb);
    }
    onStateChange(cb) {
        this.state$.subscribe(cb);
    }
    async setValue(val) {
        if (val === this.value)
            return;
        this.value = val;
        this.dirty = true;
        this.emitValue(val);
        this.emitDirtyTouched();
        if (this.touched) {
            this.debouncer.run(val);
        }
    }
    updateValueDebounced(val) {
        if (val === this.value)
            return;
        this.value = val;
        this.dirty = true;
        this.emitValue(val);
        this.emitDirtyTouched();
        if (this.touched) {
            this.debouncer.run(val);
        }
    }
    async markAsTouched() {
        if (!this.touched) {
            this.touched = true;
            this.emitDirtyTouched();
            if (this.dirty || !this.validatedOnce) {
                await this.validateInternal(this.value, true);
            }
        }
    }
    validate() {
        this.touched = true;
        this.validatedOnce = true;
        this.emitDirtyTouched();
        return this.validateInternal(this.value, true);
    }
    validateNow() {
        return this.validate();
    }
    setValidationRules(validators, asyncValidators = []) {
        this.validators = validators;
        this.asyncValidators = asyncValidators;
        if (this.touched || this.dirty) {
            this.validate();
        }
    }
    async setServerValidationState(result) {
        this.validatedOnce = true;
        this.touched = true;
        this.setState(result.state);
        this.setError(result.state === "valid" ? null : result.message || "Invalid input");
    }
    // --- Observables + Emitters ---
    emitValue(val) {
        this.value$.next(val);
        this.emitState();
    }
    setError(msg) {
        this.errorMessage = msg;
        this.error$.next(msg);
        this.emitState();
    }
    setState(state) {
        this.state = state;
        this.state$.next(state);
        this.emitState();
    }
    emitDirtyTouched() {
        this.emitState();
    }
    emitState() {
        const state = {
            key: this.key,
            value: this.value,
            state: this.state,
            error: this.errorMessage,
            dirty: this.dirty,
            touched: this.touched,
        };
        this.stateProvider.updateFieldState(state);
    }
    async validateInternal(val, isExplicit = false) {
        const runId = ++this.currentRunId;
        const context = this.formGroup?.getValue() ?? { [this.key]: val };
        // Required / Early exit
        if (val.trim() === "") {
            this.setState("invalid");
            this.setError("Field is required.");
            return false;
        }
        for (const validator of this.validators) {
            const rawResult = await Promise.resolve(validator.validate(val, context));
            const result = typeof rawResult === "boolean"
                ? { isValid: rawResult, message: rawResult ? undefined : "Invalid input" }
                : rawResult;
            if (!result.isValid) {
                this.setState("invalid");
                this.setError(result.message ?? "Invalid input");
                return false;
            }
        }
        if (this.asyncValidators.length > 0 && (isExplicit || this.lastValidatedValue !== val)) {
            this.setState("validating");
            this.setError(null);
            for (const validator of this.asyncValidators) {
                const result = await validator.validate(val, context);
                if (this.currentRunId !== runId)
                    return false;
                if (!result.isValid) {
                    this.setState("invalid");
                    this.setError(result.message ?? "Invalid input");
                    return false;
                }
            }
            this.lastValidatedValue = val;
        }
        this.setState("valid");
        this.setError(null);
        return true;
    }
    // --- Getters ---
    isDirty() {
        return this.dirty;
    }
    wasTouched() {
        return this.touched;
    }
    isValid() {
        return this.state === "valid";
    }
    get currentValue() {
        return this.value;
    }
    get currentState() {
        return this.state;
    }
    getError() {
        return this.errorMessage;
    }
};
ReactiveFormControl = __decorate([
    (0,inversify__WEBPACK_IMPORTED_MODULE_0__.injectable)(),
    __param(0, (0,inversify__WEBPACK_IMPORTED_MODULE_0__.inject)(_Types_ContainerTypes__WEBPACK_IMPORTED_MODULE_2__.ContainerTypes.FieldStateProvider)),
    __metadata("design:paramtypes", [Object])
], ReactiveFormControl);



/***/ }),

/***/ "../Core/FormGroup/ReactiveFormGroup.ts":
/*!**********************************************!*\
  !*** ../Core/FormGroup/ReactiveFormGroup.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReactiveFormGroup: () => (/* binding */ ReactiveFormGroup)
/* harmony export */ });
/* harmony import */ var inversify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/esm/index.js");
/* harmony import */ var _Utils_SimpleSubject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Utils/SimpleSubject */ "../Core/Utils/SimpleSubject.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


let ReactiveFormGroup = class ReactiveFormGroup {
    controls = new Map();
    debug$ = new _Utils_SimpleSubject__WEBPACK_IMPORTED_MODULE_1__.SimpleSubject();
    registerControl(key, control) {
        this.controls.set(key, control);
        // Auto-wire debug pipe for any control change
        control.onValueChange(() => this.emitDebug());
        control.onStateChange(() => this.emitDebug());
        control.onErrorChange(() => this.emitDebug());
    }
    getControl(key) {
        return this.controls.get(key);
    }
    getValue() {
        const result = {};
        for (const [key, control] of this.controls.entries()) {
            result[key] = control.currentValue;
        }
        return result;
    }
    async validateAll() {
        const results = await Promise.all(Array.from(this.controls.values()).map(c => c.validate()));
        return results.every(result => result === true);
    }
    isValid() {
        return Array.from(this.controls.values()).every(c => c.isValid());
    }
    isDirty() {
        return Array.from(this.controls.values()).some(c => c.isDirty());
    }
    wasTouched() {
        return Array.from(this.controls.values()).some(c => c.wasTouched());
    }
    onDebugUpdate(callback) {
        this.debug$.subscribe(callback);
    }
    emitDebug() {
        const debug = {
            timestamp: Date.now(),
            isValid: this.isValid(),
            isDirty: this.isDirty(),
            wasTouched: this.wasTouched(),
            values: {},
            states: {},
            errors: {},
            raw: {}
        };
        for (const [key, control] of this.controls.entries()) {
            debug.values[key] = control.currentValue;
            debug.states[key] = control.currentState;
            debug.errors[key] = control.getError();
            debug.raw[key] = control;
        }
        this.debug$.next(debug);
    }
};
ReactiveFormGroup = __decorate([
    (0,inversify__WEBPACK_IMPORTED_MODULE_0__.injectable)()
], ReactiveFormGroup);



/***/ }),

/***/ "../Core/Handlers/HttpValidationHandler.ts":
/*!*************************************************!*\
  !*** ../Core/Handlers/HttpValidationHandler.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HttpValidationHandler: () => (/* binding */ HttpValidationHandler)
/* harmony export */ });
/* harmony import */ var inversify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/esm/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let HttpValidationHandler = class HttpValidationHandler {
    async validateAsync(rule, value, context) {
        try {
            const endpoint = rule.methodName; // Expect full URL
            const payload = { value, context, args: rule.args || [] };
            const res = await fetch(endpoint, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload)
            });
            if (!res.ok)
                throw new Error("Request failed");
            return await res.json();
        }
        catch (err) {
            console.error("[HttpValidationHandler] Failed:", err);
            return { isValid: false, message: "Validation service unavailable." };
        }
    }
};
HttpValidationHandler = __decorate([
    (0,inversify__WEBPACK_IMPORTED_MODULE_0__.injectable)()
], HttpValidationHandler);



/***/ }),

/***/ "../Core/Handlers/SignalRValidationHandler.ts":
/*!****************************************************!*\
  !*** ../Core/Handlers/SignalRValidationHandler.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SignalRValidationHandler: () => (/* binding */ SignalRValidationHandler)
/* harmony export */ });
/* harmony import */ var inversify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/esm/index.js");
/* harmony import */ var _Types_ContainerTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Types/ContainerTypes */ "../Core/Types/ContainerTypes.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


let SignalRValidationHandler = class SignalRValidationHandler {
    connectionProvider;
    constructor(connectionProvider) {
        this.connectionProvider = connectionProvider;
    }
    async validateAsync(rule, value, context) {
        const connection = await this.connectionProvider.getConnection();
        const result = await connection.invoke(rule.methodName, value, context, rule.args ?? []);
        return result;
    }
};
SignalRValidationHandler = __decorate([
    (0,inversify__WEBPACK_IMPORTED_MODULE_0__.injectable)(),
    __param(0, (0,inversify__WEBPACK_IMPORTED_MODULE_0__.inject)(_Types_ContainerTypes__WEBPACK_IMPORTED_MODULE_1__.ContainerTypes.SignalRConnectionProvider)),
    __metadata("design:paramtypes", [Object])
], SignalRValidationHandler);



/***/ }),

/***/ "../Core/Providers/FormStateProvider.ts":
/*!**********************************************!*\
  !*** ../Core/Providers/FormStateProvider.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FormStateProvider: () => (/* binding */ FormStateProvider)
/* harmony export */ });
class FormStateProvider {
    fieldStates = new Map();
    fieldSubscribers = new Map();
    formSubscribers = [];
    getFieldState(key) {
        return this.fieldStates.get(key) ?? null;
    }
    updateFieldState(state) {
        this.fieldStates.set(state.key, state);
        // Notify field listeners
        this.fieldSubscribers.get(state.key)?.forEach(cb => cb(state));
        // Notify form-level listeners
        const formState = this.getFormState();
        this.formSubscribers.forEach(cb => cb(formState));
    }
    subscribeField(key, callback) {
        if (!this.fieldSubscribers.has(key)) {
            this.fieldSubscribers.set(key, []);
        }
        this.fieldSubscribers.get(key).push(callback);
    }
    subscribeForm(callback) {
        this.formSubscribers.push(callback);
    }
    getFormState() {
        const fields = {};
        let isValid = true;
        for (const [key, value] of this.fieldStates.entries()) {
            fields[key] = value;
            if (value.state === "invalid")
                isValid = false;
        }
        return { fields, isValid };
    }
}


/***/ }),

/***/ "../Core/Providers/SignalRConnectionProvider.ts":
/*!******************************************************!*\
  !*** ../Core/Providers/SignalRConnectionProvider.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SignalRConnectionProvider: () => (/* binding */ SignalRConnectionProvider)
/* harmony export */ });
/* harmony import */ var _microsoft_signalr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/signalr */ "../node_modules/@microsoft/signalr/dist/esm/HubConnectionBuilder.js");
/* harmony import */ var inversify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/esm/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


let SignalRConnectionProvider = class SignalRConnectionProvider {
    connection = null;
    connecting = null;
    connectionId = null;
    connectionIdPromise = null;
    async getConnection() {
        if (this.connection)
            return this.connection;
        if (!this.connecting) {
            this.connecting = new Promise(async (resolve, reject) => {
                try {
                    const conn = new _microsoft_signalr__WEBPACK_IMPORTED_MODULE_1__.HubConnectionBuilder()
                        .withUrl("/hubs/validation")
                        .withAutomaticReconnect()
                        .build();
                    await conn.start();
                    console.log("[SignalR] Connected to validation hub.");
                    this.connection = conn;
                    // Optionally pre-fetch connectionId
                    this.getConnectionId().catch((err) => console.warn("[SignalR] Could not get connectionId:", err));
                    resolve(conn);
                }
                catch (err) {
                    console.error("[SignalR] Connection failed:", err);
                    reject(err);
                }
                finally {
                    this.connecting = null;
                }
            });
        }
        return this.connecting;
    }
    /**
     * Gets the current connectionId (resolved after connection is started).
     * Assumes the backend exposes a hub method named 'GetConnectionId'.
     */
    async getConnectionId() {
        if (this.connectionId)
            return this.connectionId;
        if (!this.connectionIdPromise) {
            this.connectionIdPromise = new Promise(async (resolve, reject) => {
                try {
                    const conn = await this.getConnection();
                    // Assumes your hub has a 'GetConnectionId' method
                    const id = await conn.invoke("GetConnectionId");
                    this.connectionId = id;
                    resolve(id);
                }
                catch (err) {
                    reject(err);
                }
            });
        }
        return this.connectionIdPromise;
    }
};
SignalRConnectionProvider = __decorate([
    (0,inversify__WEBPACK_IMPORTED_MODULE_0__.injectable)()
], SignalRConnectionProvider);



/***/ }),

/***/ "../Core/Types/ContainerTypes.ts":
/*!***************************************!*\
  !*** ../Core/Types/ContainerTypes.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContainerTypes: () => (/* binding */ ContainerTypes)
/* harmony export */ });
const ContainerTypes = {
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
    ReactiveValidatorService: Symbol.for("ReactiveValidatorService")
};


/***/ }),

/***/ "../Core/Utils/Debounce.ts":
/*!*********************************!*\
  !*** ../Core/Utils/Debounce.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Debouncer: () => (/* binding */ Debouncer)
/* harmony export */ });
// utils/debounce.ts
class Debouncer {
    fn;
    delay;
    debouncedFn;
    constructor(fn, delay = 300) {
        this.fn = fn;
        this.delay = delay;
        this.debouncedFn = this.createDebouncedFn();
    }
    createDebouncedFn() {
        let timer = null;
        const debounced = ((...args) => {
            if (timer)
                clearTimeout(timer);
            timer = setTimeout(() => this.fn(...args), this.delay);
        });
        debounced.cancel = () => {
            if (timer) {
                clearTimeout(timer);
                timer = null;
            }
        };
        return debounced;
    }
    run(...args) {
        this.debouncedFn(...args);
    }
    cancel() {
        this.debouncedFn.cancel();
    }
}


/***/ }),

/***/ "../Core/Utils/SimpleSubject.ts":
/*!**************************************!*\
  !*** ../Core/Utils/SimpleSubject.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SimpleSubject: () => (/* binding */ SimpleSubject)
/* harmony export */ });
class SimpleSubject {
    listeners = new Set();
    subscribe(listener) {
        this.listeners.add(listener);
    }
    unsubscribe(listener) {
        this.listeners.delete(listener);
    }
    next(value) {
        this.emit(value);
    }
    emit(value) {
        for (const listener of this.listeners) {
            try {
                listener(value);
            }
            catch (err) {
                console.error("[SimpleSubject] Error in subscriber:", err);
            }
        }
    }
    clear() {
        this.listeners.clear();
    }
    getSubscriberCount() {
        return this.listeners.size;
    }
}


/***/ }),

/***/ "../Core/Validators/RequiredValidator.ts":
/*!***********************************************!*\
  !*** ../Core/Validators/RequiredValidator.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MatchesValidator: () => (/* binding */ MatchesValidator),
/* harmony export */   MaxLengthValidator: () => (/* binding */ MaxLengthValidator),
/* harmony export */   MinLengthValidator: () => (/* binding */ MinLengthValidator),
/* harmony export */   PatternValidator: () => (/* binding */ PatternValidator),
/* harmony export */   RequiredValidator: () => (/* binding */ RequiredValidator)
/* harmony export */ });
class RequiredValidator {
    rule;
    constructor(rule) {
        this.rule = rule;
    }
    validate(value) {
        const isValid = value.trim().length > 0;
        return isValid || { isValid: false, message: this.rule.message || "This field is required." };
    }
}
class MinLengthValidator {
    rule;
    constructor(rule) {
        this.rule = rule;
    }
    validate(value) {
        const min = Number(this.rule.value || 0);
        const isValid = value.length >= min;
        return isValid || {
            isValid: false,
            message: this.rule.message || `Minimum length is ${min}.`
        };
    }
}
class MaxLengthValidator {
    rule;
    constructor(rule) {
        this.rule = rule;
    }
    validate(value) {
        const max = Number(this.rule.value || Infinity);
        const isValid = value.length <= max;
        return isValid || {
            isValid: false,
            message: this.rule.message || `Maximum length is ${max}.`
        };
    }
}
class PatternValidator {
    rule;
    constructor(rule) {
        this.rule = rule;
    }
    validate(value) {
        const patternValue = typeof this.rule.value === "string" ? this.rule.value : String(this.rule.value || ".*");
        const pattern = new RegExp(patternValue);
        const isValid = pattern.test(value);
        return isValid || {
            isValid: false,
            message: this.rule.message || `Value does not match the required pattern.`
        };
    }
}
class MatchesValidator {
    rule;
    constructor(rule) {
        this.rule = rule;
    }
    validate(value, context) {
        const matchKey = String(this.rule.value || "");
        const matchValue = context[matchKey];
        const isValid = value === matchValue;
        return isValid || {
            isValid: false,
            message: this.rule.message || `Value does not match ${matchKey}.`
        };
    }
}


/***/ }),

/***/ "../Services/FormParserService.ts":
/*!****************************************!*\
  !*** ../Services/FormParserService.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FormParserService: () => (/* binding */ FormParserService)
/* harmony export */ });
class FormParserService {
    /**
     * Parses all forms on the page marked with `[data-reactive-form]`
     */
    parseAll() {
        const forms = Array.from(document.querySelectorAll("form[data-reactive-form]"));
        return forms
            .map(form => this.parseForm(form))
            .filter((x) => x !== null);
    }
    /**
     * Parses a single form element.
     */
    parseForm(form) {
        const raw = form.getAttribute("data-validate");
        if (!raw)
            return null;
        let parsed;
        try {
            parsed = JSON.parse(raw);
        }
        catch (err) {
            console.warn("[FormParserService] Malformed validation JSON on form:", form, err);
            return null;
        }
        const controls = [];
        for (const [key, rulesRaw] of Object.entries(parsed)) {
            const input = form.querySelector(`[name='${key}'], [id='${key}']`);
            if (!input) {
                console.warn(`[FormParserService] No matching input found for key: '${key}'`);
                continue;
            }
            try {
                const ruleList = this.parseRuleList(rulesRaw);
                controls.push({ input, key, rules: ruleList });
            }
            catch (err) {
                console.warn(`[FormParserService] Failed to parse rules for '${key}':`, err);
            }
        }
        return { form, controls };
    }
    parseRuleList(rules) {
        const out = [];
        for (const [type, val] of Object.entries(rules)) {
            if (typeof type !== "string")
                continue;
            const config = {
                type,
                value: val,
            };
            if (typeof val === "object" && val !== null && !Array.isArray(val)) {
                config.message = val.message;
                config.value = val.value ?? val;
                config.methodName = val.methodName;
                config.args = val.args;
                config.pattern = val.pattern;
                config.matches = val.matches;
                config.validate = val.validate;
            }
            out.push(config);
        }
        return out;
    }
}


/***/ }),

/***/ "../Services/ReactiveFormService.ts":
/*!******************************************!*\
  !*** ../Services/ReactiveFormService.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReactiveFormService: () => (/* binding */ ReactiveFormService)
/* harmony export */ });
/* harmony import */ var inversify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/esm/index.js");
/* harmony import */ var _Core_Types_ContainerTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Core/Types/ContainerTypes */ "../Core/Types/ContainerTypes.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


let ReactiveFormService = class ReactiveFormService {
    parser;
    groupFactory;
    formMap = new Map();
    constructor(parser, groupFactory) {
        this.parser = parser;
        this.groupFactory = groupFactory;
    }
    bootstrapAll() {
        const forms = this.parser.parseAll();
        forms.forEach((formDef) => this.bootstrapFormDefinition(formDef));
    }
    bootstrapForm(form) {
        const def = this.parser.parseForm(form);
        if (def) {
            this.bootstrapFormDefinition(def);
        }
        else {
            console.warn("[ReactiveFormService] Could not parse form:", form);
        }
    }
    bootstrapFormDefinition(def) {
        const group = this.groupFactory.create(def);
        this.formMap.set(def.form, group);
    }
    getFormGroup(form) {
        return this.formMap.get(form) ?? null;
    }
    onDebugUpdate(form, cb) {
        const group = this.getFormGroup(form);
        if (!group) {
            console.warn("[ReactiveFormService] Form not registered:", form);
            return;
        }
        group.onDebugUpdate(cb);
    }
};
ReactiveFormService = __decorate([
    (0,inversify__WEBPACK_IMPORTED_MODULE_0__.injectable)(),
    __param(0, (0,inversify__WEBPACK_IMPORTED_MODULE_0__.inject)(_Core_Types_ContainerTypes__WEBPACK_IMPORTED_MODULE_1__.ContainerTypes.FormParserService)),
    __param(1, (0,inversify__WEBPACK_IMPORTED_MODULE_0__.inject)(_Core_Types_ContainerTypes__WEBPACK_IMPORTED_MODULE_1__.ContainerTypes.FormGroupFactory)),
    __metadata("design:paramtypes", [Object, Object])
], ReactiveFormService);



/***/ }),

/***/ "../Services/ReactiveValidatorService.ts":
/*!***********************************************!*\
  !*** ../Services/ReactiveValidatorService.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ReactiveValidatorService: () => (/* binding */ ReactiveValidatorService)
/* harmony export */ });
/* harmony import */ var inversify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! inversify */ "../node_modules/inversify/lib/esm/index.js");
/* harmony import */ var _Core_Types_ContainerTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Core/Types/ContainerTypes */ "../Core/Types/ContainerTypes.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


let ReactiveValidatorService = class ReactiveValidatorService {
    parser;
    controlFactory;
    groupFactory;
    formRegistry = new Map();
    constructor(parser, controlFactory, groupFactory) {
        this.parser = parser;
        this.controlFactory = controlFactory;
        this.groupFactory = groupFactory;
    }
    createControlFromRules(key, rules) {
        return this.controlFactory.createControl(key, rules);
    }
    registerForm(form) {
        const def = this.parser.parseForm(form);
        if (!def) {
            throw new Error("Failed to parse form definition.");
        }
        const group = this.groupFactory.create(def);
        this.formRegistry.set(form, group);
        return group;
    }
    async validateForm(group) {
        return await group.validateAll();
    }
};
ReactiveValidatorService = __decorate([
    (0,inversify__WEBPACK_IMPORTED_MODULE_0__.injectable)(),
    __param(0, (0,inversify__WEBPACK_IMPORTED_MODULE_0__.inject)(_Core_Types_ContainerTypes__WEBPACK_IMPORTED_MODULE_1__.ContainerTypes.FormParserService)),
    __param(1, (0,inversify__WEBPACK_IMPORTED_MODULE_0__.inject)(_Core_Types_ContainerTypes__WEBPACK_IMPORTED_MODULE_1__.ContainerTypes.FormControlFactory)),
    __param(2, (0,inversify__WEBPACK_IMPORTED_MODULE_0__.inject)(_Core_Types_ContainerTypes__WEBPACK_IMPORTED_MODULE_1__.ContainerTypes.FormGroupFactory)),
    __metadata("design:paramtypes", [Object, Object, Object])
], ReactiveValidatorService);



/***/ }),

/***/ "../node_modules/@inversifyjs/common/lib/esm/index.js":
/*!************************************************************!*\
  !*** ../node_modules/@inversifyjs/common/lib/esm/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LazyServiceIdentifier: () => (/* binding */ r),
/* harmony export */   isPromise: () => (/* binding */ e),
/* harmony export */   stringifyServiceIdentifier: () => (/* binding */ t)
/* harmony export */ });
function e(e){return("object"==typeof e&&null!==e||"function"==typeof e)&&"function"==typeof e.then}function t(e){switch(typeof e){case"string":case"symbol":return e.toString();case"function":return e.name;default:throw new Error(`Unexpected ${typeof e} service id type`)}}const n=Symbol.for("@inversifyjs/common/islazyServiceIdentifier");class r{[n];#e;constructor(e){this.#e=e,this[n]=!0}static is(e){return"object"==typeof e&&null!==e&&!0===e[n]}unwrap(){return this.#e()}}
//# sourceMappingURL=index.js.map


/***/ }),

/***/ "../node_modules/@inversifyjs/core/lib/esm/index.js":
/*!**********************************************************!*\
  !*** ../node_modules/@inversifyjs/core/lib/esm/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ActivationsService: () => (/* binding */ g),
/* harmony export */   BindingService: () => (/* binding */ m),
/* harmony export */   ClassElementMetadataKind: () => (/* binding */ C),
/* harmony export */   DeactivationsService: () => (/* binding */ h),
/* harmony export */   PlanResultCacheService: () => (/* binding */ Ce),
/* harmony export */   ResolvedValueElementMetadataKind: () => (/* binding */ oe),
/* harmony export */   bindingScopeValues: () => (/* binding */ s),
/* harmony export */   bindingTypeValues: () => (/* binding */ c),
/* harmony export */   decorate: () => (/* binding */ v),
/* harmony export */   getClassMetadata: () => (/* binding */ S),
/* harmony export */   inject: () => (/* binding */ O),
/* harmony export */   injectFromBase: () => (/* binding */ H),
/* harmony export */   injectable: () => (/* binding */ K),
/* harmony export */   multiInject: () => (/* binding */ J),
/* harmony export */   named: () => (/* binding */ W),
/* harmony export */   optional: () => (/* binding */ Y),
/* harmony export */   plan: () => (/* binding */ he),
/* harmony export */   postConstruct: () => (/* binding */ Z),
/* harmony export */   preDestroy: () => (/* binding */ _),
/* harmony export */   resolve: () => (/* binding */ Qe),
/* harmony export */   resolveModuleDeactivations: () => (/* binding */ rt),
/* harmony export */   resolveServiceDeactivations: () => (/* binding */ at),
/* harmony export */   tagged: () => (/* binding */ ee),
/* harmony export */   unmanaged: () => (/* binding */ ie)
/* harmony export */ });
/* harmony import */ var _inversifyjs_reflect_metadata_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @inversifyjs/reflect-metadata-utils */ "../node_modules/@inversifyjs/core/node_modules/@inversifyjs/reflect-metadata-utils/lib/esm/index.js");
/* harmony import */ var _inversifyjs_prototype_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inversifyjs/prototype-utils */ "../node_modules/@inversifyjs/prototype-utils/lib/esm/index.js");
/* harmony import */ var _inversifyjs_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @inversifyjs/common */ "../node_modules/@inversifyjs/common/lib/esm/index.js");
const s={Request:"Request",Singleton:"Singleton",Transient:"Transient"},c={ConstantValue:"ConstantValue",DynamicValue:"DynamicValue",Factory:"Factory",Instance:"Instance",Provider:"Provider",ResolvedValue:"ResolvedValue",ServiceRedirection:"ServiceRedirection"};function*u(...e){for(const t of e)yield*t}class d{#e;#t;#n;constructor(e){this.#e=new Map,this.#t={};for(const t of Reflect.ownKeys(e))this.#t[t]=new Map;this.#n=e}add(e,t){this.#i(e).push(t);for(const n of Reflect.ownKeys(t))this.#o(n,t[n]).push(e)}clone(){const e=Reflect.ownKeys(this.#n),t=new d(this.#n);this.#r(this.#e,t.#e);for(const n of e)this.#r(this.#t[n],t.#t[n]);return t}get(e,t){return this.#t[e].get(t)}getAllKeys(e){return this.#t[e].keys()}removeByRelation(e,t){const n=this.get(e,t);if(void 0===n)return;const i=new Set(n);for(const n of i){const i=this.#e.get(n);if(void 0===i)throw new Error("Expecting model relation, none found");for(const o of i)o[e]===t&&this.#a(n,o);this.#e.delete(n)}}#i(e){let t=this.#e.get(e);return void 0===t&&(t=[],this.#e.set(e,t)),t}#o(e,t){let n=this.#t[e].get(t);return void 0===n&&(n=[],this.#t[e].set(t,n)),n}#r(e,t){for(const[n,i]of e)t.set(n,[...i])}#a(e,t){for(const n of Reflect.ownKeys(t))this.#s(e,n,t[n])}#s(e,t,n){const i=this.#t[t].get(n);if(void 0!==i){const o=i.indexOf(e);-1!==o&&i.splice(o,1),0===i.length&&this.#t[t].delete(n)}}}var l,p,f;!function(e){e.moduleId="moduleId",e.serviceId="serviceId"}(l||(l={}));class g{#c;#u;constructor(e,t){this.#c=t??new d({moduleId:{isOptional:!0},serviceId:{isOptional:!1}}),this.#u=e}static build(e){return new g(e)}add(e,t){this.#c.add(e,t)}clone(){return new g(this.#u,this.#c.clone())}get(e){const t=[],n=this.#c.get(l.serviceId,e);void 0!==n&&t.push(n);const i=this.#u?.get(e);if(void 0!==i&&t.push(i),0!==t.length)return u(...t)}removeAllByModuleId(e){this.#c.removeByRelation(l.moduleId,e)}removeAllByServiceId(e){this.#c.removeByRelation(l.serviceId,e)}}!function(e){e.moduleId="moduleId",e.serviceId="serviceId"}(p||(p={}));class m{#d;#u;constructor(e,t){this.#d=t??new d({moduleId:{isOptional:!0},serviceId:{isOptional:!1}}),this.#u=e}static build(e){return new m(e)}clone(){return new m(this.#u,this.#d.clone())}get(e){return this.getNonParentBindings(e)??this.#u?.get(e)}getNonParentBindings(e){return this.#d.get(p.serviceId,e)}getNonParentBoundServices(){return this.#d.getAllKeys(p.serviceId)}getByModuleId(e){return this.#d.get(p.moduleId,e)??this.#u?.getByModuleId(e)}removeAllByModuleId(e){this.#d.removeByRelation(p.moduleId,e)}removeAllByServiceId(e){this.#d.removeByRelation(p.serviceId,e)}set(e){const t={[p.serviceId]:e.serviceIdentifier};void 0!==e.moduleId&&(t[p.moduleId]=e.moduleId),this.#d.add(e,t)}}!function(e){e.moduleId="moduleId",e.serviceId="serviceId"}(f||(f={}));class h{#l;#u;constructor(e,t){this.#l=t??new d({moduleId:{isOptional:!0},serviceId:{isOptional:!1}}),this.#u=e}static build(e){return new h(e)}add(e,t){this.#l.add(e,t)}clone(){return new h(this.#u,this.#l.clone())}get(e){const t=[],n=this.#l.get(f.serviceId,e);void 0!==n&&t.push(n);const i=this.#u?.get(e);if(void 0!==i&&t.push(i),0!==t.length)return u(...t)}removeAllByModuleId(e){this.#l.removeByRelation(f.moduleId,e)}removeAllByServiceId(e){this.#l.removeByRelation(f.serviceId,e)}}function v(e,t,n){const i=Array.isArray(e)?e:[e];if(void 0!==n)if("number"!=typeof n)Reflect.decorate(i,t.prototype,n);else for(const e of i)e(t,void 0,n);else Reflect.decorate(i,t)}const y="@inversifyjs/core/classMetadataReflectKey";function M(){return{constructorArguments:[],lifecycle:{postConstructMethodName:void 0,preDestroyMethodName:void 0},properties:new Map,scope:void 0}}const I="@inversifyjs/core/pendingClassMetadataCountReflectKey";const w=Symbol.for("@inversifyjs/core/InversifyCoreError");class b extends Error{[w];kind;constructor(e,t,n){super(t,n),this[w]=!0,this.kind=e}static is(e){return"object"==typeof e&&null!==e&&!0===e[w]}static isErrorOfKind(e,t){return b.is(e)&&e.kind===t}}var j,T,C;function S(t){const n=(0,_inversifyjs_reflect_metadata_utils__WEBPACK_IMPORTED_MODULE_0__.getOwnReflectMetadata)(t,y)??M();if(!function(t){const n=(0,_inversifyjs_reflect_metadata_utils__WEBPACK_IMPORTED_MODULE_0__.getOwnReflectMetadata)(t,I);return void 0!==n&&0!==n}(t))return function(e,t){const n=[];if(t.length<e.length)throw new b(j.missingInjectionDecorator,`Found unexpected missing metadata on type "${e.name}". "${e.name}" constructor requires at least ${e.length.toString()} arguments, found ${t.length.toString()} instead.\nAre you using @inject, @multiInject or @unmanaged decorators in every non optional constructor argument?\n\nIf you're using typescript and want to rely on auto injection, set "emitDecoratorMetadata" compiler option to true`);for(let e=0;e<t.length;++e)void 0===t[e]&&n.push(e);if(n.length>0)throw new b(j.missingInjectionDecorator,`Found unexpected missing metadata on type "${e.name}" at constructor indexes "${n.join('", "')}".\n\nAre you using @inject, @multiInject or @unmanaged decorators at those indexes?\n\nIf you're using typescript and want to rely on auto injection, set "emitDecoratorMetadata" compiler option to true`)}(t,n.constructorArguments),n;!function(e,t){const n=[];for(let i=0;i<t.constructorArguments.length;++i){const o=t.constructorArguments[i];void 0!==o&&o.kind!==T.unknown||n.push(`  - Missing or incomplete metadata for type "${e.name}" at constructor argument with index ${i.toString()}.\nEvery constructor parameter must be decorated either with @inject, @multiInject or @unmanaged decorator.`)}for(const[i,o]of t.properties)o.kind===T.unknown&&n.push(`  - Missing or incomplete metadata for type "${e.name}" at property "${i.toString()}".\nThis property must be decorated either with @inject or @multiInject decorator.`);if(0===n.length)throw new b(j.unknown,`Unexpected class metadata for type "${e.name}" with uncompletion traces.\nThis might be caused by one of the following reasons:\n\n1. A third party library is targeting inversify reflection metadata.\n2. A bug is causing the issue. Consider submiting an issue to fix it.`);throw new b(j.missingInjectionDecorator,`Invalid class metadata at type ${e.name}:\n\n${n.join("\n\n")}`)}(t,n)}function A(){return 0}function $(e){return n=>{void 0!==n&&n.kind===T.unknown&&(0,_inversifyjs_reflect_metadata_utils__WEBPACK_IMPORTED_MODULE_0__.updateOwnReflectMetadata)(e,I,A,(e=>e-1))}}function x(e,t){return(...n)=>i=>{if(void 0===i)return e(...n);if(i.kind===C.unmanaged)throw new b(j.injectionDecoratorConflict,"Unexpected injection found. Multiple @inject, @multiInject or @unmanaged decorators found");return t(i,...n)}}function B(e){if(e.kind!==T.unknown&&!0!==e.isFromTypescriptParamType)throw new b(j.injectionDecoratorConflict,"Unexpected injection found. Multiple @inject, @multiInject or @unmanaged decorators found")}!function(e){e[e.injectionDecoratorConflict=0]="injectionDecoratorConflict",e[e.missingInjectionDecorator=1]="missingInjectionDecorator",e[e.planning=2]="planning",e[e.resolution=3]="resolution",e[e.unknown=4]="unknown"}(j||(j={})),function(e){e[e.unknown=32]="unknown"}(T||(T={})),function(e){e[e.multipleInjection=0]="multipleInjection",e[e.singleInjection=1]="singleInjection",e[e.unmanaged=2]="unmanaged"}(C||(C={}));const R=x((function(e,t){return{kind:e,name:void 0,optional:!1,tags:new Map,value:t}}),(function(e,t,n){return B(e),{...e,kind:t,value:n}}));function k(e,t){return n=>{const i=n.properties.get(t);return n.properties.set(t,e(i)),n}}var P;function D(e,t,n,i){if(b.isErrorOfKind(i,j.injectionDecoratorConflict)){const o=function(e,t,n){if(void 0===n){if(void 0===t)throw new b(j.unknown,"Unexpected undefined property and index values");return{kind:P.property,property:t,targetClass:e.constructor}}return"number"==typeof n?{index:n,kind:P.parameter,targetClass:e}:{kind:P.method,method:t,targetClass:e}}(e,t,n);throw new b(j.injectionDecoratorConflict,`Unexpected injection error.\n\nCause:\n\n${i.message}\n\nDetails\n\n${function(e){switch(e.kind){case P.method:return`[class: "${e.targetClass.name}", method: "${e.method.toString()}"]`;case P.parameter:return`[class: "${e.targetClass.name}", index: "${e.index.toString()}"]`;case P.property:return`[class: "${e.targetClass.name}", property: "${e.property.toString()}"]`}}(o)}`,{cause:i})}throw i}function V(e,n){return(i,o,r)=>{try{void 0===r?function(e,n){const i=F(e,n);return(e,n)=>{(0,_inversifyjs_reflect_metadata_utils__WEBPACK_IMPORTED_MODULE_0__.updateOwnReflectMetadata)(e.constructor,y,M,k(i(e),n))}}(e,n)(i,o):"number"==typeof r?function(e,n){const i=F(e,n);return(e,n,o)=>{if(!function(e,t){return"function"==typeof e&&void 0===t}(e,n))throw new b(j.injectionDecoratorConflict,`Found an @inject decorator in a non constructor parameter.\nFound @inject decorator at method "${n?.toString()??""}" at class "${e.constructor.name}"`);(0,_inversifyjs_reflect_metadata_utils__WEBPACK_IMPORTED_MODULE_0__.updateOwnReflectMetadata)(e,y,M,function(e,t){return n=>{const i=n.constructorArguments[t];return n.constructorArguments[t]=e(i),n}}(i(e),o))}}(e,n)(i,o,r):function(e,n){const i=F(e,n);return(e,n,o)=>{if(!function(e){return void 0!==e.set}(o))throw new b(j.injectionDecoratorConflict,`Found an @inject decorator in a non setter property method.\nFound @inject decorator at method "${n.toString()}" at class "${e.constructor.name}"`);(0,_inversifyjs_reflect_metadata_utils__WEBPACK_IMPORTED_MODULE_0__.updateOwnReflectMetadata)(e.constructor,y,M,k(i(e),n))}}(e,n)(i,o,r)}catch(e){D(i,o,r,e)}}}function F(e,t){return n=>{const i=t(n);return t=>(i(t),e(t))}}function O(e){return V(R(C.singleInjection,e),$)}!function(e){e[e.method=0]="method",e[e.parameter=1]="parameter",e[e.property=2]="property"}(P||(P={}));const N="@inversifyjs/core/classIsInjectableFlagReflectKey";const E=[Array,BigInt,Boolean,Function,Number,Object,String];function U(n){const i=(0,_inversifyjs_reflect_metadata_utils__WEBPACK_IMPORTED_MODULE_0__.getOwnReflectMetadata)(n,"design:paramtypes");void 0!==i&&(0,_inversifyjs_reflect_metadata_utils__WEBPACK_IMPORTED_MODULE_0__.updateOwnReflectMetadata)(n,y,M,function(e){return t=>(e.forEach(((e,n)=>{var i;void 0!==t.constructorArguments[n]||(i=e,E.includes(i))||(t.constructorArguments[n]=function(e){return{isFromTypescriptParamType:!0,kind:C.singleInjection,name:void 0,optional:!1,tags:new Map,value:e}}(e))})),t)}(i))}function K(i){return o=>{!function(t){if(void 0!==(0,_inversifyjs_reflect_metadata_utils__WEBPACK_IMPORTED_MODULE_0__.getOwnReflectMetadata)(t,N))throw new b(j.injectionDecoratorConflict,`Cannot apply @injectable decorator multiple times at class "${t.name}"`);(0,_inversifyjs_reflect_metadata_utils__WEBPACK_IMPORTED_MODULE_0__.setReflectMetadata)(t,N,!0)}(o),U(o),void 0!==i&&(0,_inversifyjs_reflect_metadata_utils__WEBPACK_IMPORTED_MODULE_0__.updateOwnReflectMetadata)(o,y,M,(e=>({...e,scope:i})))}}function q(e,t,n){let i;return e.extendConstructorArguments??!0?(i=[...t.constructorArguments],n.constructorArguments.map(((e,t)=>{i[t]=e}))):i=n.constructorArguments,i}function z(e,t,n){let i;return i=e.extendProperties??!0?new Map(u(t.properties,n.properties)):n.properties,i}function G(e){return n=>{const i=S(e.type);(0,_inversifyjs_reflect_metadata_utils__WEBPACK_IMPORTED_MODULE_0__.updateOwnReflectMetadata)(n,y,M,function(e,t){const n=n=>({constructorArguments:q(e,t,n),lifecycle:n.lifecycle,properties:z(e,t,n),scope:n.scope});return n}(e,i))}}function H(e){return t=>{const n=(0,_inversifyjs_prototype_utils__WEBPACK_IMPORTED_MODULE_1__.getBaseType)(t);if(void 0===n)throw new b(j.injectionDecoratorConflict,`Expected base type for type "${t.name}", none found.`);G({...e,type:n})(t)}}function J(e){return V(R(C.multipleInjection,e),$)}function L(e){return n=>{void 0===n&&(0,_inversifyjs_reflect_metadata_utils__WEBPACK_IMPORTED_MODULE_0__.updateOwnReflectMetadata)(e,I,A,(e=>e+1))}}function Q(e){return t=>{const n=t??{kind:T.unknown,name:void 0,optional:!1,tags:new Map};if(n.kind===C.unmanaged)throw new b(j.injectionDecoratorConflict,"Unexpected injection found. Found @unmanaged injection with additional @named, @optional, @tagged or @targetName injections");return e(n)}}function W(e){const t=Q(function(e){return t=>{if(void 0!==t.name)throw new b(j.injectionDecoratorConflict,"Unexpected duplicated named decorator");return t.name=e,t}}(e));return V(t,L)}function X(e){if(e.optional)throw new b(j.injectionDecoratorConflict,"Unexpected duplicated optional decorator");return e.optional=!0,e}function Y(){return V(Q(X),L)}function Z(){return(e,n,i)=>{try{(0,_inversifyjs_reflect_metadata_utils__WEBPACK_IMPORTED_MODULE_0__.updateOwnReflectMetadata)(e.constructor,y,M,(o=n,e=>{if(void 0!==e.lifecycle.postConstructMethodName)throw new b(j.injectionDecoratorConflict,"Unexpected duplicated postConstruct decorator");return e.lifecycle.postConstructMethodName=o,e}))}catch(t){D(e,n,void 0,t)}var o}}function _(){return(e,n,i)=>{try{(0,_inversifyjs_reflect_metadata_utils__WEBPACK_IMPORTED_MODULE_0__.updateOwnReflectMetadata)(e.constructor,y,M,(o=n,e=>{if(void 0!==e.lifecycle.preDestroyMethodName)throw new b(j.injectionDecoratorConflict,"Unexpected duplicated preDestroy decorator");return e.lifecycle.preDestroyMethodName=o,e}))}catch(t){D(e,n,void 0,t)}var o}}function ee(e,t){const n=Q(function(e,t){return n=>{if(n.tags.has(e))throw new b(j.injectionDecoratorConflict,"Unexpected duplicated tag decorator with existing tag");return n.tags.set(e,t),n}}(e,t));return V(n,L)}function te(){return{kind:C.unmanaged}}const ne=x(te,(function(e){if(B(e),function(e){return void 0!==e.name||e.optional||e.tags.size>0}(e))throw new b(j.injectionDecoratorConflict,"Unexpected injection found. Found @unmanaged injection with additional @named, @optional, @tagged or @targetName injections");return te()}));function ie(){return V(ne(),$)}var oe;!function(e){e[e.multipleInjection=0]="multipleInjection",e[e.singleInjection=1]="singleInjection"}(oe||(oe={}));class re{#p;constructor(e){this.#p=e}get name(){return this.#p.elem.name}get serviceIdentifier(){return this.#p.elem.serviceIdentifier}get tags(){return this.#p.elem.tags}getAncestor(){if(void 0!==this.#p.previous)return new re(this.#p.previous)}}class ae{last;constructor(e){this.last=e}concat(e){return new ae({elem:e,previous:this.last})}[Symbol.iterator](){let e=this.last;return{next:()=>{if(void 0===e)return{done:!0,value:void 0};const t=e.elem;return e=e.previous,{done:!1,value:t}}}}}function se(e,t){e.servicesBranch.has(t)&&function(e,t){const n=(i=[...e.servicesBranch,t],[...i].map(_inversifyjs_common__WEBPACK_IMPORTED_MODULE_2__.stringifyServiceIdentifier).join(" -> "));var i;throw new b(j.planning,`Circular dependency found: ${n}`)}(e,t),e.servicesBranch.add(t)}function ce(e,t,n){const i=n?.customServiceIdentifier??t.serviceIdentifier,o=[...e.getBindings(i)??[]].filter((e=>e.isSatisfiedBy(t)));if(0===o.length&&void 0!==e.autobindOptions&&"function"==typeof i){const t=function(e,t){return{cache:{isRight:!1,value:void 0},id:0,implementationType:t,isSatisfiedBy:()=>!0,moduleId:void 0,onActivation:void 0,onDeactivation:void 0,scope:e.scope,serviceIdentifier:t,type:c.Instance}}(e.autobindOptions,i);e.setBinding(t),o.push(t)}return o}function ue(e){return void 0!==e.redirections}function de(e,t,n,i){let r,a;ue(n)?(r=n.binding.targetServiceIdentifier,a=n.binding.serviceIdentifier):(r=n.serviceIdentifier,a=n.parent?.binding.serviceIdentifier),Array.isArray(e)?function(e,t,n,i,r){if(0!==e.length){const t=`Ambiguous bindings found for service: "${(0,_inversifyjs_common__WEBPACK_IMPORTED_MODULE_2__.stringifyServiceIdentifier)(n)}".\n\nRegistered bindings:\n\n${e.map((e=>function(e){switch(e.type){case c.Instance:return`[ type: "${e.type}", serviceIdentifier: "${(0,_inversifyjs_common__WEBPACK_IMPORTED_MODULE_2__.stringifyServiceIdentifier)(e.serviceIdentifier)}", scope: "${e.scope}", implementationType: "${e.implementationType.name}" ]`;case c.ServiceRedirection:return`[ type: "${e.type}", serviceIdentifier: "${(0,_inversifyjs_common__WEBPACK_IMPORTED_MODULE_2__.stringifyServiceIdentifier)(e.serviceIdentifier)}", redirection: "${(0,_inversifyjs_common__WEBPACK_IMPORTED_MODULE_2__.stringifyServiceIdentifier)(e.targetServiceIdentifier)}" ]`;default:return`[ type: "${e.type}", serviceIdentifier: "${(0,_inversifyjs_common__WEBPACK_IMPORTED_MODULE_2__.stringifyServiceIdentifier)(e.serviceIdentifier)}", scope: "${e.scope}" ]`}}(e.binding))).join("\n")}\n\nTrying to resolve bindings for "${pe(n,i)}".\n\n${fe(r)}`;throw new b(j.planning,t)}t||le(n,i,r)}(e,t,r,a,i):function(e,t,n,i,o){if(void 0!==e||t)return;le(n,i,o)}(e,t,r,a,i)}function le(e,t,n){const i=`No bindings found for service: "${(0,_inversifyjs_common__WEBPACK_IMPORTED_MODULE_2__.stringifyServiceIdentifier)(e)}".\n\nTrying to resolve bindings for "${pe(e,t)}".\n\n${fe(n)}`;throw new b(j.planning,i)}function pe(e,t){return void 0===t?`${(0,_inversifyjs_common__WEBPACK_IMPORTED_MODULE_2__.stringifyServiceIdentifier)(e)} (Root service)`:(0,_inversifyjs_common__WEBPACK_IMPORTED_MODULE_2__.stringifyServiceIdentifier)(t)}function fe(e){const t=0===e.tags.size?"":`\n- tags:\n  - ${[...e.tags.keys()].map((e=>e.toString())).join("\n  - ")}`;return`Binding constraints:\n- service identifier: ${(0,_inversifyjs_common__WEBPACK_IMPORTED_MODULE_2__.stringifyServiceIdentifier)(e.serviceIdentifier)}\n- name: ${e.name?.toString()??"-"}${t}`}function ge(e,t,n){if(1!==e.redirections.length)de(e.redirections,t,e,n);else{const[i]=e.redirections;ue(i)&&ge(i,t,n)}}function me(e,t,n){if(Array.isArray(e.bindings)&&1===e.bindings.length){const[i]=e.bindings;ue(i)&&ge(i,t,n)}else de(e.bindings,t,e,n)}function he(e){const t=new Map;void 0!==e.rootConstraints.tag&&t.set(e.rootConstraints.tag.key,e.rootConstraints.tag.value);const n=new ae({elem:{name:e.rootConstraints.name,serviceIdentifier:e.rootConstraints.serviceIdentifier,tags:t},previous:void 0}),i=new re(n.last),o=ce(e,i),r=[],a={bindings:r,parent:void 0,serviceIdentifier:e.rootConstraints.serviceIdentifier};if(r.push(...we(e,n,o,a)),!e.rootConstraints.isMultiple){me(a,e.rootConstraints.isOptional??!1,i);const[t]=r;a.bindings=t}return{tree:{root:a}}}function ve(e,t,n,i){const o={binding:t,classMetadata:e.getClassMetadata(t.implementationType),constructorParams:[],parent:i,propertyParams:new Map};return je({autobindOptions:e.autobindOptions,getBindings:e.getBindings,getClassMetadata:e.getClassMetadata,node:o,servicesBranch:e.servicesBranch,setBinding:e.setBinding},n)}function ye(e,t,n){if(n.kind===C.unmanaged)return;const i=_inversifyjs_common__WEBPACK_IMPORTED_MODULE_2__.LazyServiceIdentifier.is(n.value)?n.value.unwrap():n.value,o=t.concat({name:n.name,serviceIdentifier:i,tags:n.tags}),a=new re(o.last),s=ce(e,a),c=[],u={bindings:c,parent:e.node,serviceIdentifier:i};if(c.push(...we(e,o,s,u)),n.kind===C.singleInjection){me(u,n.optional,a);const[e]=c;u.bindings=e}return u}function Me(e,t,n){const i=_inversifyjs_common__WEBPACK_IMPORTED_MODULE_2__.LazyServiceIdentifier.is(n.value)?n.value.unwrap():n.value,o=t.concat({name:n.name,serviceIdentifier:i,tags:n.tags}),a=new re(o.last),s=ce(e,a),c=[],u={bindings:c,parent:e.node,serviceIdentifier:i};if(c.push(...we(e,o,s,u)),n.kind===oe.singleInjection){me(u,n.optional,a);const[e]=c;u.bindings=e}return u}function Ie(e,t,n,i){const o={binding:t,params:[],parent:i};return je({autobindOptions:e.autobindOptions,getBindings:e.getBindings,getClassMetadata:e.getClassMetadata,node:o,servicesBranch:e.servicesBranch,setBinding:e.setBinding},n)}function we(e,t,n,i){const o=ue(i)?i.binding.targetServiceIdentifier:i.serviceIdentifier;se(e,o);const r=[];for(const o of n)switch(o.type){case c.Instance:r.push(ve(e,o,t,i));break;case c.ResolvedValue:r.push(Ie(e,o,t,i));break;case c.ServiceRedirection:{const n=be(e,t,o,i);r.push(n);break}default:r.push({binding:o,parent:i})}return e.servicesBranch.delete(o),r}function be(e,t,n,i){const o={binding:n,parent:i,redirections:[]},r=ce(e,new re(t.last),{customServiceIdentifier:n.targetServiceIdentifier});return o.redirections.push(...we(e,t,r,o)),o}function je(e,t){return e.node.binding.type===c.Instance?function(e,t,n){const i=t.classMetadata;for(const[o,r]of i.constructorArguments.entries())t.constructorParams[o]=ye(e,n,r);for(const[o,r]of i.properties){const i=ye(e,n,r);void 0!==i&&t.propertyParams.set(o,i)}return e.node}(e,e.node,t):function(e,t,n){const i=t.binding.metadata;for(const[o,r]of i.arguments.entries())t.params[o]=Me(e,n,r);return e.node}(e,e.node,t)}var Te;!function(e){e[e.singleMandatory=0]="singleMandatory",e[e.singleOptional=1]="singleOptional",e[e.multipleMandatory=2]="multipleMandatory",e[e.multipleOptional=3]="multipleOptional",e[e.length=4]="length"}(Te||(Te={}));class Ce{#f;#g;#m;#h;#v;constructor(){this.#f=this.#y(),this.#g=this.#y(),this.#h=this.#y(),this.#m=this.#y(),this.#v=[]}clearCache(){for(const e of this.#M())e.clear();for(const e of this.#v)e.clearCache()}get(e){return void 0===e.name?void 0===e.tag?this.#I(this.#f,e).get(e.serviceIdentifier):this.#I(this.#m,e).get(e.serviceIdentifier)?.get(e.tag.key)?.get(e.tag.value):void 0===e.tag?this.#I(this.#g,e).get(e.serviceIdentifier)?.get(e.name):this.#I(this.#h,e).get(e.serviceIdentifier)?.get(e.name)?.get(e.tag.key)?.get(e.tag.value)}set(e,t){void 0===e.name?void 0===e.tag?this.#I(this.#f,e).set(e.serviceIdentifier,t):this.#w(this.#w(this.#I(this.#m,e),e.serviceIdentifier),e.tag.key).set(e.tag.value,t):void 0===e.tag?this.#w(this.#I(this.#g,e),e.serviceIdentifier).set(e.name,t):this.#w(this.#w(this.#w(this.#I(this.#h,e),e.serviceIdentifier),e.name),e.tag.key).set(e.tag.value,t)}subscribe(e){this.#v.push(e)}#y(){const e=new Array(Te.length);for(let t=0;t<e.length;++t)e[t]=new Map;return e}#w(e,t){let n=e.get(t);return void 0===n&&(n=new Map,e.set(t,n)),n}#I(e,t){return e[this.#b(t)]}#M(){return[...this.#f,...this.#g,...this.#h,...this.#m]}#b(e){return e.isMultiple?!0===e.optional?Te.multipleOptional:Te.multipleMandatory:!0===e.optional?Te.singleOptional:Te.singleMandatory}}function Se(e,t){return (0,_inversifyjs_common__WEBPACK_IMPORTED_MODULE_2__.isPromise)(t)?t.then((t=>Ae(e,t))):Ae(e,t)}function Ae(e,t){return e.cache={isRight:!0,value:t},t}function $e(e,t,n){const i=e.getActivations(t);return void 0===i?n:(0,_inversifyjs_common__WEBPACK_IMPORTED_MODULE_2__.isPromise)(n)?xe(e,n,i[Symbol.iterator]()):function(e,t,n){let i=t,o=n.next();for(;!0!==o.done;){const t=o.value(e.context,i);if((0,_inversifyjs_common__WEBPACK_IMPORTED_MODULE_2__.isPromise)(t))return xe(e,t,n);i=t,o=n.next()}return i}(e,n,i[Symbol.iterator]())}async function xe(e,t,n){let i=await t,o=n.next();for(;!0!==o.done;)i=await o.value(e.context,i),o=n.next();return i}function Be(e,t,n){let i=n;if(void 0!==t.onActivation){const n=t.onActivation;i=(0,_inversifyjs_common__WEBPACK_IMPORTED_MODULE_2__.isPromise)(i)?i.then((t=>n(e.context,t))):n(e.context,i)}return $e(e,t.serviceIdentifier,i)}function Re(e){return(t,n)=>{if(n.cache.isRight)return n.cache.value;return Se(n,Be(t,n,e(t,n)))}}const ke=Re((function(e,t){return t.value}));function Pe(e){return e}function De(e,t){return(n,i)=>{const o=e(i);switch(o.scope){case s.Singleton:if(o.cache.isRight)return o.cache.value;return Se(o,Be(n,o,t(n,i)));case s.Request:{if(n.requestScopeCache.has(o.id))return n.requestScopeCache.get(o.id);const e=Be(n,o,t(n,i));return n.requestScopeCache.set(o.id,e),e}case s.Transient:return Be(n,o,t(n,i))}}}const Ve=(e=>De(Pe,e))((function(e,t){return t.value(e.context)}));const Fe=Re((function(e,t){return t.factory(e.context)}));function Oe(e,t,n){const i=function(e,t,n){if(void 0===n)return;if(!(n in e))throw new b(j.resolution,`Expecting a "${n.toString()}" property when resolving "${t.implementationType.name}" class @postConstruct decorated method, none found.`);if("function"!=typeof e[n])throw new b(j.resolution,`Expecting a "${n.toString()}" method when resolving "${t.implementationType.name}" class @postConstruct decorated method, a non function property was found instead.`);{let i;try{i=e[n]()}catch(e){throw new b(j.resolution,`Unexpected error found when calling "${n.toString()}" @postConstruct decorated method on class "${t.implementationType.name}"`,{cause:e})}if((0,_inversifyjs_common__WEBPACK_IMPORTED_MODULE_2__.isPromise)(i))return async function(e,t,n){try{await n}catch(n){throw new b(j.resolution,`Unexpected error found when calling "${t.toString()}" @postConstruct decorated method on class "${e.implementationType.name}"`,{cause:n})}}(t,n,i)}}(e,t,n);return (0,_inversifyjs_common__WEBPACK_IMPORTED_MODULE_2__.isPromise)(i)?i.then((()=>e)):e}function Ne(e){return(t,n,i)=>{const o=new i.binding.implementationType(...t),r=e(n,o,i);return (0,_inversifyjs_common__WEBPACK_IMPORTED_MODULE_2__.isPromise)(r)?r.then((()=>Oe(o,i.binding,i.classMetadata.lifecycle.postConstructMethodName))):Oe(o,i.binding,i.classMetadata.lifecycle.postConstructMethodName)}}const Ee=Re((function(e,t){return t.provider(e.context)}));function Ue(e){return e.binding}function Ke(e){return e.binding}const qe=function(e){return(t,n,i)=>{const o=[];for(const[r,s]of i.propertyParams){const c=i.classMetadata.properties.get(r);if(void 0===c)throw new b(j.resolution,`Expecting metadata at property "${r.toString()}", none found`);c.kind!==C.unmanaged&&void 0!==s.bindings&&(n[r]=e(t,s),(0,_inversifyjs_common__WEBPACK_IMPORTED_MODULE_2__.isPromise)(n[r])&&o.push((async()=>{n[r]=await n[r]})()))}if(o.length>0)return Promise.all(o).then((()=>{}))}}(Xe),ze=function(e){return function t(n,i){const o=[];for(const r of i.redirections)ue(r)?o.push(...t(n,r)):o.push(e(n,r));return o}}(We),Ge=function(e,t,n){return(i,o)=>{const r=e(i,o);return (0,_inversifyjs_common__WEBPACK_IMPORTED_MODULE_2__.isPromise)(r)?t(r,i,o):n(r,i,o)}}(function(e){return(t,n)=>{const i=[];for(const o of n.constructorParams)void 0===o?i.push(void 0):i.push(e(t,o));return i.some(_inversifyjs_common__WEBPACK_IMPORTED_MODULE_2__.isPromise)?Promise.all(i):i}}(Xe),function(e){return async(t,n,i)=>{const o=await t;return e(o,n,i)}}(Ne(qe)),Ne(qe)),He=function(e){return(t,n)=>{const i=e(t,n);return (0,_inversifyjs_common__WEBPACK_IMPORTED_MODULE_2__.isPromise)(i)?i.then((e=>n.binding.factory(...e))):n.binding.factory(...i)}}(function(e){return(t,n)=>{const i=[];for(const o of n.params)i.push(e(t,o));return i.some(_inversifyjs_common__WEBPACK_IMPORTED_MODULE_2__.isPromise)?Promise.all(i):i}}(Xe)),Je=(e=>De(Ue,e))(Ge),Le=(e=>De(Ke,e))(He);function Qe(e){return Xe(e,e.planResult.tree.root)}function We(e,t){switch(t.binding.type){case c.ConstantValue:return ke(e,t.binding);case c.DynamicValue:return Ve(e,t.binding);case c.Factory:return Fe(e,t.binding);case c.Instance:return Je(e,t);case c.Provider:return Ee(e,t.binding);case c.ResolvedValue:return Le(e,t)}}function Xe(e,t){if(void 0!==t.bindings)return Array.isArray(t.bindings)?function(e,t){const n=[];for(const i of t)ue(i)?n.push(...ze(e,i)):n.push(We(e,i));if(n.some(_inversifyjs_common__WEBPACK_IMPORTED_MODULE_2__.isPromise))return Promise.all(n);return n}(e,t.bindings):function(e,t){if(ue(t)){const n=ze(e,t);if(1===n.length)return n[0];throw new b(j.resolution,"Unexpected multiple resolved values on single injection")}return We(e,t)}(e,t.bindings)}function Ye(e){return void 0!==e.scope}function Ze(e,t){if(void 0!==e.lifecycle.preDestroyMethodName&&"function"==typeof t[e.lifecycle.preDestroyMethodName])return t[e.lifecycle.preDestroyMethodName]()}function _e(e,t,n){const i=e.getDeactivations(t);if(void 0!==i)return (0,_inversifyjs_common__WEBPACK_IMPORTED_MODULE_2__.isPromise)(n)?et(n,i[Symbol.iterator]()):function(e,t){let n=t.next();for(;!0!==n.done;){const i=n.value(e);if((0,_inversifyjs_common__WEBPACK_IMPORTED_MODULE_2__.isPromise)(i))return et(e,t);n=t.next()}}(n,i[Symbol.iterator]())}async function et(e,t){const n=await e;let i=t.next();for(;!0!==i.done;)await i.value(n),i=t.next()}function tt(e,t){const n=function(e,t){if(t.type===c.Instance){const n=e.getClassMetadata(t.implementationType),i=t.cache.value;return (0,_inversifyjs_common__WEBPACK_IMPORTED_MODULE_2__.isPromise)(i)?i.then((e=>Ze(n,e))):Ze(n,i)}}(e,t);return void 0===n?nt(e,t):n.then((()=>nt(e,t)))}function nt(e,t){const n=t.cache;return (0,_inversifyjs_common__WEBPACK_IMPORTED_MODULE_2__.isPromise)(n.value)?n.value.then((n=>it(e,t,n))):it(e,t,n.value)}function it(e,t,n){let i;if(void 0!==t.onDeactivation){i=(0,t.onDeactivation)(n)}return void 0===i?_e(e,t.serviceIdentifier,n):i.then((()=>_e(e,t.serviceIdentifier,n)))}function ot(e,t){if(void 0===t)return;const n=function(e){const t=[];for(const n of e)Ye(n)&&n.scope===s.Singleton&&n.cache.isRight&&t.push(n);return t}(t),i=[];for(const t of n){const n=tt(e,t);void 0!==n&&i.push(n)}return i.length>0?Promise.all(i).then((()=>{})):void 0}function rt(e,t){const n=e.getBindingsFromModule(t);return ot(e,n)}function at(e,t){const n=e.getBindings(t);return ot(e,n)}
//# sourceMappingURL=index.js.map


/***/ }),

/***/ "../node_modules/@inversifyjs/core/node_modules/@inversifyjs/reflect-metadata-utils/lib/esm/index.js":
/*!***********************************************************************************************************!*\
  !*** ../node_modules/@inversifyjs/core/node_modules/@inversifyjs/reflect-metadata-utils/lib/esm/index.js ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getOwnReflectMetadata: () => (/* binding */ t),
/* harmony export */   getReflectMetadata: () => (/* binding */ e),
/* harmony export */   setReflectMetadata: () => (/* binding */ n),
/* harmony export */   updateOwnReflectMetadata: () => (/* binding */ a),
/* harmony export */   updateReflectMetadata: () => (/* binding */ f)
/* harmony export */ });
function t(t,e){return Reflect.getOwnMetadata(e,t)}function e(t,e){return Reflect.getMetadata(e,t)}function n(t,e,n){Reflect.defineMetadata(e,n,t)}function a(e,n,a,f){const c=f(t(e,n)??a());Reflect.defineMetadata(n,c,e)}function f(t,n,a,f){const c=f(e(t,n)??a());Reflect.defineMetadata(n,c,t)}
//# sourceMappingURL=index.js.map


/***/ }),

/***/ "../node_modules/@inversifyjs/prototype-utils/lib/esm/index.js":
/*!*********************************************************************!*\
  !*** ../node_modules/@inversifyjs/prototype-utils/lib/esm/index.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getBaseType: () => (/* binding */ t)
/* harmony export */ });
function t(t){const o=Object.getPrototypeOf(t.prototype),r=o?.constructor;return r}
//# sourceMappingURL=index.js.map


/***/ }),

/***/ "../node_modules/@microsoft/signalr/dist/esm/AbortController.js":
/*!**********************************************************************!*\
  !*** ../node_modules/@microsoft/signalr/dist/esm/AbortController.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AbortController: () => (/* binding */ AbortController)
/* harmony export */ });
// Licensed to the .NET Foundation under one or more agreements.
// The .NET Foundation licenses this file to you under the MIT license.
// Rough polyfill of https://developer.mozilla.org/en-US/docs/Web/API/AbortController
// We don't actually ever use the API being polyfilled, we always use the polyfill because
// it's a very new API right now.
// Not exported from index.
/** @private */
class AbortController {
    constructor() {
        this._isAborted = false;
        this.onabort = null;
    }
    abort() {
        if (!this._isAborted) {
            this._isAborted = true;
            if (this.onabort) {
                this.onabort();
            }
        }
    }
    get signal() {
        return this;
    }
    get aborted() {
        return this._isAborted;
    }
}
//# sourceMappingURL=AbortController.js.map

/***/ }),

/***/ "../node_modules/@microsoft/signalr/dist/esm/AccessTokenHttpClient.js":
/*!****************************************************************************!*\
  !*** ../node_modules/@microsoft/signalr/dist/esm/AccessTokenHttpClient.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AccessTokenHttpClient: () => (/* binding */ AccessTokenHttpClient)
/* harmony export */ });
/* harmony import */ var _HeaderNames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HeaderNames */ "../node_modules/@microsoft/signalr/dist/esm/HeaderNames.js");
/* harmony import */ var _HttpClient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HttpClient */ "../node_modules/@microsoft/signalr/dist/esm/HttpClient.js");
// Licensed to the .NET Foundation under one or more agreements.
// The .NET Foundation licenses this file to you under the MIT license.


/** @private */
class AccessTokenHttpClient extends _HttpClient__WEBPACK_IMPORTED_MODULE_0__.HttpClient {
    constructor(innerClient, accessTokenFactory) {
        super();
        this._innerClient = innerClient;
        this._accessTokenFactory = accessTokenFactory;
    }
    async send(request) {
        let allowRetry = true;
        if (this._accessTokenFactory && (!this._accessToken || (request.url && request.url.indexOf("/negotiate?") > 0))) {
            // don't retry if the request is a negotiate or if we just got a potentially new token from the access token factory
            allowRetry = false;
            this._accessToken = await this._accessTokenFactory();
        }
        this._setAuthorizationHeader(request);
        const response = await this._innerClient.send(request);
        if (allowRetry && response.statusCode === 401 && this._accessTokenFactory) {
            this._accessToken = await this._accessTokenFactory();
            this._setAuthorizationHeader(request);
            return await this._innerClient.send(request);
        }
        return response;
    }
    _setAuthorizationHeader(request) {
        if (!request.headers) {
            request.headers = {};
        }
        if (this._accessToken) {
            request.headers[_HeaderNames__WEBPACK_IMPORTED_MODULE_1__.HeaderNames.Authorization] = `Bearer ${this._accessToken}`;
        }
        // don't remove the header if there isn't an access token factory, the user manually added the header in this case
        else if (this._accessTokenFactory) {
            if (request.headers[_HeaderNames__WEBPACK_IMPORTED_MODULE_1__.HeaderNames.Authorization]) {
                delete request.headers[_HeaderNames__WEBPACK_IMPORTED_MODULE_1__.HeaderNames.Authorization];
            }
        }
    }
    getCookieString(url) {
        return this._innerClient.getCookieString(url);
    }
}
//# sourceMappingURL=AccessTokenHttpClient.js.map

/***/ }),

/***/ "../node_modules/@microsoft/signalr/dist/esm/DefaultHttpClient.js":
/*!************************************************************************!*\
  !*** ../node_modules/@microsoft/signalr/dist/esm/DefaultHttpClient.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DefaultHttpClient: () => (/* binding */ DefaultHttpClient)
/* harmony export */ });
/* harmony import */ var _Errors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Errors */ "../node_modules/@microsoft/signalr/dist/esm/Errors.js");
/* harmony import */ var _FetchHttpClient__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FetchHttpClient */ "../node_modules/@microsoft/signalr/dist/esm/FetchHttpClient.js");
/* harmony import */ var _HttpClient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HttpClient */ "../node_modules/@microsoft/signalr/dist/esm/HttpClient.js");
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Utils */ "../node_modules/@microsoft/signalr/dist/esm/Utils.js");
/* harmony import */ var _XhrHttpClient__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./XhrHttpClient */ "../node_modules/@microsoft/signalr/dist/esm/XhrHttpClient.js");
// Licensed to the .NET Foundation under one or more agreements.
// The .NET Foundation licenses this file to you under the MIT license.





/** Default implementation of {@link @microsoft/signalr.HttpClient}. */
class DefaultHttpClient extends _HttpClient__WEBPACK_IMPORTED_MODULE_0__.HttpClient {
    /** Creates a new instance of the {@link @microsoft/signalr.DefaultHttpClient}, using the provided {@link @microsoft/signalr.ILogger} to log messages. */
    constructor(logger) {
        super();
        if (typeof fetch !== "undefined" || _Utils__WEBPACK_IMPORTED_MODULE_1__.Platform.isNode) {
            this._httpClient = new _FetchHttpClient__WEBPACK_IMPORTED_MODULE_2__.FetchHttpClient(logger);
        }
        else if (typeof XMLHttpRequest !== "undefined") {
            this._httpClient = new _XhrHttpClient__WEBPACK_IMPORTED_MODULE_3__.XhrHttpClient(logger);
        }
        else {
            throw new Error("No usable HttpClient found.");
        }
    }
    /** @inheritDoc */
    send(request) {
        // Check that abort was not signaled before calling send
        if (request.abortSignal && request.abortSignal.aborted) {
            return Promise.reject(new _Errors__WEBPACK_IMPORTED_MODULE_4__.AbortError());
        }
        if (!request.method) {
            return Promise.reject(new Error("No method defined."));
        }
        if (!request.url) {
            return Promise.reject(new Error("No url defined."));
        }
        return this._httpClient.send(request);
    }
    getCookieString(url) {
        return this._httpClient.getCookieString(url);
    }
}
//# sourceMappingURL=DefaultHttpClient.js.map

/***/ }),

/***/ "../node_modules/@microsoft/signalr/dist/esm/DefaultReconnectPolicy.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/@microsoft/signalr/dist/esm/DefaultReconnectPolicy.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DefaultReconnectPolicy: () => (/* binding */ DefaultReconnectPolicy)
/* harmony export */ });
// Licensed to the .NET Foundation under one or more agreements.
// The .NET Foundation licenses this file to you under the MIT license.
// 0, 2, 10, 30 second delays before reconnect attempts.
const DEFAULT_RETRY_DELAYS_IN_MILLISECONDS = [0, 2000, 10000, 30000, null];
/** @private */
class DefaultReconnectPolicy {
    constructor(retryDelays) {
        this._retryDelays = retryDelays !== undefined ? [...retryDelays, null] : DEFAULT_RETRY_DELAYS_IN_MILLISECONDS;
    }
    nextRetryDelayInMilliseconds(retryContext) {
        return this._retryDelays[retryContext.previousRetryCount];
    }
}
//# sourceMappingURL=DefaultReconnectPolicy.js.map

/***/ }),

/***/ "../node_modules/@microsoft/signalr/dist/esm/Errors.js":
/*!*************************************************************!*\
  !*** ../node_modules/@microsoft/signalr/dist/esm/Errors.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AbortError: () => (/* binding */ AbortError),
/* harmony export */   AggregateErrors: () => (/* binding */ AggregateErrors),
/* harmony export */   DisabledTransportError: () => (/* binding */ DisabledTransportError),
/* harmony export */   FailedToNegotiateWithServerError: () => (/* binding */ FailedToNegotiateWithServerError),
/* harmony export */   FailedToStartTransportError: () => (/* binding */ FailedToStartTransportError),
/* harmony export */   HttpError: () => (/* binding */ HttpError),
/* harmony export */   TimeoutError: () => (/* binding */ TimeoutError),
/* harmony export */   UnsupportedTransportError: () => (/* binding */ UnsupportedTransportError)
/* harmony export */ });
// Licensed to the .NET Foundation under one or more agreements.
// The .NET Foundation licenses this file to you under the MIT license.
/** Error thrown when an HTTP request fails. */
class HttpError extends Error {
    /** Constructs a new instance of {@link @microsoft/signalr.HttpError}.
     *
     * @param {string} errorMessage A descriptive error message.
     * @param {number} statusCode The HTTP status code represented by this error.
     */
    constructor(errorMessage, statusCode) {
        const trueProto = new.target.prototype;
        super(`${errorMessage}: Status code '${statusCode}'`);
        this.statusCode = statusCode;
        // Workaround issue in Typescript compiler
        // https://github.com/Microsoft/TypeScript/issues/13965#issuecomment-278570200
        this.__proto__ = trueProto;
    }
}
/** Error thrown when a timeout elapses. */
class TimeoutError extends Error {
    /** Constructs a new instance of {@link @microsoft/signalr.TimeoutError}.
     *
     * @param {string} errorMessage A descriptive error message.
     */
    constructor(errorMessage = "A timeout occurred.") {
        const trueProto = new.target.prototype;
        super(errorMessage);
        // Workaround issue in Typescript compiler
        // https://github.com/Microsoft/TypeScript/issues/13965#issuecomment-278570200
        this.__proto__ = trueProto;
    }
}
/** Error thrown when an action is aborted. */
class AbortError extends Error {
    /** Constructs a new instance of {@link AbortError}.
     *
     * @param {string} errorMessage A descriptive error message.
     */
    constructor(errorMessage = "An abort occurred.") {
        const trueProto = new.target.prototype;
        super(errorMessage);
        // Workaround issue in Typescript compiler
        // https://github.com/Microsoft/TypeScript/issues/13965#issuecomment-278570200
        this.__proto__ = trueProto;
    }
}
/** Error thrown when the selected transport is unsupported by the browser. */
/** @private */
class UnsupportedTransportError extends Error {
    /** Constructs a new instance of {@link @microsoft/signalr.UnsupportedTransportError}.
     *
     * @param {string} message A descriptive error message.
     * @param {HttpTransportType} transport The {@link @microsoft/signalr.HttpTransportType} this error occurred on.
     */
    constructor(message, transport) {
        const trueProto = new.target.prototype;
        super(message);
        this.transport = transport;
        this.errorType = 'UnsupportedTransportError';
        // Workaround issue in Typescript compiler
        // https://github.com/Microsoft/TypeScript/issues/13965#issuecomment-278570200
        this.__proto__ = trueProto;
    }
}
/** Error thrown when the selected transport is disabled by the browser. */
/** @private */
class DisabledTransportError extends Error {
    /** Constructs a new instance of {@link @microsoft/signalr.DisabledTransportError}.
     *
     * @param {string} message A descriptive error message.
     * @param {HttpTransportType} transport The {@link @microsoft/signalr.HttpTransportType} this error occurred on.
     */
    constructor(message, transport) {
        const trueProto = new.target.prototype;
        super(message);
        this.transport = transport;
        this.errorType = 'DisabledTransportError';
        // Workaround issue in Typescript compiler
        // https://github.com/Microsoft/TypeScript/issues/13965#issuecomment-278570200
        this.__proto__ = trueProto;
    }
}
/** Error thrown when the selected transport cannot be started. */
/** @private */
class FailedToStartTransportError extends Error {
    /** Constructs a new instance of {@link @microsoft/signalr.FailedToStartTransportError}.
     *
     * @param {string} message A descriptive error message.
     * @param {HttpTransportType} transport The {@link @microsoft/signalr.HttpTransportType} this error occurred on.
     */
    constructor(message, transport) {
        const trueProto = new.target.prototype;
        super(message);
        this.transport = transport;
        this.errorType = 'FailedToStartTransportError';
        // Workaround issue in Typescript compiler
        // https://github.com/Microsoft/TypeScript/issues/13965#issuecomment-278570200
        this.__proto__ = trueProto;
    }
}
/** Error thrown when the negotiation with the server failed to complete. */
/** @private */
class FailedToNegotiateWithServerError extends Error {
    /** Constructs a new instance of {@link @microsoft/signalr.FailedToNegotiateWithServerError}.
     *
     * @param {string} message A descriptive error message.
     */
    constructor(message) {
        const trueProto = new.target.prototype;
        super(message);
        this.errorType = 'FailedToNegotiateWithServerError';
        // Workaround issue in Typescript compiler
        // https://github.com/Microsoft/TypeScript/issues/13965#issuecomment-278570200
        this.__proto__ = trueProto;
    }
}
/** Error thrown when multiple errors have occurred. */
/** @private */
class AggregateErrors extends Error {
    /** Constructs a new instance of {@link @microsoft/signalr.AggregateErrors}.
     *
     * @param {string} message A descriptive error message.
     * @param {Error[]} innerErrors The collection of errors this error is aggregating.
     */
    constructor(message, innerErrors) {
        const trueProto = new.target.prototype;
        super(message);
        this.innerErrors = innerErrors;
        // Workaround issue in Typescript compiler
        // https://github.com/Microsoft/TypeScript/issues/13965#issuecomment-278570200
        this.__proto__ = trueProto;
    }
}
//# sourceMappingURL=Errors.js.map

/***/ }),

/***/ "../node_modules/@microsoft/signalr/dist/esm/FetchHttpClient.js":
/*!**********************************************************************!*\
  !*** ../node_modules/@microsoft/signalr/dist/esm/FetchHttpClient.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FetchHttpClient: () => (/* binding */ FetchHttpClient)
/* harmony export */ });
/* harmony import */ var _Errors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Errors */ "../node_modules/@microsoft/signalr/dist/esm/Errors.js");
/* harmony import */ var _HttpClient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HttpClient */ "../node_modules/@microsoft/signalr/dist/esm/HttpClient.js");
/* harmony import */ var _ILogger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ILogger */ "../node_modules/@microsoft/signalr/dist/esm/ILogger.js");
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Utils */ "../node_modules/@microsoft/signalr/dist/esm/Utils.js");
// Licensed to the .NET Foundation under one or more agreements.
// The .NET Foundation licenses this file to you under the MIT license.




class FetchHttpClient extends _HttpClient__WEBPACK_IMPORTED_MODULE_0__.HttpClient {
    constructor(logger) {
        super();
        this._logger = logger;
        // Node added a fetch implementation to the global scope starting in v18.
        // We need to add a cookie jar in node to be able to share cookies with WebSocket
        if (typeof fetch === "undefined" || _Utils__WEBPACK_IMPORTED_MODULE_1__.Platform.isNode) {
            // In order to ignore the dynamic require in webpack builds we need to do this magic
            // @ts-ignore: TS doesn't know about these names
            const requireFunc =  true ? __WEBPACK_EXTERNAL_createRequire(import.meta.url) : 0;
            // Cookies aren't automatically handled in Node so we need to add a CookieJar to preserve cookies across requests
            this._jar = new (requireFunc("tough-cookie")).CookieJar();
            if (typeof fetch === "undefined") {
                this._fetchType = requireFunc("node-fetch");
            }
            else {
                // Use fetch from Node if available
                this._fetchType = fetch;
            }
            // node-fetch doesn't have a nice API for getting and setting cookies
            // fetch-cookie will wrap a fetch implementation with a default CookieJar or a provided one
            this._fetchType = requireFunc("fetch-cookie")(this._fetchType, this._jar);
        }
        else {
            this._fetchType = fetch.bind((0,_Utils__WEBPACK_IMPORTED_MODULE_1__.getGlobalThis)());
        }
        if (typeof AbortController === "undefined") {
            // In order to ignore the dynamic require in webpack builds we need to do this magic
            // @ts-ignore: TS doesn't know about these names
            const requireFunc =  true ? __WEBPACK_EXTERNAL_createRequire(import.meta.url) : 0;
            // Node needs EventListener methods on AbortController which our custom polyfill doesn't provide
            this._abortControllerType = requireFunc("abort-controller");
        }
        else {
            this._abortControllerType = AbortController;
        }
    }
    /** @inheritDoc */
    async send(request) {
        // Check that abort was not signaled before calling send
        if (request.abortSignal && request.abortSignal.aborted) {
            throw new _Errors__WEBPACK_IMPORTED_MODULE_2__.AbortError();
        }
        if (!request.method) {
            throw new Error("No method defined.");
        }
        if (!request.url) {
            throw new Error("No url defined.");
        }
        const abortController = new this._abortControllerType();
        let error;
        // Hook our abortSignal into the abort controller
        if (request.abortSignal) {
            request.abortSignal.onabort = () => {
                abortController.abort();
                error = new _Errors__WEBPACK_IMPORTED_MODULE_2__.AbortError();
            };
        }
        // If a timeout has been passed in, setup a timeout to call abort
        // Type needs to be any to fit window.setTimeout and NodeJS.setTimeout
        let timeoutId = null;
        if (request.timeout) {
            const msTimeout = request.timeout;
            timeoutId = setTimeout(() => {
                abortController.abort();
                this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_3__.LogLevel.Warning, `Timeout from HTTP request.`);
                error = new _Errors__WEBPACK_IMPORTED_MODULE_2__.TimeoutError();
            }, msTimeout);
        }
        if (request.content === "") {
            request.content = undefined;
        }
        if (request.content) {
            // Explicitly setting the Content-Type header for React Native on Android platform.
            request.headers = request.headers || {};
            if ((0,_Utils__WEBPACK_IMPORTED_MODULE_1__.isArrayBuffer)(request.content)) {
                request.headers["Content-Type"] = "application/octet-stream";
            }
            else {
                request.headers["Content-Type"] = "text/plain;charset=UTF-8";
            }
        }
        let response;
        try {
            response = await this._fetchType(request.url, {
                body: request.content,
                cache: "no-cache",
                credentials: request.withCredentials === true ? "include" : "same-origin",
                headers: {
                    "X-Requested-With": "XMLHttpRequest",
                    ...request.headers,
                },
                method: request.method,
                mode: "cors",
                redirect: "follow",
                signal: abortController.signal,
            });
        }
        catch (e) {
            if (error) {
                throw error;
            }
            this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_3__.LogLevel.Warning, `Error from HTTP request. ${e}.`);
            throw e;
        }
        finally {
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
            if (request.abortSignal) {
                request.abortSignal.onabort = null;
            }
        }
        if (!response.ok) {
            const errorMessage = await deserializeContent(response, "text");
            throw new _Errors__WEBPACK_IMPORTED_MODULE_2__.HttpError(errorMessage || response.statusText, response.status);
        }
        const content = deserializeContent(response, request.responseType);
        const payload = await content;
        return new _HttpClient__WEBPACK_IMPORTED_MODULE_0__.HttpResponse(response.status, response.statusText, payload);
    }
    getCookieString(url) {
        let cookies = "";
        if (_Utils__WEBPACK_IMPORTED_MODULE_1__.Platform.isNode && this._jar) {
            // @ts-ignore: unused variable
            this._jar.getCookies(url, (e, c) => cookies = c.join("; "));
        }
        return cookies;
    }
}
function deserializeContent(response, responseType) {
    let content;
    switch (responseType) {
        case "arraybuffer":
            content = response.arrayBuffer();
            break;
        case "text":
            content = response.text();
            break;
        case "blob":
        case "document":
        case "json":
            throw new Error(`${responseType} is not supported.`);
        default:
            content = response.text();
            break;
    }
    return content;
}
//# sourceMappingURL=FetchHttpClient.js.map

/***/ }),

/***/ "../node_modules/@microsoft/signalr/dist/esm/HandshakeProtocol.js":
/*!************************************************************************!*\
  !*** ../node_modules/@microsoft/signalr/dist/esm/HandshakeProtocol.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HandshakeProtocol: () => (/* binding */ HandshakeProtocol)
/* harmony export */ });
/* harmony import */ var _TextMessageFormat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TextMessageFormat */ "../node_modules/@microsoft/signalr/dist/esm/TextMessageFormat.js");
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Utils */ "../node_modules/@microsoft/signalr/dist/esm/Utils.js");
// Licensed to the .NET Foundation under one or more agreements.
// The .NET Foundation licenses this file to you under the MIT license.


/** @private */
class HandshakeProtocol {
    // Handshake request is always JSON
    writeHandshakeRequest(handshakeRequest) {
        return _TextMessageFormat__WEBPACK_IMPORTED_MODULE_0__.TextMessageFormat.write(JSON.stringify(handshakeRequest));
    }
    parseHandshakeResponse(data) {
        let messageData;
        let remainingData;
        if ((0,_Utils__WEBPACK_IMPORTED_MODULE_1__.isArrayBuffer)(data)) {
            // Format is binary but still need to read JSON text from handshake response
            const binaryData = new Uint8Array(data);
            const separatorIndex = binaryData.indexOf(_TextMessageFormat__WEBPACK_IMPORTED_MODULE_0__.TextMessageFormat.RecordSeparatorCode);
            if (separatorIndex === -1) {
                throw new Error("Message is incomplete.");
            }
            // content before separator is handshake response
            // optional content after is additional messages
            const responseLength = separatorIndex + 1;
            messageData = String.fromCharCode.apply(null, Array.prototype.slice.call(binaryData.slice(0, responseLength)));
            remainingData = (binaryData.byteLength > responseLength) ? binaryData.slice(responseLength).buffer : null;
        }
        else {
            const textData = data;
            const separatorIndex = textData.indexOf(_TextMessageFormat__WEBPACK_IMPORTED_MODULE_0__.TextMessageFormat.RecordSeparator);
            if (separatorIndex === -1) {
                throw new Error("Message is incomplete.");
            }
            // content before separator is handshake response
            // optional content after is additional messages
            const responseLength = separatorIndex + 1;
            messageData = textData.substring(0, responseLength);
            remainingData = (textData.length > responseLength) ? textData.substring(responseLength) : null;
        }
        // At this point we should have just the single handshake message
        const messages = _TextMessageFormat__WEBPACK_IMPORTED_MODULE_0__.TextMessageFormat.parse(messageData);
        const response = JSON.parse(messages[0]);
        if (response.type) {
            throw new Error("Expected a handshake response from the server.");
        }
        const responseMessage = response;
        // multiple messages could have arrived with handshake
        // return additional data to be parsed as usual, or null if all parsed
        return [remainingData, responseMessage];
    }
}
//# sourceMappingURL=HandshakeProtocol.js.map

/***/ }),

/***/ "../node_modules/@microsoft/signalr/dist/esm/HeaderNames.js":
/*!******************************************************************!*\
  !*** ../node_modules/@microsoft/signalr/dist/esm/HeaderNames.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HeaderNames: () => (/* binding */ HeaderNames)
/* harmony export */ });
// Licensed to the .NET Foundation under one or more agreements.
// The .NET Foundation licenses this file to you under the MIT license.
class HeaderNames {
}
HeaderNames.Authorization = "Authorization";
HeaderNames.Cookie = "Cookie";
//# sourceMappingURL=HeaderNames.js.map

/***/ }),

/***/ "../node_modules/@microsoft/signalr/dist/esm/HttpClient.js":
/*!*****************************************************************!*\
  !*** ../node_modules/@microsoft/signalr/dist/esm/HttpClient.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HttpClient: () => (/* binding */ HttpClient),
/* harmony export */   HttpResponse: () => (/* binding */ HttpResponse)
/* harmony export */ });
// Licensed to the .NET Foundation under one or more agreements.
// The .NET Foundation licenses this file to you under the MIT license.
/** Represents an HTTP response. */
class HttpResponse {
    constructor(statusCode, statusText, content) {
        this.statusCode = statusCode;
        this.statusText = statusText;
        this.content = content;
    }
}
/** Abstraction over an HTTP client.
 *
 * This class provides an abstraction over an HTTP client so that a different implementation can be provided on different platforms.
 */
class HttpClient {
    get(url, options) {
        return this.send({
            ...options,
            method: "GET",
            url,
        });
    }
    post(url, options) {
        return this.send({
            ...options,
            method: "POST",
            url,
        });
    }
    delete(url, options) {
        return this.send({
            ...options,
            method: "DELETE",
            url,
        });
    }
    /** Gets all cookies that apply to the specified URL.
     *
     * @param url The URL that the cookies are valid for.
     * @returns {string} A string containing all the key-value cookie pairs for the specified URL.
     */
    // @ts-ignore
    getCookieString(url) {
        return "";
    }
}
//# sourceMappingURL=HttpClient.js.map

/***/ }),

/***/ "../node_modules/@microsoft/signalr/dist/esm/HttpConnection.js":
/*!*********************************************************************!*\
  !*** ../node_modules/@microsoft/signalr/dist/esm/HttpConnection.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HttpConnection: () => (/* binding */ HttpConnection),
/* harmony export */   TransportSendQueue: () => (/* binding */ TransportSendQueue)
/* harmony export */ });
/* harmony import */ var _AccessTokenHttpClient__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AccessTokenHttpClient */ "../node_modules/@microsoft/signalr/dist/esm/AccessTokenHttpClient.js");
/* harmony import */ var _DefaultHttpClient__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DefaultHttpClient */ "../node_modules/@microsoft/signalr/dist/esm/DefaultHttpClient.js");
/* harmony import */ var _Errors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Errors */ "../node_modules/@microsoft/signalr/dist/esm/Errors.js");
/* harmony import */ var _ILogger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ILogger */ "../node_modules/@microsoft/signalr/dist/esm/ILogger.js");
/* harmony import */ var _ITransport__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ITransport */ "../node_modules/@microsoft/signalr/dist/esm/ITransport.js");
/* harmony import */ var _LongPollingTransport__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./LongPollingTransport */ "../node_modules/@microsoft/signalr/dist/esm/LongPollingTransport.js");
/* harmony import */ var _ServerSentEventsTransport__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ServerSentEventsTransport */ "../node_modules/@microsoft/signalr/dist/esm/ServerSentEventsTransport.js");
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Utils */ "../node_modules/@microsoft/signalr/dist/esm/Utils.js");
/* harmony import */ var _WebSocketTransport__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./WebSocketTransport */ "../node_modules/@microsoft/signalr/dist/esm/WebSocketTransport.js");
// Licensed to the .NET Foundation under one or more agreements.
// The .NET Foundation licenses this file to you under the MIT license.









const MAX_REDIRECTS = 100;
/** @private */
class HttpConnection {
    constructor(url, options = {}) {
        this._stopPromiseResolver = () => { };
        this.features = {};
        this._negotiateVersion = 1;
        _Utils__WEBPACK_IMPORTED_MODULE_0__.Arg.isRequired(url, "url");
        this._logger = (0,_Utils__WEBPACK_IMPORTED_MODULE_0__.createLogger)(options.logger);
        this.baseUrl = this._resolveUrl(url);
        options = options || {};
        options.logMessageContent = options.logMessageContent === undefined ? false : options.logMessageContent;
        if (typeof options.withCredentials === "boolean" || options.withCredentials === undefined) {
            options.withCredentials = options.withCredentials === undefined ? true : options.withCredentials;
        }
        else {
            throw new Error("withCredentials option was not a 'boolean' or 'undefined' value");
        }
        options.timeout = options.timeout === undefined ? 100 * 1000 : options.timeout;
        let webSocketModule = null;
        let eventSourceModule = null;
        if (_Utils__WEBPACK_IMPORTED_MODULE_0__.Platform.isNode && "function" !== "undefined") {
            // In order to ignore the dynamic require in webpack builds we need to do this magic
            // @ts-ignore: TS doesn't know about these names
            const requireFunc =  true ? __WEBPACK_EXTERNAL_createRequire(import.meta.url) : 0;
            webSocketModule = requireFunc("ws");
            eventSourceModule = requireFunc("eventsource");
        }
        if (!_Utils__WEBPACK_IMPORTED_MODULE_0__.Platform.isNode && typeof WebSocket !== "undefined" && !options.WebSocket) {
            options.WebSocket = WebSocket;
        }
        else if (_Utils__WEBPACK_IMPORTED_MODULE_0__.Platform.isNode && !options.WebSocket) {
            if (webSocketModule) {
                options.WebSocket = webSocketModule;
            }
        }
        if (!_Utils__WEBPACK_IMPORTED_MODULE_0__.Platform.isNode && typeof EventSource !== "undefined" && !options.EventSource) {
            options.EventSource = EventSource;
        }
        else if (_Utils__WEBPACK_IMPORTED_MODULE_0__.Platform.isNode && !options.EventSource) {
            if (typeof eventSourceModule !== "undefined") {
                options.EventSource = eventSourceModule;
            }
        }
        this._httpClient = new _AccessTokenHttpClient__WEBPACK_IMPORTED_MODULE_1__.AccessTokenHttpClient(options.httpClient || new _DefaultHttpClient__WEBPACK_IMPORTED_MODULE_2__.DefaultHttpClient(this._logger), options.accessTokenFactory);
        this._connectionState = "Disconnected" /* ConnectionState.Disconnected */;
        this._connectionStarted = false;
        this._options = options;
        this.onreceive = null;
        this.onclose = null;
    }
    async start(transferFormat) {
        transferFormat = transferFormat || _ITransport__WEBPACK_IMPORTED_MODULE_3__.TransferFormat.Binary;
        _Utils__WEBPACK_IMPORTED_MODULE_0__.Arg.isIn(transferFormat, _ITransport__WEBPACK_IMPORTED_MODULE_3__.TransferFormat, "transferFormat");
        this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_4__.LogLevel.Debug, `Starting connection with transfer format '${_ITransport__WEBPACK_IMPORTED_MODULE_3__.TransferFormat[transferFormat]}'.`);
        if (this._connectionState !== "Disconnected" /* ConnectionState.Disconnected */) {
            return Promise.reject(new Error("Cannot start an HttpConnection that is not in the 'Disconnected' state."));
        }
        this._connectionState = "Connecting" /* ConnectionState.Connecting */;
        this._startInternalPromise = this._startInternal(transferFormat);
        await this._startInternalPromise;
        // The TypeScript compiler thinks that connectionState must be Connecting here. The TypeScript compiler is wrong.
        if (this._connectionState === "Disconnecting" /* ConnectionState.Disconnecting */) {
            // stop() was called and transitioned the client into the Disconnecting state.
            const message = "Failed to start the HttpConnection before stop() was called.";
            this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_4__.LogLevel.Error, message);
            // We cannot await stopPromise inside startInternal since stopInternal awaits the startInternalPromise.
            await this._stopPromise;
            return Promise.reject(new _Errors__WEBPACK_IMPORTED_MODULE_5__.AbortError(message));
        }
        else if (this._connectionState !== "Connected" /* ConnectionState.Connected */) {
            // stop() was called and transitioned the client into the Disconnecting state.
            const message = "HttpConnection.startInternal completed gracefully but didn't enter the connection into the connected state!";
            this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_4__.LogLevel.Error, message);
            return Promise.reject(new _Errors__WEBPACK_IMPORTED_MODULE_5__.AbortError(message));
        }
        this._connectionStarted = true;
    }
    send(data) {
        if (this._connectionState !== "Connected" /* ConnectionState.Connected */) {
            return Promise.reject(new Error("Cannot send data if the connection is not in the 'Connected' State."));
        }
        if (!this._sendQueue) {
            this._sendQueue = new TransportSendQueue(this.transport);
        }
        // Transport will not be null if state is connected
        return this._sendQueue.send(data);
    }
    async stop(error) {
        if (this._connectionState === "Disconnected" /* ConnectionState.Disconnected */) {
            this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_4__.LogLevel.Debug, `Call to HttpConnection.stop(${error}) ignored because the connection is already in the disconnected state.`);
            return Promise.resolve();
        }
        if (this._connectionState === "Disconnecting" /* ConnectionState.Disconnecting */) {
            this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_4__.LogLevel.Debug, `Call to HttpConnection.stop(${error}) ignored because the connection is already in the disconnecting state.`);
            return this._stopPromise;
        }
        this._connectionState = "Disconnecting" /* ConnectionState.Disconnecting */;
        this._stopPromise = new Promise((resolve) => {
            // Don't complete stop() until stopConnection() completes.
            this._stopPromiseResolver = resolve;
        });
        // stopInternal should never throw so just observe it.
        await this._stopInternal(error);
        await this._stopPromise;
    }
    async _stopInternal(error) {
        // Set error as soon as possible otherwise there is a race between
        // the transport closing and providing an error and the error from a close message
        // We would prefer the close message error.
        this._stopError = error;
        try {
            await this._startInternalPromise;
        }
        catch (e) {
            // This exception is returned to the user as a rejected Promise from the start method.
        }
        // The transport's onclose will trigger stopConnection which will run our onclose event.
        // The transport should always be set if currently connected. If it wasn't set, it's likely because
        // stop was called during start() and start() failed.
        if (this.transport) {
            try {
                await this.transport.stop();
            }
            catch (e) {
                this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_4__.LogLevel.Error, `HttpConnection.transport.stop() threw error '${e}'.`);
                this._stopConnection();
            }
            this.transport = undefined;
        }
        else {
            this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_4__.LogLevel.Debug, "HttpConnection.transport is undefined in HttpConnection.stop() because start() failed.");
        }
    }
    async _startInternal(transferFormat) {
        // Store the original base url and the access token factory since they may change
        // as part of negotiating
        let url = this.baseUrl;
        this._accessTokenFactory = this._options.accessTokenFactory;
        this._httpClient._accessTokenFactory = this._accessTokenFactory;
        try {
            if (this._options.skipNegotiation) {
                if (this._options.transport === _ITransport__WEBPACK_IMPORTED_MODULE_3__.HttpTransportType.WebSockets) {
                    // No need to add a connection ID in this case
                    this.transport = this._constructTransport(_ITransport__WEBPACK_IMPORTED_MODULE_3__.HttpTransportType.WebSockets);
                    // We should just call connect directly in this case.
                    // No fallback or negotiate in this case.
                    await this._startTransport(url, transferFormat);
                }
                else {
                    throw new Error("Negotiation can only be skipped when using the WebSocket transport directly.");
                }
            }
            else {
                let negotiateResponse = null;
                let redirects = 0;
                do {
                    negotiateResponse = await this._getNegotiationResponse(url);
                    // the user tries to stop the connection when it is being started
                    if (this._connectionState === "Disconnecting" /* ConnectionState.Disconnecting */ || this._connectionState === "Disconnected" /* ConnectionState.Disconnected */) {
                        throw new _Errors__WEBPACK_IMPORTED_MODULE_5__.AbortError("The connection was stopped during negotiation.");
                    }
                    if (negotiateResponse.error) {
                        throw new Error(negotiateResponse.error);
                    }
                    if (negotiateResponse.ProtocolVersion) {
                        throw new Error("Detected a connection attempt to an ASP.NET SignalR Server. This client only supports connecting to an ASP.NET Core SignalR Server. See https://aka.ms/signalr-core-differences for details.");
                    }
                    if (negotiateResponse.url) {
                        url = negotiateResponse.url;
                    }
                    if (negotiateResponse.accessToken) {
                        // Replace the current access token factory with one that uses
                        // the returned access token
                        const accessToken = negotiateResponse.accessToken;
                        this._accessTokenFactory = () => accessToken;
                        // set the factory to undefined so the AccessTokenHttpClient won't retry with the same token, since we know it won't change until a connection restart
                        this._httpClient._accessToken = accessToken;
                        this._httpClient._accessTokenFactory = undefined;
                    }
                    redirects++;
                } while (negotiateResponse.url && redirects < MAX_REDIRECTS);
                if (redirects === MAX_REDIRECTS && negotiateResponse.url) {
                    throw new Error("Negotiate redirection limit exceeded.");
                }
                await this._createTransport(url, this._options.transport, negotiateResponse, transferFormat);
            }
            if (this.transport instanceof _LongPollingTransport__WEBPACK_IMPORTED_MODULE_6__.LongPollingTransport) {
                this.features.inherentKeepAlive = true;
            }
            if (this._connectionState === "Connecting" /* ConnectionState.Connecting */) {
                // Ensure the connection transitions to the connected state prior to completing this.startInternalPromise.
                // start() will handle the case when stop was called and startInternal exits still in the disconnecting state.
                this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_4__.LogLevel.Debug, "The HttpConnection connected successfully.");
                this._connectionState = "Connected" /* ConnectionState.Connected */;
            }
            // stop() is waiting on us via this.startInternalPromise so keep this.transport around so it can clean up.
            // This is the only case startInternal can exit in neither the connected nor disconnected state because stopConnection()
            // will transition to the disconnected state. start() will wait for the transition using the stopPromise.
        }
        catch (e) {
            this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_4__.LogLevel.Error, "Failed to start the connection: " + e);
            this._connectionState = "Disconnected" /* ConnectionState.Disconnected */;
            this.transport = undefined;
            // if start fails, any active calls to stop assume that start will complete the stop promise
            this._stopPromiseResolver();
            return Promise.reject(e);
        }
    }
    async _getNegotiationResponse(url) {
        const headers = {};
        const [name, value] = (0,_Utils__WEBPACK_IMPORTED_MODULE_0__.getUserAgentHeader)();
        headers[name] = value;
        const negotiateUrl = this._resolveNegotiateUrl(url);
        this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_4__.LogLevel.Debug, `Sending negotiation request: ${negotiateUrl}.`);
        try {
            const response = await this._httpClient.post(negotiateUrl, {
                content: "",
                headers: { ...headers, ...this._options.headers },
                timeout: this._options.timeout,
                withCredentials: this._options.withCredentials,
            });
            if (response.statusCode !== 200) {
                return Promise.reject(new Error(`Unexpected status code returned from negotiate '${response.statusCode}'`));
            }
            const negotiateResponse = JSON.parse(response.content);
            if (!negotiateResponse.negotiateVersion || negotiateResponse.negotiateVersion < 1) {
                // Negotiate version 0 doesn't use connectionToken
                // So we set it equal to connectionId so all our logic can use connectionToken without being aware of the negotiate version
                negotiateResponse.connectionToken = negotiateResponse.connectionId;
            }
            if (negotiateResponse.useStatefulReconnect && this._options._useStatefulReconnect !== true) {
                return Promise.reject(new _Errors__WEBPACK_IMPORTED_MODULE_5__.FailedToNegotiateWithServerError("Client didn't negotiate Stateful Reconnect but the server did."));
            }
            return negotiateResponse;
        }
        catch (e) {
            let errorMessage = "Failed to complete negotiation with the server: " + e;
            if (e instanceof _Errors__WEBPACK_IMPORTED_MODULE_5__.HttpError) {
                if (e.statusCode === 404) {
                    errorMessage = errorMessage + " Either this is not a SignalR endpoint or there is a proxy blocking the connection.";
                }
            }
            this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_4__.LogLevel.Error, errorMessage);
            return Promise.reject(new _Errors__WEBPACK_IMPORTED_MODULE_5__.FailedToNegotiateWithServerError(errorMessage));
        }
    }
    _createConnectUrl(url, connectionToken) {
        if (!connectionToken) {
            return url;
        }
        return url + (url.indexOf("?") === -1 ? "?" : "&") + `id=${connectionToken}`;
    }
    async _createTransport(url, requestedTransport, negotiateResponse, requestedTransferFormat) {
        let connectUrl = this._createConnectUrl(url, negotiateResponse.connectionToken);
        if (this._isITransport(requestedTransport)) {
            this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_4__.LogLevel.Debug, "Connection was provided an instance of ITransport, using that directly.");
            this.transport = requestedTransport;
            await this._startTransport(connectUrl, requestedTransferFormat);
            this.connectionId = negotiateResponse.connectionId;
            return;
        }
        const transportExceptions = [];
        const transports = negotiateResponse.availableTransports || [];
        let negotiate = negotiateResponse;
        for (const endpoint of transports) {
            const transportOrError = this._resolveTransportOrError(endpoint, requestedTransport, requestedTransferFormat, (negotiate === null || negotiate === void 0 ? void 0 : negotiate.useStatefulReconnect) === true);
            if (transportOrError instanceof Error) {
                // Store the error and continue, we don't want to cause a re-negotiate in these cases
                transportExceptions.push(`${endpoint.transport} failed:`);
                transportExceptions.push(transportOrError);
            }
            else if (this._isITransport(transportOrError)) {
                this.transport = transportOrError;
                if (!negotiate) {
                    try {
                        negotiate = await this._getNegotiationResponse(url);
                    }
                    catch (ex) {
                        return Promise.reject(ex);
                    }
                    connectUrl = this._createConnectUrl(url, negotiate.connectionToken);
                }
                try {
                    await this._startTransport(connectUrl, requestedTransferFormat);
                    this.connectionId = negotiate.connectionId;
                    return;
                }
                catch (ex) {
                    this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_4__.LogLevel.Error, `Failed to start the transport '${endpoint.transport}': ${ex}`);
                    negotiate = undefined;
                    transportExceptions.push(new _Errors__WEBPACK_IMPORTED_MODULE_5__.FailedToStartTransportError(`${endpoint.transport} failed: ${ex}`, _ITransport__WEBPACK_IMPORTED_MODULE_3__.HttpTransportType[endpoint.transport]));
                    if (this._connectionState !== "Connecting" /* ConnectionState.Connecting */) {
                        const message = "Failed to select transport before stop() was called.";
                        this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_4__.LogLevel.Debug, message);
                        return Promise.reject(new _Errors__WEBPACK_IMPORTED_MODULE_5__.AbortError(message));
                    }
                }
            }
        }
        if (transportExceptions.length > 0) {
            return Promise.reject(new _Errors__WEBPACK_IMPORTED_MODULE_5__.AggregateErrors(`Unable to connect to the server with any of the available transports. ${transportExceptions.join(" ")}`, transportExceptions));
        }
        return Promise.reject(new Error("None of the transports supported by the client are supported by the server."));
    }
    _constructTransport(transport) {
        switch (transport) {
            case _ITransport__WEBPACK_IMPORTED_MODULE_3__.HttpTransportType.WebSockets:
                if (!this._options.WebSocket) {
                    throw new Error("'WebSocket' is not supported in your environment.");
                }
                return new _WebSocketTransport__WEBPACK_IMPORTED_MODULE_7__.WebSocketTransport(this._httpClient, this._accessTokenFactory, this._logger, this._options.logMessageContent, this._options.WebSocket, this._options.headers || {});
            case _ITransport__WEBPACK_IMPORTED_MODULE_3__.HttpTransportType.ServerSentEvents:
                if (!this._options.EventSource) {
                    throw new Error("'EventSource' is not supported in your environment.");
                }
                return new _ServerSentEventsTransport__WEBPACK_IMPORTED_MODULE_8__.ServerSentEventsTransport(this._httpClient, this._httpClient._accessToken, this._logger, this._options);
            case _ITransport__WEBPACK_IMPORTED_MODULE_3__.HttpTransportType.LongPolling:
                return new _LongPollingTransport__WEBPACK_IMPORTED_MODULE_6__.LongPollingTransport(this._httpClient, this._logger, this._options);
            default:
                throw new Error(`Unknown transport: ${transport}.`);
        }
    }
    _startTransport(url, transferFormat) {
        this.transport.onreceive = this.onreceive;
        if (this.features.reconnect) {
            this.transport.onclose = async (e) => {
                let callStop = false;
                if (this.features.reconnect) {
                    try {
                        this.features.disconnected();
                        await this.transport.connect(url, transferFormat);
                        await this.features.resend();
                    }
                    catch {
                        callStop = true;
                    }
                }
                else {
                    this._stopConnection(e);
                    return;
                }
                if (callStop) {
                    this._stopConnection(e);
                }
            };
        }
        else {
            this.transport.onclose = (e) => this._stopConnection(e);
        }
        return this.transport.connect(url, transferFormat);
    }
    _resolveTransportOrError(endpoint, requestedTransport, requestedTransferFormat, useStatefulReconnect) {
        const transport = _ITransport__WEBPACK_IMPORTED_MODULE_3__.HttpTransportType[endpoint.transport];
        if (transport === null || transport === undefined) {
            this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_4__.LogLevel.Debug, `Skipping transport '${endpoint.transport}' because it is not supported by this client.`);
            return new Error(`Skipping transport '${endpoint.transport}' because it is not supported by this client.`);
        }
        else {
            if (transportMatches(requestedTransport, transport)) {
                const transferFormats = endpoint.transferFormats.map((s) => _ITransport__WEBPACK_IMPORTED_MODULE_3__.TransferFormat[s]);
                if (transferFormats.indexOf(requestedTransferFormat) >= 0) {
                    if ((transport === _ITransport__WEBPACK_IMPORTED_MODULE_3__.HttpTransportType.WebSockets && !this._options.WebSocket) ||
                        (transport === _ITransport__WEBPACK_IMPORTED_MODULE_3__.HttpTransportType.ServerSentEvents && !this._options.EventSource)) {
                        this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_4__.LogLevel.Debug, `Skipping transport '${_ITransport__WEBPACK_IMPORTED_MODULE_3__.HttpTransportType[transport]}' because it is not supported in your environment.'`);
                        return new _Errors__WEBPACK_IMPORTED_MODULE_5__.UnsupportedTransportError(`'${_ITransport__WEBPACK_IMPORTED_MODULE_3__.HttpTransportType[transport]}' is not supported in your environment.`, transport);
                    }
                    else {
                        this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_4__.LogLevel.Debug, `Selecting transport '${_ITransport__WEBPACK_IMPORTED_MODULE_3__.HttpTransportType[transport]}'.`);
                        try {
                            this.features.reconnect = transport === _ITransport__WEBPACK_IMPORTED_MODULE_3__.HttpTransportType.WebSockets ? useStatefulReconnect : undefined;
                            return this._constructTransport(transport);
                        }
                        catch (ex) {
                            return ex;
                        }
                    }
                }
                else {
                    this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_4__.LogLevel.Debug, `Skipping transport '${_ITransport__WEBPACK_IMPORTED_MODULE_3__.HttpTransportType[transport]}' because it does not support the requested transfer format '${_ITransport__WEBPACK_IMPORTED_MODULE_3__.TransferFormat[requestedTransferFormat]}'.`);
                    return new Error(`'${_ITransport__WEBPACK_IMPORTED_MODULE_3__.HttpTransportType[transport]}' does not support ${_ITransport__WEBPACK_IMPORTED_MODULE_3__.TransferFormat[requestedTransferFormat]}.`);
                }
            }
            else {
                this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_4__.LogLevel.Debug, `Skipping transport '${_ITransport__WEBPACK_IMPORTED_MODULE_3__.HttpTransportType[transport]}' because it was disabled by the client.`);
                return new _Errors__WEBPACK_IMPORTED_MODULE_5__.DisabledTransportError(`'${_ITransport__WEBPACK_IMPORTED_MODULE_3__.HttpTransportType[transport]}' is disabled by the client.`, transport);
            }
        }
    }
    _isITransport(transport) {
        return transport && typeof (transport) === "object" && "connect" in transport;
    }
    _stopConnection(error) {
        this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_4__.LogLevel.Debug, `HttpConnection.stopConnection(${error}) called while in state ${this._connectionState}.`);
        this.transport = undefined;
        // If we have a stopError, it takes precedence over the error from the transport
        error = this._stopError || error;
        this._stopError = undefined;
        if (this._connectionState === "Disconnected" /* ConnectionState.Disconnected */) {
            this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_4__.LogLevel.Debug, `Call to HttpConnection.stopConnection(${error}) was ignored because the connection is already in the disconnected state.`);
            return;
        }
        if (this._connectionState === "Connecting" /* ConnectionState.Connecting */) {
            this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_4__.LogLevel.Warning, `Call to HttpConnection.stopConnection(${error}) was ignored because the connection is still in the connecting state.`);
            throw new Error(`HttpConnection.stopConnection(${error}) was called while the connection is still in the connecting state.`);
        }
        if (this._connectionState === "Disconnecting" /* ConnectionState.Disconnecting */) {
            // A call to stop() induced this call to stopConnection and needs to be completed.
            // Any stop() awaiters will be scheduled to continue after the onclose callback fires.
            this._stopPromiseResolver();
        }
        if (error) {
            this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_4__.LogLevel.Error, `Connection disconnected with error '${error}'.`);
        }
        else {
            this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_4__.LogLevel.Information, "Connection disconnected.");
        }
        if (this._sendQueue) {
            this._sendQueue.stop().catch((e) => {
                this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_4__.LogLevel.Error, `TransportSendQueue.stop() threw error '${e}'.`);
            });
            this._sendQueue = undefined;
        }
        this.connectionId = undefined;
        this._connectionState = "Disconnected" /* ConnectionState.Disconnected */;
        if (this._connectionStarted) {
            this._connectionStarted = false;
            try {
                if (this.onclose) {
                    this.onclose(error);
                }
            }
            catch (e) {
                this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_4__.LogLevel.Error, `HttpConnection.onclose(${error}) threw error '${e}'.`);
            }
        }
    }
    _resolveUrl(url) {
        // startsWith is not supported in IE
        if (url.lastIndexOf("https://", 0) === 0 || url.lastIndexOf("http://", 0) === 0) {
            return url;
        }
        if (!_Utils__WEBPACK_IMPORTED_MODULE_0__.Platform.isBrowser) {
            throw new Error(`Cannot resolve '${url}'.`);
        }
        // Setting the url to the href propery of an anchor tag handles normalization
        // for us. There are 3 main cases.
        // 1. Relative path normalization e.g "b" -> "http://localhost:5000/a/b"
        // 2. Absolute path normalization e.g "/a/b" -> "http://localhost:5000/a/b"
        // 3. Networkpath reference normalization e.g "//localhost:5000/a/b" -> "http://localhost:5000/a/b"
        const aTag = window.document.createElement("a");
        aTag.href = url;
        this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_4__.LogLevel.Information, `Normalizing '${url}' to '${aTag.href}'.`);
        return aTag.href;
    }
    _resolveNegotiateUrl(url) {
        const negotiateUrl = new URL(url);
        if (negotiateUrl.pathname.endsWith('/')) {
            negotiateUrl.pathname += "negotiate";
        }
        else {
            negotiateUrl.pathname += "/negotiate";
        }
        const searchParams = new URLSearchParams(negotiateUrl.searchParams);
        if (!searchParams.has("negotiateVersion")) {
            searchParams.append("negotiateVersion", this._negotiateVersion.toString());
        }
        if (searchParams.has("useStatefulReconnect")) {
            if (searchParams.get("useStatefulReconnect") === "true") {
                this._options._useStatefulReconnect = true;
            }
        }
        else if (this._options._useStatefulReconnect === true) {
            searchParams.append("useStatefulReconnect", "true");
        }
        negotiateUrl.search = searchParams.toString();
        return negotiateUrl.toString();
    }
}
function transportMatches(requestedTransport, actualTransport) {
    return !requestedTransport || ((actualTransport & requestedTransport) !== 0);
}
/** @private */
class TransportSendQueue {
    constructor(_transport) {
        this._transport = _transport;
        this._buffer = [];
        this._executing = true;
        this._sendBufferedData = new PromiseSource();
        this._transportResult = new PromiseSource();
        this._sendLoopPromise = this._sendLoop();
    }
    send(data) {
        this._bufferData(data);
        if (!this._transportResult) {
            this._transportResult = new PromiseSource();
        }
        return this._transportResult.promise;
    }
    stop() {
        this._executing = false;
        this._sendBufferedData.resolve();
        return this._sendLoopPromise;
    }
    _bufferData(data) {
        if (this._buffer.length && typeof (this._buffer[0]) !== typeof (data)) {
            throw new Error(`Expected data to be of type ${typeof (this._buffer)} but was of type ${typeof (data)}`);
        }
        this._buffer.push(data);
        this._sendBufferedData.resolve();
    }
    async _sendLoop() {
        while (true) {
            await this._sendBufferedData.promise;
            if (!this._executing) {
                if (this._transportResult) {
                    this._transportResult.reject("Connection stopped.");
                }
                break;
            }
            this._sendBufferedData = new PromiseSource();
            const transportResult = this._transportResult;
            this._transportResult = undefined;
            const data = typeof (this._buffer[0]) === "string" ?
                this._buffer.join("") :
                TransportSendQueue._concatBuffers(this._buffer);
            this._buffer.length = 0;
            try {
                await this._transport.send(data);
                transportResult.resolve();
            }
            catch (error) {
                transportResult.reject(error);
            }
        }
    }
    static _concatBuffers(arrayBuffers) {
        const totalLength = arrayBuffers.map((b) => b.byteLength).reduce((a, b) => a + b);
        const result = new Uint8Array(totalLength);
        let offset = 0;
        for (const item of arrayBuffers) {
            result.set(new Uint8Array(item), offset);
            offset += item.byteLength;
        }
        return result.buffer;
    }
}
class PromiseSource {
    constructor() {
        this.promise = new Promise((resolve, reject) => [this._resolver, this._rejecter] = [resolve, reject]);
    }
    resolve() {
        this._resolver();
    }
    reject(reason) {
        this._rejecter(reason);
    }
}
//# sourceMappingURL=HttpConnection.js.map

/***/ }),

/***/ "../node_modules/@microsoft/signalr/dist/esm/HubConnection.js":
/*!********************************************************************!*\
  !*** ../node_modules/@microsoft/signalr/dist/esm/HubConnection.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HubConnection: () => (/* binding */ HubConnection),
/* harmony export */   HubConnectionState: () => (/* binding */ HubConnectionState)
/* harmony export */ });
/* harmony import */ var _HandshakeProtocol__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HandshakeProtocol */ "../node_modules/@microsoft/signalr/dist/esm/HandshakeProtocol.js");
/* harmony import */ var _Errors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Errors */ "../node_modules/@microsoft/signalr/dist/esm/Errors.js");
/* harmony import */ var _IHubProtocol__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./IHubProtocol */ "../node_modules/@microsoft/signalr/dist/esm/IHubProtocol.js");
/* harmony import */ var _ILogger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ILogger */ "../node_modules/@microsoft/signalr/dist/esm/ILogger.js");
/* harmony import */ var _Subject__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Subject */ "../node_modules/@microsoft/signalr/dist/esm/Subject.js");
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Utils */ "../node_modules/@microsoft/signalr/dist/esm/Utils.js");
/* harmony import */ var _MessageBuffer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MessageBuffer */ "../node_modules/@microsoft/signalr/dist/esm/MessageBuffer.js");
// Licensed to the .NET Foundation under one or more agreements.
// The .NET Foundation licenses this file to you under the MIT license.







const DEFAULT_TIMEOUT_IN_MS = 30 * 1000;
const DEFAULT_PING_INTERVAL_IN_MS = 15 * 1000;
const DEFAULT_STATEFUL_RECONNECT_BUFFER_SIZE = 100000;
/** Describes the current state of the {@link HubConnection} to the server. */
var HubConnectionState;
(function (HubConnectionState) {
    /** The hub connection is disconnected. */
    HubConnectionState["Disconnected"] = "Disconnected";
    /** The hub connection is connecting. */
    HubConnectionState["Connecting"] = "Connecting";
    /** The hub connection is connected. */
    HubConnectionState["Connected"] = "Connected";
    /** The hub connection is disconnecting. */
    HubConnectionState["Disconnecting"] = "Disconnecting";
    /** The hub connection is reconnecting. */
    HubConnectionState["Reconnecting"] = "Reconnecting";
})(HubConnectionState || (HubConnectionState = {}));
/** Represents a connection to a SignalR Hub. */
class HubConnection {
    /** @internal */
    // Using a public static factory method means we can have a private constructor and an _internal_
    // create method that can be used by HubConnectionBuilder. An "internal" constructor would just
    // be stripped away and the '.d.ts' file would have no constructor, which is interpreted as a
    // public parameter-less constructor.
    static create(connection, logger, protocol, reconnectPolicy, serverTimeoutInMilliseconds, keepAliveIntervalInMilliseconds, statefulReconnectBufferSize) {
        return new HubConnection(connection, logger, protocol, reconnectPolicy, serverTimeoutInMilliseconds, keepAliveIntervalInMilliseconds, statefulReconnectBufferSize);
    }
    constructor(connection, logger, protocol, reconnectPolicy, serverTimeoutInMilliseconds, keepAliveIntervalInMilliseconds, statefulReconnectBufferSize) {
        this._nextKeepAlive = 0;
        this._freezeEventListener = () => {
            this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_0__.LogLevel.Warning, "The page is being frozen, this will likely lead to the connection being closed and messages being lost. For more information see the docs at https://learn.microsoft.com/aspnet/core/signalr/javascript-client#bsleep");
        };
        _Utils__WEBPACK_IMPORTED_MODULE_1__.Arg.isRequired(connection, "connection");
        _Utils__WEBPACK_IMPORTED_MODULE_1__.Arg.isRequired(logger, "logger");
        _Utils__WEBPACK_IMPORTED_MODULE_1__.Arg.isRequired(protocol, "protocol");
        this.serverTimeoutInMilliseconds = serverTimeoutInMilliseconds !== null && serverTimeoutInMilliseconds !== void 0 ? serverTimeoutInMilliseconds : DEFAULT_TIMEOUT_IN_MS;
        this.keepAliveIntervalInMilliseconds = keepAliveIntervalInMilliseconds !== null && keepAliveIntervalInMilliseconds !== void 0 ? keepAliveIntervalInMilliseconds : DEFAULT_PING_INTERVAL_IN_MS;
        this._statefulReconnectBufferSize = statefulReconnectBufferSize !== null && statefulReconnectBufferSize !== void 0 ? statefulReconnectBufferSize : DEFAULT_STATEFUL_RECONNECT_BUFFER_SIZE;
        this._logger = logger;
        this._protocol = protocol;
        this.connection = connection;
        this._reconnectPolicy = reconnectPolicy;
        this._handshakeProtocol = new _HandshakeProtocol__WEBPACK_IMPORTED_MODULE_2__.HandshakeProtocol();
        this.connection.onreceive = (data) => this._processIncomingData(data);
        this.connection.onclose = (error) => this._connectionClosed(error);
        this._callbacks = {};
        this._methods = {};
        this._closedCallbacks = [];
        this._reconnectingCallbacks = [];
        this._reconnectedCallbacks = [];
        this._invocationId = 0;
        this._receivedHandshakeResponse = false;
        this._connectionState = HubConnectionState.Disconnected;
        this._connectionStarted = false;
        this._cachedPingMessage = this._protocol.writeMessage({ type: _IHubProtocol__WEBPACK_IMPORTED_MODULE_3__.MessageType.Ping });
    }
    /** Indicates the state of the {@link HubConnection} to the server. */
    get state() {
        return this._connectionState;
    }
    /** Represents the connection id of the {@link HubConnection} on the server. The connection id will be null when the connection is either
     *  in the disconnected state or if the negotiation step was skipped.
     */
    get connectionId() {
        return this.connection ? (this.connection.connectionId || null) : null;
    }
    /** Indicates the url of the {@link HubConnection} to the server. */
    get baseUrl() {
        return this.connection.baseUrl || "";
    }
    /**
     * Sets a new url for the HubConnection. Note that the url can only be changed when the connection is in either the Disconnected or
     * Reconnecting states.
     * @param {string} url The url to connect to.
     */
    set baseUrl(url) {
        if (this._connectionState !== HubConnectionState.Disconnected && this._connectionState !== HubConnectionState.Reconnecting) {
            throw new Error("The HubConnection must be in the Disconnected or Reconnecting state to change the url.");
        }
        if (!url) {
            throw new Error("The HubConnection url must be a valid url.");
        }
        this.connection.baseUrl = url;
    }
    /** Starts the connection.
     *
     * @returns {Promise<void>} A Promise that resolves when the connection has been successfully established, or rejects with an error.
     */
    start() {
        this._startPromise = this._startWithStateTransitions();
        return this._startPromise;
    }
    async _startWithStateTransitions() {
        if (this._connectionState !== HubConnectionState.Disconnected) {
            return Promise.reject(new Error("Cannot start a HubConnection that is not in the 'Disconnected' state."));
        }
        this._connectionState = HubConnectionState.Connecting;
        this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_0__.LogLevel.Debug, "Starting HubConnection.");
        try {
            await this._startInternal();
            if (_Utils__WEBPACK_IMPORTED_MODULE_1__.Platform.isBrowser) {
                // Log when the browser freezes the tab so users know why their connection unexpectedly stopped working
                window.document.addEventListener("freeze", this._freezeEventListener);
            }
            this._connectionState = HubConnectionState.Connected;
            this._connectionStarted = true;
            this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_0__.LogLevel.Debug, "HubConnection connected successfully.");
        }
        catch (e) {
            this._connectionState = HubConnectionState.Disconnected;
            this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_0__.LogLevel.Debug, `HubConnection failed to start successfully because of error '${e}'.`);
            return Promise.reject(e);
        }
    }
    async _startInternal() {
        this._stopDuringStartError = undefined;
        this._receivedHandshakeResponse = false;
        // Set up the promise before any connection is (re)started otherwise it could race with received messages
        const handshakePromise = new Promise((resolve, reject) => {
            this._handshakeResolver = resolve;
            this._handshakeRejecter = reject;
        });
        await this.connection.start(this._protocol.transferFormat);
        try {
            let version = this._protocol.version;
            if (!this.connection.features.reconnect) {
                // Stateful Reconnect starts with HubProtocol version 2, newer clients connecting to older servers will fail to connect due to
                // the handshake only supporting version 1, so we will try to send version 1 during the handshake to keep old servers working.
                version = 1;
            }
            const handshakeRequest = {
                protocol: this._protocol.name,
                version,
            };
            this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_0__.LogLevel.Debug, "Sending handshake request.");
            await this._sendMessage(this._handshakeProtocol.writeHandshakeRequest(handshakeRequest));
            this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_0__.LogLevel.Information, `Using HubProtocol '${this._protocol.name}'.`);
            // defensively cleanup timeout in case we receive a message from the server before we finish start
            this._cleanupTimeout();
            this._resetTimeoutPeriod();
            this._resetKeepAliveInterval();
            await handshakePromise;
            // It's important to check the stopDuringStartError instead of just relying on the handshakePromise
            // being rejected on close, because this continuation can run after both the handshake completed successfully
            // and the connection was closed.
            if (this._stopDuringStartError) {
                // It's important to throw instead of returning a rejected promise, because we don't want to allow any state
                // transitions to occur between now and the calling code observing the exceptions. Returning a rejected promise
                // will cause the calling continuation to get scheduled to run later.
                // eslint-disable-next-line @typescript-eslint/no-throw-literal
                throw this._stopDuringStartError;
            }
            const useStatefulReconnect = this.connection.features.reconnect || false;
            if (useStatefulReconnect) {
                this._messageBuffer = new _MessageBuffer__WEBPACK_IMPORTED_MODULE_4__.MessageBuffer(this._protocol, this.connection, this._statefulReconnectBufferSize);
                this.connection.features.disconnected = this._messageBuffer._disconnected.bind(this._messageBuffer);
                this.connection.features.resend = () => {
                    if (this._messageBuffer) {
                        return this._messageBuffer._resend();
                    }
                };
            }
            if (!this.connection.features.inherentKeepAlive) {
                await this._sendMessage(this._cachedPingMessage);
            }
        }
        catch (e) {
            this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_0__.LogLevel.Debug, `Hub handshake failed with error '${e}' during start(). Stopping HubConnection.`);
            this._cleanupTimeout();
            this._cleanupPingTimer();
            // HttpConnection.stop() should not complete until after the onclose callback is invoked.
            // This will transition the HubConnection to the disconnected state before HttpConnection.stop() completes.
            await this.connection.stop(e);
            throw e;
        }
    }
    /** Stops the connection.
     *
     * @returns {Promise<void>} A Promise that resolves when the connection has been successfully terminated, or rejects with an error.
     */
    async stop() {
        // Capture the start promise before the connection might be restarted in an onclose callback.
        const startPromise = this._startPromise;
        this.connection.features.reconnect = false;
        this._stopPromise = this._stopInternal();
        await this._stopPromise;
        try {
            // Awaiting undefined continues immediately
            await startPromise;
        }
        catch (e) {
            // This exception is returned to the user as a rejected Promise from the start method.
        }
    }
    _stopInternal(error) {
        if (this._connectionState === HubConnectionState.Disconnected) {
            this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_0__.LogLevel.Debug, `Call to HubConnection.stop(${error}) ignored because it is already in the disconnected state.`);
            return Promise.resolve();
        }
        if (this._connectionState === HubConnectionState.Disconnecting) {
            this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_0__.LogLevel.Debug, `Call to HttpConnection.stop(${error}) ignored because the connection is already in the disconnecting state.`);
            return this._stopPromise;
        }
        const state = this._connectionState;
        this._connectionState = HubConnectionState.Disconnecting;
        this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_0__.LogLevel.Debug, "Stopping HubConnection.");
        if (this._reconnectDelayHandle) {
            // We're in a reconnect delay which means the underlying connection is currently already stopped.
            // Just clear the handle to stop the reconnect loop (which no one is waiting on thankfully) and
            // fire the onclose callbacks.
            this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_0__.LogLevel.Debug, "Connection stopped during reconnect delay. Done reconnecting.");
            clearTimeout(this._reconnectDelayHandle);
            this._reconnectDelayHandle = undefined;
            this._completeClose();
            return Promise.resolve();
        }
        if (state === HubConnectionState.Connected) {
            // eslint-disable-next-line @typescript-eslint/no-floating-promises
            this._sendCloseMessage();
        }
        this._cleanupTimeout();
        this._cleanupPingTimer();
        this._stopDuringStartError = error || new _Errors__WEBPACK_IMPORTED_MODULE_5__.AbortError("The connection was stopped before the hub handshake could complete.");
        // HttpConnection.stop() should not complete until after either HttpConnection.start() fails
        // or the onclose callback is invoked. The onclose callback will transition the HubConnection
        // to the disconnected state if need be before HttpConnection.stop() completes.
        return this.connection.stop(error);
    }
    async _sendCloseMessage() {
        try {
            await this._sendWithProtocol(this._createCloseMessage());
        }
        catch {
            // Ignore, this is a best effort attempt to let the server know the client closed gracefully.
        }
    }
    /** Invokes a streaming hub method on the server using the specified name and arguments.
     *
     * @typeparam T The type of the items returned by the server.
     * @param {string} methodName The name of the server method to invoke.
     * @param {any[]} args The arguments used to invoke the server method.
     * @returns {IStreamResult<T>} An object that yields results from the server as they are received.
     */
    stream(methodName, ...args) {
        const [streams, streamIds] = this._replaceStreamingParams(args);
        const invocationDescriptor = this._createStreamInvocation(methodName, args, streamIds);
        // eslint-disable-next-line prefer-const
        let promiseQueue;
        const subject = new _Subject__WEBPACK_IMPORTED_MODULE_6__.Subject();
        subject.cancelCallback = () => {
            const cancelInvocation = this._createCancelInvocation(invocationDescriptor.invocationId);
            delete this._callbacks[invocationDescriptor.invocationId];
            return promiseQueue.then(() => {
                return this._sendWithProtocol(cancelInvocation);
            });
        };
        this._callbacks[invocationDescriptor.invocationId] = (invocationEvent, error) => {
            if (error) {
                subject.error(error);
                return;
            }
            else if (invocationEvent) {
                // invocationEvent will not be null when an error is not passed to the callback
                if (invocationEvent.type === _IHubProtocol__WEBPACK_IMPORTED_MODULE_3__.MessageType.Completion) {
                    if (invocationEvent.error) {
                        subject.error(new Error(invocationEvent.error));
                    }
                    else {
                        subject.complete();
                    }
                }
                else {
                    subject.next((invocationEvent.item));
                }
            }
        };
        promiseQueue = this._sendWithProtocol(invocationDescriptor)
            .catch((e) => {
            subject.error(e);
            delete this._callbacks[invocationDescriptor.invocationId];
        });
        this._launchStreams(streams, promiseQueue);
        return subject;
    }
    _sendMessage(message) {
        this._resetKeepAliveInterval();
        return this.connection.send(message);
    }
    /**
     * Sends a js object to the server.
     * @param message The js object to serialize and send.
     */
    _sendWithProtocol(message) {
        if (this._messageBuffer) {
            return this._messageBuffer._send(message);
        }
        else {
            return this._sendMessage(this._protocol.writeMessage(message));
        }
    }
    /** Invokes a hub method on the server using the specified name and arguments. Does not wait for a response from the receiver.
     *
     * The Promise returned by this method resolves when the client has sent the invocation to the server. The server may still
     * be processing the invocation.
     *
     * @param {string} methodName The name of the server method to invoke.
     * @param {any[]} args The arguments used to invoke the server method.
     * @returns {Promise<void>} A Promise that resolves when the invocation has been successfully sent, or rejects with an error.
     */
    send(methodName, ...args) {
        const [streams, streamIds] = this._replaceStreamingParams(args);
        const sendPromise = this._sendWithProtocol(this._createInvocation(methodName, args, true, streamIds));
        this._launchStreams(streams, sendPromise);
        return sendPromise;
    }
    /** Invokes a hub method on the server using the specified name and arguments.
     *
     * The Promise returned by this method resolves when the server indicates it has finished invoking the method. When the promise
     * resolves, the server has finished invoking the method. If the server method returns a result, it is produced as the result of
     * resolving the Promise.
     *
     * @typeparam T The expected return type.
     * @param {string} methodName The name of the server method to invoke.
     * @param {any[]} args The arguments used to invoke the server method.
     * @returns {Promise<T>} A Promise that resolves with the result of the server method (if any), or rejects with an error.
     */
    invoke(methodName, ...args) {
        const [streams, streamIds] = this._replaceStreamingParams(args);
        const invocationDescriptor = this._createInvocation(methodName, args, false, streamIds);
        const p = new Promise((resolve, reject) => {
            // invocationId will always have a value for a non-blocking invocation
            this._callbacks[invocationDescriptor.invocationId] = (invocationEvent, error) => {
                if (error) {
                    reject(error);
                    return;
                }
                else if (invocationEvent) {
                    // invocationEvent will not be null when an error is not passed to the callback
                    if (invocationEvent.type === _IHubProtocol__WEBPACK_IMPORTED_MODULE_3__.MessageType.Completion) {
                        if (invocationEvent.error) {
                            reject(new Error(invocationEvent.error));
                        }
                        else {
                            resolve(invocationEvent.result);
                        }
                    }
                    else {
                        reject(new Error(`Unexpected message type: ${invocationEvent.type}`));
                    }
                }
            };
            const promiseQueue = this._sendWithProtocol(invocationDescriptor)
                .catch((e) => {
                reject(e);
                // invocationId will always have a value for a non-blocking invocation
                delete this._callbacks[invocationDescriptor.invocationId];
            });
            this._launchStreams(streams, promiseQueue);
        });
        return p;
    }
    on(methodName, newMethod) {
        if (!methodName || !newMethod) {
            return;
        }
        methodName = methodName.toLowerCase();
        if (!this._methods[methodName]) {
            this._methods[methodName] = [];
        }
        // Preventing adding the same handler multiple times.
        if (this._methods[methodName].indexOf(newMethod) !== -1) {
            return;
        }
        this._methods[methodName].push(newMethod);
    }
    off(methodName, method) {
        if (!methodName) {
            return;
        }
        methodName = methodName.toLowerCase();
        const handlers = this._methods[methodName];
        if (!handlers) {
            return;
        }
        if (method) {
            const removeIdx = handlers.indexOf(method);
            if (removeIdx !== -1) {
                handlers.splice(removeIdx, 1);
                if (handlers.length === 0) {
                    delete this._methods[methodName];
                }
            }
        }
        else {
            delete this._methods[methodName];
        }
    }
    /** Registers a handler that will be invoked when the connection is closed.
     *
     * @param {Function} callback The handler that will be invoked when the connection is closed. Optionally receives a single argument containing the error that caused the connection to close (if any).
     */
    onclose(callback) {
        if (callback) {
            this._closedCallbacks.push(callback);
        }
    }
    /** Registers a handler that will be invoked when the connection starts reconnecting.
     *
     * @param {Function} callback The handler that will be invoked when the connection starts reconnecting. Optionally receives a single argument containing the error that caused the connection to start reconnecting (if any).
     */
    onreconnecting(callback) {
        if (callback) {
            this._reconnectingCallbacks.push(callback);
        }
    }
    /** Registers a handler that will be invoked when the connection successfully reconnects.
     *
     * @param {Function} callback The handler that will be invoked when the connection successfully reconnects.
     */
    onreconnected(callback) {
        if (callback) {
            this._reconnectedCallbacks.push(callback);
        }
    }
    _processIncomingData(data) {
        this._cleanupTimeout();
        if (!this._receivedHandshakeResponse) {
            data = this._processHandshakeResponse(data);
            this._receivedHandshakeResponse = true;
        }
        // Data may have all been read when processing handshake response
        if (data) {
            // Parse the messages
            const messages = this._protocol.parseMessages(data, this._logger);
            for (const message of messages) {
                if (this._messageBuffer && !this._messageBuffer._shouldProcessMessage(message)) {
                    // Don't process the message, we are either waiting for a SequenceMessage or received a duplicate message
                    continue;
                }
                switch (message.type) {
                    case _IHubProtocol__WEBPACK_IMPORTED_MODULE_3__.MessageType.Invocation:
                        this._invokeClientMethod(message)
                            .catch((e) => {
                            this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_0__.LogLevel.Error, `Invoke client method threw error: ${(0,_Utils__WEBPACK_IMPORTED_MODULE_1__.getErrorString)(e)}`);
                        });
                        break;
                    case _IHubProtocol__WEBPACK_IMPORTED_MODULE_3__.MessageType.StreamItem:
                    case _IHubProtocol__WEBPACK_IMPORTED_MODULE_3__.MessageType.Completion: {
                        const callback = this._callbacks[message.invocationId];
                        if (callback) {
                            if (message.type === _IHubProtocol__WEBPACK_IMPORTED_MODULE_3__.MessageType.Completion) {
                                delete this._callbacks[message.invocationId];
                            }
                            try {
                                callback(message);
                            }
                            catch (e) {
                                this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_0__.LogLevel.Error, `Stream callback threw error: ${(0,_Utils__WEBPACK_IMPORTED_MODULE_1__.getErrorString)(e)}`);
                            }
                        }
                        break;
                    }
                    case _IHubProtocol__WEBPACK_IMPORTED_MODULE_3__.MessageType.Ping:
                        // Don't care about pings
                        break;
                    case _IHubProtocol__WEBPACK_IMPORTED_MODULE_3__.MessageType.Close: {
                        this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_0__.LogLevel.Information, "Close message received from server.");
                        const error = message.error ? new Error("Server returned an error on close: " + message.error) : undefined;
                        if (message.allowReconnect === true) {
                            // It feels wrong not to await connection.stop() here, but processIncomingData is called as part of an onreceive callback which is not async,
                            // this is already the behavior for serverTimeout(), and HttpConnection.Stop() should catch and log all possible exceptions.
                            // eslint-disable-next-line @typescript-eslint/no-floating-promises
                            this.connection.stop(error);
                        }
                        else {
                            // We cannot await stopInternal() here, but subsequent calls to stop() will await this if stopInternal() is still ongoing.
                            this._stopPromise = this._stopInternal(error);
                        }
                        break;
                    }
                    case _IHubProtocol__WEBPACK_IMPORTED_MODULE_3__.MessageType.Ack:
                        if (this._messageBuffer) {
                            this._messageBuffer._ack(message);
                        }
                        break;
                    case _IHubProtocol__WEBPACK_IMPORTED_MODULE_3__.MessageType.Sequence:
                        if (this._messageBuffer) {
                            this._messageBuffer._resetSequence(message);
                        }
                        break;
                    default:
                        this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_0__.LogLevel.Warning, `Invalid message type: ${message.type}.`);
                        break;
                }
            }
        }
        this._resetTimeoutPeriod();
    }
    _processHandshakeResponse(data) {
        let responseMessage;
        let remainingData;
        try {
            [remainingData, responseMessage] = this._handshakeProtocol.parseHandshakeResponse(data);
        }
        catch (e) {
            const message = "Error parsing handshake response: " + e;
            this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_0__.LogLevel.Error, message);
            const error = new Error(message);
            this._handshakeRejecter(error);
            throw error;
        }
        if (responseMessage.error) {
            const message = "Server returned handshake error: " + responseMessage.error;
            this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_0__.LogLevel.Error, message);
            const error = new Error(message);
            this._handshakeRejecter(error);
            throw error;
        }
        else {
            this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_0__.LogLevel.Debug, "Server handshake complete.");
        }
        this._handshakeResolver();
        return remainingData;
    }
    _resetKeepAliveInterval() {
        if (this.connection.features.inherentKeepAlive) {
            return;
        }
        // Set the time we want the next keep alive to be sent
        // Timer will be setup on next message receive
        this._nextKeepAlive = new Date().getTime() + this.keepAliveIntervalInMilliseconds;
        this._cleanupPingTimer();
    }
    _resetTimeoutPeriod() {
        if (!this.connection.features || !this.connection.features.inherentKeepAlive) {
            // Set the timeout timer
            this._timeoutHandle = setTimeout(() => this.serverTimeout(), this.serverTimeoutInMilliseconds);
            // Set keepAlive timer if there isn't one
            if (this._pingServerHandle === undefined) {
                let nextPing = this._nextKeepAlive - new Date().getTime();
                if (nextPing < 0) {
                    nextPing = 0;
                }
                // The timer needs to be set from a networking callback to avoid Chrome timer throttling from causing timers to run once a minute
                this._pingServerHandle = setTimeout(async () => {
                    if (this._connectionState === HubConnectionState.Connected) {
                        try {
                            await this._sendMessage(this._cachedPingMessage);
                        }
                        catch {
                            // We don't care about the error. It should be seen elsewhere in the client.
                            // The connection is probably in a bad or closed state now, cleanup the timer so it stops triggering
                            this._cleanupPingTimer();
                        }
                    }
                }, nextPing);
            }
        }
    }
    // eslint-disable-next-line @typescript-eslint/naming-convention
    serverTimeout() {
        // The server hasn't talked to us in a while. It doesn't like us anymore ... :(
        // Terminate the connection, but we don't need to wait on the promise. This could trigger reconnecting.
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        this.connection.stop(new Error("Server timeout elapsed without receiving a message from the server."));
    }
    async _invokeClientMethod(invocationMessage) {
        const methodName = invocationMessage.target.toLowerCase();
        const methods = this._methods[methodName];
        if (!methods) {
            this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_0__.LogLevel.Warning, `No client method with the name '${methodName}' found.`);
            // No handlers provided by client but the server is expecting a response still, so we send an error
            if (invocationMessage.invocationId) {
                this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_0__.LogLevel.Warning, `No result given for '${methodName}' method and invocation ID '${invocationMessage.invocationId}'.`);
                await this._sendWithProtocol(this._createCompletionMessage(invocationMessage.invocationId, "Client didn't provide a result.", null));
            }
            return;
        }
        // Avoid issues with handlers removing themselves thus modifying the list while iterating through it
        const methodsCopy = methods.slice();
        // Server expects a response
        const expectsResponse = invocationMessage.invocationId ? true : false;
        // We preserve the last result or exception but still call all handlers
        let res;
        let exception;
        let completionMessage;
        for (const m of methodsCopy) {
            try {
                const prevRes = res;
                res = await m.apply(this, invocationMessage.arguments);
                if (expectsResponse && res && prevRes) {
                    this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_0__.LogLevel.Error, `Multiple results provided for '${methodName}'. Sending error to server.`);
                    completionMessage = this._createCompletionMessage(invocationMessage.invocationId, `Client provided multiple results.`, null);
                }
                // Ignore exception if we got a result after, the exception will be logged
                exception = undefined;
            }
            catch (e) {
                exception = e;
                this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_0__.LogLevel.Error, `A callback for the method '${methodName}' threw error '${e}'.`);
            }
        }
        if (completionMessage) {
            await this._sendWithProtocol(completionMessage);
        }
        else if (expectsResponse) {
            // If there is an exception that means either no result was given or a handler after a result threw
            if (exception) {
                completionMessage = this._createCompletionMessage(invocationMessage.invocationId, `${exception}`, null);
            }
            else if (res !== undefined) {
                completionMessage = this._createCompletionMessage(invocationMessage.invocationId, null, res);
            }
            else {
                this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_0__.LogLevel.Warning, `No result given for '${methodName}' method and invocation ID '${invocationMessage.invocationId}'.`);
                // Client didn't provide a result or throw from a handler, server expects a response so we send an error
                completionMessage = this._createCompletionMessage(invocationMessage.invocationId, "Client didn't provide a result.", null);
            }
            await this._sendWithProtocol(completionMessage);
        }
        else {
            if (res) {
                this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_0__.LogLevel.Error, `Result given for '${methodName}' method but server is not expecting a result.`);
            }
        }
    }
    _connectionClosed(error) {
        this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_0__.LogLevel.Debug, `HubConnection.connectionClosed(${error}) called while in state ${this._connectionState}.`);
        // Triggering this.handshakeRejecter is insufficient because it could already be resolved without the continuation having run yet.
        this._stopDuringStartError = this._stopDuringStartError || error || new _Errors__WEBPACK_IMPORTED_MODULE_5__.AbortError("The underlying connection was closed before the hub handshake could complete.");
        // If the handshake is in progress, start will be waiting for the handshake promise, so we complete it.
        // If it has already completed, this should just noop.
        if (this._handshakeResolver) {
            this._handshakeResolver();
        }
        this._cancelCallbacksWithError(error || new Error("Invocation canceled due to the underlying connection being closed."));
        this._cleanupTimeout();
        this._cleanupPingTimer();
        if (this._connectionState === HubConnectionState.Disconnecting) {
            this._completeClose(error);
        }
        else if (this._connectionState === HubConnectionState.Connected && this._reconnectPolicy) {
            // eslint-disable-next-line @typescript-eslint/no-floating-promises
            this._reconnect(error);
        }
        else if (this._connectionState === HubConnectionState.Connected) {
            this._completeClose(error);
        }
        // If none of the above if conditions were true were called the HubConnection must be in either:
        // 1. The Connecting state in which case the handshakeResolver will complete it and stopDuringStartError will fail it.
        // 2. The Reconnecting state in which case the handshakeResolver will complete it and stopDuringStartError will fail the current reconnect attempt
        //    and potentially continue the reconnect() loop.
        // 3. The Disconnected state in which case we're already done.
    }
    _completeClose(error) {
        if (this._connectionStarted) {
            this._connectionState = HubConnectionState.Disconnected;
            this._connectionStarted = false;
            if (this._messageBuffer) {
                this._messageBuffer._dispose(error !== null && error !== void 0 ? error : new Error("Connection closed."));
                this._messageBuffer = undefined;
            }
            if (_Utils__WEBPACK_IMPORTED_MODULE_1__.Platform.isBrowser) {
                window.document.removeEventListener("freeze", this._freezeEventListener);
            }
            try {
                this._closedCallbacks.forEach((c) => c.apply(this, [error]));
            }
            catch (e) {
                this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_0__.LogLevel.Error, `An onclose callback called with error '${error}' threw error '${e}'.`);
            }
        }
    }
    async _reconnect(error) {
        const reconnectStartTime = Date.now();
        let previousReconnectAttempts = 0;
        let retryError = error !== undefined ? error : new Error("Attempting to reconnect due to a unknown error.");
        let nextRetryDelay = this._getNextRetryDelay(previousReconnectAttempts++, 0, retryError);
        if (nextRetryDelay === null) {
            this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_0__.LogLevel.Debug, "Connection not reconnecting because the IRetryPolicy returned null on the first reconnect attempt.");
            this._completeClose(error);
            return;
        }
        this._connectionState = HubConnectionState.Reconnecting;
        if (error) {
            this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_0__.LogLevel.Information, `Connection reconnecting because of error '${error}'.`);
        }
        else {
            this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_0__.LogLevel.Information, "Connection reconnecting.");
        }
        if (this._reconnectingCallbacks.length !== 0) {
            try {
                this._reconnectingCallbacks.forEach((c) => c.apply(this, [error]));
            }
            catch (e) {
                this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_0__.LogLevel.Error, `An onreconnecting callback called with error '${error}' threw error '${e}'.`);
            }
            // Exit early if an onreconnecting callback called connection.stop().
            if (this._connectionState !== HubConnectionState.Reconnecting) {
                this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_0__.LogLevel.Debug, "Connection left the reconnecting state in onreconnecting callback. Done reconnecting.");
                return;
            }
        }
        while (nextRetryDelay !== null) {
            this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_0__.LogLevel.Information, `Reconnect attempt number ${previousReconnectAttempts} will start in ${nextRetryDelay} ms.`);
            await new Promise((resolve) => {
                this._reconnectDelayHandle = setTimeout(resolve, nextRetryDelay);
            });
            this._reconnectDelayHandle = undefined;
            if (this._connectionState !== HubConnectionState.Reconnecting) {
                this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_0__.LogLevel.Debug, "Connection left the reconnecting state during reconnect delay. Done reconnecting.");
                return;
            }
            try {
                await this._startInternal();
                this._connectionState = HubConnectionState.Connected;
                this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_0__.LogLevel.Information, "HubConnection reconnected successfully.");
                if (this._reconnectedCallbacks.length !== 0) {
                    try {
                        this._reconnectedCallbacks.forEach((c) => c.apply(this, [this.connection.connectionId]));
                    }
                    catch (e) {
                        this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_0__.LogLevel.Error, `An onreconnected callback called with connectionId '${this.connection.connectionId}; threw error '${e}'.`);
                    }
                }
                return;
            }
            catch (e) {
                this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_0__.LogLevel.Information, `Reconnect attempt failed because of error '${e}'.`);
                if (this._connectionState !== HubConnectionState.Reconnecting) {
                    this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_0__.LogLevel.Debug, `Connection moved to the '${this._connectionState}' from the reconnecting state during reconnect attempt. Done reconnecting.`);
                    // The TypeScript compiler thinks that connectionState must be Connected here. The TypeScript compiler is wrong.
                    if (this._connectionState === HubConnectionState.Disconnecting) {
                        this._completeClose();
                    }
                    return;
                }
                retryError = e instanceof Error ? e : new Error(e.toString());
                nextRetryDelay = this._getNextRetryDelay(previousReconnectAttempts++, Date.now() - reconnectStartTime, retryError);
            }
        }
        this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_0__.LogLevel.Information, `Reconnect retries have been exhausted after ${Date.now() - reconnectStartTime} ms and ${previousReconnectAttempts} failed attempts. Connection disconnecting.`);
        this._completeClose();
    }
    _getNextRetryDelay(previousRetryCount, elapsedMilliseconds, retryReason) {
        try {
            return this._reconnectPolicy.nextRetryDelayInMilliseconds({
                elapsedMilliseconds,
                previousRetryCount,
                retryReason,
            });
        }
        catch (e) {
            this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_0__.LogLevel.Error, `IRetryPolicy.nextRetryDelayInMilliseconds(${previousRetryCount}, ${elapsedMilliseconds}) threw error '${e}'.`);
            return null;
        }
    }
    _cancelCallbacksWithError(error) {
        const callbacks = this._callbacks;
        this._callbacks = {};
        Object.keys(callbacks)
            .forEach((key) => {
            const callback = callbacks[key];
            try {
                callback(null, error);
            }
            catch (e) {
                this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_0__.LogLevel.Error, `Stream 'error' callback called with '${error}' threw error: ${(0,_Utils__WEBPACK_IMPORTED_MODULE_1__.getErrorString)(e)}`);
            }
        });
    }
    _cleanupPingTimer() {
        if (this._pingServerHandle) {
            clearTimeout(this._pingServerHandle);
            this._pingServerHandle = undefined;
        }
    }
    _cleanupTimeout() {
        if (this._timeoutHandle) {
            clearTimeout(this._timeoutHandle);
        }
    }
    _createInvocation(methodName, args, nonblocking, streamIds) {
        if (nonblocking) {
            if (streamIds.length !== 0) {
                return {
                    arguments: args,
                    streamIds,
                    target: methodName,
                    type: _IHubProtocol__WEBPACK_IMPORTED_MODULE_3__.MessageType.Invocation,
                };
            }
            else {
                return {
                    arguments: args,
                    target: methodName,
                    type: _IHubProtocol__WEBPACK_IMPORTED_MODULE_3__.MessageType.Invocation,
                };
            }
        }
        else {
            const invocationId = this._invocationId;
            this._invocationId++;
            if (streamIds.length !== 0) {
                return {
                    arguments: args,
                    invocationId: invocationId.toString(),
                    streamIds,
                    target: methodName,
                    type: _IHubProtocol__WEBPACK_IMPORTED_MODULE_3__.MessageType.Invocation,
                };
            }
            else {
                return {
                    arguments: args,
                    invocationId: invocationId.toString(),
                    target: methodName,
                    type: _IHubProtocol__WEBPACK_IMPORTED_MODULE_3__.MessageType.Invocation,
                };
            }
        }
    }
    _launchStreams(streams, promiseQueue) {
        if (streams.length === 0) {
            return;
        }
        // Synchronize stream data so they arrive in-order on the server
        if (!promiseQueue) {
            promiseQueue = Promise.resolve();
        }
        // We want to iterate over the keys, since the keys are the stream ids
        // eslint-disable-next-line guard-for-in
        for (const streamId in streams) {
            streams[streamId].subscribe({
                complete: () => {
                    promiseQueue = promiseQueue.then(() => this._sendWithProtocol(this._createCompletionMessage(streamId)));
                },
                error: (err) => {
                    let message;
                    if (err instanceof Error) {
                        message = err.message;
                    }
                    else if (err && err.toString) {
                        message = err.toString();
                    }
                    else {
                        message = "Unknown error";
                    }
                    promiseQueue = promiseQueue.then(() => this._sendWithProtocol(this._createCompletionMessage(streamId, message)));
                },
                next: (item) => {
                    promiseQueue = promiseQueue.then(() => this._sendWithProtocol(this._createStreamItemMessage(streamId, item)));
                },
            });
        }
    }
    _replaceStreamingParams(args) {
        const streams = [];
        const streamIds = [];
        for (let i = 0; i < args.length; i++) {
            const argument = args[i];
            if (this._isObservable(argument)) {
                const streamId = this._invocationId;
                this._invocationId++;
                // Store the stream for later use
                streams[streamId] = argument;
                streamIds.push(streamId.toString());
                // remove stream from args
                args.splice(i, 1);
            }
        }
        return [streams, streamIds];
    }
    _isObservable(arg) {
        // This allows other stream implementations to just work (like rxjs)
        return arg && arg.subscribe && typeof arg.subscribe === "function";
    }
    _createStreamInvocation(methodName, args, streamIds) {
        const invocationId = this._invocationId;
        this._invocationId++;
        if (streamIds.length !== 0) {
            return {
                arguments: args,
                invocationId: invocationId.toString(),
                streamIds,
                target: methodName,
                type: _IHubProtocol__WEBPACK_IMPORTED_MODULE_3__.MessageType.StreamInvocation,
            };
        }
        else {
            return {
                arguments: args,
                invocationId: invocationId.toString(),
                target: methodName,
                type: _IHubProtocol__WEBPACK_IMPORTED_MODULE_3__.MessageType.StreamInvocation,
            };
        }
    }
    _createCancelInvocation(id) {
        return {
            invocationId: id,
            type: _IHubProtocol__WEBPACK_IMPORTED_MODULE_3__.MessageType.CancelInvocation,
        };
    }
    _createStreamItemMessage(id, item) {
        return {
            invocationId: id,
            item,
            type: _IHubProtocol__WEBPACK_IMPORTED_MODULE_3__.MessageType.StreamItem,
        };
    }
    _createCompletionMessage(id, error, result) {
        if (error) {
            return {
                error,
                invocationId: id,
                type: _IHubProtocol__WEBPACK_IMPORTED_MODULE_3__.MessageType.Completion,
            };
        }
        return {
            invocationId: id,
            result,
            type: _IHubProtocol__WEBPACK_IMPORTED_MODULE_3__.MessageType.Completion,
        };
    }
    _createCloseMessage() {
        return { type: _IHubProtocol__WEBPACK_IMPORTED_MODULE_3__.MessageType.Close };
    }
}
//# sourceMappingURL=HubConnection.js.map

/***/ }),

/***/ "../node_modules/@microsoft/signalr/dist/esm/HubConnectionBuilder.js":
/*!***************************************************************************!*\
  !*** ../node_modules/@microsoft/signalr/dist/esm/HubConnectionBuilder.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HubConnectionBuilder: () => (/* binding */ HubConnectionBuilder)
/* harmony export */ });
/* harmony import */ var _DefaultReconnectPolicy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DefaultReconnectPolicy */ "../node_modules/@microsoft/signalr/dist/esm/DefaultReconnectPolicy.js");
/* harmony import */ var _HttpConnection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./HttpConnection */ "../node_modules/@microsoft/signalr/dist/esm/HttpConnection.js");
/* harmony import */ var _HubConnection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./HubConnection */ "../node_modules/@microsoft/signalr/dist/esm/HubConnection.js");
/* harmony import */ var _ILogger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ILogger */ "../node_modules/@microsoft/signalr/dist/esm/ILogger.js");
/* harmony import */ var _JsonHubProtocol__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./JsonHubProtocol */ "../node_modules/@microsoft/signalr/dist/esm/JsonHubProtocol.js");
/* harmony import */ var _Loggers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Loggers */ "../node_modules/@microsoft/signalr/dist/esm/Loggers.js");
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Utils */ "../node_modules/@microsoft/signalr/dist/esm/Utils.js");
// Licensed to the .NET Foundation under one or more agreements.
// The .NET Foundation licenses this file to you under the MIT license.







const LogLevelNameMapping = {
    trace: _ILogger__WEBPACK_IMPORTED_MODULE_0__.LogLevel.Trace,
    debug: _ILogger__WEBPACK_IMPORTED_MODULE_0__.LogLevel.Debug,
    info: _ILogger__WEBPACK_IMPORTED_MODULE_0__.LogLevel.Information,
    information: _ILogger__WEBPACK_IMPORTED_MODULE_0__.LogLevel.Information,
    warn: _ILogger__WEBPACK_IMPORTED_MODULE_0__.LogLevel.Warning,
    warning: _ILogger__WEBPACK_IMPORTED_MODULE_0__.LogLevel.Warning,
    error: _ILogger__WEBPACK_IMPORTED_MODULE_0__.LogLevel.Error,
    critical: _ILogger__WEBPACK_IMPORTED_MODULE_0__.LogLevel.Critical,
    none: _ILogger__WEBPACK_IMPORTED_MODULE_0__.LogLevel.None,
};
function parseLogLevel(name) {
    // Case-insensitive matching via lower-casing
    // Yes, I know case-folding is a complicated problem in Unicode, but we only support
    // the ASCII strings defined in LogLevelNameMapping anyway, so it's fine -anurse.
    const mapping = LogLevelNameMapping[name.toLowerCase()];
    if (typeof mapping !== "undefined") {
        return mapping;
    }
    else {
        throw new Error(`Unknown log level: ${name}`);
    }
}
/** A builder for configuring {@link @microsoft/signalr.HubConnection} instances. */
class HubConnectionBuilder {
    configureLogging(logging) {
        _Utils__WEBPACK_IMPORTED_MODULE_1__.Arg.isRequired(logging, "logging");
        if (isLogger(logging)) {
            this.logger = logging;
        }
        else if (typeof logging === "string") {
            const logLevel = parseLogLevel(logging);
            this.logger = new _Utils__WEBPACK_IMPORTED_MODULE_1__.ConsoleLogger(logLevel);
        }
        else {
            this.logger = new _Utils__WEBPACK_IMPORTED_MODULE_1__.ConsoleLogger(logging);
        }
        return this;
    }
    withUrl(url, transportTypeOrOptions) {
        _Utils__WEBPACK_IMPORTED_MODULE_1__.Arg.isRequired(url, "url");
        _Utils__WEBPACK_IMPORTED_MODULE_1__.Arg.isNotEmpty(url, "url");
        this.url = url;
        // Flow-typing knows where it's at. Since HttpTransportType is a number and IHttpConnectionOptions is guaranteed
        // to be an object, we know (as does TypeScript) this comparison is all we need to figure out which overload was called.
        if (typeof transportTypeOrOptions === "object") {
            this.httpConnectionOptions = { ...this.httpConnectionOptions, ...transportTypeOrOptions };
        }
        else {
            this.httpConnectionOptions = {
                ...this.httpConnectionOptions,
                transport: transportTypeOrOptions,
            };
        }
        return this;
    }
    /** Configures the {@link @microsoft/signalr.HubConnection} to use the specified Hub Protocol.
     *
     * @param {IHubProtocol} protocol The {@link @microsoft/signalr.IHubProtocol} implementation to use.
     */
    withHubProtocol(protocol) {
        _Utils__WEBPACK_IMPORTED_MODULE_1__.Arg.isRequired(protocol, "protocol");
        this.protocol = protocol;
        return this;
    }
    withAutomaticReconnect(retryDelaysOrReconnectPolicy) {
        if (this.reconnectPolicy) {
            throw new Error("A reconnectPolicy has already been set.");
        }
        if (!retryDelaysOrReconnectPolicy) {
            this.reconnectPolicy = new _DefaultReconnectPolicy__WEBPACK_IMPORTED_MODULE_2__.DefaultReconnectPolicy();
        }
        else if (Array.isArray(retryDelaysOrReconnectPolicy)) {
            this.reconnectPolicy = new _DefaultReconnectPolicy__WEBPACK_IMPORTED_MODULE_2__.DefaultReconnectPolicy(retryDelaysOrReconnectPolicy);
        }
        else {
            this.reconnectPolicy = retryDelaysOrReconnectPolicy;
        }
        return this;
    }
    /** Configures {@link @microsoft/signalr.HubConnection.serverTimeoutInMilliseconds} for the {@link @microsoft/signalr.HubConnection}.
     *
     * @returns The {@link @microsoft/signalr.HubConnectionBuilder} instance, for chaining.
     */
    withServerTimeout(milliseconds) {
        _Utils__WEBPACK_IMPORTED_MODULE_1__.Arg.isRequired(milliseconds, "milliseconds");
        this._serverTimeoutInMilliseconds = milliseconds;
        return this;
    }
    /** Configures {@link @microsoft/signalr.HubConnection.keepAliveIntervalInMilliseconds} for the {@link @microsoft/signalr.HubConnection}.
     *
     * @returns The {@link @microsoft/signalr.HubConnectionBuilder} instance, for chaining.
     */
    withKeepAliveInterval(milliseconds) {
        _Utils__WEBPACK_IMPORTED_MODULE_1__.Arg.isRequired(milliseconds, "milliseconds");
        this._keepAliveIntervalInMilliseconds = milliseconds;
        return this;
    }
    /** Enables and configures options for the Stateful Reconnect feature.
     *
     * @returns The {@link @microsoft/signalr.HubConnectionBuilder} instance, for chaining.
     */
    withStatefulReconnect(options) {
        if (this.httpConnectionOptions === undefined) {
            this.httpConnectionOptions = {};
        }
        this.httpConnectionOptions._useStatefulReconnect = true;
        this._statefulReconnectBufferSize = options === null || options === void 0 ? void 0 : options.bufferSize;
        return this;
    }
    /** Creates a {@link @microsoft/signalr.HubConnection} from the configuration options specified in this builder.
     *
     * @returns {HubConnection} The configured {@link @microsoft/signalr.HubConnection}.
     */
    build() {
        // If httpConnectionOptions has a logger, use it. Otherwise, override it with the one
        // provided to configureLogger
        const httpConnectionOptions = this.httpConnectionOptions || {};
        // If it's 'null', the user **explicitly** asked for null, don't mess with it.
        if (httpConnectionOptions.logger === undefined) {
            // If our logger is undefined or null, that's OK, the HttpConnection constructor will handle it.
            httpConnectionOptions.logger = this.logger;
        }
        // Now create the connection
        if (!this.url) {
            throw new Error("The 'HubConnectionBuilder.withUrl' method must be called before building the connection.");
        }
        const connection = new _HttpConnection__WEBPACK_IMPORTED_MODULE_3__.HttpConnection(this.url, httpConnectionOptions);
        return _HubConnection__WEBPACK_IMPORTED_MODULE_4__.HubConnection.create(connection, this.logger || _Loggers__WEBPACK_IMPORTED_MODULE_5__.NullLogger.instance, this.protocol || new _JsonHubProtocol__WEBPACK_IMPORTED_MODULE_6__.JsonHubProtocol(), this.reconnectPolicy, this._serverTimeoutInMilliseconds, this._keepAliveIntervalInMilliseconds, this._statefulReconnectBufferSize);
    }
}
function isLogger(logger) {
    return logger.log !== undefined;
}
//# sourceMappingURL=HubConnectionBuilder.js.map

/***/ }),

/***/ "../node_modules/@microsoft/signalr/dist/esm/IHubProtocol.js":
/*!*******************************************************************!*\
  !*** ../node_modules/@microsoft/signalr/dist/esm/IHubProtocol.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MessageType: () => (/* binding */ MessageType)
/* harmony export */ });
// Licensed to the .NET Foundation under one or more agreements.
// The .NET Foundation licenses this file to you under the MIT license.
/** Defines the type of a Hub Message. */
var MessageType;
(function (MessageType) {
    /** Indicates the message is an Invocation message and implements the {@link @microsoft/signalr.InvocationMessage} interface. */
    MessageType[MessageType["Invocation"] = 1] = "Invocation";
    /** Indicates the message is a StreamItem message and implements the {@link @microsoft/signalr.StreamItemMessage} interface. */
    MessageType[MessageType["StreamItem"] = 2] = "StreamItem";
    /** Indicates the message is a Completion message and implements the {@link @microsoft/signalr.CompletionMessage} interface. */
    MessageType[MessageType["Completion"] = 3] = "Completion";
    /** Indicates the message is a Stream Invocation message and implements the {@link @microsoft/signalr.StreamInvocationMessage} interface. */
    MessageType[MessageType["StreamInvocation"] = 4] = "StreamInvocation";
    /** Indicates the message is a Cancel Invocation message and implements the {@link @microsoft/signalr.CancelInvocationMessage} interface. */
    MessageType[MessageType["CancelInvocation"] = 5] = "CancelInvocation";
    /** Indicates the message is a Ping message and implements the {@link @microsoft/signalr.PingMessage} interface. */
    MessageType[MessageType["Ping"] = 6] = "Ping";
    /** Indicates the message is a Close message and implements the {@link @microsoft/signalr.CloseMessage} interface. */
    MessageType[MessageType["Close"] = 7] = "Close";
    MessageType[MessageType["Ack"] = 8] = "Ack";
    MessageType[MessageType["Sequence"] = 9] = "Sequence";
})(MessageType || (MessageType = {}));
//# sourceMappingURL=IHubProtocol.js.map

/***/ }),

/***/ "../node_modules/@microsoft/signalr/dist/esm/ILogger.js":
/*!**************************************************************!*\
  !*** ../node_modules/@microsoft/signalr/dist/esm/ILogger.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LogLevel: () => (/* binding */ LogLevel)
/* harmony export */ });
// Licensed to the .NET Foundation under one or more agreements.
// The .NET Foundation licenses this file to you under the MIT license.
// These values are designed to match the ASP.NET Log Levels since that's the pattern we're emulating here.
/** Indicates the severity of a log message.
 *
 * Log Levels are ordered in increasing severity. So `Debug` is more severe than `Trace`, etc.
 */
var LogLevel;
(function (LogLevel) {
    /** Log level for very low severity diagnostic messages. */
    LogLevel[LogLevel["Trace"] = 0] = "Trace";
    /** Log level for low severity diagnostic messages. */
    LogLevel[LogLevel["Debug"] = 1] = "Debug";
    /** Log level for informational diagnostic messages. */
    LogLevel[LogLevel["Information"] = 2] = "Information";
    /** Log level for diagnostic messages that indicate a non-fatal problem. */
    LogLevel[LogLevel["Warning"] = 3] = "Warning";
    /** Log level for diagnostic messages that indicate a failure in the current operation. */
    LogLevel[LogLevel["Error"] = 4] = "Error";
    /** Log level for diagnostic messages that indicate a failure that will terminate the entire application. */
    LogLevel[LogLevel["Critical"] = 5] = "Critical";
    /** The highest possible log level. Used when configuring logging to indicate that no log messages should be emitted. */
    LogLevel[LogLevel["None"] = 6] = "None";
})(LogLevel || (LogLevel = {}));
//# sourceMappingURL=ILogger.js.map

/***/ }),

/***/ "../node_modules/@microsoft/signalr/dist/esm/ITransport.js":
/*!*****************************************************************!*\
  !*** ../node_modules/@microsoft/signalr/dist/esm/ITransport.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HttpTransportType: () => (/* binding */ HttpTransportType),
/* harmony export */   TransferFormat: () => (/* binding */ TransferFormat)
/* harmony export */ });
// Licensed to the .NET Foundation under one or more agreements.
// The .NET Foundation licenses this file to you under the MIT license.
// This will be treated as a bit flag in the future, so we keep it using power-of-two values.
/** Specifies a specific HTTP transport type. */
var HttpTransportType;
(function (HttpTransportType) {
    /** Specifies no transport preference. */
    HttpTransportType[HttpTransportType["None"] = 0] = "None";
    /** Specifies the WebSockets transport. */
    HttpTransportType[HttpTransportType["WebSockets"] = 1] = "WebSockets";
    /** Specifies the Server-Sent Events transport. */
    HttpTransportType[HttpTransportType["ServerSentEvents"] = 2] = "ServerSentEvents";
    /** Specifies the Long Polling transport. */
    HttpTransportType[HttpTransportType["LongPolling"] = 4] = "LongPolling";
})(HttpTransportType || (HttpTransportType = {}));
/** Specifies the transfer format for a connection. */
var TransferFormat;
(function (TransferFormat) {
    /** Specifies that only text data will be transmitted over the connection. */
    TransferFormat[TransferFormat["Text"] = 1] = "Text";
    /** Specifies that binary data will be transmitted over the connection. */
    TransferFormat[TransferFormat["Binary"] = 2] = "Binary";
})(TransferFormat || (TransferFormat = {}));
//# sourceMappingURL=ITransport.js.map

/***/ }),

/***/ "../node_modules/@microsoft/signalr/dist/esm/JsonHubProtocol.js":
/*!**********************************************************************!*\
  !*** ../node_modules/@microsoft/signalr/dist/esm/JsonHubProtocol.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   JsonHubProtocol: () => (/* binding */ JsonHubProtocol)
/* harmony export */ });
/* harmony import */ var _IHubProtocol__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./IHubProtocol */ "../node_modules/@microsoft/signalr/dist/esm/IHubProtocol.js");
/* harmony import */ var _ILogger__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ILogger */ "../node_modules/@microsoft/signalr/dist/esm/ILogger.js");
/* harmony import */ var _ITransport__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ITransport */ "../node_modules/@microsoft/signalr/dist/esm/ITransport.js");
/* harmony import */ var _Loggers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Loggers */ "../node_modules/@microsoft/signalr/dist/esm/Loggers.js");
/* harmony import */ var _TextMessageFormat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TextMessageFormat */ "../node_modules/@microsoft/signalr/dist/esm/TextMessageFormat.js");
// Licensed to the .NET Foundation under one or more agreements.
// The .NET Foundation licenses this file to you under the MIT license.





const JSON_HUB_PROTOCOL_NAME = "json";
/** Implements the JSON Hub Protocol. */
class JsonHubProtocol {
    constructor() {
        /** @inheritDoc */
        this.name = JSON_HUB_PROTOCOL_NAME;
        /** @inheritDoc */
        this.version = 2;
        /** @inheritDoc */
        this.transferFormat = _ITransport__WEBPACK_IMPORTED_MODULE_0__.TransferFormat.Text;
    }
    /** Creates an array of {@link @microsoft/signalr.HubMessage} objects from the specified serialized representation.
     *
     * @param {string} input A string containing the serialized representation.
     * @param {ILogger} logger A logger that will be used to log messages that occur during parsing.
     */
    parseMessages(input, logger) {
        // The interface does allow "ArrayBuffer" to be passed in, but this implementation does not. So let's throw a useful error.
        if (typeof input !== "string") {
            throw new Error("Invalid input for JSON hub protocol. Expected a string.");
        }
        if (!input) {
            return [];
        }
        if (logger === null) {
            logger = _Loggers__WEBPACK_IMPORTED_MODULE_1__.NullLogger.instance;
        }
        // Parse the messages
        const messages = _TextMessageFormat__WEBPACK_IMPORTED_MODULE_2__.TextMessageFormat.parse(input);
        const hubMessages = [];
        for (const message of messages) {
            const parsedMessage = JSON.parse(message);
            if (typeof parsedMessage.type !== "number") {
                throw new Error("Invalid payload.");
            }
            switch (parsedMessage.type) {
                case _IHubProtocol__WEBPACK_IMPORTED_MODULE_3__.MessageType.Invocation:
                    this._isInvocationMessage(parsedMessage);
                    break;
                case _IHubProtocol__WEBPACK_IMPORTED_MODULE_3__.MessageType.StreamItem:
                    this._isStreamItemMessage(parsedMessage);
                    break;
                case _IHubProtocol__WEBPACK_IMPORTED_MODULE_3__.MessageType.Completion:
                    this._isCompletionMessage(parsedMessage);
                    break;
                case _IHubProtocol__WEBPACK_IMPORTED_MODULE_3__.MessageType.Ping:
                    // Single value, no need to validate
                    break;
                case _IHubProtocol__WEBPACK_IMPORTED_MODULE_3__.MessageType.Close:
                    // All optional values, no need to validate
                    break;
                case _IHubProtocol__WEBPACK_IMPORTED_MODULE_3__.MessageType.Ack:
                    this._isAckMessage(parsedMessage);
                    break;
                case _IHubProtocol__WEBPACK_IMPORTED_MODULE_3__.MessageType.Sequence:
                    this._isSequenceMessage(parsedMessage);
                    break;
                default:
                    // Future protocol changes can add message types, old clients can ignore them
                    logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_4__.LogLevel.Information, "Unknown message type '" + parsedMessage.type + "' ignored.");
                    continue;
            }
            hubMessages.push(parsedMessage);
        }
        return hubMessages;
    }
    /** Writes the specified {@link @microsoft/signalr.HubMessage} to a string and returns it.
     *
     * @param {HubMessage} message The message to write.
     * @returns {string} A string containing the serialized representation of the message.
     */
    writeMessage(message) {
        return _TextMessageFormat__WEBPACK_IMPORTED_MODULE_2__.TextMessageFormat.write(JSON.stringify(message));
    }
    _isInvocationMessage(message) {
        this._assertNotEmptyString(message.target, "Invalid payload for Invocation message.");
        if (message.invocationId !== undefined) {
            this._assertNotEmptyString(message.invocationId, "Invalid payload for Invocation message.");
        }
    }
    _isStreamItemMessage(message) {
        this._assertNotEmptyString(message.invocationId, "Invalid payload for StreamItem message.");
        if (message.item === undefined) {
            throw new Error("Invalid payload for StreamItem message.");
        }
    }
    _isCompletionMessage(message) {
        if (message.result && message.error) {
            throw new Error("Invalid payload for Completion message.");
        }
        if (!message.result && message.error) {
            this._assertNotEmptyString(message.error, "Invalid payload for Completion message.");
        }
        this._assertNotEmptyString(message.invocationId, "Invalid payload for Completion message.");
    }
    _isAckMessage(message) {
        if (typeof message.sequenceId !== 'number') {
            throw new Error("Invalid SequenceId for Ack message.");
        }
    }
    _isSequenceMessage(message) {
        if (typeof message.sequenceId !== 'number') {
            throw new Error("Invalid SequenceId for Sequence message.");
        }
    }
    _assertNotEmptyString(value, errorMessage) {
        if (typeof value !== "string" || value === "") {
            throw new Error(errorMessage);
        }
    }
}
//# sourceMappingURL=JsonHubProtocol.js.map

/***/ }),

/***/ "../node_modules/@microsoft/signalr/dist/esm/Loggers.js":
/*!**************************************************************!*\
  !*** ../node_modules/@microsoft/signalr/dist/esm/Loggers.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NullLogger: () => (/* binding */ NullLogger)
/* harmony export */ });
// Licensed to the .NET Foundation under one or more agreements.
// The .NET Foundation licenses this file to you under the MIT license.
/** A logger that does nothing when log messages are sent to it. */
class NullLogger {
    constructor() { }
    /** @inheritDoc */
    // eslint-disable-next-line
    log(_logLevel, _message) {
    }
}
/** The singleton instance of the {@link @microsoft/signalr.NullLogger}. */
NullLogger.instance = new NullLogger();
//# sourceMappingURL=Loggers.js.map

/***/ }),

/***/ "../node_modules/@microsoft/signalr/dist/esm/LongPollingTransport.js":
/*!***************************************************************************!*\
  !*** ../node_modules/@microsoft/signalr/dist/esm/LongPollingTransport.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LongPollingTransport: () => (/* binding */ LongPollingTransport)
/* harmony export */ });
/* harmony import */ var _AbortController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbortController */ "../node_modules/@microsoft/signalr/dist/esm/AbortController.js");
/* harmony import */ var _Errors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Errors */ "../node_modules/@microsoft/signalr/dist/esm/Errors.js");
/* harmony import */ var _ILogger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ILogger */ "../node_modules/@microsoft/signalr/dist/esm/ILogger.js");
/* harmony import */ var _ITransport__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ITransport */ "../node_modules/@microsoft/signalr/dist/esm/ITransport.js");
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Utils */ "../node_modules/@microsoft/signalr/dist/esm/Utils.js");
// Licensed to the .NET Foundation under one or more agreements.
// The .NET Foundation licenses this file to you under the MIT license.





// Not exported from 'index', this type is internal.
/** @private */
class LongPollingTransport {
    // This is an internal type, not exported from 'index' so this is really just internal.
    get pollAborted() {
        return this._pollAbort.aborted;
    }
    constructor(httpClient, logger, options) {
        this._httpClient = httpClient;
        this._logger = logger;
        this._pollAbort = new _AbortController__WEBPACK_IMPORTED_MODULE_0__.AbortController();
        this._options = options;
        this._running = false;
        this.onreceive = null;
        this.onclose = null;
    }
    async connect(url, transferFormat) {
        _Utils__WEBPACK_IMPORTED_MODULE_1__.Arg.isRequired(url, "url");
        _Utils__WEBPACK_IMPORTED_MODULE_1__.Arg.isRequired(transferFormat, "transferFormat");
        _Utils__WEBPACK_IMPORTED_MODULE_1__.Arg.isIn(transferFormat, _ITransport__WEBPACK_IMPORTED_MODULE_2__.TransferFormat, "transferFormat");
        this._url = url;
        this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_3__.LogLevel.Trace, "(LongPolling transport) Connecting.");
        // Allow binary format on Node and Browsers that support binary content (indicated by the presence of responseType property)
        if (transferFormat === _ITransport__WEBPACK_IMPORTED_MODULE_2__.TransferFormat.Binary &&
            (typeof XMLHttpRequest !== "undefined" && typeof new XMLHttpRequest().responseType !== "string")) {
            throw new Error("Binary protocols over XmlHttpRequest not implementing advanced features are not supported.");
        }
        const [name, value] = (0,_Utils__WEBPACK_IMPORTED_MODULE_1__.getUserAgentHeader)();
        const headers = { [name]: value, ...this._options.headers };
        const pollOptions = {
            abortSignal: this._pollAbort.signal,
            headers,
            timeout: 100000,
            withCredentials: this._options.withCredentials,
        };
        if (transferFormat === _ITransport__WEBPACK_IMPORTED_MODULE_2__.TransferFormat.Binary) {
            pollOptions.responseType = "arraybuffer";
        }
        // Make initial long polling request
        // Server uses first long polling request to finish initializing connection and it returns without data
        const pollUrl = `${url}&_=${Date.now()}`;
        this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_3__.LogLevel.Trace, `(LongPolling transport) polling: ${pollUrl}.`);
        const response = await this._httpClient.get(pollUrl, pollOptions);
        if (response.statusCode !== 200) {
            this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_3__.LogLevel.Error, `(LongPolling transport) Unexpected response code: ${response.statusCode}.`);
            // Mark running as false so that the poll immediately ends and runs the close logic
            this._closeError = new _Errors__WEBPACK_IMPORTED_MODULE_4__.HttpError(response.statusText || "", response.statusCode);
            this._running = false;
        }
        else {
            this._running = true;
        }
        this._receiving = this._poll(this._url, pollOptions);
    }
    async _poll(url, pollOptions) {
        try {
            while (this._running) {
                try {
                    const pollUrl = `${url}&_=${Date.now()}`;
                    this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_3__.LogLevel.Trace, `(LongPolling transport) polling: ${pollUrl}.`);
                    const response = await this._httpClient.get(pollUrl, pollOptions);
                    if (response.statusCode === 204) {
                        this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_3__.LogLevel.Information, "(LongPolling transport) Poll terminated by server.");
                        this._running = false;
                    }
                    else if (response.statusCode !== 200) {
                        this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_3__.LogLevel.Error, `(LongPolling transport) Unexpected response code: ${response.statusCode}.`);
                        // Unexpected status code
                        this._closeError = new _Errors__WEBPACK_IMPORTED_MODULE_4__.HttpError(response.statusText || "", response.statusCode);
                        this._running = false;
                    }
                    else {
                        // Process the response
                        if (response.content) {
                            this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_3__.LogLevel.Trace, `(LongPolling transport) data received. ${(0,_Utils__WEBPACK_IMPORTED_MODULE_1__.getDataDetail)(response.content, this._options.logMessageContent)}.`);
                            if (this.onreceive) {
                                this.onreceive(response.content);
                            }
                        }
                        else {
                            // This is another way timeout manifest.
                            this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_3__.LogLevel.Trace, "(LongPolling transport) Poll timed out, reissuing.");
                        }
                    }
                }
                catch (e) {
                    if (!this._running) {
                        // Log but disregard errors that occur after stopping
                        this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_3__.LogLevel.Trace, `(LongPolling transport) Poll errored after shutdown: ${e.message}`);
                    }
                    else {
                        if (e instanceof _Errors__WEBPACK_IMPORTED_MODULE_4__.TimeoutError) {
                            // Ignore timeouts and reissue the poll.
                            this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_3__.LogLevel.Trace, "(LongPolling transport) Poll timed out, reissuing.");
                        }
                        else {
                            // Close the connection with the error as the result.
                            this._closeError = e;
                            this._running = false;
                        }
                    }
                }
            }
        }
        finally {
            this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_3__.LogLevel.Trace, "(LongPolling transport) Polling complete.");
            // We will reach here with pollAborted==false when the server returned a response causing the transport to stop.
            // If pollAborted==true then client initiated the stop and the stop method will raise the close event after DELETE is sent.
            if (!this.pollAborted) {
                this._raiseOnClose();
            }
        }
    }
    async send(data) {
        if (!this._running) {
            return Promise.reject(new Error("Cannot send until the transport is connected"));
        }
        return (0,_Utils__WEBPACK_IMPORTED_MODULE_1__.sendMessage)(this._logger, "LongPolling", this._httpClient, this._url, data, this._options);
    }
    async stop() {
        this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_3__.LogLevel.Trace, "(LongPolling transport) Stopping polling.");
        // Tell receiving loop to stop, abort any current request, and then wait for it to finish
        this._running = false;
        this._pollAbort.abort();
        try {
            await this._receiving;
            // Send DELETE to clean up long polling on the server
            this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_3__.LogLevel.Trace, `(LongPolling transport) sending DELETE request to ${this._url}.`);
            const headers = {};
            const [name, value] = (0,_Utils__WEBPACK_IMPORTED_MODULE_1__.getUserAgentHeader)();
            headers[name] = value;
            const deleteOptions = {
                headers: { ...headers, ...this._options.headers },
                timeout: this._options.timeout,
                withCredentials: this._options.withCredentials,
            };
            let error;
            try {
                await this._httpClient.delete(this._url, deleteOptions);
            }
            catch (err) {
                error = err;
            }
            if (error) {
                if (error instanceof _Errors__WEBPACK_IMPORTED_MODULE_4__.HttpError) {
                    if (error.statusCode === 404) {
                        this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_3__.LogLevel.Trace, "(LongPolling transport) A 404 response was returned from sending a DELETE request.");
                    }
                    else {
                        this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_3__.LogLevel.Trace, `(LongPolling transport) Error sending a DELETE request: ${error}`);
                    }
                }
            }
            else {
                this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_3__.LogLevel.Trace, "(LongPolling transport) DELETE request accepted.");
            }
        }
        finally {
            this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_3__.LogLevel.Trace, "(LongPolling transport) Stop finished.");
            // Raise close event here instead of in polling
            // It needs to happen after the DELETE request is sent
            this._raiseOnClose();
        }
    }
    _raiseOnClose() {
        if (this.onclose) {
            let logMessage = "(LongPolling transport) Firing onclose event.";
            if (this._closeError) {
                logMessage += " Error: " + this._closeError;
            }
            this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_3__.LogLevel.Trace, logMessage);
            this.onclose(this._closeError);
        }
    }
}
//# sourceMappingURL=LongPollingTransport.js.map

/***/ }),

/***/ "../node_modules/@microsoft/signalr/dist/esm/MessageBuffer.js":
/*!********************************************************************!*\
  !*** ../node_modules/@microsoft/signalr/dist/esm/MessageBuffer.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MessageBuffer: () => (/* binding */ MessageBuffer)
/* harmony export */ });
/* harmony import */ var _IHubProtocol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./IHubProtocol */ "../node_modules/@microsoft/signalr/dist/esm/IHubProtocol.js");
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Utils */ "../node_modules/@microsoft/signalr/dist/esm/Utils.js");
// Licensed to the .NET Foundation under one or more agreements.
// The .NET Foundation licenses this file to you under the MIT license.


/** @private */
class MessageBuffer {
    constructor(protocol, connection, bufferSize) {
        this._bufferSize = 100000;
        this._messages = [];
        this._totalMessageCount = 0;
        this._waitForSequenceMessage = false;
        // Message IDs start at 1 and always increment by 1
        this._nextReceivingSequenceId = 1;
        this._latestReceivedSequenceId = 0;
        this._bufferedByteCount = 0;
        this._reconnectInProgress = false;
        this._protocol = protocol;
        this._connection = connection;
        this._bufferSize = bufferSize;
    }
    async _send(message) {
        const serializedMessage = this._protocol.writeMessage(message);
        let backpressurePromise = Promise.resolve();
        // Only count invocation messages. Acks, pings, etc. don't need to be resent on reconnect
        if (this._isInvocationMessage(message)) {
            this._totalMessageCount++;
            let backpressurePromiseResolver = () => { };
            let backpressurePromiseRejector = () => { };
            if ((0,_Utils__WEBPACK_IMPORTED_MODULE_0__.isArrayBuffer)(serializedMessage)) {
                this._bufferedByteCount += serializedMessage.byteLength;
            }
            else {
                this._bufferedByteCount += serializedMessage.length;
            }
            if (this._bufferedByteCount >= this._bufferSize) {
                backpressurePromise = new Promise((resolve, reject) => {
                    backpressurePromiseResolver = resolve;
                    backpressurePromiseRejector = reject;
                });
            }
            this._messages.push(new BufferedItem(serializedMessage, this._totalMessageCount, backpressurePromiseResolver, backpressurePromiseRejector));
        }
        try {
            // If this is set it means we are reconnecting or resending
            // We don't want to send on a disconnected connection
            // And we don't want to send if resend is running since that would mean sending
            // this message twice
            if (!this._reconnectInProgress) {
                await this._connection.send(serializedMessage);
            }
        }
        catch {
            this._disconnected();
        }
        await backpressurePromise;
    }
    _ack(ackMessage) {
        let newestAckedMessage = -1;
        // Find index of newest message being acked
        for (let index = 0; index < this._messages.length; index++) {
            const element = this._messages[index];
            if (element._id <= ackMessage.sequenceId) {
                newestAckedMessage = index;
                if ((0,_Utils__WEBPACK_IMPORTED_MODULE_0__.isArrayBuffer)(element._message)) {
                    this._bufferedByteCount -= element._message.byteLength;
                }
                else {
                    this._bufferedByteCount -= element._message.length;
                }
                // resolve items that have already been sent and acked
                element._resolver();
            }
            else if (this._bufferedByteCount < this._bufferSize) {
                // resolve items that now fall under the buffer limit but haven't been acked
                element._resolver();
            }
            else {
                break;
            }
        }
        if (newestAckedMessage !== -1) {
            // We're removing everything including the message pointed to, so add 1
            this._messages = this._messages.slice(newestAckedMessage + 1);
        }
    }
    _shouldProcessMessage(message) {
        if (this._waitForSequenceMessage) {
            if (message.type !== _IHubProtocol__WEBPACK_IMPORTED_MODULE_1__.MessageType.Sequence) {
                return false;
            }
            else {
                this._waitForSequenceMessage = false;
                return true;
            }
        }
        // No special processing for acks, pings, etc.
        if (!this._isInvocationMessage(message)) {
            return true;
        }
        const currentId = this._nextReceivingSequenceId;
        this._nextReceivingSequenceId++;
        if (currentId <= this._latestReceivedSequenceId) {
            if (currentId === this._latestReceivedSequenceId) {
                // Should only hit this if we just reconnected and the server is sending
                // Messages it has buffered, which would mean it hasn't seen an Ack for these messages
                this._ackTimer();
            }
            // Ignore, this is a duplicate message
            return false;
        }
        this._latestReceivedSequenceId = currentId;
        // Only start the timer for sending an Ack message when we have a message to ack. This also conveniently solves
        // timer throttling by not having a recursive timer, and by starting the timer via a network call (recv)
        this._ackTimer();
        return true;
    }
    _resetSequence(message) {
        if (message.sequenceId > this._nextReceivingSequenceId) {
            // eslint-disable-next-line @typescript-eslint/no-floating-promises
            this._connection.stop(new Error("Sequence ID greater than amount of messages we've received."));
            return;
        }
        this._nextReceivingSequenceId = message.sequenceId;
    }
    _disconnected() {
        this._reconnectInProgress = true;
        this._waitForSequenceMessage = true;
    }
    async _resend() {
        const sequenceId = this._messages.length !== 0
            ? this._messages[0]._id
            : this._totalMessageCount + 1;
        await this._connection.send(this._protocol.writeMessage({ type: _IHubProtocol__WEBPACK_IMPORTED_MODULE_1__.MessageType.Sequence, sequenceId }));
        // Get a local variable to the _messages, just in case messages are acked while resending
        // Which would slice the _messages array (which creates a new copy)
        const messages = this._messages;
        for (const element of messages) {
            await this._connection.send(element._message);
        }
        this._reconnectInProgress = false;
    }
    _dispose(error) {
        error !== null && error !== void 0 ? error : (error = new Error("Unable to reconnect to server."));
        // Unblock backpressure if any
        for (const element of this._messages) {
            element._rejector(error);
        }
    }
    _isInvocationMessage(message) {
        // There is no way to check if something implements an interface.
        // So we individually check the messages in a switch statement.
        // To make sure we don't miss any message types we rely on the compiler
        // seeing the function returns a value and it will do the
        // exhaustive check for us on the switch statement, since we don't use 'case default'
        switch (message.type) {
            case _IHubProtocol__WEBPACK_IMPORTED_MODULE_1__.MessageType.Invocation:
            case _IHubProtocol__WEBPACK_IMPORTED_MODULE_1__.MessageType.StreamItem:
            case _IHubProtocol__WEBPACK_IMPORTED_MODULE_1__.MessageType.Completion:
            case _IHubProtocol__WEBPACK_IMPORTED_MODULE_1__.MessageType.StreamInvocation:
            case _IHubProtocol__WEBPACK_IMPORTED_MODULE_1__.MessageType.CancelInvocation:
                return true;
            case _IHubProtocol__WEBPACK_IMPORTED_MODULE_1__.MessageType.Close:
            case _IHubProtocol__WEBPACK_IMPORTED_MODULE_1__.MessageType.Sequence:
            case _IHubProtocol__WEBPACK_IMPORTED_MODULE_1__.MessageType.Ping:
            case _IHubProtocol__WEBPACK_IMPORTED_MODULE_1__.MessageType.Ack:
                return false;
        }
    }
    _ackTimer() {
        if (this._ackTimerHandle === undefined) {
            this._ackTimerHandle = setTimeout(async () => {
                try {
                    if (!this._reconnectInProgress) {
                        await this._connection.send(this._protocol.writeMessage({ type: _IHubProtocol__WEBPACK_IMPORTED_MODULE_1__.MessageType.Ack, sequenceId: this._latestReceivedSequenceId }));
                    }
                    // Ignore errors, that means the connection is closed and we don't care about the Ack message anymore.
                }
                catch { }
                clearTimeout(this._ackTimerHandle);
                this._ackTimerHandle = undefined;
                // 1 second delay so we don't spam Ack messages if there are many messages being received at once.
            }, 1000);
        }
    }
}
class BufferedItem {
    constructor(message, id, resolver, rejector) {
        this._message = message;
        this._id = id;
        this._resolver = resolver;
        this._rejector = rejector;
    }
}
//# sourceMappingURL=MessageBuffer.js.map

/***/ }),

/***/ "../node_modules/@microsoft/signalr/dist/esm/ServerSentEventsTransport.js":
/*!********************************************************************************!*\
  !*** ../node_modules/@microsoft/signalr/dist/esm/ServerSentEventsTransport.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ServerSentEventsTransport: () => (/* binding */ ServerSentEventsTransport)
/* harmony export */ });
/* harmony import */ var _ILogger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ILogger */ "../node_modules/@microsoft/signalr/dist/esm/ILogger.js");
/* harmony import */ var _ITransport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ITransport */ "../node_modules/@microsoft/signalr/dist/esm/ITransport.js");
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Utils */ "../node_modules/@microsoft/signalr/dist/esm/Utils.js");
// Licensed to the .NET Foundation under one or more agreements.
// The .NET Foundation licenses this file to you under the MIT license.



/** @private */
class ServerSentEventsTransport {
    constructor(httpClient, accessToken, logger, options) {
        this._httpClient = httpClient;
        this._accessToken = accessToken;
        this._logger = logger;
        this._options = options;
        this.onreceive = null;
        this.onclose = null;
    }
    async connect(url, transferFormat) {
        _Utils__WEBPACK_IMPORTED_MODULE_0__.Arg.isRequired(url, "url");
        _Utils__WEBPACK_IMPORTED_MODULE_0__.Arg.isRequired(transferFormat, "transferFormat");
        _Utils__WEBPACK_IMPORTED_MODULE_0__.Arg.isIn(transferFormat, _ITransport__WEBPACK_IMPORTED_MODULE_1__.TransferFormat, "transferFormat");
        this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__.LogLevel.Trace, "(SSE transport) Connecting.");
        // set url before accessTokenFactory because this._url is only for send and we set the auth header instead of the query string for send
        this._url = url;
        if (this._accessToken) {
            url += (url.indexOf("?") < 0 ? "?" : "&") + `access_token=${encodeURIComponent(this._accessToken)}`;
        }
        return new Promise((resolve, reject) => {
            let opened = false;
            if (transferFormat !== _ITransport__WEBPACK_IMPORTED_MODULE_1__.TransferFormat.Text) {
                reject(new Error("The Server-Sent Events transport only supports the 'Text' transfer format"));
                return;
            }
            let eventSource;
            if (_Utils__WEBPACK_IMPORTED_MODULE_0__.Platform.isBrowser || _Utils__WEBPACK_IMPORTED_MODULE_0__.Platform.isWebWorker) {
                eventSource = new this._options.EventSource(url, { withCredentials: this._options.withCredentials });
            }
            else {
                // Non-browser passes cookies via the dictionary
                const cookies = this._httpClient.getCookieString(url);
                const headers = {};
                headers.Cookie = cookies;
                const [name, value] = (0,_Utils__WEBPACK_IMPORTED_MODULE_0__.getUserAgentHeader)();
                headers[name] = value;
                eventSource = new this._options.EventSource(url, { withCredentials: this._options.withCredentials, headers: { ...headers, ...this._options.headers } });
            }
            try {
                eventSource.onmessage = (e) => {
                    if (this.onreceive) {
                        try {
                            this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__.LogLevel.Trace, `(SSE transport) data received. ${(0,_Utils__WEBPACK_IMPORTED_MODULE_0__.getDataDetail)(e.data, this._options.logMessageContent)}.`);
                            this.onreceive(e.data);
                        }
                        catch (error) {
                            this._close(error);
                            return;
                        }
                    }
                };
                // @ts-ignore: not using event on purpose
                eventSource.onerror = (e) => {
                    // EventSource doesn't give any useful information about server side closes.
                    if (opened) {
                        this._close();
                    }
                    else {
                        reject(new Error("EventSource failed to connect. The connection could not be found on the server,"
                            + " either the connection ID is not present on the server, or a proxy is refusing/buffering the connection."
                            + " If you have multiple servers check that sticky sessions are enabled."));
                    }
                };
                eventSource.onopen = () => {
                    this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__.LogLevel.Information, `SSE connected to ${this._url}`);
                    this._eventSource = eventSource;
                    opened = true;
                    resolve();
                };
            }
            catch (e) {
                reject(e);
                return;
            }
        });
    }
    async send(data) {
        if (!this._eventSource) {
            return Promise.reject(new Error("Cannot send until the transport is connected"));
        }
        return (0,_Utils__WEBPACK_IMPORTED_MODULE_0__.sendMessage)(this._logger, "SSE", this._httpClient, this._url, data, this._options);
    }
    stop() {
        this._close();
        return Promise.resolve();
    }
    _close(e) {
        if (this._eventSource) {
            this._eventSource.close();
            this._eventSource = undefined;
            if (this.onclose) {
                this.onclose(e);
            }
        }
    }
}
//# sourceMappingURL=ServerSentEventsTransport.js.map

/***/ }),

/***/ "../node_modules/@microsoft/signalr/dist/esm/Subject.js":
/*!**************************************************************!*\
  !*** ../node_modules/@microsoft/signalr/dist/esm/Subject.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Subject: () => (/* binding */ Subject)
/* harmony export */ });
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Utils */ "../node_modules/@microsoft/signalr/dist/esm/Utils.js");
// Licensed to the .NET Foundation under one or more agreements.
// The .NET Foundation licenses this file to you under the MIT license.

/** Stream implementation to stream items to the server. */
class Subject {
    constructor() {
        this.observers = [];
    }
    next(item) {
        for (const observer of this.observers) {
            observer.next(item);
        }
    }
    error(err) {
        for (const observer of this.observers) {
            if (observer.error) {
                observer.error(err);
            }
        }
    }
    complete() {
        for (const observer of this.observers) {
            if (observer.complete) {
                observer.complete();
            }
        }
    }
    subscribe(observer) {
        this.observers.push(observer);
        return new _Utils__WEBPACK_IMPORTED_MODULE_0__.SubjectSubscription(this, observer);
    }
}
//# sourceMappingURL=Subject.js.map

/***/ }),

/***/ "../node_modules/@microsoft/signalr/dist/esm/TextMessageFormat.js":
/*!************************************************************************!*\
  !*** ../node_modules/@microsoft/signalr/dist/esm/TextMessageFormat.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TextMessageFormat: () => (/* binding */ TextMessageFormat)
/* harmony export */ });
// Licensed to the .NET Foundation under one or more agreements.
// The .NET Foundation licenses this file to you under the MIT license.
// Not exported from index
/** @private */
class TextMessageFormat {
    static write(output) {
        return `${output}${TextMessageFormat.RecordSeparator}`;
    }
    static parse(input) {
        if (input[input.length - 1] !== TextMessageFormat.RecordSeparator) {
            throw new Error("Message is incomplete.");
        }
        const messages = input.split(TextMessageFormat.RecordSeparator);
        messages.pop();
        return messages;
    }
}
TextMessageFormat.RecordSeparatorCode = 0x1e;
TextMessageFormat.RecordSeparator = String.fromCharCode(TextMessageFormat.RecordSeparatorCode);
//# sourceMappingURL=TextMessageFormat.js.map

/***/ }),

/***/ "../node_modules/@microsoft/signalr/dist/esm/Utils.js":
/*!************************************************************!*\
  !*** ../node_modules/@microsoft/signalr/dist/esm/Utils.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Arg: () => (/* binding */ Arg),
/* harmony export */   ConsoleLogger: () => (/* binding */ ConsoleLogger),
/* harmony export */   Platform: () => (/* binding */ Platform),
/* harmony export */   SubjectSubscription: () => (/* binding */ SubjectSubscription),
/* harmony export */   VERSION: () => (/* binding */ VERSION),
/* harmony export */   constructUserAgent: () => (/* binding */ constructUserAgent),
/* harmony export */   createLogger: () => (/* binding */ createLogger),
/* harmony export */   formatArrayBuffer: () => (/* binding */ formatArrayBuffer),
/* harmony export */   getDataDetail: () => (/* binding */ getDataDetail),
/* harmony export */   getErrorString: () => (/* binding */ getErrorString),
/* harmony export */   getGlobalThis: () => (/* binding */ getGlobalThis),
/* harmony export */   getUserAgentHeader: () => (/* binding */ getUserAgentHeader),
/* harmony export */   isArrayBuffer: () => (/* binding */ isArrayBuffer),
/* harmony export */   sendMessage: () => (/* binding */ sendMessage)
/* harmony export */ });
/* harmony import */ var _ILogger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ILogger */ "../node_modules/@microsoft/signalr/dist/esm/ILogger.js");
/* harmony import */ var _Loggers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Loggers */ "../node_modules/@microsoft/signalr/dist/esm/Loggers.js");
// Licensed to the .NET Foundation under one or more agreements.
// The .NET Foundation licenses this file to you under the MIT license.


// Version token that will be replaced by the prepack command
/** The version of the SignalR client. */
const VERSION = "8.0.7";
/** @private */
class Arg {
    static isRequired(val, name) {
        if (val === null || val === undefined) {
            throw new Error(`The '${name}' argument is required.`);
        }
    }
    static isNotEmpty(val, name) {
        if (!val || val.match(/^\s*$/)) {
            throw new Error(`The '${name}' argument should not be empty.`);
        }
    }
    static isIn(val, values, name) {
        // TypeScript enums have keys for **both** the name and the value of each enum member on the type itself.
        if (!(val in values)) {
            throw new Error(`Unknown ${name} value: ${val}.`);
        }
    }
}
/** @private */
class Platform {
    // react-native has a window but no document so we should check both
    static get isBrowser() {
        return !Platform.isNode && typeof window === "object" && typeof window.document === "object";
    }
    // WebWorkers don't have a window object so the isBrowser check would fail
    static get isWebWorker() {
        return !Platform.isNode && typeof self === "object" && "importScripts" in self;
    }
    // react-native has a window but no document
    static get isReactNative() {
        return !Platform.isNode && typeof window === "object" && typeof window.document === "undefined";
    }
    // Node apps shouldn't have a window object, but WebWorkers don't either
    // so we need to check for both WebWorker and window
    static get isNode() {
        return typeof process !== "undefined" && process.release && process.release.name === "node";
    }
}
/** @private */
function getDataDetail(data, includeContent) {
    let detail = "";
    if (isArrayBuffer(data)) {
        detail = `Binary data of length ${data.byteLength}`;
        if (includeContent) {
            detail += `. Content: '${formatArrayBuffer(data)}'`;
        }
    }
    else if (typeof data === "string") {
        detail = `String data of length ${data.length}`;
        if (includeContent) {
            detail += `. Content: '${data}'`;
        }
    }
    return detail;
}
/** @private */
function formatArrayBuffer(data) {
    const view = new Uint8Array(data);
    // Uint8Array.map only supports returning another Uint8Array?
    let str = "";
    view.forEach((num) => {
        const pad = num < 16 ? "0" : "";
        str += `0x${pad}${num.toString(16)} `;
    });
    // Trim of trailing space.
    return str.substr(0, str.length - 1);
}
// Also in signalr-protocol-msgpack/Utils.ts
/** @private */
function isArrayBuffer(val) {
    return val && typeof ArrayBuffer !== "undefined" &&
        (val instanceof ArrayBuffer ||
            // Sometimes we get an ArrayBuffer that doesn't satisfy instanceof
            (val.constructor && val.constructor.name === "ArrayBuffer"));
}
/** @private */
async function sendMessage(logger, transportName, httpClient, url, content, options) {
    const headers = {};
    const [name, value] = getUserAgentHeader();
    headers[name] = value;
    logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_0__.LogLevel.Trace, `(${transportName} transport) sending data. ${getDataDetail(content, options.logMessageContent)}.`);
    const responseType = isArrayBuffer(content) ? "arraybuffer" : "text";
    const response = await httpClient.post(url, {
        content,
        headers: { ...headers, ...options.headers },
        responseType,
        timeout: options.timeout,
        withCredentials: options.withCredentials,
    });
    logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_0__.LogLevel.Trace, `(${transportName} transport) request complete. Response status: ${response.statusCode}.`);
}
/** @private */
function createLogger(logger) {
    if (logger === undefined) {
        return new ConsoleLogger(_ILogger__WEBPACK_IMPORTED_MODULE_0__.LogLevel.Information);
    }
    if (logger === null) {
        return _Loggers__WEBPACK_IMPORTED_MODULE_1__.NullLogger.instance;
    }
    if (logger.log !== undefined) {
        return logger;
    }
    return new ConsoleLogger(logger);
}
/** @private */
class SubjectSubscription {
    constructor(subject, observer) {
        this._subject = subject;
        this._observer = observer;
    }
    dispose() {
        const index = this._subject.observers.indexOf(this._observer);
        if (index > -1) {
            this._subject.observers.splice(index, 1);
        }
        if (this._subject.observers.length === 0 && this._subject.cancelCallback) {
            this._subject.cancelCallback().catch((_) => { });
        }
    }
}
/** @private */
class ConsoleLogger {
    constructor(minimumLogLevel) {
        this._minLevel = minimumLogLevel;
        this.out = console;
    }
    log(logLevel, message) {
        if (logLevel >= this._minLevel) {
            const msg = `[${new Date().toISOString()}] ${_ILogger__WEBPACK_IMPORTED_MODULE_0__.LogLevel[logLevel]}: ${message}`;
            switch (logLevel) {
                case _ILogger__WEBPACK_IMPORTED_MODULE_0__.LogLevel.Critical:
                case _ILogger__WEBPACK_IMPORTED_MODULE_0__.LogLevel.Error:
                    this.out.error(msg);
                    break;
                case _ILogger__WEBPACK_IMPORTED_MODULE_0__.LogLevel.Warning:
                    this.out.warn(msg);
                    break;
                case _ILogger__WEBPACK_IMPORTED_MODULE_0__.LogLevel.Information:
                    this.out.info(msg);
                    break;
                default:
                    // console.debug only goes to attached debuggers in Node, so we use console.log for Trace and Debug
                    this.out.log(msg);
                    break;
            }
        }
    }
}
/** @private */
function getUserAgentHeader() {
    let userAgentHeaderName = "X-SignalR-User-Agent";
    if (Platform.isNode) {
        userAgentHeaderName = "User-Agent";
    }
    return [userAgentHeaderName, constructUserAgent(VERSION, getOsName(), getRuntime(), getRuntimeVersion())];
}
/** @private */
function constructUserAgent(version, os, runtime, runtimeVersion) {
    // Microsoft SignalR/[Version] ([Detailed Version]; [Operating System]; [Runtime]; [Runtime Version])
    let userAgent = "Microsoft SignalR/";
    const majorAndMinor = version.split(".");
    userAgent += `${majorAndMinor[0]}.${majorAndMinor[1]}`;
    userAgent += ` (${version}; `;
    if (os && os !== "") {
        userAgent += `${os}; `;
    }
    else {
        userAgent += "Unknown OS; ";
    }
    userAgent += `${runtime}`;
    if (runtimeVersion) {
        userAgent += `; ${runtimeVersion}`;
    }
    else {
        userAgent += "; Unknown Runtime Version";
    }
    userAgent += ")";
    return userAgent;
}
// eslint-disable-next-line spaced-comment
/*#__PURE__*/ function getOsName() {
    if (Platform.isNode) {
        switch (process.platform) {
            case "win32":
                return "Windows NT";
            case "darwin":
                return "macOS";
            case "linux":
                return "Linux";
            default:
                return process.platform;
        }
    }
    else {
        return "";
    }
}
// eslint-disable-next-line spaced-comment
/*#__PURE__*/ function getRuntimeVersion() {
    if (Platform.isNode) {
        return process.versions.node;
    }
    return undefined;
}
function getRuntime() {
    if (Platform.isNode) {
        return "NodeJS";
    }
    else {
        return "Browser";
    }
}
/** @private */
function getErrorString(e) {
    if (e.stack) {
        return e.stack;
    }
    else if (e.message) {
        return e.message;
    }
    return `${e}`;
}
/** @private */
function getGlobalThis() {
    // globalThis is semi-new and not available in Node until v12
    if (typeof globalThis !== "undefined") {
        return globalThis;
    }
    if (typeof self !== "undefined") {
        return self;
    }
    if (typeof window !== "undefined") {
        return window;
    }
    if (typeof __webpack_require__.g !== "undefined") {
        return __webpack_require__.g;
    }
    throw new Error("could not find global");
}
//# sourceMappingURL=Utils.js.map

/***/ }),

/***/ "../node_modules/@microsoft/signalr/dist/esm/WebSocketTransport.js":
/*!*************************************************************************!*\
  !*** ../node_modules/@microsoft/signalr/dist/esm/WebSocketTransport.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WebSocketTransport: () => (/* binding */ WebSocketTransport)
/* harmony export */ });
/* harmony import */ var _HeaderNames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./HeaderNames */ "../node_modules/@microsoft/signalr/dist/esm/HeaderNames.js");
/* harmony import */ var _ILogger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ILogger */ "../node_modules/@microsoft/signalr/dist/esm/ILogger.js");
/* harmony import */ var _ITransport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ITransport */ "../node_modules/@microsoft/signalr/dist/esm/ITransport.js");
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Utils */ "../node_modules/@microsoft/signalr/dist/esm/Utils.js");
// Licensed to the .NET Foundation under one or more agreements.
// The .NET Foundation licenses this file to you under the MIT license.




/** @private */
class WebSocketTransport {
    constructor(httpClient, accessTokenFactory, logger, logMessageContent, webSocketConstructor, headers) {
        this._logger = logger;
        this._accessTokenFactory = accessTokenFactory;
        this._logMessageContent = logMessageContent;
        this._webSocketConstructor = webSocketConstructor;
        this._httpClient = httpClient;
        this.onreceive = null;
        this.onclose = null;
        this._headers = headers;
    }
    async connect(url, transferFormat) {
        _Utils__WEBPACK_IMPORTED_MODULE_0__.Arg.isRequired(url, "url");
        _Utils__WEBPACK_IMPORTED_MODULE_0__.Arg.isRequired(transferFormat, "transferFormat");
        _Utils__WEBPACK_IMPORTED_MODULE_0__.Arg.isIn(transferFormat, _ITransport__WEBPACK_IMPORTED_MODULE_1__.TransferFormat, "transferFormat");
        this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__.LogLevel.Trace, "(WebSockets transport) Connecting.");
        let token;
        if (this._accessTokenFactory) {
            token = await this._accessTokenFactory();
        }
        return new Promise((resolve, reject) => {
            url = url.replace(/^http/, "ws");
            let webSocket;
            const cookies = this._httpClient.getCookieString(url);
            let opened = false;
            if (_Utils__WEBPACK_IMPORTED_MODULE_0__.Platform.isNode || _Utils__WEBPACK_IMPORTED_MODULE_0__.Platform.isReactNative) {
                const headers = {};
                const [name, value] = (0,_Utils__WEBPACK_IMPORTED_MODULE_0__.getUserAgentHeader)();
                headers[name] = value;
                if (token) {
                    headers[_HeaderNames__WEBPACK_IMPORTED_MODULE_3__.HeaderNames.Authorization] = `Bearer ${token}`;
                }
                if (cookies) {
                    headers[_HeaderNames__WEBPACK_IMPORTED_MODULE_3__.HeaderNames.Cookie] = cookies;
                }
                // Only pass headers when in non-browser environments
                webSocket = new this._webSocketConstructor(url, undefined, {
                    headers: { ...headers, ...this._headers },
                });
            }
            else {
                if (token) {
                    url += (url.indexOf("?") < 0 ? "?" : "&") + `access_token=${encodeURIComponent(token)}`;
                }
            }
            if (!webSocket) {
                // Chrome is not happy with passing 'undefined' as protocol
                webSocket = new this._webSocketConstructor(url);
            }
            if (transferFormat === _ITransport__WEBPACK_IMPORTED_MODULE_1__.TransferFormat.Binary) {
                webSocket.binaryType = "arraybuffer";
            }
            webSocket.onopen = (_event) => {
                this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__.LogLevel.Information, `WebSocket connected to ${url}.`);
                this._webSocket = webSocket;
                opened = true;
                resolve();
            };
            webSocket.onerror = (event) => {
                let error = null;
                // ErrorEvent is a browser only type we need to check if the type exists before using it
                if (typeof ErrorEvent !== "undefined" && event instanceof ErrorEvent) {
                    error = event.error;
                }
                else {
                    error = "There was an error with the transport";
                }
                this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__.LogLevel.Information, `(WebSockets transport) ${error}.`);
            };
            webSocket.onmessage = (message) => {
                this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__.LogLevel.Trace, `(WebSockets transport) data received. ${(0,_Utils__WEBPACK_IMPORTED_MODULE_0__.getDataDetail)(message.data, this._logMessageContent)}.`);
                if (this.onreceive) {
                    try {
                        this.onreceive(message.data);
                    }
                    catch (error) {
                        this._close(error);
                        return;
                    }
                }
            };
            webSocket.onclose = (event) => {
                // Don't call close handler if connection was never established
                // We'll reject the connect call instead
                if (opened) {
                    this._close(event);
                }
                else {
                    let error = null;
                    // ErrorEvent is a browser only type we need to check if the type exists before using it
                    if (typeof ErrorEvent !== "undefined" && event instanceof ErrorEvent) {
                        error = event.error;
                    }
                    else {
                        error = "WebSocket failed to connect. The connection could not be found on the server,"
                            + " either the endpoint may not be a SignalR endpoint,"
                            + " the connection ID is not present on the server, or there is a proxy blocking WebSockets."
                            + " If you have multiple servers check that sticky sessions are enabled.";
                    }
                    reject(new Error(error));
                }
            };
        });
    }
    send(data) {
        if (this._webSocket && this._webSocket.readyState === this._webSocketConstructor.OPEN) {
            this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__.LogLevel.Trace, `(WebSockets transport) sending data. ${(0,_Utils__WEBPACK_IMPORTED_MODULE_0__.getDataDetail)(data, this._logMessageContent)}.`);
            this._webSocket.send(data);
            return Promise.resolve();
        }
        return Promise.reject("WebSocket is not in the OPEN state");
    }
    stop() {
        if (this._webSocket) {
            // Manually invoke onclose callback inline so we know the HttpConnection was closed properly before returning
            // This also solves an issue where websocket.onclose could take 18+ seconds to trigger during network disconnects
            this._close(undefined);
        }
        return Promise.resolve();
    }
    _close(event) {
        // webSocket will be null if the transport did not start successfully
        if (this._webSocket) {
            // Clear websocket handlers because we are considering the socket closed now
            this._webSocket.onclose = () => { };
            this._webSocket.onmessage = () => { };
            this._webSocket.onerror = () => { };
            this._webSocket.close();
            this._webSocket = undefined;
        }
        this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_2__.LogLevel.Trace, "(WebSockets transport) socket closed.");
        if (this.onclose) {
            if (this._isCloseEvent(event) && (event.wasClean === false || event.code !== 1000)) {
                this.onclose(new Error(`WebSocket closed with status code: ${event.code} (${event.reason || "no reason given"}).`));
            }
            else if (event instanceof Error) {
                this.onclose(event);
            }
            else {
                this.onclose();
            }
        }
    }
    _isCloseEvent(event) {
        return event && typeof event.wasClean === "boolean" && typeof event.code === "number";
    }
}
//# sourceMappingURL=WebSocketTransport.js.map

/***/ }),

/***/ "../node_modules/@microsoft/signalr/dist/esm/XhrHttpClient.js":
/*!********************************************************************!*\
  !*** ../node_modules/@microsoft/signalr/dist/esm/XhrHttpClient.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   XhrHttpClient: () => (/* binding */ XhrHttpClient)
/* harmony export */ });
/* harmony import */ var _Errors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Errors */ "../node_modules/@microsoft/signalr/dist/esm/Errors.js");
/* harmony import */ var _HttpClient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HttpClient */ "../node_modules/@microsoft/signalr/dist/esm/HttpClient.js");
/* harmony import */ var _ILogger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ILogger */ "../node_modules/@microsoft/signalr/dist/esm/ILogger.js");
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Utils */ "../node_modules/@microsoft/signalr/dist/esm/Utils.js");
// Licensed to the .NET Foundation under one or more agreements.
// The .NET Foundation licenses this file to you under the MIT license.




class XhrHttpClient extends _HttpClient__WEBPACK_IMPORTED_MODULE_0__.HttpClient {
    constructor(logger) {
        super();
        this._logger = logger;
    }
    /** @inheritDoc */
    send(request) {
        // Check that abort was not signaled before calling send
        if (request.abortSignal && request.abortSignal.aborted) {
            return Promise.reject(new _Errors__WEBPACK_IMPORTED_MODULE_1__.AbortError());
        }
        if (!request.method) {
            return Promise.reject(new Error("No method defined."));
        }
        if (!request.url) {
            return Promise.reject(new Error("No url defined."));
        }
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open(request.method, request.url, true);
            xhr.withCredentials = request.withCredentials === undefined ? true : request.withCredentials;
            xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
            if (request.content === "") {
                request.content = undefined;
            }
            if (request.content) {
                // Explicitly setting the Content-Type header for React Native on Android platform.
                if ((0,_Utils__WEBPACK_IMPORTED_MODULE_2__.isArrayBuffer)(request.content)) {
                    xhr.setRequestHeader("Content-Type", "application/octet-stream");
                }
                else {
                    xhr.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
                }
            }
            const headers = request.headers;
            if (headers) {
                Object.keys(headers)
                    .forEach((header) => {
                    xhr.setRequestHeader(header, headers[header]);
                });
            }
            if (request.responseType) {
                xhr.responseType = request.responseType;
            }
            if (request.abortSignal) {
                request.abortSignal.onabort = () => {
                    xhr.abort();
                    reject(new _Errors__WEBPACK_IMPORTED_MODULE_1__.AbortError());
                };
            }
            if (request.timeout) {
                xhr.timeout = request.timeout;
            }
            xhr.onload = () => {
                if (request.abortSignal) {
                    request.abortSignal.onabort = null;
                }
                if (xhr.status >= 200 && xhr.status < 300) {
                    resolve(new _HttpClient__WEBPACK_IMPORTED_MODULE_0__.HttpResponse(xhr.status, xhr.statusText, xhr.response || xhr.responseText));
                }
                else {
                    reject(new _Errors__WEBPACK_IMPORTED_MODULE_1__.HttpError(xhr.response || xhr.responseText || xhr.statusText, xhr.status));
                }
            };
            xhr.onerror = () => {
                this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_3__.LogLevel.Warning, `Error from HTTP request. ${xhr.status}: ${xhr.statusText}.`);
                reject(new _Errors__WEBPACK_IMPORTED_MODULE_1__.HttpError(xhr.statusText, xhr.status));
            };
            xhr.ontimeout = () => {
                this._logger.log(_ILogger__WEBPACK_IMPORTED_MODULE_3__.LogLevel.Warning, `Timeout from HTTP request.`);
                reject(new _Errors__WEBPACK_IMPORTED_MODULE_1__.TimeoutError());
            };
            xhr.send(request.content);
        });
    }
}
//# sourceMappingURL=XhrHttpClient.js.map

/***/ }),

/***/ "../node_modules/inversify/lib/esm/index.js":
/*!**************************************************!*\
  !*** ../node_modules/inversify/lib/esm/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Container: () => (/* reexport safe */ _inversifyjs_container__WEBPACK_IMPORTED_MODULE_2__.Container),
/* harmony export */   ContainerModule: () => (/* reexport safe */ _inversifyjs_container__WEBPACK_IMPORTED_MODULE_2__.ContainerModule),
/* harmony export */   LazyServiceIdentifier: () => (/* reexport safe */ _inversifyjs_common__WEBPACK_IMPORTED_MODULE_1__.LazyServiceIdentifier),
/* harmony export */   bindingScopeValues: () => (/* reexport safe */ _inversifyjs_core__WEBPACK_IMPORTED_MODULE_3__.bindingScopeValues),
/* harmony export */   bindingTypeValues: () => (/* reexport safe */ _inversifyjs_core__WEBPACK_IMPORTED_MODULE_3__.bindingTypeValues),
/* harmony export */   decorate: () => (/* reexport safe */ _inversifyjs_core__WEBPACK_IMPORTED_MODULE_3__.decorate),
/* harmony export */   inject: () => (/* reexport safe */ _inversifyjs_core__WEBPACK_IMPORTED_MODULE_3__.inject),
/* harmony export */   injectFromBase: () => (/* reexport safe */ _inversifyjs_core__WEBPACK_IMPORTED_MODULE_3__.injectFromBase),
/* harmony export */   injectable: () => (/* reexport safe */ _inversifyjs_core__WEBPACK_IMPORTED_MODULE_3__.injectable),
/* harmony export */   multiInject: () => (/* reexport safe */ _inversifyjs_core__WEBPACK_IMPORTED_MODULE_3__.multiInject),
/* harmony export */   named: () => (/* reexport safe */ _inversifyjs_core__WEBPACK_IMPORTED_MODULE_3__.named),
/* harmony export */   optional: () => (/* reexport safe */ _inversifyjs_core__WEBPACK_IMPORTED_MODULE_3__.optional),
/* harmony export */   postConstruct: () => (/* reexport safe */ _inversifyjs_core__WEBPACK_IMPORTED_MODULE_3__.postConstruct),
/* harmony export */   preDestroy: () => (/* reexport safe */ _inversifyjs_core__WEBPACK_IMPORTED_MODULE_3__.preDestroy),
/* harmony export */   tagged: () => (/* reexport safe */ _inversifyjs_core__WEBPACK_IMPORTED_MODULE_3__.tagged),
/* harmony export */   unmanaged: () => (/* reexport safe */ _inversifyjs_core__WEBPACK_IMPORTED_MODULE_3__.unmanaged)
/* harmony export */ });
/* harmony import */ var reflect_metadata__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reflect-metadata */ "../node_modules/reflect-metadata/Reflect.js");
/* harmony import */ var _inversifyjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inversifyjs/common */ "../node_modules/@inversifyjs/common/lib/esm/index.js");
/* harmony import */ var _inversifyjs_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @inversifyjs/container */ "../node_modules/inversify/node_modules/@inversifyjs/container/lib/esm/index.js");
/* harmony import */ var _inversifyjs_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @inversifyjs/core */ "../node_modules/@inversifyjs/core/lib/esm/index.js");

//# sourceMappingURL=index.js.map


/***/ }),

/***/ "../node_modules/inversify/node_modules/@inversifyjs/container/lib/esm/index.js":
/*!**************************************************************************************!*\
  !*** ../node_modules/inversify/node_modules/@inversifyjs/container/lib/esm/index.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Container: () => (/* binding */ q),
/* harmony export */   ContainerModule: () => (/* binding */ m),
/* harmony export */   InversifyContainerError: () => (/* binding */ V),
/* harmony export */   InversifyContainerErrorKind: () => (/* binding */ _)
/* harmony export */ });
/* harmony import */ var reflect_metadata__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reflect-metadata */ "../node_modules/reflect-metadata/Reflect.js");
/* harmony import */ var _inversifyjs_reflect_metadata_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inversifyjs/reflect-metadata-utils */ "../node_modules/inversify/node_modules/@inversifyjs/container/node_modules/@inversifyjs/reflect-metadata-utils/lib/esm/index.js");
/* harmony import */ var _inversifyjs_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @inversifyjs/common */ "../node_modules/@inversifyjs/common/lib/esm/index.js");
/* harmony import */ var _inversifyjs_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @inversifyjs/core */ "../node_modules/@inversifyjs/core/lib/esm/index.js");
const f="@inversifyjs/container/bindingId";class m{#i;#e;constructor(n){this.#i=function(){const n=(0,_inversifyjs_reflect_metadata_utils__WEBPACK_IMPORTED_MODULE_1__.getOwnReflectMetadata)(Object,f)??0;return n===Number.MAX_SAFE_INTEGER?(0,_inversifyjs_reflect_metadata_utils__WEBPACK_IMPORTED_MODULE_1__.setReflectMetadata)(Object,f,Number.MIN_SAFE_INTEGER):(0,_inversifyjs_reflect_metadata_utils__WEBPACK_IMPORTED_MODULE_1__.updateOwnReflectMetadata)(Object,f,(()=>n),(i=>i+1)),n}(),this.#e=n}get id(){return this.#i}async load(i){await this.#e(i)}}class y{static always=i=>!0}const w="@inversifyjs/container/bindingId";function I(){const n=(0,_inversifyjs_reflect_metadata_utils__WEBPACK_IMPORTED_MODULE_1__.getOwnReflectMetadata)(Object,w)??0;return n===Number.MAX_SAFE_INTEGER?(0,_inversifyjs_reflect_metadata_utils__WEBPACK_IMPORTED_MODULE_1__.setReflectMetadata)(Object,w,Number.MIN_SAFE_INTEGER):(0,_inversifyjs_reflect_metadata_utils__WEBPACK_IMPORTED_MODULE_1__.updateOwnReflectMetadata)(Object,w,(()=>n),(i=>i+1)),n}function A(i){return e=>{for(let t=e.getAncestor();void 0!==t;t=t.getAncestor())if(i(t))return!0;return!1}}function P(i){return e=>e.name===i}function R(i){return e=>e.serviceIdentifier===i}function B(i,e){return t=>t.tags.has(i)&&t.tags.get(i)===e}function C(i){return void 0===i.name&&0===i.tags.size}function M(i){const e=A(i);return i=>!e(i)}function N(i){return e=>{const t=e.getAncestor();return void 0===t||!i(t)}}function x(i){return e=>{const t=e.getAncestor();return void 0!==t&&i(t)}}class O{#t;constructor(i){this.#t=i}inRequestScope(){return this.#t.scope=_inversifyjs_core__WEBPACK_IMPORTED_MODULE_3__.bindingScopeValues.Request,new j(this.#t)}inSingletonScope(){return this.#t.scope=_inversifyjs_core__WEBPACK_IMPORTED_MODULE_3__.bindingScopeValues.Singleton,new j(this.#t)}inTransientScope(){return this.#t.scope=_inversifyjs_core__WEBPACK_IMPORTED_MODULE_3__.bindingScopeValues.Transient,new j(this.#t)}}class F{#n;#s;#a;#o;constructor(i,e,t,n){this.#n=i,this.#s=e,this.#a=t,this.#o=n}to(i){const e=(0,_inversifyjs_core__WEBPACK_IMPORTED_MODULE_3__.getClassMetadata)(i),t={cache:{isRight:!1,value:void 0},id:I(),implementationType:i,isSatisfiedBy:y.always,moduleId:this.#s,onActivation:void 0,onDeactivation:void 0,scope:e.scope??this.#a,serviceIdentifier:this.#o,type:_inversifyjs_core__WEBPACK_IMPORTED_MODULE_3__.bindingTypeValues.Instance};return this.#n(t),new E(t)}toSelf(){if("function"!=typeof this.#o)throw new Error('"toSelf" function can only be applied when a newable function is used as service identifier');return this.to(this.#o)}toConstantValue(i){const e={cache:{isRight:!1,value:void 0},id:I(),isSatisfiedBy:y.always,moduleId:this.#s,onActivation:void 0,onDeactivation:void 0,scope:_inversifyjs_core__WEBPACK_IMPORTED_MODULE_3__.bindingScopeValues.Singleton,serviceIdentifier:this.#o,type:_inversifyjs_core__WEBPACK_IMPORTED_MODULE_3__.bindingTypeValues.ConstantValue,value:i};return this.#n(e),new j(e)}toDynamicValue(i){const e={cache:{isRight:!1,value:void 0},id:I(),isSatisfiedBy:y.always,moduleId:this.#s,onActivation:void 0,onDeactivation:void 0,scope:this.#a,serviceIdentifier:this.#o,type:_inversifyjs_core__WEBPACK_IMPORTED_MODULE_3__.bindingTypeValues.DynamicValue,value:i};return this.#n(e),new E(e)}toResolvedValue(i,e){const t={cache:{isRight:!1,value:void 0},factory:i,id:I(),isSatisfiedBy:y.always,metadata:this.#r(e),moduleId:this.#s,onActivation:void 0,onDeactivation:void 0,scope:this.#a,serviceIdentifier:this.#o,type:_inversifyjs_core__WEBPACK_IMPORTED_MODULE_3__.bindingTypeValues.ResolvedValue};return this.#n(t),new E(t)}toFactory(i){const e={cache:{isRight:!1,value:void 0},factory:i,id:I(),isSatisfiedBy:y.always,moduleId:this.#s,onActivation:void 0,onDeactivation:void 0,scope:_inversifyjs_core__WEBPACK_IMPORTED_MODULE_3__.bindingScopeValues.Singleton,serviceIdentifier:this.#o,type:_inversifyjs_core__WEBPACK_IMPORTED_MODULE_3__.bindingTypeValues.Factory};return this.#n(e),new j(e)}toProvider(i){const e={cache:{isRight:!1,value:void 0},id:I(),isSatisfiedBy:y.always,moduleId:this.#s,onActivation:void 0,onDeactivation:void 0,provider:i,scope:_inversifyjs_core__WEBPACK_IMPORTED_MODULE_3__.bindingScopeValues.Singleton,serviceIdentifier:this.#o,type:_inversifyjs_core__WEBPACK_IMPORTED_MODULE_3__.bindingTypeValues.Provider};return this.#n(e),new j(e)}toService(i){const e={id:I(),isSatisfiedBy:y.always,moduleId:this.#s,serviceIdentifier:this.#o,targetServiceIdentifier:i,type:_inversifyjs_core__WEBPACK_IMPORTED_MODULE_3__.bindingTypeValues.ServiceRedirection};this.#n(e)}#r(i){return{arguments:(i??[]).map((i=>function(i){return"object"==typeof i&&!_inversifyjs_common__WEBPACK_IMPORTED_MODULE_2__.LazyServiceIdentifier.is(i)}(i)?{kind:!0===i.isMultiple?_inversifyjs_core__WEBPACK_IMPORTED_MODULE_3__.ResolvedValueElementMetadataKind.multipleInjection:_inversifyjs_core__WEBPACK_IMPORTED_MODULE_3__.ResolvedValueElementMetadataKind.singleInjection,name:i.name,optional:i.optional??!1,tags:new Map((i.tags??[]).map((i=>[i.key,i.value]))),value:i.serviceIdentifier}:{kind:_inversifyjs_core__WEBPACK_IMPORTED_MODULE_3__.ResolvedValueElementMetadataKind.singleInjection,name:void 0,optional:!1,tags:new Map,value:i}))}}}class D{#t;constructor(i){this.#t=i}onActivation(i){return this.#t.onActivation=i,new k(this.#t)}onDeactivation(i){return this.#t.onDeactivation=i,new k(this.#t)}}class k{#t;constructor(i){this.#t=i}when(i){return this.#t.isSatisfiedBy=i,new D(this.#t)}whenAnyAncestor(i){return this.when(A(i))}whenAnyAncestorIs(i){return this.when(A(R(i)))}whenAnyAncestorNamed(i){return this.when(function(i){return A(P(i))}(i))}whenAnyAncestorTagged(i,e){return this.when(function(i,e){return A(B(i,e))}(i,e))}whenDefault(){return this.when(C)}whenNamed(i){return this.when(P(i))}whenNoParent(i){return this.when(N(i))}whenNoParentIs(i){return this.when(N(R(i)))}whenNoParentNamed(i){return this.when(function(i){return N(P(i))}(i))}whenNoParentTagged(i,e){return this.when(function(i,e){return N(B(i,e))}(i,e))}whenParent(i){return this.when(x(i))}whenParentIs(i){return this.when(x(R(i)))}whenParentNamed(i){return this.when(function(i){return x(P(i))}(i))}whenParentTagged(i,e){return this.when(function(i,e){return x(B(i,e))}(i,e))}whenTagged(i,e){return this.when(B(i,e))}whenNoAncestor(i){return this.when(M(i))}whenNoAncestorIs(i){return this.when(M(R(i)))}whenNoAncestorNamed(i){return this.when(function(i){return M(P(i))}(i))}whenNoAncestorTagged(i,e){return this.when(function(i,e){return M(B(i,e))}(i,e))}}class j extends k{#c;constructor(i){super(i),this.#c=new D(i)}onActivation(i){return this.#c.onActivation(i)}onDeactivation(i){return this.#c.onDeactivation(i)}}class E extends j{#d;constructor(i){super(i),this.#d=new O(i)}inRequestScope(){return this.#d.inRequestScope()}inSingletonScope(){return this.#d.inSingletonScope()}inTransientScope(){return this.#d.inTransientScope()}}const T=Symbol.for("@inversifyjs/container/InversifyContainerError");class V extends Error{[T];kind;constructor(i,e,t){super(e,t),this[T]=!0,this.kind=i}static is(i){return"object"==typeof i&&null!==i&&!0===i[T]}static isErrorOfKind(i,e){return V.is(i)&&i.kind===e}}var _;!function(i){i[i.invalidOperation=0]="invalidOperation"}(_||(_={}));const G=_inversifyjs_core__WEBPACK_IMPORTED_MODULE_3__.bindingScopeValues.Transient;class q{#l;#u;#h;#v;#g;#b;#S;#p;#f;#m;constructor(i){this.#v=i=>this.#l.get(i),this.#S=new _inversifyjs_core__WEBPACK_IMPORTED_MODULE_3__.PlanResultCacheService,this.#p=this.#y(),void 0===i?.parent?(this.#l=_inversifyjs_core__WEBPACK_IMPORTED_MODULE_3__.ActivationsService.build(void 0),this.#u=_inversifyjs_core__WEBPACK_IMPORTED_MODULE_3__.BindingService.build(void 0),this.#h=_inversifyjs_core__WEBPACK_IMPORTED_MODULE_3__.DeactivationsService.build(void 0)):(this.#l=_inversifyjs_core__WEBPACK_IMPORTED_MODULE_3__.ActivationsService.build(i.parent.#l),this.#u=_inversifyjs_core__WEBPACK_IMPORTED_MODULE_3__.BindingService.build(i.parent.#u),this.#h=_inversifyjs_core__WEBPACK_IMPORTED_MODULE_3__.DeactivationsService.build(i.parent.#h),i.parent.#S.subscribe(this.#S)),this.#g=this.#u.get.bind(this.#u),this.#f=this.#w.bind(this),this.#b={autobind:i?.autobind??!1,defaultScope:i?.defaultScope??G},this.#m=[]}bind(i){return new F((i=>{this.#w(i)}),void 0,this.#b.defaultScope,i)}get(i,e){const t=this.#I(!1,i,e),n=this.#A(t);if((0,_inversifyjs_common__WEBPACK_IMPORTED_MODULE_2__.isPromise)(n))throw new V(_.invalidOperation,`Unexpected asyncronous service when resolving service "${(0,_inversifyjs_common__WEBPACK_IMPORTED_MODULE_2__.stringifyServiceIdentifier)(i)}"`);return n}getAll(i,e){const t=this.#I(!0,i,e),n=this.#A(t);if((0,_inversifyjs_common__WEBPACK_IMPORTED_MODULE_2__.isPromise)(n))throw new V(_.invalidOperation,`Unexpected asyncronous service when resolving service "${(0,_inversifyjs_common__WEBPACK_IMPORTED_MODULE_2__.stringifyServiceIdentifier)(i)}"`);return n}async getAllAsync(i,e){const t=this.#I(!0,i,e);return this.#A(t)}async getAsync(i,e){const t=this.#I(!1,i,e);return this.#A(t)}isBound(i,e){const t=this.#u.get(i);return this.#P(i,t,e)}isCurrentBound(i,e){const t=this.#u.getNonParentBindings(i);return this.#P(i,t,e)}async load(...i){await Promise.all(i.map((async i=>i.load(this.#R(i.id)))))}onActivation(i,e){this.#l.add(e,{serviceId:i})}onDeactivation(i,e){this.#h.add(e,{serviceId:i})}restore(){const i=this.#m.pop();if(void 0===i)throw new V(_.invalidOperation,"No snapshot available to restore");this.#l=i.activationService,this.#u=i.bindingService,this.#h=i.deactivationService,this.#B()}snapshot(){this.#m.push({activationService:this.#l.clone(),bindingService:this.#u.clone(),deactivationService:this.#h.clone()})}async unbind(i){await (0,_inversifyjs_core__WEBPACK_IMPORTED_MODULE_3__.resolveServiceDeactivations)(this.#C(),i),this.#l.removeAllByServiceId(i),this.#u.removeAllByServiceId(i),this.#h.removeAllByServiceId(i),this.#S.clearCache()}async unbindAll(){const i=this.#C(),e=[...this.#u.getNonParentBoundServices()];await Promise.all(e.map((async e=>(0,_inversifyjs_core__WEBPACK_IMPORTED_MODULE_3__.resolveServiceDeactivations)(i,e))));for(const i of e)this.#l.removeAllByServiceId(i),this.#u.removeAllByServiceId(i),this.#h.removeAllByServiceId(i);this.#S.clearCache()}async unload(...i){const e=this.#C();await Promise.all(i.map((i=>(0,_inversifyjs_core__WEBPACK_IMPORTED_MODULE_3__.resolveModuleDeactivations)(e,i.id))));for(const e of i)this.#l.removeAllByModuleId(e.id),this.#u.removeAllByModuleId(e.id),this.#h.removeAllByModuleId(e.id);this.#S.clearCache()}#R(i){return{bind:e=>new F((i=>{this.#w(i)}),i,this.#b.defaultScope,e),isBound:this.isBound.bind(this),onActivation:(e,t)=>{this.#l.add(t,{moduleId:i,serviceId:e})},onDeactivation:(e,t)=>{this.#h.add(t,{moduleId:i,serviceId:e})},unbind:this.unbind.bind(this)}}#C(){return{getBindings:i=>this.#u.get(i),getBindingsFromModule:i=>this.#u.getByModuleId(i),getClassMetadata:_inversifyjs_core__WEBPACK_IMPORTED_MODULE_3__.getClassMetadata,getDeactivations:i=>this.#h.get(i)}}#M(i,e,t){return{isMultiple:i,name:t?.name,optional:t?.optional,serviceIdentifier:e,tag:t?.tag}}#N(i,e,t){const n={autobindOptions:t?.autobind??this.#b.autobind?{scope:this.#b.defaultScope}:void 0,getBindings:this.#g,getClassMetadata:_inversifyjs_core__WEBPACK_IMPORTED_MODULE_3__.getClassMetadata,rootConstraints:{isMultiple:i,serviceIdentifier:e},servicesBranch:new Set,setBinding:this.#f};return this.#x(n,t),n}#I(i,e,t){const n=this.#M(i,e,t),s=this.#S.get(n);if(void 0!==s)return s;const a=(0,_inversifyjs_core__WEBPACK_IMPORTED_MODULE_3__.plan)(this.#N(i,e,t));return this.#S.set(n,a),a}#y(){return{get:this.get.bind(this),getAll:this.getAll.bind(this),getAllAsync:this.getAllAsync.bind(this),getAsync:this.getAsync.bind(this)}}#A(i){return (0,_inversifyjs_core__WEBPACK_IMPORTED_MODULE_3__.resolve)({context:this.#p,getActivations:this.#v,planResult:i,requestScopeCache:new Map})}#x(i,e){void 0!==e&&(void 0!==e.name&&(i.rootConstraints.name=e.name),!0===e.optional&&(i.rootConstraints.isOptional=!0),void 0!==e.tag&&(i.rootConstraints.tag={key:e.tag.key,value:e.tag.value}))}#P(i,e,t){if(void 0===e)return!1;const n={getAncestor:()=>{},name:t?.name,serviceIdentifier:i,tags:new Map};void 0!==t?.tag&&n.tags.set(t.tag.key,t.tag.value);for(const i of e)if(i.isSatisfiedBy(n))return!0;return!1}#B(){this.#S.clearCache(),this.#v=i=>this.#l.get(i),this.#g=this.#u.get.bind(this.#u),this.#p=this.#y(),this.#f=this.#w.bind(this)}#w(i){this.#u.set(i),this.#S.clearCache()}}
//# sourceMappingURL=index.js.map


/***/ }),

/***/ "../node_modules/inversify/node_modules/@inversifyjs/container/node_modules/@inversifyjs/reflect-metadata-utils/lib/esm/index.js":
/*!***************************************************************************************************************************************!*\
  !*** ../node_modules/inversify/node_modules/@inversifyjs/container/node_modules/@inversifyjs/reflect-metadata-utils/lib/esm/index.js ***!
  \***************************************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getOwnReflectMetadata: () => (/* binding */ t),
/* harmony export */   getReflectMetadata: () => (/* binding */ e),
/* harmony export */   setReflectMetadata: () => (/* binding */ n),
/* harmony export */   updateOwnReflectMetadata: () => (/* binding */ a),
/* harmony export */   updateReflectMetadata: () => (/* binding */ f)
/* harmony export */ });
function t(t,e){return Reflect.getOwnMetadata(e,t)}function e(t,e){return Reflect.getMetadata(e,t)}function n(t,e,n){Reflect.defineMetadata(e,n,t)}function a(e,n,a,f){const c=f(t(e,n)??a());Reflect.defineMetadata(n,c,e)}function f(t,n,a,f){const c=f(e(t,n)??a());Reflect.defineMetadata(n,c,t)}
//# sourceMappingURL=index.js.map


/***/ }),

/***/ "../node_modules/reflect-metadata/Reflect.js":
/*!***************************************************!*\
  !*** ../node_modules/reflect-metadata/Reflect.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

/*! *****************************************************************************
Copyright (C) Microsoft. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
var Reflect;
(function (Reflect) {
    // Metadata Proposal
    // https://rbuckton.github.io/reflect-metadata/
    (function (factory) {
        var root = typeof __webpack_require__.g === "object" ? __webpack_require__.g :
            typeof self === "object" ? self :
                typeof this === "object" ? this :
                    Function("return this;")();
        var exporter = makeExporter(Reflect);
        if (typeof root.Reflect === "undefined") {
            root.Reflect = Reflect;
        }
        else {
            exporter = makeExporter(root.Reflect, exporter);
        }
        factory(exporter);
        function makeExporter(target, previous) {
            return function (key, value) {
                if (typeof target[key] !== "function") {
                    Object.defineProperty(target, key, { configurable: true, writable: true, value: value });
                }
                if (previous)
                    previous(key, value);
            };
        }
    })(function (exporter) {
        var hasOwn = Object.prototype.hasOwnProperty;
        // feature test for Symbol support
        var supportsSymbol = typeof Symbol === "function";
        var toPrimitiveSymbol = supportsSymbol && typeof Symbol.toPrimitive !== "undefined" ? Symbol.toPrimitive : "@@toPrimitive";
        var iteratorSymbol = supportsSymbol && typeof Symbol.iterator !== "undefined" ? Symbol.iterator : "@@iterator";
        var supportsCreate = typeof Object.create === "function"; // feature test for Object.create support
        var supportsProto = { __proto__: [] } instanceof Array; // feature test for __proto__ support
        var downLevel = !supportsCreate && !supportsProto;
        var HashMap = {
            // create an object in dictionary mode (a.k.a. "slow" mode in v8)
            create: supportsCreate
                ? function () { return MakeDictionary(Object.create(null)); }
                : supportsProto
                    ? function () { return MakeDictionary({ __proto__: null }); }
                    : function () { return MakeDictionary({}); },
            has: downLevel
                ? function (map, key) { return hasOwn.call(map, key); }
                : function (map, key) { return key in map; },
            get: downLevel
                ? function (map, key) { return hasOwn.call(map, key) ? map[key] : undefined; }
                : function (map, key) { return map[key]; },
        };
        // Load global or shim versions of Map, Set, and WeakMap
        var functionPrototype = Object.getPrototypeOf(Function);
        var usePolyfill = typeof process === "object" && process.env && process.env["REFLECT_METADATA_USE_MAP_POLYFILL"] === "true";
        var _Map = !usePolyfill && typeof Map === "function" && typeof Map.prototype.entries === "function" ? Map : CreateMapPolyfill();
        var _Set = !usePolyfill && typeof Set === "function" && typeof Set.prototype.entries === "function" ? Set : CreateSetPolyfill();
        var _WeakMap = !usePolyfill && typeof WeakMap === "function" ? WeakMap : CreateWeakMapPolyfill();
        // [[Metadata]] internal slot
        // https://rbuckton.github.io/reflect-metadata/#ordinary-object-internal-methods-and-internal-slots
        var Metadata = new _WeakMap();
        /**
         * Applies a set of decorators to a property of a target object.
         * @param decorators An array of decorators.
         * @param target The target object.
         * @param propertyKey (Optional) The property key to decorate.
         * @param attributes (Optional) The property descriptor for the target key.
         * @remarks Decorators are applied in reverse order.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     Example = Reflect.decorate(decoratorsArray, Example);
         *
         *     // property (on constructor)
         *     Reflect.decorate(decoratorsArray, Example, "staticProperty");
         *
         *     // property (on prototype)
         *     Reflect.decorate(decoratorsArray, Example.prototype, "property");
         *
         *     // method (on constructor)
         *     Object.defineProperty(Example, "staticMethod",
         *         Reflect.decorate(decoratorsArray, Example, "staticMethod",
         *             Object.getOwnPropertyDescriptor(Example, "staticMethod")));
         *
         *     // method (on prototype)
         *     Object.defineProperty(Example.prototype, "method",
         *         Reflect.decorate(decoratorsArray, Example.prototype, "method",
         *             Object.getOwnPropertyDescriptor(Example.prototype, "method")));
         *
         */
        function decorate(decorators, target, propertyKey, attributes) {
            if (!IsUndefined(propertyKey)) {
                if (!IsArray(decorators))
                    throw new TypeError();
                if (!IsObject(target))
                    throw new TypeError();
                if (!IsObject(attributes) && !IsUndefined(attributes) && !IsNull(attributes))
                    throw new TypeError();
                if (IsNull(attributes))
                    attributes = undefined;
                propertyKey = ToPropertyKey(propertyKey);
                return DecorateProperty(decorators, target, propertyKey, attributes);
            }
            else {
                if (!IsArray(decorators))
                    throw new TypeError();
                if (!IsConstructor(target))
                    throw new TypeError();
                return DecorateConstructor(decorators, target);
            }
        }
        exporter("decorate", decorate);
        // 4.1.2 Reflect.metadata(metadataKey, metadataValue)
        // https://rbuckton.github.io/reflect-metadata/#reflect.metadata
        /**
         * A default metadata decorator factory that can be used on a class, class member, or parameter.
         * @param metadataKey The key for the metadata entry.
         * @param metadataValue The value for the metadata entry.
         * @returns A decorator function.
         * @remarks
         * If `metadataKey` is already defined for the target and target key, the
         * metadataValue for that key will be overwritten.
         * @example
         *
         *     // constructor
         *     @Reflect.metadata(key, value)
         *     class Example {
         *     }
         *
         *     // property (on constructor, TypeScript only)
         *     class Example {
         *         @Reflect.metadata(key, value)
         *         static staticProperty;
         *     }
         *
         *     // property (on prototype, TypeScript only)
         *     class Example {
         *         @Reflect.metadata(key, value)
         *         property;
         *     }
         *
         *     // method (on constructor)
         *     class Example {
         *         @Reflect.metadata(key, value)
         *         static staticMethod() { }
         *     }
         *
         *     // method (on prototype)
         *     class Example {
         *         @Reflect.metadata(key, value)
         *         method() { }
         *     }
         *
         */
        function metadata(metadataKey, metadataValue) {
            function decorator(target, propertyKey) {
                if (!IsObject(target))
                    throw new TypeError();
                if (!IsUndefined(propertyKey) && !IsPropertyKey(propertyKey))
                    throw new TypeError();
                OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, propertyKey);
            }
            return decorator;
        }
        exporter("metadata", metadata);
        /**
         * Define a unique metadata entry on the target.
         * @param metadataKey A key used to store and retrieve metadata.
         * @param metadataValue A value that contains attached metadata.
         * @param target The target object on which to define metadata.
         * @param propertyKey (Optional) The property key for the target.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     Reflect.defineMetadata("custom:annotation", options, Example);
         *
         *     // property (on constructor)
         *     Reflect.defineMetadata("custom:annotation", options, Example, "staticProperty");
         *
         *     // property (on prototype)
         *     Reflect.defineMetadata("custom:annotation", options, Example.prototype, "property");
         *
         *     // method (on constructor)
         *     Reflect.defineMetadata("custom:annotation", options, Example, "staticMethod");
         *
         *     // method (on prototype)
         *     Reflect.defineMetadata("custom:annotation", options, Example.prototype, "method");
         *
         *     // decorator factory as metadata-producing annotation.
         *     function MyAnnotation(options): Decorator {
         *         return (target, key?) => Reflect.defineMetadata("custom:annotation", options, target, key);
         *     }
         *
         */
        function defineMetadata(metadataKey, metadataValue, target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryDefineOwnMetadata(metadataKey, metadataValue, target, propertyKey);
        }
        exporter("defineMetadata", defineMetadata);
        /**
         * Gets a value indicating whether the target object or its prototype chain has the provided metadata key defined.
         * @param metadataKey A key used to store and retrieve metadata.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns `true` if the metadata key was defined on the target object or its prototype chain; otherwise, `false`.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.hasMetadata("custom:annotation", Example);
         *
         *     // property (on constructor)
         *     result = Reflect.hasMetadata("custom:annotation", Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.hasMetadata("custom:annotation", Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.hasMetadata("custom:annotation", Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.hasMetadata("custom:annotation", Example.prototype, "method");
         *
         */
        function hasMetadata(metadataKey, target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryHasMetadata(metadataKey, target, propertyKey);
        }
        exporter("hasMetadata", hasMetadata);
        /**
         * Gets a value indicating whether the target object has the provided metadata key defined.
         * @param metadataKey A key used to store and retrieve metadata.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns `true` if the metadata key was defined on the target object; otherwise, `false`.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.hasOwnMetadata("custom:annotation", Example);
         *
         *     // property (on constructor)
         *     result = Reflect.hasOwnMetadata("custom:annotation", Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.hasOwnMetadata("custom:annotation", Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.hasOwnMetadata("custom:annotation", Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.hasOwnMetadata("custom:annotation", Example.prototype, "method");
         *
         */
        function hasOwnMetadata(metadataKey, target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryHasOwnMetadata(metadataKey, target, propertyKey);
        }
        exporter("hasOwnMetadata", hasOwnMetadata);
        /**
         * Gets the metadata value for the provided metadata key on the target object or its prototype chain.
         * @param metadataKey A key used to store and retrieve metadata.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns The metadata value for the metadata key if found; otherwise, `undefined`.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.getMetadata("custom:annotation", Example);
         *
         *     // property (on constructor)
         *     result = Reflect.getMetadata("custom:annotation", Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.getMetadata("custom:annotation", Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.getMetadata("custom:annotation", Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.getMetadata("custom:annotation", Example.prototype, "method");
         *
         */
        function getMetadata(metadataKey, target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryGetMetadata(metadataKey, target, propertyKey);
        }
        exporter("getMetadata", getMetadata);
        /**
         * Gets the metadata value for the provided metadata key on the target object.
         * @param metadataKey A key used to store and retrieve metadata.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns The metadata value for the metadata key if found; otherwise, `undefined`.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.getOwnMetadata("custom:annotation", Example);
         *
         *     // property (on constructor)
         *     result = Reflect.getOwnMetadata("custom:annotation", Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.getOwnMetadata("custom:annotation", Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.getOwnMetadata("custom:annotation", Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.getOwnMetadata("custom:annotation", Example.prototype, "method");
         *
         */
        function getOwnMetadata(metadataKey, target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryGetOwnMetadata(metadataKey, target, propertyKey);
        }
        exporter("getOwnMetadata", getOwnMetadata);
        /**
         * Gets the metadata keys defined on the target object or its prototype chain.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns An array of unique metadata keys.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.getMetadataKeys(Example);
         *
         *     // property (on constructor)
         *     result = Reflect.getMetadataKeys(Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.getMetadataKeys(Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.getMetadataKeys(Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.getMetadataKeys(Example.prototype, "method");
         *
         */
        function getMetadataKeys(target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryMetadataKeys(target, propertyKey);
        }
        exporter("getMetadataKeys", getMetadataKeys);
        /**
         * Gets the unique metadata keys defined on the target object.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns An array of unique metadata keys.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.getOwnMetadataKeys(Example);
         *
         *     // property (on constructor)
         *     result = Reflect.getOwnMetadataKeys(Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.getOwnMetadataKeys(Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.getOwnMetadataKeys(Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.getOwnMetadataKeys(Example.prototype, "method");
         *
         */
        function getOwnMetadataKeys(target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            return OrdinaryOwnMetadataKeys(target, propertyKey);
        }
        exporter("getOwnMetadataKeys", getOwnMetadataKeys);
        /**
         * Deletes the metadata entry from the target object with the provided key.
         * @param metadataKey A key used to store and retrieve metadata.
         * @param target The target object on which the metadata is defined.
         * @param propertyKey (Optional) The property key for the target.
         * @returns `true` if the metadata entry was found and deleted; otherwise, false.
         * @example
         *
         *     class Example {
         *         // property declarations are not part of ES6, though they are valid in TypeScript:
         *         // static staticProperty;
         *         // property;
         *
         *         constructor(p) { }
         *         static staticMethod(p) { }
         *         method(p) { }
         *     }
         *
         *     // constructor
         *     result = Reflect.deleteMetadata("custom:annotation", Example);
         *
         *     // property (on constructor)
         *     result = Reflect.deleteMetadata("custom:annotation", Example, "staticProperty");
         *
         *     // property (on prototype)
         *     result = Reflect.deleteMetadata("custom:annotation", Example.prototype, "property");
         *
         *     // method (on constructor)
         *     result = Reflect.deleteMetadata("custom:annotation", Example, "staticMethod");
         *
         *     // method (on prototype)
         *     result = Reflect.deleteMetadata("custom:annotation", Example.prototype, "method");
         *
         */
        function deleteMetadata(metadataKey, target, propertyKey) {
            if (!IsObject(target))
                throw new TypeError();
            if (!IsUndefined(propertyKey))
                propertyKey = ToPropertyKey(propertyKey);
            var metadataMap = GetOrCreateMetadataMap(target, propertyKey, /*Create*/ false);
            if (IsUndefined(metadataMap))
                return false;
            if (!metadataMap.delete(metadataKey))
                return false;
            if (metadataMap.size > 0)
                return true;
            var targetMetadata = Metadata.get(target);
            targetMetadata.delete(propertyKey);
            if (targetMetadata.size > 0)
                return true;
            Metadata.delete(target);
            return true;
        }
        exporter("deleteMetadata", deleteMetadata);
        function DecorateConstructor(decorators, target) {
            for (var i = decorators.length - 1; i >= 0; --i) {
                var decorator = decorators[i];
                var decorated = decorator(target);
                if (!IsUndefined(decorated) && !IsNull(decorated)) {
                    if (!IsConstructor(decorated))
                        throw new TypeError();
                    target = decorated;
                }
            }
            return target;
        }
        function DecorateProperty(decorators, target, propertyKey, descriptor) {
            for (var i = decorators.length - 1; i >= 0; --i) {
                var decorator = decorators[i];
                var decorated = decorator(target, propertyKey, descriptor);
                if (!IsUndefined(decorated) && !IsNull(decorated)) {
                    if (!IsObject(decorated))
                        throw new TypeError();
                    descriptor = decorated;
                }
            }
            return descriptor;
        }
        function GetOrCreateMetadataMap(O, P, Create) {
            var targetMetadata = Metadata.get(O);
            if (IsUndefined(targetMetadata)) {
                if (!Create)
                    return undefined;
                targetMetadata = new _Map();
                Metadata.set(O, targetMetadata);
            }
            var metadataMap = targetMetadata.get(P);
            if (IsUndefined(metadataMap)) {
                if (!Create)
                    return undefined;
                metadataMap = new _Map();
                targetMetadata.set(P, metadataMap);
            }
            return metadataMap;
        }
        // 3.1.1.1 OrdinaryHasMetadata(MetadataKey, O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinaryhasmetadata
        function OrdinaryHasMetadata(MetadataKey, O, P) {
            var hasOwn = OrdinaryHasOwnMetadata(MetadataKey, O, P);
            if (hasOwn)
                return true;
            var parent = OrdinaryGetPrototypeOf(O);
            if (!IsNull(parent))
                return OrdinaryHasMetadata(MetadataKey, parent, P);
            return false;
        }
        // 3.1.2.1 OrdinaryHasOwnMetadata(MetadataKey, O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinaryhasownmetadata
        function OrdinaryHasOwnMetadata(MetadataKey, O, P) {
            var metadataMap = GetOrCreateMetadataMap(O, P, /*Create*/ false);
            if (IsUndefined(metadataMap))
                return false;
            return ToBoolean(metadataMap.has(MetadataKey));
        }
        // 3.1.3.1 OrdinaryGetMetadata(MetadataKey, O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinarygetmetadata
        function OrdinaryGetMetadata(MetadataKey, O, P) {
            var hasOwn = OrdinaryHasOwnMetadata(MetadataKey, O, P);
            if (hasOwn)
                return OrdinaryGetOwnMetadata(MetadataKey, O, P);
            var parent = OrdinaryGetPrototypeOf(O);
            if (!IsNull(parent))
                return OrdinaryGetMetadata(MetadataKey, parent, P);
            return undefined;
        }
        // 3.1.4.1 OrdinaryGetOwnMetadata(MetadataKey, O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinarygetownmetadata
        function OrdinaryGetOwnMetadata(MetadataKey, O, P) {
            var metadataMap = GetOrCreateMetadataMap(O, P, /*Create*/ false);
            if (IsUndefined(metadataMap))
                return undefined;
            return metadataMap.get(MetadataKey);
        }
        // 3.1.5.1 OrdinaryDefineOwnMetadata(MetadataKey, MetadataValue, O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinarydefineownmetadata
        function OrdinaryDefineOwnMetadata(MetadataKey, MetadataValue, O, P) {
            var metadataMap = GetOrCreateMetadataMap(O, P, /*Create*/ true);
            metadataMap.set(MetadataKey, MetadataValue);
        }
        // 3.1.6.1 OrdinaryMetadataKeys(O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinarymetadatakeys
        function OrdinaryMetadataKeys(O, P) {
            var ownKeys = OrdinaryOwnMetadataKeys(O, P);
            var parent = OrdinaryGetPrototypeOf(O);
            if (parent === null)
                return ownKeys;
            var parentKeys = OrdinaryMetadataKeys(parent, P);
            if (parentKeys.length <= 0)
                return ownKeys;
            if (ownKeys.length <= 0)
                return parentKeys;
            var set = new _Set();
            var keys = [];
            for (var _i = 0, ownKeys_1 = ownKeys; _i < ownKeys_1.length; _i++) {
                var key = ownKeys_1[_i];
                var hasKey = set.has(key);
                if (!hasKey) {
                    set.add(key);
                    keys.push(key);
                }
            }
            for (var _a = 0, parentKeys_1 = parentKeys; _a < parentKeys_1.length; _a++) {
                var key = parentKeys_1[_a];
                var hasKey = set.has(key);
                if (!hasKey) {
                    set.add(key);
                    keys.push(key);
                }
            }
            return keys;
        }
        // 3.1.7.1 OrdinaryOwnMetadataKeys(O, P)
        // https://rbuckton.github.io/reflect-metadata/#ordinaryownmetadatakeys
        function OrdinaryOwnMetadataKeys(O, P) {
            var keys = [];
            var metadataMap = GetOrCreateMetadataMap(O, P, /*Create*/ false);
            if (IsUndefined(metadataMap))
                return keys;
            var keysObj = metadataMap.keys();
            var iterator = GetIterator(keysObj);
            var k = 0;
            while (true) {
                var next = IteratorStep(iterator);
                if (!next) {
                    keys.length = k;
                    return keys;
                }
                var nextValue = IteratorValue(next);
                try {
                    keys[k] = nextValue;
                }
                catch (e) {
                    try {
                        IteratorClose(iterator);
                    }
                    finally {
                        throw e;
                    }
                }
                k++;
            }
        }
        // 6 ECMAScript Data Typ0es and Values
        // https://tc39.github.io/ecma262/#sec-ecmascript-data-types-and-values
        function Type(x) {
            if (x === null)
                return 1 /* Null */;
            switch (typeof x) {
                case "undefined": return 0 /* Undefined */;
                case "boolean": return 2 /* Boolean */;
                case "string": return 3 /* String */;
                case "symbol": return 4 /* Symbol */;
                case "number": return 5 /* Number */;
                case "object": return x === null ? 1 /* Null */ : 6 /* Object */;
                default: return 6 /* Object */;
            }
        }
        // 6.1.1 The Undefined Type
        // https://tc39.github.io/ecma262/#sec-ecmascript-language-types-undefined-type
        function IsUndefined(x) {
            return x === undefined;
        }
        // 6.1.2 The Null Type
        // https://tc39.github.io/ecma262/#sec-ecmascript-language-types-null-type
        function IsNull(x) {
            return x === null;
        }
        // 6.1.5 The Symbol Type
        // https://tc39.github.io/ecma262/#sec-ecmascript-language-types-symbol-type
        function IsSymbol(x) {
            return typeof x === "symbol";
        }
        // 6.1.7 The Object Type
        // https://tc39.github.io/ecma262/#sec-object-type
        function IsObject(x) {
            return typeof x === "object" ? x !== null : typeof x === "function";
        }
        // 7.1 Type Conversion
        // https://tc39.github.io/ecma262/#sec-type-conversion
        // 7.1.1 ToPrimitive(input [, PreferredType])
        // https://tc39.github.io/ecma262/#sec-toprimitive
        function ToPrimitive(input, PreferredType) {
            switch (Type(input)) {
                case 0 /* Undefined */: return input;
                case 1 /* Null */: return input;
                case 2 /* Boolean */: return input;
                case 3 /* String */: return input;
                case 4 /* Symbol */: return input;
                case 5 /* Number */: return input;
            }
            var hint = PreferredType === 3 /* String */ ? "string" : PreferredType === 5 /* Number */ ? "number" : "default";
            var exoticToPrim = GetMethod(input, toPrimitiveSymbol);
            if (exoticToPrim !== undefined) {
                var result = exoticToPrim.call(input, hint);
                if (IsObject(result))
                    throw new TypeError();
                return result;
            }
            return OrdinaryToPrimitive(input, hint === "default" ? "number" : hint);
        }
        // 7.1.1.1 OrdinaryToPrimitive(O, hint)
        // https://tc39.github.io/ecma262/#sec-ordinarytoprimitive
        function OrdinaryToPrimitive(O, hint) {
            if (hint === "string") {
                var toString_1 = O.toString;
                if (IsCallable(toString_1)) {
                    var result = toString_1.call(O);
                    if (!IsObject(result))
                        return result;
                }
                var valueOf = O.valueOf;
                if (IsCallable(valueOf)) {
                    var result = valueOf.call(O);
                    if (!IsObject(result))
                        return result;
                }
            }
            else {
                var valueOf = O.valueOf;
                if (IsCallable(valueOf)) {
                    var result = valueOf.call(O);
                    if (!IsObject(result))
                        return result;
                }
                var toString_2 = O.toString;
                if (IsCallable(toString_2)) {
                    var result = toString_2.call(O);
                    if (!IsObject(result))
                        return result;
                }
            }
            throw new TypeError();
        }
        // 7.1.2 ToBoolean(argument)
        // https://tc39.github.io/ecma262/2016/#sec-toboolean
        function ToBoolean(argument) {
            return !!argument;
        }
        // 7.1.12 ToString(argument)
        // https://tc39.github.io/ecma262/#sec-tostring
        function ToString(argument) {
            return "" + argument;
        }
        // 7.1.14 ToPropertyKey(argument)
        // https://tc39.github.io/ecma262/#sec-topropertykey
        function ToPropertyKey(argument) {
            var key = ToPrimitive(argument, 3 /* String */);
            if (IsSymbol(key))
                return key;
            return ToString(key);
        }
        // 7.2 Testing and Comparison Operations
        // https://tc39.github.io/ecma262/#sec-testing-and-comparison-operations
        // 7.2.2 IsArray(argument)
        // https://tc39.github.io/ecma262/#sec-isarray
        function IsArray(argument) {
            return Array.isArray
                ? Array.isArray(argument)
                : argument instanceof Object
                    ? argument instanceof Array
                    : Object.prototype.toString.call(argument) === "[object Array]";
        }
        // 7.2.3 IsCallable(argument)
        // https://tc39.github.io/ecma262/#sec-iscallable
        function IsCallable(argument) {
            // NOTE: This is an approximation as we cannot check for [[Call]] internal method.
            return typeof argument === "function";
        }
        // 7.2.4 IsConstructor(argument)
        // https://tc39.github.io/ecma262/#sec-isconstructor
        function IsConstructor(argument) {
            // NOTE: This is an approximation as we cannot check for [[Construct]] internal method.
            return typeof argument === "function";
        }
        // 7.2.7 IsPropertyKey(argument)
        // https://tc39.github.io/ecma262/#sec-ispropertykey
        function IsPropertyKey(argument) {
            switch (Type(argument)) {
                case 3 /* String */: return true;
                case 4 /* Symbol */: return true;
                default: return false;
            }
        }
        // 7.3 Operations on Objects
        // https://tc39.github.io/ecma262/#sec-operations-on-objects
        // 7.3.9 GetMethod(V, P)
        // https://tc39.github.io/ecma262/#sec-getmethod
        function GetMethod(V, P) {
            var func = V[P];
            if (func === undefined || func === null)
                return undefined;
            if (!IsCallable(func))
                throw new TypeError();
            return func;
        }
        // 7.4 Operations on Iterator Objects
        // https://tc39.github.io/ecma262/#sec-operations-on-iterator-objects
        function GetIterator(obj) {
            var method = GetMethod(obj, iteratorSymbol);
            if (!IsCallable(method))
                throw new TypeError(); // from Call
            var iterator = method.call(obj);
            if (!IsObject(iterator))
                throw new TypeError();
            return iterator;
        }
        // 7.4.4 IteratorValue(iterResult)
        // https://tc39.github.io/ecma262/2016/#sec-iteratorvalue
        function IteratorValue(iterResult) {
            return iterResult.value;
        }
        // 7.4.5 IteratorStep(iterator)
        // https://tc39.github.io/ecma262/#sec-iteratorstep
        function IteratorStep(iterator) {
            var result = iterator.next();
            return result.done ? false : result;
        }
        // 7.4.6 IteratorClose(iterator, completion)
        // https://tc39.github.io/ecma262/#sec-iteratorclose
        function IteratorClose(iterator) {
            var f = iterator["return"];
            if (f)
                f.call(iterator);
        }
        // 9.1 Ordinary Object Internal Methods and Internal Slots
        // https://tc39.github.io/ecma262/#sec-ordinary-object-internal-methods-and-internal-slots
        // 9.1.1.1 OrdinaryGetPrototypeOf(O)
        // https://tc39.github.io/ecma262/#sec-ordinarygetprototypeof
        function OrdinaryGetPrototypeOf(O) {
            var proto = Object.getPrototypeOf(O);
            if (typeof O !== "function" || O === functionPrototype)
                return proto;
            // TypeScript doesn't set __proto__ in ES5, as it's non-standard.
            // Try to determine the superclass constructor. Compatible implementations
            // must either set __proto__ on a subclass constructor to the superclass constructor,
            // or ensure each class has a valid `constructor` property on its prototype that
            // points back to the constructor.
            // If this is not the same as Function.[[Prototype]], then this is definately inherited.
            // This is the case when in ES6 or when using __proto__ in a compatible browser.
            if (proto !== functionPrototype)
                return proto;
            // If the super prototype is Object.prototype, null, or undefined, then we cannot determine the heritage.
            var prototype = O.prototype;
            var prototypeProto = prototype && Object.getPrototypeOf(prototype);
            if (prototypeProto == null || prototypeProto === Object.prototype)
                return proto;
            // If the constructor was not a function, then we cannot determine the heritage.
            var constructor = prototypeProto.constructor;
            if (typeof constructor !== "function")
                return proto;
            // If we have some kind of self-reference, then we cannot determine the heritage.
            if (constructor === O)
                return proto;
            // we have a pretty good guess at the heritage.
            return constructor;
        }
        // naive Map shim
        function CreateMapPolyfill() {
            var cacheSentinel = {};
            var arraySentinel = [];
            var MapIterator = /** @class */ (function () {
                function MapIterator(keys, values, selector) {
                    this._index = 0;
                    this._keys = keys;
                    this._values = values;
                    this._selector = selector;
                }
                MapIterator.prototype["@@iterator"] = function () { return this; };
                MapIterator.prototype[iteratorSymbol] = function () { return this; };
                MapIterator.prototype.next = function () {
                    var index = this._index;
                    if (index >= 0 && index < this._keys.length) {
                        var result = this._selector(this._keys[index], this._values[index]);
                        if (index + 1 >= this._keys.length) {
                            this._index = -1;
                            this._keys = arraySentinel;
                            this._values = arraySentinel;
                        }
                        else {
                            this._index++;
                        }
                        return { value: result, done: false };
                    }
                    return { value: undefined, done: true };
                };
                MapIterator.prototype.throw = function (error) {
                    if (this._index >= 0) {
                        this._index = -1;
                        this._keys = arraySentinel;
                        this._values = arraySentinel;
                    }
                    throw error;
                };
                MapIterator.prototype.return = function (value) {
                    if (this._index >= 0) {
                        this._index = -1;
                        this._keys = arraySentinel;
                        this._values = arraySentinel;
                    }
                    return { value: value, done: true };
                };
                return MapIterator;
            }());
            return /** @class */ (function () {
                function Map() {
                    this._keys = [];
                    this._values = [];
                    this._cacheKey = cacheSentinel;
                    this._cacheIndex = -2;
                }
                Object.defineProperty(Map.prototype, "size", {
                    get: function () { return this._keys.length; },
                    enumerable: true,
                    configurable: true
                });
                Map.prototype.has = function (key) { return this._find(key, /*insert*/ false) >= 0; };
                Map.prototype.get = function (key) {
                    var index = this._find(key, /*insert*/ false);
                    return index >= 0 ? this._values[index] : undefined;
                };
                Map.prototype.set = function (key, value) {
                    var index = this._find(key, /*insert*/ true);
                    this._values[index] = value;
                    return this;
                };
                Map.prototype.delete = function (key) {
                    var index = this._find(key, /*insert*/ false);
                    if (index >= 0) {
                        var size = this._keys.length;
                        for (var i = index + 1; i < size; i++) {
                            this._keys[i - 1] = this._keys[i];
                            this._values[i - 1] = this._values[i];
                        }
                        this._keys.length--;
                        this._values.length--;
                        if (key === this._cacheKey) {
                            this._cacheKey = cacheSentinel;
                            this._cacheIndex = -2;
                        }
                        return true;
                    }
                    return false;
                };
                Map.prototype.clear = function () {
                    this._keys.length = 0;
                    this._values.length = 0;
                    this._cacheKey = cacheSentinel;
                    this._cacheIndex = -2;
                };
                Map.prototype.keys = function () { return new MapIterator(this._keys, this._values, getKey); };
                Map.prototype.values = function () { return new MapIterator(this._keys, this._values, getValue); };
                Map.prototype.entries = function () { return new MapIterator(this._keys, this._values, getEntry); };
                Map.prototype["@@iterator"] = function () { return this.entries(); };
                Map.prototype[iteratorSymbol] = function () { return this.entries(); };
                Map.prototype._find = function (key, insert) {
                    if (this._cacheKey !== key) {
                        this._cacheIndex = this._keys.indexOf(this._cacheKey = key);
                    }
                    if (this._cacheIndex < 0 && insert) {
                        this._cacheIndex = this._keys.length;
                        this._keys.push(key);
                        this._values.push(undefined);
                    }
                    return this._cacheIndex;
                };
                return Map;
            }());
            function getKey(key, _) {
                return key;
            }
            function getValue(_, value) {
                return value;
            }
            function getEntry(key, value) {
                return [key, value];
            }
        }
        // naive Set shim
        function CreateSetPolyfill() {
            return /** @class */ (function () {
                function Set() {
                    this._map = new _Map();
                }
                Object.defineProperty(Set.prototype, "size", {
                    get: function () { return this._map.size; },
                    enumerable: true,
                    configurable: true
                });
                Set.prototype.has = function (value) { return this._map.has(value); };
                Set.prototype.add = function (value) { return this._map.set(value, value), this; };
                Set.prototype.delete = function (value) { return this._map.delete(value); };
                Set.prototype.clear = function () { this._map.clear(); };
                Set.prototype.keys = function () { return this._map.keys(); };
                Set.prototype.values = function () { return this._map.values(); };
                Set.prototype.entries = function () { return this._map.entries(); };
                Set.prototype["@@iterator"] = function () { return this.keys(); };
                Set.prototype[iteratorSymbol] = function () { return this.keys(); };
                return Set;
            }());
        }
        // naive WeakMap shim
        function CreateWeakMapPolyfill() {
            var UUID_SIZE = 16;
            var keys = HashMap.create();
            var rootKey = CreateUniqueKey();
            return /** @class */ (function () {
                function WeakMap() {
                    this._key = CreateUniqueKey();
                }
                WeakMap.prototype.has = function (target) {
                    var table = GetOrCreateWeakMapTable(target, /*create*/ false);
                    return table !== undefined ? HashMap.has(table, this._key) : false;
                };
                WeakMap.prototype.get = function (target) {
                    var table = GetOrCreateWeakMapTable(target, /*create*/ false);
                    return table !== undefined ? HashMap.get(table, this._key) : undefined;
                };
                WeakMap.prototype.set = function (target, value) {
                    var table = GetOrCreateWeakMapTable(target, /*create*/ true);
                    table[this._key] = value;
                    return this;
                };
                WeakMap.prototype.delete = function (target) {
                    var table = GetOrCreateWeakMapTable(target, /*create*/ false);
                    return table !== undefined ? delete table[this._key] : false;
                };
                WeakMap.prototype.clear = function () {
                    // NOTE: not a real clear, just makes the previous data unreachable
                    this._key = CreateUniqueKey();
                };
                return WeakMap;
            }());
            function CreateUniqueKey() {
                var key;
                do
                    key = "@@WeakMap@@" + CreateUUID();
                while (HashMap.has(keys, key));
                keys[key] = true;
                return key;
            }
            function GetOrCreateWeakMapTable(target, create) {
                if (!hasOwn.call(target, rootKey)) {
                    if (!create)
                        return undefined;
                    Object.defineProperty(target, rootKey, { value: HashMap.create() });
                }
                return target[rootKey];
            }
            function FillRandomBytes(buffer, size) {
                for (var i = 0; i < size; ++i)
                    buffer[i] = Math.random() * 0xff | 0;
                return buffer;
            }
            function GenRandomBytes(size) {
                if (typeof Uint8Array === "function") {
                    if (typeof crypto !== "undefined")
                        return crypto.getRandomValues(new Uint8Array(size));
                    if (typeof msCrypto !== "undefined")
                        return msCrypto.getRandomValues(new Uint8Array(size));
                    return FillRandomBytes(new Uint8Array(size), size);
                }
                return FillRandomBytes(new Array(size), size);
            }
            function CreateUUID() {
                var data = GenRandomBytes(UUID_SIZE);
                // mark as random - RFC 4122 § 4.4
                data[6] = data[6] & 0x4f | 0x40;
                data[8] = data[8] & 0xbf | 0x80;
                var result = "";
                for (var offset = 0; offset < UUID_SIZE; ++offset) {
                    var byte = data[offset];
                    if (offset === 4 || offset === 6 || offset === 8)
                        result += "-";
                    if (byte < 16)
                        result += "0";
                    result += byte.toString(16).toLowerCase();
                }
                return result;
            }
        }
        // uses a heuristic used by v8 and chakra to force an object into dictionary mode.
        function MakeDictionary(obj) {
            obj.__ = undefined;
            delete obj.__;
            return obj;
        }
    });
})(Reflect || (Reflect = {}));


/***/ })

/******/ });
/************************************************************************/
/******/ // The module cache
/******/ var __webpack_module_cache__ = {};
/******/ 
/******/ // The require function
/******/ function __webpack_require__(moduleId) {
/******/ 	// Check if module is in cache
/******/ 	var cachedModule = __webpack_module_cache__[moduleId];
/******/ 	if (cachedModule !== undefined) {
/******/ 		return cachedModule.exports;
/******/ 	}
/******/ 	// Create a new module (and put it into the cache)
/******/ 	var module = __webpack_module_cache__[moduleId] = {
/******/ 		// no module.id needed
/******/ 		// no module.loaded needed
/******/ 		exports: {}
/******/ 	};
/******/ 
/******/ 	// Execute the module function
/******/ 	__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 
/******/ 	// Return the exports of the module
/******/ 	return module.exports;
/******/ }
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/compat get default export */
/******/ (() => {
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = (module) => {
/******/ 		var getter = module && module.__esModule ?
/******/ 			() => (module['default']) :
/******/ 			() => (module);
/******/ 		__webpack_require__.d(getter, { a: getter });
/******/ 		return getter;
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/define property getters */
/******/ (() => {
/******/ 	// define getter functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/global */
/******/ (() => {
/******/ 	__webpack_require__.g = (function() {
/******/ 		if (typeof globalThis === 'object') return globalThis;
/******/ 		try {
/******/ 			return this || new Function('return this')();
/******/ 		} catch (e) {
/******/ 			if (typeof window === 'object') return window;
/******/ 		}
/******/ 	})();
/******/ })();
/******/ 
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/ (() => {
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ })();
/******/ 
/******/ /* webpack/runtime/make namespace object */
/******/ (() => {
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ })();
/******/ 
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!*****************!*\
  !*** ./main.ts ***!
  \*****************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Core_DependencyInjection_container_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Core/DependencyInjection/container-config */ "../Core/DependencyInjection/container-config.ts");
/* harmony import */ var _Core_Types_ContainerTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Core/Types/ContainerTypes */ "../Core/Types/ContainerTypes.ts");
/* harmony import */ var reflect_metadata__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reflect-metadata */ "../node_modules/reflect-metadata/Reflect.js");
/* harmony import */ var reflect_metadata__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(reflect_metadata__WEBPACK_IMPORTED_MODULE_2__);



const formElement = document.getElementById("registerForm");
const service = _Core_DependencyInjection_container_config__WEBPACK_IMPORTED_MODULE_0__.container.get(_Core_Types_ContainerTypes__WEBPACK_IMPORTED_MODULE_1__.ContainerTypes.ReactiveValidatorService);
const group = service.registerForm(formElement);
formElement.addEventListener("submit", async (e) => {
    e.preventDefault();
    const isValid = await service.validateForm(group);
    console.log("Form valid?", isValid);
});

})();


//# sourceMappingURL=validationInterop.bundle.js.map