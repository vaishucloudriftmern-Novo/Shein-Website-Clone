import { useState } from 'react';
import React from "react"

const NewsletterSection = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  return (
    <section className="text-black text-center py-16 bg-background">
      <h2 className="text-3xl font-bold text-foreground">Join Our Newsletter</h2>
      <p className="text-black text-muted-foreground mt-2 px-4">
        Signup for our email newsletter to get exclusive discounts, updates and more
      </p>
      <form onSubmit={handleSubmit} className="mt-6 px-4">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="border border-border bg-background text-foreground p-3 w-full max-w-md rounded-lg focus:outline-none focus:ring-2 focus:ring-ring"
          required
        />
        <br />
        <button
          type="submit"
          className="bg-primary text-primary-foreground px-8 py-3 mt-4 rounded-lg font-semibold hover:opacity-90 bg-black transition"
        >
          Subscribe →
        </button>
      </form>
    </section>
  );
};

export default NewsletterSection;
