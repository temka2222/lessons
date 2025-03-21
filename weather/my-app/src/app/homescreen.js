import { Vector } from "./components/assets/Vector";
import { Button } from "./Button";
export const Homescreen = () => {
  return (
    <div>
      <img className="relative w-[1440px] h-[531px]" src="/image 10.png" />
      <div className="   z-10 flex flex-col gap-[40px] absolute left-[1500px] top-[200px]">
        <div className="w-[203px] h-[114px] text-wrap">
          <p className="font-bold text-3xl text-white ">
            Яг одоо захиалаад авах.
          </p>
        </div>
        <Button titile="Захиалах" />
      </div>
    </div>
  );
};
