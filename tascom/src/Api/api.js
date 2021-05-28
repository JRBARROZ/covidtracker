const API_URL = "https://api.covid19api.com/summary";
export function GET_SUMMARY() {
  return {
    url: API_URL,
    options: {
      method: "GET",
    },
  };
}
