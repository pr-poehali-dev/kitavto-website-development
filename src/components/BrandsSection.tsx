import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const brands = [
  {
    name: "Geely",
    logo: "🚗",
    models: ["Atlas", "Coolray", "Tugella", "Emgrand"],
    partsCount: "2,500+",
  },
  {
    name: "BYD",
    logo: "🚙",
    models: ["Tang", "Song", "Qin", "Han"],
    partsCount: "1,800+",
  },
  {
    name: "Chery",
    logo: "🚕",
    models: ["Tiggo", "Arrizo", "Exeed", "Omoda"],
    partsCount: "3,200+",
  },
  {
    name: "Great Wall",
    logo: "🚐",
    models: ["Haval", "Wey", "Ora", "Tank"],
    partsCount: "2,100+",
  },
  {
    name: "Changan",
    logo: "🚘",
    models: ["CS75", "Eado", "UNI-T", "CS35"],
    partsCount: "1,500+",
  },
  {
    name: "JAC",
    logo: "🛻",
    models: ["S3", "S4", "T6", "iEV"],
    partsCount: "900+",
  },
];

const BrandsSection = () => {
  return (
    <section id="brands" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-black mb-4">
            Каталог по брендам
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Выберите марку вашего автомобиля и найдите нужные запчасти
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {brands.map((brand) => (
            <Card
              key={brand.name}
              className="hover:shadow-lg transition-shadow cursor-pointer group"
            >
              <CardHeader className="text-center">
                <div className="text-4xl mb-2">{brand.logo}</div>
                <CardTitle className="text-xl font-bold text-black">
                  {brand.name}
                </CardTitle>
                <p className="text-sm text-gray-500">
                  {brand.partsCount} запчастей в наличии
                </p>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-700 mb-2">
                    Популярные модели:
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {brand.models.map((model) => (
                      <span
                        key={model}
                        className="bg-gray-100 text-gray-700 px-2 py-1 rounded-sm text-xs"
                      >
                        {model}
                      </span>
                    ))}
                  </div>
                </div>
                <Button className="w-full bg-black hover:bg-gray-800 text-white group-hover:bg-gray-800">
                  <Icon name="Search" size={16} className="mr-2" />
                  Смотреть запчасти
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;
