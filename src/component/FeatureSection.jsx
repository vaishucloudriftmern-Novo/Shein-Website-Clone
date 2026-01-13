import { CheckCircle, Smile, RefreshCw, Truck } from 'lucide-react';
import React from "react"

const features = [
  {
    icon: CheckCircle,
    title: 'Original Products',
    description: 'We guarantee 100% authentic products from top brands worldwide.',
  },
  {
    icon: Smile,
    title: 'Satisfaction Guarantee',
    description: 'Not happy? Full refund within 30 days, no questions asked.',
  },
  {
    icon: RefreshCw,
    title: 'New Arrival Everyday',
    description: 'Fresh styles added daily to keep your wardrobe updated.',
  },
  {
    icon: Truck,
    title: 'Fast and Free Shipping',
    description: 'Free delivery on orders over $50. Fast 2-3 day shipping.',
  },
];

const FeaturesSection = () => {
  return (
    <section className="bg-background">
      <div className="p-5 grid grid-cols-1 md:grid-cols-2 items-center gap-4 mt-10">
        <h2 className="font-bold text-xl md:text-2xl text-foreground">
          We provide Best
          <br /> Customer Experience
        </h2>
        <p className="text-muted-foreground">
          || We ensure that our customers have the best shopping experience
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-10 p-5 gap-4 ">
        {features.map((feature, index) => {
          const IconComponent = feature.icon;
          return (
            <div
              key={index}
              className="bg-card bg-gray-400 w-full h-auto min-h-40 m-2 flex flex-col items-start justify-start p-4 rounded-lg hover:shadow-lg transition-shadow"
            >
              <IconComponent className="w-8 h-8 mb-3 text-foreground" />
              <h5 className="font-bold text-left text-foreground mb-2">{feature.title}</h5>
              <p className="text-muted-foreground text-sm">{feature.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FeaturesSection;
