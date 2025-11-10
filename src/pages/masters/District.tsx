import { Navigation } from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Plus, Search, Edit, Trash2, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { motion } from 'framer-motion';

const District = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const districts = [
    { id: 1, name: 'Mumbai', nameHi: 'मुंबई', state: 'Maharashtra', population: '12.5M' },
    { id: 2, name: 'Pune', nameHi: 'पुणे', state: 'Maharashtra', population: '9.4M' },
    { id: 3, name: 'Ahmedabad', nameHi: 'अहमदाबाद', state: 'Gujarat', population: '8.2M' },
    { id: 4, name: 'Bangalore', nameHi: 'बेंगलुरु', state: 'Karnataka', population: '12.3M' },
    { id: 5, name: 'Chennai', nameHi: 'चेन्नई', state: 'Tamil Nadu', population: '10.9M' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <div className="flex items-center gap-4 mb-8">
            <Link to="/masters"><Button variant="ghost" size="icon"><ArrowLeft className="h-5 w-5" /></Button></Link>
            <div><h1 className="text-4xl font-bold">District Master</h1><p className="text-muted-foreground">Manage district data</p></div>
          </div>
          <Card className="glass-card p-6">
            <div className="flex justify-between items-center mb-6">
              <div className="relative w-96">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search districts..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="pl-10" />
              </div>
              <Button className="btn-premium"><Plus className="h-4 w-4 mr-2" />Add District</Button>
            </div>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead><TableHead>Name</TableHead><TableHead>Hindi Name</TableHead><TableHead>State</TableHead><TableHead>Population</TableHead><TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {districts.map((d) => (
                  <TableRow key={d.id}>
                    <TableCell className="font-medium">{d.id}</TableCell><TableCell>{d.name}</TableCell><TableCell>{d.nameHi}</TableCell><TableCell>{d.state}</TableCell><TableCell>{d.population}</TableCell>
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

export default District;
