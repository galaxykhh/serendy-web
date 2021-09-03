import React from 'react';
import styled from 'styled-components';
import { IMAGE1, IMAGE2, IMAGE3, IMAGE4, IMAGE5 } from '../../config';

interface IBlock {
    text: string;
    imagePath: string;
}

const landingBlocks: IBlock[] = [
    {
        text: 'メンバー募集を、',
        imagePath: IMAGE1,
    },
    {
        text: 'スタジオも、',
        imagePath: IMAGE2,
    },
    {
        text: 'メッセージも、',
        imagePath: IMAGE3,
    },
    {
        text: 'すべて、セレンディで！',
        imagePath: IMAGE4,
    },
];

const Blocks: React.FC = () => {

    return (
        <>
            <div style={{ marginTop: '160px'}} />
            {landingBlocks.map((block) => <Block text={block.text} imagePath={block.imagePath} />)}
        </>
    );
};

export default Blocks;

const Block: React.FC<IBlock> = ({text, imagePath}) => {
    return (
    <FlexBox 
        data-aos='fade-up'
        data-aos-anchor-placement='top-center'
        data-aos-duration='1000'
    >
        <LandingText>
            {text}
        </LandingText>
        <CaptureImage imagePath={imagePath} />
    </FlexBox>
    );
}

const FlexBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 120vh;
    padding-bottom: 50px;
`;

const LandingText = styled.div`
    font-size: 50px;
    @media only screen and (max-width: 500px) {
        font-size: 20px;
    }
`;

const CaptureImage = styled.div<{imagePath: string}>`
    width: 375px;
    height: 812px;
    background-image: url(${({ imagePath}) => imagePath});
    background-size: cover;
    margin-top: 30px;
    background-position: center;
    @media only screen and (max-width: 500px) {
        width: 230px;
        height: 500px;
    }
`;

const StartBtn = styled.button`
    all: unset;
    height: 70px;
    border-radius: 40px;
    padding-left: 30px;
    padding-right: 30px;
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
    font-size: 24px;
    text-align: center;
    margin-bottom: 50px;
    cursor: pointer;
    transition: .3s ease;
    &:hover {
        background-color: ${({ theme }) => theme.colors.primaryWithOpacity};
        color: ${({ theme }) => theme.colors.black};
    };
    @media only screen and (max-width: 500px) {
        width: 120px;
        height: 50px;
        font-size: 17px;
    }
`;