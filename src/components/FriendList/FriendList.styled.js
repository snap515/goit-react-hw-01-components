import styled from 'styled-components';

export const ListFriends = styled.ul`
  background-color: var(--bg-color);
  max-width: 300px;
  width: 100%;
`;

export const Friend = styled.li`
  display: flex;
  align-items: center;
  padding: 10px;

  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

export const OnlineStatus = styled.span`
  display: block;
  width: 10px;
  height: 10px;
  border-radius: 45%;
  margin-right: 5px;
  background-color: ${props => (props['data-isonline'] ? 'green' : 'red')};
`;

export const Avatar = styled.img`
  width: 20px;
`;

export const FriendsName = styled.p`
  font-size: 25px;
`;
