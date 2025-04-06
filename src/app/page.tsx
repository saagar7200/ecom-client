import Hero from "@/components/home/hero";
import TendingProducts from "@/components/home/product-list/tending-products";
import SummerSale from "@/components/home/product-list/summer-sale";
import ProductCard from "@/components/product/product-card";


export default function Home() {
  return (
    <main>
      <Hero />
      <h1>Home</h1>
      <TendingProducts />
      <SummerSale />
      <ProductCard />
    </main>
  );
}
