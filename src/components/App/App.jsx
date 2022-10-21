import { Profile } from 'components/Profile/Profile';
import { Container } from 'components/App/App.styled';
import { Statistics } from 'components/Statistics/Statistics';
import { FriendList } from 'components/FriendList/FriendList';

import user from '../user.json';
import data from '../data.json';
import friends from '../friends.json';

export const App = () => {
  return (
    <Container>
      <div>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </div>
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />;
    </Container>
  );
};
