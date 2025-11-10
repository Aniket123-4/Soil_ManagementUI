// import { Link } from 'react-router-dom';
// import { Button } from '@/components/ui/button';
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
// import { Badge } from '@/components/ui/badge';
// import { Sprout, Users, Target, Globe, Award, Heart } from 'lucide-react';
// import { motion } from 'framer-motion';
// import teamImage from '@/assets/team.jpg';
// import missionImage from '@/assets/mission.jpg';
// import Layout from '../components/Layout/Layout'
// const About = () => {
//   const stats = [
//     { number: "10,000+", label: "Active Farmers" },
//     { number: "50+", label: "Countries" },
//     { number: "45%", label: "Average Yield Increase" },
//     { number: "99.9%", label: "Uptime" }
//   ];

//   const values = [
//     {
//       icon: Target,
//       title: "Innovation",
//       description: "Constantly pushing the boundaries of agricultural technology"
//     },
//     {
//       icon: Users,
//       title: "Community",
//       description: "Building a global network of farmers sharing knowledge"
//     },
//     {
//       icon: Globe,
//       title: "Sustainability",
//       description: "Promoting environmentally responsible farming practices"
//     },
//     {
//       icon: Heart,
//       title: "Impact",
//       description: "Making a real difference in farmers' lives worldwide"
//     }
//   ];

//   const team = [
//     {
//       name: "Sarah Johnson",
//       role: "CEO & Founder",
//       description: "Former agricultural scientist with 15+ years in farming technology"
//     },
//     {
//       name: "Mike Chen",
//       role: "CTO",
//       description: "Expert in AI and IoT with a passion for sustainable agriculture"
//     },
//     {
//       name: "Emma Rodriguez",
//       role: "Head of Agriculture",
//       description: "Agronomist with expertise in crop science and soil health"
//     },
//     {
//       name: "David Kim",
//       role: "Product Lead",
//       description: "Product manager focused on user experience and farmer needs"
//     }
//   ];

//   return (

//     <Layout>
//     <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
     
//       {/* Hero Section */}
//       <section className="pt-32 pb-20">
//         <div className="container mx-auto px-4">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="max-w-4xl mx-auto text-center"
//           >
//             <Badge className="mb-4 px-4 py-1 text-sm bg-primary/10 text-primary border-primary/20">
//               Our Story
//             </Badge>
//             <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
//               Revolutionizing Agriculture
//             </h1>
//             <p className="text-xl text-muted-foreground mb-8">
//               We're on a mission to empower farmers with cutting-edge technology, 
//               making sustainable farming accessible to everyone.
//             </p>
//           </motion.div>
//         </div>
//       </section>

//       {/* Stats Section */}
//       <section className="py-20 bg-muted/50">
//         <div className="container mx-auto px-4">
//           <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
//             {stats.map((stat, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.1 }}
//                 className="text-center"
//               >
//                 <div className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
//                   {stat.number}
//                 </div>
//                 <div className="text-muted-foreground font-medium">{stat.label}</div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Mission Section */}
//       <section className="py-20">
//         <div className="container mx-auto px-4">
//           <div className="flex flex-col lg:flex-row items-center gap-12">
//             <motion.div
//               initial={{ opacity: 0, x: -50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               className="lg:w-1/2"
//             >
//               <img 
//                 src={missionImage} 
//                 alt="Our Mission"
//                 className="rounded-3xl shadow-2xl w-full h-80 object-cover"
//               />
//             </motion.div>
//             <motion.div
//               initial={{ opacity: 0, x: 50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               className="lg:w-1/2"
//             >
//               <Badge className="mb-4 px-3 py-1 text-xs bg-primary/10 text-primary">
//                 Our Mission
//               </Badge>
//               <h2 className="text-4xl font-bold mb-6">Building the Future of Farming</h2>
//               <p className="text-lg text-muted-foreground mb-6">
//                 Founded in 2020, AgriHub emerged from a simple observation: while technology was 
//                 transforming every industry, farming was being left behind. We set out to change that.
//               </p>
//               <p className="text-lg text-muted-foreground mb-8">
//                 Today, we're a team of passionate technologists, agronomists, and farmers working 
//                 together to create solutions that make farming more efficient, sustainable, and profitable.
//               </p>
//               <Button className="bg-gradient-to-r from-primary to-accent">
//                 Learn Our Story
//               </Button>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Values Section */}
//       <section className="py-20 bg-muted/50">
//         <div className="container mx-auto px-4">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-center mb-16"
//           >
//             <h2 className="text-4xl font-bold mb-4">Our Values</h2>
//             <p className="text-xl text-muted-foreground">The principles that guide everything we do</p>
//           </motion.div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {values.map((value, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.1 }}
//               >
//                 <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-center h-full">
//                   <CardHeader>
//                     <div className="p-3 rounded-2xl bg-primary/10 w-fit mx-auto mb-4">
//                       <value.icon className="h-8 w-8 text-primary" />
//                     </div>
//                     <CardTitle>{value.title}</CardTitle>
//                   </CardHeader>
//                   <CardContent>
//                     <CardDescription className="text-base">{value.description}</CardDescription>
//                   </CardContent>
//                 </Card>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Team Section */}
//       <section className="py-20">
//         <div className="container mx-auto px-4">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-center mb-16"
//           >
//             <h2 className="text-4xl font-bold mb-4">Meet Our Team</h2>
//             <p className="text-xl text-muted-foreground">The passionate people behind AgriHub</p>
//           </motion.div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {team.map((member, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.1 }}
//               >
//                 <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-center h-full">
//                   <CardHeader>
//                     <div className="w-20 h-20 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mb-4 flex items-center justify-center">
//                       <Users className="h-10 w-10 text-white" />
//                     </div>
//                     <CardTitle>{member.name}</CardTitle>
//                     <CardDescription className="text-primary font-semibold">{member.role}</CardDescription>
//                   </CardHeader>
//                   <CardContent>
//                     <p className="text-muted-foreground">{member.description}</p>
//                   </CardContent>
//                 </Card>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//     </Layout>
//   );
// };

// export default About;


import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Sprout, Users, Target, Globe, Award, Heart, Star, Zap, Leaf, TrendingUp, Clock, Shield, Sparkles, ArrowRight, ChevronRight, Play } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import teamImage from '@/assets/team.jpg';
import missionImage from '@/assets/mission.jpg';
import aboutHero from '@/assets/Farm-field.jpg';
import farmInnovation from '@/assets/farm-innovation.jpg';
import Layout from '../components/Layout/Layout';

const About = () => {
  const [activeValue, setActiveValue] = useState(0);
  const [hoveredTeam, setHoveredTeam] = useState<number | null>(null);

  const stats = [
    { icon: Users, number: "10,000+", label: "Active Farmers", suffix: "farms" },
    { icon: Globe, number: "50+", label: "Countries", suffix: "worldwide" },
    { icon: TrendingUp, number: "45%", label: "Average Yield", suffix: "increase" },
    { icon: Shield, number: "99.9%", label: "Platform", suffix: "uptime" },
    { icon: Leaf, number: "60%", label: "Water", suffix: "saved" },
    { icon: Award, number: "98%", label: "Farmer", suffix: "satisfaction" }
  ];

  const values = [
    {
      icon: Target,
      title: "Innovation",
      description: "Constantly pushing the boundaries of agricultural technology with cutting-edge AI and IoT solutions",
      color: "blue",
      features: ["AI-Powered Insights", "Real-time Monitoring", "Predictive Analytics"]
    },
    {
      icon: Users,
      title: "Community",
      description: "Building a global network of farmers sharing knowledge and best practices",
      color: "green",
      features: ["Global Network", "Knowledge Sharing", "Collaborative Growth"]
    },
    {
      icon: Globe,
      title: "Sustainability",
      description: "Promoting environmentally responsible farming practices for future generations",
      color: "emerald",
      features: ["Eco-friendly", "Resource Optimization", "Long-term Vision"]
    },
    {
      icon: Heart,
      title: "Impact",
      description: "Making a real difference in farmers' lives and global food security",
      color: "red",
      features: ["Real Results", "Social Impact", "Global Reach"]
    }
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      description: "Former agricultural scientist with 15+ years in farming technology and sustainable agriculture",
      expertise: ["Agricultural Science", "Sustainability", "Leadership"],
      achievement: "Pioneered 5+ agricultural tech innovations",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      name: "Mike Chen",
      role: "Chief Technology Officer",
      description: "Expert in AI and IoT with a passion for sustainable agriculture and data-driven solutions",
      expertise: ["AI/ML", "IoT Systems", "Data Architecture"],
      achievement: "Built scalable platforms serving 10K+ farms",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      name: "Emma Rodriguez",
      role: "Head of Agriculture",
      description: "Agronomist with expertise in crop science, soil health, and sustainable farming practices",
      expertise: ["Agronomy", "Crop Science", "Soil Health"],
      achievement: "Increased yields for 5000+ farms",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      name: "David Kim",
      role: "Product Lead",
      description: "Product manager focused on user experience and understanding farmer needs and challenges",
      expertise: ["Product Strategy", "UX Design", "User Research"],
      achievement: "95% user satisfaction rating",
      gradient: "from-orange-500 to-red-500"
    }
  ];

  const milestones = [
    { year: "2020", event: "Company Founded", description: "Started with a vision to transform agriculture" },
    { year: "2021", event: "First 1000 Farms", description: "Reached milestone of 1000 active farms" },
    { year: "2022", event: "AI Platform Launch", description: "Introduced AI-powered analytics" },
    { year: "2023", event: "Global Expansion", description: "Expanded to 50+ countries" },
    { year: "2024", event: "Industry Awards", description: "Recognized as top agri-tech innovator" }
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
            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring" }}
                >
                  <Badge className="mb-6 px-6 py-2 text-base bg-gradient-to-r from-primary to-accent text-white border-0 shadow-lg">
                    <Sparkles className="h-4 w-4 mr-2" />
                    Our Story
                  </Badge>
                </motion.div>
                
                <motion.h1 
                  className="text-6xl md:text-7xl font-black mb-8 leading-tight"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                >
                  <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent bg-size-200 animate-gradient">
                    Revolutionizing
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
                    Agriculture
                  </span>
                </motion.h1>
                
                <motion.p 
                  className="text-2xl md:text-3xl text-muted-foreground mb-8 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                >
                  We're on a mission to empower farmers with cutting-edge technology, 
                  making sustainable farming accessible to everyone, everywhere.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.8 }}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <Link to="/contact">
                    <Button 
                      size="lg" 
                      className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white text-lg px-8 py-6 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 group"
                    >
                      Join Our Mission
                      <ArrowRight className="h-5 w-5 ml-3 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                  <Link to="/features">
                    <Button 
                      size="lg" 
                      variant="outline"
                      className="text-lg px-8 py-6 rounded-2xl border-2 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 group"
                    >
                      <Play className="h-5 w-5 mr-3 group-hover:scale-110 transition-transform" />
                      Watch Story
                    </Button>
                  </Link>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="relative"
              >
                <div className="relative rounded-3xl overflow-hidden shadow-3xl">
                  <img 
                    src={aboutHero} 
                    alt="Agricultural Innovation"
                    className="w-full h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />
                  
                  {/* Floating Stats */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="grid grid-cols-3 gap-4">
                      {stats.slice(0, 3).map((stat, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.8 + index * 0.1 }}
                          className="bg-background/90 backdrop-blur-md rounded-2xl p-4 text-center shadow-2xl"
                        >
                          <div className="text-xl font-bold text-foreground">{stat.number}</div>
                          <div className="text-xs text-muted-foreground">{stat.label}</div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Background Decoration */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-primary to-accent rounded-3xl blur-xl opacity-20 -z-10" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-r from-primary to-accent rounded-3xl blur-xl opacity-20 -z-10" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Enhanced Stats Section */}
        <section className="py-16 bg-gradient-to-r from-primary/5 to-accent/5">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 lg:grid-cols-6 gap-8 max-w-6xl mx-auto">
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
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
                  <div className="text-xs text-muted-foreground">{stat.suffix}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Mission Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="relative"
              >
                <div className="relative rounded-3xl overflow-hidden shadow-3xl">
                  <img 
                    src={missionImage} 
                    alt="Our Mission"
                    className="w-full h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/20" />
                  
                  {/* Mission Badge */}
                  <div className="absolute top-6 left-6">
                    <Badge className="bg-background/90 backdrop-blur-md text-foreground border-0 shadow-lg px-4 py-2">
                      💚 Since 2020
                    </Badge>
                  </div>
                </div>

                {/* Floating Element */}
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-r from-primary to-accent rounded-3xl blur-xl opacity-20 -z-10" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="space-y-8"
              >
                <div>
                  <Badge className="mb-6 px-4 py-2 text-sm bg-primary/10 text-primary border-primary/20">
                    Our Journey
                  </Badge>
                  <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Building the Future of Farming
                  </h2>
                  <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                    Founded in 2020, AgriHub emerged from a simple observation: while technology was 
                    transforming every industry, farming was being left behind. We set out to change that 
                    by bringing cutting-edge AI, IoT, and data analytics to agriculture.
                  </p>
                  <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                    Today, we're a team of passionate technologists, agronomists, and farmers working 
                    together to create solutions that make farming more efficient, sustainable, and profitable 
                    for everyone, from small family farms to large agricultural enterprises.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white py-6 text-lg rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 group">
                    Read Our Story
                    <ArrowRight className="h-5 w-5 ml-3 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button variant="outline" className="py-6 text-lg rounded-2xl border-2 group">
                    Download Report
                    <Zap className="h-5 w-5 ml-3 group-hover:scale-110 transition-transform" />
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <Badge className="mb-4 px-4 py-1 text-sm bg-primary/10 text-primary border-primary/20">
                <Clock className="h-4 w-4 mr-2" />
                Our Journey
              </Badge>
              <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Milestones & Achievements
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                From startup to industry leader - our journey of growth and innovation
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary to-accent rounded-full" />
                
                <div className="space-y-12">
                  {milestones.map((milestone, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 }}
                      className={`relative flex items-center ${
                        index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                      }`}
                    >
                      {/* Content */}
                      <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                        <Card className="border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105">
                          <CardContent className="p-6">
                            <div className="text-2xl font-bold text-primary mb-2">{milestone.year}</div>
                            <h3 className="text-xl font-semibold mb-2">{milestone.event}</h3>
                            <p className="text-muted-foreground">{milestone.description}</p>
                          </CardContent>
                        </Card>
                      </div>
                      
                      {/* Timeline Dot */}
                      <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-primary to-accent rounded-full border-4 border-background shadow-2xl z-10" />
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Values Section */}
      <section className="py-20 bg-muted/30">
  <div className="container mx-auto px-4">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <h2 className="text-4xl font-bold mb-4">Our Values</h2>
      <p className="text-xl text-muted-foreground">The principles that guide everything we do</p>
    </motion.div>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      {values.map((value, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
        >
          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-center h-full">
            <CardHeader>
              <div className="p-3 rounded-2xl bg-primary/10 w-fit mx-auto mb-4">
                <value.icon className="h-8 w-8 text-primary" />
              </div>
              <CardTitle>{value.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">{value.description}</CardDescription>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  </div>
</section>

        {/* Enhanced Team Section */}
 <section className="py-20">
  <div className="container mx-auto px-4">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <h2 className="text-4xl font-bold mb-4">Meet Our Team</h2>
      <p className="text-xl text-muted-foreground">The passionate people behind AgriHub</p>
    </motion.div>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      {team.map((member, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
        >
          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-center h-full">
            <CardHeader>
              <div className={`w-20 h-20 rounded-3xl ${member.gradient} mx-auto mb-4 flex items-center justify-center`}>
                <Users className="h-10 w-10 text-white" />
              </div>
              <CardTitle>{member.name}</CardTitle>
              <CardDescription className="text-primary font-semibold">{member.role}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">{member.description}</p>
              <div className="flex flex-wrap gap-1 justify-center">
                {member.expertise.map((skill, idx) => (
                  <Badge key={idx} variant="secondary" className="text-xs">
                    {skill}
                  </Badge>
                ))}
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
                    Join Our Mission
                  </Badge>
                  
                  <h2 className="text-5xl md:text-6xl font-black mb-8 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Ready to Grow With Us?
                  </h2>
                  
                  <p className="text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
                    Be part of the agricultural revolution. Together, we can build a more sustainable and productive future for farming.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                    <Link to="/careers" className="group">
                      <Button 
                        size="lg" 
                        className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white text-lg px-12 py-7 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 group"
                      >
                        Join Our Team
                        <ArrowRight className="h-5 w-5 ml-3 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                    <Link to="/contact" className="group">
                      <Button 
                        size="lg" 
                        variant="outline"
                        className="text-lg px-12 py-7 rounded-2xl border-2 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 group"
                      >
                        Partner With Us
                        <ChevronRight className="h-5 w-5 ml-3 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default About;