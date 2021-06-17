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
        justify-content: space-between;
        background: #d1ecd7;
        border-radius: 4px;
        padding: 10px;

        > div strong {
            font-size: 16px;
            line-height: 10px;
            color: #333;
            margin: 10px;

        }

        > div span {
            font-size: 18px;
            margin: 10px;
        }

        button {
            
        }

        img {
            width: 1rem;
            
        }
    }
`