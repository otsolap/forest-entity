import { fetchAPI } from "@/utils/fetch-api";
import config from "@/utils/config";
import Footer from "@/components/navigation/Footer";
import Header from "@/components/navigation/Header";
import { Bitter, Roboto } from 'next/font/google';
import "@/styles/globals.scss"

const roboto = Roboto({
    subsets: ['latin'],
    variable: '--font-paragraph',
    weight: ['100', '300', '400', '500', '700', '900'],
    display: 'swap',
  });
   
const bitter = Bitter({
    subsets: ['latin'],
    variable: '--font-heading',
    weight: ['100', '300', '400', '500', '700', '900'],
    display: 'swap',
});

const FALLBACK_SEO = {
  title: "Strapi Starter Next Blog",
  description: "Strapi Starter Next Blog",
}



async function getGlobal() {
    try {
      const token = process.env.NEXT_PUBLIC_API_TOKEN;
  
      if (!token) {
        throw new Error("The Strapi API Token environment variable is not set.");
      }
      
      const options = { headers: { Authorization: `Bearer ${token}` } };

      const [navigationResponse, footerResponse] = await Promise.all([
        fetchAPI('/navigation', { populate: [config.global.API_NAVIGATION_QUERY], options }),
        fetchAPI('/footer', { populate: [config.global.API_FOOTER_QUERY], options}),
      ]);

      if (!navigationResponse.data || !footerResponse.data) {
        throw new Error('Failed to fetch API data');
      }
  
      const globalData = {
        navigation: navigationResponse.data,
        footer: footerResponse.data,
      };
  
      return globalData;
    } catch (error) {
      console.error('fetch Global Data error: ', error);
      return null;
    }
}

export default async function RootLayout({ children }) {
    const global = await getGlobal();
    if (!global?.navigation || !global?.footer) return null;

    const navigation = global.navigation;
    const footer = global.footer;

    return (
        <html lang="en" className={`${roboto.variable} ${bitter.variable}`}>
            <body>
                <Header navigation={navigation} />
                    <main className={`container`}>
                        {children}
                    </main>
                <Footer footer={footer} />
            </body>
        </html>
    );
}