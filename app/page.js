import CategorySearch from "./_component/CategorySearch";
import HeroSection from "./_component/Hero";

export default function Home() {
  return (
      <div className="container mx-auto mt-3">
        <HeroSection/>
        <CategorySearch />
      </div>
);
}
