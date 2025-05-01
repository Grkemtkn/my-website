const images = [
    'img/foto1.jpg',
    'img/foto2.jpg',
    'img/foto3.jpg',
    'img/foto4.jpg',
    'img/foto5.jpg'
];

let index = 0;
const slider = document.getElementById('slider');
const dotsContainer = document.getElementById('dots-container');


images.forEach((_, i) => {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    dot.addEventListener('click', () => goToSlide(i));
    dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll('.dot');

function showImage() {
    slider.src = images[index];


    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
}

function nextSlide() {
    index = (index + 1) % images.length;
    showImage();
}

function prevSlide() {
    index = (index - 1 + images.length) % images.length;
    showImage();
}

function goToSlide(i) {
    index = i;
    showImage();
}


showImage();


setInterval(nextSlide, 5000);
