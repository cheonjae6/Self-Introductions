const jogging = document.querySelector('#jogging');
const reading = document.querySelector('#reading');
const dumbbell = document.querySelector('#dumbbell');
const image = document.querySelector('.image');

// const joggingImage = `<img src='./img/jogging.jpeg' class="jogging-image">`;

jogging.addEventListener('click', () => {
  image.src = './img/jogging.jpeg';
  image.classList.toggle()
});

reading.addEventListener('click', () => {
  image.src = './img/book-open-solid.svg';
})

dumbbell.addEventListener('click', () => {
  image.src = './img/dumbbell-solid.svg';
})
