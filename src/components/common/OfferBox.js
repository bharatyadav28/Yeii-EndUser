import Link from "next/link";

const OfferBox = ({ title, className, children, t }) => {
  return (
    <div className={"bg-[var(--light-gray)] p-4 rounded-3xl " + className}>
      <div className="flex justify-between">
        <h2 className="text-lg font-semibold mb-3">{title}</h2>
        <Link href="/offers" className="text-sm text-[var(--main-pink)] ">
          {t("view_all")}
        </Link>
      </div>
      <div className="flex gap-5 overflow-x-auto">{children}</div>
    </div>
  );
};

export default OfferBox;
