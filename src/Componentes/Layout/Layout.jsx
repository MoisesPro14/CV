import { Outlet } from "react-router-dom"; 
import Header from "../Encabezado/Header";

export const Layout = () => {
  return (
    <> 
      <div className="overflow-hidden h-screen flex flex-col bg-gradient-to-br from-slate-700 via-slate-950 to-slate-700 animate-gradient-flow">
        <Header />
        <main className="flex-1 overflow-auto ">
            <Outlet />
        </main>    
      </div>
    </>
  );
};

export default Layout;
