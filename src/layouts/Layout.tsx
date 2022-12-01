import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <body className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {children}
        </body>
      </main>
      <Footer />
    </div>
  );
}
