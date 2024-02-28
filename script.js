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
let items = document.querySelectorAll(".carousel .carousel-item")

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

// 監聽幻燈片切換事件
const displayCarousel = document.getElementById("DisplayCarousel");
displayCarousel.addEventListener("slide.bs.carousel", (event) => {
  resetAllGifs(slideContents);
});


// GIF
// 獲取所有 "carousel-caption" 元素
const slideContents = document.querySelectorAll('.slide-content');

// 遍歷每個 "carousel-caption" 元素
slideContents.forEach((slideContent) => {
    // 尋找與當前 "carousel-caption" 相關聯的 GIF 圖像
    const gifImage = slideContent.querySelector('.gif-image');

    // 使用 mouseenter 和 mouseleave 事件監聽器
    slideContent.addEventListener('mouseenter', () => {
        // 滑鼠進入時顯示 GIF 圖像
        gifImage.style.visibility = 'visible';
    });

    slideContent.addEventListener('mouseleave', () => {
        // 滑鼠離開時隱藏 GIF 圖像
        gifImage.style.visibility = 'hidden';
        gifImage.src = gifImage.src; // 通过重新设置 src 属性来强制重新加载 GIF
    });
});

//產品JS
function changeContent(flowerType) {
  const freshFlower = document.getElementById('freshFlower');
  const eternalFlower = document.getElementById('eternalFlower');
  const productList = document.getElementById('productList');

  if (flowerType === 'freshFlower') {
      // 實現鮮花效果
      freshFlower.style.transform = 'translateY(-100%)';
      freshFlower.style.opacity = '0';
      eternalFlower.style.display = 'none';

      // 延遲切換至商品清單
      setTimeout(() => {
          productList.style.display = 'flex';
      }, 1000);
  } else if (flowerType === 'eternalFlower') {
      // 實現永生花效果
      eternalFlower.style.transform = 'translateY(-100%)';
      eternalFlower.style.opacity = '0';
      freshFlower.style.display = 'none';

      // 延遲切換至商品清單
      setTimeout(() => {
          productList.style.display = 'flex';
      }, 1000);
  }
}

// 商品清單項目滑鼠事件處理
const productItems = document.querySelectorAll('.product-item');
productItems.forEach((item) => {
  item.addEventListener('mouseenter', () => {
      // 商品清單項目滑鼠進入時的效果
      // 你可以在這裡添加相應的效果
  });

  item.addEventListener('mouseleave', () => {
      // 商品清單項目滑鼠離開時的效果
      // 你可以在這裡添加相應的效果
  });
});