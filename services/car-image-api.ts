import { CarProps } from "@/types";

const getCarImages = (car: CarProps, angle?: string) => {
  const url = new URL("https://cdn.imagin.studio/getimage");

  const { make, model, year } = car;

  url.searchParams.append("customer", "hrjavascript-mastery");
  angle && url.searchParams.append("angle", `${angle}`);
  url.searchParams.append("make", make);
  url.searchParams.append("modelFamily", model.split(" ")[0]);
  url.searchParams.append("zoomType", "fullscreen");
  url.searchParams.append("modelYear", year.toString());

  return url.toString();
};

export default getCarImages;
