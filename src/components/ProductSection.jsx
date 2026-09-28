
function ProductSection() {

  const products = [
    {
      name: "Classic Leather Loafer",
      price: "₦45,000",
      image: "/product1.jpg",
    },

    {
      name: "Handmade Brown Sandal",
      price: "₦35,000",
      image: "/product2.jpg",
    },

    {
      name: "Premium Black Loafer",
      price: "₦50,000",
      image: "/product3.jpg",
    },

    {
      name: "Classic Handmade Slide",
      price: "₦30,000",
      image: "/product4.jpg",
    },
  ];

  return (
    <section className="products" id="shop">

      <div className="products-heading">

        <p>TEFFECT COLLECTION</p>

        <h2>Featured Footwear</h2>

        <span>
          Handmade pieces created to bring comfort,
          character and timeless style to your wardrobe.
        </span>

      </div>

      <div className="product-grid">

        {products.map((product) => (

          <div
            className="product-card"
            key={product.name}
          >

            <div className="product-image">

              <img
                src={product.image}
                alt={product.name}
              />

            </div>

            <div className="product-info">

              <h3>
                {product.name}
              </h3>

              <p>
                {product.price}
              </p>

            </div>

          </div>

        ))}

      </div>

      

    </section>
  );
}

export default ProductSection;


