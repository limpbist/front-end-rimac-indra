import { Divider } from '../Divider';
import { Logo } from '../Logo/Component';
import './styles.scss';

export const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-container__content px-mobile-24">
        <div className="content__logo desktop">
          <Logo color="white" />
        </div>
        <div className="content__logo mobile">
          <Logo variant="horizontal" />
        </div>
        <div className="content__divider mobile">
          <Divider mode="dark" />
        </div>
        <div className="content__text">2023 RIMAC Seguros y Reaseguros</div>
      </div>
    </div>
  );
};
