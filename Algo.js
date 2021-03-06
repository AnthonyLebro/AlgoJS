
const fs = require("fs");
const { type } = require("os");
const { parse } = require("path");
const { cpuUsage } = require("process");

const data = process.argv[2];
fs.readFile(data, "utf8", (error, data) => {
  if (error) {
    console.error(error.message);
    return;
  }
  arr_numbers = data.split(" ").map((num) => parseInt(num, 10));

  /* ------------------------------------------------------------------------------ */
  // Tri à bulle / Bubble sort

  const bubbleSort = (arr_numbers) => {
    let numbers = [...arr_numbers];
    let comparaisonsCounter = 0;
    for (let i = 0; i < numbers.length; i++) {
      for (let j = 1; j < numbers.length - i; j++) {
        comparaisonsCounter++;
        if (numbers[j - 1] > numbers[j]) {
          [numbers[j - 1], numbers[j]] = [numbers[j], numbers[j - 1]];
        }
      }
    }
    return `Tri à bulle/Bubble Sort: ${comparaisonsCounter} comparaisons - [${numbers}]`;
  };

  /* ------------------------------------------------------------------------------ */
  // Tri par insertion / Insertion sort

  const insersionSort = (arr_numbers) => {
    let numbers = [...arr_numbers];
    let comparaisonsCounter = 0;

    for (let i = 1; i < numbers.length; i++) {
      x = numbers[i];
      j = i;
      while (j > 0 && numbers[j - 1] > x) {
        comparaisonsCounter++;
        numbers[j] = numbers[j - 1];
        j -= 1;
      }
      numbers[j] = x;
    }
    return `Tri par insertion/Insertion sort: ${comparaisonsCounter} comparaisons - [${numbers}]`;
  };
