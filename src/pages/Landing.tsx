
// import { Link } from 'react-router-dom';
// import Layout from '../components/Layout/Layout'
// import { Card, CardContent } from '@/components/ui/card';
// import { Button } from '@/components/ui/button';
// import { useLanguage } from '@/contexts/LanguageContext';
// import { 
//   Droplets, 
//   BarChart3, 
//   Cloud, 
//   Sprout, 
//   ArrowRight,
//   Shield,
//   Zap,
//   Users,
//   Phone,
//   Mail,
//   MapPin,
//   Clock,
//   Star,
//   ChevronLeft,
//   ChevronRight,
//   Facebook,
//   Twitter,
//   Instagram,
//   Linkedin,
//   Menu,
//   X
// } from 'lucide-react';
// import heroImage from '@/assets/hero-agriculture.jpg';
// import farmerImage from '@/assets/farmer-tech.jpg';
// import farmField from '@/assets/farm-field.jpg';
// import technology from '@/assets/agriculture-tech.jpg';
// import harvest from '@/assets/harvest.jpg';
// import irrigation from '@/assets/irrigation-system.jpg';
// import { motion } from 'framer-motion';
// import { useState, useEffect } from 'react';

// const Landing = () => {
//   const { t } = useLanguage();
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const heroCarouselImages = [
//     heroImage,
//     farmField,
//     technology,
//     harvest,
//     irrigation
//   ];

//   const features = [
//     {
//       icon: Droplets,
//       title: t('features.soilAnalysis'),
//       description: t('features.soilAnalysisDesc'),
//       image: farmField,
//       gradient: "from-blue-500/20 to-cyan-500/20"
//     },
//     {
//       icon: Sprout,
//       title: t('features.cropSimulation'),
//       description: t('features.cropSimulationDesc'),
//       image: harvest,
//       gradient: "from-green-500/20 to-emerald-500/20"
//     },
//     {
//       icon: Cloud,
//       title: t('features.weatherForecast'),
//       description: t('features.weatherForecastDesc'),
//       image: technology,
//       gradient: "from-sky-500/20 to-blue-500/20"
//     },
//     {
//       icon: BarChart3,
//       title: t('features.dataAnalytics'),
//       description: t('features.dataAnalyticsDesc'),
//       image: irrigation,
//       gradient: "from-purple-500/20 to-pink-500/20"
//     },
//     {
//       icon: Shield,
//       title: 'Crop Protection',
//       description: 'Advanced monitoring and protection against pests and diseases',
//       image: farmField,
//       gradient: "from-red-500/20 to-orange-500/20"
//     },
//     {
//       icon: Zap,
//       title: 'Smart Irrigation',
//       description: 'Automated water management systems for optimal growth',
//       image: irrigation,
//       gradient: "from-teal-500/20 to-green-500/20"
//     },
//   ];

//   const stats = [
//     { icon: Users, value: '10,000+', label: 'Active Farmers' },
//     { icon: Sprout, value: '50+', label: 'Crop Types' },
//     { icon: Shield, value: '99.9%', label: 'Accuracy' },
//     { icon: Zap, value: '24/7', label: 'Support' },
//     { icon: BarChart3, value: '45%', label: 'Yield Increase' },
//     { icon: Droplets, value: '60%', label: 'Water Saved' },
//   ];

//   const testimonials = [
//     {
//       name: "John Farmer",
//       role: "Organic Farm Owner",
//       content: "This platform transformed how I manage my 500-acre farm. The insights helped increase yield by 40%.",
//       rating: 5,
//       image: farmerImage
//     },
//     {
//       name: "Sarah Agriculture",
//       role: "Vineyard Manager",
//       content: "The weather forecasting and soil analysis features are incredibly accurate. A game-changer!",
//       rating: 5,
//       image: farmField
//     },
//     {
//       name: "Mike Grower",
//       role: "Commercial Farmer",
//       content: "Reduced my water consumption by 35% while improving crop quality. Highly recommended!",
//       rating: 4,
//       image: harvest
//     }
//   ];

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % heroCarouselImages.length);
//     }, 5000);
//     return () => clearInterval(timer);
//   }, []);

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % heroCarouselImages.length);
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + heroCarouselImages.length) % heroCarouselImages.length);
//   };

//   return (
//         <Layout>
//     <div className="min-h-screen">
//       {/* Enhanced Hero Section with Premium Effects */}
//       <section className="relative h-screen flex items-center justify-center overflow-hidden">
//         {/* Animated Background Gradient */}
//         <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-accent/20 animate-gradient-x" />
        
//         {/* Background Carousel */}
//         <div className="absolute inset-0 z-0">
//           {heroCarouselImages.map((image, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, scale: 1.1 }}
//               animate={{ 
//                 opacity: index === currentSlide ? 1 : 0,
//                 scale: 1
//               }}
//               transition={{ duration: 1.5, ease: "easeOut" }}
//               className="absolute inset-0"
//               style={{
//                 backgroundImage: `url(${image})`,
//                 backgroundSize: 'cover',
//                 backgroundPosition: 'center',
//               }}
//             >
//               <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" />
//             </motion.div>
//           ))}
//         </div>

//         {/* Floating Particles */}
//         <div className="absolute inset-0 overflow-hidden">
//           {[...Array(20)].map((_, i) => (
//             <motion.div
//               key={i}
//               className="absolute w-2 h-2 bg-primary/30 rounded-full"
//               initial={{ 
//                 x: Math.random() * window.innerWidth,
//                 y: Math.random() * window.innerHeight 
//               }}
//               animate={{
//                 y: [0, -100, 0],
//                 opacity: [0, 1, 0],
//               }}
//               transition={{
//                 duration: Math.random() * 3 + 2,
//                 repeat: Infinity,
//                 delay: Math.random() * 2,
//               }}
//             />
//           ))}
//         </div>

//         {/* Carousel Controls */}
//         <button
//           onClick={prevSlide}
//           className="absolute left-8 z-20 p-4 rounded-2xl bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 transition-all duration-300 hover:scale-110 group"
//         >
//           <ChevronLeft className="h-6 w-6 text-white group-hover:scale-110 transition-transform" />
//         </button>
//         <button
//           onClick={nextSlide}
//           className="absolute right-8 z-20 p-4 rounded-2xl bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 transition-all duration-300 hover:scale-110 group"
//         >
//           <ChevronRight className="h-6 w-6 text-white group-hover:scale-110 transition-transform" />
//         </button>

//         {/* Carousel Indicators */}
//         <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
//           {heroCarouselImages.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => setCurrentSlide(index)}
//               className={`w-3 h-3 rounded-full transition-all duration-300 ${
//                 index === currentSlide 
//                   ? 'bg-white scale-125 shadow-lg' 
//                   : 'bg-white/50 hover:bg-white/70'
//               }`}
//             />
//           ))}
//         </div>

//         {/* Enhanced Centered Content */}
//         <div className="container mx-auto px-4 z-10">
//           <motion.div
//             initial={{ opacity: 0, y: 50 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1, ease: "easeOut" }}
//             className="text-center text-white max-w-6xl mx-auto"
//           >
         
//             <motion.h1 
//               className="text-6xl md:text-8xl font-black mb-8 leading-tight"
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.4, duration: 0.8 }}
//             >
//               <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
//                 Smart
//               </span>
//               <br />
//               <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
//                 Agriculture
//               </span>
//             </motion.h1>
            
//             <motion.p 
//               className="text-2xl md:text-3xl text-white/80 mb-12 leading-relaxed font-light max-w-4xl mx-auto"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.6, duration: 0.8 }}
//             >
//               {t('hero.subtitle')}
//             </motion.p>
            
//             <motion.div 
//               className="flex flex-wrap gap-6 justify-center"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.8, duration: 0.8 }}
//             >
//               <Link to="/login">
//                 <Button size="lg"
//                  className="bg-white text-black hover:bg-white/90 text-xl px-12 py-7 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 font-semibold group">
//                   {t('hero.cta')}
//                   <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
//                 </Button>
//               </Link>
              
//               <Link to="/features">
//                 <Button 
//                   variant="outline" 
//                   size="lg" 
//  className="bg-white text-black hover:bg-white/90 text-xl px-12 py-7 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 font-semibold group">
                
//                   Explore Features
//                 </Button>
//               </Link>
//             </motion.div>
//           </motion.div>
//         </div>

 
//       </section>

//       {/* Enhanced Stats Section */}
//       <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
//         <div className="container mx-auto px-4">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, margin: "-100px" }}
//             className="text-center mb-16"
//           >
//             <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
//               Trusted by Farmers Worldwide
//             </h2>
//             <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
//               Join thousands of successful farmers who have transformed their operations
//             </p>
//           </motion.div>

//           <div className="grid grid-cols-2 lg:grid-cols-6 gap-6">
//             {stats.map((stat, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 20, scale: 0.9 }}
//                 whileInView={{ opacity: 1, y: 0, scale: 1 }}
//                 transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
//                 viewport={{ once: true }}
//                 className="group"
//               >
//                 <Card className="relative overflow-hidden bg-gradient-to-br from-background to-muted/50 border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 h-full">
//                   {/* Animated Gradient Border */}
//                   <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
//                   <div className="absolute inset-[2px] bg-background rounded-2xl" />
                  
//                   <CardContent className="pt-8 pb-6 relative z-10">
//                     <div className="flex flex-col items-center text-center">
//                       <div className="p-4 rounded-3xl bg-gradient-to-br from-primary/10 to-accent/10 group-hover:from-primary/20 group-hover:to-accent/20 transition-all duration-500 mb-6 shadow-lg">
//                         <stat.icon className="h-10 w-10 text-primary group-hover:scale-110 transition-transform duration-500" />
//                       </div>
//                       <div className="text-4xl font-black mb-3 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
//                         {stat.value}
//                       </div>
//                       <div className="text-muted-foreground font-semibold text-lg">{stat.label}</div>
//                     </div>
//                   </CardContent>
//                 </Card>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Enhanced Features Section */}
//       <section className="py-20 bg-gradient-to-b from-background to-muted/20">
//         <div className="container mx-auto px-4">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, margin: "-100px" }}
//             className="text-center mb-20"
//           >
//             <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-primary/10 border border-primary/20 mb-6">
//               <Zap className="h-5 w-5 text-primary" />
//               <span className="text-primary font-semibold">Powerful Features</span>
//             </div>
//             <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
//               {t('features.title')}
//             </h2>
//             <p className="text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
//               Comprehensive suite of tools designed for modern, data-driven agriculture
//             </p>
//           </motion.div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {features.map((feature, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
//                 viewport={{ once: true }}
//                 className="group"
//               >
//                 <Card className="relative overflow-hidden border-0 shadow-2xl hover:shadow-4xl transition-all duration-700 hover:scale-105 h-full bg-gradient-to-br from-background to-muted/50">
//                   {/* Animated Gradient Border */}
//                   <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
//                   <div className="absolute inset-[2px] bg-background rounded-3xl" />
                  
//                   {/* Image with Overlay */}
//                   <div 
//                     className="h-56 bg-cover bg-center transition-all duration-700 group-hover:scale-110 relative overflow-hidden"
//                     style={{ 
//                       backgroundImage: `url(${feature.image})`,
//                       backgroundSize: 'cover',
//                       backgroundPosition: 'center',
//                     }}
//                   >
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20 group-hover:from-black/30 transition-all duration-500" />
//                     {/* Feature Badge */}
//                     <div className="absolute top-4 right-4 px-3 py-1 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20">
//                       <span className="text-white text-sm font-semibold">New</span>
//                     </div>
//                   </div>
                  
//                   <CardContent className="pt-8 pb-8 relative z-10">
//                     <div className="flex items-start gap-5">
//                       <div className="p-4 rounded-3xl bg-gradient-to-br from-primary/10 to-accent/10 group-hover:from-primary/20 group-hover:to-accent/20 transition-all duration-500 shadow-lg flex-shrink-0">
//                         <feature.icon className="h-8 w-8 text-primary group-hover:scale-110 transition-transform duration-500" />
//                       </div>
//                       <div className="flex-1">
//                         <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors duration-500">
//                           {feature.title}
//                         </h3>
//                         <p className="text-muted-foreground leading-relaxed text-lg">
//                           {feature.description}
//                         </p>
                     
//                       </div>
//                     </div>
//                   </CardContent>
//                 </Card>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Enhanced How It Works Section */}
//       <section className="py-20 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden">
//         {/* Background Pattern */}
//         <div className="absolute inset-0 opacity-5">
//           <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,oklch(var(--primary)/0.3)_1px,transparent_0)] bg-[length:32px_32px]"></div>
//         </div>

//         <div className="container mx-auto px-4 relative z-10">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, margin: "-100px" }}
//             className="text-center mb-20"
//           >
//             <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-accent/10 border border-accent/20 mb-6">
//               <Sprout className="h-5 w-5 text-accent" />
//               <span className="text-accent font-semibold">Simple Process</span>
//             </div>
//             <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
//               How It Works
//             </h2>
//             <p className="text-2xl text-muted-foreground max-w-3xl mx-auto">
//               Transform your farming in three simple steps
//             </p>
//           </motion.div>

//           <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
//             {[
//               { 
//                 step: "01", 
//                 title: "Setup Your Farm", 
//                 description: "Add your farm details, crop information, and historical data for personalized insights", 
//                 icon: Sprout 
//               },
//               { 
//                 step: "02", 
//                 title: "Connect Sensors", 
//                 description: "Install and connect IoT sensors for real-time monitoring of soil, weather, and crop health", 
//                 icon: Zap 
//               },
//               { 
//                 step: "03", 
//                 title: "Get Insights", 
//                 description: "Receive AI-powered recommendations, analytics, and automated control systems", 
//                 icon: BarChart3 
//               }
//             ].map((item, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, scale: 0.9, y: 30 }}
//                 whileInView={{ opacity: 1, scale: 1, y: 0 }}
//                 transition={{ delay: index * 0.2, type: "spring", stiffness: 100 }}
//                 viewport={{ once: true }}
//                 className="text-center group relative"
//               >
//                 {/* Connecting Line */}
//                 {index < 2 && (
//                   <div className="hidden md:block absolute top-24 -right-6 w-12 h-0.5 bg-gradient-to-r from-primary to-accent z-0" />
//                 )}
                
//                 <div className="relative z-10">
//                   <div className="relative mb-8">
//                     <div className="w-28 h-28 rounded-3xl bg-gradient-to-br from-primary to-accent text-primary-foreground flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-2xl relative">
//                       <item.icon className="h-12 w-12" />
//                       {/* Pulse Animation */}
//                       <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary to-accent animate-ping opacity-20" />
//                     </div>
//                     <div className="absolute -top-2 -right-2 w-12 h-12 bg-background rounded-2xl border-4 border-background flex items-center justify-center shadow-lg">
//                       <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center text-white font-bold text-sm">
//                         {item.step}
//                       </div>
//                     </div>
//                   </div>
                  
//                   <h3 className="text-3xl font-bold mb-6 group-hover:text-primary transition-colors duration-500 bg-gradient-to-r from-foreground to-foreground/80 group-hover:from-primary group-hover:to-accent bg-clip-text text-transparent">
//                     {item.title}
//                   </h3>
//                   <p className="text-muted-foreground text-xl leading-relaxed">{item.description}</p>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Enhanced Testimonials Section */}
//       <section className="py-20 bg-gradient-to-b from-background to-muted/20">
//         <div className="container mx-auto px-4">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true, margin: "-100px" }}
//             className="text-center mb-20"
//           >
//             <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-yellow-500/10 border border-yellow-500/20 mb-6">
//               <Star className="h-5 w-5 text-yellow-500" />
//               <span className="text-yellow-600 font-semibold">Farmer Testimonials</span>
//             </div>
//             <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
//               What Farmers Say
//             </h2>
//             <p className="text-2xl text-muted-foreground max-w-3xl mx-auto">
//               Join thousands of satisfied farmers worldwide who have transformed their operations
//             </p>
//           </motion.div>

//           <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
//             {testimonials.map((testimonial, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
//                 viewport={{ once: true }}
//                 className="group"
//               >
//                 <Card className="relative overflow-hidden border-0 shadow-2xl hover:shadow-4xl transition-all duration-500 hover:scale-105 h-full bg-gradient-to-br from-background to-muted/50">
//                   {/* Gradient Border */}
//                   <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
//                   <div className="absolute inset-[2px] bg-background rounded-3xl" />
                  
//                   <CardContent className="pt-8 pb-8 relative z-10">
//                     <div className="flex items-start gap-6 mb-6">
//                       <div 
//                         className="w-20 h-20 rounded-2xl bg-cover bg-center shadow-2xl group-hover:scale-110 transition-transform duration-500 flex-shrink-0"
//                         style={{ 
//                           backgroundImage: `url(${testimonial.image})`,
//                           backgroundSize: 'cover',
//                           backgroundPosition: 'center'
//                         }}
//                       />
//                       <div className="flex-1">
//                         <h4 className="font-bold text-2xl mb-2 group-hover:text-primary transition-colors duration-500">
//                           {testimonial.name}
//                         </h4>
//                         <p className="text-muted-foreground text-lg font-semibold">{testimonial.role}</p>
//                       </div>
//                     </div>
                    
//                     <div className="flex mb-6">
//                       {[...Array(5)].map((_, i) => (
//                         <Star 
//                           key={i} 
//                           className={`h-6 w-6 ${
//                             i < testimonial.rating 
//                               ? 'text-yellow-400 fill-current group-hover:scale-110 transition-transform duration-300' 
//                               : 'text-gray-300'
//                           }`} 
//                         />
//                       ))}
//                     </div>
                    
//                     <p className="text-muted-foreground text-xl leading-relaxed italic group-hover:text-foreground/80 transition-colors duration-500 relative">
//                       <span className="text-6xl absolute -top-4 -left-2 text-primary/20">"</span>
//                       {testimonial.content}
//                     </p>
//                   </CardContent>
//                 </Card>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Enhanced CTA Section */}
//       <section className="py-20 relative overflow-hidden">
//         {/* Background with Multiple Effects */}
//         <div 
//           className="absolute inset-0 z-0"
//           style={{
//             backgroundImage: `url(${farmerImage})`,
//             backgroundSize: 'cover',
//             backgroundPosition: 'center',
//           }}
//         />
//         <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-accent/90" />
//         <div className="absolute inset-0 bg-black/40" />
        
//         {/* Animated Elements */}
//         <div className="absolute inset-0 overflow-hidden">
//           {[...Array(15)].map((_, i) => (
//             <motion.div
//               key={i}
//               className="absolute w-1 h-1 bg-white/30 rounded-full"
//               initial={{ 
//                 x: Math.random() * window.innerWidth,
//                 y: Math.random() * window.innerHeight 
//               }}
//               animate={{
//                 y: [0, -50, 0],
//                 opacity: [0, 1, 0],
//               }}
//               transition={{
//                 duration: Math.random() * 4 + 3,
//                 repeat: Infinity,
//                 delay: Math.random() * 2,
//               }}
//             />
//           ))}
//         </div>

//         <div className="container mx-auto px-4 relative z-10">
//           <motion.div
//             initial={{ opacity: 0, scale: 0.9, y: 30 }}
//             whileInView={{ opacity: 1, scale: 1, y: 0 }}
//             viewport={{ once: true, margin: "-100px" }}
//             className="max-w-5xl mx-auto text-center"
//           >
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.2 }}
//               viewport={{ once: true }}
//               className="glass-card p-16 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl"
//             >
//               <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 mb-8">
//                 <Zap className="h-5 w-5 text-white" />
//                 <span className="text-white font-semibold">Limited Time Offer</span>
//               </div>
              
//               <h2 className="text-5xl md:text-7xl font-black mb-8 text-white leading-tight">
//                 Ready to Transform<br />Your Farming?
//               </h2>
              
//               <p className="text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
//                 Join thousands of forward-thinking farmers using data-driven insights to maximize yields and sustainability
//               </p>
              
//               <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
//                 <Link to="/login" className="group">
//                   <Button size="lg"
//                    className="bg-white text-black hover:bg-white/90 text-xl px-16 py-8 rounded-2xl shadow-2xl hover:shadow-4xl transition-all duration-500 hover:scale-105 font-bold group">
//                     Start Free Trial
//                     <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
//                   </Button>
//                 </Link>
//                 <Link to="/contact" className="group">
//                   <Button 
//                     size="lg" 
                 
//      className="bg-white text-black hover:bg-white/90 text-xl px-16 py-8 rounded-2xl shadow-2xl hover:shadow-4xl transition-all duration-500 hover:scale-105 font-bold group">
                 
//                     Contact Sales
//                   </Button>
//                 </Link>
//               </div>
              
//               <motion.p 
//                 initial={{ opacity: 0 }}
//                 whileInView={{ opacity: 1 }}
//                 transition={{ delay: 0.6 }}
//                 viewport={{ once: true }}
//                 className="text-white/70 mt-8 text-lg"
//               >
//                 No credit card required • 30-day free trial • Cancel anytime
//               </motion.p>
//             </motion.div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Enhanced Contact Section */}
//       <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
//         <div className="container mx-auto px-4">
//           <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
//             <motion.div
//               initial={{ opacity: 0, x: -30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true, margin: "-100px" }}
//               className="lg:pr-12"
//             >
//               <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-primary/10 border border-primary/20 mb-8">
//                 <Mail className="h-5 w-5 text-primary" />
//                 <span className="text-primary font-semibold">Get In Touch</span>
//               </div>
              
//               <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r pb-4 from-primary to-accent bg-clip-text text-transparent">
//                 Let's Grow Together
//               </h2>
//               <p className="text-2xl text-muted-foreground mb-12 leading-relaxed">
//                 Have questions about how AgriHub can transform your farming operation? Our team of agricultural experts is here to help you succeed.
//               </p>
              
//               <div className="space-y-8">
//                 {[
//                   { icon: Phone, text: '+1 (555) 123-4567', subtitle: 'Mon-Fri from 8am to 6pm' },
//                   { icon: Mail, text: 'hello@agrihub.com', subtitle: 'We reply within 24 hours' },
//                   { icon: MapPin, text: '123 Farm Street, Agriculture City, AC 12345', subtitle: 'Visit our headquarters' },
//                   { icon: Clock, text: 'Mon - Fri: 9:00 AM - 6:00 PM', subtitle: 'Saturday: 9am - 1pm' },
//                 ].map((item, index) => (
//                   <motion.div 
//                     key={index}
//                     initial={{ opacity: 0, x: -20 }}
//                     whileInView={{ opacity: 1, x: 0 }}
//                     transition={{ delay: index * 0.1 }}
//                     viewport={{ once: true }}
//                     className="flex items-start group p-6 rounded-3xl bg-gradient-to-br from-background to-muted/50 border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl"
//                   >
//                     <div className="p-4 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 group-hover:from-primary/20 group-hover:to-accent/20 transition-all duration-500 mr-6 shadow-lg">
//                       <item.icon className="h-7 w-7 text-primary group-hover:scale-110 transition-transform duration-500" />
//                     </div>
//                     <div>
//                       <div className="text-foreground text-xl font-semibold mb-1 group-hover:text-primary transition-colors duration-300">
//                         {item.text}
//                       </div>
//                       <div className="text-muted-foreground text-lg">{item.subtitle}</div>
//                     </div>
//                   </motion.div>
//                 ))}
//               </div>

     
//             </motion.div>

//             <motion.div
//               initial={{ opacity: 0, x: 30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true, margin: "-100px" }}
//             >
//               <Card className="glass-card border-0 shadow-3xl hover:shadow-4xl transition-all duration-500 rounded-3xl overflow-hidden">
//                 {/* Card Header */}
//                 <div className="bg-gradient-to-r from-primary to-accent p-8 text-center">
//                   <h3 className="text-3xl font-bold text-white mb-2">Send us a Message</h3>
//                   <p className="text-white/80 text-lg">We'll get back to you within 24 hours</p>
//                 </div>
                
//                 <CardContent className="pt-12 pb-8 px-8">
//                   <form className="space-y-8">
//                     <div className="grid md:grid-cols-2 gap-6">
//                       <div className="space-y-4">
//                         <label className="text-lg font-semibold mb-2 block">First Name</label>
//                         <input 
//                           type="text" 
//                           className="w-full p-5 rounded-2xl border-2 bg-background/50 focus:border-primary focus:ring-4 focus:ring-primary/20 transition-all duration-300 text-lg shadow-lg" 
//                           placeholder="John"
//                         />
//                       </div>
//                       <div className="space-y-4">
//                         <label className="text-lg font-semibold mb-2 block">Last Name</label>
//                         <input 
//                           type="text" 
//                           className="w-full p-5 rounded-2xl border-2 bg-background/50 focus:border-primary focus:ring-4 focus:ring-primary/20 transition-all duration-300 text-lg shadow-lg" 
//                           placeholder="Doe"
//                         />
//                       </div>
//                     </div>
//                     <div className="space-y-4">
//                       <label className="text-lg font-semibold mb-2 block">Email Address</label>
//                       <input 
//                         type="email" 
//                         className="w-full p-5 rounded-2xl border-2 bg-background/50 focus:border-primary focus:ring-4 focus:ring-primary/20 transition-all duration-300 text-lg shadow-lg" 
//                         placeholder="john@example.com"
//                       />
//                     </div>
//                     <div className="space-y-4">
//                       <label className="text-lg font-semibold mb-2 block">Your Message</label>
//                       <textarea 
//                         rows={5} 
//                         className="w-full p-5 rounded-2xl border-2 bg-background/50 focus:border-primary focus:ring-4 focus:ring-primary/20 transition-all duration-300 text-lg shadow-lg resize-none" 
//                         placeholder="Tell us about your farming needs and challenges..."
//                       />
//                     </div>
//                     <Button 
//                       type="submit" 
//                       className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white py-7 rounded-2xl text-xl font-bold shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105"
//                     >
//                       Send Message
//                       <ArrowRight className="ml-3 h-6 w-6" />
//                     </Button>
//                   </form>
//                 </CardContent>
//               </Card>
//             </motion.div>
//           </div>
//         </div>
//       </section>
//     </div>
//     </Layout>
//   );
// };

// export default Landing;




import { Link } from 'react-router-dom';
import Layout from '../components/Layout/Layout'
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { 
  Droplets, 
  BarChart3, 
  Cloud, 
  Sprout, 
  ArrowRight,
  Shield,
  Zap,
  Users,
  Phone,
  Mail,
  MapPin,
  Clock,
  Star,
  ChevronLeft,
  ChevronRight,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Menu,
  X,
  Play,
  Pause,
  BookOpen,
  Search,
  Filter,
  Download,
  Share2,
  Heart,
  Eye
} from 'lucide-react';
import heroImage from '@/assets/hero-agriculture.jpg';
import farmerImage from '@/assets/farmer-tech.jpg';
import farmField from '@/assets/farm-field.jpg';
import technology from '@/assets/agriculture-tech.jpg';
import dataAnalytics from '@/assets/Data_Analytics.jpg';
import harvest from '@/assets/harvest.jpg';
import irrigation from '@/assets/irrigation-system.jpg';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

const Landing = () => {
  const { t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [activeCategory, setActiveCategory] = useState('all');
  const [currentCaseStudy, setCurrentCaseStudy] = useState(0);

  const heroCarouselImages = [
    heroImage,
    farmField,
    technology,
    harvest,
    irrigation
  ];

  // Enhanced features with categories
  const features = [
    {
      icon: Droplets,
      title: t('features.soilAnalysis'),
      description: t('features.soilAnalysisDesc'),
      image: farmField,
      gradient: "from-blue-500/20 to-cyan-500/20",
      category: "analytics",
      popular: true
    },
    {
      icon: Sprout,
      title: t('features.cropSimulation'),
      description: t('features.cropSimulationDesc'),
      image: harvest,
      gradient: "from-green-500/20 to-emerald-500/20",
      category: "simulation",
      featured: true
    },
    {
      icon: Cloud,
      title: t('features.weatherForecast'),
      description: t('features.weatherForecastDesc'),
      image: technology,
      gradient: "from-sky-500/20 to-blue-500/20",
      category: "monitoring"
    },
    {
      icon: BarChart3,
      title: t('features.dataAnalytics'),
      description: t('features.dataAnalyticsDesc'),
      image: dataAnalytics,
      gradient: "from-purple-500/20 to-pink-500/20",
      category: "analytics"
    },
    {
      icon: Shield,
      title: 'Crop Protection',
      description: 'Advanced monitoring and protection against pests and diseases',
      image: farmField,
      gradient: "from-red-500/20 to-orange-500/20",
      category: "protection",
      new: true
    },
    {
      icon: Zap,
      title: 'Smart Irrigation',
      description: 'Automated water management systems for optimal growth',
      image: irrigation,
      gradient: "from-teal-500/20 to-green-500/20",
      category: "automation"
    },
  ];

  const stats = [
    { icon: Users, value: '10,000+', label: 'Active Farmers' },
    { icon: Sprout, value: '50+', label: 'Crop Types' },
    { icon: Shield, value: '99.9%', label: 'Accuracy' },
    { icon: Zap, value: '24/7', label: 'Support' },
    { icon: BarChart3, value: '45%', label: 'Yield Increase' },
    { icon: Droplets, value: '60%', label: 'Water Saved' },
  ];

  const testimonials = [
    {
      name: "John Farmer",
      role: "Organic Farm Owner",
      content: "This platform transformed how I manage my 500-acre farm. The insights helped increase yield by 40%.",
      rating: 5,
      image: farmerImage
    },
    {
      name: "Sarah Agriculture",
      role: "Vineyard Manager",
      content: "The weather forecasting and soil analysis features are incredibly accurate. A game-changer!",
      rating: 5,
      image: farmField
    },
    {
      name: "Mike Grower",
      role: "Commercial Farmer",
      content: "Reduced my water consumption by 35% while improving crop quality. Highly recommended!",
      rating: 4,
      image: harvest
    }
  ];

  // New sections for enhanced landing page
  const caseStudies = [
    {
      title: "Smart Vineyard Transformation",
      description: "How we helped a 200-acre vineyard increase yield by 45% using IoT sensors and AI analytics",
      image: farmField,
      results: ["45% Yield Increase", "30% Water Saved", "ROI: 6 Months"],
      duration: "3 Months"
    },
    {
      title: "Organic Farm Automation",
      description: "Complete automation system for organic farming with 99% accuracy in crop monitoring",
      image: harvest,
      results: ["60% Labor Reduction", "40% Cost Savings", "Organic Certified"],
      duration: "6 Months"
    },
    {
      title: "Climate-Resilient Farming",
      description: "Implementing climate adaptation strategies for sustainable farming in changing environments",
      image: technology,
      results: ["Climate Resilient", "95% Accuracy", "Year-round Production"],
      duration: "12 Months"
    }
  ];

  const partners = [
    { name: "AgriTech Corp", logo: "🌾" },
    { name: "FarmInnovate", logo: "🚜" },
    { name: "GreenSolutions", logo: "🌱" },
    { name: "CropMasters", logo: "📊" },
    { name: "SoilSense", logo: "🔬" },
    { name: "HarvestPlus", logo: "⚡" },
  ];

  const categories = [
    { id: 'all', name: 'All Features', count: features.length },
    { id: 'analytics', name: 'Analytics', count: features.filter(f => f.category === 'analytics').length },
    { id: 'monitoring', name: 'Monitoring', count: features.filter(f => f.category === 'monitoring').length },
    { id: 'automation', name: 'Automation', count: features.filter(f => f.category === 'automation').length },
    { id: 'protection', name: 'Protection', count: features.filter(f => f.category === 'protection').length },
    { id: 'simulation', name: 'Simulation', count: features.filter(f => f.category === 'simulation').length },
  ];

  const filteredFeatures = activeCategory === 'all' 
    ? features 
    : features.filter(feature => feature.category === activeCategory);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isPlaying) {
      timer = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % heroCarouselImages.length);
      }, 5000);
    }
    return () => clearInterval(timer);
  }, [isPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroCarouselImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroCarouselImages.length) % heroCarouselImages.length);
  };

  const nextCaseStudy = () => {
    setCurrentCaseStudy((prev) => (prev + 1) % caseStudies.length);
  };

  const prevCaseStudy = () => {
    setCurrentCaseStudy((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);
  };

  return (
    <Layout>
      <div className="min-h-screen">
        {/* Enhanced Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          {/* Animated Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-accent/20 animate-gradient-x" />
          
          {/* Background Carousel */}
          <div className="absolute inset-0 z-0">
            {heroCarouselImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ 
                  opacity: index === currentSlide ? 1 : 0,
                  scale: 1
                }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="absolute inset-0"
                style={{
                  backgroundImage: `url(${image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" />
              </motion.div>
            ))}
          </div>

          {/* Floating Particles */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-primary/30 rounded-full"
                initial={{ 
                  x: Math.random() * window.innerWidth,
                  y: Math.random() * window.innerHeight 
                }}
                animate={{
                  y: [0, -100, 0],
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

          {/* Enhanced Carousel Controls */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex items-center space-x-6">
            <button
              onClick={prevSlide}
              className="p-3 rounded-2xl bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 transition-all duration-300 hover:scale-110 group"
            >
              <ChevronLeft className="h-5 w-5 text-white group-hover:scale-110 transition-transform" />
            </button>
            
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-3 rounded-2xl bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 transition-all duration-300 hover:scale-110"
            >
              {isPlaying ? 
                <Pause className="h-5 w-5 text-white" /> : 
                <Play className="h-5 w-5 text-white" />
              }
            </button>

            <button
              onClick={nextSlide}
              className="p-3 rounded-2xl bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 transition-all duration-300 hover:scale-110 group"
            >
              <ChevronRight className="h-5 w-5 text-white group-hover:scale-110 transition-transform" />
            </button>
          </div>

          {/* Carousel Indicators */}
          <div className="absolute bottom-8 right-8 z-20 flex flex-col space-y-2">
            {heroCarouselImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-8 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-white scale-125 shadow-lg' 
                    : 'bg-white/50 hover:bg-white/70'
                }`}
              />
            ))}
          </div>

          {/* Enhanced Centered Content */}
          <div className="container mx-auto px-4 z-10">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-center text-white max-w-6xl mx-auto"
            >
              <motion.h1 
                className="text-6xl md:text-8xl font-black mb-8 leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                  Smart
                </span>
                <br />
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Agriculture
                </span>
              </motion.h1>
              
              <motion.p 
                className="text-2xl md:text-3xl text-white/80 mb-12 leading-relaxed font-light max-w-4xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                {t('hero.subtitle')}
              </motion.p>
              
              <motion.div 
                className="flex flex-wrap gap-6 justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                <Link to="/login">
                  <Button size="lg"
                   className="bg-white text-black hover:bg-white/90 text-xl px-12 py-7 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 font-semibold group">
                    {t('hero.cta')}
                    <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
                  </Button>
                </Link>
                
                <Link to="/features">
                  <Button 
                
                    size="lg" 
                    className="border-white text-white hover:bg-white/20 text-xl px-12 py-7 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 font-semibold group">
                    Explore Features
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

   

        {/* Enhanced Features Section with Filter */}
        <section className="py-20 bg-gradient-to-b from-background to-muted/20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-center mb-12"
            >
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-primary/10 border border-primary/20 mb-6">
                <Zap className="h-5 w-5 text-primary" />
                <span className="text-primary font-semibold">Powerful Features</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                {t('features.title')}
              </h2>
              <p className="text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Comprehensive suite of tools designed for modern, data-driven agriculture
              </p>
            </motion.div>

            {/* Filter Tabs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-wrap justify-center gap-4 mb-12"
            >
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ${
                    activeCategory === category.id
                      ? 'bg-primary text-primary-foreground shadow-lg'
                      : 'bg-muted hover:bg-muted/80 text-muted-foreground'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <Card className="relative overflow-hidden border-0 shadow-2xl hover:shadow-4xl transition-all duration-700 hover:scale-105 h-full bg-gradient-to-br from-background to-muted/50">
                    {/* Animated Gradient Border */}
                    <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                    <div className="absolute inset-[2px] bg-background rounded-3xl" />
                    
                    {/* Badges */}
                    <div className="absolute top-4 left-4 z-20 flex gap-2">
                      {feature.popular && (
                        <span className="px-3 py-1 bg-yellow-500 text-yellow-950 text-sm font-bold rounded-2xl">
                          Popular
                        </span>
                      )}
                      {feature.featured && (
                        <span className="px-3 py-1 bg-green-500 text-green-950 text-sm font-bold rounded-2xl">
                          Featured
                        </span>
                      )}
                      {feature.new && (
                        <span className="px-3 py-1 bg-blue-500 text-blue-950 text-sm font-bold rounded-2xl">
                          New
                        </span>
                      )}
                    </div>

                    {/* Image with Overlay */}
                    <div 
                      className="h-56 bg-cover bg-center transition-all duration-700 group-hover:scale-110 relative overflow-hidden"
                      style={{ 
                        backgroundImage: `url(${feature.image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20 group-hover:from-black/30 transition-all duration-500" />
                    </div>
                    
                    <CardContent className="pt-8 pb-8 relative z-10">
                      <div className="flex items-start gap-5">
                        <div className="p-4 rounded-3xl bg-gradient-to-br from-primary/10 to-accent/10 group-hover:from-primary/20 group-hover:to-accent/20 transition-all duration-500 shadow-lg flex-shrink-0">
                          <feature.icon className="h-8 w-8 text-primary group-hover:scale-110 transition-transform duration-500" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors duration-500">
                            {feature.title}
                          </h3>
                          <p className="text-muted-foreground leading-relaxed text-lg">
                            {feature.description}
                          </p>
                          <div className="flex items-center justify-between mt-6">
                            <span className="text-sm font-semibold text-primary bg-primary/10 px-3 py-1 rounded-2xl">
                              {categories.find(c => c.id === feature.category)?.name}
                            </span>
                            <div className="flex gap-2">
                              <Button variant="ghost" size="sm" className="rounded-2xl">
                                <Eye className="h-4 w-4" />
                              </Button>
                              <Button variant="ghost" size="sm" className="rounded-2xl">
                                <Heart className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* New: Case Studies Slider */}
        <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-accent/10 border border-accent/20 mb-6">
                <BookOpen className="h-5 w-5 text-accent" />
                <span className="text-accent font-semibold">Success Stories</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Case Studies
              </h2>
              <p className="text-2xl text-muted-foreground max-w-3xl mx-auto">
                Real results from farmers who transformed their operations
              </p>
            </motion.div>

            <div className="relative max-w-6xl mx-auto">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentCaseStudy}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                  className="bg-gradient-to-br from-background to-muted/50 rounded-3xl shadow-2xl overflow-hidden"
                >
                  <div className="grid lg:grid-cols-2 gap-8">
                    <div 
                      className="h-96 lg:h-full bg-cover bg-center"
                      style={{ backgroundImage: `url(${caseStudies[currentCaseStudy].image})` }}
                    />
                    <div className="p-12">
                      <h3 className="text-4xl font-bold mb-6 text-foreground">
                        {caseStudies[currentCaseStudy].title}
                      </h3>
                      <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                        {caseStudies[currentCaseStudy].description}
                      </p>
                      
                      <div className="grid grid-cols-2 gap-6 mb-8">
                        {caseStudies[currentCaseStudy].results.map((result, index) => (
                          <div key={index} className="text-center p-4 bg-primary/10 rounded-2xl">
                            <div className="text-2xl font-bold text-primary mb-2">{result}</div>
                          </div>
                        ))}
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="text-lg font-semibold text-muted-foreground">
                          Duration: {caseStudies[currentCaseStudy].duration}
                        </div>
                        <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                          Read Full Study
                          <BookOpen className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Case Study Controls */}
              <div className="flex justify-center items-center space-x-6 mt-8">
                <button
                  onClick={prevCaseStudy}
                  className="p-4 rounded-2xl bg-primary/10 hover:bg-primary/20 transition-all duration-300"
                >
                  <ChevronLeft className="h-6 w-6 text-primary" />
                </button>
                
                <div className="flex space-x-2">
                  {caseStudies.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentCaseStudy(index)}
                      className={`w-3 h-3 rounded-full transition-all ${
                        index === currentCaseStudy ? 'bg-primary scale-125' : 'bg-muted-foreground/30'
                      }`}
                    />
                  ))}
                </div>

                <button
                  onClick={nextCaseStudy}
                  className="p-4 rounded-2xl bg-primary/10 hover:bg-primary/20 transition-all duration-300"
                >
                  <ChevronRight className="h-6 w-6 text-primary" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Stats Section */}
        <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Trusted by Farmers Worldwide
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Join thousands of successful farmers who have transformed their operations
              </p>
            </motion.div>

            <div className="grid grid-cols-2 lg:grid-cols-6 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <Card className="relative overflow-hidden bg-gradient-to-br from-background to-muted/50 border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 h-full">
                    {/* Animated Gradient Border */}
                    <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                    <div className="absolute inset-[2px] bg-background rounded-2xl" />
                    
                    <CardContent className="pt-8 pb-6 relative z-10">
                      <div className="flex flex-col items-center text-center">
                        <div className="p-4 rounded-3xl bg-gradient-to-br from-primary/10 to-accent/10 group-hover:from-primary/20 group-hover:to-accent/20 transition-all duration-500 mb-6 shadow-lg">
                          <stat.icon className="h-10 w-10 text-primary group-hover:scale-110 transition-transform duration-500" />
                        </div>
                        <div className="text-4xl font-black mb-3 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                          {stat.value}
                        </div>
                        <div className="text-muted-foreground font-semibold text-lg">{stat.label}</div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Testimonials Section */}
        <section className="py-20 bg-gradient-to-b from-background to-muted/20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-center mb-20"
            >
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-yellow-500/10 border border-yellow-500/20 mb-6">
                <Star className="h-5 w-5 text-yellow-500" />
                <span className="text-yellow-600 font-semibold">Farmer Testimonials</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                What Farmers Say
              </h2>
              <p className="text-2xl text-muted-foreground max-w-3xl mx-auto">
                Join thousands of satisfied farmers worldwide who have transformed their operations
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <Card className="relative overflow-hidden border-0 shadow-2xl hover:shadow-4xl transition-all duration-500 hover:scale-105 h-full bg-gradient-to-br from-background to-muted/50">
                    {/* Gradient Border */}
                    <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                    <div className="absolute inset-[2px] bg-background rounded-3xl" />
                    
                    <CardContent className="pt-8 pb-8 relative z-10">
                      <div className="flex items-start gap-6 mb-6">
                        <div 
                          className="w-20 h-20 rounded-2xl bg-cover bg-center shadow-2xl group-hover:scale-110 transition-transform duration-500 flex-shrink-0"
                          style={{ 
                            backgroundImage: `url(${testimonial.image})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                          }}
                        />
                        <div className="flex-1">
                          <h4 className="font-bold text-2xl mb-2 group-hover:text-primary transition-colors duration-500">
                            {testimonial.name}
                          </h4>
                          <p className="text-muted-foreground text-lg font-semibold">{testimonial.role}</p>
                        </div>
                      </div>
                      
                      <div className="flex mb-6">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`h-6 w-6 ${
                              i < testimonial.rating 
                                ? 'text-yellow-400 fill-current group-hover:scale-110 transition-transform duration-300' 
                                : 'text-gray-300'
                            }`} 
                          />
                        ))}
                      </div>
                      
                      <p className="text-muted-foreground text-xl leading-relaxed italic group-hover:text-foreground/80 transition-colors duration-500 relative">
                        <span className="text-6xl absolute -top-4 -left-2 text-primary/20">"</span>
                        {testimonial.content}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        

        {/* Enhanced CTA Section */}
        <section className="py-20 relative overflow-hidden">
          {/* Background with Multiple Effects */}
          <div 
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: `url(${farmerImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-accent/90" />
          <div className="absolute inset-0 bg-black/40" />
          
          {/* Animated Elements */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-white/30 rounded-full"
                initial={{ 
                  x: Math.random() * window.innerWidth,
                  y: Math.random() * window.innerHeight 
                }}
                animate={{
                  y: [0, -50, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: Math.random() * 4 + 3,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="max-w-5xl mx-auto text-center"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                className="glass-card p-16 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl"
              >
                <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 mb-8">
                  <Zap className="h-5 w-5 text-white" />
                  <span className="text-white font-semibold">Limited Time Offer</span>
                </div>
                
                <h2 className="text-5xl md:text-7xl font-black mb-8 text-white leading-tight">
                  Ready to Transform<br />Your Farming?
                </h2>
                
                <p className="text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
                  Join thousands of forward-thinking farmers using data-driven insights to maximize yields and sustainability
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                  <Link to="/login" className="group">
                    <Button size="lg"
                     className="bg-white text-black hover:bg-white/90 text-xl px-16 py-8 rounded-2xl shadow-2xl hover:shadow-4xl transition-all duration-500 hover:scale-105 font-bold group">
                      Start Free Trial
                      <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform duration-300" />
                    </Button>
                  </Link>
                  <Link to="/contact" className="group">
                    <Button 
                      size="lg" 
                      className="border-white text-white hover:bg-white/20 text-xl px-16 py-8 rounded-2xl shadow-2xl hover:shadow-4xl transition-all duration-500 hover:scale-105 font-bold group">
                      Contact Sales
                    </Button>
                  </Link>
                </div>
                
                <motion.p 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  viewport={{ once: true }}
                  className="text-white/70 mt-8 text-lg"
                >
                  No credit card required • 30-day free trial • Cancel anytime
                </motion.p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Enhanced Contact Section */}
        <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="lg:pr-12"
              >
                <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl bg-primary/10 border border-primary/20 mb-8">
                  <Mail className="h-5 w-5 text-primary" />
                  <span className="text-primary font-semibold">Get In Touch</span>
                </div>
                
                <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r pb-4 from-primary to-accent bg-clip-text text-transparent">
                  Let's Grow Together
                </h2>
                <p className="text-2xl text-muted-foreground mb-12 leading-relaxed">
                  Have questions about how AgriHub can transform your farming operation? Our team of agricultural experts is here to help you succeed.
                </p>
                
                <div className="space-y-8">
                  {[
                    { icon: Phone, text: '+1 (555) 123-4567', subtitle: 'Mon-Fri from 8am to 6pm' },
                    { icon: Mail, text: 'hello@agrihub.com', subtitle: 'We reply within 24 hours' },
                    { icon: MapPin, text: '123 Farm Street, Agriculture City, AC 12345', subtitle: 'Visit our headquarters' },
                    { icon: Clock, text: 'Mon - Fri: 9:00 AM - 6:00 PM', subtitle: 'Saturday: 9am - 1pm' },
                  ].map((item, index) => (
                    <motion.div 
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start group p-6 rounded-3xl bg-gradient-to-br from-background to-muted/50 border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-2xl"
                    >
                      <div className="p-4 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 group-hover:from-primary/20 group-hover:to-accent/20 transition-all duration-500 mr-6 shadow-lg">
                        <item.icon className="h-7 w-7 text-primary group-hover:scale-110 transition-transform duration-500" />
                      </div>
                      <div>
                        <div className="text-foreground text-xl font-semibold mb-1 group-hover:text-primary transition-colors duration-300">
                          {item.text}
                        </div>
                        <div className="text-muted-foreground text-lg">{item.subtitle}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <Card className="glass-card border-0 shadow-3xl hover:shadow-4xl transition-all duration-500 rounded-3xl overflow-hidden">
                  {/* Card Header */}
                  <div className="bg-gradient-to-r from-primary to-accent p-8 text-center">
                    <h3 className="text-3xl font-bold text-white mb-2">Send us a Message</h3>
                    <p className="text-white/80 text-lg">We'll get back to you within 24 hours</p>
                  </div>
                  
                  <CardContent className="pt-12 pb-8 px-8">
                    <form className="space-y-8">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                          <label className="text-lg font-semibold mb-2 block">First Name</label>
                          <input 
                            type="text" 
                            className="w-full p-5 rounded-2xl border-2 bg-background/50 focus:border-primary focus:ring-4 focus:ring-primary/20 transition-all duration-300 text-lg shadow-lg" 
                            placeholder="John"
                          />
                        </div>
                        <div className="space-y-4">
                          <label className="text-lg font-semibold mb-2 block">Last Name</label>
                          <input 
                            type="text" 
                            className="w-full p-5 rounded-2xl border-2 bg-background/50 focus:border-primary focus:ring-4 focus:ring-primary/20 transition-all duration-300 text-lg shadow-lg" 
                            placeholder="Doe"
                          />
                        </div>
                      </div>
                      <div className="space-y-4">
                        <label className="text-lg font-semibold mb-2 block">Email Address</label>
                        <input 
                          type="email" 
                          className="w-full p-5 rounded-2xl border-2 bg-background/50 focus:border-primary focus:ring-4 focus:ring-primary/20 transition-all duration-300 text-lg shadow-lg" 
                          placeholder="john@example.com"
                        />
                      </div>
                      <div className="space-y-4">
                        <label className="text-lg font-semibold mb-2 block">Your Message</label>
                        <textarea 
                          rows={5} 
                          className="w-full p-5 rounded-2xl border-2 bg-background/50 focus:border-primary focus:ring-4 focus:ring-primary/20 transition-all duration-300 text-lg shadow-lg resize-none" 
                          placeholder="Tell us about your farming needs and challenges..."
                        />
                      </div>
                      <Button 
                        type="submit" 
                        className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white py-7 rounded-2xl text-xl font-bold shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105"
                      >
                        Send Message
                        <ArrowRight className="ml-3 h-6 w-6" />
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>
             {/* New: Partners Slider Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h3 className="text-2xl font-semibold text-muted-foreground mb-4">
                Trusted by Industry Leaders
              </h3>
            </motion.div>
            
            <div className="relative overflow-hidden">
              <motion.div 
                className="flex space-x-12"
                animate={{ x: [0, -1000] }}
                transition={{ 
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 20,
                    ease: "linear",
                  }
                }}
              >
                {[...partners, ...partners].map((partner, index) => (
                  <div key={index} className="flex-shrink-0 flex items-center space-x-3">
                    <span className="text-3xl">{partner.logo}</span>
                    <span className="text-xl font-semibold text-muted-foreground">{partner.name}</span>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Landing;