import { styled } from '@linaria/react';

const GlobalLinariaContainer = styled.div`
    background: white;
    padding: 10px;
    margin-bottom: 50px;
    border: 1px solid black;
    border-radius: 4px;
    transition: background 0.3s ease-out;

    &.darkTheme {
        background: black;
    }
`

const BaseContainer = styled.div`
    background: white;
    color: black;
    font-weight: bold;
    padding: 10px 8px;
    margin: 20px 10px 60px 10px;
    border: 2px solid black;
    border-radius: 4px;

    &:hover {
        background: #f2f2f2;
    }

    &.darkTheme {
        background: black;
        color: white;
        border: 1px solid white;

        &:hover {
            background: #9f9b9b;
        }
    }
`

const LinariaButton = styled(BaseContainer)`
    cursor: pointer;

    &:active {
        background: white;
    }

    &.darkTheme {
        &:active {
            background: black;
        }
    }
`

const LinariaFrame = styled(BaseContainer)`
    animation: 
        fadeIn 1.5s ease-out infinite,
        bounce 1.5s ease infinite
    ;
    
    @keyframes bounce {
        0%, 20%, 53%, 80%, 100% {
            transform: translate3d(0, 0, 0);
        } 
        
        40%, 43% {
            transform: translate3d(0, -30px, 0);
        }

        70% {
            transform: translate3d(0, -15px, 0);
        }

        90% {
            transform: translate3d(0, -4px, 0);
        }
    }

    @keyframes fadeIn {
        0%, 100% {
            opacity: 1;
        }

        40% {
            opacity: 0.2;
        }
    }
`

const LinariaTitle = styled.h1`
    color: plum;
    text-transform: capitalize;
`

export { GlobalLinariaContainer, LinariaButton, LinariaFrame, LinariaTitle }