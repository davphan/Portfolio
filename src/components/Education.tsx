import { EDUCATION_SECTION } from "@/data/text";
import { SectionTitle } from "./typography/SectionTitle";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

export default function Education() {
  return (
    <div>
      <SectionTitle>Education</SectionTitle>
      <p>{EDUCATION_SECTION.description}</p>

      <Tabs>
        <TabsList>
          <TabsTrigger value="subject">Subject</TabsTrigger>
          <TabsTrigger value="list">List</TabsTrigger>
          <TabsTrigger value="year">Year</TabsTrigger>
        </TabsList>
        <TabsContent value="subject">

        </TabsContent>
        <TabsContent value="list">

        </TabsContent>
        <TabsContent value="year">

        </TabsContent>
      </Tabs>
    </div>
  );
}