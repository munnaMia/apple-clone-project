const navBar = document.querySelector(".navbar");
const homeBtn = document.querySelector("#homeBtn");
const scrollThresHold = 20;

window.addEventListener("scroll", () => {
  console.log(23);
  if (window.scrollY > scrollThresHold) {
    navBar.classList.add("shadow-lg");
    homeBtn.classList.add("block");
    homeBtn.classList.remove("hidden");
  } else {
    navBar.classList.remove("shadow-lg");
    homeBtn.classList.remove("block");
    homeBtn.classList.add("hidden");
  }
});

const imageArray = [
  "../src/images/Products/p1_220x240_crop_center.jpg",
  "../src/images/Products/p4_220x240_crop_center.jpg",
  "../src/images/Products/p5_61c8ce6b-3afa-4276-a285-f98e4d5c7f67_220x240_crop_center.jpg",
  "../src/images/Products/13_220x240_crop_center.jpg",
  "../src/images/Products/p2_ea1ad2a2-ba0d-4dd2-b29a-e51fd931583b_220x240_crop_center.jpg",
  "../src/images/Products/p9_large.jpg",
  "../src/images/Products/p6_large.jpg",
  "../src/images/Products/p5_large.jpg",
  "../src/images/Products/p2_large.jpg",
  "../src/images/Products/p4_large.jpg",
  "../src/images/Products/12_large.jpg",
  "../src/images/Products/p1_large.jpg",
  "../src/images/Products/13_large.jpg",
];
const productBox = document.querySelectorAll(".L-product-box");
const product = document.querySelectorAll(".L-product");

productBox.forEach((element, index) => {
  let orignalImage = product[index].src;
  product[index].addEventListener("mouseover", () => {
    product[index].src = imageArray[index];
  });

  product[index].addEventListener("mouseout", () => {
    product[index].src = orignalImage;
  });
});

function updateClock() {
  const now = new Date();
  const targetDate = new Date("2023-10-01T00:00:00");
  const timeDifference = targetDate - now;

  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  setTimeout(updateClock, 1000);
}
