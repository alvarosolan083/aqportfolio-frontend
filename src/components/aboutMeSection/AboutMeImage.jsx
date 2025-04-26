const AboutMeImage = () => {
  return (
    <div className="relative h-[480px] w-[280px]">
      {/* Imagen hexagonal */}
      <div className="absolute z-10 inset-0 flex items-center justify-center">
        <img
          src="/images/image.png" 
          alt="About Me Image"
          className="w-[280px] h-auto object-contain"
        />
      </div>

      {/* Fondo naranja decorativo */}
      <div className="absolute inset-0 w-full h-full bg-orange rounded-bl-[120px] rounded-tr-[120px] rounded-br-[20px] rounded-tl-[20px] z-0" />
    </div>
  );
};

export default AboutMeImage;
