// Gọi thanh header
const headerToggle = document.querySelector('.header__toggle');
const headerMenu = document.querySelector('.header__list');

if(headerToggle) {
   headerToggle.addEventListener('click', () => {
      headerMenu.classList.add('open');
   })
}

// Khi bấm vào link chuyển thì sẽ xoá thanh header__nav
const headerLink = document.querySelectorAll('.header__link');

function actionLink() {
   headerMenu.classList.remove('open');
}

headerLink.forEach(n => n.addEventListener('click', actionLink));

// Mở mục tìm hiểu thêm ở FAQ
document.querySelector('.faq__circle').click();
function openFAQ(id) {
   let x = document.getElementById(id);
   if(x.className.indexOf('show') == -1) {
      x.classList.add('show');
   } else {
      x.classList.remove('show');
   }
}