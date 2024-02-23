import { Jost } from "next/font/google";
import "./globals.css";
import Header from "./_component/Header";

const inter = Jost({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="md:px-20">
          <Header />
        {children}
        </div>
        </body>
    </html>
  );
}
