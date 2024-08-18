import {Tabs} from "antd";
import Cocktail from "./Cocktail";
import Whisky from "./Whisky";
import NonAlcohol from "./NonAlcohol";

export default () => <>
    <Tabs
        style={{
            backgroundColor: '#fff',
            fontFamily: 'Fira Sans'
        }}
        defaultActiveKey="1"
        centered
        animated
        items={[
            {
                label: `Cocktail`,
                key: `1`,
                children: Cocktail()
            },
            {
                label: `Whisky`,
                key: `2`,
                children: Whisky()
            },
            {
                label: `Non-Alcohol`,
                key: `3`,
                children: NonAlcohol()
            },
        ]}
    />
</>

