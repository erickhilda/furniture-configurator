import Image from "next/image";

type TextureOption = {
  type: "texture" | "color";
  texture: string;
  size?: [number, number, number];
  shininess?: number;
};

const textures: TextureOption[] = [
  {
    type: "texture",
    texture: "/img/texture/wood_.jpg",
    size: [2, 2, 2],
    shininess: 60,
  },
  {
    type: "texture",
    texture: "/img/texture/fabric_.jpg",
    size: [4, 4, 4],
    shininess: 0,
  },
  {
    type: "texture",
    texture: "/img/texture/pattern_.jpg",
    size: [8, 8, 8],
    shininess: 10,
  },
  {
    type: "texture",
    texture: "/img/texture/denim_.jpg",
    size: [3, 3, 3],
    shininess: 0,
  },
  {
    type: "texture",
    texture: "/img/texture/quilt_.jpg",
    size: [6, 6, 6],
    shininess: 0,
  },
  // {
  //   type: "color",
  //   texture: "131417",
  // },
  // {
  //   type: "color",
  //   texture: "374047",
  // },
  // {
  //   type: "color",
  //   texture: "5f6e78",
  // },
  // {
  //   type: "color",
  //   texture: "7f8a93",
  // },
  // {
  //   type: "color",
  //   texture: "97a1a7",
  // },
  // {
  //   type: "color",
  //   texture: "acb4b9",
  // },
  // {
  //   type: "color",
  //   texture: "DF9998",
  // },
  // {
  //   type: "color",
  //   texture: "7C6862",
  // },
  // {
  //   type: "color",
  //   texture: "A3AB84",
  // },
  // {
  //   type: "color",
  //   texture: "D6CCB1",
  // },
  // {
  //   type: "color",
  //   texture: "F8D5C4",
  // },
  // {
  //   type: "color",
  //   texture: "A3AE99",
  // },
  // {
  //   type: "color",
  //   texture: "EFF2F2",
  // },
  // {
  //   type: "color",
  //   texture: "B0C5C1",
  // },
  // {
  //   type: "color",
  //   texture: "8B8C8C",
  // },
  // {
  //   type: "color",
  //   texture: "565F59",
  // },
  // {
  //   type: "color",
  //   texture: "CB304A",
  // },
  // {
  //   type: "color",
  //   texture: "FED7C8",
  // },
  // {
  //   type: "color",
  //   texture: "C7BDBD",
  // },
  // {
  //   type: "color",
  //   texture: "3DCBBE",
  // },
  // {
  //   type: "color",
  //   texture: "264B4F",
  // },
  // {
  //   type: "color",
  //   texture: "389389",
  // },
  // {
  //   type: "color",
  //   texture: "85BEAE",
  // },
  // {
  //   type: "color",
  //   texture: "F2DABA",
  // },
  // {
  //   type: "color",
  //   texture: "F2A97F",
  // },
  // {
  //   type: "color",
  //   texture: "D85F52",
  // },
  // {
  //   type: "color",
  //   texture: "D92E37",
  // },
  // {
  //   type: "color",
  //   texture: "FC9736",
  // },
  // {
  //   type: "color",
  //   texture: "F7BD69",
  // },
  // {
  //   type: "color",
  //   texture: "A4D09C",
  // },
  // {
  //   type: "color",
  //   texture: "4C8A67",
  // },
  // {
  //   type: "color",
  //   texture: "25608A",
  // },
  // {
  //   type: "color",
  //   texture: "75C8C6",
  // },
  // {
  //   type: "color",
  //   texture: "F5E4B7",
  // },
  // {
  //   type: "color",
  //   texture: "E69041",
  // },
  // {
  //   type: "color",
  //   texture: "E56013",
  // },
  // {
  //   type: "color",
  //   texture: "11101D",
  // },
  // {
  //   type: "color",
  //   texture: "630609",
  // },
  // {
  //   type: "color",
  //   texture: "C9240E",
  // },
  // {
  //   type: "color",
  //   texture: "EC4B17",
  // },
  // {
  //   type: "color",
  //   texture: "281A1C",
  // },
  // {
  //   type: "color",
  //   texture: "4F556F",
  // },
  // {
  //   type: "color",
  //   texture: "64739B",
  // },
  // {
  //   type: "color",
  //   texture: "CDBAC7",
  // },
  // {
  //   type: "color",
  //   texture: "946F43",
  // },
  // {
  //   type: "color",
  //   texture: "66533C",
  // },
  // {
  //   type: "color",
  //   texture: "173A2F",
  // },
  // {
  //   type: "color",
  //   texture: "153944",
  // },
  // {
  //   type: "color",
  //   texture: "27548D",
  // },
  // {
  //   type: "color",
  //   texture: "438AAC",
  // },
];

function TextureOptions() {
  return (
    <div className="absolute bottom-0 z-[9999]">
      {/* create slider of option colors */}
      <div className="flex justify-center max-h-16 overflow-x-auto">
        {textures.map((texture, index) => {
          if (texture.type === "texture") {
            return (
              <Image
                key={index}
                src={texture.texture as string}
                width={64}
                height={64}
                alt={`texture-${index}`}
                objectFit="cover"
              />
            );
          }
          return (
            <div
              key={index}
              className="w-16 h-16 cursor-pointer"
              style={{
                backgroundColor: `#${texture.texture}`,
              }}
            />
          );
        })}
      </div>
    </div>
  );
}

export default TextureOptions;
