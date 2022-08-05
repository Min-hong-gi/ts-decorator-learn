import { App } from "./App/type/App.js";
import Pointer2D from "./drawLib/model/pointer2d.js";
import { vh, vw } from "./drawLib/util/viewSize.js";
import { Squre } from "./drawObjects/Squre.js";

window.onload = () => {
  new App({
    DrawCore: "#fff",
  });
  runConstruct();
};

function runConstruct() {
  app.DrawCore.renderStart();
  app.DrawCore.context.translate(vw(50), vh(50));

  new Squre(new Pointer2D(10, 10), 50, 50, "red");

  let ob = new Squre(new Pointer2D(30, 30), 50, 50, "blue", 1);
  setInterval(()=>{
    ob.rotate+=1;
  }, 10);
}
