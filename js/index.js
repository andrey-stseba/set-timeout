// Напишите функцию printNumbers(from, to, interval), которая последовательно выводит в консоль целые числа, начиная от from и заканчивая to, с интервалом между выводом соседних чисел в interval мс.
// Реализуйте первый или *оба варианта решения:

// Используя setInterval

// printNumbers1(2, 8, 500);

function printNumbers1(from, to, interval) {
  if (
    typeof from !== "number" ||
    typeof to !== "number" ||
    typeof interval !== "number" ||
    !Number.isSafeInteger(interval) ||
    !Number.isSafeInteger(to) ||
    !Number.isSafeInteger(from)
  ) {
    throw new TypeError("Все три параметра должны быть числами");
  }
  if (from > to) {
    throw new RangeError("from не может быть > to");
  }
  if (interval < 0) {
    throw new RangeError("interval не может быть < 0");
  } else {
    let argument = from;

    let output = setInterval(function () {
      console.log(argument);
      if (argument === to) {
        clearInterval(output);
      }
      argument++;
    }, interval);
  }
}

// *Используя рекурсивный setTimeout

printNumbers2(1, 5, 800);

function printNumbers2(from, to, interval) {
  if (
    typeof from !== "number" ||
    typeof to !== "number" ||
    typeof interval !== "number"
  ) {
    throw new TypeError("Все три параметра должны быть числами");
  }
  if (from > to || !Number.isSafeInteger(from) || !Number.isSafeInteger(to)) {
    throw new RangeError("from не может быть > to");
  }
  if (interval < 0 || !Number.isSafeInteger(interval)) {
    throw new RangeError("interval не может быть < 0");
  } else {
    let current = from;
    setTimeout(function output() {
      console.log(current);
      if (current < to) {
        setTimeout(output, interval);
      }
      current++;
    }, interval);
  }
}
