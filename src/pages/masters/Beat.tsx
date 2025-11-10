import { Navigation } from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Plus, Search, Edit, Trash2, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { motion } from 'framer-motion';

const Beat = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const beats = [
    { id: 1, name: 'Beat 101', nameHi: 'बीट 101', area: 'Residential Area 1', officer: 'Ramesh Kumar' },
    { id: 2, name: 'Beat 102', nameHi: 'बीट 102', area: 'Residential Area 1', officer: 'Priya Sharma' },
    { id: 3, name: 'Beat 201', nameHi: 'बीट 201', area: 'Commercial Area 1', officer: 'Amit Patel' },
    { id: 4, name: 'Beat 301', nameHi: 'बीट 301', area: 'Agricultural Area 1', officer: 'Suresh Singh' },
    { id: 5, name: 'Beat 401', nameHi: 'बीट 401', area: 'Industrial Area 1', officer: 'Geeta Verma' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <div className="flex items-center gap-4 mb-8">
            <Link to="/masters"><Button variant="ghost" size="icon"><ArrowLeft className="h-5 w-5" /></Button></Link>
            <div><h1 className="text-4xl font-bold">Beat Master</h1><p className="text-muted-foreground">Manage beat/patrol data</p></div>
          </div>
          <Card className="glass-card p-6">
            <div className="flex justify-between items-center mb-6">
              <div className="relative w-96">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search beats..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="pl-10" />
              </div>
              <Button className="btn-premium"><Plus className="h-4 w-4 mr-2" />Add Beat</Button>
            </div>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead><TableHead>Name</TableHead><TableHead>Hindi Name</TableHead><TableHead>Area</TableHead><TableHead>Officer</TableHead><TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {beats.map((b) => (
                  <TableRow key={b.id}>
                    <TableCell className="font-medium">{b.id}</TableCell><TableCell>{b.name}</TableCell><TableCell>{b.nameHi}</TableCell><TableCell>{b.area}</TableCell><TableCell>{b.officer}</TableCell>
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

export default Beat;
