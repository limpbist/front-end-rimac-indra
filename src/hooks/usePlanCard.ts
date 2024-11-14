import { useNavigate } from "react-router-dom";
import { getPlans } from "../redux/userSlice";
import { useDispatch } from "react-redux";

export const usePlanCard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSelectPlan = (name: string, price: number) => {
    const data = {
      name: name,
      price: price,
    };
    dispatch(getPlans(data));
    navigate("/ResumenDelSeguro");
  };

  return {
    handleSelectPlan,
  };
};
