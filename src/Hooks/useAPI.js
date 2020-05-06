import { useEffect, useState } from "react";

const useAPI = (APIs) => {
  const [state, setState] = useState({
    loading: true,
    error: null,
    data: [],
  });

  useEffect(() => {
    (async () => {
      try {
        const dataArray = await APIs.map(async (api) => {
          const data = await api;
          console.log(data);
          return data;
        });
        console.log(`dataArray : ${dataArray}`);
        setState({ ...state, loading: false, data: dataArray });
      } catch {
        setState({ ...state, error: `Not Found Information!` });
      }
    })();
  }, []);

  if (!APIs) {
    return;
  }
  console.log(state);

  return state;
};

export default useAPI;
