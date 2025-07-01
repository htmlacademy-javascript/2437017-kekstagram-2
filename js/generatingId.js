/*id для коментов*/
const createIdGenerator = () => {
  let id = 0;
  return () => ++id;
};

const photoId = createIdGenerator();
const commentsId = createIdGenerator();

export {photoId, commentsId};
