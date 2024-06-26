'use client'
import './styles.css'
import { cn } from "@/lib/utils"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { useEffect } from "react"
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'
import { useTranslations } from "next-intl";
import ParticleLogo from '../Logo'
import { TbFileCv } from 'react-icons/tb'

type CardProps = React.ComponentProps<typeof Card>

export function CardDemo({ className, ...props }: CardProps) {
  const t = useTranslations("Home");

  useEffect(() => {
    const all = document.querySelectorAll(".card");

    const mouseMoveHandler = (ev: { clientX: number; clientY: number; }) => {
      all.forEach((e) => {
        const blob = e.querySelector(".blob") as HTMLElement;
        const fblob = e.querySelector(".fakeblob") as HTMLElement;
        const rec = fblob?.getBoundingClientRect();
        if (blob && rec) {
          blob.style.opacity = "1";

          blob.animate(
            [
              {
                transform: `translate(${(ev.clientX - rec.left) - (rec.width / 2)
                  }px,${(ev.clientY - rec.top) - (rec.height / 2)}px)`
              }
            ],
            {
              duration: 300,
              fill: "forwards"
            }
          );
        }
      });
    };

    window.addEventListener("mousemove", mouseMoveHandler);

    return () => {
      window.removeEventListener("mousemove", mouseMoveHandler);
    };
  }, []);
  return (
    <div className="card">
      <Card className={cn("inner xl:w-[70rem] w-[95%] m-auto sm:w-[42rem] lg:w-[60rem] 2xl:backdrop-blur-[80px]", className)} {...props}>
        <CardHeader className="flex flex-row justify-between items-center m-0">
          <div>
            <svg
              width={80.6652719133318}
              height={82.9156249999999}
              viewBox="0 0 350 283.522364417264"
              {...props as React.SVGProps<SVGSVGElement>}
            >
              <defs id="SvgjsDefs1328" />
              <g
                id="SvgjsG1329"
                transform="matrix(4.872,0,0,4.872,3,20)"
                fill="#111111"
              >
                <circle cx={25} cy={25} r={25} />
              </g>
              <g
                id="SvgjsG1330"
                transform="matrix(3.8567485817578264,0,0,3.8567485817578264,48.42975517424703,   -2.851217692121196)"
                fill="#fcfcfc"
              >
                <path d="M10.38 46.92 l0 -23.28 l-1.44 -0.42 c-0.48 -0.18 -0.84 -0.66 -0.84 -1.14 l0    -5.94 c0 -0.42 0.42 -1.14 0.9 -1.14 l18.18 0 c7.5 0 10.02 5.04 10.02 11.7     l0 2.46 l-0.12 3.24 c-0.12 1.98 -1.08 4.26 -2.52 5.64 c-0.06 0.06      -0.42 0.3 -0.42 0.36 c0.06 0.06 0.18 0.18 0.24 0.18 c1.8 1.44 2.46      4.14 2.52 6.36 l0.06 1.98 c0.24 0.12 1.2 0.42 1.44 0.48 c0.48 0.18      0.9 0.54 0.9 1.08 l0 6 c0 0.54 -0.48 1.14 -1.02 1.14 l-8.46 0 c-0.54      0 -0.96 -0.72 -0.96 -1.2 l0 -7.74 c0 -1.62 -0.72 -3.6 -2.58 -3.6 l-7.74      0 l0 1.02 l0.78 0 l-0.78 0.6 l0 0.96 l2.04 -1.56 l0.96 0 l-3 2.28 l0 0.54      l0.36 0.12 l0 0 l3.9 -2.94 l1.02 0 l-4.2 3.12 c0.78 0.3 1.32 0.6 1.32 1.5 l0      5.58 c0 0.54 -0.36 1.32 -1.02 1.32 l-10.86 0 c-0.54 0 -0.96 -0.66 -0.96 -1.14       l0 -5.94 c0 -0.48 0.36 -0.96 0.78 -1.08 z M3 21.240000000000002 l0 -0.72 l1.56        -1.14 l0.96 0 z M3 22.200000000000003 l3.78 -2.82 l0.3 0 l0 0.48 l-4.08 3.06         l0 -0.72 z M3 23.880000000000003 l4.08 -3.06 l0 0.72 l-4.08 3.06 l0 -0.72 z M3         26.28 l0 -0.72 l4.02 -3 c0.12 0.06 0.12 0.48 0.12 0.66 z M3.18          27.119999999999997 l4.26 -3.18 c0.18 0.12 0.3 0.18 0.54 0.3 l-4.32          3.24 c-0.12 0 -0.48 -0.36 -0.48 -0.36 z M18.54 23.939999999999998 l0          1.62 c0.12 -0.06 0.72 -0.54 0.84 -0.6 l0.96 0 l-1.8 1.32 l0 0.96 l3.06          -2.28 l0.96 0 l-4.02 3 l0 6.18 l6.48 0 l3.06 -2.28 c0 0.18 0 0.72 -0.12          0.84 l-1.86 1.38 c2.88 0 2.94 -2.16 3 -4.32 l0 -0.9 c0 -0.96 0 -1.98 -0.18          -2.94 c-0.24 -1.98 -1.56 -1.98 -3.3 -1.98 l-0.36 0 l-6.72 0 z M5.16 27.96          l-0.66 -0.18 l4.32 -3.24 l0.06 0 l0.54 0.12 l0 0.18 l-4.14 3.12 c-0.06 0          -0.06 0.06 -0.12 0.06 l0 -0.06 z M19.38 28.32 l4.5 -3.36 l0.9 0 l-4.44 3.36          l-0.96 0 z M21.6 28.38 l-0.06 0 l4.38 -3.3 c0.18 0 0.72 0.06 0.78 0.12 l-4.32          3.24 c0 0.06 0 0.06 -0.06 0.06 c-0.24 0 -0.54 -0.12 -0.72 -0.12 z M23.16 28.8          l4.26 -3.12 c0.18 0.06 0.36 0.3 0.36 0.42 l-4.2 3.12 c-0.12 -0.12 -0.3 -0.24          -0.42 -0.42 z M5.34 29.58 l0 -0.72 l4.08 -3.06 l0 0.72 z M23.82 30 l4.14 -3.12 l0 0.06 s0.06 0.36 0.06 0.66 l-4.14 3.06 z M5.34 31.26 l0 -0.72 l4.08 -3.12 l0 0.78 z M24 31.56 l4.08 -3.06 c0.06 0.12 0.06 0.42 0.06 0.66 l-4.14 3.12 l0 -0.6 l0 -0.12 z M5.34 32.22 l4.08 -3.12 l0 0.78 l-4.08 3.06 l0 -0.72 z M24 33.18 l4.14 -3.06 l0 0.3 l0 0.3 c0 0.06 0 0.12 -0.06 0.12 l-4.08 3.12 l0 -0.78 z M5.34 34.56 l0 -0.66 l4.08 -3.12 l0 0.66 z M5.34 36.239999999999995 l0 -0.78 l4.08 -3.06 l0 0.72 z M5.34 37.14 l4.08 -3.06 l0 0.72 l-4.08 3.06 l0 -0.72 z M26.04 34.08 l0 0 z M5.34 38.82 l4.08 -3.06 l0 0.72 l-4.08 3.06 l0 -0.72 z M5.34 41.22 l0 -0.72 l4.08 -3.06 l0 0.72 z M5.34 42.18 l4.08 -3.06 l0 0.72 l-4.08 3.06 l0 -0.72 z M5.34 43.86 l4.08 -3.06 l0 0.72 l-4.08 3.06 l0 -0.72 z M5.34 46.26 l0 -0.72 l4.08 -3.06 l0 0.72 z M20.58 47.46 l4.5 -3.36 c0.3 0 0.6 0 0.84 0.12 l-4.38 3.24 c-0.06 0.06 0 0.06 -0.06 0.06 c-0.3 0 -0.6 -0.06 -0.9 -0.06 z M5.34 47.94 l0 -0.72 l4.02 -3 c0 -0.06 0.06 -0.06 0.06 -0.06 l0 0.72 z M22.38 47.82 l4.26 -3.24 c0.06 0 0.42 0.36 0.42 0.42 l-4.26 3.18 c-0.12 -0.12 -0.3 -0.24 -0.42 -0.36 z M23.28 48.84 c0 -0.06 0.06 -0.06 0.06 -0.06 l4.14 -3.12 l0.18 0.54 c0 0.06 0 0.06 -0.06 0.06 l-4.08 3.06 c-0.12 -0.12 -0.24 -0.36 -0.24 -0.48 z M5.34 48.9 l4.08 -3.06 l0 0.72 l-4.08 3.06 l0 -0.72 z M23.7 50.16 l4.08 -3.06 s0.06 0.06 0.06 0.12 l0 0.54 l-4.14 3.12 l0 -0.06 l0 -0.66 z M23.76 52.5 l0 -0.72 l4.08 -3.06 l0 0.72 z M5.34 51.3 l0 -0.72 l1.86 -1.44 c-0.06 0.3 -0.06 0.54 -0.12 0.78 z M23.76 53.46 l4.08 -3.06 l0 0.72 l-4.08 3.06 l0 -0.72 z M3 54.72 l0 -0.72 l4.08 -3.12 l0 0.78 z M3.78 51.84 l1.38 -0.42 l-2.16 1.62 c0 -0.6 0.3 -1.02 0.78 -1.2 z M23.76 55.86 l0 -0.72 l4.08 -3.06 l0 0.72 z M3 55.68 l4.08 -3.12 l0 0.72 l-4.08 3.06 l0 -0.66 z M23.76 57.54 l0 -0.72 l4.08 -3.06 l0 0.72 z M3 58.02 l0 -0.72 l4.02 -3.06 l0.06 0 l0 0.72 z M23.76 58.5 l4.08 -3.06 c0.06 0.12 0.18 0.48 0.18 0.6 l-4.2 3.12 c-0.06 -0.18 -0.06 -0.36 -0.06 -0.54 l0 -0.12 z M3 58.98 c0 -0.06 0 -0.06 0.06 -0.06 l4.08 -3.06 c0.12 0.18 0.24 0.3 0.36 0.48 l-4.2 3.12 l-0.06 0.06 c-0.06 0 -0.24 -0.48 -0.24 -0.54 z M24.24 59.82 l4.32 -3.24 l0.18 0 c0.18 0.06 0.42 0.06 0.6 0.06 l-4.44 3.36 c-0.24 0 -0.42 -0.06 -0.66 -0.18 z M3.9 59.94 l4.44 -3.3 l0.96 0 l-4.44 3.36 l-0.96 0 l0 -0.06 z M7.08 60 l-0.96 0 l4.44 -3.36 l0.96 0 z M8.34 60 l4.44 -3.36 l1.02 0 l-4.5 3.36 l-0.96 0 z M10.56 60 l4.5 -3.36 l0.72 0 l0 0.18 l-4.2 3.18 l-1.02 0 z M27.12 60 l-0.96 0 l4.44 -3.36 l0.96 0 z M29.34 60 l-0.96 0 l4.44 -3.36 l1.02 0 z M30.6 60 l3.6 -2.7 l0 0.72 l-2.58 1.98 l-1.02 0 z M13.8 60 l-0.96 0 l2.94 -2.28 l0 0.78 z M32.88 60 l1.32 -1.02 c0 0.54 -0.66 1.02 -1.14 1.02 l-0.18 0 z" />
              </g>
            </svg>
          </div>
          <div className="flex gap-4">
            <a href={`/documents/${t("documents")}`} download target="_blank" rel="noopener noreferrer">
              <TbFileCv color='#fff' size={28} />
            </a>
            <a href="mailto:rafaelmonroy001@gmail.com" target="_blank" rel="noopener noreferrer">
              <SiGmail color='#fff' size={28} />
            </a>
            <a href="https://github.com/RafaM-dev" target="_blank" rel="noopener noreferrer">
              <FaGithub color='#fff' size={28} />
            </a>
            <a href="https://www.linkedin.com/in/rafaelmonroyr/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin color='#fff' size={28} />
            </a>

          </div>
        </CardHeader>
        <CardContent className="grid lg:grid-cols-4 grid-cols-1 gap-4 mt-2">
          <div className="col-span-3 flex flex-col gap-4">
            <CardTitle className="lg:text-[5rem] text-2xl md:text-3xl">{t("welcome")}</CardTitle>
            <CardDescription className="text-white lg:text-xl text-sm md:text-xl xl:mt-8 !leading-8">
              {t("about")}
            </CardDescription>
            <CardDescription className="text-white lg:text-xl text-sm md:text-xl !leading-8">
              {t("about2")}
            </CardDescription>
          </div>
          <CardContent className="col-span-1 p-0 lg:justify-self-end">
            <CardTitle className="text-[1.5rem] md:text-3xl">{t("projects")}</CardTitle>
            <ul className="flex flex-col gap-4 text-white mt-4 underline font-montserrat md:text-xl">
              <li><a href="https://www.smrealestate.com.co/" target="_blank" rel="noopener noreferrer">Sm Real Estate</a></li>
              <li><a href="https://visionemos.sabaneta.gov.co/" target="_blank" rel="noopener noreferrer">Visionemos Sabaneta</a></li>
              <li><a href="https://tupfy.netlify.app/" target="_blank" rel="noopener noreferrer">Tupfy</a></li>
              <li><a href="https://github.com/RafaM-dev/NequiClone" target="_blank" rel="noopener noreferrer">Nequi Clone</a></li>
              <li><a href="https://gym-webpage.netlify.app/" target="_blank" rel="noopener noreferrer">Gym Web</a></li>
              <li><a href="https://inmowebsite.netlify.app/" target="_blank" rel="noopener noreferrer">InmoWeb</a></li>
            </ul>
          </CardContent>
        </CardContent>
        <CardFooter className="flex justify-between lg:flex-row flex-col">
          <div className='flex flex-wrap lg:flex-nowrap '>
            <ParticleLogo scale={0.1} maxParticles={1000} entropy={5} />
            <ParticleLogo color='#D4B830' src='/javascript-logo.png' scale={0.2} maxParticles={2500} entropy={0} />
            <ParticleLogo color='#fff' src='/nextjs-logo.png' scale={0.06} maxParticles={2500} entropy={0} />
            <ParticleLogo color='#DE002D' src='/angular-logo.png' scale={0.15} maxParticles={2500} entropy={0} />
          </div>
          <div className='flex flex-col justify-end mt-auto items-end w-full'>
            <CardDescription className="text-white text-[.9rem]">
              © 2024 rafadev.com
            </CardDescription>
          </div>
        </CardFooter>
      </Card>
      <div className="blob"></div>
      <div className="fakeblob"></div>
    </div>
  )
}
