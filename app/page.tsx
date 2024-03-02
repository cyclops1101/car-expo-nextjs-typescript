import { Hero, SearchBar, CustomFilter } from "@/components";
import { getCars } from "@/services/cars-api";
import { CarCard } from "@/components";
import { CarProps } from "@/types";

export default async function Home() {
  const allCars: CarProps[] = await getCars({ model: "corolla" });

  const isDataEmpty = allCars.length < 1 || Array.isArray(allCars);

  return (
    <main className="overflow-hidden">
      <Hero />

      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4x1 font-extrabold">Car Catalogue</h1>
          <p>Explore the cars you might like</p>
        </div>
        <div className="home__filters">
          <SearchBar />
          <div className="home__filter-container">
            <CustomFilter title="fuel" />
            <CustomFilter title="year" />
          </div>
        </div>
        {isDataEmpty ? (
          <section>
            <div className="home__cars-wrapper">
              {allCars?.map((car: CarProps) => (
                <CarCard
                  car={car}
                  key={`${car.make}-${car.model}-${car.year}`}
                />
              ))}
            </div>
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
