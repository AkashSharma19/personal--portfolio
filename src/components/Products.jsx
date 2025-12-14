import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDownCircle, ArrowUpRight, Package, Rocket } from 'lucide-react';
import ProjectModal from './ProjectModal'; // We can rename this file to ProductModal.jsx later if you want

// --- RENAMED TO "PRODUCTS" ---
const ALL_PRODUCTS = [
  {
    id: 1,
    title: "AI Grading Engine",
    tagline: "SaaS • EdTech",
    status: "Shipped • Q1 2024",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=1200",
    impact: "+60% Efficiency",
    problem: {
      stat: "20hrs/week",
      context: "spent by professors manually grading handwritten exams.",
      quote: "I dread exam season. It takes me away from research for 2 full weeks."
    },
    discovery: "Analyzed 500+ support tickets and conducted 10 professor interviews. We found that 80% of grading time was spent on 'low-cognitive' verification (checking multiple choice or simple definitions), not critical thinking.",
    solution: "We built a 'Human-in-the-Loop' AI pipeline. N8N parses the PDF, GPT-4 Vision suggests a grade, and the Professor just clicks 'Approve' or 'Edit'.",
    metrics: [
      { label: "Grading Efficiency", value: "+60%", icon: "Zap" },
      { label: "Adoption Rate", value: "92%", icon: "Users" },
      { label: "Error Rate", value: "<1%", icon: "BarChart3" }
    ],
    tradeoff: "We prioritized 'Accuracy' over 'Speed'. The initial model was fast but hallucinated on messy handwriting. We switched to a slower, more expensive model (GPT-4) because a single grading error destroys trust.",
    stack: ["OpenAI API", "Python", "React", "N8N"]
  },
  {
    id: 2,
    title: "Student CRM",
    tagline: "Internal Tool • Operations",
    status: "In Development • Q2 2024",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800",
    impact: "5k+ Leads Processed",
    problem: {
      stat: "Scattered data",
      context: "across multiple systems made lead tracking inefficient.",
      quote: "We lose track of promising students because data is everywhere."
    },
    discovery: "Mapped out the entire student journey and identified 15+ touchpoints where data was siloed. Found that 40% of leads were lost due to poor follow-up.",
    solution: "Built a centralized CRM dashboard that aggregates data from admissions, academics, and placement systems with automated workflows.",
    metrics: [
      { label: "Lead Conversion", value: "+35%", icon: "BarChart3" },
      { label: "Data Accuracy", value: "98%", icon: "Zap" },
      { label: "Time Saved", value: "25hrs/week", icon: "Users" }
    ],
    tradeoff: "Chose a phased rollout over big-bang implementation to minimize disruption, accepting slower initial adoption.",
    stack: ["React", "Node.js", "PostgreSQL", "Zapier"]
  },
  {
    id: 3,
    title: "LMS Migration",
    tagline: "Platform • Infrastructure",
    status: "Completed • 2023",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800",
    impact: "Zero Downtime",
    problem: {
      stat: "Legacy system",
      context: "crashed frequently and couldn't scale with enrollment growth.",
      quote: "Our LMS goes down every exam season. It's unacceptable."
    },
    discovery: "Conducted system audits and user surveys. Discovered that 70% of crashes were due to outdated infrastructure, not code issues.",
    solution: "Led migration from legacy LMS to modern cloud-based platform with automated testing and rollback capabilities.",
    metrics: [
      { label: "Uptime", value: "99.9%", icon: "BarChart3" },
      { label: "Load Time", value: "-50%", icon: "Zap" },
      { label: "User Satisfaction", value: "+45%", icon: "Users" }
    ],
    tradeoff: "Invested in extensive testing over faster migration timeline to ensure zero data loss.",
    stack: ["AWS", "Docker", "Jenkins", "Moodle"]
  },
  {
    id: 4,
    title: "Analytics Suite",
    tagline: "Data Product • B2B",
    status: "Launched • Q3 2023",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=800",
    impact: "Real-time Insights",
    problem: {
      stat: "No visibility",
      context: "into key performance metrics delayed decision making.",
      quote: "We make decisions based on gut feel because reports take weeks."
    },
    discovery: "Identified 20+ critical KPIs that stakeholders needed but couldn't access. Found that manual reporting took 40 hours/week.",
    solution: "Developed a self-service analytics platform with real-time dashboards and automated report generation.",
    metrics: [
      { label: "Report Generation", value: "-90%", icon: "Zap" },
      { label: "Decision Speed", value: "+60%", icon: "BarChart3" },
      { label: "User Adoption", value: "85%", icon: "Users" }
    ],
    tradeoff: "Started with Power BI over custom solution for faster delivery, planning to migrate later.",
    stack: ["Power BI", "SQL Server", "Azure", "Python"]
  },
  {
    id: 5,
    title: "Mobile App V2",
    tagline: "Consumer App • iOS/Android",
    status: "Live • Q4 2023",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800",
    impact: "+20% Retention",
    problem: {
      stat: "Poor UX",
      context: "led to high churn rates and negative reviews.",
      quote: "The app is confusing. Students uninstall it after one use."
    },
    discovery: "Analyzed user behavior data and conducted usability tests. Found that 60% of users abandoned the app within the first session.",
    solution: "Redesigned the app with simplified navigation, gamified learning elements, and personalized content recommendations.",
    metrics: [
      { label: "Retention Rate", value: "+20%", icon: "Users" },
      { label: "Session Length", value: "+40%", icon: "BarChart3" },
      { label: "App Store Rating", value: "4.5/5", icon: "Zap" }
    ],
    tradeoff: "Focused on core features over advanced functionality to improve usability first.",
    stack: ["React Native", "Firebase", "Stripe", "Amplitude"]
  },
  {
    id: 6,
    title: "Payment Gateway",
    tagline: "FinTech • Revenue",
    status: "Operational • 2024",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?q=80&w=800",
    impact: "$1M+ Processed",
    problem: {
      stat: "Payment failures",
      context: "costing thousands in lost revenue monthly.",
      quote: "Students can't pay fees. It's embarrassing and costly."
    },
    discovery: "Tracked payment failure rates and user complaints. Identified that 15% of transactions failed due to gateway issues.",
    solution: "Integrated multiple payment gateways with automatic failover and real-time monitoring.",
    metrics: [
      { label: "Success Rate", value: "99.5%", icon: "BarChart3" },
      { label: "Revenue Loss", value: "-95%", icon: "Zap" },
      { label: "Processing Volume", value: "$1M+", icon: "Users" }
    ],
    tradeoff: "Accepted higher processing fees for reliability over cost optimization.",
    stack: ["Stripe", "PayPal", "Node.js", "MongoDB"]
  },
];

export default function ProductsSection() {
  const [selectedId, setSelectedId] = useState(null);
  const [visibleCount, setVisibleCount] = useState(4);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 2);
  };

  const selectedProduct = ALL_PRODUCTS.find(p => p.id === selectedId);

  return (
    <section id="products" className="py-24 bg-white border-t-2 border-black font-sans">
      <div className="max-w-6xl mx-auto px-6">

        {/* HEADER: PM Focused Copy */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 bg-black text-[#DFFF00] px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest mb-4">
            <Rocket size={14} /> Shipped Work
          </div>
          <h2 className="text-5xl md:text-6xl font-black uppercase">
            Products <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-black">Managed</span>
          </h2>
          <p className="mt-4 text-gray-500 font-bold max-w-lg">
            A selection of products I've taken from 0 to 1, or scaled from 1 to 100.
          </p>
        </div>

        {/* --- PRODUCT GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {ALL_PRODUCTS.slice(0, visibleCount).map((product) => (
            <motion.div
              key={product.id}
              onClick={() => setSelectedId(product.id)}
              whileHover={{ y: -8, boxShadow: "8px 8px 0px 0px rgba(0,0,0,1)" }}
              className="cursor-pointer bg-white border-2 border-black rounded-3xl overflow-hidden shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] group"
            >
              {/* Image with Overlay Tag */}
              <div className="h-64 overflow-hidden border-b-2 border-black relative">
                <img src={product.image} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />

                {/* Impact Badge (PM Feature) */}
                <div className="absolute bottom-4 left-4 bg-[#DFFF00] text-black text-xs font-black uppercase px-3 py-1 border border-black rounded-md shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  {product.impact}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 relative">
                <div className="flex items-center gap-2 mb-2 text-xs font-bold uppercase text-gray-400">
                  <Package size={14} /> {product.tagline}
                </div>

                <h3 className="text-3xl font-black uppercase mb-1 leading-none">{product.title}</h3>

                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="bg-black text-white p-2 rounded-full border-2 border-transparent">
                    <ArrowUpRight size={20} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- LOAD MORE BUTTON --- */}
        {visibleCount < ALL_PRODUCTS.length && (
          <div className="flex justify-center">
            <button
              onClick={handleLoadMore}
              className="group flex items-center gap-2 bg-white border-2 border-black text-black px-8 py-4 rounded-full font-black uppercase tracking-widest hover:bg-black hover:text-[#DFFF00] transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]"
            >
              Load More Products
              <ArrowDownCircle size={20} className="group-hover:translate-y-1 transition-transform" />
            </button>
          </div>
        )}

      </div>

      {/* MODAL */}
      <AnimatePresence>
        {selectedProduct && (
          <ProjectModal
            product={selectedProduct}
            onClose={() => setSelectedId(null)}
          />
        )}
      </AnimatePresence>

    </section>
  );
}