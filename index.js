const wrapper = document.querySelector('.wrapper');
const cards = document.querySelectorAll('.card__inner');
const audio = document.querySelector('.audio');
const sound = document.querySelector('.sound');

cards.forEach((card, index) => {
  card.addEventListener('click', function () {
    card.classList.add('is-flipped');
  });
  card.addEventListener('mouseleave', function () {
    card.classList.remove('is-flipped');
  });
});

function playAudio() {
  audio.play();
}

wrapper.addEventListener('click', (e) => {
  const cardInner = e.target.closest('.card__inner');
  sound.src = `audio/${cardInner.getAttribute('number')}.mp3`
  cardInner.addEventListener('click', playAudio);
})

