import PropTypes from 'prop-types'
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

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
      PropTypes.exact({
          id: PropTypes.number.isRequired,
          avatar: PropTypes.string.isRequired,
          isOnline: PropTypes.bool.isRequired,
          name: PropTypes.string.isRequired,
      }),
  ),
}

