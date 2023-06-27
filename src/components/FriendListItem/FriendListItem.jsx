// import PropTypes from 'prop-types'
import css from './FriendListItem.module.css';
export const FriendListItem = ({avatar, name, isOnline, id}) =>{
return (
    <li key={id} clasName={css.friendCard} className={isOnline? css.green: css.red}>
  <span className={css.status}>{isOnline}</span>
  <img className={css.avatar} src={avatar} alt={name} width="48"/>
  <p className={css.name}>{name}</p>
</li>
)
} 