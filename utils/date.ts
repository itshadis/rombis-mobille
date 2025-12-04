const MonthsId = [
    "Januari","Februari","Maret","April","Mei","Juni",
    "Juli","Agustus","September","Oktober","November","Desember"
  ];

export const formatIdDate = (isoString: string | Date, fullMonth?: boolean) => {
  const date = new Date(isoString);

  const day = String(date.getDate()).padStart(2, "0");
  const rawMonth = String(date.getMonth() + 1).padStart(2, "0"); 
  const year = date.getFullYear();

  const month = fullMonth ? MonthsId[date.getMonth()] : rawMonth;

  if(fullMonth) {
    return `${day} ${month} ${year}`;
  }
  return `${day}-${rawMonth}-${year}`;
};
