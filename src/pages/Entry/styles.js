import styled from "styled-components";

export const $container = styled.div`
  margin: auto;
  width: 90%;
  height: 100vh;
  display: flex;
  //align-items: center;
  //justify-content: center;
  flex-direction: column;

  span {
    font-family: "Raleway";
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 18px;
    color: #ffffff;
  }
`;

export const $header = styled.header`
  margin-top: 25px;
  margin-bottom: 40px;

  p {
    display: inline-block;
    font-family: "Raleway", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 26px;
    line-height: 31px;
    color: #ffffff;
  }
`;

export const $input = styled.input`
  height: 58px;
  width: 326px;
  border-radius: 5px;
  padding-left: 10px;
  border-style: none;
  margin-bottom: 20px;

  ::placeholder {
    font-family: "Raleway";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;

    color: #000000;
  }
`;

export const $button = styled.button`
  width: 326px;
  height: 46px;
  background-color: #a328d6;
  border-radius: 5px;
  border-style: none;

  p {
    font-family: "Raleway";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 23px;
    color: #ffffff;
  }
`;
