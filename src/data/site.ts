export type AdPlatform = 'telegram' | 'youtube'
export type MediaPlatform = AdPlatform | 'youtube-shorts' | 'twitch' | 'vk' | 'tiktok' | 'max'
export type PricingMarker = '~' | 'St' | 'Sh'

export interface AdFormat {
  id: string
  platform: AdPlatform
  title: string
  description: string
  priceFrom: string
  marker?: PricingMarker
}

export interface InventoryCard {
  id: string
  platform: MediaPlatform
  title: string
  reach: string
  categories: string[]
  formats: string[]
}

export interface FeaturedPlacement {
  id: string
  platform: MediaPlatform
  title: string
  url?: string
  price?: string
  metric?: string
  formats: string[]
  note?: string
}

export interface PricingNote {
  marker: PricingMarker
  title: string
  description: string
}

export const telegramUrl = 'https://t.me/AGENCY_BOSS'
export const mediaKitUrl =
  'https://docs.google.com/spreadsheets/d/1UzL097-AVyefaGWv5DvXLYQDvh6wWKvFDbR6oIVrVdY/edit?gid=0#gid=0'

export const adFormats: AdFormat[] = [
  {
    id: 'telegram-1-24',
    platform: 'telegram',
    title: 'Telegram 1/24',
    description: 'Размещение рекламного поста с фиксацией на 1 час и сохранением в ленте на 24 часа.',
    priceFrom: 'от 25 000 ₽',
    marker: '~',
  },
  {
    id: 'youtube-preroll',
    platform: 'youtube',
    title: 'YouTube преролл',
    description: 'Короткое рекламное упоминание в начале ролика с быстрым входом в продукт.',
    priceFrom: 'от 60 000 ₽',
    marker: '~',
  },
  {
    id: 'youtube-integration',
    platform: 'youtube',
    title: 'Интеграция 90 сек',
    description: 'Нативный рекламный блок внутри ролика с раскрытием оффера и ключевых преимуществ.',
    priceFrom: 'от 120 000 ₽',
    marker: '~',
  },
  {
    id: 'youtube-video',
    platform: 'youtube',
    title: 'Отдельный ролик',
    description: 'Полноценный выпуск под продукт, запуск, сервис или спецпроект бренда.',
    priceFrom: 'от 300 000 ₽',
    marker: '~',
  },
]

export const inventoryCards: InventoryCard[] = [
  {
    id: 'tg-business',
    platform: 'telegram',
    title: 'Бизнес и инвестиции',
    reach: 'CPM и стоимость зависят от тематики и качества аудитории',
    categories: ['предприниматели', 'финансы', 'карьера'],
    formats: ['1/24', 'нативный пост', 'подборка'],
  },
  {
    id: 'tg-lifestyle',
    platform: 'telegram',
    title: 'Lifestyle и городские медиа',
    reach: 'Подходит для локальных запусков, событий и массовых офферов',
    categories: ['город', 'афиша', 'покупки'],
    formats: ['1/24', 'серия постов', 'закреп'],
  },
  {
    id: 'yt-tech',
    platform: 'youtube',
    title: 'Технологии и обучение',
    reach: 'Аудитория глубоко смотрит обзоры, туториалы и разборы сервисов',
    categories: ['IT', 'софт', 'образование'],
    formats: ['преролл', '90 сек', 'отдельный ролик', 'Sh'],
  },
  {
    id: 'yt-entertainment',
    platform: 'youtube',
    title: 'Развлечения и стримы',
    reach: 'Для охватных кампаний, промокодов и запуска игровых проектов',
    categories: ['стримы', 'юмор', 'игры'],
    formats: ['интеграция', 'St', 'Sh'],
  },
]

export const mediaKitStats = [
  { label: 'Telegram', value: '142+', detail: 'канала и сетки' },
  { label: 'YouTube', value: '104+', detail: 'блогера' },
  { label: 'Shorts', value: '13', detail: 'отдельных Shorts-площадок' },
  { label: 'Доп. платформы', value: '80+', detail: 'Twitch, VK, TikTok, MAX' },
] as const

export const featuredPlacements: FeaturedPlacement[] = [
  {
    id: 'tg-rik',
    platform: 'telegram',
    title: 'Рик',
    url: 'https://t.me/ric1_11',
    price: '12,5к ₽',
    metric: '34 000 просмотров/мес.',
    formats: ['1 пост', '5 постов', '10 постов'],
    note: 'Есть в РКН',
  },
  {
    id: 'tg-aboven',
    platform: 'telegram',
    title: 'Абовен',
    url: 'https://t.me/abovenwav',
    price: '50к ₽',
    metric: '60 000 просмотров/мес.',
    formats: ['1 пост', 'кружок+текст'],
    note: 'Формат поста до 90 дней',
  },
  {
    id: 'tg-flaska',
    platform: 'telegram',
    title: 'Фласка',
    url: 'https://t.me/itFlaska',
    price: '187,5к ₽',
    metric: '200 000 просмотров/мес.',
    formats: ['1 пост', '5 постов', '10 постов'],
    note: 'Есть в РКН',
  },
  {
    id: 'tg-clash-network',
    platform: 'telegram',
    title: 'Clash Royale Live',
    url: 'https://t.me/+w8DIZ40z7mMxZTZi',
    price: '270к ₽',
    metric: 'сеточное размещение',
    formats: ['1/24', 'сетка'],
    note: 'Telegram-сетка из листа “Тг Все каналы”',
  },
  {
    id: 'yt-eroxblox',
    platform: 'youtube',
    title: 'EroxBlox',
    url: 'https://www.youtube.com/@EroxBloxJust',
    formats: ['преролл', '90 сек', 'ролик'],
    note: 'YouTube-канал из медиакита',
  },
  {
    id: 'yt-stkill',
    platform: 'youtube',
    title: 'STKILL',
    url: 'https://www.youtube.com/@STKILL/videos',
    formats: ['преролл', 'интеграция'],
    note: 'YouTube-канал из медиакита',
  },
  {
    id: 'yt-shorts-vyzhivalovo',
    platform: 'youtube-shorts',
    title: 'ВЫЖИВАЛОВО',
    url: 'https://youtube.com/@vyzhivalovo/shorts',
    formats: ['Shorts'],
    note: 'Отдельный Shorts-лист',
  },
  {
    id: 'twitch-bratishka',
    platform: 'twitch',
    title: 'Brat1shka',
    url: 'https://www.twitch.tv/xbrat1shka',
    formats: ['стрим', 'интеграция'],
    note: 'Стоимость по запросу',
  },
  {
    id: 'vk-velya',
    platform: 'vk',
    title: 'Веля',
    url: 'https://vkvideo.ru/@velgorskyofficial/',
    formats: ['VK Video'],
    note: 'Дополнительная площадка',
  },
  {
    id: 'tiktok-apollon',
    platform: 'tiktok',
    title: 'Аполон',
    url: 'https://www.tiktok.com/@apollon_tiktok',
    formats: ['TikTok'],
    note: 'Короткие видео',
  },
  {
    id: 'max-bratishka',
    platform: 'max',
    title: 'Brat1shka',
    price: '15к ₽',
    formats: ['MAX'],
    note: 'Из листа MAX',
  },
  {
    id: 'max-network',
    platform: 'max',
    title: 'Сетка So2 + so2 + SO2',
    price: '7к ₽',
    url: 'https://t.me/AGENCY_BOSS/68',
    formats: ['MAX', 'сетка'],
    note: 'Промо-размещение',
  },
]

export const pricingNotes: PricingNote[] = [
  {
    marker: '~',
    title: 'Актуальная цена по запросу',
    description: 'Итоговая стоимость зависит от CPM, сезонности, ТЗ, брифа и доступности площадки.',
  },
  {
    marker: 'St',
    title: 'Отдельные стримы',
    description: 'Некоторые блогеры делают рекламные стримы. Стоимость и слот подтверждаются отдельно.',
  },
  {
    marker: 'Sh',
    title: 'Отдельные Shorts',
    description: 'Shorts рассчитываются отдельно: цена зависит от сценария, длины и требований к ролику.',
  },
]

export const processSteps = [
  'Получаем бриф и ограничения бренда',
  'Подбираем YouTube и Telegram-площадки',
  'Согласуем форматы, слоты и прогноз',
  'Контролируем выход размещений',
  'Собираем отчет и следующие гипотезы',
] as const
