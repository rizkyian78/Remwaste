import Calendar from "@/app/icon/Calendar";
import Car from "@/app/icon/Car";
import Guard from "@/app/icon/Guard";
import PaymentCard from "@/app/icon/PaymentCard";
import Postcode from "@/app/icon/PostCode";
import Trash from "@/app/icon/Trash";

export const getImageBasedOnSize = (size: number): string => {
  switch (true) {
    case size <= 4:
      return "https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/4-yarder-skip.jpg";
    case size > 4 && size <= 16:
      return "https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/16-yarder-skip.jpg";
    case size > 16 && size <= 20:
      return "https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/20-yarder-skip.jpg";
    default:
      return "https://yozbrydxdlcxghkphhtq.supabase.co/storage/v1/object/public/skips/skip-sizes/40-yarder-skip.jpg";
  }
};

export const calculateVATPrice = (basePrice: number, percentage: number) => {
  const vatPercent = percentage / 100;
  const getPercentPrice = basePrice * vatPercent;
  return Math.round(basePrice + getPercentPrice);
};

export const steps = [
  { label: "Postcode", icon: Postcode },
  { label: "Waste Type", icon: Trash },
  { label: "Select Skip", icon: Car },
  { label: "Permit Check", icon: Guard },
  { label: "Choose Date", icon: Calendar },
  { label: "Payment", icon: PaymentCard },
];
