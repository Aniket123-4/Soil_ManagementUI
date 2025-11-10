import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { 
  Users, 
  UserPlus, 
  Search,
  Shield,
  UserCheck
} from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { toast } from 'sonner';
import api from '@/utils/Url';
import { useAuth } from '@/contexts/AuthContext';

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'user',
    permissions: []
  });

  const { isAdmin } = useAuth();

  // Available permissions for users
  const availablePermissions = [
    { page: 'dashboard', canView: true, canEdit: false, canDelete: false },
    { page: 'soil-analysis', canView: true, canEdit: true, canDelete: false },
    { page: 'crop-simulation', canView: true, canEdit: true, canDelete: false },
    { page: 'analytics', canView: true, canEdit: false, canDelete: false },
  ];

  // Fetch all users
  const fetchUsers = async () => {
    try {
      setLoading(true);
      const response = await api.get('/users');
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
      if (error.response?.status === 401) {
        toast.error('Session expired. Please login again.');
      } else {
        toast.error('Failed to fetch users');
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isAdmin()) {
      fetchUsers();
    }
  }, [isAdmin]);

  // Create new user
  const handleCreateUser = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await api.post('/users/create', formData);
      toast.success('User created successfully');
      setShowCreateForm(false);
      setFormData({
        name: '',
        email: '',
        password: '',
        role: 'user',
        permissions: []
      });
      fetchUsers(); // Refresh the list
    } catch (error) {
      console.error('Error creating user:', error);
      if (error.response?.status === 401) {
        toast.error('Session expired. Please login again.');
      } else {
        toast.error(error.response?.data?.message || 'Failed to create user');
      }
    } finally {
      setLoading(false);
    }
  };

  // Update user permissions
  const handleUpdateUser = async (userId, updates) => {
    try {
      await api.put('/users/update-access', {
        userId,
        ...updates
      });
      toast.success('User updated successfully');
      fetchUsers(); // Refresh the list
    } catch (error) {
      console.error('Error updating user:', error);
      if (error.response?.status === 401) {
        toast.error('Session expired. Please login again.');
      } else {
        toast.error(error.response?.data?.message || 'Failed to update user');
      }
    }
  };

  // Filter users based on search
  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const togglePermission = (page, field) => {
    setFormData(prev => {
      const existingPermission = prev.permissions.find(p => p.page === page);
      if (existingPermission) {
        return {
          ...prev,
          permissions: prev.permissions.map(p =>
            p.page === page ? { ...p, [field]: !p[field] } : p
          )
        };
      } else {
        return {
          ...prev,
          permissions: [...prev.permissions, { 
            page, 
            [field]: true,
            canView: field === 'canView' ? true : false,
            canEdit: field === 'canEdit' ? true : false,
            canDelete: field === 'canDelete' ? true : false
          }]
        };
      }
    });
  };

  // Redirect if not admin
  if (!isAdmin()) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Card className="border-0 shadow-2xl">
          <CardContent className="pt-6">
            <div className="text-center">
              <Shield className="h-16 w-16 text-red-500 mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-2">Access Denied</h2>
              <p className="text-muted-foreground">
                You need admin privileges to access this page.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30 p-6">
      <div className="container mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8"
        >
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
              User Management
            </h1>
            <p className="text-muted-foreground">
              Manage user accounts, roles, and permissions
            </p>
          </div>
          <Button 
            onClick={() => setShowCreateForm(true)}
            className="mt-4 sm:mt-0 bg-gradient-to-r from-primary to-accent"
          >
            <UserPlus className="h-4 w-4 mr-2" />
            Create User
          </Button>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-6"
        >
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search users by name or email..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </motion.div>

        {/* Create User Form */}
        <AnimatePresence>
          {showCreateForm && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mb-8"
            >
              <Card className="border-0 shadow-2xl">
                <CardHeader>
                  <CardTitle>Create New User</CardTitle>
                  <CardDescription>
                    Add a new user to the system with specific permissions
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleCreateUser} className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                          placeholder="Enter full name"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                          placeholder="Enter email address"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="password">Password</Label>
                        <Input
                          id="password"
                          type="password"
                          value={formData.password}
                          onChange={(e) => setFormData(prev => ({ ...prev, password: e.target.value }))}
                          placeholder="Enter password"
                          required
                          minLength={6}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="role">Role</Label>
                        <select
                          id="role"
                          value={formData.role}
                          onChange={(e) => setFormData(prev => ({ ...prev, role: e.target.value }))}
                          className="w-full p-2 border rounded-lg"
                        >
                          <option value="user">User</option>
                          <option value="admin">Admin</option>
                        </select>
                      </div>
                    </div>

                    {/* Permissions Section */}
                    <div className="space-y-4">
                      <Label>Permissions</Label>
                      <div className="grid gap-2">
                        {availablePermissions.map((permission) => (
                          <div key={permission.page} className="flex items-center justify-between p-3 border rounded-lg">
                            <span className="font-medium capitalize">{permission.page.replace('-', ' ')}</span>
                            <div className="flex gap-4">
                              <label className="flex items-center gap-2">
                                <input
                                  type="checkbox"
                                  checked={formData.permissions.find(p => p.page === permission.page)?.canView || false}
                                  onChange={() => togglePermission(permission.page, 'canView')}
                                />
                                View
                              </label>
                              <label className="flex items-center gap-2">
                                <input
                                  type="checkbox"
                                  checked={formData.permissions.find(p => p.page === permission.page)?.canEdit || false}
                                  onChange={() => togglePermission(permission.page, 'canEdit')}
                                />
                                Edit
                              </label>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-2 pt-4">
                      <Button type="submit" disabled={loading} className="bg-gradient-to-r from-primary to-accent">
                        {loading ? 'Creating...' : 'Create User'}
                      </Button>
                      <Button 
                        type="button" 
                        variant="outline" 
                        onClick={() => setShowCreateForm(false)}
                      >
                        Cancel
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Users Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card className="border-0 shadow-2xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                Users ({filteredUsers.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              {loading ? (
                <div className="text-center py-8">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
                  <p className="text-muted-foreground mt-2">Loading users...</p>
                </div>
              ) : filteredUsers.length === 0 ? (
                <div className="text-center py-8">
                  <UserCheck className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">No users found</p>
                </div>
              ) : (
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>User</TableHead>
                      <TableHead>Role</TableHead>
                      <TableHead>Permissions</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredUsers.map((user) => (
                      <TableRow key={user._id}>
                        <TableCell>
                          <div>
                            <div className="font-medium">{user.name}</div>
                            <div className="text-sm text-muted-foreground">{user.email}</div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge 
                            variant={user.role === 'admin' ? 'default' : 'secondary'}
                            className={user.role === 'admin' ? 'bg-gradient-to-r from-primary to-accent' : ''}
                          >
                            {user.role}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex flex-wrap gap-1">
                            {user.permissions?.slice(0, 3).map((perm, index) => (
                              <Badge key={index} variant="outline" className="text-xs">
                                {perm.page}
                              </Badge>
                            ))}
                            {user.permissions?.length > 3 && (
                              <Badge variant="outline" className="text-xs">
                                +{user.permissions.length - 3} more
                              </Badge>
                            )}
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex gap-2">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => handleUpdateUser(user._id, { 
                                role: user.role === 'admin' ? 'user' : 'admin' 
                              })}
                            >
                              <Shield className="h-3 w-3 mr-1" />
                              {user.role === 'admin' ? 'Make User' : 'Make Admin'}
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default UserManagement;