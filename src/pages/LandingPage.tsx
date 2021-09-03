import React, { useEffect } from 'react';
import styled from 'styled-components';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Blocks from '../components/LandingPage/blocks';
import { APPLE_ICON, GOOGLE_ICON, TEXTLOGO_URL } from '../config';

const LandingPage: React.FC = () => {

    useEffect(() => {
        Aos.init();
    },[]);

    return (
        <Wallpaper>
            <Header><LogoImage/></Header>
            <Blocks />
            <MobileBottomBar>
                <GooglePlayButton>
                    <GoogleIcon/><p>ダウンロード</p>
                </GooglePlayButton>
                <AppStoreButton>
                    <AppleIcon/><p>ダウンロード</p>
                </AppStoreButton>
            </MobileBottomBar>
        </Wallpaper>
    );
};

export default LandingPage;

const Wallpaper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    background-color: ${({ theme }) => theme.colors.backgroundWhite};
`;

const Header = styled.div`
    display: flex;
    flex-direction: row;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 90px;
    background-color: ${({ theme }) => theme.colors.backgroundWhite};
    z-index: 9999;
`;

const MobileBottomBar = styled.div`
    display: flex;
    flex-direction: row;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 70px;
    z-index: 9999;
`;

const GooglePlayButton = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: black;
    width: 100%;
    color: white;
`;

const AppStoreButton = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: white;
    color: black;
    width: 100%;
`;

const LogoImage = styled.div`
    width: 350px;
    height: 100px;
    background-image: url(${TEXTLOGO_URL});
    background-size: cover;
    margin-top: 30px;
    background-position: center;
    /* @media only screen and (max-width: 500px) {
        width: 450px;
        height: 450px;
    } */
`;

const GoogleIcon = styled.div`
    width: 23px;
    height: 23px;
    background-image: url(${GOOGLE_ICON});
    background-size: cover;
    color: white;
    background-position: center;
    /* @media only screen and (max-width: 500px) {
        width: 450px;
        height: 450px;
    } */
`;

const AppleIcon = styled.div`
    width: 30px;
    height: 30px;
    background-image: url(${APPLE_ICON});
    background-size: cover;
    background-position: center;
    /* @media only screen and (max-width: 500px) {
        width: 450px;
        height: 450px;
    } */
`;