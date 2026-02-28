import "./globals.css";

export const metadata = {
  title: "Navgrah Production | Decor & Entertainment",
  description: "Premium wedding and event decor company in Ghaziabad",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-800">
        {children}
      </body>
    </html>
  );
}