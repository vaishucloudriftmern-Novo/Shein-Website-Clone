const ProductCard = ({ image, showShopButton = false }) => {
  return (
    <div className="relative w-full h-64 group overflow-hidden rounded-lg">
      <img
        src={image}
        alt="Product"
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
      {showShopButton && (
        <button className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <span className="bg-background text-foreground px-4 py-2 rounded-full font-semibold hover:bg-muted transition">
            Shop Now →
          </span>
        </button>
      )}
    </div>
  );
};

export default ProductCard;