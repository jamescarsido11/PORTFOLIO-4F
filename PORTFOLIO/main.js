
const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.id = 'scrollToTopBtn';
scrollToTopBtn.innerHTML = '↑';
document.body.appendChild(scrollToTopBtn);

window.onscroll = () => {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    scrollToTopBtn.style.display = 'flex';
  } else {
    scrollToTopBtn.style.display = 'none';
  }
};

scrollToTopBtn.onclick = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};