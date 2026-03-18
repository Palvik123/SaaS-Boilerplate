import { getTranslations } from 'next-intl/server';

export async function generateMetadata(props: { params: { locale: string } }) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: 'About',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

const AboutPage = () => {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      {/* Заголовок */}
      <h1 className="text-4xl font-bold mb-8 text-center">
        О проекте
      </h1>

      {/* Описание проекта */}
      <section className="mb-12">
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
          ИИ ВЕНЧУР ЛАБ — это ML-платформа для прозрачного первичного отбора стартапов. 
          Система обеспечивает ранжирование заявок, расчёт скоринговой оценки и объяснимые 
          факторы принятия решений на основе машинного обучения.
        </p>
      </section>

      {/* Контактная информация */}
      <section className="mb-12 bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Контакты</h2>
        <div className="space-y-3">
          <div className="flex items-center space-x-3">
            <svg className="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
            </svg>
            <div>
              <p className="font-semibold">Telegram</p>
              <a href="https://t.me/yv_prr" target="_blank" rel="noopener noreferrer" 
                 className="text-blue-600 dark:text-blue-400 hover:underline">
                @yv_prr
              </a>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <svg className="w-6 h-6 text-red-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
            <div>
              <p className="font-semibold">Email</p>
              <a href="mailto:yuldashev_pr@ranepa.ru" 
                 className="text-blue-600 dark:text-blue-400 hover:underline">
                yuldashev_pr@ranepa.ru
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Публикации и доклады */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Публикации и доклады</h2>
        <div className="space-y-6">
          <div className="border-l-4 border-blue-500 pl-4">
            <h3 className="font-semibold text-lg mb-2">
                Конференция РЭУ Плеханова (13.12.2024)            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Доклад: "Алгоритмы машинного обучения и их применение в инвестиционной сфере""
            </p>
          </div>
          <div className="border-l-4 border-blue-500 pl-4">
            <h3 className="font-semibold text-lg mb-2">
              Конференция ИГСУ РАНХиГС( 19-23 мая 2025)
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
                Доклад: "Анализ факторов успешности стартапов с использованием интеллектуальных алгоритмов: эмпирические результаты для российского рынка"            </p>
          </div>
        </div>
      </section>

      {/* Дополнительная информация */}
      <section className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
        <h2 className="text-xl font-bold mb-4">Сотрудничество</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Заинтересованы в использовании платформы для вашего фонда или акселератора?
          Свяжитесь со мной для обсуждения возможностей сотрудничества.
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Платформа находится в стадии активной разработки. MVP проходит пилотное тестирование.
        </p>
      </section>
    </div>
  );
};

export default AboutPage;
