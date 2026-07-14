<script setup lang="ts">
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  ChevronLeft,
  ChevronRight,
  CircleDollarSign,
  Clapperboard,
  Download,
  ExternalLink,
  MessageCircle,
  Play,
  Radio,
  Send,
  ShieldCheck,
} from '@lucide/vue'
import { A11y, Keyboard, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
import {
  adFormats,
  featuredPlacements,
  mediaKitStats,
  mediaKitUrl,
  pricingNotes,
  processSteps,
  telegramUrl,
} from '../data/site'

const config = useRuntimeConfig()
const siteUrl = String(config.public.siteUrl).replace(/\/$/, '')
const pageUrl = `${siteUrl}/`
const heroImageUrl = `${siteUrl}/assets/agency-boss-hero.png`

useSeoMeta({
  title: 'AGENCY BOSS — реклама у YouTube-блогеров и в Telegram-каналах',
  description:
    'AGENCY BOSS подбирает рекламные размещения у YouTube-блогеров, в Telegram-каналах, Shorts, Twitch, VK, TikTok и MAX. Скачайте медиакит или запросите подборку в Telegram.',
  ogTitle: 'AGENCY BOSS — реклама у YouTube-блогеров и в Telegram',
  ogDescription:
    'Медиакит рекламного агентства для брендов: YouTube, Telegram, Shorts, Twitch, VK, TikTok и MAX.',
  ogImage: heroImageUrl,
  ogType: 'website',
  ogUrl: pageUrl,
  robots: 'index, follow',
  twitterCard: 'summary_large_image',
  twitterImage: heroImageUrl,
})

useHead({
  link: [{ rel: 'canonical', href: pageUrl }],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'AdvertisingAgency',
        name: 'AGENCY BOSS',
        url: pageUrl,
        image: heroImageUrl,
        areaServed: 'RU',
        serviceType: [
          'Реклама у YouTube-блогеров',
          'Реклама в Telegram-каналах',
          'Influencer marketing',
          'Медиапланирование',
        ],
        sameAs: [telegramUrl],
      }),
    },
  ],
})

const platformLabels = {
  telegram: 'Telegram',
  youtube: 'YouTube',
  'youtube-shorts': 'YouTube Shorts',
  twitch: 'Twitch',
  vk: 'VK Video',
  tiktok: 'TikTok',
  max: 'MAX',
} as const

const sliderModules = [Navigation, Keyboard, A11y]
</script>

<template>
  <main class="page-shell">
    <section class="hero-section" aria-labelledby="hero-title">
      <img class="hero-bg" src="/assets/agency-boss-hero.png" alt="" />
      <div class="hero-overlay"></div>

      <header class="topbar">
        <a class="brand" href="#top" aria-label="AGENCY BOSS">
          <span class="brand-mark">AB</span>
          <span>AGENCY BOSS</span>
        </a>

        <nav class="nav-links" aria-label="Основная навигация">
          <a href="#formats">Форматы</a>
          <a href="#inventory">Площадки</a>
          <a href="#pricing">Прайс</a>
          <a href="#contact">Контакт</a>
        </nav>

        <a class="topbar-cta" :href="telegramUrl" target="_blank" rel="noreferrer">
          <Send :size="17" />
          <span>В Telegram</span>
        </a>
      </header>

      <div id="top" class="hero-content">
        <p class="eyebrow">Реклама у блогеров и в каналах</p>
        <h1 id="hero-title">AGENCY BOSS</h1>
        <p class="hero-copy">
          Подбираем YouTube-блогеров и Telegram-каналы под задачу бренда: от быстрых 1/24
          размещений до нативных интеграций, отдельных роликов, стримов и Shorts.
        </p>

        <div class="hero-actions">
          <a class="primary-button" :href="telegramUrl" target="_blank" rel="noreferrer">
            Запросить подборку
            <ArrowRight :size="19" />
          </a>
          <a class="secondary-button" href="#formats">
            Смотреть форматы
          </a>
        </div>

        <dl class="hero-stats" aria-label="Ключевые направления">
          <div>
            <dt>YouTube</dt>
            <dd>прероллы, интеграции, ролики</dd>
          </div>
          <div>
            <dt>Telegram</dt>
            <dd>формат 1/24 и нативные посты</dd>
          </div>
          <div>
            <dt>CPM</dt>
            <dd>стоимость уточняется по аудитории</dd>
          </div>
        </dl>
      </div>
    </section>

    <section class="section intro-grid" aria-label="Преимущества">
      <article class="signal-card">
        <ShieldCheck :size="28" />
        <h2>Работаем от задачи бренда</h2>
        <p>Не продаем случайный список площадок. Сначала фиксируем продукт, аудиторию, ограничения и нужный формат контакта.</p>
      </article>
      <article class="signal-card">
        <BarChart3 :size="28" />
        <h2>Смотрим на экономику размещения</h2>
        <p>Учитываем CPM, качество аудитории, сезонность, вовлеченность и сложность ТЗ перед финальной ценой.</p>
      </article>
      <article class="signal-card">
        <BadgeCheck :size="28" />
        <h2>Ведем запуск до отчета</h2>
        <p>Собираем варианты, согласуем подачу, контролируем выход и возвращаемся с выводами по кампании.</p>
      </article>
    </section>

    <section id="formats" class="section section-split">
      <div class="section-heading">
        <p class="eyebrow">Форматы</p>
        <h2>Актуальные размещения для YouTube и Telegram</h2>
        <p>
          Стоимость ниже указана как ориентир. Финальная цена зависит от брифа, CPM, сроков,
          категории автора и требований к креативу.
        </p>
      </div>

      <div class="format-grid">
        <article v-for="format in adFormats" :key="format.id" class="format-card">
          <div class="format-topline">
            <span class="platform-pill" :class="`is-${format.platform}`">
              <MessageCircle v-if="format.platform === 'telegram'" :size="15" />
              <Play v-else :size="15" />
              {{ platformLabels[format.platform] }}
            </span>
            <span v-if="format.marker" class="marker">{{ format.marker }}</span>
          </div>
          <h3>{{ format.title }}</h3>
          <p>{{ format.description }}</p>
          <strong>{{ format.priceFrom }}</strong>
        </article>
      </div>
    </section>

    <section id="inventory" class="section">
      <div class="section-heading compact">
        <p class="eyebrow">Площадки</p>
        <h2>Часть медиакита уже на сайте, полный список — в таблице</h2>
        <p>
          Ниже показана витрина из добавленного файла Agency BOSS April. Полный список каналов,
          блогеров, ссылок и цен можно скачать одной таблицей.
        </p>
      </div>

      <div class="media-kit-bar">
        <div v-for="stat in mediaKitStats" :key="stat.label" class="media-kit-stat">
          <strong>{{ stat.value }}</strong>
          <span>{{ stat.label }}</span>
          <p>{{ stat.detail }}</p>
        </div>
        <a class="download-button" :href="mediaKitUrl" download>
          <Download :size="19" />
          Скачать полный Excel
        </a>
      </div>

      <div class="inventory-slider-wrap">
        <Swiper
          class="inventory-slider"
          :modules="sliderModules"
          :slides-per-view="1.08"
          :space-between="16"
          :keyboard="{ enabled: true }"
          :navigation="{ nextEl: '.inventory-next', prevEl: '.inventory-prev' }"
          :breakpoints="{
            720: { slidesPerView: 2.05, spaceBetween: 16 },
            1060: { slidesPerView: 3.2, spaceBetween: 18 },
          }"
        >
          <SwiperSlide v-for="item in featuredPlacements" :key="item.id">
            <article class="inventory-card">
              <div class="inventory-icon" :class="`is-${item.platform}`">
                <Radio v-if="item.platform === 'telegram'" :size="22" />
                <Clapperboard
                  v-else-if="item.platform === 'youtube' || item.platform === 'youtube-shorts'"
                  :size="22"
                />
                <Play v-else-if="item.platform === 'tiktok' || item.platform === 'vk'" :size="22" />
                <MessageCircle v-else :size="22" />
              </div>
              <span>{{ platformLabels[item.platform] }}</span>
              <h3>{{ item.title }}</h3>
              <p v-if="item.metric">{{ item.metric }}</p>
              <p v-else-if="item.note">{{ item.note }}</p>
              <strong v-if="item.price" class="placement-price">{{ item.price }}</strong>
              <a v-if="item.url" class="placement-link" :href="item.url" target="_blank" rel="noreferrer">
                Открыть площадку
                <ExternalLink :size="15" />
              </a>
              <div v-if="item.note && item.metric" class="tag-row" aria-label="Примечание">
                <span>{{ item.note }}</span>
              </div>
              <div class="format-row" aria-label="Доступные форматы">
                <b v-for="format in item.formats" :key="format">{{ format }}</b>
              </div>
            </article>
          </SwiperSlide>
        </Swiper>

        <div class="slider-controls" aria-label="Навигация по площадкам">
          <button class="inventory-prev" type="button" aria-label="Предыдущие площадки">
            <ChevronLeft :size="21" />
          </button>
          <button class="inventory-next" type="button" aria-label="Следующие площадки">
            <ChevronRight :size="21" />
          </button>
        </div>
      </div>
    </section>

    <section id="pricing" class="section pricing-section">
      <div class="pricing-panel">
        <div class="section-heading">
          <p class="eyebrow">Прайс</p>
          <h2>Публично показываем диапазоны, точную стоимость подтверждаем в личке</h2>
          <p>
            Такой формат защищает рекламодателя от устаревших таблиц: стоимость у площадок меняется
            из-за спроса, CPM, дедлайнов и состава ТЗ.
          </p>
        </div>

        <div class="notes-grid">
          <article v-for="note in pricingNotes" :key="note.marker" class="note-card">
            <span>{{ note.marker }}</span>
            <div>
              <h3>{{ note.title }}</h3>
              <p>{{ note.description }}</p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="section process-section">
      <div class="section-heading compact">
        <p class="eyebrow">Процесс</p>
        <h2>От брифа до отчета</h2>
      </div>

      <ol class="process-list">
        <li v-for="(step, index) in processSteps" :key="step">
          <span>{{ String(index + 1).padStart(2, '0') }}</span>
          <p>{{ step }}</p>
        </li>
      </ol>
    </section>

    <section id="contact" class="contact-section">
      <div>
        <p class="eyebrow">Связь</p>
        <h2>Получите подборку YouTube и Telegram-площадок под вашу задачу</h2>
        <p>
          Напишите в Telegram: укажите нишу, продукт, гео, желаемый формат, бюджетный коридор
          и сроки запуска. В ответ подготовим варианты и актуальные условия.
        </p>
      </div>

      <a class="contact-button" :href="telegramUrl" target="_blank" rel="noreferrer">
        <CircleDollarSign :size="20" />
        Запросить стоимость
      </a>
    </section>

    <footer class="site-footer">
      <a class="brand" href="#top" aria-label="AGENCY BOSS">
        <span class="brand-mark">AB</span>
        <span>AGENCY BOSS</span>
      </a>
      <p>Рекламные размещения у блогеров, в Telegram-каналах и creator media.</p>
      <div class="footer-links">
        <a :href="telegramUrl" target="_blank" rel="noreferrer">Telegram</a>
        <a :href="mediaKitUrl" download>Медиакит Excel</a>
      </div>
    </footer>
  </main>
</template>
