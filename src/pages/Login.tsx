
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { useAuth } from '@/contexts/AuthContext';
import { Sprout, Mail, Lock, ArrowLeft, Eye, EyeOff, User, Leaf, Shield } from 'lucide-react';
import abstractBg from '@/assets/abstract-bg.jpg';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from 'sonner';
import api from '@/utils/Url';
import { useEffect, useState } from 'react';

import {Trees, Wheat, Cloud, Sun } from 'lucide-react';

// API Service using axios
const authAPI = {
  register: async (userData: { name: string; email: string; password: string }) => {
    const response = await api.post('/users/register', userData);
    return response.data;
  },

  login: async (credentials: { email: string; password: string }) => {
    const response = await api.post('/users/login', credentials);
    return response.data;
  },
};

// Splash Screen Component

const SplashScreen = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-green-950 via-emerald-900 to-green-800">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-green-400/30 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 50 - 25, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 4 + 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}

        {/* Animated sun */}
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            scale: { duration: 4, repeat: Infinity },
          }}
          className="absolute top-10 right-10 text-yellow-300/20"
        >
          <Sun className="h-16 w-16" />
        </motion.div>

        {/* Floating clouds */}
        <motion.div
          animate={{ x: [-100, window.innerWidth + 100] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 left-0 text-white/10"
        >
          <Cloud className="h-12 w-24" />
        </motion.div>

        <motion.div
          animate={{ x: [window.innerWidth + 100, -100] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear", delay: 10 }}
          className="absolute top-40 right-0 text-white/10"
        >
          <Cloud className="h-8 w-16" />
        </motion.div>
      </div>

      <div className="text-center relative z-10">
        {/* Main Logo Container */}
        <motion.div
          initial={{ scale: 0, rotate: -180, opacity: 0 }}
          animate={{ scale: 1, rotate: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 20,
            duration: 1.2,
          }}
          className="mb-12"
        >
          <div className="relative">
            {/* Outer Glow Ring */}
            <motion.div
              animate={{ 
                rotate: 360,
                scale: [1, 1.1, 1],
              }}
              transition={{
                rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                scale: { duration: 3, repeat: Infinity },
              }}
              className="absolute -inset-6 border-4 border-emerald-400/30 rounded-3xl blur-lg"
            />

            {/* Middle Ring */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-3 border-2 border-green-300/50 rounded-3xl"
            />

            {/* Main Logo Box */}
            <div className="relative w-32 h-32 bg-gradient-to-br from-green-500 via-emerald-500 to-teal-500 rounded-3xl flex items-center justify-center mx-auto shadow-2xl shadow-green-500/25 backdrop-blur-sm border border-green-400/30">
              {/* Inner Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 to-transparent rounded-3xl" />
              
              {/* Main Icon */}
              <motion.div
                animate={{ 
                  scale: [1, 1.05, 1],
                  y: [0, -2, 0]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Sprout className="h-16 w-16 text-white drop-shadow-lg" />
              </motion.div>

              {/* Floating leaves around the logo */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-2 -right-2 text-green-300/60"
              >
                <Leaf className="h-6 w-6" />
              </motion.div>
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-2 -left-2 text-green-300/60"
              >
                <Leaf className="h-5 w-5" />
              </motion.div>
            </div>

            {/* Pulse Effect */}
            <motion.div
              animate={{ 
                opacity: [0, 0.8, 0],
                scale: [1, 1.4, 1]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeOut"
              }}
              className="absolute inset-0 bg-green-400/20 rounded-3xl blur-xl"
            />
          </div>
        </motion.div>

        {/* Brand Name with Agriculture Theme */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mb-6"
        >
          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, type: "spring" }}
            className="text-6xl md:text-7xl font-black bg-gradient-to-r from-green-300 via-emerald-200 to-teal-300 bg-clip-text text-transparent mb-4 tracking-tight drop-shadow-lg"
          >
            AgriHub
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "200px" }}
            transition={{ delay: 0.8, duration: 1 }}
            className="h-1 bg-gradient-to-r from-transparent via-green-400 to-transparent mx-auto rounded-full mb-4"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="text-2xl text-green-100/90 font-light tracking-wide"
          >
            Smart Farming Revolution
          </motion.p>
        </motion.div>

        {/* Agricultural Icons Row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="flex justify-center gap-8 mb-12"
        >
          {[
            { icon: Wheat, color: "text-amber-300" },
            { icon: Trees, color: "text-green-300" },
            { icon: Leaf, color: "text-emerald-300" },
            { icon: Sprout, color: "text-lime-300" },
          ].map((item, index) => (
            <motion.div
              key={index}
              animate={{ 
                y: [0, -8, 0],
                rotate: [0, 5, 0, -5, 0]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity,
                delay: index * 0.2,
                ease: "easeInOut"
              }}
              className={`${item.color} opacity-80`}
            >
              <item.icon className="h-8 w-8 drop-shadow" />
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced Loading Animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="flex flex-col items-center"
        >
          <div className="flex justify-center gap-3 mb-4">
            {[0, 1, 2, 3, 4].map((i) => (
              <motion.div
                key={i}
                animate={{
                  scale: [1, 1.4, 1],
                  opacity: [0.4, 1, 0.4],
                  y: [0, -8, 0],
                  backgroundColor: [
                    "rgb(34 197 94 / 0.5)",
                    "rgb(134 239 172 / 1)",
                    "rgb(34 197 94 / 0.5)",
                  ],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.1,
                  ease: "easeInOut",
                }}
                className="w-3 h-3 rounded-full bg-green-400 shadow-[0_0_10px_rgba(74,222,128,0.5)]"
              />
            ))}
          </div>

          <motion.p
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-green-200/80 text-lg font-light tracking-wider"
          >
            Growing Your Future...
          </motion.p>
        </motion.div>

        {/* Bottom decorative elements */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-green-300/30"
        >
          <div className="flex gap-2">
            <Leaf className="h-4 w-4" />
            <Leaf className="h-4 w-4" />
            <Leaf className="h-4 w-4" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};
// const SplashScreen = () => {
//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
//       <div className="text-center">
//         <motion.div
//           initial={{ scale: 0, rotate: -180 }}
//           animate={{ scale: 1, rotate: 0 }}
//           transition={{ 
//             type: "spring", 
//             stiffness: 200, 
//             damping: 15,
//             duration: 1 
//           }}
//           className="mb-8"
//         >
//           <div className="relative">
//             <div className="w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-3xl flex items-center justify-center mx-auto shadow-2xl">
//               <Sprout className="h-12 w-12 text-white" />
//             </div>
//             <motion.div
//               animate={{ 
//                 rotate: 360,
//                 scale: [1, 1.1, 1]
//               }}
//               transition={{ 
//                 rotate: { duration: 3, repeat: Infinity, ease: "linear" },
//                 scale: { duration: 2, repeat: Infinity }
//               }}
//               className="absolute -inset-4 border-4 border-primary/30 rounded-3xl"
//             />
//           </div>
//         </motion.div>

//         <motion.h1
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.3 }}
//           className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4"
//         >
//           AgriHub
//         </motion.h1>

//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.5 }}
//           className="text-xl text-muted-foreground mb-8"
//         >
//           Smart Farming Platform
//         </motion.p>

//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.7 }}
//           className="flex justify-center space-x-2"
//         >
//           {[0, 1, 2].map((index) => (
//             <motion.div
//               key={index}
//               animate={{ 
//                 scale: [1, 1.2, 1],
//                 opacity: [0.5, 1, 0.5]
//               }}
//               transition={{ 
//                 duration: 1.5, 
//                 repeat: Infinity,
//                 delay: index * 0.2
//               }}
//               className="w-3 h-3 bg-primary rounded-full"
//             />
//           ))}
//         </motion.div>
//       </div>
//     </div>
//   );
// };


const Login = () => {
  const { t } = useLanguage();
  const { user, login } = useAuth();
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState('');
  const [showSplash, setShowSplash] = useState(false);
  const [isRedirecting, setIsRedirecting] = useState(false);

  // Redirect if already logged in - but only if not currently showing splash
  useEffect(() => {
    if (user && !showSplash && !isRedirecting) {
      navigate('/dashboard');
    }
  }, [user, navigate, showSplash, isRedirecting]);

  const validateForm = () => {
    if (!email || !password) {
      toast.error('Please fill in all required fields');
      return false;
    }

    if (!isLogin && !name) {
      toast.error('Please enter your name');
      return false;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      toast.error('Please enter a valid email address');
      return false;
    }

    if (password.length < 6) {
      toast.error('Password must be at least 6 characters long');
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    try {
      let response;
      
      if (isLogin) {
        // Login API call
        response = await authAPI.login({ email, password });
        toast.success('🎉 Welcome back! Login successful.');

        // Use auth context login
        login({
          _id: response._id,
          name: response.name,
          email: response.email,
          role: response.role,
          permissions: response.permissions || []
        }, response.token);

        // Show splash screen and set redirecting state
        setShowSplash(true);
        setIsRedirecting(true);
        
        // Wait 3 seconds before navigating
        setTimeout(() => {
          navigate('/dashboard');
        }, 3000);

      } else {
        // Register API call
        response = await authAPI.register({ name, email, password });
        toast.success('✨ Account created successfully! Please login to continue.');

        // Switch to login mode after registration
        setIsLogin(true);
        setEmail('');
        setPassword('');
        setName('');
      }

    } catch (error: any) {
      const errorMessage = error.response?.data?.message || error.message || `Failed to ${isLogin ? 'login' : 'register'}`;
      toast.error(errorMessage);
      setShowSplash(false);
      setIsRedirecting(false);
    } finally {
      setIsLoading(false);
    }
  };

  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
    setEmail('');
    setPassword('');
    setName('');
  };

  // If showing splash, only render the splash screen
  if (showSplash) {
    return <SplashScreen />;
  }

  return (
    <div 
      className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden"
      style={{
        backgroundImage: `url(${abstractBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-white/10 backdrop-blur-[1px]" />
      
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/5 rounded-full blur-xl" />
        <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-accent/5 rounded-full blur-xl" />
      </div>

      {/* Back Button */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="absolute top-6 left-6 z-10"
      >
        <Link to="/">
          <Button variant="ghost" size="sm" className="rounded-xl h-9 w-9 bg-white/80 backdrop-blur-sm hover:bg-white">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
      </motion.div>

      {/* Login Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-sm relative z-10"
      >
        <Card className="border-0 shadow-2xl bg-white/95 backdrop-blur-sm">
          <div className="h-1 bg-gradient-to-r from-primary to-accent" />
          
          <CardHeader className="text-center pb-4 space-y-3">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="flex justify-center"
            >
              <div className="p-2 bg-primary/10 rounded-xl">
                <Sprout className="h-8 w-8 text-primary" />
              </div>
            </motion.div>
            
            <div>
              <CardTitle className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                {isLogin ? t('auth.login') : t('auth.signup')}
              </CardTitle>
              <CardDescription className="text-sm mt-1">
                {isLogin ? 'Welcome back' : 'Create your account'}
              </CardDescription>
            </div>
          </CardHeader>

          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-4">
              <AnimatePresence mode="wait">
                {!isLogin && (
                  <motion.div
                    key="name-field"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="space-y-2"
                  >
                    <Label htmlFor="name" className="text-xs font-medium flex items-center gap-1">
                      <User className="h-3 w-3 text-primary" />
                      Full Name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="John Farmer"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required={!isLogin}
                      className="h-9 text-sm rounded-lg bg-white"
                      disabled={isLoading}
                    />
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-xs font-medium flex items-center gap-1">
                  <Mail className="h-3 w-3 text-primary" />
                  {t('auth.email')}
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="farmer@agrihub.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="h-9 text-sm rounded-lg bg-white"
                  disabled={isLoading}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-xs font-medium flex items-center gap-1">
                  <Lock className="h-3 w-3 text-primary" />
                  {t('auth.password')}
                </Label>
                <div className="relative">
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="h-9 text-sm rounded-lg pr-10 bg-white"
                    disabled={isLoading}
                    minLength={6}
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-1 top-1/2 transform -translate-y-1/2 h-7 w-7 rounded-md"
                    onClick={() => setShowPassword(!showPassword)}
                    disabled={isLoading}
                  >
                    {showPassword ? (
                      <EyeOff className="h-3 w-3" />
                    ) : (
                      <Eye className="h-3 w-3" />
                    )}
                  </Button>
                </div>
              </div>

              {isLogin && (
                <div className="flex justify-end">
                  <Button 
                    variant="link" 
                    className="px-0 text-xs h-auto text-primary"
                    type="button"
                  >
                    {t('auth.forgotPassword')}
                  </Button>
                </div>
              )}
            </CardContent>

            <CardFooter className="flex flex-col gap-4 pt-2">
              <Button 
                type="submit" 
                className="w-full h-9 rounded-lg text-sm font-medium bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white"
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    {isLogin ? 'Signing in...' : 'Creating Account...'}
                  </div>
                ) : (
                  <span className="flex items-center gap-1">
                    <Leaf className="h-3 w-3" />
                    {isLogin ? t('auth.login') : t('auth.signup')}
                  </span>
                )}
              </Button>

              <div className="text-center text-xs">
                <span className="text-muted-foreground">
                  {isLogin ? t('auth.noAccount') : t('auth.hasAccount')}
                </span>{' '}
                <Button
                  type="button"
                  variant="link"
                  className="px-1 text-xs h-auto font-medium text-primary"
                  onClick={toggleAuthMode}
                  disabled={isLoading}
                >
                  {isLogin ? t('auth.signup') : t('auth.login')}
                </Button>
              </div>
            </CardFooter>
          </form>

          <div className="px-6 pb-4">
            <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
              <Shield className="h-3 w-3 text-green-500" />
              Secure & Encrypted
            </div>
          </div>
        </Card>
      </motion.div>
    </div>
  );
};

export default Login;