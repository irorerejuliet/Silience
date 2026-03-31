import Image from "next/image";
import MobileNavbar from "./layouts/MobileNavbar";

const HeroSection = () => {
  return (
    <section className="relative w-full">
      <div className="absolute inset-0 pointer-events-none z-20">
        <div className="sticky top-0 h-screen flex items-center justify-center">
          <h1 className="text-white lg:text-[110px] md:text-7xl text-4xl font-semibold text-center leading-none">
            SILENCE PLEASE
          </h1>
        </div>
      </div>

      <div className="relative">
        <div className="relative h-screen w-full overflow-hidden">
          <MobileNavbar />
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover"
          >
            <source src="/videos/hero-video.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="flex h-screen w-full">
          <Image
            src="/images/hero-img-1.webp"
            alt="hero-img-1"
            width={952}
            height={953}
            className="w-1/2 h-full object-cover"
          />
          <Image
            src="/images/hero-img-2.webp"
            alt="hero-img-2"
            width={952}
            height={953}
            className="w-1/2 h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
