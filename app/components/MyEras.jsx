"use client";
// Import react functions
import { useEffect, useState } from "react";
// Import styles from the css file.
import classes from "./my-eras-styles.module.css";

function MyEras() {
    // array of all the stored eras
    const [eras, setEras] = useState([])

    // array to store liked songs
    const [likedSongs, setLikedSongs] = useState([]);

    // function to get all docs (eras) from the backend
    async function getAllEras() {
        // fetch the URL 
        const res = await fetch("http://localhost:8080/eras", {
            method: "GET",
        })
        // turn result into JSON
        const resJSON = await res.json()
        setEras(resJSON)
    }

    // function to like a song
    function likeSong(song) {
        // Check if the song is already liked to avoid duplicates
        if (!likedSongs.includes(song)) {
            setLikedSongs([...likedSongs, song]); // Add the new song to the array
        }
    }

    useEffect(() => {
        getAllEras()
    }, [])

    return (
        <div className={classes.erasSection}>
        {
            eras.map((era) => 
                <div>
                    <div key={era.id} className={classes.era}>
                        <h2 className={classes.headers}>Album Name: {era.albumName}</h2>
                        <h3 className={classes.headers}>Album Number: {era.albumNumber}</h3>
                        <h3 className={classes.headers}>Genre: {era.albumGenre}</h3>

                        <table className={classes.table}>
                            <thead>
                                <tr>
                                    <th>Like?</th>
                                    <th></th>
                                    <th>Song Name</th>
                                </tr>
                            </thead>
                            <tbody>
                                {era.albumSongs.map((song, songNumber) => (
                                    <tr key={song}>
                                        <td><button onClick={() => likeSong(song)}>&lt;3</button></td>
                                        <td>{songNumber + 1}</td>
                                        <td>{song}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>                   
                    </div>
                    <br></br>
                    <br></br>
                    </div>
                    
                    
                )
        }
            <div className={classes.likedSongsSection}>
                <h2 className={classes.headers}>Liked Songs:</h2>
                {likedSongs.length > 0 ? (
                    <ul>
                        {likedSongs.map((song) => (
                            <li key={song.id}>{song}</li>
                        ))}
                    </ul>
                ) : (
                    <p>Nothing here! Click the &lt;3 icon to like a song!</p>
                )}
                
                
            </div>

        </div>



    )

    
}

export default MyEras;
