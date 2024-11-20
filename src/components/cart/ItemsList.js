import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { CounterInput } from "../common/customInput";
import { addItem, removeItem } from "@/lib/store/feature/cart/slice";

const ItemCard = ({ item, addProduct, removeProduct, isService }) => {
  const count = useSelector((state) => state.cart.items[item.id].count);
  const onCountChange = (cnt) => {
    //console.log({ count, cnt });
    if (cnt > count) {
      addProduct(item);
    } else if (cnt < count) removeProduct(item.id);
  };
  return (
    <div
      key={item.id}
      className="p-2 py-3 border-b-2 flex items-center justify-between"
    >
      <div className="flex items-center gap-3">
        <Image
          src={item.image_url}
          width={80}
          height={80}
          alt={item.name}
          className="w-[80px] h-[80px] rounded-2xl"
        />
        <div>
          <div className="text-sm font-medium">{item.name}</div>
          <div className="text-xs text-gray-800">{item.price}</div>
        </div>
      </div>
      <div>
        <CounterInput
          className="w-40 justify-between !items-center"
          buttonClass="p-3 h-7"
          value={item.count}
          onChange={(cnt) => onCountChange(cnt)}
          isService={isService}
        />
      </div>
    </div>
  );
};
const ItemsList = ({ cartArr }) => {
  const isService = useSelector((state) => state.cart.type === "service");
  const supplierId = useSelector((state) => state.cart.supplierId);
  const dispatch = useDispatch();

  const addProduct = (item) => {
    dispatch(
      addItem({
        supplierId: supplierId,
        type: item.type ?? "service",
        item,
      })
    );
  };

  const removeProduct = (id) => {
    dispatch(removeItem({ id }));
  };

  return (
    <div className="flex-grow rounded-t-2xl !overflow-y-auto">
      {cartArr.map((item) => (
        <ItemCard
          key={item.id}
          item={item}
          addProduct={addProduct}
          removeProduct={removeProduct}
          isService={isService}
        />
      ))}
    </div>
  );
};

export default ItemsList;
