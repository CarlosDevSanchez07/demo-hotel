import { NavigationMenuDemo } from "@/components/header";
import { Facebook, Twitter, Youtube } from "lucide-react";

export default function MainLayout({ children }: React.PropsWithChildren) {
  return (
    <main className="py-4 px-0">
      <NavigationMenuDemo />
      <div className="w-full">{children}</div>
      <div className="bg-slate-100">
        <div className="mx-4 lg:mx-[12rem]">
          <div className="grid grid-cols-9 py-[10rem] gap-x-8">
            <div className="col-span-9 lg:col-span-3">
              <h1 className="text-xl font-medium mb-4">About</h1>
              <p className="text-sm">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptas, necessitatibus quaerat, reprehenderit non nobis
                voluptates cumque inventore aut sint fugit sed, magni ipsa
                provident quisquam iure est maxime nesciunt enim?
              </p>
            </div>
            <div className="col-span-9 lg:col-span-3">
              <div className="flex flex-col">
                <h1 className="text-xl font-medium mb-4">Contact</h1>
                <span className="text-sm">A: Via Venti Settembre, Roma</span>
                <span className="text-sm">P: +57 555 000 83</span>
                <span className="text-sm">App: Viber, WhatsApp</span>
                <span className="text-sm">E: info@domain.com</span>
              </div>
            </div>
            <div className="col-span-9 lg:col-span-3">
              <div>
                <h1 className="text-xl font-medium mb-4">Get Social</h1>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
                <div className="flex flex-row items-center gap-x-4 my-2">
                  <Facebook />
                  <Twitter />
                  <Youtube />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
