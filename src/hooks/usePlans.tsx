import axios from "axios";
import { useEffect, useState } from "react";

function usePlans() {
  const [plan, setPlan] = useState([]);

  useEffect(() => {
    const getPlans = async () => {
      const result = await axios.get(
        `https://rimac-front-end-challenge.netlify.app/api/plans.json`
      );
      setPlan(result.data);
    };

    getPlans();
  }, []);

  return { plan } as any;
}

export default usePlans;
