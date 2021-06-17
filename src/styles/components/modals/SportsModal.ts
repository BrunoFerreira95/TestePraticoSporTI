import styled from 'styled-components'

export const Container = styled.div`
    display: block; /* Hidden by default */
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0,0,0); /* Fallback color */
    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */

    div {
        background-color: #fefefe;
        margin: 15% auto; /* 15% from the top and centered */
        padding: 20px;
        border: 1px solid #888;
        width: 20%; /* Could be more or less, depending on screen size */
    }

    button:first-child {
        position: absolute;
        right: 0;
        top: 0;

        margin: 0.5rem 0.5rem;

        border-radius: 0.4rem;

        padding: 0;

        line-height: 0;
    }

    label {
        display: flex;
        transform: translateX('-50%');
        transform: translate('-50%');
    }

    button:last-child {
        background: chartreuse;
        padding: 0.5rem 0.5rem;
        border-radius: 0.5rem;
        border: 1px solid black;
    }
`