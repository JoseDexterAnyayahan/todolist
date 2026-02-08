import "./globals.css";

export const metadata = {
  title: "ToDo UI Demo",
  description: "UI/UX Static Demo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-background text-foreground">
        <main className="min-h-screen flex justify-center">
          <div className="w-full max-w-sm border-x min-h-screen">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
