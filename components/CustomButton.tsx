"use client";
import { CustomButtonProps } from "@/types";
import Image from "next/image";
import { text } from "stream/consumers";

const CustomButton = ({
  title,
  containerStyles,
  textStyles,
  rightIcon,
  handleClick,
  btnType,
  isDisabled,
}: CustomButtonProps) => {
  return (
    <button
      disabled={false}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
      type={btnType || "button"}
    >
      <span className={`flex-1 ${textStyles}`}>{title}</span>
      {rightIcon && (
        <div className="relative w-6 h-6">
          <Image
            src={rightIcon}
            alt="right-icon"
            fill
            className="object-contain"
          />
        </div>
      )}
    </button>
  );
};

export default CustomButton;
