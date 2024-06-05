export const removeAnimatedNumberShow = () => {
  let animatedNumberElement = document.getElementById("animated-counter");
  if (animatedNumberElement) {
    animatedNumberElement.style.display = "none";
  }
};

export const addAnimatedNumberShow = () => {
  let animatedNumberElement = document.getElementById("animated-counter");
  if (animatedNumberElement) {
    animatedNumberElement.style.display = "block";
  }
};
