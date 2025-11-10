import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Sprout, Check, Star, Zap, Crown } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';

const Pricing = () => {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('monthly');

  const plans = [
    {
      name: "Starter",
      description: "Perfect for small farms and beginners",
      price: {
        monthly: "$29",
        yearly: "$290"
      },
      savings: "Save 17%",
      popular: false,
      features: [
        "Up to 10 acres",
        "Basic Analytics",
        "Weather Forecast",
        "Mobile App Access",
        "Email Support",
        "Community Forum"
      ],
      cta: "Get Started",
      icon: Sprout,
      gradient: "from-green-500 to-emerald-500"
    },
    {
      name: "Professional",
      description: "Best for growing commercial farms",
      price: {
        monthly: "$79",
        yearly: "$790"
      },
      savings: "Save 17%",
      popular: true,
      features: [
        "Up to 100 acres",
        "Advanced Analytics",
        "Smart Irrigation",
        "Crop Protection",
        "Priority Support",
        "API Access",
        "Custom Reports",
        "Team Collaboration"
      ],
      cta: "Start Free Trial",
      icon: Zap,
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      name: "Enterprise",
      description: "For large-scale farming operations",
      price: {
        monthly: "$199",
        yearly: "$1990"
      },
      savings: "Save 17%",
      popular: false,
      features: [
        "Unlimited Acres",
        "All Professional Features",
        "Dedicated Account Manager",
        "Custom Integrations",
        "On-site Training",
        "24/7 Phone Support",
        "Advanced Security",
        "White-label Options"
      ],
      cta: "Contact Sales",
      icon: Crown,
      gradient: "from-purple-500 to-pink-500"
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
              <Link to="/pricing" className="text-primary font-semibold">Pricing</Link>
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
            className="max-w-3xl mx-auto"
          >
            <Badge className="mb-4 px-4 py-1 text-sm bg-primary/10 text-primary border-primary/20">
              Transparent Pricing
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Simple, Honest Pricing
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Choose the perfect plan for your farming needs. No hidden fees, no surprises.
            </p>

            {/* Billing Toggle */}
            <div className="flex items-center justify-center gap-4 mb-12">
              <span className={`text-lg ${billingPeriod === 'monthly' ? 'text-foreground' : 'text-muted-foreground'}`}>
                Monthly
              </span>
              <button
                onClick={() => setBillingPeriod(billingPeriod === 'monthly' ? 'yearly' : 'monthly')}
                className="relative w-14 h-7 bg-primary rounded-full transition-colors"
              >
                <div
                  className={`absolute top-1 w-5 h-5 bg-white rounded-full transition-transform ${
                    billingPeriod === 'monthly' ? 'left-1' : 'left-8'
                  }`}
                />
              </button>
              <div className="flex items-center gap-2">
                <span className={`text-lg ${billingPeriod === 'yearly' ? 'text-foreground' : 'text-muted-foreground'}`}>
                  Yearly
                </span>
                <Badge variant="secondary" className="bg-green-500/10 text-green-600">
                  Save 17%
                </Badge>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <Badge className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-2">
                      <Star className="h-3 w-3 mr-1 fill-current" />
                      Most Popular
                    </Badge>
                  </div>
                )}
                <Card className={`border-0 shadow-2xl hover:shadow-3xl transition-all duration-300 h-full ${
                  plan.popular ? 'ring-2 ring-primary scale-105' : 'hover:scale-105'
                }`}>
                  <CardHeader className="text-center pb-6">
                    <div className={`p-3 rounded-2xl bg-gradient-to-r ${plan.gradient} w-fit mx-auto mb-4`}>
                      <plan.icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl">{plan.name}</CardTitle>
                    <CardDescription className="text-lg">{plan.description}</CardDescription>
                    
                    <div className="mt-6">
                      <div className="flex items-baseline justify-center gap-2">
                        <span className="text-4xl font-bold">
                          {billingPeriod === 'monthly' ? plan.price.monthly : plan.price.yearly}
                        </span>
                        <span className="text-muted-foreground">/{billingPeriod === 'monthly' ? 'month' : 'year'}</span>
                      </div>
                      {billingPeriod === 'yearly' && (
                        <p className="text-sm text-green-600 font-medium mt-2">{plan.savings}</p>
                      )}
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <Check className="h-5 w-5 text-green-500" />
                        <span className="text-foreground">{feature}</span>
                      </div>
                    ))}
                  </CardContent>

                  <CardFooter>
                    <Button 
                      className={`w-full text-lg py-6 ${
                        plan.popular 
                          ? 'bg-gradient-to-r from-primary to-accent text-white' 
                          : 'bg-muted hover:bg-muted/80 text-foreground'
                      }`}
                      size="lg"
                    >
                      {plan.cta}
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-muted-foreground">Everything you need to know about our pricing</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                question: "Can I change plans later?",
                answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately."
              },
              {
                question: "Is there a free trial?",
                answer: "Yes, we offer a 14-day free trial on our Professional plan with full feature access."
              },
              {
                question: "What payment methods do you accept?",
                answer: "We accept all major credit cards, PayPal, and bank transfers for annual plans."
              },
              {
                question: "Do you offer discounts for large teams?",
                answer: "Yes, we offer custom enterprise pricing for large farming operations and cooperatives."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg"
              >
                <h3 className="text-lg font-semibold mb-3">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;