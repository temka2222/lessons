import { CupIcon } from "./CupIcon";
import { Gift } from "./gift";
import { Card } from "./Card";

export const Header = () => {
  return (
    <div className="w-full flex flex-row items-center ">
      <div className="w-[213px] flex flex-row items-center px-[80px] py-[13px] justify-start">
        <img className="w-[62px] h-[62px]" src="/image 20.png" />
        <div className="flex flex-col">
          <div className="flex flex-row font-bold gap-[4px]">
            <p>Coffee</p>
            <p> namu</p>
          </div>
          <p>Mongolia</p>
        </div>
      </div>
      <div className="  w-[1067px] flex flex-row gap-[50px] justify-end">
        <div className="  flex flex-row gap-[24px]">
          <div className="flex flex-row px-[4px] py-[10px] gap-[4px] ">
            <CupIcon />
            <p>Мэню</p>
          </div>
          <div className="flex flex-row  px-[4px] py-[10px] gap-[4px] ">
            <Gift />
            <p>Бонус</p>
          </div>
          <div className="flex flex-row  px-[4px] py-[10px] gap-[4px] ">
            <Card />
            <p>Захиалга</p>
          </div>
        </div>
        <div className="flex flex-row gap-[24px]">
          <button className="px-[20px] py-[4px] text-[#AA714A] rounded-[15px] border-solid border border-[#AA714A]">
            Нэвтрэх
          </button>
          <button className="px-[20px] py-[4px] text-white     rounded-[15px] border-solid border bg-[#AA714A]">
            Бүртгүүлэх
          </button>
        </div>
      </div>
    </div>
  );
};
