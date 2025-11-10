import { Link, useLocation } from 'react-router-dom';
import { Button } from './ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';
import { useAuth } from '@/contexts/AuthContext';
import { Menu, Moon, Sun, Globe, Sprout, User, LogOut, Users } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';

export const Navigation = () => {
  const { language, setLanguage, t } = useLanguage();
  const { theme, colorMode, setTheme, toggleColorMode } = useTheme();
  const { user, logout, isAdmin } = useAuth();
  const location = useLocation();

  // Don't render navigation on login page
  if (location.pathname === '/login') {
    return null;
  }

  const navItems = [
    { to: '/dashboard', label: t('nav.dashboard') },
    { to: '/masters', label: t('nav.masters') },
    { to: '/soil-analysis', label: t('nav.soilAnalysis') },
    { to: '/crop-simulation', label: t('nav.cropSimulation') },
    { to: '/irrigation', label: t('nav.irrigation') },
    { to: '/analytics', label: t('nav.analytics') },
  ];

  // Add User Management for admin users
  const adminNavItems = [
    ...navItems,
    { to: '/user-management', label: 'User Management' }
  ];

  const themes = [
    { value: 'green-growth', label: 'Green Growth' },
    { value: 'earth', label: 'Earth Tones' },
    { value: 'modern', label: 'Modern Professional' },
    { value: 'contrast', label: 'High Contrast' },
  ];

  const handleLogout = () => {
    logout();
  };

  const displayNavItems = isAdmin() ? adminNavItems : navItems;

  return (
    <nav className="glass-card fixed top-0 left-0 right-0 z-50 px-4 py-3">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <Sprout className="h-8 w-8 text-primary" />
          <span className="text-xl font-bold gradient-text">AgriHub</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {displayNavItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          {/* Language Toggle */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setLanguage(language === 'en' ? 'hi' : 'en')}
            className="hover-lift"
          >
            <Globe className="h-5 w-5" />
            <span className="ml-1 text-xs">{language.toUpperCase()}</span>
          </Button>

          {/* Theme Selector */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="hover-lift">
                <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="glass-card">
              {themes.map((themeItem) => (
                <DropdownMenuItem
                  key={themeItem.value}
                  onClick={() => setTheme(themeItem.value as any)}
                  className={theme === themeItem.value ? 'bg-primary/10' : ''}
                >
                  {themeItem.label}
                </DropdownMenuItem>
              ))}
              <DropdownMenuItem onClick={toggleColorMode}>
                {colorMode === 'light' ? 'Dark Mode' : 'Light Mode'}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* User Menu - Only show when user is logged in */}
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="gap-2">
                  <User className="h-4 w-4" />
                  <span className="hidden sm:inline">{user.name}</span>
                  {isAdmin() && (
                    <span className="bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full">
                      Admin
                    </span>
                  )}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="glass-card">
                <DropdownMenuItem asChild>
                  <Link to="/profile">
                    <User className="h-4 w-4 mr-2" />
                    Profile
                  </Link>
                </DropdownMenuItem>
                {isAdmin() && (
                  <DropdownMenuItem asChild>
                    <Link to="/user-management">
                      <Users className="h-4 w-4 mr-2" />
                      User Management
                    </Link>
                  </DropdownMenuItem>
                )}
                <DropdownMenuItem onClick={handleLogout} className="text-red-600">
                  <LogOut className="h-4 w-4 mr-2" />
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            // Agar user logged in nahi hai, toh navigation bhi show nahi hoga
            // Kyunki login page par navigation hide ho jata hai
            null
          )}

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent className="glass-card">
              <div className="flex flex-col gap-4 mt-8">
                {displayNavItems.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    className="text-lg font-medium hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
                {user && (
                  <div className="space-y-2">
                    <div className="text-sm text-muted-foreground">
                      Logged in as {user.name}
                      {isAdmin() && ' (Admin)'}
                    </div>
                    <Button
                      onClick={handleLogout}
                      variant="outline"
                      className="w-full text-red-600 border-red-200 hover:bg-red-50"
                    >
                      <LogOut className="h-4 w-4 mr-2" />
                      Logout
                    </Button>
                  </div>
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};