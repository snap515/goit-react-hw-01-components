import styled from 'styled-components';

export const ListFriends = styled.ul``;

export const Friend = styled.li`
  display: flex;
  align-items: center;
`;

export const OnlineStatus = styled.span`
  display: block;
  width: 20px;
  height: 20px;
  border-radius: 45%;
  background-color: ${props => (props['data-isonline'] ? 'green' : 'red')};
`;

export const Avatar = styled.img``;

export const FriendsName = styled.p``;
