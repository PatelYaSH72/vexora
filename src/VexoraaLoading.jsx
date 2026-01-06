import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Instagram, ArrowRight } from 'lucide-react';
import emailjs from '@emailjs/browser'; // EmailJS Import

const VexoraaAgencyLuxury = () => {
  const { scrollYProgress } = useScroll();
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  // --- EMAILJS LOGIC START ---
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('Request Access →');

  const handleSendEmail = (e) => {
    e.preventDefault();
    if (!email) return;

    setStatus('Sending...');

    // Yahan apni IDs dalein
    const serviceID = 'service_9zqbbg5';
    const templateID = 'template_ltgr76s';
    const publicKey = '1TT8oHJtHCQ5NclUm';

    const templateParams = {
      user_email: email, // Isse template mein {{user_email}} likhein
      time: new Date().toLocaleString(),
    };

    emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then(() => {
        setStatus('Access Requested.');
        setEmail('');
        setTimeout(() => setStatus('Request Access →'), 3000);
      })
      .catch((err) => {
        console.error('FAILED...', err);
        setStatus('Error. Try Again.');
      });
  };
  // --- EMAILJS LOGIC END ---

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.98]);
  const bgTextY = useTransform(scrollYProgress, [0, 1], [0, isMobile ? -80 : -150]);

  const silkIvory = '#F7F5F2'; 
  const deepNavy = '#0A1128';
  const skyBlue = '#5BC0EB';

  return (
    <div style={{ backgroundColor: silkIvory, color: deepNavy, overflowX: 'hidden', minHeight: '100vh', fontFamily: "'Inter', sans-serif", position: 'relative' }}>
      
      {/* --- BACKGROUND --- */}
      <div style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none' }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.04, background: 'url("https://grainy-gradients.vercel.app/noise.svg")', mixBlendMode: 'multiply' }} />
        <motion.div style={{ position: 'absolute', top: isMobile ? '35%' : '30%', left: isMobile ? '4%' : '5%', y: bgTextY, display: 'flex', flexDirection: 'column', opacity: 0.04 }}>
          <h2 style={{ fontSize: isMobile ? '22vw' : '15vw', fontFamily: "'Playfair Display', serif", fontWeight: '300', margin: 0, letterSpacing: '-0.02em', lineHeight: 0.9 }}>Coming</h2>
          <h2 style={{ fontSize: isMobile ? '22vw' : '15vw', fontFamily: "'Playfair Display', serif", fontWeight: '100', fontStyle: 'italic', margin: 0, lineHeight: 0.9, paddingLeft: isMobile ? '10vw' : '5vw' }}>Soon.</h2>
        </motion.div>
        <div style={{ position: 'absolute', left: isMobile ? '5%' : '10%', top: 0, bottom: 0, width: '0.5px', background: 'rgba(0,0,0,0.04)' }} />
        <div style={{ position: 'absolute', right: isMobile ? '5%' : '10%', top: 0, bottom: 0, width: '0.5px', background: 'rgba(0,0,0,0.04)' }} />
      </div>

      {/* --- CONTENT --- */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        
        {/* SECTION 1: HERO */}
        <motion.section style={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', opacity: heroOpacity, scale: heroScale, padding: isMobile ? '0 5%' : '0' }}>
          <div style={{ position: 'absolute', top: '40px', width: isMobile ? '90%' : '80%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: isMobile ? '0.45rem' : '0.6rem', letterSpacing: '0.3rem', opacity: 0.4 }}>
            <span>COLLECTION / 001</span>
            <span>EST. 2026</span>
          </div>
          <div style={{ textAlign: 'center' }}>
            <p style={{ fontSize: isMobile ? '0.5rem' : '0.65rem', letterSpacing: isMobile ? '0.6rem' : '1.2rem', textTransform: 'uppercase', marginBottom: '20px', fontWeight: '300', opacity: 0.6 }}>Studio Archive</p>
            <h1 style={{ fontSize: isMobile ? '18vw' : 'clamp(3rem, 12vw, 10rem)', letterSpacing: isMobile ? '0.3rem' : '1.5rem', fontFamily: "'Playfair Display', serif", fontWeight: '300', margin: '0', textTransform: 'uppercase', lineHeight: 1 }}>Vexoraa</h1>
            <div style={{ height: '1px', width: isMobile ? '60px' : '120px', background: deepNavy, margin: isMobile ? '25px auto' : '45px auto', opacity: 0.15 }} />
            <motion.button
              onClick={() => document.getElementById('join').scrollIntoView({ behavior: 'smooth' })}
              whileHover={{ backgroundColor: deepNavy, color: silkIvory, scale: 1.05, letterSpacing: '0.6rem' }}
              whileTap={{ scale: 0.98 }}
              style={{ padding: isMobile ? '15px 35px' : '20px 65px', background: 'transparent', border: `0.5px solid ${deepNavy}`, fontSize: isMobile ? '0.5rem' : '0.65rem', letterSpacing: '0.4rem', textTransform: 'uppercase', cursor: 'pointer', transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)' }}
            >
              Request Access
            </motion.button>
          </div>
        </motion.section>

        {/* SECTION 2: PHILOSOPHY */}
        <section style={{ padding: isMobile ? '40px 1% 100px' : '180px 10%', marginTop: isMobile ? '-120px' : '0', textAlign: 'center', position: 'relative', zIndex: 2 }}>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1.2 }} style={{ fontSize: isMobile ? '1.1rem' : '2.4rem', fontFamily: "'Playfair Display', serif", fontWeight: '300', lineHeight: 1.7 }}>
            Engineering <span style={{ fontStyle: 'italic', opacity: 0.5 }}>silent</span> dominance <br /> 
            through <motion.span whileHover={{ color: skyBlue }} style={{ transition: 'color 0.4s' }}>architectural</motion.span> tailoring.
          </motion.p>
        </section>

        {/* SECTION 3: THE ARCHIVE */}
        <section style={{ padding: isMobile ? '40px 0' : '100px 0' }}>
          <div style={{ padding: '0 8%', marginBottom: '40px', display: 'flex', alignItems: 'center', gap: '20px', opacity: 0.4 }}>
            <div style={{ width: '30px', height: '1px', background: deepNavy }} />
            <p style={{ letterSpacing: '0.4rem', fontSize: '0.5rem' }}>INDEX</p>
          </div>
          {[
            { title: 'PREMIUM POLOS', meta: 'SERIES I' },
            { title: 'ESSENTIAL CUTS', meta: 'SERIES II' },
            { title: 'LIMITED RELEASE', meta: 'SERIES III' }
          ].map((item, i) => (
            <motion.div key={i} onMouseEnter={() => setHoveredIndex(i)} onMouseLeave={() => setHoveredIndex(null)} style={{ padding: isMobile ? '40px 8%' : '70px 10%', borderTop: '1px solid rgba(0,0,0,0.05)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', position: 'relative', overflow: 'hidden' }}>
              <motion.div initial={false} animate={{ x: hoveredIndex === i ? 0 : '-101%' }} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }} style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(91, 192, 235, 0.03)', zIndex: -1 }} />
              <div>
                <motion.p animate={{ color: hoveredIndex === i ? skyBlue : deepNavy, opacity: hoveredIndex === i ? 1 : 0.3 }} style={{ fontSize: '0.55rem', letterSpacing: '0.2rem', marginBottom: '10px', transition: 'color 0.4s' }}>{item.meta}</motion.p>
                <motion.h3 animate={{ x: hoveredIndex === i ? 25 : 0 }} transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }} style={{ fontSize: isMobile ? '1.2rem' : '2.5rem', fontFamily: "'Playfair Display', serif", fontWeight: '300', margin: 0 }}>{item.title}</motion.h3>
              </div>
              <motion.div animate={{ x: hoveredIndex === i ? 10 : 0, y: hoveredIndex === i ? -10 : 0, opacity: hoveredIndex === i ? 1 : 0.4, color: hoveredIndex === i ? skyBlue : deepNavy }} transition={{ duration: 0.4 }}>
                <ArrowRight size={isMobile ? 20 : 35} strokeWidth={1} />
              </motion.div>
            </motion.div>
          ))}
        </section>

        {/* SECTION 4: THE JOIN (FORM LOGIC ADDED) */}
        <section id="join" style={{ padding: isMobile ? '80px 8%' : '200px 10%', textAlign: 'center' }}>
          <div style={{ maxWidth: '600px', margin: '0 auto' }}>
            <h2 style={{ fontSize: isMobile ? '1.6rem' : '3.5rem', fontFamily: "'Playfair Display', serif", fontWeight: '300', marginBottom: isMobile ? '30px' : '80px' }}>Join the Archive</h2>
            <form onSubmit={handleSendEmail} style={{ position: 'relative' }}>
              <input 
                type="email" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="EMAIL ADDRESS" 
                style={{ width: '100%', background: 'transparent', border: 'none', borderBottom: '1px solid rgba(0,0,0,0.1)', padding: '15px 0', textAlign: 'center', letterSpacing: isMobile ? '0.3rem' : '0.6rem', fontSize: isMobile ? '0.8rem' : '0.85rem', outline: 'none', borderRadius: 0 }} 
              />
              <motion.button 
                type="submit"
                whileHover={{ x: 10, color: skyBlue }}
                style={{ marginTop: '40px', background: 'none', border: 'none', cursor: 'pointer', fontSize: '0.6rem', letterSpacing: '0.4rem', textTransform: 'uppercase', color: deepNavy, transition: 'color 0.3s' }}
              >
                {status}
              </motion.button>
            </form>
          </div>
        </section>

        {/* FOOTER */}
        <footer style={{ padding: isMobile ? '60px 8%' : '80px 10%', display: 'flex', justifyContent: 'space-between', opacity: 0.3, fontSize: '0.5rem', letterSpacing: '0.2rem', borderTop: '1px solid rgba(0,0,0,0.03)' }}>
          <p>VEXORAA STUDIO</p>
          <div style={{ display: 'flex', gap: '20px' }}>
            <motion.div whileHover={{ color: skyBlue, opacity: 1 }} style={{ cursor: 'pointer' }}><Instagram size={16} strokeWidth={1.5} /></motion.div>
            <p>© 2026</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default VexoraaAgencyLuxury;