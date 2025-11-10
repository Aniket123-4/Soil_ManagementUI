import { Navigation } from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Plus, Search, Edit, Trash2, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { motion } from 'framer-motion';

const CropType = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const cropTypes = [
    { id: 1, name: 'Wheat', nameHi: 'गेहूं', category: 'Cereal', season: 'Rabi', duration: '120 days' },
    { id: 2, name: 'Rice', nameHi: 'चावल', category: 'Cereal', season: 'Kharif', duration: '140 days' },
    { id: 3, name: 'Cotton', nameHi: 'कपास', category: 'Fiber', season: 'Kharif', duration: '180 days' },
    { id: 4, name: 'Sugarcane', nameHi: 'गन्ना', category: 'Cash Crop', season: 'Year-round', duration: '365 days' },
    { id: 5, name: 'Groundnut', nameHi: 'मूंगफली', category: 'Oilseed', season: 'Kharif', duration: '110 days' },
    { id: 6, name: 'Tomato', nameHi: 'टमाटर', category: 'Vegetable', season: 'Year-round', duration: '90 days' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <div className="flex items-center gap-4 mb-8">
            <Link to="/masters"><Button variant="ghost" size="icon"><ArrowLeft className="h-5 w-5" /></Button></Link>
            <div><h1 className="text-4xl font-bold">Crop Type Master</h1><p className="text-muted-foreground">Manage crop classification data</p></div>
          </div>
          <Card className="glass-card p-6">
            <div className="flex justify-between items-center mb-6">
              <div className="relative w-96">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search crop types..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="pl-10" />
              </div>
              <Button className="btn-premium"><Plus className="h-4 w-4 mr-2" />Add Crop Type</Button>
            </div>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead><TableHead>Crop Name</TableHead><TableHead>Hindi Name</TableHead><TableHead>Category</TableHead><TableHead>Season</TableHead><TableHead>Duration</TableHead><TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {cropTypes.map((crop) => (
                  <TableRow key={crop.id}>
                    <TableCell className="font-medium">{crop.id}</TableCell><TableCell className="font-semibold">{crop.name}</TableCell><TableCell>{crop.nameHi}</TableCell>
                    <TableCell><Badge variant="secondary">{crop.category}</Badge></TableCell>
                    <TableCell><Badge variant="outline">{crop.season}</Badge></TableCell>
                    <TableCell>{crop.duration}</TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Button variant="ghost" size="icon"><Edit className="h-4 w-4" /></Button>
                        <Button variant="ghost" size="icon"><Trash2 className="h-4 w-4" /></Button>
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

export default CropType;
