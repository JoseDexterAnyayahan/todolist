import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata = {
  title: "ToDo UI Demo",
  description: "Mobile UI/UX ToDo Demo",
  manifest: "/manifest.json",
  themeColor: "#000000",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "ToDo",
  },
};


export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-black text-white antialiased">
        
        {/* DESKTOP / TABLET BLOCK SCREEN */}
        <div className="hidden md:flex h-screen w-full items-center justify-center bg-gradient-to-br from-zinc-950 via-black to-zinc-900">
          <div className="text-center space-y-4 max-w-md px-6">
            <h1 className="text-2xl font-semibold tracking-tight">
              Mobile Experience Only 📱
            </h1>
            <p className="text-zinc-400 leading-relaxed">
              This demo is designed exclusively for mobile screens to
              showcase UI/UX interaction and layout decisions.
            </p>
            <p className="text-sm text-zinc-500">
              Please resize your browser or open on your phone.
            </p>
          </div>
        </div>

        {/* MOBILE APP CONTAINER */}
        <div className="md:hidden min-h-screen w-full relative overflow-hidden">
          
          {/* SUBTLE BACKGROUND GLOW */}
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute top-[-20%] right-[-20%] w-[300px] h-[300px] bg-amber-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-[-20%] left-[-20%] w-[300px] h-[300px] bg-teal-500/10 rounded-full blur-3xl" />
          </div>

          {/* MAIN APP */}
          <main className="relative min-h-screen flex flex-col">
            {children}
          </main>

        </div>
      </body>
    </html>
  );
}
