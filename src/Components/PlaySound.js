import React from "react";
import SelectSound from "./SelectSound";
import PlayCircleOutlined from "@ant-design/icons/lib/icons/PlayCircleOutlined";
import "./PlaySound.css";

function PlaySound () {
    return (
    <div>
        <div>
        Play sound:
        </div>
        <div className="Player">
            <button className="PlayButton">
            <PlayCircleOutlined/>
            </button>
            <SelectSound/>
        </div>
    </div>
    )
}

export default PlaySound;