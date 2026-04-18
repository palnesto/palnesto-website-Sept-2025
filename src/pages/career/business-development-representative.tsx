// import { motion } from "framer-motion";
// import CareerLayout from "../../layouts/CareerLayout";

// export default function BusinessDevelopmentRepresentative() {
//   return (
//     <CareerLayout>
//       <section className="mx-auto max-w-5xl px-6 py-16">
//         {/* Title & Description */}
//         <div className="text-center mb-10">
//           <h1 className="text-4xl md:text-5xl font-bold mb-3">
//             🚀 Business Development Representative (BDR) – SaaS for Food,
//             Fitness, & Fashion
//           </h1>
//           <p className="text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto text-lg">
//             Join Palnesto Business Solutions in Hyderabad — help local
//             restaurants, gyms, and fashion boutiques grow with powerful SaaS
//             tools that make business management effortless.
//           </p>
//         </div>

//         {/* Buttons */}
//         <div className="flex justify-center gap-4 mb-10">
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-full text-sm font-medium shadow"
//           >
//             Apply Now
//           </motion.button>
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             className="border border-emerald-600 text-emerald-700 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 px-6 py-2 rounded-full text-sm font-medium"
//           >
//             Recommend Someone
//           </motion.button>
//         </div>

//         {/* Image */}
//         <div className="mb-12">
//           <img
//             src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?q=80&w=1600&auto=format&fit=crop"
//             alt="Business Development"
//             className="rounded-2xl w-full h-[400px] object-cover shadow-md"
//           />
//         </div>

//         {/* Highlights Section */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center mb-16">
//           <div className="rounded-xl bg-emerald-50 dark:bg-emerald-900/10 p-6">
//             <p className="text-sm uppercase text-neutral-500">Salary</p>
//             <p className="text-lg font-semibold text-neutral-800 dark:text-neutral-100">
//               ₹15,000 – ₹35,000 / month + commissions
//             </p>
//           </div>
//           <div className="rounded-xl bg-emerald-50 dark:bg-emerald-900/10 p-6">
//             <p className="text-sm uppercase text-neutral-500">Location</p>
//             <p className="text-lg font-semibold text-neutral-800 dark:text-neutral-100">
//               Hyderabad, India
//             </p>
//           </div>
//           <div className="rounded-xl bg-emerald-50 dark:bg-emerald-900/10 p-6">
//             <p className="text-sm uppercase text-neutral-500">Department</p>
//             <p className="text-lg font-semibold text-neutral-800 dark:text-neutral-100">
//               Sales & Growth
//             </p>
//           </div>
//         </div>

//         {/* Detailed Job Description */}
//         <div className="prose dark:prose-invert max-w-none prose-h2:mt-10 prose-h2:text-2xl prose-strong:text-emerald-600">
//           <h2>🎯 Your Mission: Drive Business Growth</h2>
//           <p>
//             This isn't a desk job — you’ll be our face in the market, meeting
//             with business owners daily. Your goal is to show how our simple
//             software solves real problems like long queues, wasted stock, or
//             lost customers.
//           </p>

//           <h2>What You'll Be Doing</h2>
//           <ul>
//             <li>
//               <strong>Hit the Streets:</strong> Meet local business owners
//               (food, fitness, fashion) and demo our SaaS in person.
//             </li>
//             <li>
//               <strong>Be a Problem Solver:</strong> Understand pain points and
//               propose solutions instantly.
//             </li>
//             <li>
//               <strong>Close the Deal:</strong> Sign up businesses for our paid
//               subscription plans.
//             </li>
//             <li>
//               <strong>Collaborate:</strong> Share insights from clients with
//               product and tech teams.
//             </li>
//           </ul>

//           <h2>💪 Who We're Looking For</h2>
//           <p>
//             We value <strong>drive</strong> and <strong>potential</strong> over
//             experience. If you have the hunger to sell and grow, we’ll train
//             you.
//           </p>

//           <ul>
//             <li>Excellent communication and storytelling skills.</li>
//             <li>Passionate about tech and local businesses.</li>
//             <li>Resilient and motivated to achieve big commissions.</li>
//             <li>Willingness to travel within Hyderabad.</li>
//           </ul>

//           <h2>⭐ What We Offer You</h2>
//           <ul>
//             <li>Secure base salary + uncapped commissions.</li>
//             <li>Rapid growth path into Sales Manager roles.</li>
//             <li>Comprehensive sales training and mentorship.</li>
//             <li>Be part of a fast-scaling SaaS success story.</li>
//           </ul>

//           <h2>📝 Ready to Apply?</h2>
//           <p>
//             Send your resume to{" "}
//             <a
//               href="mailto:careers@palnesto.biz"
//               className="text-emerald-600 hover:underline"
//             >
//               careers@palnesto.biz
//             </a>{" "}
//             with a short cover letter sharing:
//           </p>
//           <ul>
//             <li>
//               Why you’re excited to sell tech to Hyderabad’s local businesses.
//             </li>
//             <li>
//               One memorable “sales story” — how you convinced someone or closed
//               a tough deal.
//             </li>
//           </ul>
//         </div>
//       </section>
//     </CareerLayout>
//   );
// }
// "use client";

// import { motion, useInView } from "framer-motion";
// import { useRef } from "react";

// import { ArrowRight, MapPin, Wallet, Users } from "lucide-react";
// import ScrollFloat from "../../components/common/ScrollFloat";
// import { Button } from "../../components/ui/button";
// import CareerLayout from "../../layouts/CareerLayout";

// export default function BusinessDevelopmentRepresentative() {
//   const imageRef = useRef(null);
//   const isImageInView = useInView(imageRef, { once: true, margin: "-100px" });

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//         delayChildren: 0.2,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.6,
//         ease: [0.25, 0.4, 0.25, 1],
//       },
//     },
//   };

//   const cardVariants = {
//     hidden: { opacity: 0, scale: 0.9 },
//     visible: {
//       opacity: 1,
//       scale: 1,
//       transition: {
//         duration: 0.5,
//         ease: [0.25, 0.4, 0.25, 1],
//       },
//     },
//   };

//   return (
//     <CareerLayout>
//       <section className="mx-auto max-w-6xl px-6 py-16 lg:py-24">
//         {/* Title & Description */}
//         <motion.div
//           initial="hidden"
//           animate="visible"
//           variants={containerVariants}
//           className="text-center mb-12 lg:mb-16"
//         >
//           <motion.div variants={itemVariants} className="mb-6">
//             <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6 leading-tight text-balance">
//               <ScrollFloat className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
//                 Business Development Representative
//               </ScrollFloat>
//             </h1>
//             <motion.div
//               variants={itemVariants}
//               className="inline-block bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/20 rounded-full px-6 py-2 mb-6"
//             >
//               <p className="text-sm font-medium text-emerald-700 dark:text-emerald-400">
//                 SaaS for Food, Fitness & Fashion
//               </p>
//             </motion.div>
//           </motion.div>

//           <motion.p
//             variants={itemVariants}
//             className="text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed"
//           >
//             <ScrollFloat delay={0.3}>
//               Join Palnesto Business Solutions in Hyderabad — help local
//               restaurants, gyms, and fashion boutiques grow with powerful SaaS
//               tools that make business management effortless.
//             </ScrollFloat>
//           </motion.p>
//         </motion.div>

//         {/* Buttons */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.6, duration: 0.6 }}
//           className="flex flex-wrap justify-center gap-4 mb-12 lg:mb-16"
//         >
//           <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//             <Button
//               size="lg"
//               className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-8 py-6 rounded-full text-base font-semibold shadow-lg shadow-emerald-500/25 group"
//             >
//               Apply Now
//               <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
//             </Button>
//           </motion.div>
//           <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//             <Button
//               size="lg"
//               variant="outline"
//               className="border-2 border-emerald-600 text-emerald-700 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 px-8 py-6 rounded-full text-base font-semibold bg-transparent"
//             >
//               Recommend Someone
//             </Button>
//           </motion.div>
//         </motion.div>

//         {/* Image */}
//         <motion.div
//           ref={imageRef}
//           initial={{ opacity: 0, scale: 0.95 }}
//           animate={isImageInView ? { opacity: 1, scale: 1 } : {}}
//           transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
//           className="mb-16 lg:mb-20 relative group"
//         >
//           <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500" />
//           <img
//             src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?q=80&w=1600&auto=format&fit=crop"
//             alt="Business Development"
//             className="relative rounded-3xl w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover shadow-2xl"
//           />
//         </motion.div>

//         {/* Highlights Section */}
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, margin: "-100px" }}
//           variants={containerVariants}
//           className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center mb-16 lg:mb-20"
//         >
//           <motion.div
//             variants={cardVariants}
//             whileHover={{ y: -8, scale: 1.02 }}
//             className="rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/10 dark:to-teal-900/10 border border-emerald-100 dark:border-emerald-900/20 p-8 shadow-lg hover:shadow-xl transition-shadow"
//           >
//             <Wallet className="w-10 h-10 text-emerald-600 mx-auto mb-4" />
//             <p className="text-sm uppercase tracking-wider text-neutral-500 font-semibold mb-2">
//               Salary
//             </p>
//             <p className="text-xl font-bold text-neutral-800 dark:text-neutral-100">
//               ₹15,000 – ₹35,000
//             </p>
//             <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">
//               per month + commissions
//             </p>
//           </motion.div>

//           <motion.div
//             variants={cardVariants}
//             whileHover={{ y: -8, scale: 1.02 }}
//             className="rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/10 dark:to-teal-900/10 border border-emerald-100 dark:border-emerald-900/20 p-8 shadow-lg hover:shadow-xl transition-shadow"
//           >
//             <MapPin className="w-10 h-10 text-emerald-600 mx-auto mb-4" />
//             <p className="text-sm uppercase tracking-wider text-neutral-500 font-semibold mb-2">
//               Location
//             </p>
//             <p className="text-xl font-bold text-neutral-800 dark:text-neutral-100">
//               Hyderabad, India
//             </p>
//           </motion.div>

//           <motion.div
//             variants={cardVariants}
//             whileHover={{ y: -8, scale: 1.02 }}
//             className="rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/10 dark:to-teal-900/10 border border-emerald-100 dark:border-emerald-900/20 p-8 shadow-lg hover:shadow-xl transition-shadow"
//           >
//             <Users className="w-10 h-10 text-emerald-600 mx-auto mb-4" />
//             <p className="text-sm uppercase tracking-wider text-neutral-500 font-semibold mb-2">
//               Department
//             </p>
//             <p className="text-xl font-bold text-neutral-800 dark:text-neutral-100">
//               Sales & Growth
//             </p>
//           </motion.div>
//         </motion.div>

//         {/* Detailed Job Description */}
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, margin: "-100px" }}
//           variants={containerVariants}
//           className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-display prose-h2:text-3xl prose-h2:font-bold prose-h2:mb-6 prose-h2:mt-12 prose-p:leading-relaxed prose-p:text-neutral-700 dark:prose-p:text-neutral-300 prose-strong:text-emerald-600 dark:prose-strong:text-emerald-400 prose-strong:font-semibold prose-li:text-neutral-700 dark:prose-li:text-neutral-300 prose-a:text-emerald-600 prose-a:no-underline hover:prose-a:underline"
//         >
//           <motion.h2 variants={itemVariants}>
//             Your Mission: Drive Business Growth
//           </motion.h2>
//           <motion.p variants={itemVariants}>
//             This isn't a desk job — you'll be our face in the market, meeting
//             with business owners daily. Your goal is to show how our simple
//             software solves real problems like long queues, wasted stock, or
//             lost customers.
//           </motion.p>

//           <motion.h2 variants={itemVariants}>What You'll Be Doing</motion.h2>
//           <motion.ul variants={itemVariants}>
//             <li>
//               <strong>Hit the Streets:</strong> Meet local business owners
//               (food, fitness, fashion) and demo our SaaS in person.
//             </li>
//             <li>
//               <strong>Be a Problem Solver:</strong> Understand pain points and
//               propose solutions instantly.
//             </li>
//             <li>
//               <strong>Close the Deal:</strong> Sign up businesses for our paid
//               subscription plans.
//             </li>
//             <li>
//               <strong>Collaborate:</strong> Share insights from clients with
//               product and tech teams.
//             </li>
//           </motion.ul>

//           <motion.h2 variants={itemVariants}>Who We're Looking For</motion.h2>
//           <motion.p variants={itemVariants}>
//             We value <strong>drive</strong> and <strong>potential</strong> over
//             experience. If you have the hunger to sell and grow, we'll train
//             you.
//           </motion.p>

//           <motion.ul variants={itemVariants}>
//             <li>Excellent communication and storytelling skills.</li>
//             <li>Passionate about tech and local businesses.</li>
//             <li>Resilient and motivated to achieve big commissions.</li>
//             <li>Willingness to travel within Hyderabad.</li>
//           </motion.ul>

//           <motion.h2 variants={itemVariants}>What We Offer You</motion.h2>
//           <motion.ul variants={itemVariants}>
//             <li>Secure base salary + uncapped commissions.</li>
//             <li>Rapid growth path into Sales Manager roles.</li>
//             <li>Comprehensive sales training and mentorship.</li>
//             <li>Be part of a fast-scaling SaaS success story.</li>
//           </motion.ul>

//           <motion.h2 variants={itemVariants}>Ready to Apply?</motion.h2>
//           <motion.p variants={itemVariants}>
//             Send your resume to{" "}
//             <a href="mailto:careers@palnesto.biz">careers@palnesto.biz</a> with
//             a short cover letter sharing:
//           </motion.p>
//           <motion.ul variants={itemVariants}>
//             <li>
//               Why you're excited to sell tech to Hyderabad's local businesses.
//             </li>
//             <li>
//               One memorable "sales story" — how you convinced someone or closed
//               a tough deal.
//             </li>
//           </motion.ul>
//         </motion.div>
//       </section>
//     </CareerLayout>
//   );
// }
"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import { ArrowRight, MapPin, Wallet, Users, CheckCircle2 } from "lucide-react";
import ScrollFloat from "../../components/common/ScrollFloat";
import { Button } from "../../components/ui/button";
import CareerLayout from "../../layouts/CareerLayout";

export default function BusinessDevelopmentRepresentative() {
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

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
  };

  return (
    <CareerLayout>
      <section className="mx-auto max-w-6xl px-6 py-16 lg:py-10">
        {/* Title & Description */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="text-center mb-12 lg:mb-16"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6 leading-tight text-balance">
              <ScrollFloat className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Business Development Representative
              </ScrollFloat>
            </h1>
            <motion.div
              variants={itemVariants}
              className="inline-block bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-500/20 rounded-full px-6 py-2 mb-6"
            >
              <p className="text-sm font-medium text-emerald-700 dark:text-emerald-400">
                SaaS for Food, Fitness & Fashion
              </p>
            </motion.div>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-neutral-600 dark:text-neutral-300 text-sm md:text-xl"
          >
            Join Palnesto Business Solutions in Hyderabad — help local
            restaurants, gyms, and fashion boutiques grow with powerful SaaS
            tools that make business management effortless.
          </motion.p>
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-12 lg:mb-16"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              size="lg"
              className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-8 py-6 rounded-full text-base font-semibold shadow-lg shadow-emerald-500/25 group"
            >
              Apply Now
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-emerald-600 text-emerald-700 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 px-8 py-6 rounded-full text-base font-semibold bg-transparent"
            >
              Recommend Someone
            </Button>
          </motion.div>
        </motion.div>

        {/* Image */}
        <motion.div
          ref={imageRef}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isImageInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
          className="mb-16 lg:mb-20 relative group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500" />
          <img
            src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?q=80&w=1600&auto=format&fit=crop"
            alt="Business Development"
            className="relative rounded-3xl w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover shadow-2xl"
          />
        </motion.div>

        {/* Highlights Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center mb-16 lg:mb-20"
        >
          <motion.div
            variants={cardVariants}
            whileHover={{ y: -8, scale: 1.02 }}
            className="rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/10 dark:to-teal-900/10 border border-emerald-100 dark:border-emerald-900/20 p-8 shadow-lg hover:shadow-xl transition-shadow"
          >
            <Wallet className="w-10 h-10 text-emerald-600 mx-auto mb-4" />
            <p className="text-sm uppercase tracking-wider text-neutral-500 font-semibold mb-2">
              Salary
            </p>
            <p className="text-xl font-bold text-neutral-800 dark:text-neutral-100">
              ₹15,000 – ₹35,000
            </p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">
              per month + commissions
            </p>
          </motion.div>

          <motion.div
            variants={cardVariants}
            whileHover={{ y: -8, scale: 1.02 }}
            className="rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/10 dark:to-teal-900/10 border border-emerald-100 dark:border-emerald-900/20 p-8 shadow-lg hover:shadow-xl transition-shadow"
          >
            <MapPin className="w-10 h-10 text-emerald-600 mx-auto mb-4" />
            <p className="text-sm uppercase tracking-wider text-neutral-500 font-semibold mb-2">
              Location
            </p>
            <p className="text-xl font-bold text-neutral-800 dark:text-neutral-100">
              Hyderabad, India
            </p>
          </motion.div>

          <motion.div
            variants={cardVariants}
            whileHover={{ y: -8, scale: 1.02 }}
            className="rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-900/10 dark:to-teal-900/10 border border-emerald-100 dark:border-emerald-900/20 p-8 shadow-lg hover:shadow-xl transition-shadow"
          >
            <Users className="w-10 h-10 text-emerald-600 mx-auto mb-4" />
            <p className="text-sm uppercase tracking-wider text-neutral-500 font-semibold mb-2">
              Department
            </p>
            <p className="text-xl font-bold text-neutral-800 dark:text-neutral-100">
              Sales & Growth
            </p>
          </motion.div>
        </motion.div>

        {/* Detailed Job Description */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="max-w-4xl mx-auto space-y-12"
        >
          {/* Section: Your Mission */}
          <motion.div variants={itemVariants}>
            <h2 className="text-2xl md:text-3xl font-display font-bold text-neutral-900 dark:text-neutral-50 mb-4">
              Your Mission: Drive Business Growth
            </h2>
            <p className="text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
              This isn't a desk job — you'll be our face in the market, meeting
              with business owners daily. Your goal is to show how our simple
              software solves real problems like long queues, wasted stock, or
              lost customers.
            </p>
          </motion.div>

          {/* Section: What You'll Be Doing */}
          <motion.div variants={itemVariants}>
            <h2 className="text-2xl md:text-3xl font-display font-bold text-neutral-900 dark:text-neutral-50 mb-4">
              What You'll Be Doing
            </h2>
            <ul className="space-y-3">
              {[
                "Hit the Streets: Meet local business owners (food, fitness, fashion) and demo our SaaS in person.",
                "Be a Problem Solver: Understand pain points and propose solutions instantly.",
                "Close the Deal: Sign up businesses for our paid subscription plans.",
                "Collaborate: Share insights from clients with product and tech teams.",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Section: Who We're Looking For */}
          <motion.div variants={itemVariants}>
            <h2 className="text-2xl md:text-3xl font-display font-bold text-neutral-900 dark:text-neutral-50 mb-4">
              Who We're Looking For
            </h2>
            <p className="text-base text-neutral-600 dark:text-neutral-400 leading-relaxed mb-4">
              We value{" "}
              <span className="font-semibold text-emerald-600 dark:text-emerald-400">
                drive
              </span>{" "}
              and{" "}
              <span className="font-semibold text-emerald-600 dark:text-emerald-400">
                potential
              </span>{" "}
              over experience. If you have the hunger to sell and grow, we'll
              train you.
            </p>
            <ul className="space-y-3">
              {[
                "Excellent communication and storytelling skills.",
                "Passionate about tech and local businesses.",
                "Resilient and motivated to achieve big commissions.",
                "Willingness to travel within Hyderabad.",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Section: What We Offer You */}
          <motion.div variants={itemVariants}>
            <h2 className="text-2xl md:text-3xl font-display font-bold text-neutral-900 dark:text-neutral-50 mb-4">
              What We Offer You
            </h2>
            <ul className="space-y-3">
              {[
                "Competitive Compensation: Secure base salary + uncapped commissions.",
                "Career Growth: Rapid growth path into Sales Manager roles.",
                "Training & Mentorship: Comprehensive sales training and mentorship.",
                "Be Part of Success: Be part of a fast-scaling SaaS success story.",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Section: Ready to Apply */}
          <motion.div
            variants={itemVariants}
            className="border-t border-neutral-200 dark:border-neutral-800 pt-12"
          >
            <h2 className="text-2xl md:text-3xl font-display font-bold text-neutral-900 dark:text-neutral-50 mb-4">
              Ready to Apply?
            </h2>
            <p className="text-base text-neutral-600 dark:text-neutral-400 leading-relaxed mb-4">
              Send your resume to{" "}
              <a
                href="mailto:careers@palnesto.biz"
                className="font-semibold text-emerald-600 dark:text-emerald-400 hover:underline"
              >
                careers@palnesto.biz
              </a>{" "}
              with a short cover letter sharing:
            </p>
            <ul className="space-y-3 mb-6">
              {[
                "Why you're excited to sell tech to Hyderabad's local businesses.",
                'One memorable "sales story" — how you convinced someone or closed a tough deal.',
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-8 py-6 rounded-full text-base font-semibold shadow-lg shadow-emerald-500/25 group"
              >
                Apply Now
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>
    </CareerLayout>
  );
}
