// import { Link } from 'react-router-dom';
// import { Button } from '@/components/ui/button';
// import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
// import { Badge } from '@/components/ui/badge';
// import { Sprout, Check, Star, Zap, Crown } from 'lucide-react';
// import { motion } from 'framer-motion';
// import { useState } from 'react';
// import Layout from '../components/Layout/Layout'
// const Pricing = () => {
//   const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('monthly');

//   const plans = [
//     {
//       name: "Starter",
//       description: "Perfect for small farms and beginners",
//       price: {
//         monthly: "$29",
//         yearly: "$290"
//       },
//       savings: "Save 17%",
//       popular: false,
//       features: [
//         "Up to 10 acres",
//         "Basic Analytics",
//         "Weather Forecast",
//         "Mobile App Access",
//         "Email Support",
//         "Community Forum"
//       ],
//       cta: "Get Started",
//       icon: Sprout,
//       gradient: "from-green-500 to-emerald-500"
//     },
//     {
//       name: "Professional",
//       description: "Best for growing commercial farms",
//       price: {
//         monthly: "$79",
//         yearly: "$790"
//       },
//       savings: "Save 17%",
//       popular: true,
//       features: [
//         "Up to 100 acres",
//         "Advanced Analytics",
//         "Smart Irrigation",
//         "Crop Protection",
//         "Priority Support",
//         "API Access",
//         "Custom Reports",
//         "Team Collaboration"
//       ],
//       cta: "Start Free Trial",
//       icon: Zap,
//       gradient: "from-blue-500 to-cyan-500"
//     },
//     {
//       name: "Enterprise",
//       description: "For large-scale farming operations",
//       price: {
//         monthly: "$199",
//         yearly: "$1990"
//       },
//       savings: "Save 17%",
//       popular: false,
//       features: [
//         "Unlimited Acres",
//         "All Professional Features",
//         "Dedicated Account Manager",
//         "Custom Integrations",
//         "On-site Training",
//         "24/7 Phone Support",
//         "Advanced Security",
//         "White-label Options"
//       ],
//       cta: "Contact Sales",
//       icon: Crown,
//       gradient: "from-purple-500 to-pink-500"
//     }
//   ];

//   return (

//     <Layout>
//     <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
    
//       {/* Hero Section */}
//       <section className="pt-32 pb-20">
//         <div className="container mx-auto px-4 text-center">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="max-w-3xl mx-auto"
//           >
//             <Badge className="mb-4 px-4 py-1 text-sm bg-primary/10 text-primary border-primary/20">
//               Transparent Pricing
//             </Badge>
//             <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
//               Simple, Honest Pricing
//             </h1>
//             <p className="text-xl text-muted-foreground mb-8">
//               Choose the perfect plan for your farming needs. No hidden fees, no surprises.
//             </p>

//             {/* Billing Toggle */}
//             <div className="flex items-center justify-center gap-4 mb-12">
//               <span className={`text-lg ${billingPeriod === 'monthly' ? 'text-foreground' : 'text-muted-foreground'}`}>
//                 Monthly
//               </span>
//               <button
//                 onClick={() => setBillingPeriod(billingPeriod === 'monthly' ? 'yearly' : 'monthly')}
//                 className="relative w-14 h-7 bg-primary rounded-full transition-colors"
//               >
//                 <div
//                   className={`absolute top-1 w-5 h-5 bg-white rounded-full transition-transform ${
//                     billingPeriod === 'monthly' ? 'left-1' : 'left-8'
//                   }`}
//                 />
//               </button>
//               <div className="flex items-center gap-2">
//                 <span className={`text-lg ${billingPeriod === 'yearly' ? 'text-foreground' : 'text-muted-foreground'}`}>
//                   Yearly
//                 </span>
//                 <Badge variant="secondary" className="bg-green-500/10 text-green-600">
//                   Save 17%
//                 </Badge>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Pricing Cards */}
//       <section className="py-20">
//         <div className="container mx-auto px-4">
//           <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
//             {plans.map((plan, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.1 }}
//                 className="relative"
//               >
//                 {plan.popular && (
//                   <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
//                     <Badge className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-2">
//                       <Star className="h-3 w-3 mr-1 fill-current" />
//                       Most Popular
//                     </Badge>
//                   </div>
//                 )}
//                 <Card className={`border-0 shadow-2xl hover:shadow-3xl transition-all duration-300 h-full ${
//                   plan.popular ? 'ring-2 ring-primary scale-105' : 'hover:scale-105'
//                 }`}>
//                   <CardHeader className="text-center pb-6">
//                     <div className={`p-3 rounded-2xl bg-gradient-to-r ${plan.gradient} w-fit mx-auto mb-4`}>
//                       <plan.icon className="h-8 w-8 text-white" />
//                     </div>
//                     <CardTitle className="text-2xl">{plan.name}</CardTitle>
//                     <CardDescription className="text-lg">{plan.description}</CardDescription>
                    
//                     <div className="mt-6">
//                       <div className="flex items-baseline justify-center gap-2">
//                         <span className="text-4xl font-bold">
//                           {billingPeriod === 'monthly' ? plan.price.monthly : plan.price.yearly}
//                         </span>
//                         <span className="text-muted-foreground">/{billingPeriod === 'monthly' ? 'month' : 'year'}</span>
//                       </div>
//                       {billingPeriod === 'yearly' && (
//                         <p className="text-sm text-green-600 font-medium mt-2">{plan.savings}</p>
//                       )}
//                     </div>
//                   </CardHeader>

//                   <CardContent className="space-y-4">
//                     {plan.features.map((feature, idx) => (
//                       <div key={idx} className="flex items-center gap-3">
//                         <Check className="h-5 w-5 text-green-500" />
//                         <span className="text-foreground">{feature}</span>
//                       </div>
//                     ))}
//                   </CardContent>

//                   <CardFooter>
//                     <Button 
//                       className={`w-full text-lg py-6 ${
//                         plan.popular 
//                           ? 'bg-gradient-to-r from-primary to-accent text-white' 
//                           : 'bg-muted hover:bg-muted/80 text-foreground'
//                       }`}
//                       size="lg"
//                     >
//                       {plan.cta}
//                     </Button>
//                   </CardFooter>
//                 </Card>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* FAQ Section */}
//       <section className="py-20 bg-muted/50">
//         <div className="container mx-auto px-4">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-center mb-16"
//           >
//             <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
//             <p className="text-xl text-muted-foreground">Everything you need to know about our pricing</p>
//           </motion.div>

//           <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
//             {[
//               {
//                 question: "Can I change plans later?",
//                 answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately."
//               },
//               {
//                 question: "Is there a free trial?",
//                 answer: "Yes, we offer a 14-day free trial on our Professional plan with full feature access."
//               },
//               {
//                 question: "What payment methods do you accept?",
//                 answer: "We accept all major credit cards, PayPal, and bank transfers for annual plans."
//               },
//               {
//                 question: "Do you offer discounts for large teams?",
//                 answer: "Yes, we offer custom enterprise pricing for large farming operations and cooperatives."
//               }
//             ].map((faq, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.1 }}
//                 className="bg-white rounded-2xl p-6 shadow-lg"
//               >
//                 <h3 className="text-lg font-semibold mb-3">{faq.question}</h3>
//                 <p className="text-muted-foreground">{faq.answer}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//     </Layout>
//   );
// };

// export default Pricing;




import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Sprout, Check, Star, Zap, Crown, Sparkles, Rocket, Target, Award, Shield, Clock, Users, ArrowRight, ChevronRight, HelpCircle, TrendingUp, Leaf } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Layout from '../components/Layout/Layout';

const Pricing = () => {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('yearly');
  const [hoveredPlan, setHoveredPlan] = useState<number | null>(null);

  const plans = [
    {
      name: "Starter",
      description: "Perfect for small farms and beginners starting their digital transformation",
      price: {
        monthly: "$29",
        yearly: "$290"
      },
      originalPrice: {
        yearly: "$348"
      },
      savings: "Save 17%",
      popular: false,
      features: [
        "Up to 10 acres coverage",
        "Basic Analytics Dashboard",
        "7-Day Weather Forecast",
        "Mobile App Access",
        "Email Support (48h response)",
        "Community Forum Access",
        "Basic Reporting Tools",
        "Soil Health Monitoring"
      ],
      cta: "Get Started",
      icon: Sprout,
      gradient: "from-green-500 to-emerald-500",
      color: "green",
      bestFor: "Small Family Farms",
      recommended: false
    },
    {
      name: "Professional",
      description: "Best for growing commercial farms seeking advanced insights",
      price: {
        monthly: "$79",
        yearly: "$790"
      },
      originalPrice: {
        yearly: "$948"
      },
      savings: "Save 17%",
      popular: true,
      features: [
        "Up to 100 acres coverage",
        "Advanced Analytics & AI Insights",
        "Smart Irrigation Control",
        "Crop Protection Alerts",
        "Priority Support (24h response)",
        "API Access & Integrations",
        "Custom Reports & Export",
        "Team Collaboration (up to 5 users)",
        "Yield Prediction Models",
        "Disease Detection System",
        "Historical Data Analysis",
        "Advanced Weather Intelligence"
      ],
      cta: "Start Free Trial",
      icon: Zap,
      gradient: "from-blue-500 to-cyan-500",
      color: "blue",
      bestFor: "Commercial Farms",
      recommended: true
    },
    {
      name: "Enterprise",
      description: "For large-scale farming operations requiring maximum capabilities",
      price: {
        monthly: "$199",
        yearly: "$1990"
      },
      originalPrice: {
        yearly: "$2388"
      },
      savings: "Save 17%",
      popular: false,
      features: [
        "Unlimited Acres Coverage",
        "All Professional Features Included",
        "Dedicated Account Manager",
        "Custom Integrations & API",
        "On-site Training & Setup",
        "24/7 Phone & Chat Support",
        "Advanced Security & Compliance",
        "White-label Solutions",
        "Multi-location Management",
        "Custom AI Model Training",
        "SLA Guarantee (99.9% Uptime)",
        "Advanced Automation Workflows",
        "Unlimited Team Members",
        "Custom Development"
      ],
      cta: "Contact Sales",
      icon: Crown,
      gradient: "from-purple-500 to-pink-500",
      color: "purple",
      bestFor: "Large Agri-Businesses",
      recommended: false
    }
  ];

  const stats = [
    { icon: Users, value: "5,000+", label: "Active Farms", suffix: "worldwide" },
    { icon: TrendingUp, value: "45%", label: "Average Yield", suffix: "increase" },
    { icon: Leaf, value: "60%", label: "Water", suffix: "saved" },
    { icon: Award, value: "98%", label: "Customer", suffix: "satisfaction" },
  ];

  const features = [
    {
      category: "Analytics & Insights",
      items: ["Real-time Dashboard", "Predictive Analytics", "Yield Optimization", "Cost Analysis"]
    },
    {
      category: "Automation",
      items: ["Smart Irrigation", "Automated Alerts", "Task Scheduling", "IoT Integration"]
    },
    {
      category: "Support & Training",
      items: ["24/7 Support", "Onboarding", "Regular Updates", "Expert Consultation"]
    }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted/20">
        {/* Enhanced Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(25)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-primary/20 rounded-full"
                initial={{ 
                  x: Math.random() * window.innerWidth,
                  y: Math.random() * window.innerHeight 
                }}
                animate={{
                  y: [0, -30, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: Math.random() * 3 + 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring" }}
              >
                <Badge className="mb-6 px-6 py-2 text-base bg-gradient-to-r from-primary to-accent text-white border-0 shadow-lg">
                  <Sparkles className="h-4 w-4 mr-2" />
                  Transparent Pricing
                </Badge>
              </motion.div>
              
              <motion.h1 
                className="text-6xl md:text-7xl font-black mb-8 leading-tight"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent bg-size-200 animate-gradient">
                  Simple Pricing
                </span>
                <br />
                <span className="bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
                  Maximum Value
                </span>
              </motion.h1>
              
              <motion.p 
                className="text-2xl md:text-3xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                Choose the perfect plan for your farming needs. 
                <span className="text-primary font-semibold"> No hidden fees, no surprises.</span>
              </motion.p>

              {/* Enhanced Billing Toggle */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="inline-flex items-center gap-6 p-2 bg-muted/50 rounded-2xl border border-border/50 mb-12"
              >
                <button
                  onClick={() => setBillingPeriod('monthly')}
                  className={`relative px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
                    billingPeriod === 'monthly' 
                      ? 'bg-background text-foreground shadow-lg' 
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  Monthly Billing
                  {billingPeriod === 'monthly' && (
                    <motion.div
                      layoutId="billingIndicator"
                      className="absolute inset-0 bg-background rounded-xl shadow-lg border border-border -z-10"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </button>
                
                <button
                  onClick={() => setBillingPeriod('yearly')}
                  className={`relative px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
                    billingPeriod === 'yearly' 
                      ? 'bg-background text-foreground shadow-lg' 
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    Yearly Billing
                    <Badge className="bg-green-500/10 text-green-600 border-green-500/20">
                      Save 17%
                    </Badge>
                  </div>
                  {billingPeriod === 'yearly' && (
                    <motion.div
                      layoutId="billingIndicator"
                      className="absolute inset-0 bg-background rounded-xl shadow-lg border border-border -z-10"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gradient-to-r from-primary/5 to-accent/5">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center group"
                >
                  <div className="p-4 rounded-3xl bg-background/50 backdrop-blur-sm border border-border/50 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 mb-4">
                    <stat.icon className="h-8 w-8 text-primary mx-auto group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
                  <div className="text-xs text-muted-foreground">{stat.suffix}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

    {/* Enhanced Pricing Cards (Fixed Visibility) */}
<section className="py-20 relative z-10">
  <div className="container mx-auto px-4">
    <div className="grid lg:grid-cols-3 gap-10 max-w-7xl mx-auto">

      {plans.map((plan, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.15 }}
          className="relative"
          onMouseEnter={() => setHoveredPlan(index)}
          onMouseLeave={() => setHoveredPlan(null)}
        >

          {/* Popular Badge */}
          {plan.popular && (
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
              <Badge className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-2 shadow-xl border-0">
                <Star className="h-4 w-4 mr-2 fill-current" />
                Most Popular
              </Badge>
            </div>
          )}

          <Card
            className={`
              relative overflow-hidden rounded-3xl border border-border/50 
              bg-background shadow-xl transition-all duration-500
              ${plan.popular ? "scale-105 ring-2 ring-primary" : "hover:scale-105"}
            `}
          >

            <div className="p-8 space-y-6 relative z-10">

              {/* Icon */}
              <div className={`p-4 rounded-3xl bg-gradient-to-r ${plan.gradient} w-fit mx-auto shadow-lg`}>
                <plan.icon className="h-10 w-10 text-white" />
              </div>

              {/* Title */}
              <h3 className="text-3xl font-bold text-center">{plan.name}</h3>
              <p className="text-center text-muted-foreground text-lg">
                {plan.description}
              </p>

              {/* Price */}
              <div className="text-center space-y-2">
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-5xl font-black bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    {billingPeriod === 'monthly' ? plan.price.monthly : plan.price.yearly}
                  </span>
                  <span className="text-muted-foreground text-lg">/{billingPeriod === 'monthly' ? 'month' : 'year'}</span>
                </div>

                {billingPeriod === 'yearly' && (
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-sm text-muted-foreground line-through">
                      {plan.originalPrice.yearly}
                    </span>
                    <Badge className="bg-green-500/10 text-green-600 border-green-500/20">
                      {plan.savings}
                    </Badge>
                  </div>
                )}

                <Badge variant="secondary" className="mx-auto">{plan.bestFor}</Badge>
              </div>

              {/* Features */}
              <div className="space-y-3">
                {plan.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 p-3 bg-muted/30 rounded-xl"
                  >
                    <Check className="h-4 w-4 text-green-500" />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Call To Action */}
              <Button
                className={`
                  w-full text-lg py-6 rounded-2xl mt-6
                  transition-all duration-300 
                  ${plan.popular 
                    ? "bg-gradient-to-r from-primary to-accent text-white shadow-xl hover:shadow-2xl"
                    : "bg-muted hover:bg-muted/80 text-foreground shadow-md hover:shadow-xl"
                  }
                `}
              >
                {plan.cta}
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>

            </div>

            {/* Subtle Glow — Fixed & Contained */}
            {hoveredPlan === index && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className={`absolute inset-0 bg-gradient-to-r ${plan.gradient} opacity-20`}
              />
            )}

          </Card>
        </motion.div>
      ))}

    </div>
  </div>
</section>


        {/* Feature Comparison */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <Badge className="mb-4 px-4 py-1 text-sm bg-primary/10 text-primary border-primary/20">
                <Target className="h-4 w-4 mr-2" />
                Feature Comparison
              </Badge>
              <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Compare Plans
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                See how our plans stack up against each other
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {features.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-background/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-border/50"
                >
                  <h3 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    {category.category}
                  </h3>
                  <ul className="space-y-4">
                    {category.items.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-foreground">
                        <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced FAQ Section */}
        <section className="py-20 bg-gradient-to-b from-muted/50 to-background relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:bg-grid-slate-800" />
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <Badge className="mb-4 px-4 py-1 text-sm bg-primary/10 text-primary border-primary/20">
                <HelpCircle className="h-4 w-4 mr-2" />
                Need Help?
              </Badge>
              <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Everything you need to know about our pricing and plans
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {[
                {
                  question: "Can I change plans later?",
                  answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately and we'll prorate the difference.",
                  icon: <Clock className="h-5 w-5" />
                },
                {
                  question: "Is there a free trial?",
                  answer: "Yes! We offer a 14-day free trial on our Professional plan with full feature access. No credit card required.",
                  icon: <Rocket className="h-5 w-5" />
                },
                {
                  question: "What payment methods do you accept?",
                  answer: "We accept all major credit cards, PayPal, and bank transfers for annual plans. All payments are secure and encrypted.",
                  icon: <Shield className="h-5 w-5" />
                },
                {
                  question: "Do you offer discounts for large teams?",
                  answer: "Absolutely! We offer custom enterprise pricing for large farming operations, cooperatives, and agricultural businesses.",
                  icon: <Users className="h-5 w-5" />
                },
                {
                  question: "What's your cancellation policy?",
                  answer: "You can cancel anytime. If you cancel, you'll continue to have access until the end of your billing period.",
                  icon: <Award className="h-5 w-5" />
                },
                {
                  question: "Do you offer training and onboarding?",
                  answer: "Yes! All plans include onboarding, and Professional/Enterprise include dedicated training sessions.",
                  icon: <Sparkles className="h-5 w-5" />
                }
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <Card className="border-0 shadow-2xl hover:shadow-4xl transition-all duration-500 hover:scale-105 bg-background/80 backdrop-blur-sm h-full">
                    <CardContent className="p-8">
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-2xl bg-primary/10 text-primary group-hover:scale-110 transition-transform duration-300">
                          {faq.icon}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                            {faq.question}
                          </h3>
                          <p className="text-muted-foreground leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-primary/10" />
          <div className="container mx-auto px-4 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <div className="bg-background/80 backdrop-blur-xl border border-border/50 rounded-3xl p-16 shadow-2xl">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <Badge className="mb-6 px-4 py-1 text-sm bg-green-500/10 text-green-600 border-green-500/20">
                    <Star className="h-4 w-4 mr-2 fill-current" />
                    Start Your Journey Today
                  </Badge>
                  
                  <h2 className="text-5xl md:text-6xl font-black mb-8 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Ready to Transform Your Farm?
                  </h2>
                  
                  <p className="text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
                    Join thousands of successful farmers who have already increased their yields and reduced costs with AgriHub.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                    <Link to="/signup" className="group">
                      <Button 
                        size="lg" 
                        className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white text-lg px-12 py-7 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 group"
                      >
                        <Rocket className="h-5 w-5 mr-3 group-hover:scale-110 transition-transform" />
                        Start Free Trial
                      </Button>
                    </Link>
                    <Link to="/contact" className="group">
                      <Button 
                        size="lg" 
                        variant="outline"
                        className="text-lg px-12 py-7 rounded-2xl border-2 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 group"
                      >
                        Contact Sales
                        <ChevronRight className="h-5 w-5 ml-3 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                  
                  <motion.p 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    viewport={{ once: true }}
                    className="text-muted-foreground mt-8 text-lg"
                  >
                    No credit card required • 14-day free trial • Cancel anytime
                  </motion.p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Pricing;