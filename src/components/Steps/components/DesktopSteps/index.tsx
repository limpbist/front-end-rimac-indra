import { StepsProps } from "../../interfaces";

export const DesktopSteps = ({ step }: StepsProps) => {
  return (
    <div className='steps-container__content desktop-steps'>
      <div className='content__step'>
        <div className={`step__number ${step === "one" ? "fill" : "outline"}`}>
          1
        </div>
        <div
          className={`step__text ${
            step === "one" ? "strong-color" : "soft-color"
          }`}
        >
          Planes y coberturas
        </div>
      </div>
      <div className='content__divider'>- - - -</div>
      <div className='content__step'>
        <div className={`step__number ${step === "two" ? "fill" : "outline"}`}>
          2
        </div>
        <div
          className={`step__text ${
            step === "two" ? "strong-color" : "soft-color"
          }`}
        >
          Resumen
        </div>
      </div>
    </div>
  );
};
