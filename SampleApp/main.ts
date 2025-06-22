import { container } from "../Core/DependencyInjection/container-config";
import { IReactiveValidatorService } from "../Core/Interfaces/IReactiveValidatorService";
import {ContainerTypes } from "../Core/Types/ContainerTypes";
import "reflect-metadata";

const formElement = document.getElementById("registerForm") as HTMLFormElement;
const service = container.get<IReactiveValidatorService>(ContainerTypes.ReactiveValidatorService);
const group = service.registerForm(formElement);

formElement.addEventListener("submit", async (e) => {
  e.preventDefault();
  const isValid = await service.validateForm(group);
  console.log("Form valid?", isValid);
});
