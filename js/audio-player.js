// Audio player functionality

// Function to create an audio player for an episode card
function createAudioPlayer(episodeCard, audioUrl) {
    // Create audio element
    const audio = new Audio(audioUrl);
    
    // Get player elements
    const playPauseBtn = episodeCard.querySelector('.play-pause');
    const progressBar = episodeCard.querySelector('.progress-bar');
    const progressContainer = episodeCard.querySelector('.progress-container');
    const volumeLevel = episodeCard.querySelector('.volume-level');
    
    // Set initial volume
    audio.volume = 0.8;
    
    // Play/Pause functionality
    playPauseBtn.addEventListener('click', () => {
        if (audio.paused) {
            // Pause all other audio players first
            document.querySelectorAll('audio').forEach(a => {
                if (a !== audio) a.pause();
            });
            
            // Update all other play buttons
            document.querySelectorAll('.play-pause').forEach(btn => {
                if (btn !== playPauseBtn) {
                    btn.innerHTML = '<i class="fas fa-play"></i>';
                }
            });
            
            audio.play();
            playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
        } else {
            audio.pause();
            playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
        }
    });
    
    // Update progress bar
    audio.addEventListener('timeupdate', () => {
        const progress = (audio.currentTime / audio.duration) * 100;
        progressBar.style.width = `${progress}%`;
    });
    
    // Seek functionality
    progressContainer.addEventListener('click', (e) => {
        const clickPosition = e.offsetX / progressContainer.offsetWidth;
        audio.currentTime = clickPosition * audio.duration;
    });
    
    // Volume control
    volumeLevel.parentElement.addEventListener('click', (e) => {
        const volumeSlider = volumeLevel.parentElement;
        const clickPosition = e.offsetX / volumeSlider.offsetWidth;
        audio.volume = Math.max(0, Math.min(1, clickPosition));
        volumeLevel.style.width = `${audio.volume * 100}%`;
    });
    
    // Reset when audio ends
    audio.addEventListener('ended', () => {
        audio.currentTime = 0;
        playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
    });
    
    // Clean up when leaving the page
    window.addEventListener('beforeunload', () => {
        audio.pause();
    });
    
    return audio;
}

// Function to create episode card HTML
function createEpisodeCard(episode) {
    const card = document.createElement('div');
    card.className = 'episode-card';
    
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
    `;
    
    // Initialize audio player after the card is added to the DOM
    setTimeout(() => {
        createAudioPlayer(card, episode.audioUrl);
    }, 0);
    
    return card;
}