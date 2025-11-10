import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Environment } from '@react-three/drei';
import { FloatingCube, FloatingSphere } from './FloatingElement';
import { Suspense } from 'react';

export const Scene3D = () => {
  return (
    <div className="w-full h-full">
      <Canvas>
        <Suspense fallback={null}>
          <PerspectiveCamera makeDefault position={[3, 2, 5]} />
          <OrbitControls 
            enableZoom={false} 
            autoRotate 
            autoRotateSpeed={0.5}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 3}
          />
          
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <pointLight position={[-10, -10, -5]} intensity={0.5} color="#4CAF50" />
          
          <FloatingCube />
          <FloatingSphere position={[2, 0, 0]} />
          <FloatingSphere position={[-2, 0, 0]} />
          
          <Environment preset="sunset" />
        </Suspense>
      </Canvas>
    </div>
  );
};
