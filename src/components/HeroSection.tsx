import Image from "next/image"


const HeroSection = () => {
  return (
    <section>
      <section className="relative h-screen w-full overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="/videos/hero-video.mp4" type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Hero Content */}
        <div className="relative z-10 flex items-center justify-center h-full">
          <h1 className="text-white text-[110px] font-semibold tracking-wide text-center">
            SILENCE PLEASE
          </h1>
        </div>
      </section>
      <div className="flex ">
        <Image
          src="/images/hero-img-1.webp"
          alt="her-img"
          width={952}
          height={953}
          className="w-1/2 object-cover"
        />
        <Image
          src="/images/hero-img-2.webp"
          alt="her-img"
          width={952}
          height={953}
          className="w-1/2 object-cover"
        />
      </div>
    </section>
  );
}

export default HeroSection
