const containerPictures = document.querySelector('.pictures');
const templatePicture = document.querySelector('#picture').content.querySelector('.picture');

const renderThumbnails = (photos) => {
  const listPictureFragment = document.createDocumentFragment();
  photos.forEach((photo) => {
    const {id,url,description,likes,comments} = photo;
    const picturesElement = templatePicture.cloneNode(true);
    picturesElement.dataset.id = id;
    const image = picturesElement.querySelector('.picture__img');
    image.src = url;
    image.alt = description;
    picturesElement.querySelector('.picture__likes').textContent = likes;
    picturesElement.querySelector('.picture__comments').textContent = comments.length;

    listPictureFragment.appendChild(picturesElement);
  });
  containerPictures.appendChild(listPictureFragment);
  return containerPictures.querySelectorAll('.picture');
};

// getData(renderThumbnails);

export {containerPictures,renderThumbnails};
