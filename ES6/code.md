1. Let and Const Keywords:

The `let` and `const` keywords were introduced to declare variables in ES6.

- `let` allows you to declare variables that can be reassigned:


```javascript
let x = 5;
x = 10; // Valid
```

- `const` is used for declaring constants, and once assigned, their value cannot be changed:
```javascript
const y = 5;
y = 10; // Error
```
2. Arrow Function:

Arrow functions are a concise way to write functions in ES6. They have a more compact syntax compared to regular functions and have lexical scoping.

Regular Function:
````javascript
function add(a, b) {
return a + b;
}
```

Arrow Function:

````javascript
const add = (a, b) => a + b;

```

The key difference is that arrow functions do not have their own `this` context; they inherit it from the enclosing scope.

3. Template Literals:

Template literals allow you to embed expressions inside string literals using `${}` syntax:

```javascript
const name = "John";
console.log(`Hello, ${name}!`); // Hello, John!
````

4. Default Parameters:

You can specify default values for function parameters in ES6:

```javascript
function greet(name = "Guest") {
  console.log(`Hello, ${name}!`);
}

greet(); // Outputs: Hello, Guest!
greet("Alice"); // Outputs: Hello, Alice!
```

5. For...of Loop:

The `for...of` loop is used to iterate over iterable objects like arrays, strings, and maps:

```javascript
const fruits = ["apple", "banana", "cherry"];
for (const fruit of fruits) {
  console.log(fruit);
}
```

6. Object and Array Destructuring:

Destructuring allows you to extract values from objects and arrays into variables:

Object Destructuring:

```javascript
const person = { name: "Alice", age: 30 };
const { name, age } = person;
console.log(name); // Outputs: Alice
```

Array Destructuring:

```javascript
let obj = {
  name: "Alice",
  age: 30,
};
let { name, age } = obj;
console.log(name, age); // Outputs: Alice 30
```

7. Rest Parameter:

The rest parameter allows you to gather remaining function arguments into an array:

```javascript
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4)); // Outputs: 10
```

**8. Spread Operator:**

The spread operator is used to spread elements from an array or object into another array or object:

Array Spread:

```javascript
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];
console.log(arr2); // Outputs: [1, 2, 3, 4, 5]
```

Object Spread:

```javascript
const obj1 = { x: 1, y: 2 };
const obj2 = { ...obj1, z: 3 };
console.log(obj2); // Outputs: { x: 1, y: 2, z: 3 }
```

**9. Classes:**

ES6 introduced class syntax for defining objects and constructors:

```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(
      `Hello, my name is ${this.name} and I'm ${this.age} years old.`
    );
  }
}

const person = new Person("John", 30);
person.greet(); // Outputs: Hello, my name is John and I'm 30 years old.
```

