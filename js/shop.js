function getVals() {
    // Get slider values
    var parent = this.parentNode;
    var slides = parent.getElementsByTagName("input");
    var slide1 = parseFloat(slides[0].value);
    var slide2 = parseFloat(slides[1].value);
    // Neither slider will clip the other, so make sure we determine which is larger
    if (slide1 > slide2) { var tmp = slide2; slide2 = slide1; slide1 = tmp; }

    var displayElement = parent.getElementsByClassName("rangeValues")[0];
    displayElement.innerHTML = "" + slide1 + " đ - " + slide2 + " đ";
}

window.onload = function () {
    // Initialize Sliders
    var sliderSections = document.getElementsByClassName("range-slider");
    for (var x = 0; x < sliderSections.length; x++) {
        var sliders = sliderSections[x].getElementsByTagName("input");
        for (var y = 0; y < sliders.length; y++) {
            if (sliders[y].type === "range") {
                sliders[y].oninput = getVals;
                // Manually trigger event first time to display values
                sliders[y].oninput();
            }
        }
    }
}

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