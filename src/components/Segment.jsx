import { motion } from "framer-motion";

const icons = {
    "monitores": "🖥️",
    "sistemas operativos": "💻",
    "software": "📦",
    "dispositivos de entrada y salida": "⌨️",
    "dispositivos de almacenamiento": "💾",
    "cpu": "🧠",
    "hardware": "🔧",
}

export default function Segment({ name, date, description, category }) {
    let icon = icons[category]

    return <>
        <li className='ml-[-0.9rem] flex justify-center items-center'>
            <motion.div
                initial={{ opacity: 0, y: 2 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
                className='bg-[#30a08d] w-[21rem] h-[1rem] rounded-2xl'
            />

            <motion.div
                initial={{ opacity: 0, y: 2 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
                className="flex items-center justify-center h-screen bg-transparent mx-[0.2rem]"
            >
                <motion.div
                    initial={{ opacity: 0, y: 2 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    viewport={{ once: true }}
                    className="w-[1.4rem] h-[1.4rem] rounded-full bg-[#30a08d] border-4 z-10 border-[#a5e0d6] relative"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 2 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        viewport={{ once: true }}
                        className="w-[0.5rem] h-[5rem] bg-[#30a08d] absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full -z-10 rounded-2xl my-[-0.4rem]"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 2 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4 }}
                            viewport={{ once: true }}
                            className='w-[2.2rem] h-[2.2rem] flex justify-center items-center relative -left-[0.9rem] my-[-2rem] bg-[#30a08d] rounded-full'
                        >
                            <span className='text-center text-xl shadow-md cursor-default bg-transparent rounded-full'>
                                {icon}
                            </span>
                        </motion.div>
                    </motion.div>

                    <ul className='flex-col ml-[-15rem]'>
                        <motion.li
                            initial={{ opacity: 0, y: 2 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4 }}
                            viewport={{ once: true }}
                        >
                            <motion.div
                                initial={{ opacity: 0, y: 2 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4 }}
                                viewport={{ once: true }}
                                className='w-[18rem] h-[1.5rem] mt-[1.5rem] mx-[-4.4rem] rounded-md bg-[#89c0b7] shadow-sm'
                                id='facts'
                            >
                                <p className='font-bold font-sans text-center items-center flex justify-left ml-[0.3rem] text-[#e7fcf1]'>
                                    {name} - {date}
                                </p>
                            </motion.div>
                        </motion.li>

                        <motion.li
                            initial={{ opacity: 0, y: 2 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4 }}
                            viewport={{ once: true }}
                        >
                            <motion.div
                                initial={{ opacity: 0, y: 2 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4 }}
                                viewport={{ once: true }}
                                className='w-[16rem] h-fit mt-[0.5rem] mx-[-4.4rem] rounded-md bg-[#ffffff] border-l-[#3b9687] border-l-4 shadow-sm'
                                id='facts'
                            >
                                <p className='font-thin font-sans ml-[0.2rem] text-black'>{description}</p>
                            </motion.div>
                        </motion.li>

                        <motion.li
                            initial={{ opacity: 0, y: 2 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4 }}
                            viewport={{ once: true }}
                        >
                            <motion.div
                                initial={{ opacity: 0, y: 2 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4 }}
                                viewport={{ once: true }}
                                className='w-[12rem] h-fit mt-[0.5rem] mx-[-4.4rem] rounded-md bg-transparent'
                            >
                                <img
                                    src={"/images/" + name + ".webp"}
                                    alt="Referencia"
                                    className='rounded-2xl max-h-[10rem] shadow-md w-[12rem]'
                                />
                            </motion.div>
                        </motion.li>
                    </ul>
                </motion.div>
            </motion.div>
        </li>
    </>
}