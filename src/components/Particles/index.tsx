'use client'
import { useCallback } from 'react';
import './styles.css';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
import { Engine } from 'tsparticles-engine';

export default function ParticlesComponent() {
  const particlesInit = useCallback(async (engine: Engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    //await loadFull(engine);
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: any) => {
    await console.log(container);
  }, []);
  return (
    <Particles
      init={particlesInit}
      options={{
        fpsLimit: 120,
        background: {
        },
        particles: {
          color: { value: "#ffffff" },
          move: {
            direction: "none",
            enable: true,
            outModes: "out",
            random: false,
            speed: 1.5,
            straight: false
          },
          number: { density: { enable: true, area: 700 }, value: 6 },
          opacity: {
            value: 0.9
          },
          shape: {
            type: "image",
            image: [
              {
                src:
                  "https://seeklogo.com/images/R/react-logo-7B3CE81517-seeklogo.com.png"
              },
              {
                src:
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png"
              },
              {
                src:
                  "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
              },
              {
                src:
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png"
              }
              ,
              {
                src:
                  "https://www.drupal.org/files/project-images/nextjs-icon-dark-background.png"
              }
            ]
          },
          size: {
            value: { min: 10, max: 25 }
          }
        }
      }}
    />
  );
}