import React from "react";
import Store from "./store";
import { autorun, configure } from "mobx";

configure({ enforceActions: "never" })
export const WowCalculatorContext = React.createContext();
export function getInitialState() {
  const store = new Store();

  autorun(() => store.dehydrate(), { delay: 300 });
  return store;
}