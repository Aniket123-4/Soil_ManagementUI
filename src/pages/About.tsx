import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Sprout, Users, Target, Globe, Award, Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import teamImage from '@/assets/team.jpg';
import missionImage from '@/assets/mission.jpg';

const About = () => {
  const stats = [
    { number: "10,000+", label: "Active Farmers" },
    { number: "50+", label: "Countries" },
    { number: "45%", label: "Average Yield Increase" },
    { number: "99.9%", label: "Uptime" }
  ];

  const values = [
    {
      icon: Target,
      title: "Innovation",
      description: "Constantly pushing the boundaries of agricultural technology"
    },
    {
      icon: Users,
      title: "Community",
      description: "Building a global network of farmers sharing knowledge"
    },
    {
      icon: Globe,
      title: "Sustainability",
      description: "Promoting environmentally responsible farming practices"
    },
    {
      icon: Heart,
      title: "Impact",
      description: "Making a real difference in farmers' lives worldwide"
    }
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      description: "Former agricultural scientist with 15+ years in farming technology"
    },
    {
      name: "Mike Chen",
      role: "CTO",
      description: "Expert in AI and IoT with a passion for sustainable agriculture"
    },
    {
      name: "Emma Rodriguez",
      role: "Head of Agriculture",
      description: "Agronomist with expertise in crop science and soil health"
    },
    {
      name: "David Kim",
      role: "Product Lead",
      description: "Product manager focused on user experience and farmer needs"
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
              <Link to="/features" className="text-foreground/80 hover:text-primary transition-colors">Features</Link>
              <Link to="/pricing" className="text-foreground/80 hover:text-primary transition-colors">Pricing</Link>
              <Link to="/about" className="text-primary font-semibold">About</Link>
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
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <Badge className="mb-4 px-4 py-1 text-sm bg-primary/10 text-primary border-primary/20">
              Our Story
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Revolutionizing Agriculture
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              We're on a mission to empower farmers with cutting-edge technology, 
              making sustainable farming accessible to everyone.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <img 
                src={missionImage} 
                alt="Our Mission"
                className="rounded-3xl shadow-2xl w-full h-80 object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <Badge className="mb-4 px-3 py-1 text-xs bg-primary/10 text-primary">
                Our Mission
              </Badge>
              <h2 className="text-4xl font-bold mb-6">Building the Future of Farming</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Founded in 2020, AgriHub emerged from a simple observation: while technology was 
                transforming every industry, farming was being left behind. We set out to change that.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Today, we're a team of passionate technologists, agronomists, and farmers working 
                together to create solutions that make farming more efficient, sustainable, and profitable.
              </p>
              <Button className="bg-gradient-to-r from-primary to-accent">
                Learn Our Story
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/50">
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

      {/* Team Section */}
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
                    <div className="w-20 h-20 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Users className="h-10 w-10 text-white" />
                    </div>
                    <CardTitle>{member.name}</CardTitle>
                    <CardDescription className="text-primary font-semibold">{member.role}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{member.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;