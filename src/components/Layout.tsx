import { Footer, Header, Main } from ".";

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div className="relative min-h-screen">
      <Header />
      <Main>{children}</Main>
      <Footer />
    </div>
  );
}
