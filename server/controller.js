

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

const podcastData = [
    {
    title: "CodeNewbie",
    latestVideoTitle: "S19:E2 - How to Learn Swift and get into iOS Development",
    latestVideoLink: "https://open.spotify.com/episode/3pbRZsAsBYqZ0v6aA7CYMl?si=ryD0PPAxQvCnXhc1zZ4Nvw",
    latestVideoThumbnail: "https://i.scdn.co/image/ab6765630000ba8ad378fff418f60055bd6634e8",
    description: "In this episode we talk about Swift and iOS development with Marc Aupont, senior IOS engineer at Nike. Marc talks about transitioning from a career in IT to iOS development, why he prefers iOS development over web development, and how you can start to code in the iOS language Swift without needing to buy expensive Apple products, which can be a huge barrier to entry for many communities."
    }
]






  module.exports = {
    getYoutubersData: (req, res) => {
        res.status(200).send(youtubersData)
    },
    getPodcastData: (req,res) => {
        res.status(200).send(podcastData)
    }
    
  }