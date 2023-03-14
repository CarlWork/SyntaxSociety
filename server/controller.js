

const podcasts = [
    {
      title: 'Swift by Sundell',
      embeddedLink: 'https://open.spotify.com/embed/episode/0btUSb4VeVSRauj1KrxPLs?utm_source=generator',
      description: 'Swift by Sundell is a podcast about Swift development and Apple platform development.'
    },
    {
      title: 'Under the Radar',
      embeddedLink: "https://open.spotify.com/embed/episode/4Yiz5mfJufBGPNqgvUtljh?utm_source=generator",
      description: 'Under the Radar is a podcast about independent iOS app development.'
    },
    {
        title: 'AppForce1',
        embeddedLink: 'https://open.spotify.com/embed/episode/0Z1DXkbFffOlIkADFgRy37?utm_source=generator',
        description: 'Jeroen Leenarts interviews peers, teachers, and other professionals related to iOS development.'
    }
  ]
  
  const contentCreators = [
    {
      creatorName: 'Paul Hudson',
      video: 'https://www.youtube.com/embed/qk2y-TiLDZo',
      bio: 'Paul Hudson is the founder of "100 Days of Swift" and is currently a Senior Solution Owner at Nokia.',
      linkedin: 'https://www.linkedin.com/in/paulhudson/',
      youtube: 'https://www.youtube.com/c/PaulHudson',
      twitter: 'https://twitter.com/twostraws',
      linkedinName: 'paulhudson',
      youtubeName: 'PaulHudson',
      twitterHandle: '@twostraws'
    },
    {
      creatorName: 'Sean Allen',
      video: 'https://www.youtube.com/embed/uWEblkT0_Zk',
      bio: 'Sean Allen is a former bootcamp graduate that started his youtube channel to share his journey of iOS development.',
      linkedin: 'https://www.linkedin.com/in/seanallen-dev/',
      youtube: 'https://www.youtube.com/c/SeanAllen',
      twitter: 'https://twitter.com/seanallen_dev',
      linkedinName: 'seanallen-dev',
      youtubeName: 'SeanAllen',
      twitterHandle: '@seanallen_dev'
    },
    {
        creatorName: 'Dave Jacobsen',
        video: 'https://www.youtube.com/embed/xJHTyvlsgbM',
        bio: 'Dave Jacobsen is a former Devmountain graduate that is a good source of advice for decisions on learning iOS development.',
        linkedin: 'https://www.linkedin.com/in/davidjacobsen1/',
        youtube: 'https://www.youtube.com/@DaveJacobseniOS/featured',
        twitter: 'https://twitter.com/davejacobseniOS',
        linkedinName: 'davidjacobsen1',
        youtubeName:'Dave Jacobsen',
        twitterHandle: '@DaveJacobseniOS'
    }

  ]
  


  module.exports = {
    getYoutubersData: (req, res) => {
      res.status(200).send(contentCreators)
    },
    getPodcastData: (req, res) => {
      res.status(200).send(podcasts)
    },
    newPodcast: (req, res) => {
      const newPodcast = req.body
      podcasts.push(newPodcast)
      res.status(200).send(podcasts)
    },
    newContentCreator: (req, res) => {
      const newContentCreator = req.body
      contentCreators.push(newContentCreator)
      res.status(200).send(contentCreators)
    }
  }
  
  