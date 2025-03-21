import { Vector } from "./components/assets/Vector";
export const Button = (props) => {
  return (
    <div>
      <button className=" w-[160px] h-[54px] flex flex-row gap-[4.5px] px-[22.5px] py-[4.5px] text-[#AA714A] rounded-[5.6px] border-solid border border-[#AA714A] bg-white items-center justify-center">
        {props.title}
        <Vector />
      </button>
    </div>
  );
};
