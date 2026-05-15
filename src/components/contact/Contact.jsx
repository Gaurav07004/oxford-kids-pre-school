import { useState } from "react";

import { contactContent, contactFeatures } from "../../content/content";

import "./contact.css";

import {
  IoChatbubbleOutline,
  IoPeopleOutline,
  IoShieldCheckmarkOutline,
  IoHeartOutline,
} from "react-icons/io5";

const Contact = () => {
  const [formData, setFormData] = useState({
    parentName: "",
    phoneNumber: "",
    emailAddress: "",
    childAge: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,

      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = "New Admission Inquiry | Oxford Kids Pre School";

    const body = `
Hello Oxford Kids Team,

I hope you are doing well.
I would like to inquire about admission for my child at Oxford Kids Pre School. Please find the details below:

Parent Name: ${formData.parentName}
Phone Number: ${formData.phoneNumber}
Email Address: ${formData.emailAddress}
Child Age: ${formData.childAge}
Message: ${formData.message}

Please contact me regarding admission process, fee structure, school timings, and other details.

Thank you.
Regards,
${formData.parentName}
`;

    window.location.href = `mailto:info@oxfordkids.com?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;

    setFormData({
      parentName: "",
      phoneNumber: "",
      emailAddress: "",
      childAge: "",
      message: "",
    });
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <div className="contact-heading">
          CONTACT <span>US</span>
        </div>

        <div className="contact-section">
          <div className="contact-left">
            <h2>
              Let’s Connect With
              <span> Oxford Kids </span>
            </h2>

            <p className="contact-description">
              We would love to hear from you. Reach out to us for admissions,
              inquiries, or school visits and give your child the perfect start
              to a bright future.
            </p>

            <div className="contact-info-grid">
              {contactFeatures.map((item, index) => (
                <div className="contact-card" key={index}>
                  <div className="program-header">
                    <div className="contact-icon">
                      {
                        [
                          <IoChatbubbleOutline />,
                          <IoPeopleOutline />,
                          <IoShieldCheckmarkOutline />,
                          <IoHeartOutline />,
                        ][index]
                      }
                    </div>

                    <h3>{item.title}</h3>
                  </div>

                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="contact-right">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-header">
                <h2>Send Inquiry</h2>

                <p>Fill out the form and our team will contact you shortly.</p>
              </div>

              <div className="form-group">
                <input
                  type="text"
                  name="parentName"
                  placeholder="Parent Name"
                  value={formData.parentName}
                  onChange={handleChange}
                  required
                />

                <input
                  type="text"
                  name="phoneNumber"
                  placeholder="Phone Number"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <input
                  type="email"
                  name="emailAddress"
                  placeholder="Email Address"
                  value={formData.emailAddress}
                  onChange={handleChange}
                />

                <input
                  type="text"
                  name="childAge"
                  placeholder="Child Age"
                  value={formData.childAge}
                  onChange={handleChange}
                />
              </div>

              <textarea
                rows="5"
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
              ></textarea>

              <button type="submit">Submit Inquiry</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
