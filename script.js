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
    navbar.style.backgroundImage = `linear-gradient(to bottom, rgba(221, 213, 202, ${opacity}) 10%, transparent 90%)`;
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

document.addEventListener("DOMContentLoaded", function() {
  var imgHeight = document.querySelector('.img-fluid').clientHeight;
  var slideContent = document.querySelectorAll('.slide-content');

  slideContent.forEach(function(content) {
      content.style.height = imgHeight + "px";
  });
});



// 產品JS
function changeContent(flowerType) {
  const freshFlower = document.getElementById('freshFlower');
  const eternalFlower = document.getElementById('eternalFlower');
  const productListFresh = document.getElementById('productListFresh');
  const productListEternal = document.getElementById('productListEternal');
  const backButton = document.querySelector('.back-button');
  const freshFlowerText = document.querySelector('.freshFlower-text');
  const eternalFlowerText = document.querySelector('.eternalFlower-text');

  // 删除现有的花卉类型文字元素
  removeFlowerTypeText();
  setTimeout(function() {
    window.scrollTo(0, 0);
  }, 0);

  // 隱藏雙圖
  freshFlower.style.display = 'none';
  eternalFlower.style.display = 'none';

  // 隱藏文字
  freshFlowerText.style.display = 'none';
  eternalFlowerText.style.display = 'none';

  // 根據鮮花或永生花顯示對應的商品清單
  if (flowerType === 'freshFlower') {
    productListFresh.style.display = 'flex';
    productListEternal.style.display = 'none';
  } else {
    productListFresh.style.display = 'none';
    productListEternal.style.display = 'flex';
  }

  // 顯示返回按鈕
  backButton.style.display = 'block';

  // 如果需要，為商品清單添加淡入效果
  if (flowerType === 'freshFlower') {
    productListFresh.classList.add('fade-in');
  } else {
    productListEternal.classList.add('fade-in');
  }

  // 顯示相對文字
  const flowerTypeText = (flowerType === 'freshFlower') ? 'Fresh Flower' : 'Eternal Flower';
  showFlowerTypeText(flowerTypeText);

}

// 删除花卉类型文字元素
function removeFlowerTypeText() {
  const flowerTypeTextElement = document.querySelector('.flower-type-text');
  if (flowerTypeTextElement) {
      flowerTypeTextElement.parentNode.removeChild(flowerTypeTextElement);
  }
}

// 显示花卉类型文字
function showFlowerTypeText(text) {
  const flowerTypeTextElement = document.createElement('div');
  flowerTypeTextElement.textContent = text;
  flowerTypeTextElement.classList.add('flower-type-text');
  const flowerTypeInfo = document.querySelector('.flower-type-info');
  flowerTypeInfo.appendChild(flowerTypeTextElement);
}

// 返回鍵功能
function goBack() {
  const freshFlower = document.getElementById('freshFlower');
  const eternalFlower = document.getElementById('eternalFlower');
  const backButton = document.querySelector('.back-button');
  const productListFresh = document.getElementById('productListFresh');
  const productListEternal = document.getElementById('productListEternal');
  const freshFlowerText = document.querySelector('.freshFlower-text');
  const eternalFlowerText = document.querySelector('.eternalFlower-text');

  // 顯示雙圖，隱藏商品清單和返回按鈕
  freshFlower.style.display = 'block';
  eternalFlower.style.display = 'block';
  productListFresh.style.display = 'none';
  productListEternal.style.display = 'none';
  backButton.style.display = 'none';
  freshFlowerText.style.display = 'block';
  eternalFlowerText.style.display = 'block';
  // 移除花卉類型文字元素
  removeFlowerTypeText();
}

// 清單相片轉換
function changeProductImage(element) {
  const hoverImage = element.querySelector('.hover-image');
  hoverImage.style.opacity = '0';
}

function restoreProductImage(element) {
  const hoverImage = element.querySelector('.hover-image');
  hoverImage.style.opacity = '1';
}
