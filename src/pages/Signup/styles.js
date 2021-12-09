import styled from 'styled-components';
import '../../fonts/FiraSans/FiraSans-Medium.ttf';
import '../../fonts/FiraSans/FiraSans-Regular.ttf';
import '../../fonts/FiraSans/FiraSans-SemiBold.ttf';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Header = styled.header`
    img{
        width: 150px;
        margin: 20px 0 0 0;
    }
`

export const Section = styled.section`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
        font-size: 24px;
    }
    h2 {
        font-size: 12px;
    }

    button {
        width: 239px;
        height: 30px;
        background-color: #38B6FF;
        color: #FFFFFF;

        font-size: 12px;
        font-weight: 600;

        border: none;
        border-radius: 5px;

        margin: 15px 0px 20px 0px;
    }

    .message {
        font-size: 10px;
        border-top: 1px solid #9398A2; 
        padding: 15px;
    }
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    
    .input {
        width: 239px;
        height: 30px;
        margin-bottom: 15px;

        border: none;
        background-color: rgba(222, 222, 222, 0.4);
        border-radius: 5px;

        padding-left: 10px;

        font-size: 12px;
    }
`