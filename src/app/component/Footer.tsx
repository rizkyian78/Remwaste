import ArrowRight from "@/app/icon/Arrowright";
import { SkipResponse } from "@/app/model";
import { calculateVATPrice } from "@/app/utils/helper";

interface Footer {
  data: SkipResponse;
}
const Footer: React.FC<Footer> = ({ data }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#1C1C1C] border-t border-[#2A2A2A] p-4 animate-slideUp z-50">
      <div className="max-w-7xl mx-auto">
        <div className="lg:hidden">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-medium">{data.size} Yard Skip</h3>
            <div>
              <span className="text-xl font-bold text-[#0037C1]">
                £{calculateVATPrice(data.price_before_vat, data.vat)}{" "}
              </span>
              Included VAT ({data.vat}) %
              <span className="text-sm text-gray-400 ml-2">
                {data.hire_period_days} days
              </span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <button className="btn-secondary w-full">Back</button>
            <button className="btn-primary w-full">Continue</button>
          </div>
        </div>
        <div className="hidden lg:flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div>
              <p className="text-sm text-gray-400">{data.size} Yard Skip</p>
            </div>
            <div>
              <span className="text-2xl font-bold text-[#0037C1]">
                £{calculateVATPrice(data.price_before_vat, data.vat)}{" "}
              </span>
              Included VAT ({data.vat}) %
              <span className="text-sm text-gray-400 ml-2">
                / {data.hire_period_days} day hire
              </span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button>Back</button>
            <button className="bg-[#0037C1] font-semibold rounded px-3 py-1.5 flex items-center gap-2 btn-primary">
              Continue
              <ArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
