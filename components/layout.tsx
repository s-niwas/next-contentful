import Link from "next/link";

export default function Layout({ children }: any) {
  return (
    <div className="min-h-screen flex  flex-col justify-between">
      {/* <header className="text-center mx-16"></header> */}
      <div className=" mx-auto py-5 w-full">{children}</div>
      <footer className="relative flex  w-full items-center justify-center">
        <div className="items-center justify-center p-4 text-center text-xs">
          🚀 Launching your 🌈 vision with our 📚 expertise
          <br />
          Incresco Technology Solutions Private limited
        </div>
      </footer>
    </div>
  );
}
