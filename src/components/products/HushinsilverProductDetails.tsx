
const HushinsilverProductDetails = () => {
  return (
    <div>
      <div className=" bg-white text-[13px] font-semibold ">
        <div className="  py-10">
          {/* Stock */}
          <p className="text-sm font-semibold">
            Currently in stock. Ships Today
          </p>
          <p className="mt-4 leading-relaxed">
            Hush isn’t just a speaker—it’s an approach to sound. Inspired by our
            ethos of attentive listening, it’s designed for spaces where music
            is meant to be experienced with intention.
          </p>

          <p className="mt-4 leading-relaxed">
            At SILENCE PLEASE, we believe sound should be felt, not forced—a
            presence that enhances rather than overwhelms. The Hush 4&quot; studio
            monitors are tuned for clarity, warmth, and precision, unearthing
            subtleties in every recording. From layered electronic textures to
            ambient compositions, Hush captures what conventional speakers often
            lose.
          </p>

          <h2 className="mt-8 t">
            Compact in Form, Expansive in Sound
          </h2>
          <p className="mt-3  leading-relaxed">
            Small in scale yet powerful in delivery, Hush is designed to bring
            rich, immersive sound to modern living spaces. Perfectly sized for a
            New York apartment yet refined enough for any environment, it
            delivers a full, natural sound field without demanding space.
          </p>

          {/* Specs */}
         
          <ul className="mt-4 space-y-1 list-disc">
            <li>Speaker Use: Bookshelf</li>
            <li>Speaker Type: Passive</li>
            <li>Mid/Woofer: 4&quot;</li>
            <li>Tweeter: 1&quot;</li>
            <li>Overall Frequency: 65Hz – 20kHz (-6 dB)</li>
            <li>Crossover: 2-way</li>
            <li>Lower: -3 dB limit 65Hz</li>
            <li>Upper: -3 dB limit 20kHz</li>
            <li>Nominal Impedance: 4 ohm / Working 4–8 ohm</li>
            <li>Recommended Watts/Channel: 35W</li>
            <li>Efficiency: 87 dB</li>
            <li>Inputs: Terminal post</li>
            <li>Maximum Power Handling: 55W</li>
          </ul>

          {/* Dimensions */}
          <h2 className="mt-10  font-semibold">Dimensions</h2>

          <ul className="mt-4 space-y-2 list-disc">
            <li>Product Size: L18 x W18 x H38 cm</li>
            <li>Shipping Unit: Pair</li>
            <li>Product Unit Weight: 3.8 kg</li>
            <li>Package Dimensions: L60.5 x W50.5 x H31 cm</li>
          </ul>

          {/* Warranty */}
          <h2 className="mt-4  font-semibold underline">Warranty & Returns</h2>
          
        </div>
      </div>
    </div>
  );
}

export default HushinsilverProductDetails
