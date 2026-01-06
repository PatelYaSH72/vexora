import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Instagram, ArrowRight } from 'lucide-react';
import emailjs from '@emailjs/browser';

const VexoraaAgencyLuxury = () => {
  const { scrollYProgress } = useScroll();
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  // --- EMAILJS LOGIC ---
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('Request Access →');

  const handleSendEmail = (e) => {
    e.preventDefault();
    if (!email) return;
    setStatus('Sending...');

    const serviceID = 'service_9zqbbg5';
    const templateID = 'template_ltgr76s';
    const publicKey = '1TT8oHJtHCQ5NclUm';

    const templateParams = {
      user_email: email,
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

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.98]);
  const bgTextY = useTransform(scrollYProgress, [0, 1], [0, isMobile ? -80 : -150]);

  // --- LUXURY COLOR PALETTE ---
  const silkIvory = '#FDFCFB'; // Clean Pearl White
  const deepGold = '#C5A059';  // Muted Luxury Gold for accents
  const charcoal = '#1A1A1A';  // Soft Black for readability
  const softGray = 'rgba(0,0,0,0.03)';

  return (
    <div style={{ backgroundColor: silkIvory, color: charcoal, overflowX: 'hidden', minHeight: '100vh', fontFamily: "'Inter', sans-serif", position: 'relative' }}>
      
      {/* --- REFINED LUXURY BACKGROUND --- */}
      <div style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none' }}>
        {/* Subtle radial glow to prevent "flat" white look */}
        <div style={{ 
            position: 'absolute', 
            inset: 0, 
            background: `radial-gradient(circle at 50% 50%, #FFFFFF 0%, ${silkIvory} 100%)` 
        }} />
        
        {/* Ultra-fine Noise Texture */}
        <div style={{ position: 'absolute', inset: 0, opacity: 0.02, background: 'url("https://grainy-gradients.vercel.app/noise.svg")', mixBlendMode: 'overlay' }} />
        
        <motion.div style={{ position: 'absolute', top: isMobile ? '35%' : '30%', left: isMobile ? '4%' : '5%', y: bgTextY, display: 'flex', flexDirection: 'column', opacity: 0.03 }}>
          <h2 style={{ fontSize: isMobile ? '22vw' : '15vw', fontFamily: "'Playfair Display', serif", fontWeight: '300', margin: 0, letterSpacing: '-0.02em', lineHeight: 0.9 }}>Coming</h2>
          <h2 style={{ fontSize: isMobile ? '22vw' : '15vw', fontFamily: "'Playfair Display', serif", fontWeight: '100', fontStyle: 'italic', margin: 0, lineHeight: 0.9, paddingLeft: isMobile ? '10vw' : '5vw' }}>Soon.</h2>
        </motion.div>
        
        {/* Subtle Vertical Guides */}
        <div style={{ position: 'absolute', left: isMobile ? '5%' : '10%', top: 0, bottom: 0, width: '1px', background: softGray }} />
        <div style={{ position: 'absolute', right: isMobile ? '5%' : '10%', top: 0, bottom: 0, width: '1px', background: softGray }} />
      </div>

      <div style={{ position: 'relative', zIndex: 1 }}>
        
        {/* SECTION 1: HERO */}
        <motion.section style={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', opacity: heroOpacity, scale: heroScale, padding: isMobile ? '0 5%' : '0' }}>
          <div style={{ position: 'absolute', top: '40px', width: isMobile ? '90%' : '80%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.6rem', letterSpacing: '0.4rem', opacity: 0.3, fontWeight: '400' }}>
            <span>COLLECTION / 001</span>
            <span>EST. 2026</span>
          </div>
          <div style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '0.65rem', letterSpacing: isMobile ? '0.6rem' : '1.2rem', textTransform: 'uppercase', marginBottom: '25px', fontWeight: '300', opacity: 0.5 }}>Studio Archive</p>
            <h1 style={{ fontSize: isMobile ? '18vw' : 'clamp(3rem, 10vw, 9rem)', letterSpacing: isMobile ? '0.3rem' : '1.2rem', fontFamily: "'Playfair Display', serif", fontWeight: '300', margin: '0', textTransform: 'uppercase', lineHeight: 1 }}>Vexoraa</h1>
            <div style={{ height: '1px', width: '80px', background: charcoal, margin: '40px auto', opacity: 0.1 }} />
            <motion.button
              onClick={() => document.getElementById('join').scrollIntoView({ behavior: 'smooth' })}
              whileHover={{ backgroundColor: charcoal, color: silkIvory, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              style={{ padding: isMobile ? '18px 40px' : '22px 70px', background: 'transparent', border: `1px solid ${charcoal}`, fontSize: '0.6rem', letterSpacing: '0.4rem', textTransform: 'uppercase', cursor: 'pointer', transition: 'all 0.5s ease' }}
            >
              Request Access
            </motion.button>
          </div>
        </motion.section>

        {/* SECTION 2: PHILOSOPHY */}
        <section style={{marginBottom: isMobile ? '50%' : '', padding: isMobile ? '20px 5%' : '180px 10%', textAlign: 'center' }}>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1.2 }} style={{ fontSize: isMobile ? '1.2rem' : '2.2rem', fontFamily: "'Playfair Display', serif", fontWeight: '300', lineHeight: 1.6 }}>
            Engineering <span style={{ fontStyle: 'italic', opacity: 0.4 }}>silent</span> dominance <br /> 
            through <motion.span whileHover={{ color: deepGold }} style={{ transition: 'color 0.4s', borderBottom: '1px solid rgba(0,0,0,0.1)' }}>architectural</motion.span> tailoring.
          </motion.p>
        </section>

        {/* SECTION 3: THE ARCHIVE */}
        <section style={{ padding: '60px 0' }}>
          <div style={{ padding: '0 8%', marginBottom: '40px', display: 'flex', alignItems: 'center', gap: '20px', opacity: 0.3 }}>
            <div style={{ width: '40px', height: '1px', background: charcoal }} />
            <p style={{ letterSpacing: '0.5rem', fontSize: '0.5rem', fontWeight: '500' }}>INDEX</p>
          </div>
          {[
            { title: 'PREMIUM POLOS', meta: 'SERIES I' },
            { title: 'ESSENTIAL CUTS', meta: 'SERIES II' },
            { title: 'LIMITED RELEASE', meta: 'SERIES III' }
          ].map((item, i) => (
            <motion.div key={i} onMouseEnter={() => setHoveredIndex(i)} onMouseLeave={() => setHoveredIndex(null)} style={{ padding: isMobile ? '45px 8%' : '75px 10%', borderTop: `1px solid ${softGray}`, display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', position: 'relative', overflow: 'hidden' }}>
              <motion.div initial={false} animate={{ x: hoveredIndex === i ? 0 : '-101%' }} transition={{ duration: 0.7, ease: [0.19, 1, 0.22, 1] }} style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.015)', zIndex: -1 }} />
              <div>
                <motion.p animate={{ color: hoveredIndex === i ? deepGold : charcoal, opacity: hoveredIndex === i ? 1 : 0.3 }} style={{ fontSize: '0.55rem', letterSpacing: '0.3rem', marginBottom: '12px' }}>{item.meta}</motion.p>
                <motion.h3 animate={{ x: hoveredIndex === i ? 20 : 0 }} transition={{ duration: 0.6 }} style={{ fontSize: isMobile ? '1.3rem' : '2.4rem', fontFamily: "'Playfair Display', serif", fontWeight: '300', margin: 0 }}>{item.title}</motion.h3>
              </div>
              <motion.div animate={{ x: hoveredIndex === i ? 10 : 0, opacity: hoveredIndex === i ? 1 : 0.2, color: hoveredIndex === i ? deepGold : charcoal }}>
                <ArrowRight size={isMobile ? 24 : 32} strokeWidth={1} />
              </motion.div>
            </motion.div>
          ))}
        </section>

        {/* SECTION 4: THE JOIN */}
        <section id="join" style={{ padding: isMobile ? '180px 8%' : '180px 10%', textAlign: 'center' }}>
          <div style={{ maxWidth: '600px', margin: '0 auto' }}>
            <h2 style={{ fontSize: isMobile ? '1.8rem' : '3.2rem', fontFamily: "'Playfair Display', serif", fontWeight: '300', marginBottom: '60px' }}>Join the Archive</h2>
            <form onSubmit={handleSendEmail} style={{ position: 'relative' }}>
              <input 
                type="email" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="EMAIL ADDRESS" 
                style={{ width: '100%', background: 'transparent', border: 'none', borderBottom: '1px solid rgba(0,0,0,0.15)', padding: '20px 0', textAlign: 'center', letterSpacing: '0.5rem', fontSize: '0.8rem', outline: 'none', borderRadius: 0 }} 
              />
              <motion.button 
                type="submit"
                whileHover={{ y: -5, color: deepGold }}
                style={{ marginTop: '50px', background: 'none', border: 'none', cursor: 'pointer', fontSize: '0.65rem', letterSpacing: '0.5rem', textTransform: 'uppercase', color: charcoal, fontWeight: '500' }}
              >
                {status}
              </motion.button>
            </form>
          </div>
        </section>

        {/* FOOTER */}
        <footer style={{ padding: '60px 10%', display: 'flex', justifyContent: 'space-between', opacity: 0.4, fontSize: '0.55rem', letterSpacing: '0.3rem', borderTop: `1px solid ${softGray}` }}>
          <p>VEXORAA STUDIO</p>
          <div style={{ display: 'flex', gap: '30px' }}>
            <motion.div whileHover={{ color: deepGold, opacity: 1 }} style={{ cursor: 'pointer' }}><Instagram size={16} strokeWidth={1.5} /></motion.div>
            <p>© 2026</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default VexoraaAgencyLuxury;