function useFormatDate(dateToFormat) {
  const date = new Date(dateToFormat);
  const formatedDate = date.toLocaleString("pt-BR");
  return {
    formatedDate,
  };
}

export default useFormatDate;
