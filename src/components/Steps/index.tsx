import { DesktopSteps } from './components/DesktopSteps';
import { MobileSteps } from './components/MobileSteps';
import { StepsProps } from './interfaces';
import './styles.scss';

export const Steps = ({ step }: StepsProps) => {
  return (
    <div className="steps-container">
      <DesktopSteps step={step} />
      <MobileSteps step={step} />
    </div>
  );
};
