import { ListFriends, Friend, OnlineStatus, Avatar, FriendsName } from "./FriendList.styled"

export const FriendList = props => {
  return (<ListFriends className="friend-list">
    {props.friendList.map(friend => 
    (<Friend key={ friend.id } className="item">
        <OnlineStatus data-isonline = { friend.isOnline } className="status"></OnlineStatus>
        <Avatar className="avatar" src={friend.avatar} alt="User avatar" width="48" />
        <FriendsName className="name">{friend.name }</FriendsName>
      </Friend>)
    )}
</ListFriends>)
}