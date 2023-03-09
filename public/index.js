


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
        const contentCreators = response.data
        const contentCreatorsHTML = generateYoutuberHTML(contentCreators)
        sectionContainer.innerHTML = contentCreatorsHTML
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
            <h2>${youtuber.creatorName}</h2>
          </div>
          <div class="card-body">
          <iframe width="560" height="315" src="${youtuber.video}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </a>
            <p>${youtuber.bio}</p>
            <div class="social-media-links">
              <a id="linkedinLink" href="${youtuber.linkedin}"><i class="fab fa-linkedin"></i> ${youtuber.linkedinName}</a>
              <a id="youtubeLink" href="${youtuber.youtube}"><i class="fab fa-youtube"></i> ${youtuber.youtubeName}</a>
              <a id="twitterLink" href="${youtuber.twitter}"><i class="fab fa-twitter"></i> ${youtuber.twitterHandle}</a>
            </div>
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
          <iframe style="border-radius:12px" src="${podcast.latestVideoThumbnail}" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </a>
            <p>${podcast.description}</p>
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
  