import PropTypes from 'prop-types';
import { Item } from './FriendListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline = false }) => {
  return (
    <Item>
      <span className="status">{(isOnline = true ? 'online' : 'offline')}</span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </Item>
  );
};

FriendListItem.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};
