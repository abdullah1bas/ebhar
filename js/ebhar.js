// mmken be al tor2 de [Url, asm al img be imtdad, asm img 8er amtdad, mmken be loop genrate al num de]
// Get Array Of Imgs
let imgsArray = ["1.jpg", "2.jpg", "3.jpg"];
let counter = 0;
let bulletsBackground = document.querySelectorAll(".bullets-background li");
let rightBackground = document.querySelector(".fa-angle-right");
let leftBackground = document.querySelector(".fa-angle-left");
let backgroundInterval;

function randomizeImgs() {
  
    backgroundInterval = setInterval(() => {
      let randomNum = Math.floor(Math.random() * 3 + 1);
      // Change BackGround Image Url
      // hena ana kda bt7km fe al swar mn al html mesh mn js 3shan al url
      document.querySelector(
        ".landing-page"
      ).style.backgroundImage = `url("../image/${randomNum}.jpg")`;
      // Change Bullet Random
      bulletsBackground.forEach((li) => {
        li.classList.remove("active");
      });
      bulletsBackground.forEach((li) => {
        // 01.jpg
        if (li.dataset.change === `${randomNum}.jpg`) {
          li.classList.add("active");
        }
    
    });
}, 5000);

}
// randomizeImgs();

// console.log(counter)

leftBackground.onclick = function () {
  counter == 0 ? (counter = 2) : counter--;
  document.querySelector(
    ".landing-page"
  ).style.backgroundImage = `url("image/${imgsArray[counter]}")`;
  handleActiveDataChange(bulletsBackground);
};

rightBackground.onclick = function () {
  counter == 2 ? (counter = 0) : counter++;
  document.querySelector(
    ".landing-page"
  ).style.backgroundImage = `url("image/${imgsArray[counter]}")`;
  handleActiveDataChange(bulletsBackground);
};

function handleActiveDataChange(lis) {
  // Remove Active Class From All Childrens
  lis.forEach((li) => {
    li.classList.remove("active");
  });
  lis.forEach((li) => {
    if (li.dataset.change === `${imgsArray[counter]}`) {
      li.classList.add("active");
    }
  });
}