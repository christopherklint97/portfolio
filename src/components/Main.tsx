type Props = {
  children: React.ReactNode;
};

export default function Main({ children }: Props) {
  return (
    <main className="max-w-screen-md px-4 pt-8 mx-auto pb-28">{children}</main>
  );
}
