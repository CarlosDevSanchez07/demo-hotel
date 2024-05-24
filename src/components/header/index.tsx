"use client";

import Link from "next/link";
import * as React from "react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";

export function NavigationMenuDemo() {
  return (
    <div className="md:mx-[10rem]">
      <header className="sticky top-0 z-[9] flex h-16 items-center justify-between border-b bg-background px-4 md:px-6">
        <nav className="hidden flex-col text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
          <Link
            href="#"
            className="flex items-center gap-2 text-lg font-semibold md:text-base"
          >
            The Sun Beach
          </Link>
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="shrink-0 md:hidden"
            >
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <nav className="grid gap-6 text-lg font-medium">
              <Link
                href="#"
                className="flex items-center gap-2 text-lg font-semibold"
              >
                The Sun Beach
              </Link>
              <Link
                href="/"
                className="text-muted-foreground hover:text-foreground"
              >
                Home
              </Link>
              <Link
                href="/"
                className="text-muted-foreground hover:text-foreground"
              >
                Services
              </Link>
              <Link
                href="/blog"
                className="text-muted-foreground hover:text-foreground"
              >
                Blog
              </Link>
              <Link
                href="/blog"
                className="text-muted-foreground hover:text-foreground"
              >
                Single
              </Link>
              <Link
                href="/single"
                className="text-muted-foreground hover:text-foreground"
              >
                Redirect
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
        <div className="hidden md:flex items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
          <Link
            href="/"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Home
          </Link>
          <Link
            href="/"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Services
          </Link>
          <Link
            href="/blog"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Blog
          </Link>
          <Link
            href="/blog"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Single
          </Link>
          <Link
            href="/single"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Redirect
          </Link>
        </div>
      </header>
    </div>
  );
}