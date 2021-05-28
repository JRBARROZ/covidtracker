import React from "react";
//i don't use axios couse is desnecessary in this case.
const useFetch = () => {
  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const request = React.useCallback(async (url, options) => {
    let response;
    let json;
    try {
      setError(null);
      setLoading(true);
      response = await fetch(url, options);
      json = await response.json();
      if (response.ok === false) throw new Error("Error to get Summary, Try again later.");
    } catch (error) {
      json = null;
      setError(error.message);
    } finally {
      setData(json);
      setLoading(false);
      return { response, json };
    }
  }, []);
  return {
    data,
    loading,
    error,
    request,
  };
};

export default useFetch;
