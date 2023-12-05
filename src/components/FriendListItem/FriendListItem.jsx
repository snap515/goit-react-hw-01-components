import {Friend, OnlineStatus, Avatar, FriendsName} from "./FriendListItem.styled"


export const FriendListItem = ({isOnline, avatar, name}) => {
  return (
    <Friend className="item">
      <OnlineStatus data-isonline = { isOnline } className="status"></OnlineStatus>
      <Avatar className="avatar" src={avatar} alt="User avatar" width="48" />
      <FriendsName className="name">{name }</FriendsName>
    </Friend>)
}