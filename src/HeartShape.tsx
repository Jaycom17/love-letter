import { motion } from 'framer-motion';

function HeartShape({message, handleClick} : {message: string, handleClick: () => void}) {

  return (
        <motion.button
      onClick={handleClick}
      className="w-48 h-48 flex flex-col justify-center items-center"
      initial={{ scale: 1 }}
      whileTap={{ scale: 0.9 }}
      whileHover={{ scale: 1.05 }}
    >
        <h2 className="translate-y-16 z-10">{message}</h2>
      <div className="flex">
        {/* Primera parte del corazón */}
        <div className="w-20 h-20 bg-red-500 rounded-[100%] translate-x-2"></div>
        {/* Segunda parte del corazón */}
        <div className="w-20 h-20 bg-red-500 rounded-[100%] -translate-x-2"></div>
      </div>
      {/* Triángulo inferior para completar el corazón */}
      <div className="w-20 h-20 bg-red-500 rotate-45 -translate-y-[3rem]"></div>
      </motion.button>
  );
}

export default HeartShape;
