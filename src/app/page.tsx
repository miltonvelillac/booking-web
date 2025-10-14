import Image from "next/image";
import Counter from "@/features/counter/Counter";

export default function Home() {
  return (
    <section className="mt-4 w-full">
      <h2 className="text-lg font-semibold mb-2">Redux Counter</h2>
      <Counter />
    </section>
  );
}
