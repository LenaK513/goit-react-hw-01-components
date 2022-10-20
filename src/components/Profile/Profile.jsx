import PropTypes from 'prop-types';
import {
  Stats,
  Element,
  Label,
  Quantity,
} from 'components/Profile/Profile.styled';
export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <div className="profile">
      <div className="description">
        <img src={avatar} alt="User avatar" className="avatar" />

        <p className="name">{username}</p>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </div>

      <Stats>
        <Element>
          <Label>Followers</Label>
          <Quantity>{followers}</Quantity>
        </Element>
        <Element>
          <Label>Views</Label>
          <Quantity>{views}</Quantity>
        </Element>
        <Element>
          <Label>Likes</Label>
          <Quantity>{likes}</Quantity>
        </Element>
      </Stats>
    </div>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
