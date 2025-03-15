import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "components";
import { useState } from "react";

export const AccusativeChallenge = () => {
  const [api, setApi] = useState<CarouselApi | null>(null);

  return (
    <>
      <Carousel
        setApi={setApi}
        className="aspect-square w-full"
        opts={{ watchDrag: false }}
      >
        <CarouselContent>
          <CarouselItem className="flex aspect-square items-center justify-center">
            1
          </CarouselItem>
          <CarouselItem className="flex aspect-square items-center justify-center">
            1
          </CarouselItem>
          <CarouselItem className="flex aspect-square items-center justify-center">
            1
          </CarouselItem>
          <CarouselItem className="flex aspect-square items-center justify-center">
            1
          </CarouselItem>
        </CarouselContent>
      </Carousel>
      <button onClick={() => api?.scrollPrev()}>prev</button>
      <button onClick={() => api?.scrollNext()}>next</button>
    </>
  );
};
