import Footer from "@/components/navigation/Footer";
import Header from "@/components/navigation/Header";

export default function Layout({ children, global }) {
  const { navigation, footer } = global
  return (
    <>
      <Header navigation={navigation} />
        <main className={`container`}>
          {children}
        </main>
      <Footer footer={footer} />
    </>
  );
}
