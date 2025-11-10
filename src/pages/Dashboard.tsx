import { Navigation } from '@/components/Navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { 
  Cloud, 
  Droplets, 
  Thermometer, 
  Wind,
  TrendingUp,
  AlertTriangle,
  Sprout,
  Calendar
} from 'lucide-react';
import { motion } from 'framer-motion';

const Dashboard = () => {
  const { t } = useLanguage();

  const weatherData = {
    temperature: '28°C',
    humidity: '65%',
    rainfall: '12mm',
    wind: '15 km/h',
  };

  const soilHealth = {
    score: 85,
    status: t('dashboard.excellent'),
    ph: 6.5,
    nitrogen: 'High',
    phosphorus: 'Medium',
    potassium: 'High',
  };

  const crops = [
    { name: 'Wheat', status: 'Growing', progress: 65 },
    { name: 'Rice', status: 'Sowing', progress: 20 },
    { name: 'Cotton', status: 'Harvesting', progress: 90 },
  ];

  const alerts = [
    { type: 'warning', message: 'Irrigation recommended in 2 days', time: '2 hours ago' },
    { type: 'info', message: 'New weather forecast available', time: '5 hours ago' },
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
          <h1 className="text-4xl font-bold mb-2">
            {t('dashboard.welcome')}, Farmer! 👋
          </h1>
          <p className="text-muted-foreground">
            Here's your farm overview for today
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
          {/* Weather Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Card className="glass-card hover-lift">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">
                  {t('dashboard.temperature')}
                </CardTitle>
                <Thermometer className="h-4 w-4 text-primary" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">{weatherData.temperature}</div>
                <p className="text-xs text-muted-foreground">Feels like 30°C</p>
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
                <CardTitle className="text-sm font-medium">
                  {t('dashboard.humidity')}
                </CardTitle>
                <Droplets className="h-4 w-4 text-accent" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">{weatherData.humidity}</div>
                <p className="text-xs text-muted-foreground">Optimal range</p>
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
                <CardTitle className="text-sm font-medium">
                  {t('dashboard.rainfall')}
                </CardTitle>
                <Cloud className="h-4 w-4 text-primary" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">{weatherData.rainfall}</div>
                <p className="text-xs text-muted-foreground">Last 24 hours</p>
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
                <CardTitle className="text-sm font-medium">Wind Speed</CardTitle>
                <Wind className="h-4 w-4 text-accent" />
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">{weatherData.wind}</div>
                <p className="text-xs text-muted-foreground">NE direction</p>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <div className="grid gap-6 lg:grid-cols-3 mb-8">
          {/* Soil Health */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Card className="glass-card lg:col-span-1">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-primary" />
                  {t('dashboard.soilHealth')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center mb-4">
                  <div className="text-5xl font-bold text-primary mb-2">
                    {soilHealth.score}
                  </div>
                  <p className="text-sm text-muted-foreground">{soilHealth.status}</p>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>pH Level:</span>
                    <span className="font-semibold">{soilHealth.ph}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Nitrogen:</span>
                    <span className="font-semibold">{soilHealth.nitrogen}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Phosphorus:</span>
                    <span className="font-semibold">{soilHealth.phosphorus}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Potassium:</span>
                    <span className="font-semibold">{soilHealth.potassium}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Active Crops */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Card className="glass-card lg:col-span-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Sprout className="h-5 w-5 text-primary" />
                  {t('dashboard.cropStatus')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {crops.map((crop, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="font-medium">{crop.name}</span>
                        <span className="text-muted-foreground">{crop.status}</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div
                          className="bg-primary h-2 rounded-full transition-all"
                          style={{ width: `${crop.progress}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Alerts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-accent" />
                {t('dashboard.alerts')}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {alerts.map((alert, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                  >
                    {alert.type === 'warning' ? (
                      <AlertTriangle className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                    ) : (
                      <Calendar className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    )}
                    <div className="flex-1">
                      <p className="text-sm font-medium">{alert.message}</p>
                      <p className="text-xs text-muted-foreground">{alert.time}</p>
                    </div>
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

export default Dashboard;
