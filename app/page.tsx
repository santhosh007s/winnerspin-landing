import NavBar from "@/components/ui/navbar";

function Page() {
  return (
    <>
      <div className="bg-black ">
        <div className="flex justify-center items-center">
          <NavBar />
        </div>
   

        {/* nav bar */}

        {/* <Spotlight
          fill="#beeb65"
          className="md:-top-130 -top-160 -left-60 md:-left-110 scale-150 md:scale-100"
        /> */}

        <div className=" h-screen flex justify-center items-center">
          {/* only hero section */}
        </div>
        <div className="flex flex-col gap-52 md:gap-32 px-10 md:px-[10%] xl:px-[15%] ">
          {/* all other sections  */}
        </div>
        {/* footer */}
      </div>
    </>
  );
}

export default Page;
