import React from 'react';
import { List } from 'antd';
import {MenuList} from "./MenuList";

export default () => {

    let menu: MenuList = JSON.parse(process.env.REACT_APP_COCKTAIL_LIST as string);

    return <List
        itemLayout="horizontal"
        dataSource={menu.list}
        style={{paddingLeft: 24, paddingRight: 24}}
        renderItem={(item, index) => (
            <List.Item>
                <List.Item.Meta
                    title={item.name}
                    description={item.description}
                />
                <div style={{fontWeight:"bold"}}>{item.price}</div>
            </List.Item>
        )}
    />
};