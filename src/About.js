import React from "react";

function About() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-12 bg-white rounded-2xl shadow-lg mt-10 mb-10 border border-[#C19A6B]">
      <h2 className="text-3xl font-bold text-[#8B5E3C] mb-6 text-center">About Us</h2>
      <div className="space-y-6 text-[#333] text-lg">
        <div>
          <h3 className="text-xl font-semibold text-[#D2691E] mb-2">Who We Are</h3>
          <p>
            We are a passionate team based in Stuttgart, dedicated to providing high-quality pre-owned electronic items. Our mission is to make top-notch technology accessible and affordable for everyone, while promoting sustainability through reuse.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-[#D2691E] mb-2">Location</h3>
          <p>
            Kunstmuseum Stuttgart<br />
            Kleiner Schlossplatz 1, 70173 Stuttgart, Germany
          </p>
        </div>
        <div>
          <h3 className="text-xl font-semibold text-[#D2691E] mb-2">Why Choose Us?</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>Carefully inspected and tested electronics</li>
            <li>Transparent prices, no hidden fees</li>
            <li>Friendly, knowledgeable support</li>
            <li>Easy and direct contact — no middleman</li>
            <li>Local pickup in Stuttgart city center</li>
            <li>Committed to sustainability and reducing e-waste</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
