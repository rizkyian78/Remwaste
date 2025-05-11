import Warning from "@/app/icon/Warning";

const AlertWarning = () => {
  return (
    <div className="bg-/90 backdrop-blur-sm px-3 py-1.5 rounded-lg flex items-center gap-2">
      <Warning />
      <span className="text-xs font-bold text-yellow-500">
        Not Allowed On The Road
      </span>
    </div>
  );
};

export default AlertWarning;
