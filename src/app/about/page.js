import React from "react";
import "../globals.css";
import Column2 from "../components/Column2";
const data1 = [
  {
    header: "Cut through the noise.",
    body: "The internet is bursting with recipes, yet most busy cooks still default to take-away or packaged foods. We curate a tight collection of fool-proof dishes so you can skip the scrolling the start cooking.",
  },
   {
    header: "Empower home kitchens.",
    body: "When you control what goes into your meals, you control how you feel. Every recipe is built around unrefined ingredients and ready in about half an hour of active prep.",
  },
   {
    header: "Make healthy look good.",
    body: "High-resolution imagery shows you exactly what success looks like because we eat with our eyes first, and confidence matters.",
  },
];
const data2 = [
  {
    header: "Whole ingredients first.",
    body: "The internet is bursting with recipes, yet most busy cooks still default to take-away or packaged foods. We curate a tight collection of fool-proof dishes so you can skip the scrolling the start cooking.",
  },
   {
    header: "Flavor without compromise.",
    body: "Spices, citrus, and natural sweetness replace excess salt, sugar and additives.",
  },
   {
    header: "Respect for time.",
    body: "Weeknight meals should slot into real schedules, weekend cooking can be leisurely but never wasteful.",
  },
  {
    header: "Sustainable choices.",
    body: "Short ingredient lists cut down on food waste and carbon footprint, while plant-forward dishes keep things planet-friendly.",
  },
];

export default function page() {
  return (
    <div>
      <div className="relative pb-[100px] underline-c px-5 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 md:items-center">
          <div className="pb-5 md:flex md:flex-col md:px-20">
            <div className="md:w-4/5">
              <h2 className="pb-5 lh-50">
                Help more people cook nourishing meals, more often.
              </h2>
              <div>
                Healthy Recipe Finder was created to prove that healthy eating
                can be convenient, affordable, and genuinely delicious.
                <p className="pt-3">
                  We showcase quick, whole-food dishes that anyone can master-no
                  fancy equipment, no ultra-processes shortcuts-just honest
                  ingredients and striaghtforward steps.
                </p>
              </div>
            </div>
          </div>
          <div>
            <img
              className="rounded-lg"
              src="/assets/images/image-about-our-mission-small.webp"
            />
          </div>
        </div>
      </div>
      <Column2 column_text_1="Why we exist" column_body_2={data1} />
      <Column2 column_text_1="Our food philosophy" column_body_2={data2} />
        <div className="relative py-[100px] underline-c px-5 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 md:items-center">
          <div className="pb-5 md:flex md:flex-col md:px-20">
            <div className="md:w-4/5">
              <h2 className="pb-5 lh-50">
                Beyond the plate
              </h2>
              <p>
               We believe food is a catalyst for community and well-being. By sharing approachable recipes, we hope to:
              </p>
                  <ul className="list">
                 <li>Encourage family dinners and social cooking.</li>
                 <li>Reduce reliance on single-use packaging and delivery waste.</li>
                 <li>Spark curiosity about seasonal produce and local agriculture.</li>
               </ul>
            </div>
          </div>
          <div>
            <img
              className="rounded-lg"
              src="/assets/images/image-about-beyond-the-plate-small.webp"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
