import React from "react";
import ReactDOM from "react-dom";
import AudioPlayer from "../src/components/musicplayer/AudioPlayer";
import tracks from "../src/components/musicplayer/tracks";
import Clock from "../src/components/clock/Clock";
import Tracklist from "./components/tracklist/tracklist";
import Praktikan from "./components/about/about";


const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Clock/>
    <div className="judul">
        <h1>Music Player</h1>
    </div>
   <AudioPlayer tracks={tracks} />
   <div className="judul">
        <h1>Track List</h1>
    </div>
   <Tracklist/> <br/><br/>
   <div className="judul">
        <h1>Praktikan Kelompok 19</h1>
    </div>
   <Praktikan/>
   
  </React.StrictMode>,
  rootElement
);
