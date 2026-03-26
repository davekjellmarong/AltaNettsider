import { Droplets, Shirt, Utensils, Coffee, Snowflake, Building2 } from "lucide-react";

const clients = [
  { name: "DinDrenering", icon: Droplets },
  { name: "Minihjørne", icon: Shirt },
  { name: "Aurora Spiseri", icon: Utensils },
  { name: "Havna Kafé", icon: Coffee },
  { name: "DesignIce", icon: Snowflake },
  { name: "SNG Group", icon: Building2 },
];

const ClientLogos = () => {
  return (
    <section className="py-12 px-4 border-t border-b border-gray-100 bg-white">
      <div className="container-custom">
        <p className="text-center text-xs text-gray-400 uppercase tracking-widest mb-8 font-medium">
          Bedrifter vi har laget nettside for
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {clients.map(({ name, icon: Icon }) => (
            <div
              key={name}
              className="flex items-center gap-2 text-gray-400"
            >
              <Icon className="w-5 h-5" />
              <span className="font-semibold text-xl tracking-tight">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
