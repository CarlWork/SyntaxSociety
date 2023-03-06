


const youtubersData = [
    {
      title: "Sean Allen",
      latestVideoTitle: "Expert Advice to Learn iOS Dev & Swift FAST",
      latestVideoLink: "https://www.youtube.com/watch?v=uWEblkT0_Zk",
      latestVideoThumbnail: "https://i.ytimg.com/an_webp/uWEblkT0_Zk/mqdefault_6s.webp?du=3000&sqp=CNysmaAG&rs=AOn4CLCAadg8TYtHiEal7-090PGbfLQPSA",
      description: "Sean Allen is currently an iOS Developer freelancer, Youtuber, and influencer."
    },
    {
      title: "Youtuber",
      latestVideoTitle: "Latest Video",
      latestVideoLink: "https://www.youtube.com/watch?v=video2",
      latestVideoThumbnail: "https://via.placeholder.com/150x100",
      description: "Description"
    },
  ]

  
  const youtuberLink = document.querySelector('#youtuber-link')
  const sectionContainer = document.querySelector('#section-container')

  youtuberLink.addEventListener('click', () => {
    axios.get('/youtubers')
      .then(response => {
        const youtuberHTML = generateYoutuberHTML(response.data)
        sectionContainer.innerHTML = youtuberHTML
        console.log(youtuberHTML)
      })
      .catch(error => {
        console.error(error)
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
