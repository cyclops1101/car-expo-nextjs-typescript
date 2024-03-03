"use client";
import { ShowMoreProps } from "@/types";
import { useRouter } from "next/navigation";
import { CustomButton } from ".";
import { updateSearchParams } from "@/utils";

const ShowMore = ({ pageNumber, isNext }: ShowMoreProps) => {
  const router = useRouter();

  const handleShowMore = () => {
    const newLimit = (pageNumber + 1) * 10;
    router.push(updateSearchParams("limit", newLimit.toString()), {
      scroll: false,
    });
  };

  return (
    <div className="w-full flex-center gap-5 mt-10">
      {!isNext && (
        <CustomButton
          title="Show More"
          btnType="button"
          containerStyles="bg-primary-blue text-white rounded-full"
          handleClick={handleShowMore}
        />
      )}
    </div>
  );
};

export default ShowMore;
