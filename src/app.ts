import { App } from "./App/type/App.js";
import Pointer2D from "./model/pointer2d.js";
import Squre from "./model/square.js";

window.onload = () => {
  const app = new App();
  setInterval(() => {
    createSqure();
  }, 1000);
  app.render();
};

function createSqure() {
  const squre = new Squre(
    new Pointer2D(250, app.canvasHeight/2),
    200,
    200,
  );
  addRandomColor();
  addRandomColor();
  const setColor = setInterval(() => {
    addRandomColor();
  }, 1000);

  let x = Math.floor((Math.random() * 360)) - 180;
  let y = Math.floor((Math.random() * 360)) - 180;
  const spead = Math.random() * 2;
  let pointer = new Pointer2D(x, y);
  pointer.x /= pointer.normalize();
  pointer.y /= pointer.normalize();
  
  const setMove = setInterval(() => {

    squre.point.add(new Pointer2D(pointer.x, pointer.y).mul(spead));

    if(squre.point.x > app.canvasWidth || squre.point.x < 0) {
      pointer.x*=-1;
    }
    if(squre.point.y > app.canvasHeight ||squre.point.y < 0) {
      pointer.y*=-1;
    }
  }, 1000 / 60);

  setTimeout(() => {
    clearInterval(setColor);
    clearInterval(setMove);
    squre.dead();
  }, 10000);

  function addRandomColor() {
    const random1 = Math.floor(Math.random() * 16).toString(16);
    const random2 = Math.floor(Math.random() * 16).toString(16);
    const random3 = Math.floor(Math.random() * 16).toString(16);
    squre.setColor(`#${random1}${random2}${random3}`);
  }
}
