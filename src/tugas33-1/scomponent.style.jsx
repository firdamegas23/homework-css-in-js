import styled from 'styled-components';

const StyledContainer = styled.div`
    background: #f5f5f5;
    padding: 12px 4px;
    margin: 20px;
    box-sizing: border-box;
    text-align: center;
    border-radius: 4px;
`

const StyledTitle = styled.h1`
    color: red;
    text-transform: capitalize;
`

const StyledSubTitle = styled.h3`
    color: blue;
`

const StyledButton = styled.button`
    background: white;
    padding: 10px 8px;
    margin: 4px 12px;
    font-size: 14px;
    cursor: pointer;
    color: ${props => props.$primary ? 'blue' : 'red'};
    border-radius: 4px;
    border: 1px solid ${props => props.$primary ? 'blue' : 'red'};

    &:hover {
        background: ${props => props.$primary ? 'blue' : 'red'};
        color: white;
    }
    
    $:active {
        background: white;
        color: ${props => props.$primary ? 'blue' : 'red'};
    }
`

export { StyledContainer, StyledTitle, StyledSubTitle, StyledButton }