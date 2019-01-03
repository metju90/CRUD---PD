import { format as dateFormat } from "date-fns";

export default order => {
  const { buyOrSell, date, ...others } = order;
  return Object.assign(
    {},
    { ...others },
    {
      buy: buyOrSell === "Buy" ? true : false,
      validUntil: dateFormat(new Date(date), "DD.MM.YYYY")
    }
  );
};
