import styled from 'styled-components';

export const Icon = styled.div`
    width: ${props => props.theme.iconSize}px;
    height: ${props => props.theme.iconSize}px;

    background: white;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 8px;
    margin-bottom: 12px;

    color: black;

    border-radius: 9999px;

    svg {
        height: 36px;
        width: 36px;
    }
`;

export const Content = styled.div`
    background: ${props => props.theme.background};
    flex: 1;
    /* width: 100%; */
    /* height: 100%; */
    padding: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const Header = styled.h1`
    font-weight: 700;
    font-size: 16px;
    font-family: "Inter", ui-sans-serif, system-ui, sans-serif;
    text-align: center;
    word-break: break-word;
    letter-spacing: -0.025em;
    margin-bottom: 8px;
    color: ${props => props.theme.headerColor};
`;

export const SubHeader = styled.h2`
    font-family: "Roboto Slab", sans-serif;
    font-size: 14px;
    font-weight: 500;
    text-align: center;
    color: ${ props => props.theme.subHeaderColor };
`