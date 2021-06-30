// Напишите функцию printNumbers(from, to, interval), которая последовательно выводит в консоль целые числа, начиная от from и заканчивая to, с интервалом между выводом соседних чисел в interval мс.
// Реализуйте первый или *оба варианта решения:

// - Используя setInterval.

printNumbers(1, 5, 800);

function printNumbers(from, to, interval) {
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
    let j = 1;
    for (let i = from; i <= to; i++) {
      setTimeout(() => {
        console.log("Number :>> ", i);
      }, interval * j++);
    }
  }
}
