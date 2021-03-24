import React from "react";
import "./Alarm.css";
import SelectSound from "./SelectSound";
import SoundOutlined from "@ant-design/icons/lib/icons/SoundOutlined";

function Alarm (props) {
    return (
        <div className="AlarmColor">
            <SoundOutlined/>
            <span>At</span>
            <span className="Minutes">{props.minute}</span>
            <span>play</span>
            <span><SelectSound/></span>
        </div>
    )
}

export default Alarm;
