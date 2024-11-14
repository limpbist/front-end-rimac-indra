import { useEffect, useState } from "react";
import { ArrowIcon } from "../../components/Icons/ArrowIcon";
import { ForMeIcon } from "../../components/Icons/ForMeIcon";
import { ForSomeoneElseIcon } from "../../components/Icons/ForSomeoneElseIcon";
import { Layout } from "../../components/Layout";
import { Steps } from "../../components/Steps";
import { Card } from "./components/Card";
import { PlansCard } from "./components/PlansCard";
import { Subtitle } from "./components/Subtitle";
import { Title } from "./components/Title/Component";
import "./styles.scss";
import usePlans from "../../hooks/usePlans";
import useUser from "../../hooks/useUser";
import { getAge } from "../../utils/getAge";
import { useDispatch } from "react-redux";
import { getUser } from "../../redux/userSlice";
import { Link } from "react-router-dom";

function Plans() {
  const dispatch = useDispatch();
  const { plan } = usePlans();
  const { list } = plan;
  const { user } = useUser();

  const [selectedPerson, setSelectedPerson] = useState('');
  const [plansToShow, setPlansToShow] = useState([]);

  const handleSelectedPerson = (person: string) => {
    setSelectedPerson(person);

    if (user?.birthDay && plan) {
      const age = getAge(user.birthDay);
      const filteredPlans = list.filter(
        (planItem: { age: number }) => planItem.age < age
      );

      if (person === "me") {
        setPlansToShow(filteredPlans);
      }

      if (person === "someone-else") {
        const discountedPlans = filteredPlans.map(
          (plan: { price: number }) => ({
            ...plan,
            price: plan.price * 0.95,
          })
        );

        setPlansToShow(discountedPlans);
      }
    }
  };

  const [currentPage, setCurrentPage] = useState(0);
  const [maxPages, setMaxPages] = useState(1);

  // Calcula el número máximo de tarjetas por página
  const cardsPerPage = window.matchMedia("(max-width: 700px)").matches ? 1 : 3;

  // Calcula el número máximo de páginas
  useEffect(() => {
    setMaxPages(Math.ceil(plansToShow.length / cardsPerPage));
    dispatch(getUser(user));
  }, [plansToShow, cardsPerPage]);

  // Calcula el índice del último y primer plan en la página actual
  const indexOfLastCard = (currentPage + 1) * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = plansToShow.slice(indexOfFirstCard, indexOfLastCard);

  // Función para cambiar a la página siguiente
  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  // Función para cambiar a la página anterior
  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  };
  return (
    <Layout withFooter={false} withBackground={false}>
      <Steps step="one" />
      <div className="plans-container">
        <Link to={'/'}>
        <button
          className="plans-container__arrow-container"
          onClick={() => {}}
        >
          <ArrowIcon width="20" height="20" color="#4F4FFF" />
          <div>Volver</div>
        </button>
        </Link>

        <Title />
        <Subtitle />
        <div className="plans-container__cards-container">
          <Card
            Icon={ForMeIcon}
            title="Para mi"
            description="Cotiza tu seguro de salud y agrega familiares si así lo deseas."
            selected={selectedPerson === "me"}
            onClick={() => handleSelectedPerson("me")}
          />
          <Card
            Icon={ForSomeoneElseIcon}
            title="Para alguien más"
            description="Realiza una cotización para uno de tus familiares o cualquier persona."
            selected={selectedPerson === "someone-else"}
            onClick={() => handleSelectedPerson("someone-else")}
          />
        </div>
        <div className="plans-container__plans-container">
          {currentCards.map(
            (plan: {
              age: number;
              name: string;
              price: number;
              description: [];
            }) => (
              <PlansCard
                key={plan.age}
                title={plan.name}
                price={plan.price}
                descriptions={plan.description}
              />
            )
          )}
        </div>
        {/* Controles de paginación */}
        {maxPages > 1 && (
          <div className="pagination">
            <button onClick={prevPage} disabled={currentPage === 0}>
              <ArrowIcon width="20" height="20" color="white" />
            </button>
            <span>
              {currentPage + 1}/{maxPages}
            </span>
            <button
              onClick={nextPage}
              disabled={indexOfLastCard >= plansToShow.length}
              className="arrow-reversed"
            >
              <ArrowIcon width="20" height="20" color="white" />
            </button>
          </div>
        )}
      </div>
    </Layout>
  );
}

export default Plans;
