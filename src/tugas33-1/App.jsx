import React from 'react';
import '../App.css';
import { StyledContainer, StyledTitle, StyledSubTitle, StyledButton } from './scomponent.style';
import { EmotionContainer, EmotionTitle, EmotionSubTitle, EmotionButton } from './emotion.style';
import { LinariaContainer, LinariaTitle, LinariaSubTitle, LinariaButton } from './linaria.style';

function App() {
    return(
        <div>
            <center>
                <h1>Tugas Module 34 ( CSS in JS )</h1>
                <p>Tugas 33.1 (CSS in JS Module)</p>
            </center>

            <h3>Styled Component</h3>
            <StyledContainer>
                <StyledTitle>Selamat datang di perjalanan CSS in JS</StyledTitle>
                <StyledSubTitle>JayJay</StyledSubTitle>

                <StyledButton $primary>Lanjut Belajar!</StyledButton>
                <StyledButton>Kembali</StyledButton>
            </StyledContainer>
            <hr /> <br />
            
            <h3>Emotion</h3>
            <EmotionContainer>
                <EmotionTitle>Selamat datang di perjalanan CSS in JS</EmotionTitle>
                <EmotionSubTitle>JayJay</EmotionSubTitle>

                <EmotionButton primary>Lanjut Belajar!</EmotionButton>
                <EmotionButton>Kembali</EmotionButton>
            </EmotionContainer>
            <hr /> <br />
            
            <h3>Linaria</h3>
            <LinariaContainer>
                <LinariaTitle>Selamat datang di perjalanan CSS in JS</LinariaTitle>
                <LinariaSubTitle>JayJay</LinariaSubTitle>

                <LinariaButton primary>Lanjut Belajar!</LinariaButton>
                <LinariaButton>Kembali</LinariaButton>
            </LinariaContainer>
        </div>
    );
}

export default App;