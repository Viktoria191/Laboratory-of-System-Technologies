// Сериализация:
function serialize(arr) {
  return arr.map((num) => String.fromCharCode(num)).join(',');
}

// Десериализация:
function deserialize(str) {
  return str.split(',').map((elem) => elem.charCodeAt(0));
}

// Тесты:
const tests = [
  [1, 2, 3, 4, 5], // простейшие
  Array.from({ length: 50 }, (_, i) => i + 1),
  Array.from({ length: 100 }, (_, i) => i + 1),
  Array.from({ length: 500 }, (_, i) => i + 1),
  Array.from({ length: 1000 }, (_, i) => i + 1),
  Array.from({ length: 1000 }, (_, i) => Math.floor(Math.random() * 300) + 1), // Случайные числа
  Array.from({ length: 1000 }, (_, i) => Math.floor(Math.random() * 10) + 1), // Все числа 1 знака
  Array.from({ length: 1000 }, (_, i) => Math.floor(Math.random() * 90) + 10), // Все числа из 2х знаков
  Array.from({ length: 900 }, (_, i) => (i % 300) + 1), // Каждое число по 3 раза
];

const results = tests.map((test) => {
  const serialized = serialize(test);
  const compressionRatio = serialized.length / (test.length * 2); // Коэффициент сжатия
  return {
    originalString: test,
    compressedString: serialized,
    compressionRatio,
  };
});

results.forEach((result) => {
  console.log(`Исходная строка: ${result.originalString}`);
  console.log(`Сжатая строка: ${result.compressedString}`);
  console.log(`Коэффициент сжатия: ${result.compressionRatio}`);
});
