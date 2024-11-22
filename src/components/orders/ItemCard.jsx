import Image from "next/image";

const ItemCard = ({ item, index, className }) => {
  // const isFirst = index % 2 === 0;
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className={`w-[20px] h-[20px] rounded-full overflow-hidden`}>
        <Image
          alt="image"
          src={item.images[0] || "/diningTable.jpeg"}
          width={100}
          height={100}
        />
      </div>
      <div className={`text-[0.75rem] font-semibold`}>{item.name}</div>
    </div>
  );
};

export default ItemCard;
