export const FriendListItem = ({ avatar, name, isOnline, id }) => {
    return (
        <li className="friend-item" key={id}>
            {isOnline === true ? (<span className="online">{isOnline}</span>
            ) : (<span className="offline">{isOnline}</span>)}
            <img className="avatar" src="{avatar}" alt="User avatar" width="48" />
            <p className="name">{name}</p>
        </li>
    );
}