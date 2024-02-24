import css from './Profile.module.css';
import clsx from 'clsx';

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={css.profileWrap}>
      <div>
        <img className={css.imageAvatar} src={image} alt="User avatar" />
        <p className={clsx(css.profileText, css.profileTextBold)}>{name}</p>
        <p className={css.profileText}>{'@' + tag}</p>
        <p className={css.profileText}>{location}</p>
      </div>
      <ul className={css.profileList}>
        <li className={css.listItem}>
          <span className={css.profileTextBlack}>Followers</span>
          <span className={clsx(css.profileText, css.profileTextBold)}>
            {stats.followers}
          </span>
        </li>
        <li className={css.listItem}>
          <span className={css.profileTextBlack}>Views</span>
          <span className={clsx(css.profileText, css.profileTextBold)}>
            {stats.views}
          </span>
        </li>
        <li className={css.listItem}>
          <span className={css.profileTextBlack}>Likes</span>
          <span className={clsx(css.profileText, css.profileTextBold)}>
            {stats.likes}
          </span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
