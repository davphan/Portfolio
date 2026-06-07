import { Button } from "./ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Menu } from "lucide-react";
import { Separator } from "./ui/separator";

export default function Navbar() {

  return (
    <nav className="w-full grid grid-cols-3 items-center p-3">
      <DropdownMenu>
        <DropdownMenuTrigger className="w-fit right-5">
          <Button variant="outline">
            <Menu />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuGroup>
            <DropdownMenuLabel>Portfolio Sections</DropdownMenuLabel>
            <DropdownMenuItem><a href="#about">About</a></DropdownMenuItem>
            <DropdownMenuItem><a href="#skills">Skills</a></DropdownMenuItem>
            <DropdownMenuItem><a href="#experience">Experience</a></DropdownMenuItem>
            <DropdownMenuItem><a href="#projects">Projects</a></DropdownMenuItem>
            <DropdownMenuItem><a href="#education">Education</a></DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuLabel>Other Links</DropdownMenuLabel>
            <DropdownMenuItem>GitHub</DropdownMenuItem>
            <DropdownMenuItem>LinkedIn</DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
      <div className="flex items-center gap-2">
        <h1>David Phan</h1>
        <Separator orientation="vertical" />
        <h1>Portfolio</h1>
      </div>
      <Button className="w-fit absolute right-5" variant="secondary">Github</Button>
    </nav>
  );
}