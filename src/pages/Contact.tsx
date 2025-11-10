// import { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Textarea } from '@/components/ui/textarea';
// import { Label } from '@/components/ui/label';
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
// import { Sprout, Mail, Phone, MapPin, Clock, Send, MessageCircle } from 'lucide-react';
// import { motion } from 'framer-motion';
// import { toast } from 'sonner';
// import Layout from '../components/Layout/Layout'

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     subject: '',
//     message: ''
//   });
//   const [isLoading, setIsLoading] = useState(false);

//   const contactMethods = [
//     {
//       icon: Mail,
//       title: "Email Us",
//       description: "We'll respond within 24 hours",
//       value: "hello@agrihub.com",
//       action: "mailto:hello@agrihub.com"
//     },
//     {
//       icon: Phone,
//       title: "Call Us",
//       description: "Mon-Fri from 9am to 6pm",
//       value: "+1 (555) 123-4567",
//       action: "tel:+15551234567"
//     },
//     {
//       icon: MapPin,
//       title: "Visit Us",
//       description: "Come say hello at our office",
//       value: "123 Farm Street, Agriculture City",
//       action: "#"
//     },
//     {
//       icon: Clock,
//       title: "Office Hours",
//       description: "We're here to help",
//       value: "Mon - Fri: 9:00 AM - 6:00 PM",
//       action: "#"
//     }
//   ];

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsLoading(true);

//     // Simulate API call
//     await new Promise(resolve => setTimeout(resolve, 1500));
    
//     toast.success("Message sent successfully! We'll get back to you soon.");
//     setFormData({ name: '', email: '', subject: '', message: '' });
//     setIsLoading(false);
//   };

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setFormData(prev => ({
//       ...prev,
//       [e.target.name]: e.target.value
//     }));
//   };

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
//             <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
//               Get In Touch
//             </h1>
//             <p className="text-xl text-muted-foreground mb-8">
//               Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
//             </p>
//           </motion.div>
//         </div>
//       </section>

//       {/* Contact Section */}
//       <section className="py-20">
//         <div className="container mx-auto px-4">
//           <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
//             {/* Contact Information */}
//             <motion.div
//               initial={{ opacity: 0, x: -50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               className="space-y-8"
//             >
//               <div>
//                 <h2 className="text-3xl font-bold mb-4">Let's Start a Conversation</h2>
//                 <p className="text-lg text-muted-foreground">
//                   Whether you're a farmer looking to get started, a partner interested in collaboration, 
//                   or just want to learn more about what we do - we're here to help.
//                 </p>
//               </div>

//               <div className="grid sm:grid-cols-2 gap-6">
//                 {contactMethods.map((method, index) => (
//                   <motion.div
//                     key={index}
//                     initial={{ opacity: 0, y: 30 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     viewport={{ once: true }}
//                     transition={{ delay: index * 0.1 }}
//                   >
//                     <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 h-full">
//                       <CardHeader className="pb-3">
//                         <div className="p-2 rounded-xl bg-primary/10 w-fit mb-3">
//                           <method.icon className="h-6 w-6 text-primary" />
//                         </div>
//                         <CardTitle className="text-lg">{method.title}</CardTitle>
//                         <CardDescription>{method.description}</CardDescription>
//                       </CardHeader>
//                       <CardContent>
//                         <a 
//                           href={method.action}
//                           className="text-foreground hover:text-primary transition-colors font-medium"
//                         >
//                           {method.value}
//                         </a>
//                       </CardContent>
//                     </Card>
//                   </motion.div>
//                 ))}
//               </div>

//               {/* Additional Info */}
//               <Card className="border-0 shadow-lg bg-gradient-to-br from-primary/5 to-accent/5">
//                 <CardHeader>
//                   <CardTitle className="flex items-center gap-2">
//                     <MessageCircle className="h-5 w-5 text-primary" />
//                     Quick Response Guarantee
//                   </CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <p className="text-muted-foreground">
//                     We pride ourselves on quick response times. Most inquiries are answered within 
//                     2 hours during business hours, and always within 24 hours.
//                   </p>
//                 </CardContent>
//               </Card>
//             </motion.div>

//             {/* Contact Form */}
//             <motion.div
//               initial={{ opacity: 0, x: 50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//             >
//               <Card className="border-0 shadow-2xl">
//                 <CardHeader>
//                   <CardTitle className="text-2xl">Send us a Message</CardTitle>
//                   <CardDescription>
//                     Fill out the form below and we'll get back to you soon.
//                   </CardDescription>
//                 </CardHeader>
//                 <CardContent>
//                   <form onSubmit={handleSubmit} className="space-y-6">
//                     <div className="grid sm:grid-cols-2 gap-4">
//                       <div className="space-y-2">
//                         <Label htmlFor="name">Full Name</Label>
//                         <Input
//                           id="name"
//                           name="name"
//                           type="text"
//                           placeholder="John Farmer"
//                           value={formData.name}
//                           onChange={handleChange}
//                           required
//                           className="rounded-lg"
//                         />
//                       </div>
//                       <div className="space-y-2">
//                         <Label htmlFor="email">Email Address</Label>
//                         <Input
//                           id="email"
//                           name="email"
//                           type="email"
//                           placeholder="farmer@example.com"
//                           value={formData.email}
//                           onChange={handleChange}
//                           required
//                           className="rounded-lg"
//                         />
//                       </div>
//                     </div>

//                     <div className="space-y-2">
//                       <Label htmlFor="subject">Subject</Label>
//                       <Input
//                         id="subject"
//                         name="subject"
//                         type="text"
//                         placeholder="How can we help you?"
//                         value={formData.subject}
//                         onChange={handleChange}
//                         required
//                         className="rounded-lg"
//                       />
//                     </div>

//                     <div className="space-y-2">
//                       <Label htmlFor="message">Message</Label>
//                       <Textarea
//                         id="message"
//                         name="message"
//                         placeholder="Tell us about your farming needs or questions..."
//                         rows={6}
//                         value={formData.message}
//                         onChange={handleChange}
//                         required
//                         className="rounded-lg resize-none"
//                       />
//                     </div>

//                     <Button 
//                       type="submit" 
//                       className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90"
//                       disabled={isLoading}
//                       size="lg"
//                     >
//                       {isLoading ? (
//                         <div className="flex items-center gap-2">
//                           <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
//                           Sending Message...
//                         </div>
//                       ) : (
//                         <div className="flex items-center gap-2">
//                           <Send className="h-4 w-4" />
//                           Send Message
//                         </div>
//                       )}
//                     </Button>
//                   </form>
//                 </CardContent>
//               </Card>
//             </motion.div>
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
//             <h2 className="text-4xl font-bold mb-4">Common Questions</h2>
//             <p className="text-xl text-muted-foreground">Quick answers to frequently asked questions</p>
//           </motion.div>

//           <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
//             {[
//               {
//                 question: "How quickly do you respond to inquiries?",
//                 answer: "We typically respond within 2 hours during business hours and always within 24 hours."
//               },
//               {
//                 question: "Do you offer custom solutions for large farms?",
//                 answer: "Yes, we provide custom enterprise solutions tailored to large-scale farming operations."
//               },
//               {
//                 question: "Can I schedule a demo?",
//                 answer: "Absolutely! Contact us to schedule a personalized demo of our platform."
//               },
//               {
//                 question: "What kind of support do you offer?",
//                 answer: "We offer email, phone, and chat support depending on your plan, plus comprehensive documentation."
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

// export default Contact;



import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Sprout, Mail, Phone, MapPin, Clock, Send, MessageCircle, Star, Zap, Users, Globe, ArrowRight, Sparkles, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from 'sonner';
import Layout from '../components/Layout/Layout';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [activeContact, setActiveContact] = useState<number | null>(null);

  const contactMethods = [
    {
      icon: Mail,
      title: "Email Us",
      description: "We'll respond within 24 hours",
      value: "hello@agrihub.com",
      action: "mailto:hello@agrihub.com",
      gradient: "from-blue-500 to-cyan-500",
      stat: "24h Response"
    },
    {
      icon: Phone,
      title: "Call Us",
      description: "Mon-Fri from 9am to 6pm",
      value: "+1 (555) 123-4567",
      action: "tel:+15551234567",
      gradient: "from-green-500 to-emerald-500",
      stat: "Instant Connect"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      description: "Come say hello at our office",
      value: "123 Farm Street, Agriculture City",
      action: "#",
      gradient: "from-purple-500 to-pink-500",
      stat: "HQ Location"
    },
    {
      icon: Clock,
      title: "Office Hours",
      description: "We're here to help",
      value: "Mon - Fri: 9:00 AM - 6:00 PM",
      action: "#",
      gradient: "from-orange-500 to-red-500",
      stat: "Quick Support"
    }
  ];

  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Average response time: 2 hours"
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Agricultural specialists ready to help"
    },
    {
      icon: Globe,
      title: "Global Support",
      description: "Available in 50+ countries"
    },
    {
      icon: Star,
      title: "Premium Service",
      description: "98% customer satisfaction rate"
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast.success("🎉 Message sent successfully! We'll get back to you soon.");
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsLoading(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

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
                  Get In Touch
                </Badge>
              </motion.div>
              
              <motion.h1 
                className="text-6xl md:text-7xl font-black mb-8 leading-tight"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent bg-size-200 animate-gradient">
                  Let's Connect
                </span>
                <br />
                <span className="bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
                  & Grow Together
                </span>
              </motion.h1>
              
              <motion.p 
                className="text-2xl md:text-3xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                Have questions about transforming your farm? We'd love to hear from you. 
                Send us a message and we'll respond as soon as possible.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-gradient-to-r from-primary/5 to-accent/5">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center group"
                >
                  <div className="p-4 rounded-3xl bg-background/50 backdrop-blur-sm border border-border/50 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 mb-4">
                    <feature.icon className="h-8 w-8 text-primary mx-auto group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="text-lg font-bold text-foreground mb-2">{feature.title}</div>
                  <div className="text-sm text-muted-foreground">{feature.description}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Contact Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="space-y-8"
              >
                <div>
                  <Badge className="mb-4 px-4 py-1 text-sm bg-primary/10 text-primary border-primary/20">
                    Multiple Ways
                  </Badge>
                  <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Let's Start a Conversation
                  </h2>
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    Whether you're a farmer looking to get started, a partner interested in collaboration, 
                    or just want to learn more about what we do - we're here to help transform your agricultural journey.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  {contactMethods.map((method, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="group"
                      onMouseEnter={() => setActiveContact(index)}
                      onMouseLeave={() => setActiveContact(null)}
                    >
                      <Card className="border-0 shadow-2xl hover:shadow-4xl transition-all duration-500 hover:scale-105 h-full bg-gradient-to-br from-background to-muted/50 relative overflow-hidden">
                        {/* Gradient Border */}
                        <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <div className="absolute inset-[2px] bg-background rounded-3xl" />
                        
                        <CardHeader className="pb-4 relative z-10">
                          <div className={`p-3 rounded-3xl bg-gradient-to-r ${method.gradient} w-fit mb-4 shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                            <method.icon className="h-7 w-7 text-white" />
                          </div>
                          <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors duration-500">
                            {method.title}
                          </CardTitle>
                          <CardDescription className="text-base">{method.description}</CardDescription>
                          <Badge variant="secondary" className="w-fit mt-2">
                            {method.stat}
                          </Badge>
                        </CardHeader>
                        <CardContent className="relative z-10">
                          <a 
                            href={method.action}
                            className="text-foreground hover:text-primary transition-colors font-medium text-lg group-hover:underline"
                          >
                            {method.value}
                          </a>
                        </CardContent>

                        {/* Hover Effect */}
                        {activeContact === index && (
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className={`absolute inset-0 bg-gradient-to-r ${method.gradient} rounded-3xl blur-xl opacity-20 -z-10`}
                          />
                        )}
                      </Card>
                    </motion.div>
                  ))}
                </div>

                {/* Additional Info */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                >
                  <Card className="border-0 shadow-2xl bg-gradient-to-br from-primary/10 to-accent/10 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3 text-2xl">
                        <MessageCircle className="h-6 w-6 text-primary" />
                        Premium Support Guarantee
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-green-500" />
                          <span className="text-foreground">2-hour average response time</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-green-500" />
                          <span className="text-foreground">24/7 emergency support for enterprise clients</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-green-500" />
                          <span className="text-foreground">Dedicated account managers for premium plans</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>

              {/* Enhanced Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="relative"
              >
                <Card className="border-0 shadow-3xl hover:shadow-4xl transition-all duration-500 rounded-3xl overflow-hidden bg-gradient-to-br from-background to-muted/50">
                  {/* Gradient Border */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-3xl opacity-0 hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute inset-[2px] bg-background rounded-3xl" />
                  
                  <CardHeader className="text-center pb-6 pt-8 relative z-10">
                    <div className="p-4 rounded-3xl bg-gradient-to-r from-primary to-accent w-fit mx-auto mb-6 shadow-2xl">
                      <Send className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-3xl font-bold mb-3">Send us a Message</CardTitle>
                    <CardDescription className="text-lg">
                      Fill out the form below and we'll get back to you within hours
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="relative z-10">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid sm:grid-cols-2 gap-6">
                        <div className="space-y-3">
                          <Label htmlFor="name" className="text-base font-semibold">
                            Full Name *
                          </Label>
                          <Input
                            id="name"
                            name="name"
                            type="text"
                            placeholder="John Farmer"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="rounded-2xl border-2 bg-background/50 focus:border-primary focus:ring-4 focus:ring-primary/20 transition-all duration-300 text-lg p-6 shadow-lg"
                          />
                        </div>
                        <div className="space-y-3">
                          <Label htmlFor="email" className="text-base font-semibold">
                            Email Address *
                          </Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="farmer@example.com"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="rounded-2xl border-2 bg-background/50 focus:border-primary focus:ring-4 focus:ring-primary/20 transition-all duration-300 text-lg p-6 shadow-lg"
                          />
                        </div>
                      </div>

                      <div className="space-y-3">
                        <Label htmlFor="subject" className="text-base font-semibold">
                          Subject *
                        </Label>
                        <Input
                          id="subject"
                          name="subject"
                          type="text"
                          placeholder="How can we help transform your farm?"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="rounded-2xl border-2 bg-background/50 focus:border-primary focus:ring-4 focus:ring-primary/20 transition-all duration-300 text-lg p-6 shadow-lg"
                        />
                      </div>

                      <div className="space-y-3">
                        <Label htmlFor="message" className="text-base font-semibold">
                          Your Message *
                        </Label>
                        <Textarea
                          id="message"
                          name="message"
                          placeholder="Tell us about your farming needs, challenges, or how we can help you achieve better yields..."
                          rows={6}
                          value={formData.message}
                          onChange={handleChange}
                          required
                          className="rounded-2xl border-2 bg-background/50 focus:border-primary focus:ring-4 focus:ring-primary/20 transition-all duration-300 text-lg p-6 shadow-lg resize-none"
                        />
                      </div>

                      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                        <Button 
                          type="submit" 
                          className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white py-7 rounded-2xl text-xl font-bold shadow-2xl hover:shadow-3xl transition-all duration-500 group"
                          disabled={isLoading}
                          size="lg"
                        >
                          {isLoading ? (
                            <div className="flex items-center gap-3">
                              <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                              Sending Your Message...
                            </div>
                          ) : (
                            <div className="flex items-center gap-3">
                              <Send className="h-5 w-5 group-hover:scale-110 transition-transform" />
                              Send Message
                              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                            </div>
                          )}
                        </Button>
                      </motion.div>

                      <p className="text-center text-muted-foreground text-sm">
                        By submitting this form, you agree to our privacy policy and terms of service.
                      </p>
                    </form>
                  </CardContent>
                </Card>

                {/* Background Decoration */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-primary to-accent rounded-3xl blur-xl opacity-20 -z-10" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-r from-primary to-accent rounded-3xl blur-xl opacity-20 -z-10" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Enhanced FAQ Section */}
        <section className="py-20 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:bg-grid-slate-800" />
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <Badge className="mb-4 px-4 py-1 text-sm bg-primary/10 text-primary border-primary/20">
                <MessageCircle className="h-4 w-4 mr-2" />
                Quick Answers
              </Badge>
              <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Common Questions
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Quick answers to frequently asked questions about our platform and support
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {[
                {
                  question: "How quickly do you respond to inquiries?",
                  answer: "We typically respond within 2 hours during business hours (9AM-6PM EST) and always within 24 hours. Enterprise clients receive 24/7 priority support.",
                  icon: <Zap className="h-5 w-5" />
                },
                {
                  question: "Do you offer custom solutions for large farms?",
                  answer: "Absolutely! We provide custom enterprise solutions tailored to large-scale farming operations, including dedicated account managers and custom integrations.",
                  icon: <Sprout className="h-5 w-5" />
                },
                {
                  question: "Can I schedule a personalized demo?",
                  answer: "Yes! We offer personalized demos tailored to your specific farming needs. Contact us to schedule a session with our agricultural experts.",
                  icon: <Users className="h-5 w-5" />
                },
                {
                  question: "What kind of ongoing support do you offer?",
                  answer: "We offer comprehensive support including email, phone, chat, and dedicated account management. Plus extensive documentation and training resources.",
                  icon: <Star className="h-5 w-5" />
                },
                {
                  question: "Do you offer training for my team?",
                  answer: "Yes, we provide comprehensive training sessions for your team, both online and on-site for enterprise clients.",
                  icon: <Globe className="h-5 w-5" />
                },
                {
                  question: "What's your implementation process?",
                  answer: "We follow a structured 4-phase process: Discovery, Setup, Training, and Ongoing Support to ensure smooth adoption.",
                  icon: <CheckCircle className="h-5 w-5" />
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
                        <div className="p-3 rounded-2xl bg-primary/10 text-primary group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
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
                    Ready to Transform Your Farm?
                  </Badge>
                  
                  <h2 className="text-5xl md:text-6xl font-black mb-8 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Let's Start Your Journey
                  </h2>
                  
                  <p className="text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
                    Join thousands of successful farmers who have already transformed their operations with AgriHub's cutting-edge technology.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                    <Link to="/demo" className="group">
                      <Button 
                        size="lg" 
                        className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white text-lg px-12 py-7 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105 group"
                      >
                        Schedule a Demo
                        <ArrowRight className="h-5 w-5 ml-3 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                    <Link to="/pricing" className="group">
                      <Button 
                        size="lg" 
                        variant="outline"
                        className="text-lg px-12 py-7 rounded-2xl border-2 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 group"
                      >
                        View Pricing
                        <ArrowRight className="h-5 w-5 ml-3 group-hover:translate-x-1 transition-transform" />
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

export default Contact;