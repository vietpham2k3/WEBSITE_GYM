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