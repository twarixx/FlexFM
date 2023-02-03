import {PauseIcon, PlayIcon} from "@heroicons/react/24/solid/index.js";
import {useState} from "react";

function App() {
    const [playing, setPlaying] = useState(false);

    const togglePlayer = () => {
        const player = document.getElementById("player");

        setPlaying(!playing);
        playing ? player.pause() : player.play();
    }

    return (
        <div className="flex flex-col h-screen mx-6">
            <audio id="player" src="https://dash.flexfm.online/listen/flexfm/radio.mp3"></audio>
            <div className="flex flex-row w-full h-full items-center justify-center space-x-6">
                <div className="bg-white/60 w-4/5 h-3/5 rounded-xl">
                    {!playing
                        ? <PlayIcon onClick={togglePlayer} className="h-12 w-12 text-black"/>
                        : <PauseIcon onClick={togglePlayer} className="h-12 w-12 text-black"/>}

                </div>
                <div className="bg-white/60 w-1/5 h-3/5 rounded-xl">
                    <h1 className="text-center m-4 text-lg">Recent Songs</h1>
                </div>
            </div>
        </div>
    )
}

export default App
