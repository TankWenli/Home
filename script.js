// script.js
document.addEventListener("DOMContentLoaded", function() {
  const navbar = document.querySelector(".navbar");
  const scrollThreshold = 100; // 設定滾動多少距離後開始變成不透明

  function updateNavbarOpacity() {
    const scrollTop = window.scrollY;
    const maxOpacity = 1; // 最大不透明度
    const minOpacity = 0; // 最小透明度

//     根據滾動距離計算透明度
    const opacity = Math.min(1, Math.max(0, scrollTop / scrollThreshold));
    navbar.style.backgroundColor = `rgba(200, 198, 200, ${opacity})`;
  }

//  監聽網頁滾動事件，並呼叫函數來更新導覽列的透明度
  window.addEventListener("scroll", updateNavbarOpacity);
});


//幻燈片
let items = document.querySelectorAll('.carousel .carousel-item')

items.forEach((el) => {
    const minPerSlide = 3
    let next = el.nextElementSibling
    for (var i=1; i<minPerSlide; i++) {
        if (!next) {
            // wrap carousel by using first child
        	next = items[0]
      	}
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
    }
})


// 获取幻灯片容器
var carousel = document.querySelector('#DisplayCarousel');
// 添加拖拽切换功能
var startX = 0;
var endX = 0;

carousel.addEventListener('touchstart', function(e) {
    startX = e.touches[0].clientX;
});

carousel.addEventListener('touchend', function(e) {
    endX = e.changedTouches[0].clientX;
    if (startX - endX > 50) {
        carousel.querySelector('.carousel-control-next').click(); // 下一页
    } else if (endX - startX > 50) {
        carousel.querySelector('.carousel-control-prev').click(); // 上一页
    }
});



