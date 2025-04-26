const LASTFM_API_KEY = 'YOUR_API_KEY'; // Замените на ваш API ключ
const LASTFM_USER = 'bmsdave';

async function getNowPlaying() {
  try {
    const response = await fetch(
      `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${LASTFM_USER}&api_key=${LASTFM_API_KEY}&format=json&limit=1`
    );
    const data = await response.json();
    
    const track = data.recenttracks.track[0];
    const nowPlaying = document.getElementById('lastfm-track');
    
    if (track['@attr']?.nowplaying === 'true') {
      nowPlaying.innerHTML = `
        <p>🎵 ${track.name} - ${track.artist['#text']}</p>
      `;
    } else {
      nowPlaying.innerHTML = '<p>Not playing anything right now</p>';
    }
  } catch (error) {
    console.error('Error fetching Last.fm data:', error);
    document.getElementById('lastfm-track').innerHTML = '<p>Error loading track info</p>';
  }
}

// Обновляем каждые 30 секунд
getNowPlaying();
setInterval(getNowPlaying, 30000); 