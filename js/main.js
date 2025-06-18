const NUMBER_USERS = 25;

// Вспомогательная функция для случайного числа getRandomInt
const getRandomInt = function (a, b) {
    const min = Math.min (a, b);
    const max = Math.max (a, b);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Вспомогательная функция для случайного элемента из массива
const getRandomElement = function (array) {
    return array[getRandomInt(0, array.length - 1)];
};

// Вспомогательная функция для рандомного message в comments
const getRandomMessage = function (array) {
  const sentences = array.match(/[^.!?]+[.!?]+/g).map(str => str.trim());
  return getRandomElement(sentences);
};

// Вспомогательная функция для случайного id пользовотеля
// const getIdUser = function(num) {
//     const arrayIdUsers = [];

//     return function() {
//         let id;
//         do {
//             id = getRandomInt(1, num);
//         } while (arrayIdUsers.includes(id));

//         arrayIdUsers.push(id);
//         return id;
//     }
// };


// Функция для создания коментария, generateComments
const generateComments = function (count) {
    const MESSAGE_SET = "Всё отлично! В целом всё неплохо. Но не всё. Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально. Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше. Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше. Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!";
    const NAMES_SET = ["Кирилл", "Юлия", "Денис", "Даниил", "Святослав", "Макс", "Анастасия", "Анна", "Александр", "Михаил", "Наталья",];

    const comments = [];

    for (let i = 0; i <= count; i++) {
    comments.push({
      id: i,
      avatar: `img/avatar-${getRandomInt(1, 6)}.svg`,
      message: getRandomMessage(MESSAGE_SET),
      name: getRandomElement(NAMES_SET),
    });
  }
  return comments;
};


/* Создать функцию для генерации массива фотографий:
generatePhotosArray(count), где count = 25.
Внутри этой функции создать массив и заполнить его объектами.*/

const generatePhotosArray = function (count) {
    const photos = [];

    for (let i = 1; i <= count; i++) {
        photos.push({
            id: i,
            url: `photos/${i}.jpg`,
            description: "Описание фотографии",
            likes: getRandomInt(15, 200),
            comments: generateComments(getRandomInt(0, 30)),
        });
    }
  return photos;
};

console.log(generatePhotosArray(NUMBER_USERS));
