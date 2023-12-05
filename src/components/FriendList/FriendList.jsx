import { ListFriends } from "./FriendList.styled"
import { FriendListItem } from "components/FriendListItem/FriendListItem"
export const FriendList = props => {
  return (<ListFriends className="friend-list">
    {props.friendList.map(friend =>
      <FriendListItem
        key={friend.id}
        avatar={friend.avatar}
        name={friend.name}
        isOnline={friend.isOnline}>
      </FriendListItem>
    )}
</ListFriends>)
}