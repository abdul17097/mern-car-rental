export const HeroSection = () => {
  return (
    <>
      <div className="relative lg:h-[80vh]  font-sans pt-10 lg:pt-0 w-[100%] bg-[#F5F6F]  flex lg:flex-row flex-col  relative lg:bottom-20 px-5 lg:px-20 lg:items-center">
        <div className="lg:w-[80%] flex flex-col gap-5">
          <h1 className="text-[20px] font-semibold ">Rent a car in <span className="text-[#E69A2B] ">Pakistan</span> </h1>
          <h2 className="lg:text-[60px] text-3xl leading-[65px]  w-[100%] lg:w-[90%] font-bold">
            Find your dreams 
            car within a minute 
          </h2>
          <p className="lg:w-[70%] text-lg">Unlock your adventure with hassle-free car rentals. Explore freedom on wheels. Book now!</p>
        </div>
        <div className="">
          <img src="/audi a1.png" alt="" className="lg:relative "/>
        </div>
       
        {/* <div className="text-center absolute h-[100%] text-black z-50  flex items-center justify-center top-0  flex flex-col gap-5">
          <h2 className="text-lg lg:text-4xl text-white font-bold">
            RENT A CAR{" "}
            <span className="px-2 py-1 text-white border-8">
              IN PAKISTAN
            </span>
          </h2>
          <p className="text-lg lg:text-3xl text-white ">
            {" "}
            Find a car of your dreams in 60 seconds
          </p>
        </div>

        <div
          id="default-carousel"
          class="relative mb-5 w-full lg:h-[100%] "
          data-carousel="slide"
        >
          <div class="relative h-56 overflow-hidden  lg:h-[100%] ">
            <div class="hidden duration-700 ease-in-out" data-carousel-item>
              <img
                src="/life style.jpg"
                class="absolute block bg-cover w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="..."
              />
            </div>
            <div class="hidden duration-700 ease-in-out" data-carousel-item>
              <img
                src="/life style.jpg"
                class="absolute block bg-contain w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="..."
              />
            </div>
            <div class="hidden duration-700 ease-in-out" data-carousel-item>
              <img
                src="/luxury.jpg"
                class="absolute block bg-contain w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="..."
              />
            </div>
            <div class="hidden duration-700 ease-in-out" data-carousel-item>
              <img
                src="cars.jpg"
                class="absolute block bg-contain w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="..."
              />
            </div>
            <div class="hidden duration-700 ease-in-out" data-carousel-item>
              <img
                src="/luxury.jpg"
                class="absolute block bg-contain w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                alt="..."
              />
            </div>
          </div>
          <div class="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
            <button
              type="button"
              class="w-3 h-3 rounded-full"
              aria-current="true"
              aria-label="Slide 1"
              data-carousel-slide-to="0"
            ></button>
            <button
              type="button"
              class="w-3 h-3 rounded-full"
              aria-current="false"
              aria-label="Slide 2"
              data-carousel-slide-to="1"
            ></button>
            <button
              type="button"
              class="w-3 h-3 rounded-full"
              aria-current="false"
              aria-label="Slide 3"
              data-carousel-slide-to="2"
            ></button>
            <button
              type="button"
              class="w-3 h-3 rounded-full"
              aria-current="false"
              aria-label="Slide 4"
              data-carousel-slide-to="3"
            ></button>
            <button
              type="button"
              class="w-3 h-3 rounded-full"
              aria-current="false"
              aria-label="Slide 5"
              data-carousel-slide-to="4"
            ></button>
          </div>
        </div> */}
      </div>
    </>
  );
};
