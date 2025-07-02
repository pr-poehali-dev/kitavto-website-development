import Header from "@/components/Header";
import BrandsSection from "@/components/BrandsSection";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Дракон на заднем фоне */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="text-[800px] leading-none text-gray-400 select-none">
            🐉
          </div>
        </div>
      </div>

      <Header />

      {/* Главная секция */}
      <section
        id="home"
        className="relative z-10 py-20 bg-gradient-to-b from-white to-gray-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-red-600">КИТ</span>
            <span className="text-orange-500">АВТО</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Запчасти для китайских автомобилей с доставкой по всей России.
            Качественные детали, оригинальные и аналоги по лучшим ценам.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-black hover:bg-gray-800 text-white px-8"
            >
              <Icon name="Search" size={20} className="mr-2" />
              Найти запчасти
            </Button>
            <Button size="lg" variant="outline" className="border-gray-300">
              <Icon name="Phone" size={20} className="mr-2" />
              Консультация
            </Button>
          </div>
        </div>
      </section>

      <BrandsSection />

      {/* Категории запчастей */}
      <section id="categories" className="py-16 bg-white relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-black mb-4">
              Категории запчастей
            </h2>
            <p className="text-gray-600 text-lg">
              Быстрый поиск по типу детали
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: "Двигатель", icon: "Cog", count: "1,200+" },
              { name: "Подвеска", icon: "Car", count: "800+" },
              { name: "Тормоза", icon: "Disc", count: "600+" },
              { name: "Электрика", icon: "Zap", count: "900+" },
              { name: "Кузов", icon: "Shield", count: "1,500+" },
              { name: "Салон", icon: "Armchair", count: "400+" },
              { name: "Фильтры", icon: "Filter", count: "300+" },
              { name: "Масла", icon: "Droplets", count: "150+" },
            ].map((category) => (
              <div
                key={category.name}
                className="bg-gray-50 hover:bg-gray-100 rounded-lg p-6 text-center cursor-pointer transition-colors group"
              >
                <Icon
                  name={category.icon as any}
                  size={32}
                  className="mx-auto mb-3 text-gray-600 group-hover:text-black"
                />
                <h3 className="font-semibold text-black mb-1">
                  {category.name}
                </h3>
                <p className="text-sm text-gray-500">{category.count}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Контакты */}
      <section
        id="contacts"
        className="py-16 bg-black text-white relative z-10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Icon name="Phone" size={24} className="mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Телефон</h3>
              <p className="text-gray-300">+7 (999) 123-45-67</p>
            </div>
            <div className="text-center">
              <Icon name="Mail" size={24} className="mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-gray-300">info@kitavto.ru</p>
            </div>
            <div className="text-center">
              <Icon name="MapPin" size={24} className="mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Адрес</h3>
              <p className="text-gray-300">г. Москва, ул. Автозаводская, 1</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
