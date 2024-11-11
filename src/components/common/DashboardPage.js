const DashboardPage = ({ children, className }) => {
  return (
    <div className={` flex flex-col !h-[100%] ${className}`}>{children}</div>
  );
};

export default DashboardPage;
