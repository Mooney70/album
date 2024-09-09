let currentImageIndex = -1;
let images = [];

document.querySelectorAll('.thumbnail').forEach((img, index) => {
    images.push({
        src: img.src,
        caption: img.getAttribute('data-caption')
    });
    
    img.addEventListener('click', function() {
        openModal(index);
    });
});

function openModal(index) {
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    const caption = document.getElementById('caption');
    
    currentImageIndex = index;
    modal.style.display = 'block';
    modalImg.src = images[currentImageIndex].src;
    caption.textContent = images[currentImageIndex].caption;
}

function showNextImage() {
    if (currentImageIndex < images.length - 1) {
        openModal(currentImageIndex + 1);
    }
}

function showPrevImage() {
    if (currentImageIndex > 0) {
        openModal(currentImageIndex - 1);
    }
}

document.getElementById('close').addEventListener('click', function() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
});

document.getElementById('next').addEventListener('click', showNextImage);
document.getElementById('prev').addEventListener('click', showPrevImage);
