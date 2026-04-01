"use client"
import { useEffect } from "react"

export default function Cards() {
  useEffect(() => {
    import("hover-tilt/web-component")
  }, [])
  return (
    <div className="flex min-h-dvh flex-col items-center justify-center gap-20 bg-slate-950 py-20">
      {/* @ts-ignore */}
      <hover-tilt
        shadow="true"
        scale-factor="1.1"
        glare-mask="url(/cards/clefairyexfoil.webp)"
        glare-mask-mode="luminance"
        glare-intensity="3"
        blend-mode="hard-light"
        className="sparkles-component [&::part(container)]:rounded-[4.55%/3.5%]"
      >
        <img
          src="/cards/clefairyex.webp"
          alt="Pokémon"
          className="w-[300px] rounded-[inherit] sm:w-[400px]"
        />
        {/* @ts-ignore */}
      </hover-tilt>

      {/* @ts-ignore */}
      <hover-tilt
        shadow="true"
        scale-factor="1.1"
        glare-mask="url(/cards/tyrantrumfoil.webp)"
        glare-mask-mode="luminance"
        glare-intensity={4}
        blend-mode="luminosity"
        className="[&::part(container)]:rounded-[4.55%/3.5%]"
      >
        <img
          src="/cards/tyrantrum.png"
          alt="Pokémon"
          loading="lazy"
          className="w-[300px] rounded-[inherit] sm:w-[400px]"
        />
        {/* @ts-ignore */}
      </hover-tilt>

      <style>{`
        .sparkles-component::part(tilt)::before {
            /* 1. Define the assets */
            --sparkle-rainbow-gradient: linear-gradient(to top left, #f9b3eb, #e2a6fc, #88a2f8, #a2f5a9 90%);
            --sparkles-img: url(/cards/sparkles.webp);
            
            /* 2. Sync movement with the library variables */
            --sparkles-offset: calc(50% + var(--hover-tilt-x, 0.5) * 20px) 
                               calc(50% + var(--hover-tilt-y, 0.5) * 20px);
            
            /* 3. Apply background with !important to override the library's default grey glare */
            background-image:
                var(--sparkle-rainbow-gradient),
                var(--sparkles-img),
                var(--hover-tilt-default-gradient) !important;
            
            background-size: cover, 250px 250px, cover !important;
            background-position: center, var(--sparkles-offset), center !important;
            background-repeat: no-repeat, repeat, no-repeat !important;
            
            /* 4. Blend modes are key for the 'burn' effect */
            background-blend-mode: color-burn, color-dodge !important;
            
            /* 5. Force Visibility */
            opacity: var(--hover-tilt-opacity, 0) !important;
            visibility: visible !important;
            display: block !important;
            
            /* 6. Ensure the mask isn't deleting our sparkles */
            -webkit-mask-composite: source-in !important;
            mask-composite: intersect !important;
        }
      `}</style>
    </div>
  )
}
