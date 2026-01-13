import { Check, Leaf, Play, Star, Zap } from 'lucide-react';
import React from "react"

const brands = [
  { name: 'Puma', icon: Star },
  { name: 'Adidas', icon: Zap },
  { name: 'Simple', icon: Check },
  { name: 'Leaves', icon: Leaf },
  { name: 'BeHance', icon: Star },
  { name: 'Twitch', icon: Play },
  { name: 'Organic', icon: Leaf },
];

const BrandsSection = () => {
  return (
    <section className="bg-background">
      <div className="w-full m-0 flex gap-4 mt-10 items-center">
        <h2 className="font-bold text-2xl p-5 text-foreground">Brands</h2>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 p-5 mt-5">
        {brands.map((brand, index) => {
          const IconComponent = brand.icon;
          return (
            <div
              key={index}
              className="flex items-center gap-2 text-foreground hover:text-muted-foreground transition-colors cursor-pointer"
            >
              <IconComponent className="w-6 h-6" />
              <span className="font-medium">{brand.name}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default BrandsSection;
