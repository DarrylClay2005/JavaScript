// Music Playlist Renderer

// Sample playlist data
const playlist = [
  {
    title: "File Select - Sonic the Hedgehog 3 [OST]", 
    artist: "Sonic The Hedgehog Official Channel",
    duration: "2:10",
    link: "https://www.youtube.com/watch?v=EWi6S5S9o60&list=PLvNp0Boas721ZhOX_U084B4Jrxdr8rJOj&index=2",
    liked: false, // Initialize liked status
  },
  {
    title: "Luma - Super Mario Galaxy",
    artist: "Nintendo Soundtracks",
    duration: "1:32",
    link: "https://www.youtube.com/watch?v=nr-cpmEb7KM",
    liked: false, // Initialize liked status
  },
  {
    title: "Wii Shop Channel Main Theme (HQ)",
    artist: "Rhythm Root",
    duration: "2:08",
    link: "https://youtu.be/yyjUmv1gJEg?si=cMXkbePffzj7KTYn",
    liked: false, // Initialize liked status
  },
];

// Loop through the songs array and create a new <div class="song"> for each song
playlist.forEach((song, index) => {
  const songElement = document.createElement("div");
  songElement.className = "song";

  songElement.innerHTML = `
    <p><strong>${index + 1}. ${song.title}</strong></p>
    <p>Artist: ${song.artist}</p>
    <p>Duration: ${song.duration}</p>
    <a href="${song.link}" target="_blank">Listen</a>
  `;

  document.body.appendChild(songElement);
});

//

// Add audio playback for each song
playlist.forEach((song) => {
  song.audioUrl = `https://www.youtube.com/watch?v=nr-cpmEb7KM${encodeURIComponent(
    song.title
  )}.mp3`; // Replace with actual audio URLs
});

// Let user like or dislike a song
// Add like/unlike functionality
playlist.forEach((song) => {
  song.liked = false; // Initialize liked status
});

// Function to toggle like/unlike a song
function toggleLike(index) {
  const song = playlist[index];
  if (song) {
    song.liked = !song.liked;
    const feedback = song.liked ? "liked" : "unliked";
    console.log(`You have ${feedback} the song: ${song.title}`);
    updateLikeButton(index, song.liked);
  } else {
    console.log("Song not found!");
  }
}

// Function to update the heart button UI
function updateLikeButton(index, liked) {
  const songElement = document.querySelectorAll(".song")[index];
  if (songElement) {
    const heartButton = songElement.querySelector(".heart-button");
    heartButton.textContent = liked ? "❤️" : "🤍";
  }
}

// Add heart buttons to each song
document.addEventListener("DOMContentLoaded", () => {
  const songElements = document.querySelectorAll(".song");
  songElements.forEach((songElement, index) => {
    const heartButton = document.createElement("button");
    heartButton.className = "heart-button";
    heartButton.textContent = "🤍"; // Default to unliked
    heartButton.addEventListener("click", (event) => {
      event.stopPropagation(); // Prevent triggering play on click
      toggleLike(index);
    });
    songElement.appendChild(heartButton);
  });
});

// Show if song was liked or disliked
const songFeedback = (songTitle, liked) => {
  const feedback = liked ? "liked" : "disliked";
  console.log(`You have ${feedback} the song: ${songTitle}`);
}; // Function to like a song
function likeSong(index) {
  const song = playlist[index];
  if (song) {
    songFeedback(song.title, true);
  } else {
    console.log("Song not found!");
  }
}

// Add reference links to each song
playlist.forEach((song) => {
  song.link = `https://www.youtube.com/watch?v=nr-cpmEb7KM${encodeURIComponent(
    song.title
  )}`;
});
// Function to render the playlist
function renderPlaylist(playlist) {
  const playlistContainer = document.createElement("div");
  playlistContainer.id = "playlist";

  playlist.forEach((song, index) => {
    const songElement = document.createElement("div");
    songElement.className = "song";

    songElement.innerHTML = `
            <p><strong>${index + 1}. ${song.title}</strong></p>
            <p>Artist: ${song.artist}</p>
            <p>Duration: ${song.duration}</p>
        `;

    playlistContainer.appendChild(songElement);
  });

  document.body.appendChild(playlistContainer);
}

// Call the function to render the playlist
document.addEventListener("DOMContentLoaded", () => {
  renderPlaylist(playlist);
});
// Function to play a song
function playSong(index) {
  const song = playlist[index];
  if (song) {
    alert(`Now playing: ${song.title} by ${song.artist}`);
  } else {
    alert("Song not found!");
  }
}

// Add event listeners to play songs on click
document.addEventListener("DOMContentLoaded", () => {
  const songElements = document.querySelectorAll(".song");
  songElements.forEach((songElement, index) => {
    songElement.addEventListener("click", () => playSong(index));
  });
});
// Function to find a song by title and return its index
function findSongByTitle(title) {
  return playlist.findIndex(
    (song) => song.title.toLowerCase() === title.toLowerCase()
  );
}

// Example usage
const songTitleToFind = "Song 2";
const songIndex = findSongByTitle(songTitleToFind);
if (songIndex !== -1) {
  console.log(`The song "${songTitleToFind}" is at index ${songIndex}.`);
} else {
  console.log(`The song "${songTitleToFind}" was not found in the playlist.`);
}
// Function to play a 30-second preview of a song
function playSongPreview(index) {
  const song = playlist[index];
  if (song) {
    // Simulating a 30-second preview with a timeout
    console.log(
      `Playing 30-second preview of: ${song.title} by ${song.artist}`
    );
    setTimeout(() => {
      console.log(`Preview ended for: ${song.title}`);
    }, 30000); // 30 seconds
  } else {
    console.log("Song not found!");
  }
}

// Example usage of playSongPreview
const previewIndex = 0; // Change this index to test with different songs
playSongPreview(previewIndex);
