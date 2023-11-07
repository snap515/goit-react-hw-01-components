import { Profile } from "./Profile/Profile";
import { Statistics } from "./Statistics/Statistics";
import { FriendList } from "./FriendList/FriendList";
import { TransactionHistory } from "./TransactionHistory/TransactionHistory";

import user from 'data/user'
import data from 'data/data'
import friends from 'data/friends'
import transactions from 'data/transactions'

export const App = () => {
  return (
    <div
      style={{
        // height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        backgroundColor: 'rgb(220, 220, 220)'
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats} />
      
      <Statistics 
        data={data}
        title= "Upload stats"
      />

      <FriendList friendList={friends} />

    
      <TransactionHistory transacstionList={ transactions} />
    </div>
  );
};