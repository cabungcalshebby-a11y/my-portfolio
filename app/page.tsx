"use client";

import { motion } from "framer-motion";
const inputStyle = {
  padding: "12px",
  borderRadius: "10px",
  border: "1px solid #ddd",
  fontSize: "14px"
};
export default function Home() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>

      {/* HERO SECTION */}
      <section style={{
        backgroundColor: "#F5EDE4",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "50px"
      }}>

        <div style={{
          display: "flex",
          alignItems: "center",
          gap: "60px",
          flexWrap: "wrap"
        }}>

          {/* IMAGE */}
          <img 
            src="/profile.jpg"
            style={{
              width: "300px",
              borderRadius: "30px",
              boxShadow: "0 10px 30px rgba(0,0,0,0.1)"
            }}
          />

          {/* TEXT */}
          <div>
            <h1 style={{
              fontSize: "60px",
              color: "#6B705C",
              marginBottom: "10px"
            }}>
              Sheila Cabungcal
            </h1>

            <p style={{
              letterSpacing: "3px",
              color: "#A5A58D",
              fontSize: "12px",
              marginBottom: "20px"
            }}>
              SALES & MARKETING STRATEGIST
            </p>

            {/* ✅ KEEP YOUR ORIGINAL DESCRIPTION */}
            <p style={{
              color: "#2E2E2E",
              maxWidth: "400px",
              marginBottom: "30px",
              fontSize: "16px",
              lineHeight: "1.6"
            }}>
              I help businesses grow through automation, digital marketing, and creative design using Go High Level and Canva.
            </p>

            <a href="mailto:Cabungcalshebby@gmail.com">
              <button style={{
                backgroundColor: "#6B705C",
                color: "#fff",
                padding: "12px 25px",
                borderRadius: "30px",
                border: "none",
                cursor: "pointer"
              }}>
                Hire Me
              </button>
            </a>
          </div>

        </div>
      </section>

      {/* PROJECTS */}
      <section style={{
        backgroundColor: "#EFE6DD",
        padding: "100px 50px",
        textAlign: "center"
      }}>
        <h2 style={{
          color: "#6B705C",
          fontSize: "36px",
          marginBottom: "60px"
        }}>
          My Projects
        </h2>

        <div style={{
          display: "flex",
          justifyContent: "center",
          gap: "40px",
          flexWrap: "wrap"
        }}>

          {[{
            img: "/project1.jpg",
            title: "GHL Automation System",
            desc: "Built a full CRM automation with funnels, SMS & email workflows.",
            result: "✔ +40% faster lead response"
          },
          {
            img: "/project2.jpg",
            title: "Landing Page Design",
            desc: "High-converting modern landing page focused on UX & mobile.",
            result: "✔ +25% conversion rate"
          },
          {
            img: "/project3.jpg",
            title: "Social Media Design",
            desc: "Canva branding kit for consistent and aesthetic content.",
            result: "✔ Stronger engagement"
          }].map((p, i) => (

            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              style={{
                background: "#fff",
                borderRadius: "20px",
                width: "320px",
                overflow: "hidden",
                boxShadow: "0 10px 25px rgba(0,0,0,0.08)"
              }}
            >
              <img src={p.img} style={{
                width: "100%",
                height: "200px",
                objectFit: "cover"
              }} />

              <div style={{ padding: "25px" }}>
                <h3 style={{
                  color: "#6B705C",
                  fontSize: "22px",
                  marginBottom: "10px"
                }}>
                  {p.title}
                </h3>

                <p style={{
                  color: "#2E2E2E",
                  fontSize: "16px",
                  lineHeight: "1.6"
                }}>
                  {p.desc}
                </p>

                <p style={{
                  color: "#A5A58D",
                  fontSize: "14px",
                  marginTop: "10px"
                }}>
                  {p.result}
                </p>

                <button style={{
                  marginTop: "15px",
                  backgroundColor: "#6B705C",
                  color: "#fff",
                  padding: "10px 20px",
                  borderRadius: "20px",
                  border: "none",
                  cursor: "pointer"
                }}>
                  View Project
                </button>
              </div>

            </motion.div>

          ))}

        </div>
      </section>

      {/* TESTIMONIAL */}
      <section style={{
        backgroundColor: "#F5EDE4",
        padding: "80px",
        textAlign: "center"
      }}>
        <h2 style={{
          color: "#6B705C",
          fontSize: "30px"
        }}>
          Testimonials
        </h2>

        <p style={{
          fontStyle: "italic",
          color: "#2E2E2E",
          maxWidth: "600px",
          margin: "20px auto",
          fontSize: "16px"
        }}>
          “Sheila helped us automate our entire system and improved our marketing. Super reliable and creative!”
        </p>

        <p style={{ color: "#A5A58D" }}>
          – Satisfied Client
        </p>
      </section>

      {/* CONTACT */}
      <section style={{
        backgroundColor: "#6B705C",
        color: "#fff",
        padding: "80px",
        textAlign: "center"
      }}>
        <h2 style={{ fontSize: "32px", marginBottom: "10px" }}>
          Let’s Work Together
        </h2>

        <p style={{ marginBottom: "20px" }}>
          Ready to grow your business? Let’s connect!
        </p>

        <p>📧 Cabungcalshebby@gmail.com</p>

        <p style={{ marginBottom: "20px" }}>
          🔗 
          <a 
            href="https://www.linkedin.com/in/sheila-cabungcal-91496b221"
            target="_blank"
            style={{ color: "#fff", marginLeft: "5px" }}
          >
            LinkedIn Profile
          </a>
        </p>

        <a href="mailto:Cabungcalshebby@gmail.com">
          <button style={{
            backgroundColor: "#fff",
            color: "#6B705C",
            padding: "12px 25px",
            borderRadius: "25px",
            border: "none",
            cursor: "pointer"
          }}>
            Hire Me Now
          </button>
        </a>
      </section>
<section style={{
  padding: "100px 20px",
  backgroundColor: "#F8F5F0",
  textAlign: "center"
}}>
  <h2 style={{
    fontSize: "32px",
    color: "#6B705C",
    marginBottom: "20px"
  }}>
    Let’s Work Together
  </h2>

  <p style={{
    color: "#2E2E2E",
    marginBottom: "40px",
    fontSize: "17px",
    fontWeight: "500",
    maxWidth: "500px",
    marginLeft: "auto",
    marginRight: "auto"
  }}>
    Ready to grow your business? Send me a message and let's talk!
  </p>

  <form
    action="https://formsubmit.co/Cabungcalshebby@gmail.com"
    method="POST"
    style={{
      maxWidth: "500px",
      margin: "auto",
      display: "flex",
      flexDirection: "column",
      gap: "15px"
    }}
  >

    <input
      type="text"
      name="name"
      placeholder="Your Name"
      required
      style={inputStyle}
    />

    <input
      type="email"
      name="email"
      placeholder="Your Email"
      required
      style={inputStyle}
    />

    <textarea
      name="message"
      placeholder="Your Message"
      required
      style={{
        ...inputStyle,
        color: "#000",
        backgroundColor: "#fff",
        minHeight: "120px"
      }}
    />

    <button
      type="submit"
      style={{
        backgroundColor: "#6B705C",
        color: "#fff",
        padding: "12px",
        borderRadius: "25px",
        border: "none",
        cursor: "pointer"
      }}
    >
      Send Message
    </button>

  </form>
</section>