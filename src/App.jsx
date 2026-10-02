import "./App.css";
import Count from "./components/Count";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      <main className="w-full min-h-screen max-w-[1200] flex items-center justify-center">
        <div className="">
          <Hero />
          <Count />
        </div>
      </main>
    </>
  );
}

export default App;
