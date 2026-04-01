type ProductDetailsProps = {
  stockText: string;
  description: string[];
  title?: string;
  specs?: string[];
  dimensions?: string[];
  warranty?: string;
  overview?: string[];
  performance?: string[];
  MaterialsFinih?: string[];
};

const AllProductDetails = ({
  stockText,
  description,
  specs,
  dimensions,
  warranty,
}: ProductDetailsProps) => {
  return (
    <div className="bg-white text-[13px] font-semibold py-10">
      <p className="text-sm font-semibold">{stockText}</p>

      {description.map((text, i) => (
        <p key={i} className="mt-4 leading-relaxed">
          {text}
        </p>
      ))}

      {/* Only render if specs exist */}
      {specs && (
        <>
          <h2 className="mt-8">Specifications</h2>
          <ul className="mt-4 space-y-1 list-disc">
            {specs.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </>
      )}

      {/* Only render if dimensions exist */}
      {dimensions && (
        <>
          <h2 className="mt-10 font-semibold">Dimensions</h2>
          <ul className="mt-4 space-y-2 list-disc">
            {dimensions.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </>
      )}

      {warranty && (
        <>
          <h2 className="mt-4 font-semibold underline">Warranty & Returns</h2>
          <p className="mt-2">{warranty}</p>
        </>
      )}
    </div>
  );
};

export default AllProductDetails;