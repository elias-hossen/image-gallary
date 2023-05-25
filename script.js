const allImage = document.querySelectorAll('img');
const galleryArea = document.querySelector('.gallery-area');
const newImage = document.querySelector('.bigger-image');
const bigImage = document.querySelector('.bigger-im');
const overlay = document.querySelector('.overlay');
const right = document.querySelector('.fa-chevron-right');
const left = document.querySelector('.fa-chevron-left');

allImage.forEach((image, i) =>
  image.addEventListener('click', function () {
    overlay.classList.remove('hidden');
    newImage.classList.remove('hidden');

    let currentImg = i;
    console.log(currentImg);
    document.addEventListener('click', function (e) {
      if (e.target.classList.contains('fa-chevron-right')) {
        if (currentImg > allImage.length - 3) {
          currentImg = 0;
        } else {
          currentImg++;
        }
      } else if (e.target.classList.contains('fa-chevron-left')) {
        if (currentImg === 0) {
          currentImg = allImage.length - 2;
        } else {
          currentImg--;
        }
      }
      bigImage.setAttribute('src', `${allImage[currentImg].src}`);
    });
  })
);
overlay.addEventListener('click', function () {
  overlay.classList.add('hidden');
  newImage.classList.add('hidden');
});
