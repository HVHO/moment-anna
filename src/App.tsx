import React from 'react';
import './App.css';
import {Flex, Layout, Typography} from "antd";
import Tab from "./tabs/Tab";
import GlobalStyle from "./styles/global";
import logo from './assets/logo.svg'; // SVG 파일 경로에 맞게 변경

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
            <Header style={headerStyle}>
                <Flex vertical justify={'center'} align={'center'}>
                    <img src={logo} style={{width: '256px', height: 'auto'}}/>
                    <Typography.Text disabled style={{fontFamily: 'Fira Sans'}}>Savor Every Special Moment with a Cocktail to Remember.</Typography.Text>
                </Flex>
            </Header>
            <Content>
                <Tab/>
            </Content>
            <Footer style={footerStyle}>MOMENT ANNA
                2F, 337-31, BUKGAJWA-DONG, SEODAEMUN-GU, SEOUL</Footer>
        </Layout>
    </>
);
