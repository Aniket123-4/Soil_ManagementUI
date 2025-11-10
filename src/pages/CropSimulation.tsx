import { Navigation } from '@/components/Navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Sprout, PlayCircle, BarChart3, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

const CropSimulation = () => {
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
              <h1 className="text-4xl font-bold mb-2">{t('nav.cropSimulation')}</h1>
              <p className="text-muted-foreground">
                Predict crop performance with AI-powered simulations
              </p>
            </div>
            <Button className="btn-premium">
              <PlayCircle className="h-4 w-4 mr-2" />
              New Simulation
            </Button>
          </div>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Sprout className="h-5 w-5 text-primary" />
                  Crop Growth Prediction
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold mb-2">Wheat - Winter Season</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Expected Yield:</span>
                        <span className="font-semibold text-primary">4.5 tons/ha</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Growth Duration:</span>
                        <span className="font-semibold">120 days</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Water Requirement:</span>
                        <span className="font-semibold">450 mm</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5 text-accent" />
                  Scenario Analysis
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 rounded-lg bg-muted/50">
                    <h4 className="font-semibold mb-2">Best Case Scenario</h4>
                    <p className="text-sm text-muted-foreground">
                      With optimal rainfall and temperature: 5.2 tons/ha
                    </p>
                  </div>
                  <div className="p-4 rounded-lg bg-muted/50">
                    <h4 className="font-semibold mb-2">Worst Case Scenario</h4>
                    <p className="text-sm text-muted-foreground">
                      With drought conditions: 3.8 tons/ha
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-6"
        >
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-primary" />
                Simulation History
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                  >
                    <div>
                      <p className="font-medium">Simulation #{i}</p>
                      <p className="text-sm text-muted-foreground">
                        Run on {new Date().toLocaleDateString()}
                      </p>
                    </div>
                    <Button variant="outline" size="sm">View Results</Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </main>
    </div>
  );
};

export default CropSimulation;
