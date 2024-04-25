$('.quantity').each(function () {
    var spinner = $(this),
        input = spinner.find('input[type="number"]'),
        btnUp = spinner.find('.quantity__btn--up'),
        btnDown = spinner.find('.quantity__btn--down'),
        min = input.attr('min'),
        max = input.attr('max');

    btnUp.click(function () {
        var oldValue = parseFloat(input.val());
        if (oldValue >= max) {
            var newVal = oldValue;
        } else {
            var newVal = oldValue + 1;
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
    });

    btnDown.click(function () {
        var oldValue = parseFloat(input.val());
        if (oldValue <= min) {
            var newVal = oldValue;
        } else {
            var newVal = oldValue - 1;
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
    });
});

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
