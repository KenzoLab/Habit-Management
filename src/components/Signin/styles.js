import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  img {
    width: 180px;
    margin: 30px 0px 20px 0px;
  }

  h1{
    font-size: 40px;
  }
  
  hr {
    color: #081140;
    width: 80%;
    background-color: #081140;
    margin-bottom: 10px;
  }
  
  span{
    margin-top: 15px;
    font-size: 14px;
  }
  
  a{
    color: #38B6FF;
    cursor: pointer;
    text-decoration: none;
  }

  p{
      margin: 0;
      padding: 0;
      font-size: 12px;
      color: #dc1f1f;
  }

  form{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  `;
