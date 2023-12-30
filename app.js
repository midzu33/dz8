// function init() {
//     let name = prompt('name - ')
//     let displayName = () => {
//         return alert(name)
//     }
//     return displayName()
// }
// init()

//slider
const fileInput = document.querySelector('#file')
const slider = document.querySelector('.slider')
const slidesContainer = document.querySelector('.slides')
const prevButton = document.querySelector('.prev')
const nextButton = document.querySelector('.next')

let imgFiles = []
let currentSlide = 0

fileInput.onchange = (e) => {
    const files = Array.from(e.target.files)
    if (files.length === 0) return alert('Файлы не выбраны!')

    imgFiles = imgFiles.concat(files)
    console.log(files)

    slidesContainer.innerHTML = ''

    imgFiles.forEach((file, index) => {
        const imgUrl = URL.createObjectURL(file);
        const slide = document.createElement('div');
        slide.className = 'slide';
        slide.innerHTML = `<img src="${imgUrl}" alt="Slide ${index + 1}">`
        slidesContainer.appendChild(slide)
    })
    showIndex(currentSlide)
}
console.log(imgFiles)

function showIndex(index) {
    const slides = document.querySelectorAll('.slide')
    slides.forEach((slide, i) => {
        slide.style.display = i === index ? 'block' : 'none';
    })
}

prevButton.addEventListener('click', ()=> {
    if(currentSlide > 0){
        currentSlide --
        showIndex(currentSlide)
    }
})

nextButton.addEventListener('click', () => {
    if(currentSlide < imgFiles.length - 1){
        currentSlide++
        showIndex(currentSlide)
    }
})
let offset = 0;
const slides = document.querySelector('.slides');

document.querySelector('.next').addEventListener('click', function(){
    offset = offset + 256;
    if (offset > 768) {
        offset = 0;
    }
    slides.style.left = -offset + 'px';
});

document.querySelector('.prev').addEventListener('click', function () {
    offset = offset - 256;
    if (offset < 0) {
        offset = 768;
    }
    slides.style.left = -offset + 'px';
});
document.querySelector('.delete').addEventListener('click', function () {
    offset = offset - 256;
    if (offset < 0) {
        offset = 768;
        slides.remove()
    }
    slides.style.left = -offset + 'px';
});
