import { useState } from 'react'
import { motion } from "framer-motion" 
import Segment from './components/Segment'

function App() {
  const data = [
    {
      "date": "1946/02/14",
      "description": "Se presenta ENIAC, una de las primeras computadoras electrónicas de propósito general.",
      "name": "ENIAC",
      "category": "hardware"
    },
    {
      "date": "1951/12/01",
      "description": "UNIVAC I se convierte en la primera computadora comercial producida en EE.UU.",
      "name": "UNIVAC I",
      "category": "hardware"
    },
    {
      "date": "1954/01/01",
      "description": "Se introduce el primer monitor CRT comercial a color.",
      "name": "Monitor CRT a color",
      "category": "monitores"
    },
    {
      "date": "1956/09/13",
      "description": "IBM lanza el primer disco duro comercial: IBM 305 RAMAC.",
      "name": "IBM 305 RAMAC",
      "category": "dispositivos de almacenamiento"
    },
    {
      "date": "1957/01/01",
      "description": "Se lanza FORTRAN, uno de los primeros lenguajes de programación.",
      "name": "FORTRAN",
      "category": "software"
    },
    {
      "date": "1963/01/01",
      "description": "Se introduce la cinta de casete, que luego se adapta como medio de almacenamiento.",
      "name": "Cinta de casete",
      "category": "dispositivos de almacenamiento"
    },
    {
      "date": "1964/01/01",
      "description": "Se lanza BASIC, lenguaje sencillo para enseñanza de programación.",
      "name": "BASIC",
      "category": "software"
    },
    {
      "date": "1964/10/01",
      "description": "Se desarrolla el primer ratón de computadora en el Stanford Research Institute.",
      "name": "Ratón de Douglas",
      "category": "dispositivos de entrada y salida"
    },
    {
      "date": "1965/01/01",
      "description": "Digital Equipment Corporation lanza el PDP-8, la primera minicomputadora popular.",
      "name": "PDP-8",
      "category": "hardware"
    },
    {
      "date": "1969/01/01",
      "description": "Los terminales de texto comienzan a usarse ampliamente en universidades.",
      "name": "Terminal de texto",
      "category": "monitores"
    },
    {
      "date": "1969/11/03",
      "description": "Ken Thompson y Dennis Ritchie desarrollan UNIX.",
      "name": "UNIX",
      "category": "sistemas operativos"
    },
    {
      "date": "1971/08/01",
      "description": "IBM lanza el disquete de 8 pulgadas.",
      "name": "Disquete de 8 pulgadas",
      "category": "dispositivos de almacenamiento"
    },
    {
      "date": "1971/11/15",
      "description": "Intel presenta el 4004, primer microprocesador comercial.",
      "name": "Intel 4004",
      "category": "cpu"
    },
    {
      "date": "1972/01/01",
      "description": "Dennis Ritchie crea el lenguaje C en los laboratorios Bell.",
      "name": "C",
      "category": "software"
    },
    {
      "date": "1973/06/01",
      "description": "Xerox Alto introduce el ratón como dispositivo de entrada estándar.",
      "name": "Xerox Alto",
      "category": "dispositivos de entrada y salida"
    },
    {
      "date": "1974/04/01",
      "description": "Intel lanza el 8080, procesador usado en la primera computadora personal Altair 8800.",
      "name": "Intel 8080",
      "category": "cpu"
    },
    {
      "date": "1977/04/01",
      "description": "Apple lanza el Apple II, una de las primeras microcomputadoras de éxito masivo.",
      "name": "Apple II",
      "category": "hardware"
    },
    {
      "date": "1978/06/08",
      "description": "Intel introduce el 8086, base de la arquitectura x86.",
      "name": "Intel 8086",
      "category": "cpu"
    },
    {
      "date": "1981/08/12",
      "description": "Microsoft lanza MS-DOS junto con IBM PC.",
      "name": "MS-DOS",
      "category": "sistemas operativos"
    },
    {
      "date": "1981/08/12",
      "description": "IBM PC introduce el teclado estándar moderno.",
      "name": "IBM PC Keyboard",
      "category": "dispositivos de entrada y salida"
    },
    {
      "date": "1981/08/12",
      "description": "IBM PC utiliza monitores monocromáticos MDA.",
      "name": "IBM MDA",
      "category": "monitores"
    },
    {
      "date": "1982/10/01",
      "description": "Philips y Sony lanzan el CD-ROM, revolucionando el almacenamiento óptico.",
      "name": "CD-ROM",
      "category": "dispositivos de almacenamiento"
    },
    {
      "date": "1983/09/27",
      "description": "Se anuncia el proyecto GNU, base del software libre.",
      "name": "GNU",
      "category": "software"
    },
    {
      "date": "1984/01/24",
      "description": "Apple lanza la Macintosh, primera computadora de consumo con interfaz gráfica popular.",
      "name": "Apple Macintosh",
      "category": "hardware"
    },
    {
      "date": "1984/01/24",
      "description": "Apple Macintosh incluye ratón como dispositivo obligatorio.",
      "name": "Macintosh Mouse",
      "category": "dispositivos de entrada y salida"
    },
    {
      "date": "1985/10/17",
      "description": "Intel lanza el 80386, primer procesador de 32 bits de la compañía.",
      "name": "Intel 80386",
      "category": "cpu"
    },
    {
      "date": "1985/11/20",
      "description": "Microsoft lanza Windows 1.0, su primer sistema basado en ventanas.",
      "name": "Windows 1.0",
      "category": "software"
    },
    {
      "date": "1985/11/20",
      "description": "Microsoft presenta Windows 1.0 como entorno gráfico.",
      "name": "Windows 1.0",
      "category": "sistemas operativos"
    },
    {
      "date": "1987/07/01",
      "description": "Se introducen los monitores VGA a color con mejor resolución.",
      "name": "Monitor VGA",
      "category": "monitores"
    },
    {
      "date": "1991/08/25",
      "description": "Linus Torvalds anuncia el núcleo Linux.",
      "name": "Linux",
      "category": "software"
    },
    {
      "date": "1991/09/17",
      "description": "Se libera la primera versión de Linux.",
      "name": "Linux 0.01",
      "category": "sistemas operativos"
    },
    {
      "date": "1993/03/22",
      "description": "Intel lanza el Pentium, estableciendo un estándar de rendimiento.",
      "name": "Intel Pentium",
      "category": "cpu"
    },
    {
      "date": "1994/01/01",
      "description": "Se introduce la unidad Zip de Iomega, con discos de hasta 100 MB.",
      "name": "Iomega Zip",
      "category": "dispositivos de almacenamiento"
    },
    {
      "date": "1995/08/24",
      "description": "Microsoft lanza Windows 95, que revoluciona la interfaz gráfica.",
      "name": "Windows 95",
      "category": "sistemas operativos"
    },
    {
      "date": "1996/01/01",
      "description": "Se popularizan los escáneres planos domésticos.",
      "name": "Escáner plano",
      "category": "dispositivos de entrada y salida"
    },
    {
      "date": "1997/08/15",
      "description": "IBM lanza ThinkPad 770, uno de los primeros portátiles con lector de DVD.",
      "name": "ThinkPad 770",
      "category": "hardware"
    },
    {
      "date": "1999/01/01",
      "description": "Los monitores LCD comienzan a reemplazar los CRT en consumo.",
      "name": "Monitor LCD",
      "category": "monitores"
    },
    {
      "date": "2000/01/01",
      "description": "Las memorias USB comienzan a reemplazar a disquetes y CD.",
      "name": "Memoria USB",
      "category": "dispositivos de almacenamiento"
    },
    {
      "date": "2000/06/19",
      "description": "AMD lanza el Athlon Thunderbird, rival directo de los Pentium.",
      "name": "AMD Athlon",
      "category": "cpu"
    },
    {
      "date": "2001/10/25",
      "description": "Microsoft lanza Windows XP, uno de los sistemas operativos más populares.",
      "name": "Windows XP",
      "category": "sistemas operativos"
    },
    {
      "date": "2004/11/16",
      "description": "Microsoft lanza Kinect, un sistema de captura de movimiento.",
      "name": "Kinect",
      "category": "dispositivos de entrada y salida"
    },
    {
      "date": "2007/01/01",
      "description": "Se popularizan las unidades de estado sólido (SSD).",
      "name": "SSD",
      "category": "dispositivos de almacenamiento"
    },
    {
      "date": "2007/01/09",
      "description": "Apple presenta el iPhone, revolucionando la convergencia entre hardware y software móvil.",
      "name": "iPhone",
      "category": "hardware"
    },
    {
      "date": "2007/01/09",
      "description": "Apple presenta iOS junto con el primer iPhone.",
      "name": "iOS",
      "category": "sistemas operativos"
    },
    {
      "date": "2008/09/02",
      "description": "Google lanza el navegador Chrome.",
      "name": "Google Chrome",
      "category": "software"
    },
    {
      "date": "2010/01/01",
      "description": "Se popularizan los monitores LED de bajo consumo y gran calidad.",
      "name": "Monitor LED",
      "category": "monitores"
    },
    {
      "date": "2014/01/01",
      "description": "Aparecen los primeros monitores 4K de consumo masivo.",
      "name": "Monitor 4K",
      "category": "monitores"
    },
    {
      "date": "2016/03/28",
      "description": "Lanzamiento del Oculus Rift, impulsando la realidad virtual como nueva forma de interacción.",
      "name": "Oculus Rift",
      "category": "dispositivos de entrada y salida"
    },
    {
      "date": "2017/03/02",
      "description": "AMD presenta Ryzen, cambiando la competencia en el mercado de procesadores.",
      "name": "AMD Ryzen",
      "category": "cpu"
    }
  ]

  const [currentPage, setPage] = useState(1)

  return (
    <>
    <header className="flex items-center justify-between px-8 py-4 h-[4rem] sticky bg-[#1c4646] shadow-md">
      <ul className="flex gap-8 text-lg font-medium text-white">
        <li className="hover:text-[#30a08d] transition-colors cursor-pointer" onClick={() => setPage(1)}>
          Visión
        </li>
        <li className="hover:text-[#30a08d] transition-colors cursor-pointer" onClick={() => setPage(0)}>
          Línea del tiempo
        </li>
      </ul>
    </header>
    {
      currentPage == 1 ? 
      <section className="ml-[2rem] mt-[1rem] max-w-[52rem] md:w-[50rem]">
        <motion.h1 
          initial={{ opacity: 0, y: 4 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="font-bold text-3xl text-[#30a08d] mb-3">
          Visión de las computadoras en 10 años
        </motion.h1>

        <motion.hr 
          initial={{ opacity: 0, y: 4 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="w-[52rem] h-[0.25rem] bg-gradient-to-r from-[#337575] to-[#1adf93] border-0 rounded-full mb-6 md:w-[39rem]" 
        />

        <motion.p 
          initial={{ opacity: 0, y: 4 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="font-light w-[48rem] mt-[-1rem] text-gray-700 leading-relaxed text-justify md:w-[38rem]">
          Según las tendencias actuales en el progreso tecnológico, es probable que dentro de 10 años las computadoras tengan parte de su software basados en IA y ML con la finalidad de automatizar los procesos tediosos de los usuarios. Incluso es probable que estas funciones estén integradas en los sistemas operativos para mejorar la UX. Por otro lado, de parte del hardware es probable que el progreso en los transistores de los chips se ralentice y los avances dejen de ser tan significativos a las generaciones anteriores, lo cual no es realmente malo ya que permitiría un enfoque a la sostenibilidad para mantener un margen de progreso, lo que posiblemente llevaría al desarrollo de sistemas de alta eficiencia energética y la nanotecnología basada principalmente en el carbono.
        </motion.p>
      </section>
      :
      <section className='w-full overflow-x-auto overflow-y-hidden no-scrollbar mt-[-8.5rem] md:mt-[-6rem]'>
        <ul 
          className='flex gap-4 px-4 w-max'
          onWheel={(e) => {
            e.preventDefault();
            e.currentTarget.parentElement.scrollLeft += e.deltaY * 2;
          }}
        >
          {data.map((element, index) => (
            <div key={index} className='flex-shrink-0'>
              <Segment 
                name={element["name"]} 
                category={element["category"]} 
                date={element["date"]} 
                description={element["description"]} 
              />
            </div>
          ))}
        </ul>
      </section>
    }
    </>
  )
}

export default App
