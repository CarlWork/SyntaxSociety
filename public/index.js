


const podcastLink = document.querySelector('#podcast-link')
const youtuberLink = document.querySelector('#youtuber-link')
const sectionContainer = document.querySelector('#section-container')

// Get the add media link and section container
const addMediaLink = document.getElementById('add-media-link');
const container = document.querySelector('.section-container');
// Add an event listener to the add media link
addMediaLink.addEventListener('click', (event) => {
  event.preventDefault();
  // Create the HTML for the forms
  const addPodcastFormHTML = `
    <form id="add-podcast-form">
      <label for="podcast-title">Title:</label>
      <input type="text" id="podcast-title" name="podcastTitle"><br>
      <label for="podcast-thumbnail">Latest Video Thumbnail:</label>
      <input type="text" id="podcast-thumbnail" name="podcastThumbnail"><br>
      <label for="podcast-description">Description:</label>
      <textarea id="podcast-description" name="podcastDescription"></textarea><br>
      <button type="submit">Add Podcast</button>
    </form>
  `;
  const addContentCreatorFormHTML = `
    <form id="add-content-creator-form">
      <label for="creator-name">Creator Name:</label>
      <input type="text" id="creator-name" name="creatorName"><br>
      <label for="creator-video">Video:</label>
      <input type="text" id="creator-video" name="creatorVideo"><br>
      <label for="creator-bio">Bio:</label>
      <textarea id="creator-bio" name="creatorBio"></textarea><br>
      <label for="creator-linkedin">LinkedIn:</label>
      <input type="text" id="creator-linkedin" name="creatorLinkedIn"><br>
      <label for="creator-youtube">YouTube:</label>
      <input type="text" id="creator-youtube" name="creatorYouTube"><br>
      <label for="creator-twitter">Twitter:</label>
      <input type="text" id="creator-twitter" name="creatorTwitter"><br>
      <label for="creator-linkedin-name">LinkedIn Name:</label>
      <input type="text" id="creator-linkedin-name" name="creatorLinkedInName"><br>
      <label for="creator-youtube-name">YouTube Name:</label>
      <input type="text" id="creator-youtube-name" name="creatorYouTubeName"><br>
      <label for="creator-twitter-handle">Twitter Handle:</label>
      <input type="text" id="creator-twitter-handle" name="creatorTwitterHandle"><br>
      <button type="submit">Add Content Creator</button>
    </form>
  `;
  // Replace the section container contents with the forms
  sectionContainer.innerHTML = `${addPodcastFormHTML}${addContentCreatorFormHTML}`;
  // Add event listeners to the forms
  const addPodcastForm = document.getElementById('add-podcast-form');
  addPodcastForm.addEventListener('submit', handleAddPodcastFormSubmit);
  const addContentCreatorForm = document.getElementById('add-content-creator-form');
  addContentCreatorForm.addEventListener('submit', handleAddContentCreatorFormSubmit);
});
function handleAddPodcastFormSubmit(event) {
  event.preventDefault();

  // Get the form data
  const formData = new FormData(event.target);

  // Create a new podcast object with the form data
  const newPodcast = {
    title: formData.get('podcastTitle'),
    embeddedLink: formData.get('Link'),
    description: formData.get('podcastDescription')
  };

  // Add the new podcast to the list
  const podcastList = document.querySelector('.podcast-list');
  const newPodcastItem = document.createElement('li');
  newPodcastItem.innerHTML = `
    <h2>${newPodcast.title}</h2>
    <img src="${newPodcast.embeddedLink}" alt="Podcast Embed link">
    <p>${newPodcast.description}</p>
  `;
  podcastList.appendChild(newPodcastItem);

  // Clear the form
  event.target.reset();
}

function handleAddContentCreatorFormSubmit(event) {
  event.preventDefault();

  // Get the form data
  const formData = new FormData(event.target);

  // Create a new content creator object with the form data
  const newContentCreator = {
    name: formData.get('creatorName'),
    video: formData.get('creatorVideo'),
    bio: formData.get('creatorBio'),
    linkedin: formData.get('creatorLinkedIn'),
    youtube: formData.get('creatorYouTube'),
    twitter: formData.get('creatorTwitter'),
    linkedinName: formData.get('creatorLinkedInName'),
    youtubeName: formData.get('creatorYouTubeName'),
    twitterHandle: formData.get('creatorTwitterHandle')
  };

  // Add the new content creator to the list
  const contentCreatorList = document.querySelector('.content-creator-list');
  const newContentCreatorItem = document.createElement('li');
  newContentCreatorItem.innerHTML = `
    <h2>${newContentCreator.name}</h2>
    <video src="${newContentCreator.video}" controls></video>
    <p>${newContentCreator.bio}</p>
    <ul>
      <li><a href="${newContentCreator.linkedin}">${newContentCreator.linkedinName}</a></li>
      <li><a href="${newContentCreator.youtube}">${newContentCreator.youtubeName}</a></li>
      <li><a href="${newContentCreator.twitter}">@${newContentCreator.twitterHandle}</a></li>
    </ul>
  `;
  contentCreatorList.appendChild(newContentCreatorItem);

  // Clear the form
  event.target.reset();
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
          <iframe style="border-radius:12px" src="${podcast.embeddedLink}" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
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
  