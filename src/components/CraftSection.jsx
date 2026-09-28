function CraftSection() {
  return (
    <section className="craft" id="about">

      <div className="craft-image">
        <img
          src="/craft-shoe.jpg"
          alt="TEFFECT handmade footwear"
        />
      </div>

      <div className="craft-content">

        <p className="craft-label">
          THE TEFFECT STORY
        </p>

        <h2>
          Crafted by Hand.
          <br />
          Made to Last.
        </h2>

        <p>
          At TEFFECT, every pair of footwear is created
          with patience, care and attention to detail.
        </p>

        <p>
          We believe handmade footwear should feel
          comfortable, look timeless and have its own
          character.
        </p>

        <a href="#contact" className="craft-button">
          Learn More About Us →
        </a>

      </div>

    </section>
  );
}

export default CraftSection;