import styled from 'styled-components';

export const StatSection = styled.section`
  background-color: var(--bg-color);
  padding-top: 20px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  width: 300px;
`;

export const Title = styled.h2`
  font-size: 20px;
  text-align: center;
  margin-bottom: 20px;
`;
export const StatList = styled.ul`
  display: flex;
`;
export const StatElement = styled.li`
  background-color: #${() => {
      return Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0);
    }};
  width: 300px;
  display: flex;
  padding: 10px;
  flex-direction: column;
  align-items: center;
`;
export const StatLabel = styled.span`
  font-size: 15px;
  margin-bottom: 5px;
`;
export const StatPercent = styled.span`
  font-size: 15px;
`;
