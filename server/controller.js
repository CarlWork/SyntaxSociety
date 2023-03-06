

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

  module.exports = {
    getYoutubersData: (req, res) => {
        res.status(200).send(youtubersData)
    }
  }