// import { Link } from 'react-router-dom';
// import { Button } from '@/components/ui/button';
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
// import { Badge } from '@/components/ui/badge';
// import { 
//   Sprout, 
//   Droplets, 
//   BarChart3, 
//   Cloud, 
//   Shield, 
//   Zap, 
//   Users, 
//   Smartphone,
//   ArrowRight,
//   CheckCircle,
//   Play,
// } from 'lucide-react';
// import { motion } from 'framer-motion';
// import featureHero from '@/assets/feature-hero.jpg';
// import analyticsDemo from '@/assets/analytics-demo.jpg';
// import Layout from '../components/Layout/Layout'
// const Features = () => {
//   const mainFeatures = [
//     {
//       icon: BarChart3,
//       title: "Advanced Analytics",
//       description: "Real-time data analysis and predictive insights for your farm",
//       features: ["Yield Prediction", "Soil Health Monitoring", "Growth Tracking"],
//       image: analyticsDemo,
//       gradient: "from-blue-500 to-cyan-500"
//     },
//     {
//       icon: Droplets,
//       title: "Smart Irrigation",
//       description: "Automated water management based on soil moisture and weather",
//       features: ["Soil Sensors", "Weather Integration", "Water Optimization"],
//       image: featureHero,
//       gradient: "from-green-500 to-emerald-500"
//     },
//     {
//       icon: Cloud,
//       title: "Weather Intelligence",
//       description: "Accurate forecasts and climate adaptation recommendations",
//       features: ["7-Day Forecast", "Frost Alerts", "Rain Prediction"],
//       image: analyticsDemo,
//       gradient: "from-sky-500 to-blue-500"
//     },
//     {
//       icon: Shield,
//       title: "Crop Protection",
//       description: "Early detection and prevention of pests and diseases",
//       features: ["Disease Detection", "Pest Alerts", "Treatment Plans"],
//       image: featureHero,
//       gradient: "from-orange-500 to-red-500"
//     }
//   ];

//   const additionalFeatures = [
//     {
//       icon: Users,
//       title: "Community Platform",
//       description: "Connect with other farmers and share best practices"
//     },
//     {
//       icon: Smartphone,
//       title: "Mobile App",
//       description: "Manage your farm on the go with our mobile application"
//     },
//     {
//       icon: Zap,
//       title: "Automation",
//       description: "Automate routine tasks and focus on what matters"
//     },
//     {
//       icon: Sprout,
//       title: "Crop Library",
//       description: "Comprehensive database of crops and best practices"
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
//             className="max-w-4xl mx-auto"
//           >
//             <Badge className="mb-4 px-4 py-1 text-sm bg-primary/10 text-primary border-primary/20">
//               Powerful Features
//             </Badge>
//             <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
//               Everything You Need for Modern Farming
//             </h1>
//             <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
//               Advanced tools and insights to optimize your farm's productivity and sustainability
//             </p>
//           </motion.div>
//         </div>
//       </section>

//       {/* Main Features */}
//       <section className="py-20">
//         <div className="container mx-auto px-4">
//           {mainFeatures.map((feature, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 mb-20 last:mb-0`}
//             >
//               <div className="lg:w-1/2">
//                 <div className="flex items-center gap-3 mb-4">
//                   <div className={`p-3 rounded-2xl bg-gradient-to-r ${feature.gradient}`}>
//                     <feature.icon className="h-8 w-8 text-white" />
//                   </div>
//                   <h3 className="text-3xl font-bold">{feature.title}</h3>
//                 </div>
//                 <p className="text-lg text-muted-foreground mb-6">{feature.description}</p>
//                 <ul className="space-y-3 mb-8">
//                   {feature.features.map((item, idx) => (
//                     <li key={idx} className="flex items-center gap-3">
//                       <CheckCircle className="h-5 w-5 text-green-500" />
//                       <span className="text-foreground">{item}</span>
//                     </li>
//                   ))}
//                 </ul>
//                 <Button className="bg-gradient-to-r from-primary to-accent">
//                   Learn More
//                   <ArrowRight className="ml-2 h-4 w-4" />
//                 </Button>
//               </div>
//               <div className="lg:w-1/2">
//                 <div className="relative rounded-3xl overflow-hidden shadow-2xl">
//                   <img 
//                     src={feature.image} 
//                     alt={feature.title}
//                     className="w-full h-80 object-cover"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
//                   <div className="absolute bottom-4 left-4 right-4">
//                     <Button className="w-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30">
//                       <Play className="h-4 w-4 mr-2" />
//                       Watch Demo
//                     </Button>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* Additional Features */}
//       <section className="py-20 bg-muted/50">
//         <div className="container mx-auto px-4">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-center mb-16"
//           >
//             <h2 className="text-4xl font-bold mb-4">More Amazing Features</h2>
//             <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
//               Everything you need to succeed in modern agriculture
//             </p>
//           </motion.div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {additionalFeatures.map((feature, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.1 }}
//               >
//                 <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 h-full">
//                   <CardHeader>
//                     <div className="p-3 rounded-2xl bg-primary/10 w-fit mb-4">
//                       <feature.icon className="h-8 w-8 text-primary" />
//                     </div>
//                     <CardTitle className="text-xl">{feature.title}</CardTitle>
//                   </CardHeader>
//                   <CardContent>
//                     <CardDescription className="text-base">{feature.description}</CardDescription>
//                   </CardContent>
//                 </Card>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-20">
//         <div className="container mx-auto px-4 text-center">
//           <motion.div
//             initial={{ opacity: 0, scale: 0.9 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             viewport={{ once: true }}
//             className="max-w-2xl mx-auto"
//           >
//             <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Farm?</h2>
//             <p className="text-xl text-muted-foreground mb-8">
//               Join thousands of farmers already using AgriHub to optimize their operations
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <Link to="/pricing">
//                 <Button size="lg" variant="outline" className="text-lg px-8">
//                   View Pricing
//                 </Button>
//               </Link>
//               <Link to="/login">
//                 <Button size="lg" className="bg-gradient-to-r from-primary to-accent text-lg px-8">
//                   Start Free Trial
//                 </Button>
//               </Link>
//             </div>
//           </motion.div>
//         </div>
//       </section>
//     </div>
//     </Layout>
//   );
// };

// export default Features;


import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Sprout, 
  Droplets, 
  BarChart3, 
  Cloud, 
  Shield, 
  Zap, 
  Users, 
  Smartphone,
  ArrowRight,
  CheckCircle,
  Play,
  Star,
  TrendingUp,
  Leaf,
  Target,
  Clock,
  ShieldCheck,
  Sparkles,
  Infinity,
  Rocket
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import featureHero from '@/assets/feature-hero.jpg';
import analyticsDemo from '@/assets/analytics-demo.jpg';
import irrigationDemo from '@/assets/irrigation-system.jpg';
import weatherDemo from '@/assets/weather-demo.jpg';
import protectionDemo from '@/assets/protection-demo.jpg';
import Layout from '../components/Layout/Layout';

const Features = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

  const mainFeatures = [
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Real-time data analysis and predictive insights for your farm",
      features: ["Yield Prediction", "Soil Health Monitoring", "Growth Tracking", "Profitability Analysis"],
      image: analyticsDemo,
      gradient: "from-blue-500 to-cyan-500",
      stats: "98% Accuracy",
      color: "blue",
      highlights: ["AI-Powered", "Real-time", "Predictive"]
    },
    {
      icon: Droplets,
      title: "Smart Irrigation",
      description: "Automated water management based on soil moisture and weather conditions",
      features: ["Soil Moisture Sensors", "Weather Integration", "Water Optimization", "Drought Prevention"],
      image: irrigationDemo,
      gradient: "from-green-500 to-emerald-500",
      stats: "60% Water Saved",
      color: "green",
      highlights: ["Automated", "Efficient", "Sustainable"]
    },
    {
      icon: Cloud,
      title: "Weather Intelligence",
      description: "Accurate forecasts and climate adaptation recommendations",
      features: ["7-Day Forecast", "Frost Alerts", "Rain Prediction", "Climate Adaptation"],
      image: weatherDemo,
      gradient: "from-sky-500 to-blue-500",
      stats: "95% Forecast Accuracy",
      color: "sky",
      highlights: ["Precise", "Adaptive", "Proactive"]
    },
    {
      icon: Shield,
      title: "Crop Protection",
      description: "Early detection and prevention of pests and diseases",
      features: ["Disease Detection", "Pest Alerts", "Treatment Plans", "Prevention Strategies"],
      image: protectionDemo,
      gradient: "from-orange-500 to-red-500",
      stats: "99% Detection Rate",
      color: "orange",
      highlights: ["Secure", "Reliable", "Comprehensive"]
    }
  ];

  const additionalFeatures = [
    {
      icon: Users,
      title: "Community Platform",
      description: "Connect with other farmers and share best practices",
      stat: "10K+ Farmers",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Smartphone,
      title: "Mobile App",
      description: "Manage your farm on the go with our mobile application",
      stat: "24/7 Access",
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      icon: Zap,
      title: "Automation",
      description: "Automate routine tasks and focus on what matters",
      stat: "80% Time Saved",
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      icon: Sprout,
      title: "Crop Library",
      description: "Comprehensive database of crops and best practices",
      stat: "500+ Varieties",
      gradient: "from-teal-500 to-green-500"
    }
  ];

  const stats = [
    { icon: TrendingUp, value: "45%", label: "Average Yield Increase" },
    { icon: Leaf, value: "60%", label: "Water Usage Optimized" },
    { icon: Target, value: "98%", label: "Prediction Accuracy" },
    { icon: Clock, value: "10+", label: "Hours Saved Weekly" },
    { icon: ShieldCheck, value: "99.9%", label: "System Uptime" },
    { icon: Sparkles, value: "5000+", label: "Happy Farmers" }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted/20">
        {/* Enhanced Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(20)].map((_, i) => (
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
               //   repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>

          <div className="container mx-auto px-4 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring" }}
              >
                <Badge className="mb-6 px-6 py-2 text-base bg-gradient-to-r from-primary to-accent text-white border-0 shadow-lg">
                  <Sparkles className="h-4 w-4 mr-2" />
                  Premium Features
                </Badge>
              </motion.div>
              
              <motion.h1 
                className="text-6xl md:text-7xl font-black mb-8 leading-tight"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent bg-size-200 animate-gradient">
                  Revolutionary
                </span>
                <br />
                <span className="bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
                  Farming Features
                </span>
              </motion.h1>
              
              <motion.p 
                className="text-2xl md:text-3xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                Advanced tools and AI-powered insights to transform your farm's productivity and sustainability
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              >
                <Link to="/demo">
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white text-lg px-8 py-6 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 group"
                  >
                    <Play className="h-5 w-5 mr-3 group-hover:scale-110 transition-transform" />
                    Watch Live Demo
                  </Button>
                </Link>
                <Link to="/pricing">
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="border-2 text-lg px-8 py-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 group"
                  >
                    Explore Pricing
                    <ArrowRight className="h-5 w-5 ml-3 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gradient-to-r from-primary/5 to-accent/5">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 lg:grid-cols-6 gap-8">
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
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Main Features */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
          
          <div className="container mx-auto px-4 relative z-10">
            {/* Feature Navigation */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-wrap justify-center gap-4 mb-16"
            >
              {mainFeatures.map((feature, index) => (
                <button
                  key={index}
                  onClick={() => setActiveFeature(index)}
                  onMouseEnter={() => setHoveredFeature(index)}
                  onMouseLeave={() => setHoveredFeature(null)}
                  className={`relative px-6 py-3 rounded-2xl font-semibold transition-all duration-500 ${
                    activeFeature === index
                      ? 'bg-gradient-to-r from-primary to-accent text-white shadow-2xl scale-105'
                      : 'bg-background/80 backdrop-blur-sm border border-border/50 text-foreground hover:bg-background hover:shadow-lg'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <feature.icon className="h-5 w-5" />
                    {feature.title}
                  </div>
                  
                  {/* Hover effect */}
                  {hoveredFeature === index && activeFeature !== index && (
                    <motion.div
                      layoutId="hoverBg"
                      className="absolute inset-0 bg-primary/10 rounded-2xl -z-10"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </button>
              ))}
            </motion.div>

            {/* Feature Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFeature}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="grid lg:grid-cols-2 gap-16 items-center"
              >
                <div className="space-y-8">
                  <div>
                    <div className="flex items-center gap-4 mb-6">
                      {/* <div className={`p-4 rounded-3xl bg-gradient-to-r ${mainFeatures[activeFeature].gradient} shadow-2xl`}>
                        <mainFeatures[activeFeature].icon className="h-10 w-10 text-white" />
                      </div> */}
                      <div>
                        <h3 className="text-4xl font-bold mb-2">{mainFeatures[activeFeature].title}</h3>
                        <div className="flex gap-2">
                          {mainFeatures[activeFeature].highlights.map((highlight, idx) => (
                            <Badge key={idx} variant="secondary" className="text-sm">
                              {highlight}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                      {mainFeatures[activeFeature].description}
                    </p>
                  </div>

                  <div className="space-y-4">
                    {mainFeatures[activeFeature].features.map((feature, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-center gap-4 p-4 rounded-2xl bg-background/50 backdrop-blur-sm border border-border/50 hover:border-primary/30 transition-all duration-300 group"
                      >
                        <div className="p-2 rounded-xl bg-green-500/10 group-hover:scale-110 transition-transform">
                          <CheckCircle className="h-6 w-6 text-green-500" />
                        </div>
                        <span className="text-lg font-medium">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <Button className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white py-6 text-lg rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 group">
                      Start Free Trial
                      <Rocket className="h-5 w-5 ml-3 group-hover:translate-x-1 transition-transform" />
                    </Button>
                    <Button variant="outline" className="py-6 text-lg rounded-2xl border-2 group">
                      <Play className="h-5 w-5 mr-3 group-hover:scale-110 transition-transform" />
                      Watch Demo
                    </Button>
                  </div>
                </div>

                <div className="relative">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className="relative rounded-3xl overflow-hidden shadow-3xl"
                  >
                    <img 
                      src={mainFeatures[activeFeature].image} 
                      alt={mainFeatures[activeFeature].title}
                      className="w-full h-96 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />
                    
                    {/* Stats Badge */}
                    <div className="absolute top-6 right-6">
                      <div className="bg-background/90 backdrop-blur-md px-4 py-2 rounded-2xl shadow-2xl">
                        <div className="text-2xl font-bold text-foreground">{mainFeatures[activeFeature].stats}</div>
                        <div className="text-sm text-muted-foreground">Success Rate</div>
                      </div>
                    </div>

                    {/* Floating Elements */}
                    <div className="absolute bottom-6 left-6 right-6">
                      <Button className="w-full bg-white/20 backdrop-blur-md text-white hover:bg-white/30 border-white/30 py-6 text-lg rounded-2xl transition-all duration-500 group">
                        <Play className="h-5 w-5 mr-3 group-hover:scale-110 transition-transform" />
                        Interactive Demo
                      </Button>
                    </div>
                  </motion.div>

                  {/* Background Decoration */}
                  <div className={`absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r ${mainFeatures[activeFeature].gradient} rounded-3xl blur-xl opacity-20 -z-10`} />
                  <div className={`absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-r ${mainFeatures[activeFeature].gradient} rounded-3xl blur-xl opacity-20 -z-10`} />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </section>


     

        {/* Enhanced CTA Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-primary/10" />
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-primary/20 rounded-full"
                initial={{ 
                  x: Math.random() * window.innerWidth,
                  y: Math.random() * window.innerHeight 
                }}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: Math.random() * 3 + 2,
                //  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>

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
                    Limited Time Offer
                  </Badge>
                  
                  <h2 className="text-5xl md:text-6xl font-black mb-8 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Ready to Transform Your Farm?
                  </h2>
                  
                  <p className="text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
                    Join thousands of forward-thinking farmers already using AgriHub to optimize their operations and maximize yields
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                    <Link to="/pricing" className="group">
                      <Button 
                        size="lg" 
                        variant="outline"
                        className="text-lg px-12 py-7 rounded-2xl border-2 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 group"
                      >
                        View Premium Plans
                        <ArrowRight className="h-5 w-5 ml-3 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                    <Link to="/login" className="group">
                      <Button 
                        size="lg" 
                        className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white text-lg px-12 py-7 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 group"
                      >
                        <Rocket className="h-5 w-5 mr-3 group-hover:scale-110 transition-transform" />
                        Start Free Trial
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
                    No credit card required • 30-day free trial • Cancel anytime
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

export default Features;