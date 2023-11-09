import styled from 'styled-components';

export const Table = styled.table`
  max-width: 300px;
  width: 100%;
`;
export const Thead = styled.thead`
  background-color: skyblue;
  font-size: 20px;
`;

export const Tbody = styled.tbody`
  background-color: var(--bg-color);
  tr:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

export const TableString = styled.tr`
  background-color: var(--bg-color);
  font-size: 15px;
  text-align: center;
`;
