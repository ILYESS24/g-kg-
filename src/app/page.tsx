import { FramerCarousel } from "@/components/framer-carousel";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Framer Carousel Component
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Un composant carousel élégant avec animations fluides, utilisant Framer Motion et shadcn/ui.
            Naviguez entre les images avec les boutons ou les indicateurs.
          </p>
        </div>
        <FramerCarousel />
      </div>
    </div>
  );
}
