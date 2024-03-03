import { Hero, SearchBar, CustomFilter } from "@/components";
import { getCars } from "@/services/cars-api";
import { CarCard, ShowMore } from "@/components";
import { CarProps, FilterProps } from "@/types";
import { fuels, yearsOfProduction } from "@/constants";

export default async function Home({
  searchParams,
}: {
  searchParams: FilterProps;
}) {
  let allCars: CarProps[] = [];
  allCars = await getCars({
    make: searchParams.make || "",
    model: searchParams.model || "",
    limit: searchParams.limit || 10,
    fuel_type: searchParams.fuel_type || "",
    year: searchParams.year || 2022,
  });

  const isDataEmpty = allCars.length < 1 || !Array.isArray(allCars) || !allCars;

  return (
    <main className="overflow-hidden">
      <Hero />

      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore the cars you might like</p>
        </div>
        <div className="home__filters">
          <SearchBar />
          <div className="home__filter-container">
            <CustomFilter title="fuel" options={fuels} />
            <CustomFilter title="year" options={yearsOfProduction} />
          </div>
        </div>
        {!isDataEmpty ? (
          <section>
            <div className="home__cars-wrapper">
              {allCars?.map((car: CarProps) => (
                <CarCard
                  car={car}
                  key={`${car.make}-${car.model}-${car.year}`}
                />
              ))}
            </div>

            <ShowMore
              pageNumber={(searchParams.limit || 10) / 10}
              isNext={(searchParams.limit || 10) > allCars.length}
            />
          </section>
        ) : (
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">Oops,no results</h2>
            <p>{allCars?.message}</p>
          </div>
        )}
      </div>
    </main>
  );
}
