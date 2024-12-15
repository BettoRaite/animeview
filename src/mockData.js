export const mockData = [
  {
    gameTitle: "Cyberpunk 2077", // Corrected title
    genre: "Приключение", // "Adventure"
    platform: "PC",
    activationRegion: "RU", // "Russia"
    productType: "Цифровая версия", // "Digital Version"
    price: 1499,
    discount: 40,
    newReleaseFlag: false,
    availabilityStatus: "В наличии", // "In Stock"
    url: "./images/Cyberpunk-Edgerunners-S1-Poster-Lucy-en-1253181048.jpg",
  },
  {
    gameTitle: "S.T.A.L.K.E.R.: Call of Pripyat", // Corrected title
    genre: "Экшен", // "Action"
    platform: "PS5",
    activationRegion: "EU", // "Europe"
    productType: "Физическая версия", // "Physical Version"
    price: 3999,
    discount: 40,
    newReleaseFlag: true,
    availabilityStatus: "Предзаказ", // "Pre-order"
    url: "./images/stalker_call_of_pripyat-1713329-3763136643.jpg",
  },
  {
    gameTitle: "Terraria", // Correct title
    genre: "Головоломка", // "Puzzle"
    platform: "Xbox",
    activationRegion: "US", // "United States"
    productType: "Цифровая версия", // "Digital Version"
    price: 999,
    discount: 40,
    newReleaseFlag: false,
    availabilityStatus: "В наличии", // "In Stock"
    url: "./images/terraria.jpg",
  },
  {
    gameTitle: "World of Tanks Blitz", // Corrected title
    genre: "Спорт", // "Sport"
    platform: "Nintendo Switch",
    activationRegion: "JP", // "Japan"
    productType: "Цифровая версия", // "Digital Version"
    price: 2999,
    discount: 40,
    newReleaseFlag: true,
    availabilityStatus: "В наличии", // "In Stock"
    url: "./images/WoTB_KeyArt-3371722894.jpg",
  },
];

export const keyTranslations = new Map([
  ["gameTitle", "Название игры"],
  ["genre", "Жанр"],
  ["platform", "Платформа"],
  ["activationRegion", "Регион активации"],
  ["productType", "Тип продукта"],
  ["price", "Цена"],
  ["discount", "скидка"],
  ["newReleaseFlag", "Флаг нового релиза"],
  ["availabilityStatus", "Статус доступности"],
  ["url", "URL"],
]);
