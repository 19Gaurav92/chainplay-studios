'use client';

import React from 'react';
import Head from 'next/head';
import { Gamepad2, Layers, Cpu, Code2, Smartphone, ShieldCheck, ArrowRight, Wallet, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-white selection:bg-primary selection:text-background font-sans">
      
      {/* --- NAVBAR --- */}
      <nav className="fixed w-full z-50 bg-background/90 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-2xl font-bold tracking-tighter text-white">
            CHAINPLAY <span className="text-primary">.</span>
          </div>
          <div className="hidden md:flex space-x-8 text-sm font-medium text-gray-300">
            <a href="#work" className="hover:text-primary transition-colors">Work</a>
            <a href="#services" className="hover:text-primary transition-colors">Services</a>
            <a href="#process" className="hover:text-primary transition-colors">Process</a>
          </div>
          <a href="#contact" className="px-6 py-2 bg-white text-background font-bold text-sm hover:bg-primary transition-colors">
            Get Quote
          </a>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 border-b border-white/5">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-3 py-1 mb-6 border border-primary/20 bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase rounded-full">
              Studio-First Development
            </div>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              We Build <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
                Revenue Engines.
              </span>
            </h1>
            <p className="text-lg text-secondary mb-8 max-w-lg leading-relaxed">
              15 Years Experience. Unity Experts. Native Web3 Integration. 
              The technical partner for founders targeting a $1M+ exit.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="px-8 py-4 bg-primary text-background font-bold text-lg hover:bg-white transition-colors flex items-center justify-center gap-2">
                Request Proposal <ArrowRight size={18} />
              </a>
              <a href="#work" className="px-8 py-4 border border-white/20 text-white font-medium hover:bg-white/5 transition-colors text-center">
                View Case Studies
              </a>
            </div>
          </motion.div>
          
          {/* Placeholder for Hero Graphic/Game Screenshot */}
          <div className="relative h-[400px] md:h-[500px] bg-gradient-to-br from-surface to-background border border-white/10 rounded-lg overflow-hidden flex items-center justify-center group">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1552820728-8b83bb6b773f?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>
            <div className="relative z-10 text-center p-8">
               <Gamepad2 size={64} className="mx-auto text-primary mb-4" />
               <p className="font-mono text-sm text-primary tracking-widest">LIVE PREVIEW</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- TRUST BAR --- */}
      <section className="py-10 border-b border-white/5 bg-surface/30">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-xs text-secondary mb-6 tracking-widest uppercase">Trusted Tech Stack</p>
          <div className="flex flex-wrap justify-center gap-12 md:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Replace with actual SVGs later */}
            <span className="text-xl font-bold flex items-center gap-2"><Layers size={20}/> Unity</span>
            <span className="text-xl font-bold flex items-center gap-2"><CheckCircle size={20}/> Solana</span>
            <span className="text-xl font-bold flex items-center gap-2"><Wallet size={20}/> MetaMask</span>
            <span className="text-xl font-bold flex items-center gap-2"><Cpu size={20}/> Node.js</span>
          </div>
        </div>
      </section>

      {/* --- ABOUT SECTION (The Copy We Wrote) --- */}
      <section className="py-24 px-6 bg-background">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">Engineering Play. Architecting Value.</h2>
          <div className="space-y-6 text-secondary text-lg leading-relaxed">
            <p>
              At <strong className="text-white">ChainPlay Studios</strong>, we do not just build games; we engineer digital assets. 
              Founded on a bedrock of 15 years of industry experience, our studio was established to solve the fragmentation in the market: 
              the gap between high-fidelity gaming experiences and robust, secure blockchain infrastructure.
            </p>
            <p>
              We operate as a silent engine behind successful founders. We respect the sanctity of intellectual property; 
              we work under strict NDAs, ensuring your vision remains yours, while the execution becomes our masterpiece.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mt-16 text-left">
            <div className="p-6 border border-white/5 bg-surface/20">
              <h3 className="text-primary font-bold text-xl mb-2">15-Year Pedigree</h3>
              <p className="text-secondary text-sm">We navigated the mobile revolution, and now we are defining the Web3 expansion. Mature, tested codebases.</p>
            </div>
            <div className="p-6 border border-white/5 bg-surface/20">
              <h3 className="text-primary font-bold text-xl mb-2">Protocol Agnostic</h3>
              <p className="text-secondary text-sm">Whether deploying on Solana or BNB, our integration logic is flawless, but gameplay always comes first.</p>
            </div>
            <div className="p-6 border border-white/5 bg-surface/20">
              <h3 className="text-primary font-bold text-xl mb-2">Founder Centric</h3>
              <p className="text-secondary text-sm">We don't need hand-holding. Give us the vision, and we deliver the build ready for launch.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- SERVICES GRID --- */}
      <section id="services" className="py-24 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-4">Core Capabilities</h2>
            <div className="h-1 w-20 bg-primary"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="group p-8 bg-surface/40 hover:bg-surface border border-white/5 transition-all duration-300">
              <Smartphone className="text-primary mb-6" size={40} />
              <h3 className="text-2xl font-bold mb-4">Mobile Game Core</h3>
              <ul className="space-y-3 text-secondary">
                <li className="flex gap-2"><CheckCircle size={16} className="text-primary"/> iOS & Android Native Builds</li>
                <li className="flex gap-2"><CheckCircle size={16} className="text-primary"/> Unity Engine Optimization</li>
                <li className="flex gap-2"><CheckCircle size={16} className="text-primary"/> Addictive Core Loops</li>
              </ul>
            </div>

            {/* Service 2 */}
            <div className="group p-8 bg-surface/40 hover:bg-surface border border-white/5 transition-all duration-300">
              <Code2 className="text-success mb-6" size={40} />
              <h3 className="text-2xl font-bold mb-4">Web3 Infrastructure</h3>
              <ul className="space-y-3 text-secondary">
                <li className="flex gap-2"><CheckCircle size={16} className="text-success"/> Wallet Integration (MetaMask)</li>
                <li className="flex gap-2"><CheckCircle size={16} className="text-success"/> Smart Contract Linking</li>
                <li className="flex gap-2"><CheckCircle size={16} className="text-success"/> Tokenomics Logic</li>
              </ul>
            </div>

            {/* Service 3 */}
            <div className="group p-8 bg-surface/40 hover:bg-surface border border-white/5 transition-all duration-300">
              <ShieldCheck className="text-blue-400 mb-6" size={40} />
              <h3 className="text-2xl font-bold mb-4">Backend Systems</h3>
              <ul className="space-y-3 text-secondary">
                <li className="flex gap-2"><CheckCircle size={16} className="text-blue-400"/> Multiplayer Server Scaling</li>
                <li className="flex gap-2"><CheckCircle size={16} className="text-blue-400"/> LiveOps Dashboard</li>
                <li className="flex gap-2"><CheckCircle size={16} className="text-blue-400"/> Secure Database Mgmt</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* --- CONTACT FORM --- */}
      <section id="contact" className="py-24 px-6 bg-surface/20 border-t border-white/5">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Start Your Build</h2>
            <p className="text-secondary">Projects starting from $5k. Strict NDA included.</p>
          </div>

          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-secondary uppercase">Name</label>
                <input type="text" className="w-full bg-background border border-white/10 p-4 text-white focus:border-primary focus:outline-none" placeholder="Founder Name" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-secondary uppercase">Email</label>
                <input type="email" className="w-full bg-background border border-white/10 p-4 text-white focus:border-primary focus:outline-none" placeholder="work@company.com" />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-secondary uppercase">Project Type</label>
                <select className="w-full bg-background border border-white/10 p-4 text-white focus:border-primary focus:outline-none appearance-none">
                  <option>Full Game Build (Mobile)</option>
                  <option>Web3 / Crypto Integration</option>
                  <option>Backend Infrastructure</option>
                  <option>Prototype / MVP</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-secondary uppercase">Budget Range</label>
                <select className="w-full bg-background border border-white/10 p-4 text-white focus:border-primary focus:outline-none appearance-none">
                  <option>$5k - $15k</option>
                  <option>$15k - $30k</option>
                  <option>$30k +</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-bold text-secondary uppercase">Project Details</label>
              <textarea rows={4} className="w-full bg-background border border-white/10 p-4 text-white focus:border-primary focus:outline-none" placeholder="Describe your game concept and technical requirements..."></textarea>
            </div>

            <button className="w-full bg-primary text-background font-bold py-5 text-lg hover:bg-white transition-colors">
              Submit Request
            </button>
            
            <p className="text-center text-xs text-secondary mt-4">
              By submitting, you agree to our privacy policy. An NDA will be provided upon initial reply.
            </p>
          </form>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-12 border-t border-white/10 text-center">
        <p className="text-secondary text-sm">© {new Date().getFullYear()} ChainPlay Studios. All rights reserved.</p>
      </footer>

    </div>
  );
}