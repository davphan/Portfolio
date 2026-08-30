import { navbar } from "@/data/text";
import { Container } from "./layout";
import { Button } from "./ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Menu } from "lucide-react";
import { Separator } from "./ui/separator";
import ThemeToggle from "./theme-toggle";

const SECTION_LINKS = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
];

function Brand() {
  return (
    <div className="flex items-center gap-2 font-heading text-lg leading-none font-semibold tracking-tight">
      <span>David Phan</span>
      <Separator orientation="vertical" className="h-4" />
      <span className="text-muted-foreground font-normal">Portfolio</span>
    </div>
  );
}

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-30 w-full border-b border-border bg-background/80 backdrop-blur-sm">
      <Container className="grid h-16 grid-cols-[auto_1fr_auto] items-center gap-4">
        <div className="flex items-center">
          <div className="md:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                <DropdownMenuGroup>
                  <DropdownMenuLabel>Portfolio Sections</DropdownMenuLabel>
                  {SECTION_LINKS.map((link) => (
                    <DropdownMenuItem key={link.href} asChild>
                      <a href={link.href}>{link.label}</a>
                    </DropdownMenuItem>
                  ))}
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
          </div>
          <div className="hidden md:block">
            <Brand />
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="md:hidden">
            <Brand />
          </div>
          <div className="hidden items-center gap-8 md:flex">
            {SECTION_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground/70 transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-self-end gap-2">
          <ThemeToggle />
          <div className="hidden items-center gap-2 md:flex">
            <Button variant="secondary" asChild>
              <a href={navbar.github} target="_blank" rel="noreferrer">GitHub</a>
            </Button>
            <Button variant="secondary" asChild>
              <a href={navbar.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            </Button>
          </div>
        </div>
      </Container>
    </nav>
  );
}
