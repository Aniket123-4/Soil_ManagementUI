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
  Play
} from 'lucide-react';
import { motion } from 'framer-motion';
import featureHero from '@/assets/feature-hero.jpg';
import analyticsDemo from '@/assets/analytics-demo.jpg';

const Features = () => {
  const mainFeatures = [
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Real-time data analysis and predictive insights for your farm",
      features: ["Yield Prediction", "Soil Health Monitoring", "Growth Tracking"],
      image: analyticsDemo,
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Droplets,
      title: "Smart Irrigation",
      description: "Automated water management based on soil moisture and weather",
      features: ["Soil Sensors", "Weather Integration", "Water Optimization"],
      image: featureHero,
      gradient: "from-green-500 to-emerald-500"
    },
    {
      icon: Cloud,
      title: "Weather Intelligence",
      description: "Accurate forecasts and climate adaptation recommendations",
      features: ["7-Day Forecast", "Frost Alerts", "Rain Prediction"],
      image: analyticsDemo,
      gradient: "from-sky-500 to-blue-500"
    },
    {
      icon: Shield,
      title: "Crop Protection",
      description: "Early detection and prevention of pests and diseases",
      features: ["Disease Detection", "Pest Alerts", "Treatment Plans"],
      image: featureHero,
      gradient: "from-orange-500 to-red-500"
    }
  ];

  const additionalFeatures = [
    {
      icon: Users,
      title: "Community Platform",
      description: "Connect with other farmers and share best practices"
    },
    {
      icon: Smartphone,
      title: "Mobile App",
      description: "Manage your farm on the go with our mobile application"
    },
    {
      icon: Zap,
      title: "Automation",
      description: "Automate routine tasks and focus on what matters"
    },
    {
      icon: Sprout,
      title: "Crop Library",
      description: "Comprehensive database of crops and best practices"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2">
              <Sprout className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold">AgriHub</span>
            </Link>
            <div className="flex items-center gap-6">
              <Link to="/features" className="text-primary font-semibold">Features</Link>
              <Link to="/pricing" className="text-foreground/80 hover:text-primary transition-colors">Pricing</Link>
              <Link to="/about" className="text-foreground/80 hover:text-primary transition-colors">About</Link>
              <Link to="/contact" className="text-foreground/80 hover:text-primary transition-colors">Contact</Link>
              <Link to="/login">
                <Button>Get Started</Button>
              </Link>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <Badge className="mb-4 px-4 py-1 text-sm bg-primary/10 text-primary border-primary/20">
              Powerful Features
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Everything You Need for Modern Farming
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Advanced tools and insights to optimize your farm's productivity and sustainability
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {mainFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 mb-20 last:mb-0`}
            >
              <div className="lg:w-1/2">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-3 rounded-2xl bg-gradient-to-r ${feature.gradient}`}>
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold">{feature.title}</h3>
                </div>
                <p className="text-lg text-muted-foreground mb-6">{feature.description}</p>
                <ul className="space-y-3 mb-8">
                  {feature.features.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
                <Button className="bg-gradient-to-r from-primary to-accent">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <div className="lg:w-1/2">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <Button className="w-full bg-white/20 backdrop-blur-sm text-white hover:bg-white/30">
                      <Play className="h-4 w-4 mr-2" />
                      Watch Demo
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Additional Features */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">More Amazing Features</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to succeed in modern agriculture
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 h-full">
                  <CardHeader>
                    <div className="p-3 rounded-2xl bg-primary/10 w-fit mb-4">
                      <feature.icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">{feature.description}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Farm?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of farmers already using AgriHub to optimize their operations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/pricing">
                <Button size="lg" variant="outline" className="text-lg px-8">
                  View Pricing
                </Button>
              </Link>
              <Link to="/login">
                <Button size="lg" className="bg-gradient-to-r from-primary to-accent text-lg px-8">
                  Start Free Trial
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Features;