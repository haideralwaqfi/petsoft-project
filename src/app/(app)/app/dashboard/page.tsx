import Branding from "@/components/Branding";
import ContentBlock from "@/components/ContentBlock";
import H1 from "@/components/H1";
import PetDetails from "@/components/PetDetails";
import PetList from "@/components/PetList";
import SearchForm from "@/components/SearchForm";
import Stat from "@/components/Stat";
import React from "react";

export default function page() {
  return (
    <main>
      <div className="flex justify-between items-center text-white py-8">
        <Branding />
        <Stat />
      </div>
      <div className="grid grid-cols-3 grid-rows-[45px_1fr] gap-4 h-[600px]">
        <div className="row-start-1 row-span-1 col-start-1 col-span-1">
          <SearchForm />
        </div>
        <div className="row-start-2 row-span-full col-start-1 col-span-1">
          <ContentBlock>
            <PetList />
          </ContentBlock>
        </div>
        <div className="row-start-1 row-span-full col-start-2 col-span-full">
          <ContentBlock>
            <PetDetails />
          </ContentBlock>
        </div>
      </div>
    </main>
  );
}
