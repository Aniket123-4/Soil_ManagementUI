import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { Scene3D } from '@/components/3d/Scene3D';
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
  X
} from 'lucide-react';
import heroImage from '@/assets/hero-agriculture.jpg';
import farmerImage from '@/assets/farmer-tech.jpg';
import farmField from '@/assets/farm-field.jpg';
import technology from '@/assets/agriculture-tech.avif';
import harvest from '@/assets/harvest.jpg';
import irrigation from '@/assets/irrigation-system.jpg';
import team from '@/assets/team.jpg';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const Landing = () => {
  const { t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const heroCarouselImages = [
    heroImage,
    farmField,
    technology,
    harvest,
    irrigation
  ];

  const features = [
    {
      icon: Droplets,
      title: t('features.soilAnalysis'),
      description: t('features.soilAnalysisDesc'),
      image: farmField,
      gradient: "from-blue-500/20 to-cyan-500/20"
    },
    {
      icon: Sprout,
      title: t('features.cropSimulation'),
      description: t('features.cropSimulationDesc'),
      image: harvest,
      gradient: "from-green-500/20 to-emerald-500/20"
    },
    {
      icon: Cloud,
      title: t('features.weatherForecast'),
      description: t('features.weatherForecastDesc'),
      image: technology,
      gradient: "from-sky-500/20 to-blue-500/20"
    },
    {
      icon: BarChart3,
      title: t('features.dataAnalytics'),
      description: t('features.dataAnalyticsDesc'),
      image: irrigation,
      gradient: "from-purple-500/20 to-pink-500/20"
    },
    {
      icon: Shield,
      title: 'Crop Protection',
      description: 'Advanced monitoring and protection against pests and diseases',
      image: farmField,
      gradient: "from-red-500/20 to-orange-500/20"
    },
    {
      icon: Zap,
      title: 'Smart Irrigation',
      description: 'Automated water management systems for optimal growth',
      image: irrigation,
      gradient: "from-teal-500/20 to-green-500/20"
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

  // const partners = [
  //   { name: "AgriTech", logo: "AT" },
  //   { name: "FarmFuture", logo: "FF" },
  //   { name: "CropScience", logo: "CS" },
  //   { name: "GreenGrowth", logo: "GG" },
  //   { name: "SoilSense", logo: "SS" },
  // ];

  // Auto-rotate carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroCarouselImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroCarouselImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroCarouselImages.length) % heroCarouselImages.length);
  };

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <Sprout className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold">AgriHub</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <Link to="/" className="text-foreground/80 hover:text-primary transition-colors font-medium">
                Home
              </Link>
              <Link to="/features" className="text-foreground/80 hover:text-primary transition-colors font-medium">
                Features
              </Link>
              <Link to="/pricing" className="text-foreground/80 hover:text-primary transition-colors font-medium">
                Pricing
              </Link>
              <Link to="/about" className="text-foreground/80 hover:text-primary transition-colors font-medium">
                About
              </Link>
              <Link to="/contact" className="text-foreground/80 hover:text-primary transition-colors font-medium">
                Contact
              </Link>
            </div>

            {/* Login Button */}
            <div className="flex items-center gap-4">
              <Link to="/login">
                <Button variant="outline" className="hidden sm:flex">
                  Login
                </Button>
              </Link>
              
              {/* Mobile Menu Button */}
              <button 
                className="md:hidden p-2"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 pb-4 space-y-4"
            >
              <Link to="/" className="block py-2 text-foreground/80 hover:text-primary transition-colors font-medium">
                Home
              </Link>
              <Link to="/features" className="block py-2 text-foreground/80 hover:text-primary transition-colors font-medium">
                Features
              </Link>
              <Link to="/pricing" className="block py-2 text-foreground/80 hover:text-primary transition-colors font-medium">
                Pricing
              </Link>
              <Link to="/about" className="block py-2 text-foreground/80 hover:text-primary transition-colors font-medium">
                About
              </Link>
              <Link to="/contact" className="block py-2 text-foreground/80 hover:text-primary transition-colors font-medium">
                Contact
              </Link>
              <Link to="/login" className="block py-2">
                <Button variant="outline" className="w-full">
                  Login
                </Button>
              </Link>
            </motion.div>
          )}
        </nav>
      </header>

      {/* Hero Section with Carousel - CENTERED TEXT */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-16">
        {/* Background Carousel */}
        <div className="absolute inset-0 z-0">
          {heroCarouselImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
              style={{
                backgroundImage: `url(${image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }}
            >
              <div className="absolute inset-0 bg-black/30" />
            </div>
          ))}
        </div>

        {/* Carousel Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-4 z-20 p-3 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm transition-all"
        >
          <ChevronLeft className="h-6 w-6 text-white" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 z-20 p-3 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm transition-all"
        >
          <ChevronRight className="h-6 w-6 text-white" />
        </button>

        {/* Carousel Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
          {heroCarouselImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? 'bg-white scale-125' : 'bg-white/50'
              }`}
            />
          ))}
        </div>

        {/* Centered Content */}
        <div className="container mx-auto px-4 z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white max-w-4xl mx-auto"
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {t('hero.title')}
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              {t('hero.subtitle')}
            </motion.p>
            <motion.div 
              className="flex flex-wrap gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              {/* <Link to="/dashboard">
                <Button size="lg" className="bg-white text-black hover:bg-white/90 text-lg px-8 py-6 rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105">
                  {t('hero.cta')}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link> */}
              <Link to="/login">
                <Button size="lg" className="bg-white text-black hover:bg-white/90 text-lg px-8 py-6 rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105">
                  {t('hero.cta')}
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Floating Animation */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce z-20">
          <div className="w-6 h-10 rounded-full border-2 border-white/50 flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-white rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* Stats Section with Enhanced Cards */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-6 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="group relative overflow-hidden bg-gradient-to-br from-background to-muted/50 border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <CardContent className="pt-6 relative z-10">
                    <div className="flex flex-col items-center">
                      <div className="p-3 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 group-hover:from-primary/20 group-hover:to-accent/20 transition-all duration-500 mb-4">
                        <stat.icon className="h-8 w-8 text-primary group-hover:scale-110 transition-transform duration-500" />
                      </div>
                      <div className="text-3xl font-bold mb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                        {stat.value}
                      </div>
                      <div className="text-muted-foreground text-sm font-medium">{stat.label}</div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section with Enhanced Cards */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {t('features.title')}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive tools for modern agriculture
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="relative overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 h-full bg-gradient-to-br from-background to-muted/50">
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  {/* Image */}
                  <div 
                    className="h-48 bg-cover bg-center transition-all duration-500 group-hover:scale-110 relative overflow-hidden"
                    style={{ 
                      backgroundImage: `url(${feature.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat'
                    }}
                  >
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-500" />
                  </div>
                  
                  <CardContent className="pt-6 relative z-10">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 group-hover:from-primary/20 group-hover:to-accent/20 transition-all duration-500">
                        <feature.icon className="h-8 w-8 text-primary group-hover:scale-110 transition-transform duration-500" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                          {feature.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {feature.description}
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

      {/* How It Works Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              How It Works
            </h2>
            <p className="text-xl text-muted-foreground">Simple steps to transform your farming</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { step: "01", title: "Setup Your Farm", description: "Add your farm details and crop information", icon: Sprout },
              { step: "02", title: "Connect Sensors", description: "Install and connect IoT sensors for real-time monitoring", icon: Zap },
              { step: "03", title: "Get Insights", description: "Receive AI-powered recommendations and analytics", icon: BarChart3 }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="relative">
                  <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-primary to-accent text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                    <item.icon className="h-10 w-10" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-sm font-bold">
                    {item.step}
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section with Enhanced Cards */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              What Farmers Say
            </h2>
            <p className="text-xl text-muted-foreground">Join thousands of satisfied farmers worldwide</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="glass-card hover-lift h-full border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105">
                  <CardContent className="pt-6">
                    <div className="flex items-center mb-6">
                      <div 
                        className="w-16 h-16 rounded-2xl bg-cover bg-center mr-4 shadow-lg group-hover:scale-110 transition-transform duration-500"
                        style={{ 
                          backgroundImage: `url(${testimonial.image})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center'
                        }}
                      />
                      <div>
                        <h4 className="font-bold text-lg group-hover:text-primary transition-colors duration-300">
                          {testimonial.name}
                        </h4>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`h-5 w-5 ${
                            i < testimonial.rating 
                              ? 'text-yellow-400 fill-current group-hover:scale-110 transition-transform duration-300' 
                              : 'text-gray-300'
                          }`} 
                        />
                      ))}
                    </div>
                    <p className="text-muted-foreground italic text-lg leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                      "{testimonial.content}"
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      {/* <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-2xl font-bold text-muted-foreground">Trusted by Industry Leaders</h3>
          </motion.div>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-2xl font-bold text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
              >
                {partner.logo}
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section - CLEAR BACKGROUND IMAGE */}
      <section className="py-20 relative overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${farmerImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        />
        <div className="absolute inset-0 bg-black/30" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-card max-w-4xl mx-auto text-center p-12 bg-white/10 backdrop-blur-sm border-0 shadow-2xl"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Ready to Transform Your Farming?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Join thousands of farmers using data-driven insights
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/login">
                <Button size="lg" className="bg-white text-black hover:bg-white/90 text-lg px-12 py-6 rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/contact">
 <Button size="lg" className="bg-white text-black hover:bg-white/90 text-lg px-12 py-6 rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105">
                  Contact Sales
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Get In Touch
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
              </p>
              
              <div className="space-y-6">
                {[
                  { icon: Phone, text: '+1 (555) 123-4567' },
                  { icon: Mail, text: 'hello@agrihub.com' },
                  { icon: MapPin, text: '123 Farm Street, Agriculture City, AC 12345' },
                  { icon: Clock, text: 'Mon - Fri: 9:00 AM - 6:00 PM' },
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center group"
                  >
                    <div className="p-3 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 group-hover:from-primary/20 group-hover:to-accent/20 transition-all duration-300 mr-4">
                      <item.icon className="h-6 w-6 text-primary group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <span className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                      {item.text}
                    </span>
                  </motion.div>
                ))}
              </div>

              <div className="flex space-x-4 mt-8">
                {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Button variant="outline" size="icon" className="rounded-2xl hover:scale-110 transition-all duration-300 hover:bg-primary hover:text-primary-foreground">
                      <Icon className="h-5 w-5" />
                    </Button>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="glass-card border-0 shadow-2xl hover:shadow-3xl transition-all duration-500">
                <CardContent className="pt-8">
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium mb-2 block">First Name</label>
                        <input 
                          type="text" 
                          className="w-full p-4 rounded-xl border-2 bg-background/50 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300" 
                          placeholder="John"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium mb-2 block">Last Name</label>
                        <input 
                          type="text" 
                          className="w-full p-4 rounded-xl border-2 bg-background/50 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300" 
                          placeholder="Doe"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium mb-2 block">Email</label>
                      <input 
                        type="email" 
                        className="w-full p-4 rounded-xl border-2 bg-background/50 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300" 
                        placeholder="john@example.com"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium mb-2 block">Message</label>
                      <textarea 
                        rows={4} 
                        className="w-full p-4 rounded-xl border-2 bg-background/50 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300" 
                        placeholder="Tell us about your farming needs..."
                      />
                    </div>
                    <Button 
                      type="submit" 
                      className="w-full btn-premium py-6 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                    >
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 border-t bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Sprout className="h-8 w-8 text-primary" />
                <span className="font-bold text-2xl">AgriHub</span>
              </div>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Transforming agriculture through technology and data-driven insights for sustainable farming.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4 text-lg">Quick Links</h4>
              <ul className="space-y-3">
                {['Home', 'Features', 'Pricing', 'About', 'Contact'].map((item) => (
                  <li key={item}>
                    <Link to="#" className="text-muted-foreground hover:text-primary transition-colors duration-300 font-medium">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4 text-lg">Resources</h4>
              <ul className="space-y-3">
                {['Blog', 'Documentation', 'Support', 'API', 'Community'].map((item) => (
                  <li key={item}>
                    <Link to="#" className="text-muted-foreground hover:text-primary transition-colors duration-300 font-medium">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4 text-lg">Legal</h4>
              <ul className="space-y-3">
                {['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Disclaimer'].map((item) => (
                  <li key={item}>
                    <Link to="#" className="text-muted-foreground hover:text-primary transition-colors duration-300 font-medium">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2025 AgriHub. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link to="#" className="text-sm hover:text-primary transition-colors duration-300 font-medium">
                Privacy
              </Link>
              <Link to="#" className="text-sm hover:text-primary transition-colors duration-300 font-medium">
                Terms
              </Link>
              <Link to="#" className="text-sm hover:text-primary transition-colors duration-300 font-medium">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;