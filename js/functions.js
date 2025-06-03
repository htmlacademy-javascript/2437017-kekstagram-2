/*Функция для проверки длины строки. Принимает строку и максимальную длину.
true, если строка меньше или равна указанной длине,
false, если строка длиннее.*/

const isLengthValid = (string, number) => string.length <= number;

isLengthValid('проверяемая строка', 20);


/*Функция для проверки, является ли строка палиндромом.
Палиндром — это слово или фраза, которые одинаково читаются и слева направо и справа налево */

const isPalindrome = function (string) {
  // Удаляем все небуквенные символы и приводим к верхнему регистру
  const cleanedString = string.replace(/[^а-яА-ЯёЁa-zA-Z]/g, '').toUpperCase();
  const lastIndex = cleanedString.length - 1;
  // Проверяем символы до середины строки
  for(let i = 0; i < lastIndex / 2; i++) {
    if(cleanedString[i] !== cleanedString[ lastIndex - i]) {
    // Если символы не совпадают, это не палиндром
      return false;
    }
  }
  // Если все проверенные символы совпадают, это палиндром
  return true;
};

isPalindrome('топот');


/*Функция принимает строку, извлекает содержащиеся в ней цифры от 0 до 9
и возвращает их в виде целого положительного числа.
Если в строке нет ни одной цифры, функция должна вернуть NaN:
предусмотрите случай, когда вместо строки приходит число*/

// ПЕРВЫЙ СПОСОБ
const extractNumberFromString = function (element) {
  const str = String(element);
  const digitsOnly = str.replace(/\D/g, '');

  if (digitsOnly.length === 0) {
    return NaN;
  }
  return Number(digitsOnly);
};
extractNumberFromString('2023 год');


// ВТОРОЙ СПОСОБ

const extractNumber = function (element) {
  if (element === null || element === undefined) {
    return NaN;
  }
  const string = element.toString();
  let number = '';
  for (let i = 0; i < string.length; i++) {
    const num = parseInt(string[i], 10);
    if (!isNaN(num)) {
      number += num.toString();
    }
  }
  if (number.length === 0) {
    return NaN;
  }
  return parseInt(number, 10);
};

extractNumber('2023 год');
