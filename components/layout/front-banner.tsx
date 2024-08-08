'use client';

import { Card, CardContent } from 'components/ui/card';
import { Clock, Tag } from 'lucide-react';
import { useEffect, useState } from 'react';

export const HotDealBanner = () => {
  const [timeLeft, setTimeLeft] = useState(getRandomTimeWithin24Hours());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1000) {
          clearInterval(timer);
          return 0;
        }
        return prevTime - 1000;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  function getRandomTimeWithin24Hours() {
    return Math.floor(Math.random() * 24 * 60 * 60 * 1000);
  }

  function formatTime(ms) {
    const hours = Math.floor(ms / 3600000);
    const minutes = Math.floor((ms % 3600000) / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  }

  return (
    <Card className="w-full overflow-hidden bg-red-600 text-white">
      <CardContent className="relative p-3 md:p-4">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <div className="mb-2 flex items-center space-x-3 md:mb-0">
            <Tag className="h-6 w-6 text-yellow-300 md:h-8 md:w-8" />
            <span className="text-xl font-bold md:text-2xl">
              Flash Udsalg: 30% rabat på alt snus!
            </span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-2">
              <Clock className="h-5 w-5 md:h-6 md:w-6" />
              <span className="text-sm font-semibold md:text-base">Udsalg slutter:</span>
              <span className="rounded bg-red-700 px-2 py-1 text-sm font-bold md:text-lg">
                {formatTime(timeLeft)}
              </span>
            </div>
            <div className="hidden text-sm md:block md:text-base">
              Brug kode:
              <span className="rounded bg-yellow-400 px-2 py-1 font-bold text-red-600">
                SNUSLOVER30
              </span>
            </div>
          </div>
        </div>
        <div className="mt-2 flex justify-center md:hidden">
          <div className="text-sm">
            Brug kode:
            <span className="rounded bg-yellow-400 px-2 py-1 font-bold text-red-600">
              SNUSLOVER30
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
