const { EventEmitter } = require("events");
const myEventEmitter = new EventEmitter();

const makeCoffee = (name: string): void => {
  console.log(`Kopi ${name} telah dibuat`);
};

const makeBill = (price: number): void => {
  console.log(`Bill sebesar ${price} telah dibuat`);
};

const onCoffeeOrderedListener = ({
  name,
  price,
}: {
  name: string;
  price: number;
}): void => {
  makeCoffee(name);
  makeBill(price);
};

// myEventEmitter.on("coffee-order", onCoffeeOrderedListener);

// myEventEmitter.emit("coffee-order", { name: "Anang", price: 100000 });

const sayBirthday = (name: string) => {
  console.log(`Happy birthday ${name}`);
};

const birthdayEventListener = (name: string): void => {
  sayBirthday(name);
};

myEventEmitter.on("birthday", birthdayEventListener);

myEventEmitter.emit("birthday", "Anang");
