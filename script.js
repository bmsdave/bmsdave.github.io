const LASTFM_API_KEY = 'e07781fdb72b940ecccaa4e84182695b'; // Замените на ваш API ключ
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
        <img class="now-playing-icon" width="24" height="24" src="/images/now_playing.gif" alt="LastFM">
        now listening to <a href="https://www.last.fm/user/bmsdave" target="_blank" aria-label="LastFM">🎵 ${track.name} - ${track.artist['#text']}</a>
      `;
    }
  } catch (error) {
    console.error('Error fetching Last.fm data:', error);
    document.getElementById('lastfm-track').innerHTML = '<p>Error loading track info</p>';
  }
}

// Обновляем каждые 30 секунд
getNowPlaying();
setInterval(getNowPlaying, 30000); 