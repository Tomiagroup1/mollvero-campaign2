import bedroomImg from "@/assets/bedroom-furniture.jpg";
import diningImg from "@/assets/dining-furniture.jpg";
import storageImg from "@/assets/storage-furniture.jpg";

const categories = [
  { image: bedroomImg, title: "Spálne", subtitle: "Postele & nočné stolíky" },
  { image: diningImg, title: "Jedáleň", subtitle: "Stoly & stoličky" },
  { image: storageImg, title: "Úložné priestory", subtitle: "Komody & skrine" },
];

const GallerySection = () => {
  return (
    <section className="py-24 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-4">
            Naše kategórie
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
            Objavte <span className="font-script font-normal text-primary">kolekciu</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <a
              key={cat.title}
              href="https://mollvero.sk/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-2xl aspect-[4/5] cursor-pointer"
            >
              <img
                src={cat.image}
                alt={cat.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
                width={800}
                height={600}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <p className="text-primary text-sm font-medium mb-1">{cat.subtitle}</p>
                <h3 className="text-primary-foreground text-2xl font-bold">{cat.title}</h3>
              </div>

              {/* Discount badge */}
              <div className="absolute top-4 right-4 bg-primary text-primary-foreground text-sm font-bold px-4 py-2 rounded-full">
                -30%
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
