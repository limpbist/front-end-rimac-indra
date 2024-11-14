import { HorizontalLogo } from './components/HorizontalLogo';
import { VerticalLogo } from './components/VerticalLogo';
import { LogoProps } from './interfaces';
import './styles.scss';

export const Logo = ({
  color = 'default',
  variant = 'vertical',
}: LogoProps) => {
  return (
    <div className={`logo-container ${color}`}>
      {variant == 'vertical' ? <VerticalLogo /> : <HorizontalLogo />}
    </div>
  );
};
