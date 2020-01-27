import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  height: 150px;
  max-width: 100%;
  margin-left: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #243e5c;

  form {
    display: flex;
    flex-direction: row;

    input {
      background: rgba(0, 0, 0, 0.1);
      width: 600px;
      border: 0;
      border-radius: 4px;
      height: 55px;
      padding: 0 25px;
      color: #fff;
      font-size: 16px;

      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
        font-size: 16px;
      }
    }

    button {
      margin-left: 15px;
      padding: 15px;
      height: 55px;
      background: #fff;
      font-weight: bold;
      color: #304a6e;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.08, '#fff')};
      }
    }
  }
`;
