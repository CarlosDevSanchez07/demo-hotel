"use client";

import { Label } from "@/components/ui/label";
import { DatePicker } from "@/components/datepicker";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "../ui/button";

export default function FormCheck() {
  return (
    <Card className="rounded-none">
      <CardContent>
        <div className="pt-6">
          <form className="flex items-center justify-center">
            <div className="grid grid-cols-12 gap-3 lg:w-full">
              <div className="col-span-6 lg:col-span-3 grid items-center gap-1.5">
                <Label htmlFor="email">Check In</Label>
                <DatePicker />
              </div>
              <div className="col-span-6 lg:col-span-3 grid items-center gap-1.5">
                <Label htmlFor="email">Check Out</Label>
                <DatePicker />
              </div>
              <div className="col-span-12 lg:col-span-3 grid items-center gap-1.5">
                <Label htmlFor="email">Rooms</Label>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select rooms" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {Array.from({ length: 5 }).map((_, index) => (
                        <SelectItem key={index} value="apple">
                          {index + 1} Rooms
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div className="col-span-12 lg:col-span-3 grid w-full max-w-sm mt-5">
                <Button>Book Now</Button>
              </div>
            </div>
          </form>
        </div>
      </CardContent>
    </Card>
  );
}
