import React, { useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { Instagram, ArrowRight } from "lucide-react";
import emailjs from "@emailjs/browser";
import vexoraaLogo from "../public/Dark_Wordmark.png";
import axios from 'axios';

const VexoraaAgencyLuxury = () => {
  const { scrollYProgress } = useScroll();
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  

  // --- EMAILJS LOGIC ---
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [status, setStatus] = useState("Request →");

  const navy = "#1B2A41";
const taupe = "#D1C7BD";
const bronze = "#8E795E";
const offWhite = "#F0EEE9";

useEffect(() => {
  console.log("STATUS CHANGED:", status);
}, [status]);


  const handleSendEmail = async (e) => {
  e.preventDefault();

  if (!email || status === "Sended") return;

  setStatus("Sended ✅");

  try {
    await axios.post(
      `${import.meta.env.VITE_BACKEND_URL}/api/user/sendEmail`,
      { name, email }
    );

    setStatus("Sent ✅");

    setTimeout(() => {
      setStatus("Request →");
    }, 3000);
    setEmail("");
    setName("");

  } catch (err) {
    setStatus("Failed ❌");

    setTimeout(() => {
      setStatus("Request →");
    }, 3000);
  }
};





  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.98]);
  const bgTextY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, isMobile ? -80 : -150],
  );

  // --- LUXURY COLOR PALETTE ---
  const silkIvory = "#FDFCFB"; // Clean Pearl White
  const deepGold = "#C5A059"; // Muted Luxury Gold for accents
  const charcoal = "#1A1A1A"; // Soft Black for readability
  const softGray = "rgba(0,0,0,0.03)";

  return (
    <div
      style={{
        backgroundColor: silkIvory,
        color: charcoal,
        overflowX: "hidden",
        minHeight: "100vh",
        fontFamily: "'Inter', sans-serif",
        position: "relative",
      }}
    >
      {/* --- REFINED LUXURY BACKGROUND --- */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none",
        }}
      >
        {/* Subtle radial glow to prevent "flat" white look */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: `radial-gradient(circle at 50% 50%, #FFFFFF 0%, ${silkIvory} 100%)`,
          }}
        />

        {/* Ultra-fine Noise Texture */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.02,
            background: 'url("https://grainy-gradients.vercel.app/noise.svg")',
            mixBlendMode: "overlay",
          }}
        />

        <motion.div
          style={{
            position: "absolute",
            top: isMobile ? "35%" : "30%",
            left: isMobile ? "4%" : "5%",
            y: bgTextY,
            display: "flex",
            flexDirection: "column",
            opacity: 0.03,
          }}
        >
          <h2
            style={{
              fontSize: isMobile ? "22vw" : "15vw",
              fontFamily: "'Playfair Display', serif",
              fontWeight: "300",
              margin: 0,
              letterSpacing: "-0.02em",
              lineHeight: 0.9,
            }}
          >
            Coming
          </h2>
          <h2
            style={{
              fontSize: isMobile ? "22vw" : "15vw",
              fontFamily: "'Playfair Display', serif",
              fontWeight: "100",
              fontStyle: "italic",
              margin: 0,
              lineHeight: 0.9,
              paddingLeft: isMobile ? "10vw" : "5vw",
            }}
          >
            Soon.
          </h2>
        </motion.div>

        {/* Subtle Vertical Guides */}
        <div
          style={{
            position: "absolute",
            left: isMobile ? "5%" : "10%",
            top: 0,
            bottom: 0,
            width: "1px",
            background: softGray,
          }}
        />
        <div
          style={{
            position: "absolute",
            right: isMobile ? "5%" : "10%",
            top: 0,
            bottom: 0,
            width: "1px",
            background: softGray,
          }}
        />
      </div>

      <div style={{ position: "relative", zIndex: 1 }}>
        {/* SECTION 1: HERO */}
        <motion.section
          style={{
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            opacity: heroOpacity,
            scale: heroScale,
            padding: isMobile ? "0 5%" : "0",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "40px",
              width: isMobile ? "90%" : "80%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              fontSize: "0.6rem",
              letterSpacing: "0.4rem",
              opacity: 0.3,
              fontWeight: "400",
            }}
          >
            <span>COLLECTION / 001</span>
            <span>EST. 2026</span>
          </div>
          <div style={{ textAlign: "center" }}>

            <p
              style={{
                fontSize: "0.65rem",
                letterSpacing: isMobile ? "0.6rem" : "1.2rem",
                textTransform: "uppercase",
                marginBottom: "25px",
                fontWeight: "300",
                opacity: 0.5,
              }}
            >
              The X Factor of AURA
            </p>
             <img style={{ width: isMobile ? "80%" : "40%" }} src={vexoraaLogo} alt="Vexoraa Logo" />

            {/* <h1
              style={{
                fontSize: isMobile ? "18vw" : "clamp(3rem, 10vw, 9rem)",
                letterSpacing: isMobile ? "0.3rem" : "1.2rem",
                fontFamily: "'Playfair Display', serif",
                fontWeight: "300",
                margin: "0",
                textTransform: "uppercase",
                lineHeight: 1,
              }}
            >
              Vexoraa
            </h1> */}
            <div
              style={{
                height: "1px",
                width: "80px",
                background: charcoal,
                margin: "40px auto",
                marginTop: "10px",
                opacity: 0.1,
              }}
            />
            <motion.button
              onClick={() =>
                document
                  .getElementById("join")
                  .scrollIntoView({ behavior: "smooth" })
              }
              whileHover={{
                backgroundColor: charcoal,
                color: silkIvory,
                scale: 1.02,
              }}
              whileTap={{ scale: 0.98 }}
              style={{
                padding: isMobile ? "18px 40px" : "22px 70px",
                background: "transparent",
                border: `1px solid ${charcoal}`,
                fontSize: "0.6rem",
                letterSpacing: "0.4rem",
                textTransform: "uppercase",
                cursor: "pointer",
                transition: "all 0.5s ease",
              }}
            >
              JOIN THE WAITLIST
            </motion.button>
          </div>
        </motion.section>

        {/* SECTION 2: PHILOSOPHY */}
        <section
          style={{
            marginBottom: isMobile ? "50%" : "",
            padding: isMobile ? "20px 5%" : "180px 10%",
            textAlign: "center",
          }}
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            style={{
              fontSize: isMobile ? "1.2rem" : "2.2rem",
              fontFamily: "'Playfair Display', serif",
              fontWeight: "300",
              lineHeight: 1.6,
            }}
          >
            Engineering{" "}
            <span style={{ fontStyle: "italic", opacity: 0.4 }}>silent</span>{" "}
            dominance <br />
            through{" "}
            <motion.span
              whileHover={{ color: deepGold }}
              style={{
                transition: "color 0.4s",
                borderBottom: "1px solid rgba(0,0,0,0.1)",
              }}
            >
              architectural
            </motion.span>{" "}
            tailoring.
          </motion.p>
        </section>

        {/* SECTION 3: THE ARCHIVE */}
        <section style={{ padding: "60px 0" }}>
          <div
            style={{
              padding: "0 8%",
              marginBottom: "40px",
              display: "flex",
              alignItems: "center",
              gap: "20px",
              opacity: 0.3,
            }}
          >
            <div
              style={{ width: "40px", height: "1px", background: charcoal }}
            />
            <p
              style={{
                letterSpacing: "0.5rem",
                fontSize: "0.5rem",
                fontWeight: "500",
              }}
            >
              GET A NEW AURA
            </p>
          </div>
          {[
            { title: "PREMIUM SHIRTS", meta: "OUR PRODUCT" },
            { title: "ESSENTIAL CUTS", meta: "OUR STYLE" },
            { title: "LIMITED RELEASE", meta: "OUR METHOD" },
          ].map((item, i) => (
            <motion.div
              key={i}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                padding: isMobile ? "45px 8%" : "75px 10%",
                borderTop: `1px solid ${softGray}`,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                cursor: "pointer",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <motion.div
                initial={false}
                animate={{ x: hoveredIndex === i ? 0 : "-101%" }}
                transition={{ duration: 0.7, ease: [0.19, 1, 0.22, 1] }}
                style={{
                  position: "absolute",
                  inset: 0,
                  backgroundColor: "rgba(0,0,0,0.015)",
                  zIndex: -1,
                }}
              />
              <div>
                <motion.p
                  animate={{
                    color: hoveredIndex === i ? deepGold : charcoal,
                    opacity: hoveredIndex === i ? 1 : 0.3,
                  }}
                  style={{
                    fontSize: "0.55rem",
                    letterSpacing: "0.3rem",
                    marginBottom: "12px",
                  }}
                >
                  {item.meta}
                </motion.p>
                <motion.h3
                  animate={{ x: hoveredIndex === i ? 20 : 0 }}
                  transition={{ duration: 0.6 }}
                  style={{
                    fontSize: isMobile ? "1.3rem" : "2.4rem",
                    fontFamily: "'Playfair Display', serif",
                    fontWeight: "300",
                    margin: 0,
                  }}
                >
                  {item.title}
                </motion.h3>
              </div>
              <motion.div
                animate={{
                  x: hoveredIndex === i ? 10 : 0,
                  opacity: hoveredIndex === i ? 1 : 0.2,
                  color: hoveredIndex === i ? deepGold : charcoal,
                }}
              >
                <ArrowRight size={isMobile ? 24 : 32} strokeWidth={1} />
              </motion.div>
            </motion.div>
          ))}
        </section>

        {/* SECTION 4: THE JOIN */}
        <section
          id="join"
          style={{
            padding: isMobile ? "180px 8%" : "180px 10%",
            textAlign: "center",
          }}
        >
          <div style={{ maxWidth: "600px", margin: "0 auto" }}>
            <h2
              style={{
                fontSize: isMobile ? "1.8rem" : "3.2rem",
                fontFamily: "'Playfair Display', serif",
                fontWeight: "300",
                marginBottom: "60px",
              }}
            >
              Join the Waitlist
            </h2>
            <form 
    onSubmit={handleSendEmail} 
    style={{ 
      position: "relative", 
      maxWidth: "600px", 
      margin: "4rem auto", // Form ko page par thodi saans lene ki jagah di
      padding: "0 1rem",
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    }}
  >
    {/* NAME FIELD */}
    <input
      type="text"
      required
      value={name}
      onChange={(e) => setName(e.target.value)}
      placeholder="FULL NAME"
      style={{
        width: "100%",
        background: "transparent",
        border: "none",
        borderBottom: `1px solid ${taupe}`, // Light taupe border for luxury feel
        padding: "25px 0", // Padding thodi badhayi readability ke liye
        textAlign: "center",
        letterSpacing: "0.6rem", // Widened for premium look
        fontSize: "0.75rem",
        outline: "none",
        borderRadius: 0,
        color: navy,
        transition: "border-color 0.4s ease",
      }}
      onFocus={(e) => e.target.style.borderColor = bronze}
      onBlur={(e) => e.target.style.borderColor = taupe}
    />

    {/* EMAIL FIELD */}
    <input
      type="email"
      required
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      placeholder="EMAIL ADDRESS"
      style={{
        width: "100%",
        background: "transparent",
        border: "none",
        borderBottom: `1px solid ${taupe}`,
        padding: "25px 0",
        marginTop: "10px", // Dono fields ke beech slight breathing space
        textAlign: "center",
        letterSpacing: "0.6rem",
        fontSize: "0.75rem",
        outline: "none",
        borderRadius: 0,
        color: navy,
        transition: "border-color 0.4s ease",
      }}
      onFocus={(e) => e.target.style.borderColor = bronze}
      onBlur={(e) => e.target.style.borderColor = taupe}
    />

    {/* SUBMIT BUTTON */}
    <motion.button
  type="submit"
  disabled={status === "Sending..."}
  whileHover={status === "Request →" ? {
    y: -3,
    color: bronze,
    letterSpacing: "0.8rem",
  } : {}}
  transition={{ duration: 0.4 }}
  style={{
    marginTop: "60px",
    background: "none",
    border: `1px solid ${navy}`,
    padding: "15px 40px",
    cursor: status === "Sending..." ? "not-allowed" : "pointer",
    fontSize: "0.7rem",
    letterSpacing: "0.5rem",
    textTransform: "uppercase",
    color: navy,
    fontWeight: "600",
    opacity: status === "Sending..." ? 0.6 : 1,
  }}
>
  {status}
</motion.button>

  </form>
          </div>
        </section>

        {/* FOOTER */}
        <footer
          style={{
            padding: "60px 10%",
            display: "flex",
            justifyContent: "space-between",
            opacity: 0.4,
            fontSize: "0.55rem",
            letterSpacing: "0.3rem",
            borderTop: `1px solid ${softGray}`,
          }}
        >
          <p>VEXORAA LIFESTYLE</p>
          <div style={{ display: "flex", gap: "30px" }}>
            <motion.a
              
              whileHover={{ color: deepGold, opacity: 1 }}
              style={{ cursor: "pointer", opacity: 0.6, color: "#1a1a1a" }}
              target="_blank"
              href="https://www.instagram.com/vexoraa.in/"
            >
              <Instagram size={16} strokeWidth={1.5} />
            </motion.a>
            <p>© 2026</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default VexoraaAgencyLuxury;
