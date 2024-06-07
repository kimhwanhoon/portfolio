// "2024-06-05T22:49:04.393716+00:00" => Output: "June 5, 2024"

export const dateFormatter = (prevDate: string): string => {
  const date = new Date(prevDate);

  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const formattedDate = date.toLocaleDateString("en-US", options);
  return formattedDate;
};
