import Slider from "@/components/ui/slider/Slider";

export default function Home() {
  const images = [
    "https://picsum.photos/200/300",
    "https://picsum.photos/200/300",
  ];
  return (
    <div className="w-full text-center mt-3 items-center">
      <Slider images={images} />
      <h1 className="text-3xl h-50 font-bold">Welcome to Oxygen Surgicals</h1>
    </div>
  );
}
