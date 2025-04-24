const ExperienceInfo = ({ number, text }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <p className="text-cyan text-5xl font-extrabold mb-1">{number}</p>
      <p className="uppercase text-lightBrown text-sm tracking-wide">{text}</p>
    </div>
  );
};

export default ExperienceInfo;
