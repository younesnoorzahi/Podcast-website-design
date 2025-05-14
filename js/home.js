// Home page specific JavaScript

// Sample episode data for the home page
const latestEpisodes = [
  {
    id: 1,
    title: "The Future of AI",
    description: "We discuss the implications of artificial intelligence with leading researcher Dr. Jane Smith.",
    date: "May 10, 2025",
    duration: "45 min",
    imageUrl: "images/item1.webp",
    audioUrl: "https://example.com/episode1.mp3",
    episodeNumber: 42,
    category: "Technology",
  },
  {
    id: 2,
    title: "Sustainable Living",
    description: "Environmental activist Tom Johnson shares practical tips for reducing your carbon footprint.",
    date: "May 3, 2025",
    duration: "38 min",
    imageUrl: "images/item2.jpg",
    audioUrl: "https://example.com/episode2.mp3",
    episodeNumber: 41,
    category: "Environment",
  },
  {
    id: 3,
    title: "Mental Health Awareness",
    description:
      "Psychologist Dr. Maria Rodriguez discusses the importance of mental health in today's fast-paced world.",
    date: "April 26, 2025",
    duration: "52 min",
    imageUrl: "images/item3.png",
    audioUrl: "https://example.com/episode3.mp3",
    episodeNumber: 40,
    category: "Health",
  },
]

// Mock createAudioPlayer function (replace with your actual implementation)
function createAudioPlayer(card, audioUrl) {
  // This is a placeholder.  You would normally initialize your audio player here.
  console.log(`Initializing audio player for ${audioUrl} in card:`, card)
}

// Load latest episodes on the home page
document.addEventListener("DOMContentLoaded", () => {
  const episodeGrid = document.querySelector(".episode-grid")

  if (episodeGrid) {
    // Clear any existing content
    episodeGrid.innerHTML = ""

    // Add latest episodes
    latestEpisodes.forEach((episode) => {
      const card = createEpisodeCard(episode)
      episodeGrid.appendChild(card)
    })
  }
})

// Function to create an episode card with proper structure
function createEpisodeCard(episode) {
  const card = document.createElement("div")
  card.className = "episode-card"

  card.innerHTML = `
        <div class="episode-image">
            <img src="${episode.imageUrl}" alt="${episode.title}">
            <div class="episode-number">Episode ${episode.episodeNumber}</div>
        </div>
        <div class="episode-content">
            <h3 class="episode-title">${episode.title}</h3>
            <p class="episode-description">${episode.description}</p>
            <div class="episode-meta">
                <span>${episode.date}</span>
                <span>${episode.duration}</span>
            </div>
            <div class="audio-player">
                <div class="progress-container">
                    <div class="progress-bar"></div>
                </div>
                <div class="audio-controls">
                    <button class="play-pause"><i class="fas fa-play"></i></button>
                    <div class="volume-control">
                        <span class="volume-icon"><i class="fas fa-volume-up"></i></span>
                        <div class="volume-slider">
                            <div class="volume-level"></div>
                        </div>
                    </div>
                </div>
            </div>
            <a href="episodes.html#episode-${episode.episodeNumber}" class="episode-link">View Episode Details</a>
        </div>
    `

  // Initialize audio player after the card is added to the DOM
  setTimeout(() => {
    createAudioPlayer(card, episode.audioUrl)
  }, 0)

  return card
}
