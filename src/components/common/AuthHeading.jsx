const AuthHeading = ({ children, heading, className, isReset }) => {
  return (
    <div className={`mb-9 text-center ${className}`}>
      <h1
        className={`text-4xl font-bold text-center mb-2 ${
          isReset ? "text-[#00131F]" : "auth-heading"
        }`}
      >
        {heading}
      </h1>
      <p className="text-lg text-[var(--main-gray)]">{children}</p>
    </div>
  );
};

export default AuthHeading;
