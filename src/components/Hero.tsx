import { ABOUT } from "@/data/text";
import { Button } from "./ui/button";
import headshot from "@/assets/headshot.jpg";
import { SectionTitle, Text } from "./typography";
import TypewriterComponent from "typewriter-effect";

export default function Hero() {
  return (
    <div id="about" className="px-50 pb-10 ">
      <div className="p-8">
        <img className="max-w-100 max-h-100 rounded-full object-cover overflow-clip w-full h-full m-auto" src={headshot} alt="Headshot of David Phan"/>
      </div>
      <div className="flex flex-col justify-center items-center text-center gap-6">
        <SectionTitle>{ABOUT.fname} {ABOUT.lname}</SectionTitle>
        <div className="text-3xl text-chart-2">
          <TypewriterComponent
            options={{
              strings: ABOUT.roles,
              autoStart: true,
              loop: true,
              delay: 70,
              deleteSpeed: 30,
            }}
          />
        </div>
        <Text>{ABOUT.description}</Text>
        <Button className="w-fit text-3xl p-8 rounded-full">Open Resume</Button>
      </div>
    </div>
  );
}