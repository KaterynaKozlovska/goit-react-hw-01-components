import PropTypes from 'prop-types';

import FriendItem from '../components/friendListItem';

const FriendList = ({ friends }) => {
  return (
    <ul className="friendList">
      {friends.map(({ id, isOnline, avatar, name }) => {
        return (
          <FriendItem
            key={id}
            id={id}
            isOnline={isOnline}
            avatar={avatar}
            name={name}
          />
        );
      })}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};

export default FriendList;
