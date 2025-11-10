import { Navigation } from '@/components/Navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Droplets, Calendar, TrendingDown, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const Irrigation = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-4xl font-bold mb-2">{t('nav.irrigation')}</h1>
              <p className="text-muted-foreground">
                Smart water management for optimal crop growth
              </p>
            </div>
            <Button className="btn-premium">
              <Calendar className="h-4 w-4 mr-2" />
              Schedule Irrigation
            </Button>
          </div>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Card className="glass-card hover-lift">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Water Usage</CardTitle>
                <Droplets className="h-4 w-4 text-primary" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">12,450L</div>
                <p className="text-xs text-muted-foreground">This week</p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="glass-card hover-lift">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Efficiency</CardTitle>
                <TrendingDown className="h-4 w-4 text-accent" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-primary">92%</div>
                <p className="text-xs text-muted-foreground">Above average</p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Card className="glass-card hover-lift">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Next Schedule</CardTitle>
                <Calendar className="h-4 w-4 text-primary" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">2 Days</div>
                <p className="text-xs text-muted-foreground">Field A</p>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-accent" />
                Irrigation Recommendations
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
                  <h3 className="font-semibold mb-2 flex items-center gap-2">
                    <Droplets className="h-4 w-4 text-primary" />
                    Field A - High Priority
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Soil moisture is dropping. Recommend irrigation within 48 hours.
                  </p>
                  <Button size="sm" className="btn-premium">
                    Schedule Now
                  </Button>
                </div>

                <div className="p-4 rounded-lg bg-muted/50">
                  <h3 className="font-semibold mb-2">Field B - Optimal</h3>
                  <p className="text-sm text-muted-foreground">
                    Current moisture levels are good. Next irrigation in 5 days.
                  </p>
                </div>

                <div className="p-4 rounded-lg bg-muted/50">
                  <h3 className="font-semibold mb-2">Field C - Monitor</h3>
                  <p className="text-sm text-muted-foreground">
                    Recent rainfall detected. Monitor for next 3 days.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </main>
    </div>
  );
};

export default Irrigation;
