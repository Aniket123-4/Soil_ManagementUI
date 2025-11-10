import { Navigation } from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Plus, Search, Edit, Trash2, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { motion } from 'framer-motion';

const Ward = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const wards = [
    { id: 1, name: 'Ward A', nameHi: 'वार्ड ए', zone: 'North Zone', households: '1,250' },
    { id: 2, name: 'Ward B', nameHi: 'वार्ड बी', zone: 'North Zone', households: '980' },
    { id: 3, name: 'Ward C', nameHi: 'वार्ड सी', zone: 'South Zone', households: '1,450' },
    { id: 4, name: 'Ward D', nameHi: 'वार्ड डी', zone: 'East Zone', households: '1,120' },
    { id: 5, name: 'Ward E', nameHi: 'वार्ड ई', zone: 'West Zone', households: '890' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <div className="flex items-center gap-4 mb-8">
            <Link to="/masters"><Button variant="ghost" size="icon"><ArrowLeft className="h-5 w-5" /></Button></Link>
            <div><h1 className="text-4xl font-bold">Ward Master</h1><p className="text-muted-foreground">Manage ward data</p></div>
          </div>
          <Card className="glass-card p-6">
            <div className="flex justify-between items-center mb-6">
              <div className="relative w-96">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search wards..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="pl-10" />
              </div>
              <Button className="btn-premium"><Plus className="h-4 w-4 mr-2" />Add Ward</Button>
            </div>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead><TableHead>Name</TableHead><TableHead>Hindi Name</TableHead><TableHead>Zone</TableHead><TableHead>Households</TableHead><TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {wards.map((w) => (
                  <TableRow key={w.id}>
                    <TableCell className="font-medium">{w.id}</TableCell><TableCell>{w.name}</TableCell><TableCell>{w.nameHi}</TableCell><TableCell>{w.zone}</TableCell><TableCell>{w.households}</TableCell>
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

export default Ward;
