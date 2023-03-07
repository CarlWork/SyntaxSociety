


const podcastLink = document.querySelector('#podcast-link')
  const youtuberLink = document.querySelector('#youtuber-link')
  const sectionContainer = document.querySelector('#section-container')

    podcastLink.addEventListener('click', () => {
        axios.get('/podcasts')
        .then(response => {
            const podcastHTML = generatePodcastHTML(response.data)
            sectionContainer.innerHTML = podcastHTML
        })
        .catch(error => {
            console.log(error)
        })
    })


  youtuberLink.addEventListener('click', () => {
    axios.get('/youtubers')
      .then(response => {
        const youtuberHTML = generateYoutuberHTML(response.data)
        sectionContainer.innerHTML = youtuberHTML
      })
      .catch(error => {
        console.log(error)
      })
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
    `
  }).join("")

  return `
    <section class="youtubers">
      ${youtubersHTML}
    </section>
  `
}

function generatePodcastHTML(podcasts) {
    const podcastHTML = podcasts.map((podcast) => {
      return `
        <div class="card">
          <div class="card-header">
            <h2>${podcast.title}</h2>
          </div>
          <div class="card-body">
            <a href="${podcast.latestVideoLink}">
              <img src="${podcast.latestVideoThumbnail}" alt="${podcasts.title}">
            </a>
            <p>${podcast.description}</p>
            <a href="${podcast.latestVideoLink}">
              ${podcast.latestVideoTitle}
            </a>
          </div>
        </div>
      `
    }).join("")
  
    return `
      <section class="Podcasts">
        ${podcastHTML}
      </section>
    `
  }