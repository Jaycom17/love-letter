interface CardProps {
    message: string;
    link?: string;
    close: () => void;
  }
  
  function Card({ message, link, close }: CardProps) {
    return (
      <div className="w-screen h-48 flex flex-col justify-center items-center">
        <article onClick={close} className="w-[90%] md:w-[50%] lg:w-[30%] h-full bg-[#fde2e2] rounded-xl shadow-lg p-4 flex flex-col justify-center items-center relative">
          {/* Botón de "X" en la esquina superior derecha */}
          <button className="absolute top-2 right-2 text-2xl text-pink-600 hover:text-pink-800 transition duration-300">
            &times;
          </button>
  
          <img
            className="h-1/3 rounded-t-xl object-cover"
            src="corazones.webp"
            alt="corazones"
          />
          <div className="w-full flex flex-col justify-center items-center">
            <h3 className="text-xl font-serif text-center text-pink-600">{message}</h3>
            {link && (
              <a
                href={link}
                className="mt-2 inline-block px-4 py-2 bg-pink-600 text-white rounded-full text-center hover:bg-pink-700 transition duration-300"
              >
                Mira mi amor
              </a>
            )}
          </div>
        </article>
      </div>
    );
  }
  
  export default Card;
  