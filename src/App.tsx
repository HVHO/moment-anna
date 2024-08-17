import React from 'react';
import './App.css';
import {Button, DatePicker, Divider, Layout, Typography} from "antd";
import Tab from "./tabs/Tab";
import GlobalStyle from "./styles/global";
const { Title } = Typography;
const {Header, Footer, Content} = Layout;

const headerStyle: React.CSSProperties = {
    textAlign: 'center',
    height: 64,
    paddingInline: 48,
    fontSize: 32,
    fontFamily: 'NanumSquareB',
    backgroundColor: '#fff'
};

const footerStyle: React.CSSProperties = {
    textAlign: 'center',
    height: 64,
    paddingInline: 48,
    fontSize: 12,
    fontFamily: 'NanumSquareB',
    color: 'rgba(0,0,0,0.22)',
    backgroundColor: '#fff'
};
export default () => (
    <>
        <GlobalStyle/>
        <Layout style={{backgroundColor: '#fff'}}>
            <Header style={headerStyle} >MOMENT ANNA</Header>
            <Content>
               <Tab />
            </Content>
            <Footer style={footerStyle}>MOMENT ANNA
                2F, 337-31, BUKGAJWA-DONG, SEODAEMUN-GU, SEOUL</Footer>
        </Layout>
    </>
);
