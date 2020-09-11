# TypeScript基础
TypeScript 是 JavaScript 的一个超集，具有类型系统，可以编译为普通的 JavaScript 代码。
相比 JavaScript 主要新增内容有
- 类型批注和编译时类型检查
- 类型推断
- 类型擦除
- 接口
- 枚举
- Mixin
- 泛型编程
- 命名
- 元组
- ...

## 1、变量声明
静态类型系统的优点
- 增加了代码的可读性和可维护性，如通过类型定义了解函数的使用
- 可以在编译阶段发现有关类型的逻辑错误
- 增强了编辑器和 IDE 的功能

```typescript
// 基础类型
let isDone: boolean = false;

// 数组
let list: number[] = [1, 2, 3];
let list: Array<number> = [1, 2, 3]; // 数组泛型

// 函数
function add(x: number, y: number): number {
    return x + y;
}

let myAdd = function(x: number, y: number): number { return x + y; };

...
```

## 2、接口
接口是对行为的抽象，而具体如何行动需要由类（classes）去实现（implement）。

```typescript
interface Person {
    name: string;
    age: number;
}

let tom: Person = {
    name: 'Tom',
    age: 25
}

// 类实现接口
 
class male implements Person { 
   name: string 
   age: number 
   
   constructor(name: string,age: number) { 
      this.name = name 
      this.age = age 
   } 
} 
```
赋值时，变量的形状必须和接口的形状保持一致，除非使用可选属性。

## 3、泛型
```typescript
function createArray(length: number, value: any): Array<any> {
    let result = [];
    for (let i = 0; i < length; i++) {
        result[i] = value;
    }
    return result;
}

createArray(3, 'x'); // ['x', 'x', 'x']
```
使用 any 类型会导致这个函数可以接收任何类型的arg参数，这样就丢失了一些信息：传入的类型与返回的类型应该是相同的。 

```typescript
function createArray<T>(length: number, value: T): Array<T> {
    let result: T[] = [];
    for (let i = 0; i < length; i++) {
        result[i] = value;
    }
    return result;
}

createArray(3, 'x'); // ['x', 'x', 'x']
```
T 帮助我们捕获用户传入的类型并控制返回值类型为 T。  
现在我们可以知道参数类型与返回值类型是相同的了。 这允许我们跟踪函数里使用的类型的信息。

### 泛型约束
我们想访问arg的length属性，但是编译器并不能证明每种类型都有length属性。

```typescript
interface Lengthwise {
    length: number
}

function createArray<T extends Lengthwise>(length: number, value: T): Array<T> {
    let result: T[] = []
    for (let i = 0; i < length; i++) {
        result[i] = value
    }
    return result
}
```
为此定义一个接口来描述约束条件。 创建一个包含 .length 属性的接口，使用这个接口和 extends 关键字来实现约束：

## 4、声明文件
声明文件使用关键字 declare 给 js 代码补充类型标注，这样在ts编译环境下就不会提示js文件"缺少类型"。

```typescript
declare let jQuery: (selector: string) => any;
jQuery('#foo');
```
通常我们会把声明语句放到一个单独的文件，该文件必须以 .d.ts 结尾（tsc 会解析所有 ts 文件）

```shell
npm i @types/jquery
```
也可以直接下载定义好的声明文件