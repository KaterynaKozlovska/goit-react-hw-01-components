import Profile from './profile';
import Statistics from './statistics';
import FriendList from './friendList';
import data from './data.json';
import user from './user.json';
import friends from './friends.json';

export default function App() {
  return (
    <div>
      <Profile
        avatar={user.avatar}
        username={user.username}
        tag={user.tag}
        location={user.location}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
    </div>
  );
}
