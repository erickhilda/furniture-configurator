import Image from "next/image";

const productItems = [
  {
    title: "LED Work Lamp",
    img: "/img/landing-page/product-led-work-lamp.png",
    price: 40,
    rating: 5,
    alt: "image of black color led work lamp",
  },
  {
    title: "FEJKA Potted Plant",
    img: "/img/landing-page/product-potted-plant.png",
    price: 10,
    rating: 4,
    alt: "image of pot with green plant inside",
  },
  {
    title: "MICKE Desk, Black-Brown",
    img: "/img/landing-page/product-study-table.png",
    price: 120,
    rating: 4,
    alt: "image of black color study table",
  },
  {
    title: "FEJKA Work Chair, Black",
    img: "/img/landing-page/product-work-chair.png",
    price: 68,
    rating: 4,
    alt: "image of black color work chair",
  },
];

function ProductSection() {
  return (
    <section className="flex flex-col mt-8 items-center">
      <h2 className="text-5xl font-syne">Best Selling Product</h2>
      <div className="mt-4 flex gap-8">
        {productItems.map((item, idx) => (
          <div className="" key={`${item.title}-${idx}`}>
            <Image
              src={item.img}
              alt={item.alt}
              width={240}
              height={240}
              className="object-cover w-60 h-60"
            />
            <div className="flex flex-col mt-4 gap-2">
              <p className="text-lg font-syne">{item.title}</p>
              <div className="flex justify-between">
                <p className="font-inter font-medium text-2xl">${item.price}</p>
                {/* create array depend on the rating and the render star icon */}
                <div className="flex gap-1">
                  {Array.from({ length: item.rating }).map((_, idx) => (
                    <svg
                      key={`star-${idx}`}
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="{2}"
                        d="M12 2l3.09 6.37L22 9.27l-5 4.86 1.18 6.88L12 16.94 5.82 21 7 14.14 2 9.27l6.91-.9L12 2z"
                      />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProductSection;
