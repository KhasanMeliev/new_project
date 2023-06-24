import { styled } from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #34495e;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Box = styled.div`
  width: 350px;
  height: 450px;
  background-color: #22313f;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h1 {
    font-size: 20px;
    color: #e4f1fe;
  }
`;
export const People = styled.div`
  width: 90%;
  height: 75%;
  overflow: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;
export const Person = styled.div`
  width: 100%;
  height: 25%;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
  }

  div {
    width: 85%;
    margin-left: 10px;
    color: #e4f1fe;

    h3 {
      margin: 0;
    }
    p {
      margin: 0;
      font-size: 14px;
    }
  }
`;
export const Button = styled.button`
  width: 250px;
  height: 40px;
  background-color: #34495e;
  color: #e4f1fe;
  border: none;
  border-radius: 4px;
  font-size: 20px;
  cursor: pointer;
`;
