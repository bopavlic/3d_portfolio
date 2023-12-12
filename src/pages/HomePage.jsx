import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import Loader from '../components/Loader';
import Island from '../models/Island';

const HomePage = () => {
  const adjustIslandFOrScreenSize = () => {
    let islandScale = null;
    let islandPosition = [0, 0, 0];
    let islandRotation = [0, 0, 0];

    if (window.innerWidth < 768) {
      islandScale = [0, 0, 0];
    } else {
      islandScale = [1, 1, 1];
    }

    return [islandScale, islandPosition, islandRotation];
  };

  const [islandScale, islandPosition, islandRotation] =
    adjustIslandFOrScreenSize();

  return (
    <section className='w-full h-screen relative'>
      <Canvas
        className='w-full h-screen bg-transparent'
        camera={{
          near: 0.1,
          far: 1000,
        }}
      >
        <Suspense fallback={<Loader />}>
          <Island
            position={islandPosition}
            scale={islandScale}
            rotation={islandRotation}
          />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default HomePage;
