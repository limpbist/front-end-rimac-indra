import { useSelector } from "react-redux";
import { Divider } from "../../components/Divider";
import { ArrowIcon } from "../../components/Icons/ArrowIcon";
import { UserIcon } from "../../components/Icons/UserIcon";
import { Layout } from "../../components/Layout";
import { Steps } from "../../components/Steps";
import "./styles.scss";
import { Link } from "react-router-dom";

function Resume() {
  const data = useSelector((state: any) => state.user);

  return (
    <Layout withFooter={false} withBackground={false}>
      <Steps step="two" />
      <div className="resume-container">
      <Link to={'/PlanesyCoberturas'}>
      <button
          className="resume-container__arrow-container"
          onClick={() => {}}
        >
          <ArrowIcon width="20" height="20" color="#4F4FFF" />
          <div>Volver</div>
        </button>
            </Link>

        <h1 className="resume-container__title">Resumen del seguro</h1>
        <div className="resume-container__details">
          <p className="details-card__subtitle">PRECIOS CALCULADOS PARA:</p>
          <div className="details-card__name">
            <UserIcon />
            <p>
              {data.user?.name} {data.user?.lastName}
            </p>
          </div>
          <Divider />
          <div>
            <p className="details-card__title">Responsable de pago</p>
            <p className="details-card__item">DNI: {data?.numberDocument}</p>
            <p className="details-card__item">Celular: {data?.telephone}</p>
          </div>
          <div className="details-card__content">
            <p className="details-card__title">Plan elegido</p>
            <p className="details-card__item">{data.plans?.name}</p>
            <p className="details-card__item">
              Costo del Plan: ${data.plans?.price} al mes
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Resume;
