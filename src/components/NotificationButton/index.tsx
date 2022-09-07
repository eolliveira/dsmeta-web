import avatarIcon from '../../assets/img/avatar-icon.svg';
import './style.css';

const NotificationButton = () => {
  return (
    <div className='icon-container'>
        <img src={avatarIcon} alt="Icone Avatar" />
    </div>
  );
};

export default NotificationButton;
