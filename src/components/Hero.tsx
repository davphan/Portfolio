import { ABOUT } from "@/data/text";
import { Button } from "./ui/button";
import headshot from "@/assets/headshot.jpg";

export default function Hero() {
  return (
    <div>
      <div>
        <img src={headshot} alt="Headshot of David Phan"/>
      </div>
      <div>
        <h1>{ABOUT.fname} {ABOUT.lname}</h1>
        <p>{ABOUT.description}</p>
        <Button>Open Resume</Button>
      </div>
    </div>
  );
}