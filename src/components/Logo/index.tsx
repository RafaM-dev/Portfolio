import * as React from "react";
import ParticleImage, { Vector, forces } from "react-particle-image";

const ParticleLogo = ({
    src = "/react-logo.png",
    scale = 0.75,
    entropy = 20,
    maxParticles = 4000,
    color = "#61dafb",
    radius = Math.random() * 1.5 + 0.5,
    mass = 80,
    friction = 0.15
}) => {
    const particleOptions = {
        filter: ({ x, y, image }: { x: number, y: number, image: any }) => {
            const pixel = image.get(x, y);
            return pixel.b > 50;
        },
        color: ({ x, y, image }: { x: number, y: number, image: any }) => color,
        radius: () => radius,
        mass: () => mass,
        friction: () => friction,
        initialPosition: ({ canvasDimensions }: { canvasDimensions: { width: number, height: number } }) => {
            return new Vector(canvasDimensions.width , canvasDimensions.height );
        }
    };

    const motionForce = (x: number, y: number) => {
        return forces.disturbance(x, y, 3);
    };

    return (
        <ParticleImage
            src={src}
            scale={scale}
            entropy={entropy}
            maxParticles={maxParticles}
            mouseMoveForce={motionForce}
            particleOptions={particleOptions}
            backgroundColor="transparent"
            width={100}
            height={100}
        />
    );
};

export default ParticleLogo;