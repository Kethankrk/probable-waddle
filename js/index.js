const moreText = document.getElementById("more-text");
let moreTextClick = false;

const ShowMoreFunction = (btn) => {
  if (moreTextClick == false) {
    moreTextClick = true;
    btn.textContent = "Show Less";
    moreText.style.display = "block";
  } else {
    moreTextClick = false;
    moreText.style.display = "none";
    btn.textContent = "Show More";
  }
};
