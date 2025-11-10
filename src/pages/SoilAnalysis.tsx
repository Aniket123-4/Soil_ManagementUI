import { Navigation } from '@/components/Navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { 
  TrendingUp,
  Droplets,
  Leaf,
  TestTube,
  Plus,
  Download
} from 'lucide-react';
import { motion } from 'framer-motion';

const SoilAnalysis = () => {
  const { t } = useLanguage();

  const soilTests = [
    { field: 'Field A', date: '2025-01-15', ph: 6.5, status: 'Excellent' },
    { field: 'Field B', date: '2025-01-10', ph: 7.2, status: 'Good' },
    { field: 'Field C', date: '2025-01-05', ph: 5.8, status: 'Needs Improvement' },
  ];

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
              <h1 className="text-4xl font-bold mb-2">{t('nav.soilAnalysis')}</h1>
              <p className="text-muted-foreground">
                Advanced soil testing and health monitoring
              </p>
            </div>
            <Button className="btn-premium">
              <Plus className="h-4 w-4 mr-2" />
              New Analysis
            </Button>
          </div>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Card className="glass-card hover-lift">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">pH Level</CardTitle>
                <TestTube className="h-4 w-4 text-primary" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">6.5</div>
                <p className="text-xs text-muted-foreground">Optimal range</p>
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
                <CardTitle className="text-sm font-medium">Nitrogen</CardTitle>
                <Leaf className="h-4 w-4 text-accent" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">High</div>
                <p className="text-xs text-muted-foreground">280 kg/ha</p>
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
                <CardTitle className="text-sm font-medium">Moisture</CardTitle>
                <Droplets className="h-4 w-4 text-primary" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">45%</div>
                <p className="text-xs text-muted-foreground">Good level</p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Card className="glass-card hover-lift">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Health Score</CardTitle>
                <TrendingUp className="h-4 w-4 text-accent" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-primary">85</div>
                <p className="text-xs text-muted-foreground">Excellent</p>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <Card className="glass-card">
            <CardHeader>
              <CardTitle>Recent Soil Tests</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {soilTests.map((test, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                  >
                    <div>
                      <h3 className="font-semibold">{test.field}</h3>
                      <p className="text-sm text-muted-foreground">{test.date}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">pH: {test.ph}</p>
                      <p className="text-sm text-primary">{test.status}</p>
                    </div>
                    <Button variant="outline" size="sm">
                      <Download className="h-4 w-4 mr-2" />
                      Report
                    </Button>
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

export default SoilAnalysis;
