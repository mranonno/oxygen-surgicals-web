import {
  Activity,
  HeartPulse,
  Gauge,
  Stethoscope,
  BedDouble,
} from "lucide-react";

const categories = [
  {
    id: 1,
    name: "Oxygen Cylinder",
    icon: HeartPulse,
  },
  {
    id: 2,
    name: "Nebulizer",
    icon: Activity,
  },
  {
    id: 3,
    name: "BP Monitor",
    icon: Gauge,
  },
  {
    id: 4,
    name: "Medical Tools",
    icon: Stethoscope,
  },
  {
    id: 5,
    name: "Hospital Bed",
    icon: BedDouble,
  },
  {
    id: 6,
    name: "Hospital Bed",
    icon: BedDouble,
  },
];

export default function ShopByCategory() {
  return (
    <div className="w-full my-12 px-4">
      <h1 className="text-3xl font-bold text-center mb-8 bg-linear-to-r to-[#27568D] from-[#0E7A80] bg-clip-text text-transparent">
        Shop By Popular Categories
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 self-center text-center">
        {categories.map((category) => {
          const Icon = category.icon;
          return (
            <div
              key={category.id}
              className="group cursor-pointer rounded-xl border border-gray-200 bg-white p-5 text-center transition hover:shadow-md hover:border-primary self-center"
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gray-50 transition group-hover:bg-primary">
                <Icon
                  size={32}
                  className="text-primary transition group-hover:text-white"
                />
              </div>

              <p className="mt-4 text-sm font-semibold text-gray-800">
                {category.name}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
