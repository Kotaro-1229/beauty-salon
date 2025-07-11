//ハンバーガーメニュー
const menuOpen=document.querySelector('#menu-open')
const menuClose=document.querySelector('#menu-close')
const menuPanel=document.querySelector('#menu-panel')
//ハンバーガーメニューを開く
const menuOptions={
  duration:1400,
  easing: 'ease',
  fill:'forwards',
};
menuOpen.addEventListener('click',()=>{
  menuPanel.animate({translate:['100vw',0]},menuOptions);
});

menuClose.addEventListener('click',()=>{
  menuPanel.animate({translate:[0,'100vw']},menuOptions);
});

//スライダー設置
const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});


const styleImg = document.querySelector("#styleImg");

const lists = [
  { src: 'Image-folder/id1.jpg', category: ['woman', 'long'] },
  { src: 'Image-folder/id2.jpg', category: ['man', 'short'] },
  { src: 'Image-folder/id3.jpg', category: ['woman', 'long'] },
  { src: 'Image-folder/id4.jpg', category: ['man', 'medium'] },
  { src: 'Image-folder/id5.jpg', category: ['man', 'short'] },
];

// グループごとに選択されたフィルターを管理
let selectedFilters = {};

function renderImages() {
  styleImg.innerHTML = '';

  // フィルターキーの配列にする
  const filterKeys = Object.values(selectedFilters);

  const filtered = filterKeys.length === 0
    ? lists
    : lists.filter(item =>
        filterKeys.every(f => item.category.includes(f))
      );

  filtered.forEach(item => {
    const div = document.createElement('div');
    div.className = 'style-item';
    div.innerHTML = `<img src="${item.src}" alt="">`;
    styleImg.appendChild(div);
  });

  // activeクラスの更新
  document.querySelectorAll('[data-filter]').forEach(btn => {
    const filter = btn.dataset.filter;
    const group = btn.dataset.group;

    if (filter === 'all') {
      btn.classList.toggle('active', Object.keys(selectedFilters).length === 0);
    } else {
      btn.classList.toggle('active', selectedFilters[group] === filter);
    }
  });
}

// 初期表示
renderImages();

// フィルターボタンのクリック処理
document.querySelectorAll('[data-filter]').forEach(btn => {
  btn.addEventListener('click', () => {
    const filter = btn.dataset.filter;
    const group = btn.dataset.group;

    if (filter === 'all') {
      selectedFilters = {};
    } else {
      // 同じフィルターが押されたら解除
      if (selectedFilters[group] === filter) {
        delete selectedFilters[group];
      } else {
        selectedFilters[group] = filter;
      }
    }

    renderImages();
  });
});

//スタッフグリッド表示


// Q&Aアコーディオン
// Q&Aアコーディオン
{
  const parents = document.querySelectorAll('.js-qa__parent');

  for (let i = 0; i < parents.length; i++) {
    parents[i].addEventListener('click', accordionToggle);
  }

  function accordionToggle(e) {
    e.currentTarget.classList.toggle('is-open');
    const child = e.currentTarget.nextElementSibling;
    if (child) {
      child.classList.toggle('is-open');
    }
  }
}
