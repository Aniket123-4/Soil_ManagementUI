import { Navigation } from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Plus, Search, Edit, Trash2, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { motion } from 'framer-motion';

const Area = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const areas = [
    { id: 1, name: 'Residential Area 1', nameHi: 'आवासीय क्षेत्र 1', ward: 'Ward A', size: '2.5 sq km' },
    { id: 2, name: 'Commercial Area 1', nameHi: 'व्यावसायिक क्षेत्र 1', ward: 'Ward A', size: '1.8 sq km' },
    { id: 3, name: 'Agricultural Area 1', nameHi: 'कृषि क्षेत्र 1', ward: 'Ward B', size: '5.2 sq km' },
    { id: 4, name: 'Industrial Area 1', nameHi: 'औद्योगिक क्षेत्र 1', ward: 'Ward C', size: '3.5 sq km' },
    { id: 5, name: 'Green Belt Area', nameHi: 'हरित पट्टी क्षेत्र', ward: 'Ward D', size: '4.0 sq km' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <div className="flex items-center gap-4 mb-8">
            <Link to="/masters"><Button variant="ghost" size="icon"><ArrowLeft className="h-5 w-5" /></Button></Link>
            <div><h1 className="text-4xl font-bold">Area Master</h1><p className="text-muted-foreground">Manage area data</p></div>
          </div>
          <Card className="glass-card p-6">
            <div className="flex justify-between items-center mb-6">
              <div className="relative w-96">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search areas..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="pl-10" />
              </div>
              <Button className="btn-premium"><Plus className="h-4 w-4 mr-2" />Add Area</Button>
            </div>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead><TableHead>Name</TableHead><TableHead>Hindi Name</TableHead><TableHead>Ward</TableHead><TableHead>Size</TableHead><TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {areas.map((a) => (
                  <TableRow key={a.id}>
                    <TableCell className="font-medium">{a.id}</TableCell><TableCell>{a.name}</TableCell><TableCell>{a.nameHi}</TableCell><TableCell>{a.ward}</TableCell><TableCell>{a.size}</TableCell>
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

export default Area;
