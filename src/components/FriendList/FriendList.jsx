// import PropTypes from 'prop-types'
import { FriendListItem } from 'components/FriendListItem/FriendListItem';
import css from './FriendList.module.css';
export const FriendList=({friends})=>{
    return (
        <ul className={css.friendList}>
          {friends.map(friend=> 
          <FriendListItem 
          name={friend.name}
          key={friend.id}
          avatar={friend.avatar}
          isOnline={friend.isOnline}
          />)
          }         
        </ul>
    )
}

// FrienList.propTypes ={
//        friends: PropTypes.arrayOf(PropTypes.number),
//        (avatar: PropTypes.string.isRequired,
//         name: PropTypes.string.isRequired,
//         isOnline: PropTypes.bool.isRequired,
//         id: PropTypes.number.isRequired
//        )
//     }
    

