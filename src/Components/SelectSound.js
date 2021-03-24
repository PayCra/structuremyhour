import React from "react";
import {Select} from "antd";
import "antd/dist/antd.css";

const {Option} = Select; //this means const Option = Select.Option

function SelectSound () {

    const availableSounds = (
        <Select defaultValue={"tap"} style={{ width: 131 }}>
            <Option value={"tap"}>tap</Option>
            <Option value={"3 taps"}>3 taps</Option>
            <Option value={"work"}>work</Option>
            <Option value={"break"}>break</Option>
            <Option value={"Polish random"}>Polish random</Option>
        </Select>
    );

    return (
        <div>
            {availableSounds}
        </div>
    )
}

export default SelectSound;
