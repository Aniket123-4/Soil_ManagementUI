import { Navigation } from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Plus, Search, Edit, Trash2, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { motion } from 'framer-motion';

const Zone = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const zones = [
    { id: 1, name: 'North Zone', nameHi: 'उत्तर क्षेत्र', city: 'Mumbai', area: '45 sq km' },
    { id: 2, name: 'South Zone', nameHi: 'दक्षिण क्षेत्र', city: 'Mumbai', area: '38 sq km' },
    { id: 3, name: 'East Zone', nameHi: 'पूर्व क्षेत्र', city: 'Pune', area: '52 sq km' },
    { id: 4, name: 'West Zone', nameHi: 'पश्चिम क्षेत्र', city: 'Ahmedabad', area: '41 sq km' },
    { id: 5, name: 'Central Zone', nameHi: 'केंद्रीय क्षेत्र', city: 'Bangalore', area: '35 sq km' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <div className="flex items-center gap-4 mb-8">
            <Link to="/masters"><Button variant="ghost" size="icon"><ArrowLeft className="h-5 w-5" /></Button></Link>
            <div><h1 className="text-4xl font-bold">Zone Master</h1><p className="text-muted-foreground">Manage zone data</p></div>
          </div>
          <Card className="glass-card p-6">
            <div className="flex justify-between items-center mb-6">
              <div className="relative w-96">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search zones..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="pl-10" />
              </div>
              <Button className="btn-premium"><Plus className="h-4 w-4 mr-2" />Add Zone</Button>
            </div>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead><TableHead>Name</TableHead><TableHead>Hindi Name</TableHead><TableHead>City</TableHead><TableHead>Area</TableHead><TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {zones.map((z) => (
                  <TableRow key={z.id}>
                    <TableCell className="font-medium">{z.id}</TableCell><TableCell>{z.name}</TableCell><TableCell>{z.nameHi}</TableCell><TableCell>{z.city}</TableCell><TableCell>{z.area}</TableCell>
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

export default Zone;
