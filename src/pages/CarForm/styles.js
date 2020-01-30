import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 100%;
  margin-left: 290px;
  margin-right: 30px;
  justify-content: center;
  align-items: center;
  color: #fff;

  form {
    padding: 15px;
  

    input {
      width: 100%;
      height: 3rem;
      font-size: 1rem;
      border: 0;
      border-bottom: 1px solid #fff;
      outline: none;
      transition: .2s ease-in-out;
      box-sizing: border-box;
      display: flex;
      background: none;
      border-radius: 4px;
      padding: 0 25px;
      color: #fff;
      margin-top: 40px;

      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
        font-size: 14px;
      }
    }

    select {
      width: 985px;
      text-align: center;
      height: 3rem;
      font-size: 1rem;
      border: 1px solid #fff;
      border-radius: 5px;
      background: none;
      color: #fff;
      font-weight: bold;
      font-size: 14px;
      padding: 15px
    }
    option {
      background: #1f2d40;
      color: #fff;
      font-weight: bold;
      font-size: 14px;
      padding: 15px;
    }

    .big {
      width: 985px;
      text-align: center;
    }

    .lado {
      float: left;
      width: 470px;
      margin: 30px 10px;
    }

    span {
      color: #fb6f91;
      align-self: flex-start;
      margin: 20px;
      font-size: 12px;
    }

    button {
      width: 100px;
      position: relative;
      left: 16%;
      padding: 12px 20px;
      margin: 5px;
      margin-top: 100px;
      height: 45px;
      background: #fff;
      font-weight: bold;
      color: #304a6e;
      border: 0;
      border-radius: 4px;
      font-size: 15px;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.08, '#fff')};
      }
    }

    .blueButton {
      background: none;
      color: #fff;
      border: 1px solid #fff;

      &:hover {
        background: ${darken(0.02, '#0e1823')};
      }
    }
  }
  }
`;
