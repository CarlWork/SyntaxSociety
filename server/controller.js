const podcasts = [
    {
      title: 'Swift by Sundell',
      latestVideoLink: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      latestVideoThumbnail: 'https://via.placeholder.com/150',
      description: 'Swift by Sundell is a podcast about Swift development and Apple platform development.'
    },
    {
      title: 'Under the Radar',
      latestVideoLink: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      latestVideoThumbnail: 'https://via.placeholder.com/150',
      description: 'Under the Radar is a podcast about independent iOS app development.'
    }
  ]
  
  const contentCreators = [
    {
      creatorName: 'Paul Hudson',
      image: 'https://i.ytimg.com/an_webp/HNXzcAwNqMc/mqdefault_6s.webp?du=3000&sqp=CK_voqAG&rs=AOn4CLAyGf9VQiGkOx_z_KyqTdo1iUKbgw',
      bio: 'Paul Hudson creates Swift and iOS development videos on his YouTube channel.',
      linkedin: 'https://www.linkedin.com/in/paulhudson/',
      youtube: 'https://www.youtube.com/c/PaulHudson',
      twitter: 'https://twitter.com/twostraws',
      linkedinName: 'paulhudson',
      youtubeName: 'PaulHudson',
      twitterHandle: '@twostraws'
    },
    {
      creatorName: 'Sean Allen',
      image: 'https://i.ytimg.com/an_webp/w7SNttwEmkU/mqdefault_6s.webp?du=3000&sqp=CIaSo6AG&rs=AOn4CLAZXufo2w1EHUR9Fa-u_butGB6Yvg',
      bio: 'Sean Allen creates iOS development videos on his YouTube channel.',
      linkedin: 'https://www.linkedin.com/in/seanallen-dev/',
      youtube: 'https://www.youtube.com/c/SeanAllen',
      twitter: 'https://twitter.com/seanallen_dev',
      linkedinName: 'seanallen-dev',
      youtubeName: 'SeanAllen',
      twitterHandle: '@seanallen_dev'
    },
    {
        creatorName: 'Dave Jacobsen',
        image: 'https://i.ytimg.com/an_webp/KjeD3y7SevI/mqdefault_6s.webp?du=3000&sqp=COTao6AG&rs=AOn4CLADpvEwM8FMlaYTTeSBJWbpbSiKVw',
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
    }
  }
  