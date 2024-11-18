import Sidebar from "@/components/Sidebar";
import StoreProvider from "@/lib/store/StoreProvider";

export default function DashboardLayout({ children }) {
  return (
    <section>
      <Sidebar className="w-[18rem]" />
      <StoreProvider>
        <div className="ml-[18rem] h-screen  overflow-y-auto">{children}</div>
      </StoreProvider>
    </section>
  );
}
