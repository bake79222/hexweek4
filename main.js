import './assets/scss/all.scss';

// 1. 取得所有有 .sizecard class 的按鈕
const sizeCards = document.querySelectorAll('.sizecard');


// 2. 對每一個按鈕做監聽
sizeCards.forEach(function (card) {
    
    card.addEventListener('click', function () {
        // 3. 如果這個按鈕有 .lack，就不處理（缺貨不能點）
        if (card.classList.contains('lack')) {
        return; // 提前離開這次點擊處理
        }

        // 4. 先移除所有按鈕上的 active class
        sizeCards.forEach(function (c) {
        c.classList.remove('active'); // 移除所有 .active 樣式
        });

        // 5. 幫當前被點擊的這個按鈕加上 .active class
        card.classList.add('active'); // 顯示選中效果
    });
});

const favBtn = document.querySelector('.fav');
if (favBtn) {
  // 監聽點擊事件
  favBtn.addEventListener('click', function (e) {
  e.preventDefault(); // 阻止跳轉

  // 切換 active 狀態
  favBtn.classList.toggle('active');

  // 取得裡面的 icon 和文字
  const icon = favBtn.querySelector('i');

  if (favBtn.classList.contains('active')) {
    //  加入收藏 → 換成實心愛心 + 改文字
    icon.classList.remove('fa-regular');
    icon.classList.add('fa-solid');
    favBtn.innerHTML = '<i class="fa-solid fa-heart"></i>已收藏';
  } else {
    // 取消收藏 → 換回空心愛心 + 改文字
    icon.classList.remove('fa-solid');
    icon.classList.add('fa-regular');
    favBtn.innerHTML = '<i class="fa-regular fa-heart"></i>加入最愛';
  }
});
}



const fav2Btn = document.querySelector('.fav2');
if (fav2Btn) {
  fav2Btn.addEventListener('click', function (e) {
  e.preventDefault(); // 阻止跳轉

  // 只在螢幕寬度小於 576 時執行
  if (window.innerWidth < 576) {
    fav2Btn.classList.toggle('active');
    const icon = fav2Btn.querySelector('i');

    if (fav2Btn.classList.contains('active')) {
      // 加入收藏 → 實心愛心 
      fav2Btn.innerHTML = '<i class="fa-solid fa-heart"></i>';
    } else {
      // 取消收藏 → 空心愛心 
      fav2Btn.innerHTML = '<i class="fa-regular fa-heart"></i>';
    }
  }
});
}


// const itemsBtns = document.querySelectorAll('.items-button');

// itemsBtns.forEach(btn => {
//   btn.addEventListener('click', function (e) {
//     e.preventDefault();

//     itemsBtns.forEach(el => el.classList.remove('active'));
//     this.classList.add('active');
//   });
// });



const itemsBtns = document.querySelectorAll('.items-button');

if (itemsBtns.length > 0) {
  const loginFlags = document.querySelectorAll('.login-flag');
  const registerFlags = document.querySelectorAll('.register-flag');

  // 頁面載入時預設顯示登入區塊
  loginFlags.forEach(el => {
    el.style.display = 'flex';
  });
  registerFlags.forEach(el => {
    el.style.display = 'none';
  });

  itemsBtns.forEach(btn => {
    btn.addEventListener('click', function (e) {
      e.preventDefault();

      // 樣式切換
      itemsBtns.forEach(el => el.classList.remove('active'));
      this.classList.add('active');

      // 文字判斷是登入或註冊
      const isLogin = this.textContent.trim() === '登入';

      // 顯示區塊切換
      loginFlags.forEach(el => {
        el.style.display = isLogin ? 'flex' : 'none';
      });
      registerFlags.forEach(el => {
        el.style.display = isLogin ? 'none' : 'flex';
      });
    });
  });
}


