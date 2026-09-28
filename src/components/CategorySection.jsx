function CategorySection() {
  const categories = [
    {
      name: "Men",
      image: "/men-shoes.jpg",
    },
    {
      name: "Women",
      image: "/women-shoes.jpg",
    },
    {
      name: "Loafers",
      image: "/loafers.jpg",
    },
    {
      name: "Sandals",
      image: "/sandals.jpg",
    },
  ];

  return (
    <section className="categories" id="collections">

      <div className="section-heading">

        <p>EXPLORE TEFFECT</p>

        <h2>Shop by Category</h2>

        <span>
          Discover handmade footwear designed for
          everyday style and comfort.
        </span>

      </div>

      <div className="category-grid">

        {categories.map((category) => (
          <div
            className="category-card"
            key={category.name}
          >

            <img
              src={category.image}
              alt={category.name}
            />

            <div className="category-overlay">

              <h3>{category.name}</h3>

              <button>
                Explore →
              </button>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default CategorySection;