function changeLi(clickedLi, contentId){
    // loại bỏ lớp active từ tất cả các Li
    var allLi = document.querySelectorAll('.abc');
    allLi.forEach(function(li) {
        li.classList.remove('active');
    });

    //thêm lớp active cho Li được click
    clickedLi.classList.add('active');


    // Ẩn tất cả các nội dung
    var allContents = document.querySelectorAll('.products-content');
    allContents.forEach(function(content) {
      content.classList.remove('active-content');
    });

    // Hiển thị nội dung tương ứng với tab được click
    document.getElementById(contentId).classList.add('active-content');


}