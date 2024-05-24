import BannerCarousel from "@/components/banner";
import Comments from "@/components/coments";
import Form from "@/components/form";
import FormNewsletter from "@/components/form-newsletter";
import MainLayout from "@/components/layout/mainLayout";
import { RoomsCarousel } from "@/components/rooms";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AMENITIES } from "@/constants";

import Image from "next/image";

export default function Home() {
  return (
    <MainLayout>
      <BannerCarousel />
      <div className="flex flex-col items-center justify-center">
        <div className="absolute -mt-0 lg:w-full lg:px-[12rem]">
          <Form />
        </div>
      </div>
      <div className="lg:max-w-3xl mx-auto">
        <div className="flex flex-col items-center justify-center ">
          <div className="my-[10rem] mx-[8%]">
            <h1 className="font-medium text-4xl text-center mb-8">
              Lorem ipsum dolor
            </h1>
            <p className="font-normal text-lg text-center text-slate-500">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo
              soluta quod magnam possimus voluptates? Ad laudantium nesciunt
              consequuntur, quasi corporis veritatis sunt iusto reprehenderit
              nihil, accusamus quia necessitatibus recusandae expedita.
            </p>
          </div>
        </div>
        <RoomsCarousel />
        <div className="flex flex-col items-center justify-center">
          <div className="my-[10rem] mx-[8%]">
            <h1 className="font-medium text-4xl text-center mb-8">
              Lorem amenities
            </h1>
            <p className="font-normal text-lg text-center text-slate-500">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo
              soluta quod magnam possimus voluptates
            </p>
            <div className="grid grid-cols-12 mt-[6rem] gap-4 text-center">
              {AMENITIES.map((item, index) => (
                <div
                  key={index}
                  className="col-span-6 lg:col-span-3 flex flex-col items-center justify-center gap-4"
                >
                  <div className="max-h-12 flex items-center justify-center">
                    <Image
                      src={item.image}
                      alt={item.name}
                      height={100}
                      width={100}
                      className="rounded-none w-full object-contain"
                    />
                  </div>
                  <span>{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="lg:mx-[12rem]">
        <div className="flex flex-col item-center w-full">
          <AspectRatio ratio={21 / 9} className="flex items-center">
            <Image
              src="https://images.pexels.com/photos/2017802/pexels-photo-2017802.jpeg?auto=compress&cs=tinysrgb"
              alt="Photo pexel"
              fill
              className="w-full object-cover"
            />
            <Card className="absolute z-9 rounded-none">
              <CardContent className="max-w-md py-8 px-4 ml-8">
                <h1 className="text-2xl font-medium mb-4">House Rules</h1>
                <p className="text-sm text-slate-500 mb-4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                  consequuntur id fuga ex eos adipisci consectetur doloremque
                  rem dolorem dicta hic quae.
                </p>
                <Button>Show more</Button>
              </CardContent>
            </Card>
          </AspectRatio>
        </div>
      </div>
      <div className="lg:mx-[12rem] mt-[12rem]">
        <Comments />
      </div>
      <div className="mt-[12rem]">
        <FormNewsletter />
      </div>
    </MainLayout>
  );
}
