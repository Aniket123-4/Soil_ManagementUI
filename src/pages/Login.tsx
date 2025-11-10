// // import { useState } from 'react';
// // import { Link, useNavigate } from 'react-router-dom';
// // import { Button } from '@/components/ui/button';
// // import { Input } from '@/components/ui/input';
// // import { Label } from '@/components/ui/label';
// // import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
// // import { useLanguage } from '@/contexts/LanguageContext';
// // import { Sprout, Mail, Lock, ArrowLeft } from 'lucide-react';
// // import abstractBg from '@/assets/abstract-bg.jpg';
// // import { motion } from 'framer-motion';
// // import { toast } from 'sonner';

// // const Login = () => {
// //   const { t } = useLanguage();
// //   const navigate = useNavigate();
// //   const [isLogin, setIsLogin] = useState(true);
// //   const [email, setEmail] = useState('');
// //   const [password, setPassword] = useState('');

// //   const handleSubmit = (e: React.FormEvent) => {
// //     e.preventDefault();
// //     // Simulate login
// //     toast.success(isLogin ? 'Login successful!' : 'Account created successfully!');
// //     setTimeout(() => navigate('/dashboard'), 1000);
// //   };

// //   return (
// //     <div 
// //       className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden"
// //       style={{
// //         backgroundImage: `url(${abstractBg})`,
// //         backgroundSize: 'cover',
// //         backgroundPosition: 'center',
// //       }}
// //     >
// //       {/* Overlay */}
// //       <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/85 to-background/90" />
      
// //       {/* Animated Background Elements */}
// //       <div className="absolute inset-0 overflow-hidden pointer-events-none">
// //         <div className="absolute top-20 left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
// //         <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
// //       </div>

// //       {/* Back Button */}
// //       <Link to="/" className="absolute top-8 left-8 z-10">
// //         <Button variant="ghost" size="icon" className="hover-lift">
// //           <ArrowLeft className="h-5 w-5" />
// //         </Button>
// //       </Link>

// //       {/* Login Card */}
// //       <motion.div
// //         initial={{ opacity: 0, y: 20 }}
// //         animate={{ opacity: 1, y: 0 }}
// //         transition={{ duration: 0.5 }}
// //         className="w-full max-w-md relative z-10"
// //       >
// //         <Card className="glass-card border-2">
// //           <CardHeader className="text-center">
// //             <div className="flex justify-center mb-4">
// //               <div className="p-3 bg-primary/10 rounded-2xl animate-glow">
// //                 <Sprout className="h-12 w-12 text-primary" />
// //               </div>
// //             </div>
// //             <CardTitle className="text-3xl font-bold">
// //               {isLogin ? t('auth.login') : t('auth.signup')}
// //             </CardTitle>
// //             <CardDescription>
// //               {isLogin 
// //                 ? 'Welcome back to AgriHub' 
// //                 : 'Create your AgriHub account'}
// //             </CardDescription>
// //           </CardHeader>

// //           <form onSubmit={handleSubmit}>
// //             <CardContent className="space-y-4">
// //               <div className="space-y-2">
// //                 <Label htmlFor="email" className="flex items-center gap-2">
// //                   <Mail className="h-4 w-4" />
// //                   {t('auth.email')}
// //                 </Label>
// //                 <Input
// //                   id="email"
// //                   type="email"
// //                   placeholder="farmer@agrihub.com"
// //                   value={email}
// //                   onChange={(e) => setEmail(e.target.value)}
// //                   required
// //                   className="glass"
// //                 />
// //               </div>

// //               <div className="space-y-2">
// //                 <Label htmlFor="password" className="flex items-center gap-2">
// //                   <Lock className="h-4 w-4" />
// //                   {t('auth.password')}
// //                 </Label>
// //                 <Input
// //                   id="password"
// //                   type="password"
// //                   placeholder="••••••••"
// //                   value={password}
// //                   onChange={(e) => setPassword(e.target.value)}
// //                   required
// //                   className="glass"
// //                 />
// //               </div>

// //               {isLogin && (
// //                 <div className="flex justify-end">
// //                   <Button variant="link" className="px-0 text-sm">
// //                     {t('auth.forgotPassword')}
// //                   </Button>
// //                 </div>
// //               )}
// //             </CardContent>

// //             <CardFooter className="flex flex-col gap-4">
// //               <Button type="submit" className="w-full btn-premium" size="lg">
// //                 {isLogin ? t('auth.login') : t('auth.signup')}
// //               </Button>

// //               <div className="text-center text-sm">
// //                 <span className="text-muted-foreground">
// //                   {isLogin ? t('auth.noAccount') : t('auth.hasAccount')}
// //                 </span>{' '}
// //                 <Button
// //                   type="button"
// //                   variant="link"
// //                   className="px-1"
// //                   onClick={() => setIsLogin(!isLogin)}
// //                 >
// //                   {isLogin ? t('auth.signup') : t('auth.login')}
// //                 </Button>
// //               </div>
// //             </CardFooter>
// //           </form>
// //         </Card>

// //         {/* Trust Indicators */}
// //         <div className="mt-8 text-center text-sm text-muted-foreground">
// //           <p>🔒 Secure & encrypted connection</p>
// //         </div>
// //       </motion.div>
// //     </div>
// //   );
// // };

// // export default Login;




// import { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Label } from '@/components/ui/label';
// import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
// import { useLanguage } from '@/contexts/LanguageContext';
// import { Sprout, Mail, Lock, ArrowLeft, Eye, EyeOff, User, Leaf, Shield } from 'lucide-react';
// import abstractBg from '@/assets/abstract-bg.jpg';
// import { motion, AnimatePresence } from 'framer-motion';
// import { toast } from 'sonner';

// // Splash Screen Component
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

//         {/* Feature Highlights */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 1 }}
//           className="mt-12 grid grid-cols-3 gap-6 max-w-md mx-auto"
//         >
//           {[
//             { icon: '🌱', text: 'Smart Analytics' },
//             { icon: '📊', text: 'Live Data' },
//             { icon: '🤖', text: 'AI Powered' },
//           ].map((feature, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 1.2 + index * 0.1 }}
//               className="text-center"
//             >
//               <div className="text-2xl mb-2">{feature.icon}</div>
//               <div className="text-sm text-muted-foreground font-medium">{feature.text}</div>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// const Login = () => {
//   const { t } = useLanguage();
//   const navigate = useNavigate();
//   const [isLogin, setIsLogin] = useState(true);
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [showPassword, setShowPassword] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [name, setName] = useState('');
//   const [showSplash, setShowSplash] = useState(false);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsLoading(true);
    
//     // Simulate API call
//     await new Promise(resolve => setTimeout(resolve, 1000));
    
//     toast.success(isLogin ? '🎉 Welcome back!' : '✨ Account created!');
    
//     // Show splash screen before navigating
//     setShowSplash(true);
//     setTimeout(() => {
//       navigate('/dashboard');
//     }, 3000); // 3 seconds splash screen
//   };

//   const toggleAuthMode = () => {
//     setIsLogin(!isLogin);
//     setEmail('');
//     setPassword('');
//     setName('');
//   };

//   return (
//     <>
//       {/* Splash Screen */}
//       <AnimatePresence>
//         {showSplash && <SplashScreen />}
//       </AnimatePresence>

//       {/* Login Page */}
//       <div 
//         className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden"
//         style={{
//           backgroundImage: `url(${abstractBg})`,
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//           backgroundAttachment: 'fixed'
//         }}
//       >
//         {/* Light Overlay for better readability */}
//         <div className="absolute inset-0 bg-white/10 backdrop-blur-[1px]" />
        
//         {/* Minimal Background Elements */}
//         <div className="absolute inset-0 overflow-hidden pointer-events-none">
//           <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/5 rounded-full blur-xl" />
//           <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-accent/5 rounded-full blur-xl" />
//         </div>

//         {/* Back Button */}
//         <motion.div
//           initial={{ opacity: 0, x: -20 }}
//           animate={{ opacity: 1, x: 0 }}
//           className="absolute top-6 left-6 z-10"
//         >
//           <Link to="/">
//             <Button variant="ghost" size="sm" className="rounded-xl h-9 w-9 bg-white/80 backdrop-blur-sm hover:bg-white">
//               <ArrowLeft className="h-4 w-4" />
//             </Button>
//           </Link>
//         </motion.div>

//         {/* Compact Login Card */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.95 }}
//           animate={{ opacity: 1, scale: 1 }}
//           className="w-full max-w-sm relative z-10"
//         >
//           <Card className="border-0 shadow-2xl bg-white/95 backdrop-blur-sm">
//             {/* Minimal Header Bar */}
//             <div className="h-1 bg-gradient-to-r from-primary to-accent" />
            
//             <CardHeader className="text-center pb-4 space-y-3">
//               <motion.div
//                 initial={{ scale: 0 }}
//                 animate={{ scale: 1 }}
//                 className="flex justify-center"
//               >
//                 <div className="p-2 bg-primary/10 rounded-xl">
//                   <Sprout className="h-8 w-8 text-primary" />
//                 </div>
//               </motion.div>
              
//               <div>
//                 <CardTitle className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
//                   {isLogin ? t('auth.login') : t('auth.signup')}
//                 </CardTitle>
//                 <CardDescription className="text-sm mt-1">
//                   {isLogin ? 'Welcome back' : 'Create your account'}
//                 </CardDescription>
//               </div>
//             </CardHeader>

//             <form onSubmit={handleSubmit}>
//               <CardContent className="space-y-4">
//                 <AnimatePresence mode="wait">
//                   {!isLogin && (
//                     <motion.div
//                       key="name-field"
//                       initial={{ opacity: 0, height: 0 }}
//                       animate={{ opacity: 1, height: "auto" }}
//                       exit={{ opacity: 0, height: 0 }}
//                       className="space-y-2"
//                     >
//                       <Label htmlFor="name" className="text-xs font-medium flex items-center gap-1">
//                         <User className="h-3 w-3 text-primary" />
//                         Full Name
//                       </Label>
//                       <Input
//                         id="name"
//                         type="text"
//                         placeholder="John Farmer"
//                         value={name}
//                         onChange={(e) => setName(e.target.value)}
//                         required={!isLogin}
//                         className="h-9 text-sm rounded-lg bg-white"
//                       />
//                     </motion.div>
//                   )}
//                 </AnimatePresence>

//                 <div className="space-y-2">
//                   <Label htmlFor="email" className="text-xs font-medium flex items-center gap-1">
//                     <Mail className="h-3 w-3 text-primary" />
//                     {t('auth.email')}
//                   </Label>
//                   <Input
//                     id="email"
//                     type="email"
//                     placeholder="farmer@agrihub.com"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     required
//                     className="h-9 text-sm rounded-lg bg-white"
//                   />
//                 </div>

//                 <div className="space-y-2">
//                   <Label htmlFor="password" className="text-xs font-medium flex items-center gap-1">
//                     <Lock className="h-3 w-3 text-primary" />
//                     {t('auth.password')}
//                   </Label>
//                   <div className="relative">
//                     <Input
//                       id="password"
//                       type={showPassword ? "text" : "password"}
//                       placeholder="••••••••"
//                       value={password}
//                       onChange={(e) => setPassword(e.target.value)}
//                       required
//                       className="h-9 text-sm rounded-lg pr-10 bg-white"
//                     />
//                     <Button
//                       type="button"
//                       variant="ghost"
//                       size="sm"
//                       className="absolute right-1 top-1/2 transform -translate-y-1/2 h-7 w-7 rounded-md"
//                       onClick={() => setShowPassword(!showPassword)}
//                     >
//                       {showPassword ? (
//                         <EyeOff className="h-3 w-3" />
//                       ) : (
//                         <Eye className="h-3 w-3" />
//                       )}
//                     </Button>
//                   </div>
//                 </div>

//                 {isLogin && (
//                   <div className="flex justify-end">
//                     <Button variant="link" className="px-0 text-xs h-auto text-primary">
//                       {t('auth.forgotPassword')}
//                     </Button>
//                   </div>
//                 )}
//               </CardContent>

//               <CardFooter className="flex flex-col gap-4 pt-2">
//                 <Button 
//                   type="submit" 
//                   className="w-full h-9 rounded-lg text-sm font-medium bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white"
//                   disabled={isLoading}
//                 >
//                   {isLoading ? (
//                     <div className="flex items-center gap-2">
//                       <div className="h-3 w-3 border-2 border-white border-t-transparent rounded-full animate-spin" />
//                       {isLogin ? 'Signing in...' : 'Creating...'}
//                     </div>
//                   ) : (
//                     <span className="flex items-center gap-1">
//                       <Leaf className="h-3 w-3" />
//                       {isLogin ? t('auth.login') : t('auth.signup')}
//                     </span>
//                   )}
//                 </Button>

//                 <div className="text-center text-xs">
//                   <span className="text-muted-foreground">
//                     {isLogin ? t('auth.noAccount') : t('auth.hasAccount')}
//                   </span>{' '}
//                   <Button
//                     type="button"
//                     variant="link"
//                     className="px-1 text-xs h-auto font-medium text-primary"
//                     onClick={toggleAuthMode}
//                   >
//                     {isLogin ? t('auth.signup') : t('auth.login')}
//                   </Button>
//                 </div>
//               </CardFooter>
//             </form>

//             {/* Minimal Trust Indicator */}
//             <div className="px-6 pb-4">
//               <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
//                 <Shield className="h-3 w-3 text-green-500" />
//                 Secure & Encrypted
//               </div>
//             </div>
//           </Card>

//           {/* Compact Feature Highlights */}
//           <motion.div
//             initial={{ opacity: 0, y: 10 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="mt-6 flex justify-center gap-3 text-xs"
//           >
//             {[
//               { icon: '🌱', text: 'Smart' },
//               { icon: '📊', text: 'Analytics' },
//               { icon: '🤖', text: 'AI' },
//             ].map((feature, index) => (
//               <div
//                 key={index}
//                 className="flex items-center gap-1 px-2 py-1 rounded-lg bg-white/80 backdrop-blur-sm"
//               >
//                 <span>{feature.icon}</span>
//                 <span className="text-muted-foreground font-medium">{feature.text}</span>
//               </div>
//             ))}
//           </motion.div>
//         </motion.div>
//       </div>
//     </>
//   );
// };import { useState, useEffect } from 'react';
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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
      <div className="text-center">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ 
            type: "spring", 
            stiffness: 200, 
            damping: 15,
            duration: 1 
          }}
          className="mb-8"
        >
          <div className="relative">
            <div className="w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-3xl flex items-center justify-center mx-auto shadow-2xl">
              <Sprout className="h-12 w-12 text-white" />
            </div>
            <motion.div
              animate={{ 
                rotate: 360,
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                rotate: { duration: 3, repeat: Infinity, ease: "linear" },
                scale: { duration: 2, repeat: Infinity }
              }}
              className="absolute -inset-4 border-4 border-primary/30 rounded-3xl"
            />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4"
        >
          AgriHub
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-xl text-muted-foreground mb-8"
        >
          Smart Farming Platform
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="flex justify-center space-x-2"
        >
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity,
                delay: index * 0.2
              }}
              className="w-3 h-3 bg-primary rounded-full"
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};


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