import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { AspectRatio } from "../ui/aspect-ratio";

const pexelsImages = [
  {
    title: "Rooms 1",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni fuga facilis tempora dolore vel saepe ipsam quia nulla, aut repellendus ratione mollitia! Quis voluptatem sed nihil minima praesentium, ipsum dolorum?",
    price: "$ 1.99",
    image:
      "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb",
  },
  {
    title: "Rooms 2",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni fuga facilis tempora dolore vel saepe ipsam quia nulla, aut repellendus ratione mollitia! Quis voluptatem sed nihil minima praesentium, ipsum dolorum?",
    price: "$ 2.99",
    image:
      "https://images.pexels.com/photos/53464/sheraton-palace-hotel-lobby-architecture-san-francisco-53464.jpeg?auto=compress&cs=tinysrgb",
  },
  {
    title: "Rooms 3",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni fuga facilis tempora dolore vel saepe ipsam quia nulla, aut repellendus ratione mollitia! Quis voluptatem sed nihil minima praesentium, ipsum dolorum?",
    price: "$ 3.99",
    image:
      "https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb",
  },

  {
    title: "Rooms 4",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni fuga facilis tempora dolore vel saepe ipsam quia nulla, aut repellendus ratione mollitia! Quis voluptatem sed nihil minima praesentium, ipsum dolorum?",
    price: "$ 4.99",
    image:
      "https://images.pexels.com/photos/189296/pexels-photo-189296.jpeg?auto=compress&cs=tinysrgb",
  },
  {
    title: "Rooms 5",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni fuga facilis tempora dolore vel saepe ipsam quia nulla, aut repellendus ratione mollitia! Quis voluptatem sed nihil minima praesentium, ipsum dolorum?",
    price: "$ 5.99",
    image:
      "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb",
  },
];

export function RoomsCarousel() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full"
    >
      <CarouselContent>
        {pexelsImages.map((item, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
            <div className="">
              <Card>
                <CardContent className="flex flex-col justify-center w-full p-0 m-0">
                  <AspectRatio ratio={16 / 9}>
                    <Image
                      src={item.image}
                      alt="Photo by pexels"
                      fill
                      className="rounded-t-sm w-full object-cover"
                    />
                  </AspectRatio>
                  <div className="p-3">
                    <div className="flex items-center justify-between my-2">
                      <h1 className="text-2xl font-medium">{item.title}</h1>
                      <span className="text-lg font-medium">
                        From {item.price}
                      </span>
                    </div>
                    <p className="text-slate-500 text-md mb-4">
                      {item.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="hidden md:block">
        <CarouselPrevious />
        <CarouselNext />
      </div>
    </Carousel>
  );
}
