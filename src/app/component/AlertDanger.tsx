import Danger from "@/app/icon/Danger";

const AlertDanger = () => {
  return (
    <div className="bg-red/90 backdrop-blur-sm px-3 py-1.5 rounded-lg flex items-center gap-2">
      <Danger />
      <span className="text-xs font-bold text-red-500">
        Not Suitable for Heavy Waste
      </span>
    </div>
  );
};

export default AlertDanger;
