'use client';

import React, { useState } from 'react';
import { Loader2, Send } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Full Game Build (Mobile)',
    budget: '$5k - $15k',
    details: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      // Connects to the Vercel API Route we just created
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error('Failed');
      
      setStatus('success');
      setFormData({ name: '', email: '', projectType: 'Full Game Build (Mobile)', budget: '$5k - $15k', details: '' });
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="max-w-3xl mx-auto bg-surface/20 border border-white/5 p-8 rounded-xl backdrop-blur-sm">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-2 text-white">Start Your Build</h2>
        <p className="text-secondary">Projects starting from $5k. Strict NDA included.</p>
      </div>

      {status === 'success' ? (
        <div className="text-center py-12">
          <div className="text-green-400 text-5xl mb-4">✔</div>
          <h3 className="text-2xl font-bold text-white mb-2">Request Received</h3>
          <p className="text-secondary">We will be in touch shortly.</p>
          <button onClick={() => setStatus('idle')} className="mt-6 text-primary hover:underline">Send another?</button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-bold text-secondary uppercase tracking-wider">Name</label>
              <input name="name" value={formData.name} onChange={handleChange} required type="text" className="w-full bg-background/50 border border-white/10 p-4 text-white focus:border-primary focus:outline-none rounded-lg" placeholder="Founder Name" />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-secondary uppercase tracking-wider">Email</label>
              <input name="email" value={formData.email} onChange={handleChange} required type="email" className="w-full bg-background/50 border border-white/10 p-4 text-white focus:border-primary focus:outline-none rounded-lg" placeholder="work@company.com" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-bold text-secondary uppercase tracking-wider">Project Type</label>
              <select name="projectType" value={formData.projectType} onChange={handleChange} className="w-full bg-background/50 border border-white/10 p-4 text-white focus:border-primary focus:outline-none appearance-none rounded-lg">
                <option>Full Game Build (Mobile)</option>
                <option>Web3 / Crypto Integration</option>
                <option>Backend Infrastructure</option>
                <option>Prototype / MVP</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-secondary uppercase tracking-wider">Budget Range</label>
              <select name="budget" value={formData.budget} onChange={handleChange} className="w-full bg-background/50 border border-white/10 p-4 text-white focus:border-primary focus:outline-none appearance-none rounded-lg">
                <option>$5k - $15k</option>
                <option>$15k - $30k</option>
                <option>$30k +</option>
              </select>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold text-secondary uppercase tracking-wider">Project Details</label>
            <textarea name="details" value={formData.details} onChange={handleChange} required rows={4} className="w-full bg-background/50 border border-white/10 p-4 text-white focus:border-primary focus:outline-none rounded-lg" placeholder="Describe your game concept..."></textarea>
          </div>

          <button disabled={status === 'loading'} className="w-full bg-primary text-background font-bold py-5 text-lg hover:bg-white transition-colors flex items-center justify-center gap-2 rounded-lg disabled:opacity-70">
            {status === 'loading' ? <Loader2 className="animate-spin" /> : <>Submit Request <Send size={18}/></>}
          </button>
          
          {status === 'error' && <p className="text-red-400 text-center text-sm">Server error. Check configuration.</p>}
        </form>
      )}
    </div>
  );
}