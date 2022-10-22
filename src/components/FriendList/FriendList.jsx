// import PropTypes from 'prop-types';
import { FriendListItem } from 'components/FriendListItem/FriendListItem';

export const FriendList = ({ friends }) => {
    {friends.map(({ avatar, name, isOnline, id }) => {
            <FriendListItem
                avatar={avatar}
                name={name}
                isOnline={isOnline}
                key={id}
            />
        })
    };
}

// FriendList.prototype = {
//     id: PropTypes.number.isRequired,
//     avatar: PropTypes.number.isRequired,
//     name: PropTypes.number.isRequired,
//     isOnline: PropTypes.bool.isRequired,
// }