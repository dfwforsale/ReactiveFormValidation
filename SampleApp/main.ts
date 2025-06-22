import "reflect-metadata"; // must come first for Inversify

import { ReactiveFormBootstrapper } from "../Core/Bootstrapper/ReactiveFormBootstrapper";

// 🧠 Bootstrapper handles everything: registration, binding, validation, and submission
const bootstrapper = new ReactiveFormBootstrapper("registerForm");
bootstrapper.bootstrap();