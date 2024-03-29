import { DetailedHTMLProps, FC, forwardRef, InputHTMLAttributes } from "react";

type InputProps = {
  error?: string;
} & DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

export const Input: FC<InputProps> = forwardRef(({ error, ...props }, ref) => {
  return (
    <>
      <input
        {...props}
        ref={ref}
        type="text"
        className={`focus:outline-1 focus:outline-blue-600 ${
          error ? "border-red-600 border-1" : ""
        } border-2 border-gray-300 p-2 rounded-md`}
      />
      {error && <span className="text-red-500 text-sm -mt-4">{error}</span>}
    </>
  );
});
