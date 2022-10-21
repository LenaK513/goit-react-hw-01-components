import PropTypes from 'prop-types';
import { Item, Name, Dot, Online, Offline } from './FriendListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  isOnline = true;
  return (
    <Item>
      <Dot />
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <Name>{name}</Name>
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
