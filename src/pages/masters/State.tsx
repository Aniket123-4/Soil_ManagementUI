import { Navigation } from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
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

const State = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const states = [
    { id: 1, name: 'Maharashtra', nameHi: 'महाराष्ट्र', code: 'MH', country: 'India', active: true },
    { id: 2, name: 'Gujarat', nameHi: 'गुजरात', code: 'GJ', country: 'India', active: true },
    { id: 3, name: 'Karnataka', nameHi: 'कर्नाटक', code: 'KA', country: 'India', active: true },
    { id: 4, name: 'Tamil Nadu', nameHi: 'तमिलनाडु', code: 'TN', country: 'India', active: true },
    { id: 5, name: 'Uttar Pradesh', nameHi: 'उत्तर प्रदेश', code: 'UP', country: 'India', active: true },
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
              <h1 className="text-4xl font-bold">State Master</h1>
              <p className="text-muted-foreground">Manage state data</p>
            </div>
          </div>

          <Card className="glass-card p-6">
            <div className="flex justify-between items-center mb-6">
              <div className="relative w-96">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search states..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Button className="btn-premium">
                <Plus className="h-4 w-4 mr-2" />
                Add State
              </Button>
            </div>

            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>State Name</TableHead>
                  <TableHead>Hindi Name</TableHead>
                  <TableHead>Code</TableHead>
                  <TableHead>Country</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {states.map((state) => (
                  <TableRow key={state.id}>
                    <TableCell className="font-medium">{state.id}</TableCell>
                    <TableCell>{state.name}</TableCell>
                    <TableCell>{state.nameHi}</TableCell>
                    <TableCell>{state.code}</TableCell>
                    <TableCell>{state.country}</TableCell>
                    <TableCell>
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
                        Active
                      </span>
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

export default State;
