import styled from 'styled-components';

export const StatSection = styled.section``;

export const Title = styled.h2``;
export const StatList = styled.ul``;
export const StatElement = styled.li`
  background-color: #${() => {
      return Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0);
    }};
`;
export const StatLabel = styled.span``;
export const StatPercent = styled.span``;
