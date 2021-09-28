import React from 'react'
import VideoItems from '../video-items/video-items'
import styles from './video-list.module.css'

const VideoList = ({ videos }) => {

    return (

        <ul className={styles.videolist}>
            {videos.map(video => (<VideoItems video={video} />))}
        </ul>


    )

}

export default VideoList;