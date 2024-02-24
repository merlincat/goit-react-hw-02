import css from './FriendListItem.module.css';
// import clsx from 'clsx';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={css.itemInner}>
      <img src={avatar} alt="Avatar" width="88" />
      <p>{name}</p>
      <p className={isOnline ? css.active : css.disable}>
        {isOnline ? 'Online' : 'Offline'}
      </p>
    </div>
  );
};

export default FriendListItem;
