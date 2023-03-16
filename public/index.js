


const podcastLink = document.querySelector('#podcast-link')
const youtuberLink = document.querySelector('#youtuber-link')
const sectionContainer = document.querySelector('#section-container')
const addMediaLink = document.getElementById('add-media-link')
const container = document.querySelector('.section-container')
addMediaLink.addEventListener('click', (event) => {
  event.preventDefault()
  const addPodcastFormHTML = `
  <div class="form-card">
    <form id="add-podcast-form">
      <label for="podcast-title">Title:</label>
      <input type="text" id="podcast-title" name="podcastTitle" class="form-input" data-tooltip="This is the name of the podcast show"><br>
      <label for="podcast-thumbnail">Embedded Podcast Link:</label>
      <input type="text" id="podcast-thumbnail" name="podcastLink" class="form-input" data-tooltip="In Spotify, click on the three dots next your favorite podcast, select share, then copy the 'embed episode' link into this form."><br>
      <label for="podcast-description">Description:</label>
      <textarea id="podcast-description" name="podcastDescription" class="form-input" data-tooltip="Give a description of your favorite podcast show!"></textarea><br>
      <button type="submit">Add Podcast</button>
    </form>
  </div>
`
const addContentCreatorFormHTML = `
  <div class="form-card">
      <form id="add-content-creator-form">
        <label for="creator-name">Creator Name:</label>
        <input type="text" id="creator-name" name="creatorName" class="form-input" data-tooltip="This is the first and last name of your the content creator you want to add."><br>
        <label for="creator-video">Embedded Video Link:</label>
        <input type="text" id="creator-video" name="creatorVideo" class="form-input" data-tooltip="Select a video you want to share from YouTube, click the 'embed' option, and copy that link into this form."><br>
        <label for="creator-bio">Bio:</label>
        <textarea id="creator-bio" name="creatorBio" class="form-input" data-tooltip="Give a brief description of what this content creator is known for!"></textarea><br>
        <label for="creator-linkedin">LinkedIn:</label>
        <input type="text" id="creator-linkedin" name="creatorLinkedIn" class="form-input" data-tooltip="Enter the LinkedIn profile link"><br>
        <label for="creator-linkedin-name">LinkedIn Name:</label>
        <input type="text" id="creator-linkedin-name" name="creatorLinkedInName" class="form-input" data-tooltip="Enter their LinkedIn username"><br>
        <label for="creator-youtube">YouTube:</label>
        <input type="text" id="creator-youtube" name="creatorYouTube" class="form-input" data-tooltip="Enter the YouTube channel link"><br>
        <label for="creator-youtube-name">YouTube Name:</label>
        <input type="text" id="creator-youtube-name" name="creatorYouTubeName" class="form-input" data-tooltip="Enter the YouTube channel name"><br>
        <label for="creator-twitter">Twitter:</label>
        <input type="text" id="creator-twitter" name="creatorTwitter" class="form-input" data-tooltip="Enter the Twitter profile link"><br>
        <label for="creator-twitter-handle">Twitter Handle:</label>
        <input type="text" id="creator-twitter-handle" name="creatorTwitterHandle" class="form-input" data-tooltip="Enter their Twitter handle"><br>
        <button type="submit">Add Content Creator</button>
      </form>
    </div>
`
  // Replace the section container contents with the forms
  sectionContainer.innerHTML = `${addPodcastFormHTML}${addContentCreatorFormHTML}`
  // Add event listeners to the forms
  const addPodcastForm = document.getElementById('add-podcast-form')
  addPodcastForm.addEventListener('submit', handleAddPodcastFormSubmit)
  const addContentCreatorForm = document.getElementById('add-content-creator-form')
  addContentCreatorForm.addEventListener('submit', handleAddContentCreatorFormSubmit)
  
  const formInputs = document.querySelectorAll('.form-input')
  formInputs.forEach(input => {
    input.addEventListener('mouseover', addToolTip)
    input.addEventListener('mouseout', removeToolTip)
  })

})

const addToolTip = evt => {
  const tooltip = document.querySelector('.tooltip')
  tooltip.classList.toggle('open')
  tooltip.textContent = evt.target.getAttribute('data-tooltip')
  tooltip.style.top = `${evt.pageY}px`
  tooltip.style.left = `${evt.pageX}px`
}

const removeToolTip = evt => {
  const tooltip = document.querySelector('.tooltip')
  tooltip.classList.toggle('open')
}

function handleAddPodcastFormSubmit(event, podcasts) {
  event.preventDefault()

  // Create a new podcast object with the form data
  const newPodcast = {
    title: event.target.elements.podcastTitle.value,
    embeddedLink: event.target.elements.podcastLink.value,
    description: event.target.elements.podcastDescription.value
  }

  newPodcast.embeddedLink = extractYoutubeSrc(newPodcast.embeddedLink)

  // Make a POST request to the server to add the new podcast
  axios.post('/podcasts', newPodcast)
    .then(response => {
      // Generate HTML code for the updated list of podcasts
      const updatedPodcastHTML = generatePodcastHTML(response.data)

      // Replace the existing list of podcasts with the updated list
      // const podcastList = document.querySelector('.Podcasts')
      // podcastList.innerHTML = updatedPodcastHTML
      sectionContainer.innerHTML = updatedPodcastHTML

      event.target.reset()
    })
    .catch(error => {
      console.error(error)
    })
}


  
function handleAddContentCreatorFormSubmit(event) {
  event.preventDefault()

  // Create a new content creator object with the form data
  const newContentCreator = {
    creatorName: event.target.elements.creatorName.value,
    video: event.target.elements.creatorVideo.value,
    bio: event.target.elements.creatorBio.value,
    linkedin: event.target.elements.creatorLinkedIn.value,
    youtube: event.target.elements.creatorYouTube.value,
    twitter: event.target.elements.creatorTwitter.value,
    linkedinName: event.target.elements.creatorLinkedInName.value,
    youtubeName: event.target.elements.creatorYouTubeName.value,
    twitterHandle: event.target.elements.creatorTwitterHandle.value
  }

  newContentCreator.video = extractYoutubeSrc(newContentCreator.video)

  // Make a POST request to the server to add the new content creator
  axios.post('/youtubers', newContentCreator)
    .then(response => {
      // Generate HTML code for the new content creator card
      const newContentCreatorCardHTML = generateYoutuberHTML(response.data)
      console.log(response.data)

      // Add the new content creator card to the list
      sectionContainer.innerHTML = newContentCreatorCardHTML

      event.target.reset()
    })
    .catch(error => {
      console.error(error)
    })
}

  

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
      <section id="content-creator-cards">
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
      </section>
      `
    }).join("")
   return youtubersHTML 
  }
  
  function generatePodcastHTML(podcasts) {
    const podcastHTML = podcasts.map((podcast) => {
      return `
      <section id="podcast-cards">
        <div class="card">
          <div class="card-header">
            <h2>${podcast.title}</h2>
          </div>
          <div class="card-body">
            <iframe style="border-radius:12px" src="${podcast.embeddedLink}" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            <p>${podcast.description}</p>
          </div>
        </div>
      </section>
      `
    }).join("")
    return podcastHTML
    // if (newPodcast) {
    //   const newPodcastHTML = `
    //   <section id="podcast-cards">
    //     <div class="card">
    //       <div class="card-header">
    //         <h2>${newPodcast.title}</h2>
    //       </div>
    //       <div class="card-body">
    //         <iframe style="border-radius:12px" src="${newPodcast.embeddedLink}" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    //         <p>${newPodcast.description}</p>
    //       </div>
    //     </div>
    //   </section>
    //   `
    //   return `
    //     <section class="Podcasts">
    //       ${podcastHTML}
    //       ${newPodcastHTML}
    //     </section>
    //   `
    // } else {
    //   return `
    //     <section class="Podcasts">
    //       ${podcastHTML}
    //     </section>
    //   `
    // }
  }
  

  function extractYoutubeSrc(embedCode) {
    const regex = /src="(.+?)"/g
    const match = regex.exec(embedCode)
    if (match) {
      return match[1]
    }
    return null
  }
  
  const embedCode = '<iframe width="560" height="315" src="https://www.youtube.com/embed/VIDEO_ID" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>'
  const src = extractYoutubeSrc(embedCode)
  console.log(src) 
  