import "./globals.css";

export const metadata = {
  title: "Uttam",
  description: "AI lab research, safety practices, and responsible product updates.",
  icons: {
    icon: "/image.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
