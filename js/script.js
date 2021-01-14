// Portfolio Item Filter
const filterContainer = document.querySelector(".project-filter");
const filterBtns = filterContainer.children;
const totalFilterBtn = filterBtns.length;
const projectFilterItems = document.querySelectorAll('.project-item');
const totalProjectItem = projectFilterItems.length;

for (let i = 0; i < totalFilterBtn; i++) {
    filterBtns[i].addEventListener('click', function () {
        filterContainer.querySelector('.active').classList.remove('active');
        this.classList.add("active");
        const filterValue = this.getAttribute('data-filter');

        for (let k = 0; k < totalProjectItem; k++) {
            if (filterValue === 'all') {
                projectFilterItems[k].classList.remove('hide');
            } else {
                if (filterValue === projectFilterItems[k].getAttribute('data-category')) {
                    projectFilterItems[k].classList.remove('hide');
                } else {
                    projectFilterItems[k].classList.add('hide');
                }
            }
        }
    });
}


//LightBox Item

const lightBox = document.querySelector('.lightbox');
const lightBoxImg = lightBox.querySelector('.lightbox-image');
const lightBoxText = lightBox.querySelector('.lightbox-caption .caption-text');
const lightBoxCounter = lightBox.querySelector('.lightbox-caption .caption-counter');

let itemIndex = 0;


function toggleLightBox() {
    lightBox.classList.add('open');

}

for (let i = 0; i < totalProjectItem; i++) {
    projectFilterItems[i].addEventListener('click', function () {
        itemIndex = i;
        itemChange();
        toggleLightBox();
        lightBox.children[0].querySelector('.lightbox-close i').addEventListener('click', function () {
            lightBox.classList.remove('open')
        })
    });
}


function itemChange() {
    imgSrc = projectFilterItems[itemIndex].querySelector(".project-img img").getAttribute('src');
    lightBoxImg.src = imgSrc;
    lightBoxText.innerHTML = projectFilterItems[itemIndex].querySelector("h4").innerHTML;
    lightBoxCounter.innerHTML = itemIndex + 1 + " of " + totalProjectItem;

}


function prevItem() {
    if (itemIndex === 0) {
        itemIndex = totalProjectItem - 1;
    } else {
        itemIndex--;
    }

    itemChange();
}

function nextItem() {
    if (itemIndex === totalProjectItem - 1) {
        itemIndex = 0;
    } else {
        itemIndex++;
    }

    itemChange();
}


//close lightbox
lightBox.addEventListener('click', function (event) {
    if(event.target.classList[0] === 'lightbox' && event.target.classList[1] == 'open'){
        event.target.classList.remove('open')
    }

})

