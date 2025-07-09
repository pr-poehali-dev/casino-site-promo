import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-gray-900 to-orange-900">
          <div className="absolute inset-0 bg-[url('/img/fde9256e-4b7a-4259-8823-d6c86188b126.jpg')] bg-cover bg-center opacity-30"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-20 animate-float">
          <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center casino-glow">
            <span className="text-2xl">🎲</span>
          </div>
        </div>
        <div
          className="absolute top-40 right-32 animate-float"
          style={{ animationDelay: "2s" }}
        >
          <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center casino-glow">
            <span className="text-xl">♠️</span>
          </div>
        </div>
        <div
          className="absolute bottom-40 left-32 animate-float"
          style={{ animationDelay: "4s" }}
        >
          <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center casino-glow">
            <span className="text-xl">🎰</span>
          </div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 text-center px-4 max-w-6xl">
          <h1
            className="text-6xl md:text-8xl font-bold mb-8"
            style={{ fontFamily: "Bebas Neue, cursive" }}
          >
            <span className="casino-gradient bg-clip-text text-transparent">
              КАЗИНО
            </span>
            <br />
            <span className="gold-gradient bg-clip-text text-transparent">
              МЕЧТЫ
            </span>
          </h1>

          <p
            className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Выигрывай больше с высокими коэффициентами!
            <br />
            Присоединяйся к миллионам игроков и получи бонус до 500%
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-white px-8 py-6 text-xl font-bold casino-glow animate-pulse-glow"
              onClick={() => window.open("https://1win.com", "_blank")}
            >
              🚀 ИГРАТЬ СЕЙЧАС
            </Button>
            <Badge
              variant="secondary"
              className="bg-accent text-black px-4 py-2 text-lg font-bold"
            >
              БОНУС +500%
            </Badge>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">
                99.9%
              </div>
              <div className="text-sm text-gray-400">ВЫПЛАТ</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-secondary mb-2">
                24/7
              </div>
              <div className="text-sm text-gray-400">ПОДДЕРЖКА</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                1000+
              </div>
              <div className="text-sm text-gray-400">ИГР</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">
                2M+
              </div>
              <div className="text-sm text-gray-400">ИГРОКОВ</div>
            </div>
          </div>
        </div>
      </section>

      {/* Big Wins Section */}
      <section className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-orange-900/20"></div>

        <div className="max-w-6xl mx-auto relative z-10">
          <h2
            className="text-4xl md:text-6xl font-bold text-center mb-16 text-accent"
            style={{ fontFamily: "Bebas Neue, cursive" }}
          >
            БОЛЬШИЕ ВЫИГРЫШИ
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-black/50 border-secondary casino-glow hover:scale-105 transition-transform">
              <CardContent className="p-8 text-center">
                <div className="text-5xl mb-4 animate-spin-slow">🎰</div>
                <h3 className="text-2xl font-bold mb-4 text-accent">СЛОТЫ</h3>
                <div className="text-4xl font-bold mb-2 text-secondary">
                  x9999
                </div>
                <p className="text-gray-400">Максимальный множитель</p>
              </CardContent>
            </Card>

            <Card className="bg-black/50 border-primary casino-glow hover:scale-105 transition-transform">
              <CardContent className="p-8 text-center">
                <div className="text-5xl mb-4 animate-spin-slow">🎲</div>
                <h3 className="text-2xl font-bold mb-4 text-accent">РУЛЕТКА</h3>
                <div className="text-4xl font-bold mb-2 text-primary">x36</div>
                <p className="text-gray-400">Высокие коэффициенты</p>
              </CardContent>
            </Card>

            <Card className="bg-black/50 border-accent casino-glow hover:scale-105 transition-transform">
              <CardContent className="p-8 text-center">
                <div className="text-5xl mb-4">🃏</div>
                <h3 className="text-2xl font-bold mb-4 text-accent">ПОКЕР</h3>
                <div className="text-4xl font-bold mb-2 text-accent">∞</div>
                <p className="text-gray-400">Безлимитные ставки</p>
              </CardContent>
            </Card>
          </div>

          {/* Recent Winners */}
          <div className="bg-black/30 rounded-lg p-8 mb-16 mt-16">
            <h3
              className="text-2xl font-bold text-center mb-8 text-accent"
              style={{ fontFamily: "Bebas Neue, cursive" }}
            >
              ПОСЛЕДНИЕ ВЫИГРЫШИ
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center bg-black/50 p-4 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-black font-bold">
                    А
                  </div>
                  <span className="text-white">Алексей М.</span>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-accent">
                    ₽1,250,000
                  </div>
                  <div className="text-sm text-gray-400">
                    Слоты • 2 мин назад
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-center bg-black/50 p-4 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-white font-bold">
                    М
                  </div>
                  <span className="text-white">Мария К.</span>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-secondary">
                    ₽890,000
                  </div>
                  <div className="text-sm text-gray-400">
                    Рулетка • 5 мин назад
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-center bg-black/50 p-4 rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                    Д
                  </div>
                  <span className="text-white">Дмитрий Р.</span>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-primary">
                    ₽750,000
                  </div>
                  <div className="text-sm text-gray-400">
                    Покер • 12 мин назад
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Coefficients Showcase */}
          <div className="text-center">
            <h3
              className="text-3xl font-bold mb-8 text-accent"
              style={{ fontFamily: "Bebas Neue, cursive" }}
            >
              ВЫСОКИЕ КОЭФФИЦИЕНТЫ
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-6 rounded-lg casino-glow">
                <div className="text-3xl font-bold text-white">98.7%</div>
                <div className="text-sm text-gray-200">RTP слоты</div>
              </div>
              <div className="bg-gradient-to-r from-orange-600 to-red-600 p-6 rounded-lg casino-glow">
                <div className="text-3xl font-bold text-white">97.3%</div>
                <div className="text-sm text-gray-200">RTP рулетка</div>
              </div>
              <div className="bg-gradient-to-r from-yellow-600 to-orange-600 p-6 rounded-lg casino-glow">
                <div className="text-3xl font-bold text-white">99.5%</div>
                <div className="text-sm text-gray-200">RTP покер</div>
              </div>
              <div className="bg-gradient-to-r from-green-600 to-teal-600 p-6 rounded-lg casino-glow">
                <div className="text-3xl font-bold text-white">95.8%</div>
                <div className="text-sm text-gray-200">RTP блэкджек</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-900 to-orange-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className="text-4xl md:text-6xl font-bold mb-8 text-white"
            style={{ fontFamily: "Bebas Neue, cursive" }}
          >
            НАЧНИ ВЫИГРЫВАТЬ ПРЯМО СЕЙЧАС!
          </h2>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
            <div className="flex items-center gap-2 text-white">
              <Icon name="Shield" size={24} className="text-accent" />
              <span>Лицензированное казино</span>
            </div>
            <div className="flex items-center gap-2 text-white">
              <Icon name="Zap" size={24} className="text-secondary" />
              <span>Мгновенные выплаты</span>
            </div>
            <div className="flex items-center gap-2 text-white">
              <Icon name="Gift" size={24} className="text-accent" />
              <span>Щедрые бонусы</span>
            </div>
          </div>

          <Button
            size="lg"
            className="bg-accent hover:bg-accent/90 text-black px-12 py-8 text-2xl font-bold casino-glow animate-pulse-glow"
            onClick={() => window.open("https://1win.com", "_blank")}
          >
            🎯 ПОЛУЧИТЬ БОНУС 500%
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/90 py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400 mb-4">
            Играй ответственно. Азартные игры могут вызывать зависимость.
          </p>
          <div className="flex justify-center gap-4 text-sm text-gray-500">
            <span>18+</span>
            <span>•</span>
            <span>Лицензия</span>
            <span>•</span>
            <span>Поддержка 24/7</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
