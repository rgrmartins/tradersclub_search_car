import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 40px;
  margin-left: 260px;
  margin-right: 20px;
`;

export const CarTable = styled.table`
  width: 100%;

  tbody td {
    padding: 12px;
    border-bottom: 0.5px solid #eee;
  }

  span {
    display: block;
    font-size: 18px;
    font-weight: bold;
  }

  p {
    margin-top: 10px;
    font-size: 16px;
  }

  strong {
    color: #fff;
    display: block;
    font-size: 22px;
  }
`;
