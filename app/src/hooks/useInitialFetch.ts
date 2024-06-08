import { useState, useEffect } from "react";
import fetchInitialData from "../api/fetchInitialData";
import { DropdownsProps, Token } from "../types/interfaceProps";

const useInitialFetch = (token: Token | null) => {
  const [dropdowns, setDropdowns] = useState<DropdownsProps>({
    type: ["movie", "tv"],
    genresAll: [],
    genresMovie: [],
    genresTv: [],
    languages: [],
  });

  const handleSetDropdown = async () => {
    if (token !== null && token !== undefined) {
      const data: DropdownsProps = await fetchInitialData(token);
      setDropdowns((prev) => ({ ...prev, ...data }));
    }
  };

  useEffect(() => {
    handleSetDropdown();
    // eslint-disable-next-line
  }, [token]);

  return { dropdowns, setDropdowns };
};

export default useInitialFetch;
