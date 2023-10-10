function Stack() {
    const stack = Object.create(Stack.prototype);
    stack.s = arguments.length;
  
    for (let i = 0; i < arguments.length; i++) {
      stack[i] = arguments[i];
    }
  
    return stack;
  }
  
  Stack.prototype = Object.create(Array.prototype);
  
  Stack.prototype.push = function (element) {
    this[this.s] = element;
    this.s++;
  };
  
  Stack.prototype.pop = function () {
    if (this.s === 0) {
      return undefined;
    }
    const poppedElement = this[this.s - 1];
    delete this[this.s - 1];
    this.s--;
    return poppedElement;
  };
  
  Stack.prototype.top = function () {
    if (this.s === 0) {
      return undefined;
    }
    return this[this.s - 1];
  };
  
  Stack.prototype.print = function () {
    const elements = [];
    for (let i = 0; i < this.s; i++) {
      elements.push(this[i]);
    }
    console.log(`[${elements.join(',')}]`);
  };
  
  Stack.prototype.printReverse = function () {
    const elements = [];
    for (let i = this.s - 1; i >= 0; i--) {
      elements.push(this[i]);
    }
    console.log(`[${elements.join(',')}]`);
  };
  
  // Example usage:
  const myStack = new Stack(1, 2, 3, 4);
  
  myStack.push(5);
  myStack.print();
  myStack.pop();
  myStack.print();
  console.log(myStack.top());
  myStack.printReverse();
  console.log(myStack.s);
  