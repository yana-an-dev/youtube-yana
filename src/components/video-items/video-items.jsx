import React from 'react';
import styles from './video-items.module.css'

const VideoItems = ({ video: { snippet } }) => (
    <li className={styles.videoitem}>
        <img src={snippet.thumbnails.medium.url} alt="thumbnails"></img>
        <h3>{snippet.title}</h3>
        <p>{snippet.channelTitle}</p>

    </li>
);

export default VideoItems;