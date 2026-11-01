import React, { useState } from 'react';
import '../App.css';
import { StyledButton, StyledFrame, StyledTitle, GlobalContainer } from './sComponentTheme.style';
import { EmotionButton, EmotionFrame, EmotionTitle, GlobalEmotionContainer } from './emotionTheme.style';
import { LinariaButton, LinariaFrame, LinariaTitle, GlobalLinariaContainer } from './linariaTheme.style';
import { ThemeProvider as StyledProvider } from 'styled-components';
import { ThemeProvider as EmotionProvider } from '@emotion/react';

function App() {
    // Menampung nilai tema
    const [isDarkMode, setDarkMode] = useState(false);

    // Tema dasar
    const basicTheme = {
        background: 'white',
        color: 'black',
        borderColor: 'black',
        hoverBackground: '#f2f2f2',
    }

    // Tema Dark Mode
    const darkTheme = {
        background: 'black',
        color: 'white',
        borderColor: 'white',
        hoverBackground: '#9f9b9b'
    }

    return (
        <div>
            <center>
                <h1>Tugas Module 34 (CSS in JS)</h1>
                <p>Tugas 33.2 (Theming & Keyframes)</p>
            </center>

            <h3>Styled Component</h3>
            <StyledProvider theme={isDarkMode ? darkTheme : basicTheme}>
                <GlobalContainer>
                    <StyledTitle>Selamat datang di materi JayJay!</StyledTitle>
                    
                    <StyledButton onClick={() => setDarkMode(!isDarkMode)}>
                        Ganti Tema
                    </StyledButton>
                    <StyledFrame>Ayo Belajar Animasi!</StyledFrame>
                </GlobalContainer>
            </StyledProvider>
            <hr /> <br />

            <h3>Emotion</h3>
            <EmotionProvider theme={isDarkMode ? darkTheme : basicTheme}>
                <GlobalEmotionContainer>
                    <EmotionTitle>Selamat datang di materi JayJay!</EmotionTitle>

                    <EmotionButton onClick={() => setDarkMode(!isDarkMode)}>
                        Ganti Tema
                    </EmotionButton>
                    <EmotionFrame>Ayo Belajar Animasi!</EmotionFrame>
                </GlobalEmotionContainer>
            </EmotionProvider>
            <hr /> <br />

            <h3>Linaria</h3>
            <GlobalLinariaContainer className={isDarkMode && 'darkTheme'}>
                <LinariaTitle>Selamat datang di materi JayJay!</LinariaTitle>

                <LinariaButton className={isDarkMode && 'darkTheme'} onClick={() => setDarkMode(!isDarkMode)}>
                    Ganti Tema
                </LinariaButton>
                <LinariaFrame className={isDarkMode && 'darkTheme'}>Ayo Belajar Animasi!</LinariaFrame>
            </GlobalLinariaContainer>



        </div>
    );
}

export default App;