const descriptionText = document.querySelector('#description p');
const links = document.querySelectorAll('.links a');

const messages = {
  "Nautica": "Your files on your personal cloud",
  "Portfolio": "Discover projects, web development and academic achievements",
  "Spotify": "Dive into personally curated playlists",
  "Instagram": "Venture into journeys with photos and moments"
};

links.forEach(link => {
  link.addEventListener('mouseenter', () => {
    const title = link.getAttribute('title');
    descriptionText.textContent = messages[title] || "Explore the portfolio showcasing projects, achievements, web development and academics";
  });

  link.addEventListener('mouseleave', () => {
    descriptionText.textContent = "Explore the portfolio showcasing projects, achievements, web development and academics";
  });
});
