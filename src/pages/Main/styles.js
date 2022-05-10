import styled from "styled-components";

export const $container = styled.div`
  width: 90%;
  margin: auto;
`;

export const $main = styled.main`
  margin-bottom: 13px;
  width: 326px;
  height: 446px;
  background-color: #ffffff;
  border-radius: 5px;
`;

export const $buttonsBox = styled.div`
  display: flex;
  justify-content: space-between;

  div {
    width: 155px;
    height: 114px;
    background: #a328d6;
    border-radius: 5px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;

    img{
        height: 30px;
    }

    p {
      font-family: "Raleway";
      font-style: normal;
      font-weight: 700;
      font-size: 17px;
      line-height: 20px;
      color: #ffffff;
    }
  }
`;
