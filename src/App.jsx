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
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-blue-50 to-blue-200">
      {/* Main Container - Centered Content */}
      <div className="min-h-screen flex items-center justify-center px-4 py-8">
        <div className="w-full max-w-4xl mx-auto space-y-8">
          
          {/* Header Section */}
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-800 mb-6">
              Свадьба Андрея и Элеоноры
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-pink-400 mx-auto rounded-full"></div>
          </div>

          {/* Childhood Photos Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              <div className="text-center">
                <div className="w-32 h-32 md:w-40 md:h-40 bg-gradient-to-br from-blue-200 to-blue-300 rounded-full flex items-center justify-center shadow-lg mx-auto mb-4">
                  <span className="text-6xl">👦</span>
                </div>
                <p className="font-semibold text-gray-700 text-lg">Андрей</p>
              </div>
              
              <div className="flex items-center justify-center my-4 md:my-0">
                <Heart className="w-12 h-12 text-pink-500 animate-pulse" />
              </div>
              
              <div className="text-center">
                <div className="w-32 h-32 md:w-40 md:h-40 bg-gradient-to-br from-pink-200 to-pink-300 rounded-full flex items-center justify-center shadow-lg mx-auto mb-4">
                  <span className="text-6xl">👧</span>
                </div>
                <p className="font-semibold text-gray-700 text-lg">Элеонора</p>
              </div>
            </div>
          </div>

          {/* Main Message */}
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <p className="text-2xl md:text-3xl font-serif text-gray-800 mb-8 leading-relaxed">
              Мы доросли до этого момента<br />
              <span className="text-blue-600 font-bold">15 мая 2026 г.</span>
            </p>

            {/* Countdown */}
            <div className="mb-8">
              <div className="flex items-center justify-center mb-6">
                <Clock className="w-6 h-6 text-blue-600 mr-2" />
                <h3 className="text-xl font-semibold text-gray-800">До свадьбы осталось:</h3>
              </div>
              <div className="flex justify-center gap-4 flex-wrap">
                {Object.entries(timeLeft).map(([unit, value]) => (
                  <div key={unit} className="text-center">
                    <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-lg w-16 h-16 md:w-20 md:h-20 flex flex-col items-center justify-center shadow-md">
                      <span className="text-2xl md:text-3xl font-bold">{value}</span>
                      <span className="text-xs md:text-sm opacity-90 capitalize">{unit.slice(0, -1)}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Invitation Text */}
            <div className="text-left md:text-center">
              <h2 className="text-2xl md:text-3xl font-serif text-gray-800 mb-6">Дорогой Гость!</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Мы рады сообщить Вам, что <span className="font-semibold">15.05.2026</span> состоится самое главное торжество в нашей жизни — день нашей свадьбы!
                Приглашаем Вас разделить с нами радость этого незабываемого дня.
              </p>
              <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-xl max-w-md mx-auto">
                <Calendar className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                <div className="text-center md:text-left">
                  <p className="font-semibold text-gray-800">15.05.2026 в 15:00</p>
                  <p className="text-gray-700">Банкетный зал "Селебрити"</p>
                  <p className="text-gray-700">Петровская набережная, Энзелийская улица, 1а</p>
                </div>
              </div>
            </div>
          </div>

          {/* Couple Photo */}
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <div className="w-48 h-48 md:w-64 md:h-64 bg-gradient-to-br from-blue-300 to-pink-300 rounded-full flex items-center justify-center shadow-2xl mx-auto mb-6">
              <span className="text-8xl">💑</span>
            </div>
            <p className="text-xl font-serif text-gray-700 italic">Андрей & Элеонора</p>
          </div>

          {/* RSVP Section */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-serif text-gray-800 mb-4">Подтверждение</h3>
              <p className="text-gray-600">Пожалуйста, подтвердите свое присутствие до <span className="font-semibold">20.04.2026</span></p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Question 1 */}
              <div>
                <label className="block text-lg font-medium text-gray-800 mb-3">
                  Планируете ли вы быть на свадьбе?
                </label>
                <div className="flex flex-wrap gap-4 justify-center">
                  {['Да', 'Нет'].map(option => (
                    <label key={option} className="inline-flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="attendance"
                        value={option}
                        checked={responses.attendance === option}
                        onChange={(e) => handleResponseChange('attendance', e.target.value)}
                        className="sr-only"
                      />
                      <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center mr-2 ${
                        responses.attendance === option 
                          ? 'border-blue-600 bg-blue-600' 
                          : 'border-gray-300'
                      }`}>
                        {responses.attendance === option && (
                          <div className="w-3 h-3 bg-white rounded-full"></div>
                        )}
                      </div>
                      <span className="text-gray-700">{option}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Question 2 */}
              <div>
                <label className="block text-lg font-medium text-gray-800 mb-3">
                  Какой алкоголь вы предпочитаете?
                </label>
                <div className="flex flex-wrap gap-3 justify-center">
                  {['Красное вино', 'Белое вино', 'Шампанское', 'Коньяк/виски', 'Не буду пить'].map(option => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => handleResponseChange('alcohol', option)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                        responses.alcohol === option
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>

              {/* Question 3 */}
              <div>
                <label className="block text-lg font-medium text-gray-800 mb-3">
                  Потребуется ли вам трансфер?
                </label>
                <div className="flex flex-wrap gap-4 justify-center">
                  {['Да', 'Нет'].map(option => (
                    <label key={option} className="inline-flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="transfer"
                        value={option}
                        checked={responses.transfer === option}
                        onChange={(e) => handleResponseChange('transfer', e.target.value)}
                        className="sr-only"
                      />
                      <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center mr-2 ${
                        responses.transfer === option 
                          ? 'border-blue-600 bg-blue-600' 
                          : 'border-gray-300'
                      }`}>
                        {responses.transfer === option && (
                          <div className="w-3 h-3 bg-white rounded-full"></div>
                        )}
                      </div>
                      <span className="text-gray-700">{option}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Question 4 */}
              <div>
                <label className="block text-lg font-medium text-gray-800 mb-3">
                  Нуждаетесь ли вы в жилье?
                </label>
                <div className="flex flex-wrap gap-4 justify-center">
                  {['Да', 'Нет'].map(option => (
                    <label key={option} className="inline-flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="accommodation"
                        value={option}
                        checked={responses.accommodation === option}
                        onChange={(e) => handleResponseChange('accommodation', e.target.value)}
                        className="sr-only"
                      />
                      <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center mr-2 ${
                        responses.accommodation === option 
                          ? 'border-blue-600 bg-blue-600' 
                          : 'border-gray-300'
                      }`}>
                        {responses.accommodation === option && (
                          <div className="w-3 h-3 bg-white rounded-full"></div>
                        )}
                      </div>
                      <span className="text-gray-700">{option}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="text-center pt-4">
                <button
                  type="submit"
                  disabled={!responses.attendance}
                  className="bg-gradient-to-r from-blue-600 to-pink-600 text-white px-8 py-3 rounded-full font-semibold hover:from-blue-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Отправить ответ
                </button>
              </div>
            </form>
          </div>

          {/* Final Message */}
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <p className="text-2xl font-serif text-gray-800 mb-4">Ждем Вас на нашей свадьбе!</p>
            <Sparkles className="w-8 h-8 text-yellow-400 mx-auto" />
          </div>

          {/* Dress Code */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-serif text-gray-800 text-center mb-6">
              Дресс-код
            </h3>
            <p className="text-gray-700 text-center mb-6">
              Будем благодарны, если при выборе нарядов на наше торжество вы придержитесь следующей палитры:
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
                    className="w-16 h-16 rounded-full shadow-md mx-auto mb-3 border-2 border-white"
                    style={{ backgroundColor: item.color }}
                  ></div>
                  <span className="text-sm text-gray-600 block">{item.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Wedding Schedule */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-serif text-gray-800 text-center mb-8">
              Свадебное расписание
            </h3>
            <div className="space-y-4 max-w-2xl mx-auto">
              {[
                { time: '14:30', event: 'Сбор гостей' },
                { time: '15:00', event: 'Торжественная регистрация (Парк, под открытым небом около банкетного зала "Селебрити")' },
                { time: '16:00', event: 'Фуршет (В это время молодожёны уходят на фотосессию)' },
                { time: '17:30', event: 'Банкет' },
                { time: '', event: 'Торт' },
                { time: '', event: 'Завершение' }
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4 p-4 bg-blue-50 rounded-lg">
                  <div className="flex-shrink-0 w-20 min-w-20">
                    {item.time && (
                      <span className="text-blue-600 font-semibold block text-center">{item.time}</span>
                    )}
                  </div>
                  <div className="flex-1">
                    <span className="text-gray-800">{item.event}</span>
                  </div>
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                </div>
              ))}
            </div>
          </div>

          {/* Карта */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-serif text-gray-800 text-center mb-6">
              Где нас найти?
            </h3>
            <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm">
              {/* Замени этот iframe на свой! */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243.41766415306608!2d48.02373484140364!3d46.35040781322402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x41a90f7e2c047bcb%3A0xde59bea91d0f0475!2z0J7RgdC60LDRgCwg0JrQsNGE0LU!5e0!3m2!1sru!2sru!4v1768333509684!5m2!1sru!2sru"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Свадьба Андрея и Элеоноры"
              ></iframe>
            </div>
            <p className="text-center text-gray-600 mt-4">
              Банкетный зал "Селебрити", Петровская набережная, Энзелийская ул., 1а
            </p>
          </div>

          {/* Footer */}
          <div className="text-center pb-8">
            <p className="text-gray-500 font-serif italic text-lg">
              С любовью, Андрей и Элеонора 💙
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeddingInvitation;
