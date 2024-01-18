export const formatDate = (date: string) => {
  const originalDate = new Date(date);

  const options: Intl.DateTimeFormatOptions = {
    month: "long",
    year: "numeric"
  };
  const formattedDate = originalDate.toLocaleDateString("en-US", options);

  const monthYearWithComma = formattedDate.replace(" ", ", ");

  return monthYearWithComma;
};
