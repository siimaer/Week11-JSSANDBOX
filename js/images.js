const currentMainImage = document.querySelector(".gallery-image4 img");
const imagesToChooseFrom = document.querySelectorAll(".gallery img");


imagesToChooseFrom.forEach(img => img.addEventListener('click', imageClick));

function imageClick(e) {

    console.log(e.target);
    currentMainImage.src = e.target.src;
}