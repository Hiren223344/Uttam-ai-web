import "./globals.css";

export const metadata = {
  title: "Stellar AI Lab",
  description: "AI lab research, safety practices, and responsible product updates.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
