import { Navigation } from '@/components/Navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';
import {
  MapPin,
  Map,
  Building,
  Home,
  Grid3x3,
  Layers,
  Box,
  Target,
  Mountain,
  Sprout,
  Plus
} from 'lucide-react';
import { motion } from 'framer-motion';

const Masters = () => {
  const { t } = useLanguage();

  const geographicalMasters = [
    { title: t('masters.country'), icon: MapPin, to: '/masters/country', count: 1 },
    { title: t('masters.state'), icon: Map, to: '/masters/state', count: 28 },
    { title: t('masters.district'), icon: Building, to: '/masters/district', count: 765 },
    { title: t('masters.city'), icon: Home, to: '/masters/city', count: 4000 },
    { title: t('masters.zone'), icon: Grid3x3, to: '/masters/zone', count: 150 },
    { title: t('masters.ward'), icon: Layers, to: '/masters/ward', count: 500 },
    { title: t('masters.area'), icon: Box, to: '/masters/area', count: 1200 },
    { title: t('masters.beat'), icon: Target, to: '/masters/beat', count: 3000 },
  ];

  const agriculturalMasters = [
    { title: t('masters.soilType'), icon: Mountain, to: '/masters/soil-type', count: 12 },
    { title: t('masters.cropType'), icon: Sprout, to: '/masters/crop-type', count: 50 },
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
          <h1 className="text-4xl font-bold mb-2">{t('masters.title')}</h1>
          <p className="text-muted-foreground">
            Manage all master data from a centralized location
          </p>
        </motion.div>

        {/* Geographical Masters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <MapPin className="h-6 w-6 text-primary" />
            {t('masters.geographical')}
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {geographicalMasters.map((master, index) => (
              <motion.div
                key={master.to}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.05 }}
              >
                <Link to={master.to}>
                  <Card className="glass-card hover-lift cursor-pointer group">
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                      <CardTitle className="text-lg">{master.title}</CardTitle>
                      <master.icon className="h-8 w-8 text-primary group-hover:scale-110 transition-transform" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold text-primary mb-2">
                        {master.count}
                      </div>
                      <Button variant="outline" size="sm" className="w-full">
                        <Plus className="h-4 w-4 mr-2" />
                        {t('masters.addNew')}
                      </Button>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Agricultural Masters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Sprout className="h-6 w-6 text-primary" />
            {t('masters.agricultural')}
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {agriculturalMasters.map((master, index) => (
              <motion.div
                key={master.to}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
              >
                <Link to={master.to}>
                  <Card className="glass-card hover-lift cursor-pointer group">
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                      <CardTitle className="text-lg">{master.title}</CardTitle>
                      <master.icon className="h-10 w-10 text-primary group-hover:scale-110 transition-transform" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-4xl font-bold text-primary mb-3">
                        {master.count}
                      </div>
                      <Button variant="outline" size="sm" className="w-full">
                        <Plus className="h-4 w-4 mr-2" />
                        {t('masters.addNew')}
                      </Button>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </main>
    </div>
  );
};

export default Masters;
