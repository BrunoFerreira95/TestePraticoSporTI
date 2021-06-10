import styled from 'styled-components'

export const SportList = styled.ul`
    display: inline-grid;
    grid-template-columns: 1fr;
    grid-gap: 10px;
    list-style: none;
    li {
        display: flex;
        align-content: center;
        align-items: center;
        background: #d1ecd7;
        border-radius: 4px;
        padding: 5px;

        > strong {
            font-size: 16px;
            line-height: 10px;
            color: #333;
            margin: 10px;
        }

        > span {
            font-size: 18px;
            font-weight: bold;
            margin: 10px;
        }

        button {
            
        }
    }
`