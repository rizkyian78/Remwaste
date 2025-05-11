import { SkipResponse } from "@/app/model/Waste";
import { getImageBasedOnSize } from "@/app/utils/helper";
import AlertDanger from "@/app/component/AlertDanger";
import AlertWarning from "@/app/component/AlertWarning";

interface CardItemSkip {
  data: SkipResponse;
  id: number | undefined;
  onClick: (e: SkipResponse) => void;
}
const CardItem: React.FC<CardItemSkip> = ({ data, id, onClick }) => {
  const isSelected = id === data.id;
  return (
    <div
      onClick={() => {
        onClick(data);
      }}
      className="h-auto group relative rounded-lg border-2 p-4 md:p-6 transition-all
        border-[#2A2A2A] hover:border-[#0037C1]/50
        bg-[#1C1C1C] text-white cursor-pointer"
    >
      <div
        className={`relative ${
          !data.allowed_on_road &&
          !data.allows_heavy_waste &&
          "opacity-50 cursor-not-allowed"
        }`}
      >
        <img
          src={getImageBasedOnSize(data.size)}
          alt="4 Yard Skip"
          className="w-full h-40 md:h-48 object-cover rounded-md mb-4"
        />

        <div className="absolute top-3 right-2 z-20 bg-[#0037C1] text-white px-3 py-1 rounded-full text-sm font-bold shadow-md">
          {data.size} Yards
        </div>

        <div className="flex flex-row">
          {!data.allowed_on_road && (
            <div className="p-4">
              <AlertWarning />
            </div>
          )}
          {!data.allows_heavy_waste && (
            <div className="p-3">
              <AlertDanger />
            </div>
          )}
        </div>

        <h3 className="text-lg md:text-xl font-bold mb-2 text-white">
          {" "}
          {data.size} Yards Skip
        </h3>
        <br />
        <div className="flex justify-between items-center mb-4">
          <div>
            <span className="text-xl md:text-2xl font-bold text-[#0037C1]">
              £{data.price_before_vat} /{" "}
              <span className="text-sm text-gray-400 mb-4 md:mb-6">
                {data.hire_period_days} day hire period
              </span>
            </span>
          </div>
        </div>
        <button
          className={`font-bold w-full py-.5 md:py-3 px-4 rounded-md transition-all flex items-center justify-center space-x-2 ${
            isSelected ? "bg-[#0037C1]" : "bg-[#2A2A2A]"
          } text-white  hover:border-[#0037C1] false`}
        >
          <span>{isSelected ? <>Selected</> : <>Select This Skip</>}</span>
        </button>
      </div>
    </div>
  );
};

export default CardItem;
