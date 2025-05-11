import { IStepper } from "@/app/model";
import { steps } from "@/app/utils/helper";

const Stepper: React.FC<IStepper> = ({ step }): React.ReactNode => {
  return (
    <div className="flex flex-col md:flex-row items-start md:items-center justify-center gap-4 md:gap-6">
      {steps.map((item, index) => {
        const Icon = item.icon;
        const isActive = index + 1 <= step;
        const isClickable = index + 1 <= 3;

        return (
          <div key={item.label} className="flex items-center gap-2">
            <button
              disabled={!isClickable}
              className={`flex items-center whitespace-nowrap transition-colors ${
                isActive
                  ? "text-[#0037C1]"
                  : "text-white/60 cursor-not-allowed opacity-50"
              } "cursor-pointer hover:text-[#0037C1]`}
            >
              <Icon />
              <span className="ml-2 text-sm sm:text-base text-white">
                {item.label}
              </span>
            </button>
            {index < steps.length - 1 && (
              <div
                className={`hidden md:block w-12 h-px ${
                  isActive ? "bg-[#0037C1]" : "bg-[#2A2A2A]"
                }`}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Stepper;
