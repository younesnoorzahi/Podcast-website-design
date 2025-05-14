// Episodes page specific JavaScript

// Sample episode data for all episodes
const allEpisodes = [
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
  {
    id: 4,
    title: "The Art of Storytelling",
    description: "Award-winning author James Wilson shares his approach to crafting compelling narratives.",
    date: "April 19, 2025",
    duration: "49 min",
    imageUrl: "images/item4.webp",
    audioUrl: "https://example.com/episode4.mp3",
    episodeNumber: 39,
    category: "Arts",
  },
  {
    id: 5,
    title: "Exploring Space Exploration",
    description: "NASA scientist Dr. Robert Lee discusses recent discoveries and the future of space exploration.",
    date: "April 12, 2025",
    duration: "56 min",
    imageUrl: "images/item5.jpg",
    audioUrl: "https://example.com/episode5.mp3",
    episodeNumber: 38,
    category: "Science",
  },
  {
    id: 6,
    title: "Financial Freedom",
    description:
      "Financial advisor Sarah Thompson shares strategies for building wealth and achieving financial independence.",
    date: "April 5, 2025",
    duration: "43 min",
    imageUrl: "images/item6.webp",
    audioUrl: "https://example.com/episode6.mp3",
    episodeNumber: 37,
    category: "Finance",
  },
]

// Dummy createAudioPlayer function to avoid errors.  In a real application,
// this would be properly imported or defined.
function createAudioPlayer(card, audioUrl) {
  console.log("Creating audio player for:", audioUrl)
  // Add your audio player initialization logic here
}

// Initialize episodes page
document.addEventListener("DOMContentLoaded", () => {
  const episodesGrid = document.getElementById("episodes-grid")
  const searchInput = document.getElementById("episode-search")
  const categorySelect = document.getElementById("category-select")
  const resetButton = document.getElementById("reset-filters")
  const noResults = document.getElementById("no-results")

  if (!episodesGrid) return

  // Function to filter episodes
  function filterEpisodes() {
    const searchTerm = searchInput.value.toLowerCase()
    const category = categorySelect.value

    const filteredEpisodes = allEpisodes.filter((episode) => {
      const matchesSearch =
        episode.title.toLowerCase().includes(searchTerm) || episode.description.toLowerCase().includes(searchTerm)

      const matchesCategory = category === "all" || episode.category === category

      return matchesSearch && matchesCategory
    })

    // Clear grid
    episodesGrid.innerHTML = ""

    // Show or hide no results message
    if (filteredEpisodes.length === 0) {
      noResults.classList.remove("hidden")
    } else {
      noResults.classList.add("hidden")

      // Add filtered episodes
      filteredEpisodes.forEach((episode) => {
        const card = createEpisodeCard(episode)
        episodesGrid.appendChild(card)
      })
    }
  }

  // Initial load of all episodes
  allEpisodes.forEach((episode) => {
    const card = createEpisodeCard(episode)
    episodesGrid.appendChild(card)
  })

  // Set up event listeners
  searchInput.addEventListener("input", filterEpisodes)
  categorySelect.addEventListener("change", filterEpisodes)

  resetButton.addEventListener("click", () => {
    searchInput.value = ""
    categorySelect.value = "all"
    filterEpisodes()
  })
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
