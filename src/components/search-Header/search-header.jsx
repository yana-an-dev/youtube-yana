import React, { useRef } from 'react';
import styles from './search-header.module.css'
import './search-header.css'

const SearchHeader = (props) => {
    const inputRef = useRef();

    const handleSearch = () => {

    }
    const onKeyDown = (event) => {
        if (event.key = 'enter') {
            handleSearch()
        }
    }
    const onButtonClick = () => {
        handleSearch()
    }


    return (
        <header className={styles.header}>
            <div className={styles.logos}>
                <div className={styles.bar}>
                    <i className="fas fa-bars"></i>
                </div>
                <img className={styles.logo} src="img/logo.png" alt="youtube-logo" />
                <h1>Youtube</h1>
            </div>
            <div className={styles.search}>
                <input
                    ref={inputRef}
                    onKeyDown={onKeyDown}
                    className={styles.searchinput}
                    type="search"
                    placeholder="search..."></input>
                <button onClick={onButtonClick} className={styles.button}><i className="fas fa-search"></i></button>
            </div>
            <div className={styles.icons}>
                <div className={styles.icon}>
                    <i className="fas fa-microphone"></i>
                    <i className="fas fa-video"></i>
                    <i className="fas fa-th"></i>
                    <i className="far fa-bell"></i>

                </div>
                <a href="https://github.com/yana-an-dev"><img className={styles.profile} src="img/profile.jpg" alt="github-profile" /></a>

            </div>



        </header>
    )
}

    ;

export default SearchHeader;