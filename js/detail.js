   // Tạo một hàm xử lý sự kiện scroll
   function handleScroll() {
    let scroll_h = window.pageYOffset || document.documentElement.scrollTop;
    if (parseInt(scroll_h) > 500) {
        document.querySelector(".header-2").classList.add("hien");
        document.querySelector(".header-2").classList.remove("an");
    } else {
        document.querySelector(".header-2").classList.remove("hien");
        document.querySelector(".header-2").classList.add("an");
    }
}

// Thêm sự kiện scroll chỉ đối với các phần tử mà bạn muốn xử lý
window.addEventListener('scroll', handleScroll);
// 
const starsEl = document.querySelectorAll(".fa-star");
const emojisEl = document.querySelectorAll(".far");
const colorsArray = ["red", "orange", "lightblue", "lightgreen", "green"];

updateRating(0);

starsEl.forEach((starEl, index) => {
    starEl.addEventListener("click", () => {
        updateRating(index);
    });
});

function updateRating(index) {
    starsEl.forEach((starEl, idx) => {
        if (idx < index + 1) {
            starEl.classList.add("active");
        } else {
            starEl.classList.remove("active");
        }
    });

    emojisEl.forEach((emojiEl) => {
        emojiEl.style.transform = `translateX(-${index * 51}px)`;
        emojiEl.style.color = colorsArray[index];
    });
}
