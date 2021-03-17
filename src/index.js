console.log("%c HI", "color: firebrick");

document.addEventListener('DOMContentLoaded', function () {
    fetchImages();
})

function fetchImages() {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    fetch(imgUrl)
        .then(response => response.json())
        .then(results => {
        results.message.forEach(image => addImageToDOM(image))
    });
}

function addImageToDOM(image) {
    console.log(image)
    let container = document.querySelector('#dog-image-container')
    let img = document.createElement('img')
    img.src = image
    console.log(img)
    container.appendChild(img)
};