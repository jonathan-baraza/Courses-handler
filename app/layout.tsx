import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Baraza's Repos",
  description: "Repo handler application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`bg-gray-700 text-white ${poppins.className}`}>
        <Header />
        <main className="container mx-auto">{children}</main>
      </body>
    </html>
  );
}
