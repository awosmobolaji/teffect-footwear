function Hero() {
  return (
    <section className="hero" id="home">

      <div className="hero-content">

        <p className="hero-small-text">
          HANDCRAFTED FOOTWEAR
        </p>

        <h1>
          Made by Hand.
          <br />
          Made for You.
        </h1>

        <p className="hero-description">
          Discover handmade footwear crafted with care,
          character and timeless style.
        </p>

        <div className="hero-buttons">
          <a href="#shop" className="primary-btn">
            Shop Collection
          </a>

          <a href="#about" className="secondary-btn">
            Our Story
          </a>
        </div>

      </div>

      <div className="hero-image">
        <img
          src="/handmade-shoe.jpg"
          alt="Handmade leather footwear"
        />
      </div>

    </section>
  );
}

export default Hero;