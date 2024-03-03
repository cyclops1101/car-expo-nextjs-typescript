export const calucalateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50;
  const milaeageFactor = 0.1;
  const ageFactor = 0.05;

  const mileageRate = city_mpg * milaeageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  const rentaRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentaRatePerDay.toFixed(0);
};

export const updateSearchParams = (type: string, value: string) => {
  const searchParams = new URLSearchParams(window.location.search);
  searchParams.set(type, value);

  const newPathName = `${window.location.pathname}?${searchParams.toString()}`;

  return newPathName;
};
