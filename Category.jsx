import { useState } from "react";
import ProductCard from "../components/ProductCard";

function Category() {
  const [selectedCategory, setSelectedCategory] = useState("earrings");

  const products = {
    earrings: [
      { image: "/images/earrings/e1.jpeg",
        name: "Floral Drop Earrings",
        price:"450"
       },
      { image: "/images/earrings/e2.jpeg",
        name: "Stud Earrings",
        price:"299"
       },
      { image: "/images/earrings/e3.jpeg",
        name: "Hoop Earrings",
        price:"399"
       },
      { image: "/images/earrings/e4.jpeg",
        name: "Chandelier Earrings",
        price:"599"
       },
      { image: "/images/earrings/e5.jpeg",
        name: "Dangle Earrings",
        price:"499"
       },
      { image: "/images/earrings/e6.jpeg",
        name: "Pearl Earrings",
        price:"349"
       },
      { image: "/images/earrings/e7.jpeg",
        name: "Crystal Earrings",
        price:"499"
       },
      { image: "/images/earrings/e8.jpeg",
        name: "Gold Earrings",
        price:"599"
       },
      { image: "/images/earrings/e9.jpeg",
        name: "Silver Earrings",
        price:"299"
       },
      { image: "/images/earrings/e10.jpeg",
        name: "Rose Gold Earrings",
        price:"499"
       }
    ],
    rings: [
      { image: "/images/rings/r1.jpeg",
        name: "Solitaire Ring",
        price:"1999"
       },
      { image: "/images/rings/r2.jpeg",
        name: "Halo Ring",
        price:"2499"
       },
      { image: "/images/rings/r3.jpeg",
        name: "Vintage Ring",
        price:"1599"
       },
      { image: "/images/rings/r4.jpeg",
        name: "Modern Ring",
        price:"1799"
       },
      { image: "/images/rings/r5.jpeg",
        name: "Engagement Ring",
        price:"2999"
       },
      { image: "/images/rings/r6.jpeg",
        name: "Statement Ring",
        price:"1299"
       },
      { image: "/images/rings/r7.jpeg",
        name: "Band Ring",
        price:"899"
       },
      { image: "/images/rings/r8.jpeg",
        name: "Stackable Ring",
        price:"699"
       },
      { image: "/images/rings/r9.jpeg",
        name: "Promise Ring",
        price:"1499"
       },
      { image: "/images/rings/r10.jpeg",
        name: "Cocktail Ring",
        price:"1699"
       },
      { image: "/images/rings/r11.jpeg",
        name: "Pave Ring",
        price:"1399"
       }
    ],
    necklaces: [
      { image: "/images/necklaces/n1.jpeg",
        name: "Pearl Necklace",
        price:"2999"
       },
      { image: "/images/necklaces/n2.jpeg",
        name: "Gold Necklace",
        price:"3999"
       },
      { image: "/images/necklaces/n3.jpeg",
        name: "Silver Necklace",
        price:"1999"
       },
      { image: "/images/necklaces/n4.jpeg",
        name: "Diamond Necklace",
        price:"5999"
       },
      { image: "/images/necklaces/n5.jpeg",
        name: "Rose Gold Necklace",
        price:"4999"
       },
      { image: "/images/necklaces/n6.jpeg",
        name: "Coral Necklace",
        price:"2499"
       },
      { image: "/images/necklaces/n7.jpeg",
        name: "Sapphire Necklace",
        price:"4499"
       },
      { image: "/images/necklaces/n8.jpeg",
        name: "Emerald Necklace",
        price:"4999"
       }
    ],
    hair: [
      { image: "/images/hairs/c1.jpeg",
        name: "Butterfly Hair Clip",
        price:"199"
       },
      { image: "/images/hairs/c2.jpeg",
        name: "Seashell Hairpins Set",
        price:"149"
       },
      { image: "/images/hairs/c3.jpeg",
        name: "Butterfly Stone Hair Clip",
        price:"179"
       },
      { image: "/images/hairs/c4.jpeg",
        name: "Floral Hair Clutcher",
        price:"199"
       },
      { image: "/images/hairs/c5.jpeg",
        name: "Satin Bows",
        price:"129"
       },
      { image: "/images/hairs/c6.jpeg",
        name: "Rainbow Hair Clips",
        price:"299"
       },
      { image: "/images/hairs/c7.jpeg",
        name: "Tiara",
        price:"399"
       },
      { image: "/images/hairs/c8.jpeg",
        name: "Bridal Veil",
        price:"499"
       },
      { image: "/images/hairs/c9.jpeg",
        name: "Cheery Blossom Hairpin",
        price:"199"
       },
      { image: "/images/hairs/c10.jpeg",
        name: "Baby Pink Hair Clip",
        price:"59"
       },
      { image: "/images/hairs/c11.jpeg",
        name: "Royal Bows",
        price:"39"
       },
      { image: "/images/hairs/c12.jpeg",
        name: "Cinderella Hair Clip",
        price:"149"
       },
      { image: "/images/hairs/c13.jpeg",
        name: "Pink Pearl Hairpin",
        price:"89"
       },
      { image: "/images/hairs/c14.jpeg",
        name: "Lace Hairband",
        price:"69"
       },
      { image: "/images/hairs/c15.jpeg",
        name: "Patterned Hair Clip",
        price:"49"
       },
      { image: "/images/hairs/c16.jpeg",
        name: "Gold Hair Accessory",
        price:"299"
       },
      { image: "/images/hairs/c17.jpeg",
        name: "Silver Hairpin",
        price:"79"
       },
      { image: "/images/hairs/c18.jpeg",
        name: "Crown with Gems",
        price:"599"
       },
      { image: "/images/hairs/c19.jpeg",
        name: "Diamond Hairpin",
        price:"199"
       },
      { image: "/images/hairs/c20.jpeg",
        name: "Pearl Hairband",
        price:"149"
       },
      { image: "/images/hairs/c21.jpeg",
        name: "Ruby Hair Clip",
        price:"249"
       },
      { image: "/images/hairs/c22.jpeg",
        name: "Sapphire Headband",
        price:"299"
       },
      { image: "/images/hairs/c23.jpeg",
        name: "Emerald Tiara",
        price:"399"
       },
      { image: "/images/hairs/c24.jpeg",
        name: "Topaz Scarf",
        price:"179"
       },
      { image: "/images/hairs/c25.jpeg",
        name: "Amethyst Crown",
        price:"499"
       },
      { image: "/images/hairs/c26.jpeg",
        name: "Garnet Hairpin",
        price:"129"
       },
      { image: "/images/hairs/c27.jpeg",
        name: "Peridot Headband",
        price:"159"
       },
      { image: "/images/hairs/c28.jpeg",
        name: "Opal Hair Accessory Set",
        price:"249"
       },
      { image: "/images/hairs/c29.jpeg",
        name: "Aquamarine Hairpin",
        price:"139"
       },
      { image: "/images/hairs/c30.jpeg",
        name: "Citrine Headband",
        price:"169"
       },
      { image: "/images/hairs/c31.jpeg",
        name: "Moonstone Hair Clip",
        price:"229"
       }
    ]
  };

  return (
    <div className="category-page">

      {/* 🔥 CATEGORY NAV */}
      <div className="category-nav">
        <button 
  className={selectedCategory === "earrings" ? "active" : ""}
  onClick={() => setSelectedCategory("earrings")}
>
  Earrings
</button>

<button 
  className={selectedCategory === "rings" ? "active" : ""}
  onClick={() => setSelectedCategory("rings")}
>
  Rings
</button>

<button 
  className={selectedCategory === "necklaces" ? "active" : ""}
  onClick={() => setSelectedCategory("necklaces")}
>
  Necklaces
</button>

<button 
  className={selectedCategory === "hair" ? "active" : ""}
  onClick={() => setSelectedCategory("hair")}
>
  Hair Accessories
</button>
      </div>

      {/* 🔥 PRODUCTS GRID */}
      <div className="category-grid">
        {products[selectedCategory].map((product, index) => (
      <ProductCard
      key={index}
      image={product.image}
      name={product.name}
      price={product.price}
      />
      ))}
      </div>

    </div>
  );
}

export default Category;
