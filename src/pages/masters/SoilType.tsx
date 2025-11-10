import { Navigation } from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Plus, Search, Edit, Trash2, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { motion } from 'framer-motion';

const SoilType = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const soilTypes = [
    { id: 1, name: 'Alluvial Soil', nameHi: 'जलोढ़ मिट्टी', ph: '6.5-7.5', crops: ['Rice', 'Wheat', 'Sugarcane'], color: '#8B4513' },
    { id: 2, name: 'Black Soil', nameHi: 'काली मिट्टी', ph: '7.2-8.5', crops: ['Cotton', 'Wheat', 'Jowar'], color: '#2F2F2F' },
    { id: 3, name: 'Red Soil', nameHi: 'लाल मिट्टी', ph: '6.0-7.0', crops: ['Groundnut', 'Millets', 'Tobacco'], color: '#8B0000' },
    { id: 4, name: 'Laterite Soil', nameHi: 'लैटेराइट मिट्टी', ph: '5.0-6.5', crops: ['Tea', 'Coffee', 'Cashew'], color: '#CD853F' },
    { id: 5, name: 'Desert Soil', nameHi: 'रेगिस्तानी मिट्टी', ph: '7.0-8.5', crops: ['Bajra', 'Pulses', 'Barley'], color: '#F4A460' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex items-center gap-4 mb-8">
            <Link to="/masters">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="h-5 w-5" />
              </Button>
            </Link>
            <div>
              <h1 className="text-4xl font-bold">Soil Type Master</h1>
              <p className="text-muted-foreground">Manage soil classification data</p>
            </div>
          </div>

          <Card className="glass-card p-6">
            <div className="flex justify-between items-center mb-6">
              <div className="relative w-96">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search soil types..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Button className="btn-premium">
                <Plus className="h-4 w-4 mr-2" />
                Add Soil Type
              </Button>
            </div>

            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>Soil Type</TableHead>
                  <TableHead>Hindi Name</TableHead>
                  <TableHead>pH Range</TableHead>
                  <TableHead>Suitable Crops</TableHead>
                  <TableHead>Color</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {soilTypes.map((soil) => (
                  <TableRow key={soil.id}>
                    <TableCell className="font-medium">{soil.id}</TableCell>
                    <TableCell className="font-semibold">{soil.name}</TableCell>
                    <TableCell>{soil.nameHi}</TableCell>
                    <TableCell>{soil.ph}</TableCell>
                    <TableCell>
                      <div className="flex flex-wrap gap-1">
                        {soil.crops.map((crop) => (
                          <Badge key={crop} variant="secondary" className="text-xs">
                            {crop}
                          </Badge>
                        ))}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <div 
                          className="w-6 h-6 rounded-full border-2 border-border"
                          style={{ backgroundColor: soil.color }}
                        />
                      </div>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Button variant="ghost" size="icon">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="icon">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>
        </motion.div>
      </main>
    </div>
  );
};

export default SoilType;
