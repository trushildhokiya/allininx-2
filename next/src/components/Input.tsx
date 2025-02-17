import clsx from "clsx";
import type { ChangeEvent, KeyboardEvent, ReactNode, RefObject } from "react";

import Label from "./Label";
import type { toolTipProperties } from "../types";

type InputElement = HTMLInputElement | HTMLTextAreaElement;

interface InputProps {
  small?: boolean;
  left?: ReactNode;
  rightButton?: ReactNode;
  onRightButtonClick?: () => void;
  value: string | number | undefined;
  onChange: (e: ChangeEvent<InputElement>) => void;
  placeholder?: string;
  disabled?: boolean;
  type?: string;
  subType?: string;
  attributes?: { [key: string]: string | number | string[] };
  toolTipProperties?: toolTipProperties;
  inputRef?: RefObject<InputElement>;
  onKeyDown?: (e: KeyboardEvent<InputElement>) => void;
}

const Input = (props: InputProps) => {
  const isTypeTextArea = () => {
    return props.type === "textarea";
  };

  const renderInput = () => {
    const baseClasses = clsx(
      "w-full rounded-full border-none bg-transparent p-4 py-1 text-sm tracking-wider text-white outline-none transition-all duration-200 selection:bg-sky-300 placeholder:text-slate-8 hover:placeholder:text-gray-400 focus:placeholder:text-white sm:py-3 md:text-lg",
      props.disabled && "cursor-not-allowed",
      (props.left || props.rightButton) && "md:rounded-l-none",
      props.small && "text-sm sm:py-[4]"
    );

    const commonProps = {
      ref: props.inputRef,
      placeholder: props.placeholder,
      value: props.value,
      onChange: props.onChange,
      disabled: props.disabled,
      onKeyDown: props.onKeyDown,
      ...props.attributes
    };

    return isTypeTextArea() ? (
      <textarea
        className={baseClasses}
        {...commonProps}
      />
    ) : (
      <input
        type={props.type}
        className={baseClasses}
        {...commonProps}
      />
    );
  };

  return (
    <div className="items-left z-5 flex h-fit w-full flex-col rounded-lg bg-[#1C1C1C] text-lg text-slate-12 md:flex-row md:items-center">
      {props.left && (
        <Label 
          left={props.left} 
          type={props.type} 
          toolTipProperties={props.toolTipProperties} 
        />
      )}
      <div className="flex w-full items-center">
        {renderInput()}
        {props.rightButton && (
          <button 
            onClick={props.onRightButtonClick} 
            className="mr-2 flex items-center justify-center rounded-md p-2 bg-gray-500/50 hover:bg-gray-700"
          >
            {props.rightButton}
          </button>
        )}
      </div>
    </div>
  );
};

export default Input;