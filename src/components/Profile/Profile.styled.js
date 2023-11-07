import styled from 'styled-components';
export const ProfileTag = styled.div`
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  width: 300px;
`;

export const Desc = styled.div`
  background-color: var(--bg-color);
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Photo = styled.img`
  max-width: 150px;
  border-radius: 45%;
  background-color: yellow;
`;

export const Name = styled.p`
  font-size: 30px;
  margin-bottom: 5px;
`;

export const Tag = styled.p`
  color: var(--secondary-fc);
  font-size: var(--secondary-fs);
  margin-bottom: 5px;
`;

export const Location = styled.p`
  color: var(--secondary-fc);
  font-size: var(--secondary-fs);
`;

export const Stats = styled.ul`
  display: flex;
  justify-content: space-around;
  background-color: rgb(240, 240, 240);
`;

export const StatItem = styled.li`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 10px;
`;

export const Label = styled.span`
  font-size: var(--main-fs);
  color: var(--secondary-fc);
  margin-bottom: 5px;
`;

export const Quantity = styled.span`
  font-size: var(--secondary-fs);
  color: var(--main-fc);
  font-weight: bold;
`;
