import { Navigation } from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Plus, Search, Edit, Trash2, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { motion } from 'framer-motion';

const City = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const cities = [
    { id: 1, name: 'Andheri', nameHi: 'अंधेरी', district: 'Mumbai', pincode: '400053' },
    { id: 2, name: 'Bandra', nameHi: 'बांद्रा', district: 'Mumbai', pincode: '400050' },
    { id: 3, name: 'Kothrud', nameHi: 'कोथरुड', district: 'Pune', pincode: '411038' },
    { id: 4, name: 'Satellite', nameHi: 'सैटेलाइट', district: 'Ahmedabad', pincode: '380015' },
    { id: 5, name: 'Indiranagar', nameHi: 'इंदिरानगर', district: 'Bangalore', pincode: '560038' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <div className="flex items-center gap-4 mb-8">
            <Link to="/masters"><Button variant="ghost" size="icon"><ArrowLeft className="h-5 w-5" /></Button></Link>
            <div><h1 className="text-4xl font-bold">City Master</h1><p className="text-muted-foreground">Manage city/locality data</p></div>
          </div>
          <Card className="glass-card p-6">
            <div className="flex justify-between items-center mb-6">
              <div className="relative w-96">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search cities..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="pl-10" />
              </div>
              <Button className="btn-premium"><Plus className="h-4 w-4 mr-2" />Add City</Button>
            </div>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead><TableHead>Name</TableHead><TableHead>Hindi Name</TableHead><TableHead>District</TableHead><TableHead>Pincode</TableHead><TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {cities.map((c) => (
                  <TableRow key={c.id}>
                    <TableCell className="font-medium">{c.id}</TableCell><TableCell>{c.name}</TableCell><TableCell>{c.nameHi}</TableCell><TableCell>{c.district}</TableCell><TableCell>{c.pincode}</TableCell>
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

export default City;
