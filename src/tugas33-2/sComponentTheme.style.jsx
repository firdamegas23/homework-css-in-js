import styled, { keyframes } from 'styled-components';

// Untuk Keyframes animasi
const bounce = keyframes`
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
`

const fadeIn = keyframes`
    0%, 100% {
        opacity: 1;
    }

    40% {
        opacity: 0.2;
    }
`
const GlobalContainer = styled.div`
    background: ${props => props.theme.background};
    padding: 10px;
    margin-bottom: 50px;
    border: 1px solid ${props => props.theme.borderColor};
    border-radius: 4px;
    transition: background 0.3s ease-out;
`

const BaseContainer = styled.div`
    background: ${props => props.theme.background};
    color: ${props => props.theme.color};
    font-weight: bold;
    padding: 10px 8px;
    margin: 20px 10px 60px 10px;
    border: 2px solid ${props => props.theme.borderColor};
    border-radius: 4px;

    &:hover {
        background: ${props => props.theme.hoverBackground};
    }
`

const StyledButton = styled(BaseContainer)`
    cursor: pointer;

    &:active {
        background: ${props => props.theme.background};
    }
`

const StyledFrame = styled(BaseContainer)`
    animation: 
        ${fadeIn} 1.5s ease-out infinite,
        ${bounce} 1.5s ease infinite
    ;
`

const StyledTitle = styled.h1`
    color: plum;
    text-transform: capitalize;
`

export { StyledButton, StyledFrame, GlobalContainer, StyledTitle };
