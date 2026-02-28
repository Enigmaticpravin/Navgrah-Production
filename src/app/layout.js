import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://www.navgrahproduction.com"),

  title: {
    default: "Navgrah Production | Wedding & Event Decor Experts in Ghaziabad",
    template: "%s | Navgrah Production",
  },

  description:
    "Navgrah Production is a premium wedding and event decor company in Ghaziabad offering theme decoration, wedding decor planning, DJ & sound setup, vendor management and complete event flow management.",

  keywords: [
    "Wedding Decor Ghaziabad",
    "Event Decor Company",
    "Wedding Decor Vaishali",
    "Theme Decoration",
    "Wedding Planner Ghaziabad",
    "Navgrah Production"
  ],

  authors: [{ name: "Navgrah Production" }],
  creator: "Navgrah Production",
  publisher: "Navgrah Production",

  openGraph: {
    title: "Navgrah Production | Wedding & Event Decor Experts",
    description:
      "Premium wedding and event decor services in Ghaziabad. Theme decoration, vendor management, DJ setup and complete event planning.",
    url: "https://www.navgrahproduction.com",
    siteName: "Navgrah Production",
    images: [
      {
        url: "/logo.jpg",
        width: 1200,
        height: 630,
        alt: "Navgrah Production Wedding Decor",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Navgrah Production | Wedding & Event Decor Experts",
    description:
      "Premium wedding and event decor company in Ghaziabad.",
    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}