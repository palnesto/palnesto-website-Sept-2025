"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Briefcase, MapPin, DollarSign, Upload } from "lucide-react";
import CareerLayout from "../../layouts/CareerLayout";
import { Button } from "../../components/ui/button";

export default function SeniorProductDesigner() {
  const [activeTab, setActiveTab] = useState("role-details");
  const imageRef = useRef(null);
  const isImageInView = useInView(imageRef, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
  };

  return (
    <CareerLayout>
      <div className="min-h-screen bg-background">
        {/* Hero Section with Dark Background */}
        <section className="bg-slate-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 opacity-90" />

          <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <motion.div
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                className="space-y-8"
              >
                <motion.div variants={itemVariants}>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight">
                    Senior Product Designer
                  </h1>
                  <p className="text-slate-300 text-lg leading-relaxed">
                    We are looking for a talented & creative artist with an
                    advanced level of English to design UI/UX interfaces for web
                    and mobile apps
                  </p>
                </motion.div>

                <motion.div
                  variants={itemVariants}
                  className="flex flex-wrap gap-4"
                >
                  <Button
                    size="lg"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 rounded-md font-semibold"
                  >
                    Apply now
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-slate-600 text-white hover:bg-slate-800 px-8 rounded-md font-semibold bg-transparent"
                  >
                    Recommend
                  </Button>
                </motion.div>

                {/* Info Badges */}
                <motion.div
                  variants={itemVariants}
                  className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-blue-600/20 flex items-center justify-center">
                      <Briefcase className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400">Department</p>
                      <p className="text-sm font-semibold">Design</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-blue-600/20 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400">Location</p>
                      <p className="text-sm font-semibold">German, Munich</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-blue-600/20 flex items-center justify-center">
                      <DollarSign className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400">Salary</p>
                      <p className="text-sm font-semibold">
                        $115,000 - $125,000 + Benefits
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Right Image */}
              <motion.div
                ref={imageRef}
                initial={{ opacity: 0, x: 50 }}
                animate={isImageInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl blur-3xl" />
                <img
                  src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?q=80&w=1600&auto=format&fit=crop"
                  alt="Office workspace"
                  className="relative rounded-2xl shadow-2xl h-[260px] w-full object-cover"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Main Content Section */}
        <section className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left: Job Details */}
            <div className="lg:col-span-2">
              {/* Tabs */}
              <div className="flex gap-6 border-b border-border mb-8">
                {[
                  { id: "role-details", label: "Role details" },
                  { id: "our-mission", label: "Our mission" },
                  { id: "office", label: "Office" },
                  { id: "stobox-culture", label: "Stobox Culture" },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`pb-3 text-sm font-medium transition-colors relative ${
                      activeTab === tab.id
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {tab.label}
                    {activeTab === tab.id && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                      />
                    )}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-8"
              >
                {/* Position & Employment */}
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">
                      POSITION
                    </p>
                    <p className="text-blue-600 font-semibold">
                      Senior Product Designer
                    </p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">
                      EMPLOYMENT
                    </p>
                    <p className="text-blue-600 font-semibold">
                      In-house or remote
                    </p>
                  </div>
                </div>

                {/* Your Mission */}
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mb-3">
                    YOUR MISSION
                  </p>
                  <p className="text-foreground leading-relaxed">
                    You'll be collaborating with other Stoboxians in a
                    cross-functional product team, to build the world's best
                    spending experiences for millions of personal and business
                    customers. Whether they're in Lapland, Hong Kong, or eBay,
                    super convenient and without the sneaky fees.
                  </p>
                </div>

                {/* Here's How You'll Be Contributing */}
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground mb-4">
                    HERE'S HOW YOU'LL BE CONTRIBUTING
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-2 flex-shrink-0" />
                      <p className="text-foreground leading-relaxed">
                        You'll get to know Stobox customers, building empathy
                        and deep understanding of their needs
                      </p>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-2 flex-shrink-0" />
                      <p className="text-foreground leading-relaxed">
                        You'll be using the full range of Product Design skills
                        to discover, design and deliver simple, beautifully
                        crafted experiences that customers love
                      </p>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-2 flex-shrink-0" />
                      <p className="text-foreground leading-relaxed">
                        You'll be influential in your team, increasing
                        customer-centeredness, creativity, and design
                      </p>
                    </li>
                  </ul>
                </div>
              </motion.div>
            </div>

            {/* Right: Application Form */}
            <div className="lg:col-span-1">
              <div className="bg-card border border-border rounded-xl p-6 sticky top-6">
                <h3 className="text-xl font-bold mb-2">Ready to apply?</h3>
                <p className="text-sm text-muted-foreground mb-6">
                  Complete the eligibility checklist now and get started with
                  your online application
                </p>

                <form className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      Name <span className="text-destructive">*</span>
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      Email <span className="text-destructive">*</span>
                    </label>
                    <input
                      type="email"
                      className="w-full px-3 py-2 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      Phone <span className="text-destructive">*</span>
                    </label>
                    <input
                      type="tel"
                      className="w-full px-3 py-2 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      Upload CV <span className="text-destructive">*</span>
                    </label>
                    <div className="border-2 border-dashed border-input rounded-md p-6 text-center hover:border-muted-foreground transition-colors cursor-pointer">
                      <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground">
                        Drop files to attach
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        Max file size: 5 MB
                      </p>
                    </div>
                  </div>

                  <Button className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold">
                    Apply now
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </CareerLayout>
  );
}
