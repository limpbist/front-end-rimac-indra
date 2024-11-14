import { Divider } from "../../../../components/Divider";
import { HomeIcon } from "../../../../components/Icons/HomeIcon";
import { usePlanCard } from "../../../../hooks/usePlanCard";
import { PlanCardProps } from "./interfaces";
import "./styles.scss";

export const PlansCard = ({ title, price, descriptions }: PlanCardProps) => {
  const { handleSelectPlan } = usePlanCard();

  return (
    <div className="plan-card-container">
      <div>
        {price>50 && (
        <h2 className="chip-form">Plan Recomendado</h2>
        )}
        <div className="plan-card-container__title-container">
          <div className="title-container__title">{title}</div>
          <HomeIcon />
        </div>
        <div className="plan-card-container__cost-title">COSTO DEL PLAN</div>
        <div className="plan-card-container__price">${price} al mes</div>
        <Divider />
        <div className="plan-card-container__descriptions-container">
          {descriptions.map((description, index) => (
            <div key={index} className="description-container__description">
              <div className="description__point"></div>
              <div className="description__content">{description}</div>
            </div>
          ))}
        </div>
      </div>
      <button
        className="plan-card-container__button"
        onClick={() => handleSelectPlan(title, price)}
      >
        Seleccionar Plan
      </button>
    </div>
  );
};
