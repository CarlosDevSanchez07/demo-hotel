import { USERS } from "@/constants";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export default function Comments() {
  return (
    <div className="grid grid-cols-12 gap-x-3 w-full">
      {USERS.map((item, index) => (
        <div
          className="col-span-12 lg:col-span-4 flex flex-col items-center gap-y-3"
          key={index}
        >
          <Avatar>
            <AvatarImage
              src={item.image}
              alt="@shadcn"
              className="object-cover"
            />
            <AvatarFallback>{item.name.slice(0, 1)}</AvatarFallback>
          </Avatar>
          <h2 className="font-medium text-lg">{item.name}</h2>
          <p className="text-sm text-center">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus
            dignissimos excepturi quibusdam ex corporis iusto porro molestias
            exercitationem sapiente delectus dicta voluptates cumque
            praesentium.
          </p>
        </div>
      ))}
    </div>
  );
}
