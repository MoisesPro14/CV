import { SiLaravel, SiMysql, SiTailwindcss, SiOracle } from "react-icons/si";
import { FaReact, FaPython, FaGithub } from "react-icons/fa";
import { DiMsqlServer, DiCss3 } from "react-icons/di";
import { TbBrandCSharp } from "react-icons/tb";
import { AiOutlineJava } from "react-icons/ai";
import { FaHtml5 } from "react-icons/fa6";
import Footer from "../Footer/Footer";
// import { Link } from "react-router-dom";

export const Technologies = () => {
  return (
    <div className="mt-6 bg-gray-300 rounded-lg p-6">
        <h2 className="text-3xl font-bold text-gray-800 text-center my-4">Tecnologías</h2>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 mt-4">
            {/* Card Frontend */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <h2 className="text-xl font-semibold text-slate-800 mb-4">Frontend</h2>
                <div className="flex justify-center flex-wrap gap-4">
                    <div className="flex flex-col items-center">
                        <a href="https://www.w3schools.com/html/html_intro.asp" target="_blank">
                            <FaHtml5 className="w-8 h-8 text-red-600 transform transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-red-500/50" />
                        </a>
                        
                        <h3 className="text-lg text-gray-800 mt-2 font-serif">HTML</h3>
                    </div>
                    <div className="flex flex-col items-center">
                        <a href="https://www.w3schools.com/css/default.asp" target="_blank">
                            <DiCss3 className="w-8 h-8 text-blue-600 transform transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/50" />
                        </a>

                        <h3 className="text-lg text-gray-800 mt-2 font-serif">CSS</h3>
                    </div>
                    <div className="flex flex-col items-center">
                        <a href="https://tailwindcss.com/docs/installation" target="_blank">
                            <SiTailwindcss className="w-8 h-8 text-sky-400 transform transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-sky-500/50" />
                        </a>

                        <h3 className="text-lg text-gray-800 mt-2 font-serif">TailwindCss</h3>
                    </div>
                    <div className="flex flex-col items-center">

                        <a href="https://react.dev/learn" target="_blank">
                            <FaReact className="w-8 h-8 text-blue-500 transform transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/50" />
                        </a>
                        <h3 className="text-lg text-gray-800 mt-2 font-serif">React</h3>
                    </div>
                </div>
            </div>

            {/* Card Backend */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <h2 className="text-xl font-semibold text-slate-800 mb-4">Backend</h2>
                <div className="flex justify-center flex-wrap gap-4">
                    <div className="flex flex-col items-center">
                        <a href="https://laravel.com/docs/11.x/readme" target="_blank">
                            <SiLaravel className="w-8 h-8 text-indigo-600 transform transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-indigo-500/50" />
                        </a>
                        <h3 className="text-lg text-gray-800 mt-2 font-serif">Laravel</h3>
                    </div>
                    <div className="flex flex-col items-center">
                        <a href="https://docs.python.org/3/" target="_blank">                
                            <FaPython className="w-8 h-8 text-yellow-500 transform transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-yellow-500/50" />
                        </a>
                        <h3 className="text-lg text-gray-800 mt-2 font-serif" >Python</h3>
                    </div>
                    <div className="flex flex-col items-center">
                        <a href="https://learn.microsoft.com/en-us/dotnet/csharp/" target="_blank">
                            <TbBrandCSharp className="w-8 h-8 text-blue-600 transform transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/50" />
                        </a>
                        <h3 className="text-lg text-gray-800 mt-2 font-serif">CSharp</h3>
                    </div>
                    <div className="flex flex-col items-center">

                        <a href="https://docs.oracle.com/en/java/" target="_blank">
                            <AiOutlineJava className="w-8 h-8 text-red-700 transform transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-red-500/50" />
                        </a>
                        <h3 className="text-lg text-gray-800 mt-2 font-serif">Java</h3>
                    </div>
                </div>
            </div>

            {/* Card Base de Datos */}
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <h2 className="text-xl font-semibold text-slate-800 mb-4">Base de Datos</h2>
                <div className="flex justify-center flex-wrap gap-4">
                    <div className="flex flex-col items-center">

                        <a href="https://learn.microsoft.com/en-us/sql/sql-server/?view=sql-server-ver16" target="_blank">
                            <DiMsqlServer className="w-8 h-8 text-blue-700 transform transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-700/50" />
                        </a>
                        <h3 className="text-lg text-gray-800 mt-2 font-serif">SQL Server</h3>
                    </div>
                    <div className="flex flex-col items-center">
                        <a href="https://dev.mysql.com/doc/" target="_blank">
                            <SiMysql className="w-8 h-8 text-orange-500 transform transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-orange-500/50" />
                        </a>
                        <h3 className="text-lg text-gray-800 mt-2 font-serif">Msql</h3>
                    </div>
                    <div className="flex flex-col items-center">
                        <a href="https://www.oracle.com/pe/database/sqldeveloper/" target="_blank">
                            <SiOracle className="w-8 h-8 text-red-600 transform transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-red-600/50" />
                        </a>
                        <h3 className="text-lg text-gray-800 mt-2 font-serif">Sql Oracle</h3>
                    </div>
                </div>
            </div>
        </div>

        <Footer />
        
    </div>
  );
};

export default Technologies;