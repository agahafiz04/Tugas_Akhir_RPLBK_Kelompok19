import React, { useState } from 'react';
import { tracks } from './listdata';
import "./track.css";

function Tracklist() {
  const [currentItemIndex, setCurrentIndex] = useState(0);
  const currentTracks = tracks[currentItemIndex];

  const previousTracks = () => {
    let currentIndex = currentItemIndex - 1;
    if (currentIndex < 0) {
      currentIndex = tracks.length - 1;
    }
    setCurrentIndex(currentIndex);
  };
  const nextTracks = () => {
    let currentIndex = currentItemIndex + 1;
    if (currentIndex > tracks.length - 1) {
      currentIndex = 0;
    }
    setCurrentIndex(currentIndex);
  };
  const randomTracks = () => {
    const idx = Math.floor(Math.random() * tracks.length);
    setCurrentIndex(idx);
  };

  return (
    <div>
      <main>
        <section className="container">
          <article className="tracky">
            <div className="img-container">
              <img src={currentTracks.gambar} id="person-img" alt="" />
            </div>
            <h3>{currentTracks.nama}</h3>
            <h4>{currentTracks.arranger}</h4>
            <h5>{currentTracks.deskripsi}</h5>
            <div className="button-container">
              <button
                className="prev-btn"
                onClick={previousTracks}
                title="left"
              >
                &#x2039;
              </button>
              <button className="next-btn" onClick={nextTracks} title="right">
                &#x203A;
              </button>
            </div>
            <button className="random-btn" onClick={randomTracks}>Random Tracks</button>
          </article>
        </section>
      </main>
    </div>
  );
}

export default Tracklist;
