const AuthHeading = ({ children, heading, className, isReset }) => {
  return (
    <div className={`mb-9 text-center ${className}`}>
      <h1
        className={`text-4xl font-bold text-center  ${
          isReset ? "text-[#00131F]" : "auth-heading"
        }`}
      >
        {heading}
      </h1>
      <p className="text-lg text-[var(--main-gray)] mt-2">{children}</p>
    </div>
  );
};

export default AuthHeading;
