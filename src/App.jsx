import React, { useState, useEffect } from 'react';
import { Heart, Calendar, MapPin, Users, Sparkles, Clock, CheckCircle } from 'lucide-react';

const WeddingInvitation = () => {
  const [timeLeft, setTimeLeft] = useState({});
  const [responses, setResponses] = useState({
    attendance: '',
    alcohol: '',
    transfer: '',
    accommodation: ''
  });

  // Calculate countdown
  useEffect(() => {
    const calculateTimeLeft = () => {
      const weddingDate = new Date('2026-05-15T15:00:00');
      const now = new Date();
      const difference = weddingDate - now;

      if (difference <= 0) {
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      return { days, hours, minutes, seconds };
    };

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    setTimeLeft(calculateTimeLeft());

    return () => clearInterval(timer);
  }, []);

  const handleResponseChange = (question, value) => {
    setResponses(prev => ({ ...prev, [question]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Спасибо за ваш ответ! Мы с нетерпением ждем вас на нашей свадьбе!');
  };

  return (
    <div className="">
      {/* Main Container - Centered Content */}
      <div className="">
        {/* Childhood Photos Section */}
        <div className="shadow-lg p-8 relative" style={{ backgroundColor: '#c4d8ed' }}>
          <div className="flex flex-col items-center justify-center gap-8">
            
            {/* Блок Андрея с сердечком вверху */}
            <div className="text-center bg-white pt-6 pr-6 pl-6 pb-4 relative z-10">
              <img src="images/man_child.png" alt="Андрей" className="w-60 h-60"/>
              <p className="text-4xl mt-4 font-TildaScriptRegular">Андрей</p>
            </div>
            
            <div className="flex items-center justify-center my-0 md:my-0">
              <p className="text-8xl font-TildaScriptRegular">+</p>
            </div>
            
            {/* Блок Элеоноры с сердечком внизу */}
            <div className="text-center bg-white pt-6 pr-6 pl-6 pb-4 relative z-10">
              <img src="images/girl_child.png" alt="Элеонора" className="w-60 h-60"/>
              <p className="text-4xl mt-4 font-TildaScriptRegular">Элеонора</p>
            </div>
            
            <div className="flex items-center justify-center my-0 md:my-0">
              <p className="text-5xl font-TildaScriptRegular">А + Э = ♡︎</p>
            </div>

            <div className="text-center">
              <p className="font-CormorantInfantBold text-5xl mb-8 leading-relaxed tracking-wider">
                МЫ СОЗРЕЛИ ДЛЯ ЭТОГО МОМЕНТА <br />
                <span className="font-bold">15 мая 2026 г.</span>
              </p>

              {/* Countdown */}
              <div className="mb-8">
                <div className="flex justify-center gap-4 sm:gap-16 flex-wrap">
                  {Object.entries(timeLeft).map(([unit, value]) => {
                    // Русские названия
                    const labels = {
                      days: 'дней',
                      hours: 'часов', 
                      minutes: 'минут',
                      seconds: 'секунд'
                    };
                    
                    return (
                      <div key={unit} className="text-center">
                        <div className="bg-transparent flex flex-col items-center justify-center">
                          <span className="text-5xl font-semibold font-CormorantInfantBold">{value}</span>
                          <span className="text-xl font-CormorantInfantBold">{labels[unit] || unit.slice(0, -1)}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Main Message */}
        <div className="bg-[url('/images/background_image.webp')] bg-cover bg-center bg-no-repeat shadow-lg p-8 text-center relative min-h-[500px]">
          <div className="bg-white mx-8 md:mx-auto my-8 md:my-16 max-w-4xl p-8 rounded-2xl shadow-2xl relative z-10">
            {/* Invitation Text */}
            <div className="text-center">
              <h2 className="text-4xl font-TildaScriptRegular mb-6">Дорогой Гость!</h2>
              <p className="text-2xl font-CormorantInfantLite mb-6">
                Мы рады сообщить Вам, что <span className="font-semibold">15.05.2026</span> состоится самое главное торжество в нашей жизни — день нашей свадьбы!
                Приглашаем Вас разделить с нами радость этого незабываемого дня.
              </p>
              <p className="text-2xl font-CormorantInfantLite mb-6">
                15.05.2026 в 15:00 Банкетный зал "Селебрити"
                Энзелийская улица, 1а
              </p>
              <div className="flex justify-center mb-6">
                <img 
                  src="images/photo_both.jpg" 
                  alt="Фото" 
                  className="w-full max-w-md"
                />
              </div>
              <p className="text-4xl font-CormorantInfantLite mb-6">
                ПОДТВЕРЖДЕНИЕ
              </p>
              <p className="text-2xl font-CormorantInfantLite mb-12">
                Пожалуйста подтвердите свое присутствие до 20.04.2026
              </p>
              <p className="text-4xl font-TildaScriptRegular mb-6">
                Ждём Вас на нашей свадьбе!
              </p>
              <div className="my-6">
                <p className="text-2xl font-CormorantInfantLite mb-6">
                  Будем благодарны, если при выборе нарядов на наше торжество вы придержитесь следующей палитры
                </p>
                <div className="flex flex-wrap justify-center gap-6">
                  {[
                    { color: '#000000', name: 'Черный' },
                    { color: '#435571', name: 'Темно-синий' },
                    { color: '#98ADD1', name: 'Голубой' },
                    { color: '#E7B87C', name: 'Бежевый' },
                    { color: '#8F5F40', name: 'Коричневый' }
                  ].map((item, index) => (
                    <div key={index} className="text-center">
                      <div 
                        className="w-16 h-16 rounded-full shadow-md mx-auto mb-3"
                        style={{ backgroundColor: item.color }}
                      ></div>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* Quizzes */}
        <div className="shadow-lg p-8 relative" style={{ backgroundColor: '#c4d8ed' }}>
          <div className="text-center p-6" style={{ backgroundColor: '#d6e7f3', borderLeft: '6px solid #f4633e' }}>
            <p className="text-xl">Пожалуйста, ответьте на вопросы, которые для вас подготовили <strong>Жених</strong> и <strong>Невеста</strong>:</p>
          </div>
          
          <script src="https://forms.yandex.ru/_static/embed.js"></script>
          <iframe
            className="block mx-auto"
            src="https://forms.yandex.ru/u/696a1f92e010db2c0342596e?iframe=1"
            frameborder="0"
            width="80%"
            name="ya-form-696a1f92e010db2c0342596e"
            height="1150" />
        </div>

        {/* Wedding plan */}
        <div className="bg-[url('/images/background_image.webp')] bg-cover bg-center bg-no-repeat p-8 text-center relative min-h-[100px]">
        </div>

        {/* Wedding Schedule */}
        <div className="p-4 sm:p-8 overflow-x-hidden" style={{ backgroundColor: '#e3d8f1' }}>
          <h2 className="text-4xl font-TildaScriptRegular mb-6 text-center">Свадебное расписание</h2>

          <div className="space-y-4 max-w-2xl mx-auto">
            {[
              { time: '14:30', event: 'Сбор гостей' },
              { time: '15:00', event: 'Торжественная регистрация', note: 'Парк, под открытым небом около банкетного зала "Селебрити"' },
              { time: '16:00', event: 'Фуршет', note: 'В это время молодожёны уходят на фотосессию' },
              { time: '17:30', event: 'Банкет' },
              { time: '21:00', event: 'Торт' },
              { time: '23:00', event: 'Завершение' }
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-4 sm:gap-16 p-4">
                <div className="flex-shrink-0 w-20 min-w-20">
                  {item.time && (
                    <span className="text-2xl font-CormorantInfantBold block text-right">
                      {item.time}
                    </span>
                  )}
                </div>
                <div className="flex-1">
                  <span className="text-2xl font-CormorantInfantBold block">{item.event}</span>
                  {item.note && (
                    <span className="text-lg font-CormorantInfantLite text-gray-700 block mt-1">
                      {item.note}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Map */}
        <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-8 overflow-hidden">
          <h3 className="text-4xl font-CormorantInfantBold text-center mb-6">
            Где нас найти?
          </h3>
          <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm">
            <div className="w-full max-w-full overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243.41766415306608!2d48.02373484140364!3d46.35040781322402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x41a90f7e2c047bcb%3A0xde59bea91d0f0475!2z0J7RgdC60LDRgCwg0JrQsNGE0LU!5e0!3m2!1sru!2sru!4v1768333509684!5m2!1sru!2sru"
                width="100%"
                height="400"
                style={{ border: 0, display: 'block' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Свадьба Андрея и Элеоноры"
              ></iframe>
            </div>
          </div>
          <p className="text-center text-2xl font-CormorantInfantLite mt-4">
            Банкетный зал "Селебрити", Энзелийская ул., 1а
          </p>
        </div>
      </div>
    </div>
  );
};

export default WeddingInvitation;
