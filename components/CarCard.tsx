"use client";
import { CarCardProps } from "@/types";
import { useState } from "react";
import Image from "next/image";
import { CustomButton } from ".";
import { calucalateCarRent } from "@/utils";
import { CarDetails } from ".";
import { get } from "http";
import getCarImages from "@/services/car-image-api";

const CarCard = ({ car }: CarCardProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const { make, model, year, city_mpg, transmission, drive } = car;

  const rentalPrice = calucalateCarRent(city_mpg, year);
  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h2 className="car-card__content-title">
          {make} {model}
        </h2>
      </div>
      <p className="flex mt-6 text-[32px] font-extrabold">
        <span className="self-start text-[16px] font-semibold">$</span>
        {rentalPrice}
        <span className="self-end text-[16px] font-medium">/day</span>
      </p>
      <div className="relative w-full h-40 my-3">
        <Image
          alt="car"
          src={getCarImages(car)}
          fill
          priority
          className="object-contain"
        />
      </div>
      <div className="relative flex w-full mt-2">
        <div className="flex group-hover:invisible w-full justify-between text-gray">
          <div className="flex flex-col justify-center items-center gap-2">
            <Image
              alt="steering wheel"
              src={"/steering-wheel.svg"}
              width={20}
              height={20}
            />
            <p className="text-[14px]">
              {transmission === "a" ? "Automatic" : "Manual"}
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <Image alt="tire" src={"/tire.svg"} width={20} height={20} />
            <p className="text-[14px]">{drive.toUpperCase()}</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2">
            <Image alt="gas" src={"/gas.svg"} width={20} height={20} />
            <p className="text-[14px]">{city_mpg} MPG</p>
          </div>
        </div>
        <div className="car-card__btn-container">
          <CustomButton
            title="View More"
            containerStyles="w-full py-[16px] rounded-full bg-primary-blue"
            textStyles="text-white text-[14px] leading-[17px] font-bold"
            rightIcon="/right-arrow.svg"
            handleClick={() => setIsOpen(true)}
          />
        </div>
      </div>
      <CarDetails
        isOpen={isOpen}
        closeModal={() => setIsOpen(false)}
        car={car}
      />
    </div>
  );
};

export default CarCard;
