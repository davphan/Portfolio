import { navbar } from "@/data/text";
import { Container } from "./layout";
import { Button } from "./ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Menu } from "lucide-react";
import { Separator } from "./ui/separator";
import ThemeToggle from "./theme-toggle";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-10 w-full border-b border-border bg-background/80 backdrop-blur-sm">
      <Container className="grid grid-cols-[auto_1fr_auto] items-center gap-4 py-3">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon">
              <Menu />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start">
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
              <DropdownMenuItem asChild>
                <a href={navbar.github} target="_blank" rel="noreferrer">GitHub</a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <a href={navbar.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
        <div className="flex items-center justify-center gap-2 font-heading text-lg font-semibold tracking-tight">
          <span>David Phan</span>
          <Separator orientation="vertical" className="h-4" />
          <span className="text-muted-foreground font-normal">Portfolio</span>
        </div>
        <div className="flex items-center justify-self-end gap-2">
          <ThemeToggle />
          <Button variant="secondary" asChild>
            <a href={navbar.github} target="_blank" rel="noreferrer">GitHub</a>
          </Button>
        </div>
      </Container>
    </nav>
  );
}