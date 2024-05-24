"use client";
import MainLayout from "@/components/layout/mainLayout";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Country, fetchCountries } from "@/services";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const router = useRouter();
  const [countries, setCountries] = useState<Country[]>([]);

  const getCountries = () => {
    fetchCountries()
      .then((countries) => {
        setCountries(countries);
      })
      .catch((error) => {
        console.error("Error fetching countries:", error);
      });
  };

  useEffect(() => {
    getCountries();
  }, []);

  return (
    <Dialog open={true} onOpenChange={() => router.back()}>
      <DialogContent className="!max-w-[80%] max-h-[90vh] overflow-y-auto p-1">
        <MainLayout>
          <div className="bg-slate-200 min-h-40 flex flex-col items-center justify-center">
            <h1 className="text-xl font-medium">Blog Single Page</h1>
          </div>
          <div className="my-[8rem] mx-4 lg:mx-[12rem]">
            <h1 className="text-center mb-8 font-semibold text-xl">
              Countries API
            </h1>
            <div className="grid grid-cols-12 gap-4">
              {countries.map((item, index) => (
                <Card key={index} className="col-span-12 lg:col-span-4">
                  <CardContent className="p-4">
                    <h2>{item.name}</h2>
                    <p>{item.code}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </MainLayout>
      </DialogContent>
    </Dialog>
  );
}
