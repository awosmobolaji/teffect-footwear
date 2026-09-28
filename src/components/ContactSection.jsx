
import { useState } from "react";



function ContactSection() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {

    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });

  };


  const handleSubmit = async (event) => {

    event.preventDefault();

    try {

      const response = await fetch(
        "http://127.0.0.1:5000/api/requests",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify(formData),
        }
      );


      const data = await response.json();


      if (response.ok) {

        setSubmitted(true);

        setFormData({
          name: "",
          email: "",
          message: "",
        });

      } else {

        alert(data.error);

      }

    } catch (error) {

      console.error(error);

      alert(
        "Unable to send request. Please make sure the TEFFECT backend is running."
      );

    }

  };


  return (
    <section className="contact" id="contact">

      <div className="contact-content">

        <p className="contact-label">
          GET IN TOUCH
        </p>

        <h2>
          Let's Create
          <br />
          Something Great.
        </h2>

        <p className="contact-description">
          Have a question about a product, want to place
          an order, or interested in a custom pair?
          We'd love to hear from you.
        </p>


        <div className="contact-details">

          <div>
            <span>Email</span>
            <p>awosmobolaji555@gmail.com</p>
          </div>

          <div>
            <span>Phone</span>
            <p>+234 810 933 7983</p>
          </div>

          <div>
            <span>Location</span>
            <p>Lagos, Nigeria</p>
          </div>

        </div>

      </div>


      <form
        className="contact-form"
        onSubmit={handleSubmit}
      >

        <div className="form-group">

          <label>
            Your Name
          </label>

          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
          />

        </div>


        <div className="form-group">

          <label>
            Email Address
          </label>

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />

        </div>


        <div className="form-group">

          <label>
            Footwear Request
          </label>

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="6"
            placeholder="Tell us what type of footwear you want..."
            required
          ></textarea>

        </div>


        <button type="submit">
          Send Request →
        </button>


        {submitted && (

          <p className="success-message">
            Your footwear request has been sent successfully!
          </p>

        )}

      </form>

    </section>
  );
}

export default ContactSection;
