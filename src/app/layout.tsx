import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Valencio Saez Guitar",
  description: "Official website of Valencio Saez — Fingerstyle Guitarist.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
