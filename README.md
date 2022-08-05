TS-decorator-learn
-------

# Usago 
Run on [visual-studio live server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
```
npm install -g typescript
npm install
npm run start
```

# Todo
1. MoveObject구현
2. RandomMoveController 구현

# ADD..
0. 명백한 목표를 정하여 기능 확장 필요
1. 전역 이벤트 컨트롤러 추가 및 사용자와의 상호작용 추가

# Api

## @AppCore
globalThis.app에 기능을 추가합니다.   
App/controllers/controller.export.ts에 등록해야 타입 추론이 가능 합니다.   

```typescript
//...TestCore.ts
@AppCore
export class TestCore {
  hello() {
    console.log('hello world');
  }
}
//...app.ts

new App();
globalThis.app.TestCore.hello(); //hello world;
```

## App.counstructor 
Core의 constructor의 값을 넘길 수 있습니다.
```typescript
//...TestCore.ts
@AppCore
export class TestCore {
  constructor(private msg?: string) {}
  hello() {
    console.log(this.msg);
  }
}
//...app.ts
new App({
  TestCore: 'hello world'
});
globalThis.app.TestCore.hello(); //hello world;
```

## @Draw
globalThis.app에 해당 객체가 그려져야 함을 알립니다.   
```typescript
//...Squre.ts
@Draw
class Squre extends DrawObject {
  draw(ctx: CanvasRenderingContext2D): void {
    ctx.beginPath();
    ctx.fillRect(10, 10, 50, 50);
    ctx.closePath();
  }
}
//...app.ts
new App();

app.DrawCore.renderStart();
new Squre();
```