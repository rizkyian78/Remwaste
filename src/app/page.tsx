"use client";
import CardItem from "@/app/component/CardItem";
import Footer from "@/app/component/Footer";
import React from "react";
import { SkipResponse } from "@/app/model";
import Loading from "@/app/icon/Loading";
import { getDataWasteList } from "@/app/utils/service";
import Stepper from "@/app/component/Stepper";

export default function Home() {
  const [response, setResponse] = React.useState<SkipResponse[] | undefined>();
  const [loading, setLoading] = React.useState(true);
  const [selectedSkip, setSelectedSkip] = React.useState<SkipResponse>();
  const buttonRef = React.useRef(null);

  React.useEffect(() => {
    if (!response) {
      getDataWasteList().then((res) => {
        setLoading(false);
        setResponse(res);
      });
    }
  }, [buttonRef]);

  return (
    <div className="min-h-screen bg-[#121212] text-white">
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex justify-center mb-8 overflow-x-auto">
          <Stepper step={3} />
        </div>

        <div className="max-w-7xl mx-auto px-4 pb-32">
          <h2 className="text-2xl font-bold text-center mb-4">
            Choose Your Skip Size
          </h2>
          <p className="text-gray-400 text-center mb-8">
            Select the skip size that best suits your needs
          </p>
          {loading ? (
            <div className="flex justify-center items-center h-64">
              <Loading />
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {response &&
                response.length > 0 &&
                response.map((skip) => {
                  return (
                    <CardItem
                      id={selectedSkip?.id}
                      key={skip.id}
                      data={skip}
                      onClick={(e) => {
                        setSelectedSkip(e);
                      }}
                    />
                  );
                })}
            </div>
          )}
        </div>
      </main>
      {selectedSkip && <Footer data={selectedSkip} />}
    </div>
  );
}
