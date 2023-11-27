import Bottombar from "./components/Bottombar";
import Sidebar from "./components/Sidebar";

export default function App() {
  return (
    <>
      <div className="flex h-[calc(100vh-theme(space.24))]">
        <Sidebar />
      </div>
      <Bottombar />
    </>
  );
}
