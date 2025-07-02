import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Логотип */}
          <div className="flex items-center space-x-2">
            <div className="bg-black text-white px-3 py-1 rounded font-bold text-xl">
              КИТАВТО
            </div>
          </div>

          {/* Навигация */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-gray-700 hover:text-black font-medium transition-colors"
            >
              Главная
            </a>
            <a
              href="#brands"
              className="text-gray-700 hover:text-black font-medium transition-colors"
            >
              Бренды авто
            </a>
            <a
              href="#categories"
              className="text-gray-700 hover:text-black font-medium transition-colors"
            >
              Категории запчастей
            </a>
            <a
              href="#contacts"
              className="text-gray-700 hover:text-black font-medium transition-colors"
            >
              Контакты
            </a>
          </nav>

          {/* Корзина и кнопки */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="relative">
              <Icon name="ShoppingCart" size={20} />
              <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </Button>
            <Button className="bg-black hover:bg-gray-800 text-white">
              Оформить заказ
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
