const burger = document.getElementById("burger");
const menu = document.getElementById("menu");
const menul = document.querySelectorAll(".menu__link");
const body = document.getElementById("body");

burger.addEventListener("click", function () {
   menu.classList.add('active');
   body.classList.add('.lock')
})

menu.addEventListener("click", function (e) {
   if (e.target === menu) {
      menu.classList.remove('active')
      body.classList.remove('.lock')
   }
})

menul.forEach(e => e.addEventListener("click", function () {
   menu.classList.remove('active')
      .classList.remove('.lock')
}
))

const modal = document.getElementById("modal");
const openBtn = document.getElementById("open-modal-btn");
const closeBtn = document.getElementById("close-modal-btn");

openBtn.addEventListener("click", function () {
   modal.classList.add("opened")
})

closeBtn.addEventListener("click", function () {
   modal.classList.remove("opened")
})

modal.addEventListener("click", function (e) {
   if (e.target === modal) {
      modal.classList.remove("opened")
   }
});

const tabsBtn = document.querySelectorAll(".tabs__nav-btn");
const tabsItems = document.querySelectorAll(".tabs__item");

tabsBtn.forEach(function (item) {
   item.addEventListener("click", function () {
      let currentBtn = item;
      let tabId = currentBtn.getAttribute("data-tab");
      let currentTab = document.querySelector(tabId);

      tabsBtn.forEach(function (item) {
         item.classList.remove('active');
      })

      currentBtn.classList.add('active');

      tabsItems.forEach(function (item) {
         item.classList.remove('active');
      })

      currentTab.classList.add('active');
   })
});


const acc = document.querySelectorAll(".acc");

acc.forEach(function (e) {
   e.addEventListener('click', function (e) {
      const self = e.currentTarget;
      const control = self.querySelector('.acc__control');
      const content = self.querySelector('.acc__content');

      self.classList.toggle('open');

      if (self.classList.contains('open')) {

         content.style.maxHeight = content.scrollHeight + 'px';
      } else {
         content.style.maxHeight = null;
      }
   })
});

let offset = 0;
const sliderLine = document.querySelector(".slider__line");

document.querySelector(".slider__next").addEventListener("click", function () {
   offset += 270;
   if (offset > 940) {
      offset = 0;
   }
   sliderLine.style.left = -offset + 'px';
})

document.querySelector(".slider__prev").addEventListener("click", function () {
   offset -= 270;
   if (offset < 0) {
      offset = 700;
   }
   sliderLine.style.left = -offset + 'px';
})