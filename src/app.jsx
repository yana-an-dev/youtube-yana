
import './app.module.css'
import SearchHeader from './components/search-Header/search-header';
import VideoList from './components/video-list/video-list';
import { useState, useEffect } from 'react';

function App() {
  const [videos, setVideos] = useState([])

  useEffect(() => {
    let requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyDVurpLuofGfRPY-YLa67zIPMSfBiu1aGw", requestOptions)
      .then(response => response.json())
      .then(result => { setVideos(result.items) })
      .catch(error => console.log('error', error));
  }, [])

  return (
    <>
      <SearchHeader />
      <VideoList videos={videos} />
    </>
  );
}

export default App;
