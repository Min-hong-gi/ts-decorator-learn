import { AppCore } from "../App/core/AppCoreDecorator.js";

@AppCore
export class TestCore {
  constructor(private msg?: string) {}

  hello() {
    console.log(this.msg);
  }
}