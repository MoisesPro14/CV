import { Outlet } from "react-router-dom"; 
import Header from "../Encabezado/Header";

export const Layout = () => {
  return (
    <> 
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-600 via-slate-950 to-slate-600 animate-gradient-flow">
        <Header />
        <main className="flex-1 mb-16">
            <Outlet />
        </main>    
      </div>
    </>
  );
};

export default Layout;
