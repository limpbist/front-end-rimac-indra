import { PhoneIcon } from '../Icons/PhoneIcon';
import { Logo } from '../Logo/Component';
import './styles.scss';

export const Header = () => {
  return (
    <div className="header-container px-mobile-24">
      <Logo />
      <div className="header-container__contact-info">
        <div className="contact-info__text">¡Compra por este medio!</div>
        <div className="contact-info__number">
          <PhoneIcon />
          <div>(01) 411 6001</div>
        </div>
      </div>
    </div>
  );
};
