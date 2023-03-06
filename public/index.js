const createYoutuberLink = document.querySelector('#youtube-link')
const sectionContent = document.querySelector('#section-content')

createYoutuberLink.addEventListener('click', () => {
  const youtubers = [] // Replace this with an array of YouTuber objects
  const createYoutuberHTML = generateYoutuberHTML(youtubers)
  sectionContent.innerHTML = createYoutuberHTML
})

function generateYoutuberHTML(youtubers) {
  const youtubersHTML = youtubers.map((youtuber) => {
    return `
      <div class="card">
        <div class="card-header">
          <h2>${youtuber.title}</h2>
        </div>
        <div class="card-body">
          <a href="${youtuber.latestVideoLink}">
            <img src="${youtuber.latestVideoThumbnail}" alt="${youtuber.title}">
          </a>
          <p>${youtuber.description}</p>
          <a href="${youtuber.latestVideoLink}">
            ${youtuber.latestVideoTitle}
          </a>
        </div>
      </div>
    `;
  }).join("");

  return `
    <section class="youtubers">
      ${youtubersHTML}
    </section>
  `;
}
