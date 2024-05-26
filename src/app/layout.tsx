import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header/Header";
import AuthorCard from "@/components/AuthorCard/AuthorCard";
import Provider from "./Provider";

export const metadata: Metadata = {
  // https://nextjs.org/docs/app/api-reference/functions/generate-metadata#title
  title: "Abarantia - Your Blog Platform",
  // https://nextjs.org/docs/app/api-reference/functions/generate-metadata#description
  description: "Share your thoughts and knowledge in one place.",
  // https://nextjs.org/docs/app/api-reference/functions/generate-metadata#basic-fields
  keywords: ["Next.js", "React", "Blog"],
  authors: [{ name: "gahgsp", url: "https://github.com/gahgsp/abarantia" }],
  creator: "gahgsp",
  // Controls how data is detected and formatted on mobile devices.
  formatDetection: {
    email: false, // Prevents e-mails from being automatically linked.
    address: false, // Prevents addresses from being detected and formatted.
    telephone: false, // Prevents telephone numbers from being automatically linked.
  },
  // https://nextjs.org/docs/app/api-reference/functions/generate-metadata#robots
  robots: {
    index: false, // This tells the crawler to not index this page (this means: won't appear in search results).
    follow: true, // The crawler can follow links, therefore, discovering new content navigating through new pages.
    nocache: true, // No caching. The user always sees the newest version of the webiste.
  },
  category: "blogging",
};

interface RootLayoutProps {
  readonly children: React.ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en">
      <body className="px-40 bg-[#89CFF0]">
        <Header />
        <main className="flex min-h-screen items-center justify-between py-12">
          <Provider>
            <aside className="max-w-[300px] min-h-screen">
              <AuthorCard />
            </aside>
            <div className="w-full min-h-screen ml-2">{children}</div>
          </Provider>
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
