const menuBtn = document.querySelector("#menu-btn");
const openNav = document.querySelector("nav");

menuBtn.addEventListener("click", () => {
  openNav.classList.toggle("open-nav");
});

document.addEventListener("DOMContentLoaded", function () {
  const videos = document.querySelectorAll("video");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.play().catch((error) => {
            console.error("Video oynatılamadı:", error);
          });
          if (!entry.target.dataset.endedListener) {
            entry.target.addEventListener("ended", () => {
              entry.target.currentTime = 0;
              entry.target.play();
            });
            entry.target.dataset.endedListener = "true";
          }
        } else {
          entry.target.pause();
        }
      });
    },
    { threshold: 1 }
  );
  videos.forEach((video) => {
    observer.observe(video);
  });
});
