import styled, {css} from "styled-components";
type ButtonPropsType={
    type?: "primary" | "secondary"
}

export const Active=styled.div`
    display: flex;
    gap: 12px;
    justify-content: flex-start;
`

export const Button=styled.button<ButtonPropsType>`
    font-family: "Inter", sans-serif;
    font-weight: 700;
    font-size: 10px;
    line-height: 2;
    border-radius: 5px;
    width: 86px;
    height: 30px;
    
    
    ${props => props.type === "primary" && css<ButtonPropsType>`
        background: #4e71fe;
        color: #fff;
        border: none;
    `}

    ${props => props.type === "secondary" && css<ButtonPropsType>`
        border: 2px solid #4e71fe;
        border-radius: 5px;
        color: #4e71fe;
    `}

    &:hover {
        cursor: pointer;
    }
`