import ContextWrapper from "@/context";
import { DataTableDemo } from "./components/DataTable/page";

export default function Home() {
  return (
    <main className="h-full">
      <ContextWrapper>
        <DataTableDemo />
      </ContextWrapper>
    </main>
  );
}
