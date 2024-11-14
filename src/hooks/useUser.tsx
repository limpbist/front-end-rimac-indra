import { useEffect, useState } from "react";
import axios from "axios";

function useUser() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    const getUser = async () => {
      const result = await axios.get(
        `https://rimac-front-end-challenge.netlify.app/api/user.json`
      );
      setUser(result.data);
    };

    getUser();
  }, []);

  return { user } as any;
}

export default useUser;
