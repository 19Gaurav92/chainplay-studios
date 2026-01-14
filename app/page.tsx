'use client';

import React from 'react';
import { ArrowRight, ArrowUpRight, Smartphone, Code2, Globe, MonitorPlay, Zap, Shield } from 'lucide-react';
import ContactForm from '@/components/ContactForm';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-white font-sans overflow-x-hidden">
      
      {/* --- NAVBAR (Glass Effect) --- */}
      <nav className="fixed w-full z-50 top-0 left-0 border-b border-white/5 bg-black/50 backdrop-blur-lg">
        <div className="max-w-[1400px] mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-2xl font-heading font-bold tracking-tight">
            CHAINPLAY<span className="text-primary">.</span>
          </div>
          <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-400">
            <a href="#work" className="hover:text-white transition-colors">Work</a>
            <a href="#services" className="hover:text-white transition-colors">Expertise</a>
            <a href="#about" className="hover:text-white transition-colors">Studio</a>
            <a href="#contact" className="px-5 py-2.5 bg-white text-black font-bold hover:bg-primary transition-colors">
              Get Quote
            </a>
          </div>
        </div>
      </nav>

      {/* --- HERO SECTION (Video Background Style) --- */}
      <section className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden">
        
        {/* VIDEO BACKGROUND LAYER */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-black/30 z-10" />
          <div className="absolute inset-0 bg-black/40 z-10" />
          {/* Using a high-quality Sci-Fi loop as placeholder. Replace src with your game footage later. */}
          <video 
            autoPlay loop muted playsInline 
            className="w-full h-full object-cover scale-110"
            poster="https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=2000"
          >
            <source src="https://assets.mixkit.co/videos/preview/mixkit-stars-in-space-1610-large.mp4" type="video/mp4" />
          </video>
        </div>

        {/* CONTENT */}
        <div className="relative z-20 container max-w-[1200px] mx-auto px-6 text-center pt-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-heading text-6xl md:text-8xl font-bold leading-[0.9] tracking-tighter mb-8 text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400">
              WE BUILD <br/> WORLDS.
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10 font-light">
              The premier development partner for founders. <br/>
              <span className="text-white font-medium">Unity Experts. Web3 Native. 15 Years of Excellence.</span>
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#contact" className="min-w-[200px] px-8 py-5 bg-primary text-black font-bold text-lg hover:bg-white transition-all flex items-center justify-center gap-2 group">
                Start Project <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#work" className="min-w-[200px] px-8 py-5 border border-white/20 hover:bg-white/10 backdrop-blur-sm transition-all text-lg font-medium">
                View Portfolio
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- STATS MARQUEE (The "Agency" Flex) --- */}
      <section className="border-y border-white/5 bg-surface/50 backdrop-blur-sm">
        <div className="max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-white/5">
          {[
            { label: "Games Shipped", val: "50+" },
            { label: "Years Exp", val: "15" },
            { label: "Downloads", val: "10M+" },
            { label: "Client Rating", val: "4.9/5" }
          ].map((stat, i) => (
            <div key={i} className="py-8 text-center">
              <div className="font-heading text-4xl md:text-5xl font-bold text-white mb-1">{stat.val}</div>
              <div className="text-xs uppercase tracking-widest text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* --- SELECTED WORK (Big Imagery) --- */}
      <section id="work" className="py-32 px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex items-end justify-between mb-16">
            <div>
              <h2 className="font-heading text-5xl md:text-6xl font-bold mb-4">Selected Work</h2>
              <p className="text-gray-400">Engineering prowess meets creative chaos.</p>
            </div>
            <button className="hidden md:flex items-center gap-2 text-primary border-b border-primary pb-1">View All <ArrowRight size={16}/></button>
          </div>

          <div className="grid gap-16">
            {/* PROJECT 1 */}
            <div className="group cursor-pointer">
              <div className="relative aspect-video overflow-hidden bg-surface mb-6 border border-white/10">
                <img 
                  src="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2670&auto=format&fit=crop" 
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                  alt="Project 1"
                />
                <div className="absolute top-4 right-4 bg-black/80 backdrop-blur text-xs font-bold px-3 py-1 border border-white/10">MMORPG</div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-3xl font-heading font-bold mb-2 group-hover:text-primary transition-colors">Neon Odyssey</h3>
                  <p className="text-gray-400 text-sm">Unity 6 / Multiplayer / Custom Backend</p>
                </div>
                <ArrowUpRight className="text-white/30 group-hover:text-white transition-colors" size={32}/>
              </div>
            </div>

            {/* PROJECT 2 */}
            <div className="group cursor-pointer">
              <div className="relative aspect-video overflow-hidden bg-surface mb-6 border border-white/10">
                <img 
                  src="https://images.unsplash.com/photo-1614726365723-49cfae9d0d3d?q=80&w=2669&auto=format&fit=crop" 
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                  alt="Project 2"
                />
                <div className="absolute top-4 right-4 bg-black/80 backdrop-blur text-xs font-bold px-3 py-1 border border-white/10">WEB3 CASINO</div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-3xl font-heading font-bold mb-2 group-hover:text-primary transition-colors">Solana Slots</h3>
                  <p className="text-gray-400 text-sm">React / Web3.js / Smart Contracts</p>
                </div>
                <ArrowUpRight className="text-white/30 group-hover:text-white transition-colors" size={32}/>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SERVICES (Clean Grid) --- */}
      <section id="services" className="py-32 bg-surface/30 px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="col-span-full md:col-span-1 mb-8 md:mb-0">
              <h2 className="font-heading text-4xl font-bold mb-6">Our <br/>Expertise</h2>
              <p className="text-gray-400 leading-relaxed mb-8">
                We bridge the gap between AAA visual fidelity and robust, scalable architecture. 
                Strict NDAs. Full IP transfer.
              </p>
              <a href="#contact" className="text-primary font-bold hover:text-white transition-colors flex items-center gap-2">
                Download Tech Deck <ArrowRight size={16}/>
              </a>
            </div>

            {/* Service Cards */}
            <div className="p-8 bg-background border border-white/5 hover:border-primary/50 transition-colors group">
              <Smartphone className="text-primary mb-6" size={32}/>
              <h3 className="text-xl font-bold mb-3">Mobile & PC</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Native builds for iOS, Android, and Steam using Unity & Unreal. Optimized for performance on low-end devices.
              </p>
            </div>

            <div className="p-8 bg-background border border-white/5 hover:border-primary/50 transition-colors group">
              <Globe className="text-primary mb-6" size={32}/>
              <h3 className="text-xl font-bold mb-3">Web3 & Blockchain</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Seamless wallet integration, smart contract development, and tokenomics logic for Play-to-Earn economies.
              </p>
            </div>

            <div className="p-8 bg-background border border-white/5 hover:border-primary/50 transition-colors group">
              <MonitorPlay className="text-primary mb-6" size={32}/>
              <h3 className="text-xl font-bold mb-3">Live Ops</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Post-launch support, server scaling, and real-time analytics dashboards to monitor player retention.
              </p>
            </div>

            <div className="p-8 bg-background border border-white/5 hover:border-primary/50 transition-colors group">
              <Zap className="text-primary mb-6" size={32}/>
              <h3 className="text-xl font-bold mb-3">Rapid Prototyping</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                MVP development in 4-6 weeks to validate core loops before committing to full-scale production.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- CONTACT (Split Layout) --- */}
      <section id="contact" className="relative py-32 px-6 overflow-hidden">
        {/* Decorative BG */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 blur-[120px] rounded-full opacity-20 pointer-events-none"></div>

        <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <div>
            <h2 className="font-heading text-5xl md:text-7xl font-bold mb-6">Let's Build <br/> The Future.</h2>
            <p className="text-xl text-gray-400 mb-8">
              Ready to deploy? We accept projects starting at $5k. <br/>
              Strict NDA provided upon request.
            </p>
            <div className="flex flex-col gap-4 text-sm text-gray-500">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-surface flex items-center justify-center border border-white/10">
                  <Shield size={16} className="text-primary"/>
                </div>
                <span>100% IP Ownership Transfer</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-surface flex items-center justify-center border border-white/10">
                  <Code2 size={16} className="text-primary"/>
                </div>
                <span>Clean, Documented Codebase</span>
              </div>
            </div>
          </div>

          <div className="bg-surface/50 p-1 border border-white/10 rounded-2xl backdrop-blur-md">
            <ContactForm />
          </div>
        </div>
      </section>

      <footer className="py-8 border-t border-white/5 text-center text-gray-600 text-sm">
        <p>© 2026 ChainPlay Studios. All rights reserved.</p>
      </footer>
    </div>
  );
}