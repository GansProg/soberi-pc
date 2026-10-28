(() => {
  'use strict';

  /* =========================================================
     Icons — one stroke style, currentColor, drawn for this game
     ========================================================= */
  const ICONS = {
    cpu: '<rect x="6" y="6" width="12" height="12" rx="1.5"/><rect x="9.5" y="9.5" width="5" height="5" rx=".5"/><path d="M9 3v3M12 3v3M15 3v3M9 18v3M12 18v3M15 18v3M3 9h3M3 12h3M3 15h3M18 9h3M18 12h3M18 15h3"/>',
    cooler: '<rect x="3" y="3" width="18" height="18" rx="3"/><circle cx="12" cy="12" r="2"/><path d="M12 10c0-3 1-5 4-5M14 12c3 0 5 1 5 4M12 14c0 3-1 5-4 5M10 12c-3 0-5-1-5-4"/>',
    ram: '<rect x="2" y="7" width="20" height="9" rx="1"/><path d="M5 10h3v3H5zM10.5 10h3v3h-3zM16 10h3v3h-3zM4 16v2M7 16v2M10 16v2M14 16v2M17 16v2M20 16v2"/>',
    ssd: '<rect x="2" y="9" width="20" height="6" rx="1"/><path d="M5 11.5h5M5 13h3M13 11h3v2h-3zM19 9v6"/>',
    gpu: '<rect x="2" y="6" width="17" height="11" rx="1.5"/><circle cx="7.5" cy="11.5" r="3"/><circle cx="14" cy="11.5" r="3"/><path d="M19 5v14M6 17v2M9 17v2M12 17v2M15 17v2"/>',
    psu: '<rect x="2" y="5" width="20" height="14" rx="1.5"/><circle cx="9" cy="12" r="4.5"/><path d="M9 7.5v9M4.5 12h9M16 8h3v3h-3zM16 14h3v2h-3z"/>',
    monitor: '<rect x="2.5" y="4" width="19" height="12.5" rx="1.5"/><path d="M12 16.5v3.5M8 20.5h8"/>',
    mouse: '<rect x="6.5" y="3" width="11" height="18" rx="5.5"/><path d="M12 3v6"/>',
    keyboard: '<rect x="2" y="7" width="20" height="10" rx="1.5"/><path d="M5.5 10.5h1M9 10.5h1M12.5 10.5h1M16 10.5h1M5.5 13.5h1M17 13.5h1.5M9 13.5h6"/>',
    printer: '<path d="M7 8V3h10v5"/><rect x="3" y="8" width="18" height="8" rx="1.5"/><path d="M7 14h10v7H7z"/><path d="M17.5 11h.5"/>',
    speakers: '<rect x="6" y="2.5" width="12" height="19" rx="2"/><circle cx="12" cy="14.5" r="3.5"/><circle cx="12" cy="7" r="1.5"/>',
    mic: '<rect x="9" y="2.5" width="6" height="11" rx="3"/><path d="M5.5 11a6.5 6.5 0 0 0 13 0M12 17.5v3.5M8.5 21h7"/>',
    webcam: '<circle cx="12" cy="10" r="6.5"/><circle cx="12" cy="10" r="2.5"/><path d="M12 16.5v3M7.5 21h9"/>',
    lan: '<path d="M7 3h10v8l-2 2H9l-2-2z"/><path d="M9.5 3v3M12 3v3M14.5 3v3M12 13v8"/>',
    scanner: '<rect x="2.5" y="10" width="19" height="8" rx="1.5"/><path d="M3.5 10 20 5.5M6 14h12"/>',
    headphones: '<path d="M4 15v-3a8 8 0 0 1 16 0v3"/><rect x="2.5" y="14" width="4.5" height="7" rx="1.5"/><rect x="17" y="14" width="4.5" height="7" rx="1.5"/>',
    headset: '<path d="M4 14v-2a8 8 0 0 1 16 0v2"/><rect x="2.5" y="13" width="4.5" height="6.5" rx="1.5"/><rect x="17" y="13" width="4.5" height="6.5" rx="1.5"/><path d="M5 19.5c1 1.8 3.5 2 6.5 2"/><circle cx="12.5" cy="21.5" r=".8"/>',
    touch: '<rect x="5" y="2.5" width="14" height="19" rx="2"/><circle cx="12" cy="12" r="2"/><path d="M8.6 9.2a4.5 4.5 0 0 1 6.8 0"/>',
    power: '<path d="M12 3v8"/><path d="M6.6 6.6a7.5 7.5 0 1 0 10.8 0"/>',
    star: '<path d="m12 2.8 2.8 5.9 6.4.8-4.7 4.4 1.2 6.4L12 17.2l-5.7 3.1 1.2-6.4-4.7-4.4 6.4-.8z" fill="currentColor" stroke="none"/>',
    info: '<circle cx="12" cy="12" r="9"/><path d="M12 11v5.5M12 7.5v.5"/>',
    check: '<circle cx="12" cy="12" r="9"/><path d="m8 12.3 2.7 2.7L16 9.6"/>',
    cross: '<circle cx="12" cy="12" r="9"/><path d="m9 9 6 6M15 9l-6 6"/>'
  };

  const icon = (name, cls = 'ic') =>
    `<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${ICONS[name] || ''}</svg>`;

  /* =========================================================
     Content
     ========================================================= */

  const TYPES = {
    cpu: {
      label: 'Процессор', icon: 'cpu',
      home: 'в сокет CPU — квадратное гнездо в середине платы',
      fact: 'Процессор выполняет команды программ и управляет работой всего компьютера.',
      missing: 'Нет процессора. Компьютеру нечем выполнять команды программ.'
    },
    cooler: {
      label: 'Кулер', icon: 'cooler',
      home: 'поверх процессора, в тот же сокет CPU',
      fact: 'Кулер отводит тепло от процессора, чтобы тот не перегрелся.',
      missing: 'Нет кулера. Без охлаждения процессор перегреется за несколько секунд и компьютер выключится.'
    },
    ram: {
      label: 'Оперативная память', icon: 'ram',
      home: 'в длинный слот DIMM справа от процессора',
      fact: 'Оперативная память хранит данные работающих программ, пока компьютер включён.',
      missing: 'Нет оперативной памяти. Программам негде хранить данные во время работы, компьютер не запустится.'
    },
    ssd: {
      label: 'Накопитель SSD', icon: 'ssd',
      home: 'в короткий слот M.2 под процессором',
      fact: 'SSD хранит операционную систему, программы и файлы даже после выключения.',
      missing: 'Нет накопителя. Операционную систему не с чего загрузить, а файлы негде хранить.'
    },
    gpu: {
      label: 'Видеокарта', icon: 'gpu',
      home: 'в длинный слот PCIe внизу платы',
      fact: 'Видеокарта строит изображение и передаёт его на монитор.',
      missing: 'Нет видеокарты. На монитор не придёт изображение.'
    },
    psu: {
      label: 'Блок питания', icon: 'psu',
      home: 'в отсек PSU внизу корпуса',
      fact: 'Блок питания превращает ток из розетки в напряжение, которое нужно деталям компьютера.',
      missing: 'Нет блока питания. Детали не получат электричество, компьютер не включится.'
    }
  };

  const PORTS = {
    hdmi: { label: 'HDMI', name: 'HDMI', desc: 'HDMI передаёт изображение на монитор.' },
    usb: { label: 'USB', name: 'USB', desc: 'USB — универсальный разъём для клавиатуры, мыши, принтера, камеры.' },
    lan: { label: 'Сеть', name: 'сетевой разъём', desc: 'Сетевой разъём нужен для кабеля интернета.' },
    'audio-out': { label: 'Звук', name: 'зелёный аудиоразъём', desc: 'Зелёный аудиоразъём — выход звука на колонки или наушники.' },
    mic: { label: 'Микрофон', name: 'розовый аудиоразъём', desc: 'Розовый аудиоразъём — вход для микрофона.' }
  };

  const IO = {
    in: { label: 'Ввод', sub: 'Информация идёт в компьютер', long: 'устройство ввода' },
    out: { label: 'Вывод', sub: 'Информация идёт из компьютера к человеку', long: 'устройство вывода' },
    both: { label: 'Ввод и вывод', sub: 'Информация идёт в обе стороны', long: 'устройство ввода и вывода' }
  };

  const DEVICES = {
    monitor: { name: 'Монитор', icon: 'monitor', plug: 'hdmi', io: 'out', spec: 'Показывает изображение', why: 'Монитор показывает изображение, которое приходит из компьютера.' },
    keyboard: { name: 'Клавиатура', icon: 'keyboard', plug: 'usb', io: 'in', spec: 'Набор текста и команд', why: 'Клавиатура передаёт в компьютер нажатые клавиши.' },
    mouse: { name: 'Мышь', icon: 'mouse', plug: 'usb', io: 'in', spec: 'Управляет указателем', why: 'Мышь передаёт в компьютер движения и щелчки.' },
    printer: { name: 'Принтер', icon: 'printer', plug: 'usb', io: 'out', spec: 'Печатает на бумаге', why: 'Принтер переносит документ из компьютера на бумагу.' },
    webcam: { name: 'Веб-камера', icon: 'webcam', plug: 'usb', io: 'in', spec: 'Снимает видео', why: 'Веб-камера передаёт в компьютер изображение с камеры.' },
    speakers: { name: 'Колонки', icon: 'speakers', plug: 'audio-out', io: 'out', spec: 'Воспроизводят звук', why: 'Колонки воспроизводят звук из компьютера.' },
    mic: { name: 'Микрофон', icon: 'mic', plug: 'mic', io: 'in', spec: 'Записывает голос', why: 'Микрофон передаёт в компьютер звук голоса.' },
    lan: { name: 'Сетевой кабель', icon: 'lan', plug: 'lan', io: 'both', spec: 'Подключает к интернету', why: 'Сетевой кабель и принимает, и передаёт данные.' },
    scanner: { name: 'Сканер', icon: 'scanner', plug: 'usb', io: 'in', spec: 'Сканирует документы', why: 'Сканер переносит в компьютер изображение с бумаги.' },
    headphones: { name: 'Наушники', icon: 'headphones', plug: 'audio-out', io: 'out', spec: 'Звук только для тебя', why: 'Наушники воспроизводят звук из компьютера.' },
    touch: { name: 'Сенсорный экран', icon: 'touch', plug: 'usb', io: 'both', spec: 'Экран, который чувствует касания', why: 'Сенсорный экран показывает изображение и принимает касания пальцем.' },
    headset: { name: 'Гарнитура', icon: 'headset', plug: 'usb', io: 'both', spec: 'Наушники с микрофоном', why: 'Гарнитура воспроизводит звук и передаёт в компьютер голос.' }
  };

  // Motherboard places, in percent of the board (aspect 5:6)
  // Motherboard places in percent of the board. m: narrow portrait board (5:6), d: wide landscape board (4:3)
  const MOBO_SLOTS = [
    { id: 'cpu', accepts: ['cpu', 'cooler'], label: 'CPU', desc: 'Сокет процессора', hint: 'процессор и кулер', cls: 'slot-cpu', m: [26, 9, 30, 24], d: [18, 8, 28, 33] },
    { id: 'ram', accepts: ['ram'], label: 'DIMM_A1', desc: 'Слот оперативной памяти', hint: 'память', cls: 'slot-ram', m: [63, 6, 21, 40], d: [50, 6, 15, 52] },
    { id: 'ssd', accepts: ['ssd'], label: 'M.2_1', desc: 'Слот M.2 для накопителя', hint: 'накопитель', cls: 'slot-ssd', m: [26, 38, 32, 10], d: [18, 47, 28, 13] },
    { id: 'gpu', accepts: ['gpu'], label: 'PCIE_X16', desc: 'Слот PCIe для видеокарты', hint: 'видеокарта', cls: 'slot-gpu', m: [7, 53, 77, 12], d: [5, 65, 70, 13] },
    { id: 'psu', accepts: ['psu'], label: 'PSU', desc: 'Отсек блока питания', hint: 'блок питания', cls: 'slot-psu', m: [7, 72, 50, 21], d: [5, 82, 44, 14] }
  ];
  const BOARD_SILK = {
    m: { model: [7, 3.2], socket: [26, 34], mem: [63, 47], power: [85, 84] },
    d: { model: [5, 3], socket: [18, 42], mem: [50, 59], power: [86, 86] }
  };

  const REAR_SLOTS = [
    { id: 'hdmi', port: 'hdmi' },
    { id: 'usb1', port: 'usb' },
    { id: 'usb2', port: 'usb' },
    { id: 'lan', port: 'lan' },
    { id: 'usb3', port: 'usb' },
    { id: 'usb4', port: 'usb' },
    { id: 'aout', port: 'audio-out' },
    { id: 'mic', port: 'mic' }
  ];

  const BIN_SLOTS = [
    { id: 'in', io: 'in' },
    { id: 'out', io: 'out' },
    { id: 'both', io: 'both' }
  ];

  const dev = (key, extra = {}) => ({ id: key, kind: 'device', key, ...DEVICES[key], ...extra });

  const MISSIONS = [
    {
      id: 'inside',
      title: 'Что внутри системного блока',
      short: 'Поставь шесть главных деталей на материнскую плату.',
      task: 'Перетащи детали на плату или нажми на деталь, а потом на место для неё. Когда всё встанет, нажми кнопку включения.',
      layout: 'mobo',
      hints: true,
      required: ['cpu', 'cooler', 'ram', 'ssd', 'gpu', 'psu'],
      parts: [
        { id: 'gpu', kind: 'part', type: 'gpu', name: 'Видеокарта', short: 'Видеокарта', spec: 'Строит изображение' },
        dev('mouse'),
        { id: 'ram', kind: 'part', type: 'ram', name: 'Оперативная память', short: 'Память', spec: 'Память для работающих программ' },
        { id: 'psu', kind: 'part', type: 'psu', name: 'Блок питания', short: 'Блок питания', spec: 'Даёт электричество деталям' },
        { id: 'cpu', kind: 'part', type: 'cpu', name: 'Процессор', short: 'Процессор', spec: 'Выполняет команды программ' },
        dev('monitor'),
        { id: 'ssd', kind: 'part', type: 'ssd', name: 'Накопитель SSD', short: 'SSD', spec: 'Хранит файлы и систему' },
        { id: 'cooler', kind: 'part', type: 'cooler', name: 'Кулер', short: 'Кулер', spec: 'Охлаждает процессор' }
      ]
    },
    {
      id: 'io',
      title: 'Ввод или вывод',
      short: 'Разложи устройства по тому, куда идёт информация.',
      task: 'Определи, куда идёт информация: в компьютер, из компьютера или в обе стороны. Положи каждое устройство в нужный лоток и нажми «Проверить».',
      layout: 'bins',
      parts: ['keyboard', 'monitor', 'mic', 'printer', 'touch', 'scanner', 'speakers', 'mouse', 'headset', 'webcam', 'headphones'].map((k) => dev(k))
    },
    {
      id: 'ports',
      title: 'Подключи устройства',
      short: 'Найди для каждого устройства разъём на задней панели.',
      task: 'У каждого устройства свой разъём. Подключи всё к задней панели системного блока и нажми кнопку включения.',
      layout: 'rear',
      parts: ['speakers', 'keyboard', 'monitor', 'lan', 'mouse', 'mic', 'printer', 'webcam'].map((k) => dev(k))
    },
    {
      id: 'compat',
      title: 'Детали, которые подходят друг другу',
      short: 'Подбери процессор и память под конкретную плату.',
      task: 'Не всякая деталь подходит к любой плате. Посмотри, что напечатано на плате, и выбери процессор и память, которые с ней совместимы.',
      layout: 'mobo',
      board: { socket: 'AM5', mem: 'DDR5', model: 'SP-B650M' },
      brief: 'На плате сокет AM5 и слоты памяти DDR5. Накопитель, видеокарта и блок питания уже стоят.',
      required: ['cpu', 'cooler', 'ram', 'ssd', 'gpu', 'psu'],
      preinstalled: { ssd: ['pre-ssd'], gpu: ['pre-gpu'], psu: ['pre-psu'] },
      parts: [
        { id: 'cpu-intel', kind: 'part', type: 'cpu', name: 'Intel Core i5-12400', short: 'Core i5-12400', spec: 'Сокет LGA1700', socket: 'LGA1700' },
        { id: 'ram-ddr4', kind: 'part', type: 'ram', name: 'Память 16 ГБ DDR4', short: 'DDR4 16 ГБ', spec: 'Тип памяти DDR4', mem: 'DDR4' },
        { id: 'cooler', kind: 'part', type: 'cooler', name: 'Башенный кулер', short: 'Кулер', spec: 'Подходит ко всем сокетам' },
        { id: 'cpu-am5', kind: 'part', type: 'cpu', name: 'AMD Ryzen 5 7600', short: 'Ryzen 5 7600', spec: 'Сокет AM5', socket: 'AM5' },
        { id: 'ram-ddr5', kind: 'part', type: 'ram', name: 'Память 16 ГБ DDR5', short: 'DDR5 16 ГБ', spec: 'Тип памяти DDR5', mem: 'DDR5' },
        { id: 'cpu-am4', kind: 'part', type: 'cpu', name: 'AMD Ryzen 5 5600', short: 'Ryzen 5 5600', spec: 'Сокет AM4', socket: 'AM4' },
        { id: 'pre-ssd', kind: 'part', type: 'ssd', name: 'SSD 1 ТБ', short: 'SSD 1 ТБ', pre: true },
        { id: 'pre-gpu', kind: 'part', type: 'gpu', name: 'GeForce RTX 4060', short: 'GeForce RTX 4060', pre: true },
        { id: 'pre-psu', kind: 'part', type: 'psu', name: 'Блок питания 650 Вт', short: 'Блок 650 Вт', pre: true, capacity: 650 }
      ]
    },
    {
      id: 'order',
      title: 'Заказ: компьютер для видеомонтажа',
      short: 'Собери компьютер под бюджет и не забудь про мощность.',
      task: 'Собери компьютер по заказу. Следи за суммой и за тем, хватит ли мощности блока питания. Подходящих сборок несколько.',
      layout: 'mobo',
      board: { socket: 'AM5', mem: 'DDR5', model: 'SP-B650M', watts: 40 },
      budget: 450000,
      power: true,
      showPrice: true,
      brief: 'Школьный клуб видеомонтажа просит собрать компьютер с видеокартой. Бюджет 450 000 ₸, материнская плата AM5 с памятью DDR5 уже куплена.',
      required: ['cpu', 'cooler', 'ram', 'ssd', 'gpu', 'psu'],
      parts: [
        { id: 'gpu-7800', kind: 'part', type: 'gpu', name: 'Radeon RX 7800 XT', short: 'RX 7800 XT', spec: 'Мощная видеокарта', price: 260000, watts: 263 },
        { id: 'cpu-7700', kind: 'part', type: 'cpu', name: 'AMD Ryzen 7 7700X', short: 'Ryzen 7 7700X', spec: 'Сокет AM5, 8 ядер', socket: 'AM5', price: 150000, watts: 105 },
        { id: 'ram-32', kind: 'part', type: 'ram', name: 'Память 32 ГБ DDR5', short: 'DDR5 32 ГБ', spec: 'Тип памяти DDR5', mem: 'DDR5', price: 55000, watts: 8 },
        { id: 'psu-450', kind: 'part', type: 'psu', name: 'Блок питания 450 Вт', short: 'Блок 450 Вт', spec: 'Мощность 450 Вт', price: 25000, capacity: 450 },
        { id: 'cpu-12400', kind: 'part', type: 'cpu', name: 'Intel Core i5-12400', short: 'Core i5-12400', spec: 'Сокет LGA1700, 6 ядер', socket: 'LGA1700', price: 80000, watts: 65 },
        { id: 'ssd-500', kind: 'part', type: 'ssd', name: 'SSD 500 ГБ', short: 'SSD 500 ГБ', spec: 'Накопитель M.2', price: 20000, watts: 5 },
        { id: 'gpu-4060', kind: 'part', type: 'gpu', name: 'GeForce RTX 4060', short: 'RTX 4060', spec: 'Видеокарта для монтажа', price: 150000, watts: 115 },
        { id: 'ram-ddr4', kind: 'part', type: 'ram', name: 'Память 16 ГБ DDR4', short: 'DDR4 16 ГБ', spec: 'Тип памяти DDR4', mem: 'DDR4', price: 22000, watts: 5 },
        { id: 'cooler', kind: 'part', type: 'cooler', name: 'Башенный кулер', short: 'Кулер', spec: 'Подходит ко всем сокетам', price: 15000, watts: 5 },
        { id: 'cpu-7600', kind: 'part', type: 'cpu', name: 'AMD Ryzen 5 7600', short: 'Ryzen 5 7600', spec: 'Сокет AM5, 6 ядер', socket: 'AM5', price: 95000, watts: 65 },
        { id: 'psu-750', kind: 'part', type: 'psu', name: 'Блок питания 750 Вт', short: 'Блок 750 Вт', spec: 'Мощность 750 Вт', price: 45000, capacity: 750 },
        { id: 'ram-16', kind: 'part', type: 'ram', name: 'Память 16 ГБ DDR5', short: 'DDR5 16 ГБ', spec: 'Тип памяти DDR5', mem: 'DDR5', price: 30000, watts: 5 },
        { id: 'ssd-1tb', kind: 'part', type: 'ssd', name: 'SSD 1 ТБ', short: 'SSD 1 ТБ', spec: 'Накопитель M.2', price: 32000, watts: 6 }
      ]
    }
  ];

  const RANKS = [
    [0, 'Новичок'],
    [3, 'Ученик мастера'],
    [7, 'Сборщик'],
    [11, 'Мастер'],
    [14, 'Главный инженер']
  ];

  const POWER_MARGIN = 1.3;

  /* =========================================================
     Storage
     ========================================================= */
  const STORE_KEY = 'soberi-pc-v1';
  let store = { player: { name: '', cls: '' }, progress: {}, log: [] };

  function load() {
    try {
      const raw = localStorage.getItem(STORE_KEY);
      if (raw) store = { ...store, ...JSON.parse(raw) };
    } catch (e) { /* storage blocked: play without saving */ }
  }

  function save() {
    try { localStorage.setItem(STORE_KEY, JSON.stringify(store)); } catch (e) { /* ignore */ }
  }

  /* =========================================================
     Helpers
     ========================================================= */
  const $ = (sel, root = document) => root.querySelector(sel);
  const app = $('#app');
  const announcer = $('#announcer');
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const money = (n) => `${n.toLocaleString('ru-RU')} ₸`;
  const plural = (n, one, few, many) => {
    const a = Math.abs(n) % 100; const b = a % 10;
    if (a > 10 && a < 20) return many;
    if (b > 1 && b < 5) return few;
    if (b === 1) return one;
    return many;
  };
  const duration = (sec) => {
    const m = Math.floor(sec / 60); const s = sec % 60;
    return m ? `${m} мин ${s} с` : `${s} с`;
  };
  const totalStars = () => MISSIONS.reduce((sum, m) => sum + (store.progress[m.id]?.stars || 0), 0);
  const rankFor = (stars) => RANKS.filter(([min]) => stars >= min).pop()[1];
  const starsHtml = (n, label = true) =>
    `<span class="stars"${label ? ` role="img" aria-label="${n} ${plural(n, 'звезда', 'звезды', 'звёзд')} из 3"` : ''}>${[0, 1, 2].map((i) => icon('star', i < n ? 'ic' : 'ic is-empty')).join('')}</span>`;
  const capFirst = (s) => s.charAt(0).toUpperCase() + s.slice(1);

  const partIcon = (p) => (p.kind === 'device' ? p.icon : TYPES[p.type].icon);

  function announce(text) {
    announcer.textContent = '';
    requestAnimationFrame(() => { announcer.textContent = text; });
  }

  /* =========================================================
     Session
     ========================================================= */
  let session = null;

  function slotsFor(m) {
    if (m.layout === 'mobo') return MOBO_SLOTS;
    if (m.layout === 'rear') return REAR_SLOTS;
    return BIN_SLOTS;
  }

  function startSession(m) {
    const placed = {};
    slotsFor(m).forEach((s) => { placed[s.id] = []; });
    Object.entries(m.preinstalled || {}).forEach(([slot, ids]) => { placed[slot] = [...ids]; });
    session = {
      mission: m,
      placed,
      selected: null,
      wrong: 0,
      failed: 0,
      startedAt: Date.now(),
      status: { kind: 'info', text: m.layout === 'bins' ? 'Выбери устройство из списка.' : m.layout === 'rear' ? 'Выбери устройство из списка.' : 'Выбери деталь на складе.' }
    };
  }

  const partById = (id) => session.mission.parts.find((p) => p.id === id);
  const slotById = (id) => slotsFor(session.mission).find((s) => s.id === id);
  const placedIds = () => Object.values(session.placed).flat();
  const shelfParts = () => session.mission.parts.filter((p) => !p.pre && !placedIds().includes(p.id));
  const placedParts = () => placedIds().map(partById);
  const findPlacedType = (type) => placedParts().find((p) => p.type === type);

  function validate(part, slot) {
    const m = session.mission;
    const items = session.placed[slot.id];

    if (m.layout === 'mobo') {
      if (part.kind === 'device') {
        return { ok: false, mistake: true, text: `${part.name} — внешнее устройство. Его не ставят внутрь, а подключают кабелем к задней панели системного блока.` };
      }
      if (!slot.accepts.includes(part.type)) {
        return { ok: false, mistake: true, text: `Не подходит. Это ${slot.desc.toLowerCase()}, а ${TYPES[part.type].label.toLowerCase()} ставят ${TYPES[part.type].home}.` };
      }
      const layer = slot.accepts.indexOf(part.type);
      const sameType = items.map(partById).find((p) => p.type === part.type);
      if (sameType) {
        return { ok: false, mistake: false, text: `Здесь уже стоит: ${sameType.name}. Чтобы заменить, сначала сними старую деталь: нажми на это место на плате.` };
      }
      if (layer > 0 && items.length < layer) {
        return { ok: false, mistake: true, text: 'Кулер ставят поверх процессора. Сначала установи процессор.' };
      }
      return { ok: true, text: `${part.name}: на месте. ${TYPES[part.type].fact}` };
    }

    if (m.layout === 'rear') {
      if (items.length) {
        return { ok: false, mistake: false, text: `Этот разъём уже занят: ${partById(items[0]).name}.` };
      }
      if (part.plug !== slot.port) {
        return { ok: false, mistake: true, text: `Не подходит. ${PORTS[slot.port].desc} ${part.name}: нужен разъём ${PORTS[part.plug].name}.` };
      }
      return { ok: true, text: `Подключено: ${part.name.toLowerCase()}, разъём ${PORTS[slot.port].name}. Это ${IO[part.io].long}.` };
    }

    // bins
    if (part.io !== slot.io) {
      return { ok: false, mistake: true, text: `Не так. ${part.why} Значит, это ${IO[part.io].long}.` };
    }
    return { ok: true, text: `Верно. ${part.why}` };
  }

  function setStatus(kind, text) {
    session.status = { kind, text };
    const el = $('#status');
    if (el) {
      el.dataset.kind = kind;
      el.innerHTML = `${icon(kind === 'ok' ? 'check' : kind === 'error' ? 'cross' : 'info')}<span>${esc(text)}</span>`;
    }
    announce(text);
  }

  function shake(slotId) {
    const el = app.querySelector(`[data-slot-box="${slotId}"]`);
    if (!el) return;
    el.classList.remove('is-wrong');
    void el.offsetWidth;
    el.classList.add('is-wrong');
    el.addEventListener('animationend', () => el.classList.remove('is-wrong'), { once: true });
  }

  function place(partId, slotId) {
    const part = partById(partId);
    const slot = slotById(slotId);
    if (!part || !slot) return;
    const res = validate(part, slot);
    if (!res.ok) {
      if (res.mistake) session.wrong += 1;
      setStatus('error', res.text);
      shake(slotId);
      return;
    }
    session.placed[slotId].push(partId);
    session.selected = null;
    refresh(`slot:${slotId}`);
    setStatus('ok', res.text);
  }

  function removeFromSlot(slotId, partId) {
    const items = session.placed[slotId];
    let id = partId;
    if (!id) {
      for (let i = items.length - 1; i >= 0; i -= 1) {
        if (!partById(items[i]).pre) { id = items[i]; break; }
      }
    }
    if (!id) {
      setStatus('info', 'Эта деталь установлена заранее, её трогать не нужно.');
      return;
    }
    const part = partById(id);
    if (session.mission.layout === 'mobo' && part.type === 'cpu' && items.some((x) => partById(x).type === 'cooler')) {
      setStatus('info', 'Сначала сними кулер: он стоит поверх процессора.');
      return;
    }
    session.placed[slotId] = items.filter((x) => x !== id);
    refresh(`slot:${slotId}`);
    setStatus('info', `${part.name}: снято и возвращено на склад.`);
  }

  function select(partId) {
    session.selected = session.selected === partId ? null : partId;
    refresh(`part:${partId}`);
    if (session.selected) {
      const p = partById(partId);
      const where = session.mission.layout === 'bins' ? 'лоток' : session.mission.layout === 'rear' ? 'разъём' : 'место на плате';
      setStatus('info', `Выбрано: ${p.name}. Теперь выбери ${where}.`);
    }
  }

  /* =========================================================
     Checks (the power button)
     ========================================================= */
  function runChecks() {
    const m = session.mission;
    const lines = [];
    const errors = [];

    if (m.layout === 'mobo') {
      m.required.forEach((type) => {
        const p = findPlacedType(type);
        const line = { label: TYPES[type].label, value: p ? p.name : 'не найден', ok: !!p };
        if (!p) errors.push(TYPES[type].missing);
        if (p && m.board) {
          if (type === 'cpu' && p.socket !== m.board.socket) {
            line.ok = false;
            line.value = `${p.name}: не тот сокет`;
            errors.push(`${p.name} рассчитан на сокет ${p.socket}, а на плате сокет ${m.board.socket}. Нужен процессор с сокетом ${m.board.socket}.`);
          }
          if (type === 'ram' && p.mem !== m.board.mem) {
            line.ok = false;
            line.value = `${p.name}: не тот тип`;
            errors.push(`Память ${p.mem} не подходит к слотам ${m.board.mem}: у них разные вырезы-ключи и разное напряжение.`);
          }
        }
        lines.push(line);
      });

      if (m.power) {
        const draw = placedParts().reduce((s, p) => s + (p.watts || 0), m.board.watts || 0);
        const need = Math.ceil((draw * POWER_MARGIN) / 10) * 10;
        const psu = findPlacedType('psu');
        if (psu) {
          const ok = psu.capacity >= need;
          lines.push({ label: 'Питание', value: `нужно ${need} Вт, есть ${psu.capacity} Вт`, ok });
          if (!ok) errors.push(`Блоку питания не хватает мощности. Детали потребляют ${draw} Вт, с запасом 30% нужен блок не меньше ${need} Вт, а стоит ${psu.capacity} Вт.`);
        }
      }

      if (m.budget) {
        const total = placedParts().reduce((s, p) => s + (p.price || 0), 0);
        const ok = total <= m.budget;
        lines.push({ label: 'Бюджет', value: `${money(total)} из ${money(m.budget)}`, ok });
        if (!ok) errors.push(`Сборка стоит ${money(total)}, это на ${money(total - m.budget)} больше бюджета. Замени что-то на деталь подешевле.`);
      }
    }

    if (m.layout === 'rear') {
      m.parts.forEach((p) => {
        const slotId = Object.keys(session.placed).find((s) => session.placed[s].includes(p.id));
        lines.push({ label: p.name, value: slotId ? `${PORTS[slotById(slotId).port].label}, ${IO[p.io].label.toLowerCase()}` : 'не подключено', ok: !!slotId });
        if (!slotId) errors.push(`${p.name}: не подключено. Найди для него разъём ${PORTS[p.plug].name}.`);
      });
    }

    if (m.layout === 'bins') {
      const left = shelfParts();
      BIN_SLOTS.forEach((b) => {
        const names = session.placed[b.id].map((id) => partById(id).name);
        lines.push({ label: IO[b.io].label, value: names.length ? names.join(', ') : 'пусто', ok: true });
      });
      if (left.length) {
        lines.push({ label: 'Не разложено', value: left.map((p) => p.name).join(', '), ok: false });
        errors.push(`Ещё не разложены: ${left.map((p) => p.name.toLowerCase()).join(', ')}.`);
      }
    }

    return { lines, errors };
  }

  function starsFor(errorsCount) {
    if (errorsCount === 0) return 3;
    if (errorsCount <= 2) return 2;
    return 1;
  }

  function powerOn() {
    const m = session.mission;
    const { lines, errors } = runChecks();
    const ok = errors.length === 0;
    if (!ok) session.failed += 1;

    let result = null;
    if (ok) {
      const seconds = Math.round((Date.now() - session.startedAt) / 1000);
      const errs = session.wrong + session.failed;
      const stars = starsFor(errs);
      const before = totalStars();
      const prev = store.progress[m.id] || {};
      store.progress[m.id] = { stars: Math.max(prev.stars || 0, stars), done: true };
      store.log.push({
        name: store.player.name || '',
        cls: store.player.cls || '',
        mission: m.title,
        stars,
        wrong: session.wrong,
        failed: session.failed,
        seconds,
        startedAt: new Date(session.startedAt).toISOString(),
        finishedAt: new Date().toISOString()
      });
      save();
      result = { stars, seconds, errs, rankUp: rankFor(totalStars()) !== rankFor(before) ? rankFor(totalStars()) : null };
      renderRank();
    }

    openPost(lines, errors, result);
  }

  /* =========================================================
     BIOS dialog
     ========================================================= */
  const dialog = $('#post');

  function openPost(lines, errors, result) {
    const m = session.mission;
    const idx = MISSIONS.indexOf(m);
    const next = MISSIONS[idx + 1];
    const title = m.layout === 'bins' ? 'СОБЕРИ-ПК. Проверка устройств' : 'СОБЕРИ-ПК BIOS 1.0. Проверка оборудования';
    $('#post-title').textContent = title;
    $('#post-lines').innerHTML = lines.map((l, i) =>
      `<li class="${l.ok ? 'is-ok' : 'is-bad'}" style="--i:${i}"><span>${esc(l.label)}</span><span class="v">${esc(l.value)}${l.ok ? '' : ' — ошибка'}</span></li>`
    ).join('');

    const verdict = $('#post-verdict');
    verdict.style.setProperty('--n', lines.length);
    if (result) {
      const doneText = m.layout === 'bins' ? 'Всё разложено верно' : m.layout === 'rear' ? 'Все устройства работают' : 'Компьютер запустился';
      verdict.innerHTML = `
        <h2>${doneText}</h2>
        ${starsHtml(result.stars)}
        <p class="verdict-stats">Ошибок: ${result.errs}. Время: ${duration(result.seconds)}.${result.rankUp ? ` Новое звание: ${esc(result.rankUp)}.` : ''}</p>
        <div class="verdict-actions">
          ${next ? `<button class="btn btn-primary" data-action="go" data-to="#/mission/${next.id}">Следующая миссия</button>` : `<button class="btn btn-primary" data-action="go" data-to="#/results">Мои результаты</button>`}
          <button class="btn btn-ghost" data-action="go" data-to="#/">К списку миссий</button>
        </div>`;
    } else {
      const failText = m.layout === 'bins' ? 'Пока не всё' : m.layout === 'rear' ? 'Не всё подключено' : 'Компьютер не запустился';
      verdict.innerHTML = `
        <h2>${failText}</h2>
        <ul>${errors.map((e) => `<li>${esc(e)}</li>`).join('')}</ul>
        <div class="verdict-actions">
          <button class="btn btn-primary" data-action="close">Вернуться к сборке</button>
        </div>`;
    }
    if (typeof dialog.showModal === 'function') {
      dialog.showModal();
      const first = verdict.querySelector('button');
      if (first) first.focus();
    }
  }

  dialog.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-action]');
    if (!btn) return;
    if (btn.dataset.action === 'close') dialog.close();
    if (btn.dataset.action === 'go') {
      dialog.close();
      location.hash = btn.dataset.to;
    }
  });

  /* =========================================================
     Rendering
     ========================================================= */
  function renderRank() {
    const s = totalStars();
    const max = MISSIONS.length * 3;
    $('#rank').innerHTML = `<span class="rank-label">Звание:</span> <strong>${esc(rankFor(s))}</strong> <span class="star-count" aria-label="${s} из ${max} звёзд">${icon('star', 'ic')} ${s} из ${max}</span>`;
  }

  function setNav(which) {
    document.querySelectorAll('[data-nav]').forEach((a) => {
      if (a.dataset.nav === which) a.setAttribute('aria-current', 'page');
      else a.removeAttribute('aria-current');
    });
  }

  function chip(p) {
    return `<span class="chip${p.pre ? ' is-pre' : ''}">${icon(partIcon(p))}<span class="chip-name">${esc(p.short || p.name)}</span></span>`;
  }

  function tracesFor(k) {
    const r = Object.fromEntries(MOBO_SLOTS.map((sl) => [sl.id, sl[k]]));
    const [cx, cy, cw, ch] = r.cpu; const [rx, ry, , rh] = r.ram; const [sx, sy, sw, sh] = r.ssd;
    const [gx, gy, gw] = r.gpu; const [px, py, pw, ph] = r.psu; const pwr = BOARD_SILK[k].power;
    const midX = (cx + cw + rx) / 2;
    const paths = [
      `M${cx + cw} ${cy + ch * 0.35} H${midX} V${ry + rh * 0.25} H${rx}`,
      `M${cx + cw} ${cy + ch * 0.6} H${midX + 1.2} V${ry + rh * 0.4} H${rx}`,
      `M${cx + cw * 0.3} ${cy + ch} V${sy}`, `M${cx + cw * 0.55} ${cy + ch} V${sy}`,
      `M${sx + sw * 0.2} ${sy + sh} V${gy}`, `M${sx + sw * 0.7} ${sy + sh} V${(sy + sh + gy) / 2} H${sx + sw * 0.85} V${gy}`,
      `M${rx + r.ram[2]} ${ry + rh * 0.7} H${Math.min(96, gx + gw + 4)} V${py + ph * 0.3} H${pwr[0] - 4}`,
      `M${px + pw} ${py + ph * 0.6} H${pwr[0] - 4}`
    ];
    return `<svg class="traces traces-${k}" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true" focusable="false">${paths.map((d) => `<path d="${d}"/>`).join('')}</svg>`;
  }

  const posVars = (prefix, [x, y, w, h]) => `--${prefix}x:${x}%;--${prefix}y:${y}%;--${prefix}w:${w}%;--${prefix}h:${h}%`;
  const silkVars = (key) => `--mx:${BOARD_SILK.m[key][0]}%;--my:${BOARD_SILK.m[key][1]}%;--dx:${BOARD_SILK.d[key][0]}%;--dy:${BOARD_SILK.d[key][1]}%`;

  function moboBoard(m, placed, interactive) {
    const lookup = (id) => m.parts.find((p) => p.id === id);
    const tag = interactive ? 'button' : 'div';
    const slots = MOBO_SLOTS.map((s) => {
      const items = (placed[s.id] || []).map(lookup);
      const names = items.map((p) => p.name).join(', ');
      const aria = interactive ? ` type="button" data-slot="${s.id}" data-key="slot:${s.id}" aria-label="${esc(`${s.desc} ${s.label}: ${names || 'пусто'}`)}"` : '';
      const inner = items.length
        ? `<span class="slot-label">${s.label}</span><span class="slot-parts">${items.map(chip).join('')}</span>`
        : `<span class="slot-label">${s.label}</span>${m.hints ? `<span class="slot-hint">${s.hint}</span>` : ''}`;
      return `<${tag} class="slot ${s.cls} ${items.length ? 'is-filled' : 'is-empty'}" data-slot-box="${s.id}" style="${posVars('m', s.m)};${posVars('d', s.d)}"${aria}>${inner}</${tag}>`;
    }).join('');

    const spec = m.board
      ? `<span class="silk is-spec" style="${silkVars('socket')}">${m.board.socket}</span><span class="silk is-spec" style="${silkVars('mem')}">${m.board.mem}</span>`
      : '';
    const model = `<span class="silk" style="${silkVars('model')}">${m.board ? m.board.model : 'SP-H610'}</span>`;
    const ready = interactive && m.required.every((t) => (Object.values(placed).flat().map(lookup).some((p) => p.type === t)));
    const power = interactive
      ? `<button class="power${ready ? ' is-ready' : ''}" type="button" data-action="power" data-key="power"><span class="power-cap">${icon('power')}</span><span>Включить</span></button>`
      : '';

    return `
      <div class="board-frame">
        <div class="board board-mobo${interactive && session.selected ? ' is-targeting' : ''}"${interactive ? '' : ' role="img" aria-label="Материнская плата с установленными процессором, кулером, памятью, накопителем, видеокартой и блоком питания"'}>
          ${tracesFor('m')}${tracesFor('d')}
          ${model}${spec}${slots}${power}
        </div>
      </div>`;
  }

  function rearBoard(m) {
    const ports = REAR_SLOTS.map((s) => {
      const items = session.placed[s.id].map(partById);
      const port = PORTS[s.port];
      const shape = s.port === 'hdmi' ? 'shape-hdmi' : s.port === 'usb' ? 'shape-usb' : s.port === 'lan' ? 'shape-lan' : `shape-jack${s.port === 'mic' ? ' is-mic' : ''}`;
      const names = items.map((p) => p.name).join(', ');
      return `<button type="button" class="port ${items.length ? 'is-filled' : 'is-empty'}" data-slot="${s.id}" data-slot-box="${s.id}" data-key="slot:${s.id}" aria-label="${esc(`Разъём ${port.label}: ${names || 'свободен'}`)}">
        <span class="port-shape ${shape}"></span>
        <span class="port-label">${port.label}</span>
        ${items.map(chip).join('')}
      </button>`;
    }).join('');
    const ready = shelfParts().length === 0;
    return `
      <div class="board board-rear${session.selected ? ' is-targeting' : ''}">
        <div class="ports">${ports}</div>
        <div class="rear-foot">
          <p class="rear-caption">Задняя панель системного блока</p>
          <button class="power power-rear${ready ? ' is-ready' : ''}" type="button" data-action="power" data-key="power"><span class="power-cap">${icon('power')}</span><span>Включить</span></button>
        </div>
      </div>`;
  }

  function binsBoard() {
    const bins = BIN_SLOTS.map((b) => {
      const items = session.placed[b.id].map(partById);
      return `<div class="bin" data-slot="${b.id}" data-slot-box="${b.id}">
        <button type="button" class="bin-drop" data-slot="${b.id}" data-key="slot:${b.id}" aria-label="${esc(`Лоток «${IO[b.io].label}». ${IO[b.io].sub}. Устройств: ${items.length}`)}">
          <span class="bin-title">${IO[b.io].label}</span>
          <span class="bin-sub">${IO[b.io].sub}</span>
        </button>
        <ul class="bin-items">${items.map((p) => `<li><button type="button" class="bin-item" data-remove="${p.id}" data-slot="${b.id}" data-key="item:${p.id}" aria-label="${esc(`${p.name}, убрать из лотка`)}">${icon(p.icon)}<span>${esc(p.name)}</span></button></li>`).join('')}</ul>
      </div>`;
    }).join('');
    return `<div class="bins-wrap${session.selected ? ' is-targeting' : ''}">
      <div class="bins">${bins}</div>
      <button class="btn btn-primary check" type="button" data-action="power" data-key="power">Проверить</button>
    </div>`;
  }

  function boardHtml() {
    const m = session.mission;
    if (m.layout === 'mobo') return moboBoard(m, session.placed, true);
    if (m.layout === 'rear') return rearBoard(m);
    return binsBoard();
  }

  function shelfHtml() {
    const m = session.mission;
    const items = shelfParts();
    if (!items.length) {
      const what = m.layout === 'bins' ? 'Все устройства разложены. Нажми «Проверить».' : m.layout === 'rear' ? 'Все устройства подключены. Нажми кнопку включения.' : 'Все детали на плате. Нажми кнопку включения, чтобы проверить сборку.';
      return `<p class="shelf-empty">${what}</p>`;
    }
    return `<ul class="shelf${m.showPrice ? ' is-priced' : ''}">${items.map((p) => {
      const isDev = p.kind === 'device';
      let meta = '';
      if (m.showPrice) {
        meta = `<span class="part-meta"><span>${money(p.price)}</span><span>${p.capacity ? `выдаёт ${p.capacity} Вт` : `потребляет ${p.watts} Вт`}</span></span>`;
      }
      return `<li><button type="button" class="part" data-part="${p.id}" data-key="part:${p.id}" aria-pressed="${session.selected === p.id}">
        <span class="part-ic${isDev ? ' is-device' : ''}">${icon(partIcon(p))}</span>
        <span class="part-text"><span class="part-name">${esc(p.name)}</span><span class="part-spec">${esc(p.spec || '')}</span>${meta}</span>
      </button></li>`;
    }).join('')}</ul>`;
  }

  function briefHtml() {
    const m = session.mission;
    if (!m.brief) return '';
    let meters = '';
    if (m.budget) {
      const total = placedParts().reduce((s, p) => s + (p.price || 0), 0);
      const over = total > m.budget;
      const pct = Math.min(100, (total / m.budget) * 100);
      const draw = placedParts().reduce((s, p) => s + (p.watts || 0), m.board.watts || 0);
      const need = Math.ceil((draw * POWER_MARGIN) / 10) * 10;
      const psu = findPlacedType('psu');
      const psuBad = psu && psu.capacity < need;
      meters = `<dl class="meters">
        <div class="meter">
          <dt>Стоимость сборки</dt>
          <dd class="${over ? 'is-bad' : ''}">${money(total)} <span class="unit">из ${money(m.budget)}</span>${over ? ` <span>превышение ${money(total - m.budget)}</span>` : ''}</dd>
          <div class="track${over ? ' is-bad' : ''}" aria-hidden="true"><span style="width:${pct}%"></span></div>
        </div>
        <div class="meter">
          <dt>Потребление с платой</dt>
          <dd>${draw} Вт <span class="unit">нужен блок питания от ${need} Вт</span></dd>
        </div>
        <div class="meter">
          <dt>Блок питания</dt>
          <dd class="${psuBad ? 'is-bad' : ''}">${psu ? `${psu.capacity} Вт${psuBad ? ' — мало' : ''}` : '<span class="unit">ещё не выбран</span>'}</dd>
        </div>
      </dl>`;
    }
    return `<div class="brief"><h2>${m.budget ? 'Заказ' : 'Что известно о плате'}</h2><p>${esc(m.brief)}</p>${meters}</div>`;
  }

  function progressText() {
    const m = session.mission;
    const total = m.parts.filter((p) => !p.pre).length;
    const left = shelfParts().length;
    if (m.layout === 'mobo') {
      const need = m.required.filter((t) => !(m.preinstalled && Object.values(m.preinstalled).flat().map(partById).some((p) => p.type === t))).length;
      const done = m.required.filter((t) => { const p = findPlacedType(t); return p && !p.pre; }).length;
      return `Установлено ${done} из ${need}`;
    }
    return `Осталось ${left} из ${total}`;
  }

  function renderHome() {
    setNav('home');
    document.title = 'Собери ПК — игра об устройстве компьютера';
    const next = MISSIONS.find((m) => !store.progress[m.id]?.done) || MISSIONS[0];
    const nextIdx = MISSIONS.indexOf(next) + 1;
    const anyDone = MISSIONS.some((m) => store.progress[m.id]?.done);
    const preview = MISSIONS[0];
    const previewPlaced = { cpu: ['cpu', 'cooler'], ram: ['ram'], ssd: ['ssd'], gpu: ['gpu'], psu: ['psu'] };

    app.innerHTML = `
      <section class="container hero">
        <div>
          <h1>Собери компьютер сам</h1>
          <p class="lede">Пять миссий об устройстве компьютера: ставь детали на плату, подключай устройства и проверяй сборку кнопкой включения.</p>
          <form class="player" id="player-form">
            <label class="field">Имя и фамилия
              <input name="name" autocomplete="name" value="${esc(store.player.name)}" maxlength="60">
            </label>
            <label class="field">Класс
              <input name="cls" value="${esc(store.player.cls)}" maxlength="12">
            </label>
            <button class="btn btn-primary" type="submit">${anyDone ? `Продолжить: миссия ${nextIdx}` : 'Начать первую миссию'}</button>
          </form>
        </div>
        <div class="hero-board">${moboBoard(preview, previewPlaced, false)}</div>
      </section>
      <section class="container missions" aria-labelledby="missions-h">
        <div class="missions-head">
          <h2 id="missions-h">Миссии</h2>
          <p>Проходи по порядку: каждая следующая сложнее.</p>
        </div>
        <ol class="mission-list">
          ${MISSIONS.map((m, i) => {
            const pr = store.progress[m.id];
            return `<li class="mission-row${pr?.done ? ' is-done' : ''}">
              <span class="mission-num" aria-hidden="true">${i + 1}</span>
              <div><h3>${esc(m.title)}</h3><p>${esc(m.short)}</p></div>
              ${pr?.done ? starsHtml(pr.stars) : '<span class="visually-hidden">Ещё не пройдена</span>'}
              <a class="btn btn-ghost" href="#/mission/${m.id}" aria-label="${esc(`${pr?.done ? 'Пройти снова' : 'Играть'}: миссия ${i + 1}, ${m.title}`)}">${pr?.done ? 'Пройти снова' : 'Играть'}</a>
            </li>`;
          }).join('')}
        </ol>
      </section>`;

    $('#player-form').addEventListener('submit', (e) => {
      e.preventDefault();
      const fd = new FormData(e.target);
      store.player = { name: String(fd.get('name') || '').trim(), cls: String(fd.get('cls') || '').trim() };
      save();
      location.hash = `#/mission/${next.id}`;
    });
  }

  function renderMission(m) {
    setNav('');
    startSession(m);
    const i = MISSIONS.indexOf(m) + 1;
    document.title = `Миссия ${i}. ${m.title} — Собери ПК`;
    const shelfTitle = m.layout === 'mobo' ? 'Детали на складе' : 'Устройства';
    app.innerHTML = `
      <section class="container mission">
        <div class="mission-head">
          <p class="crumb"><a href="#/">Миссии</a>, миссия ${i} из ${MISSIONS.length}</p>
          <h1>${esc(m.title)}</h1>
          <p class="task">${esc(m.task)}</p>
        </div>
        <div class="workbench">
          <div class="stage">
            <div id="board-host">${boardHtml()}</div>
            <p class="status" id="status" data-kind="info" aria-live="off">${icon('info')}<span>${esc(session.status.text)}</span></p>
          </div>
          <aside class="side" aria-label="${shelfTitle}">
            <div id="brief-host">${briefHtml()}</div>
            <div>
              <div class="shelf-head"><h2>${shelfTitle}</h2><p id="progress">${progressText()}</p></div>
              <div id="shelf-host">${shelfHtml()}</div>
            </div>
            <button class="btn btn-ghost reset" type="button" data-action="reset">Начать миссию заново</button>
          </aside>
        </div>
      </section>`;
  }

  function refresh(focusKey) {
    if (!session) return;
    const active = document.activeElement;
    const key = focusKey || (active && active.dataset ? active.dataset.key : null);
    const hadFocusInGame = active && app.contains(active) && active !== app;
    $('#board-host').innerHTML = boardHtml();
    $('#shelf-host').innerHTML = shelfHtml();
    $('#brief-host').innerHTML = briefHtml();
    $('#progress').textContent = progressText();
    if (hadFocusInGame && key) {
      const el = app.querySelector(`[data-key="${key}"]`);
      if (el) el.focus({ preventScroll: true });
    }
  }

  function renderResults() {
    setNav('results');
    document.title = 'Мои результаты — Собери ПК';
    const rows = store.log.slice().reverse();
    const who = [store.player.name, store.player.cls].filter(Boolean).join(', ');
    app.innerHTML = `
      <section class="container results">
        <h1>Мои результаты</h1>
        <p class="results-lede">${who ? `${esc(who)}. ` : ''}Звание: ${esc(rankFor(totalStars()))}, ${totalStars()} из ${MISSIONS.length * 3} звёзд. Каждое прохождение миссии записывается: учитель может скачать таблицу и посмотреть ошибки и время.</p>
        ${rows.length ? `
          <div class="table-wrap">
            <table>
              <thead><tr><th scope="col">Миссия</th><th scope="col">Звёзды</th><th scope="col" class="num">Ошибки</th><th scope="col" class="num">Время</th><th scope="col" class="num">Дата</th></tr></thead>
              <tbody>${rows.map((r) => `<tr>
                <td>${esc(r.mission)}</td>
                <td>${starsHtml(r.stars)}</td>
                <td class="num">${r.wrong + r.failed}</td>
                <td class="num">${duration(r.seconds)}</td>
                <td class="num">${new Date(r.finishedAt).toLocaleDateString('ru-RU')}</td>
              </tr>`).join('')}</tbody>
            </table>
          </div>
          <div class="results-actions">
            <button class="btn btn-primary" type="button" data-action="csv">Скачать таблицу для учителя</button>
            <button class="btn btn-ghost" type="button" data-action="clear">Стереть результаты</button>
          </div>` : `<p class="empty-note">Здесь появятся пройденные миссии. <a href="#/mission/${MISSIONS[0].id}">Начать первую миссию</a></p>`}
      </section>`;
  }

  function downloadCsv() {
    const head = ['Имя', 'Класс', 'Миссия', 'Звёзды', 'Ошибки при установке', 'Неудачные запуски', 'Время, с', 'Начало', 'Окончание'];
    const q = (v) => `"${String(v).replace(/"/g, '""')}"`;
    const lines = [head.map(q).join(';')].concat(store.log.map((r) => [
      r.name, r.cls, r.mission, r.stars, r.wrong, r.failed, r.seconds,
      new Date(r.startedAt).toLocaleString('ru-RU'), new Date(r.finishedAt).toLocaleString('ru-RU')
    ].map(q).join(';')));
    const blob = new Blob(['﻿' + lines.join('\r\n')], { type: 'text/csv;charset=utf-8' });
    const a = document.createElement('a');
    const name = (store.player.name || 'ученик').replace(/[^\p{L}\p{N}_-]+/gu, '_');
    a.href = URL.createObjectURL(blob);
    a.download = `soberi-pc_${name}.csv`;
    document.body.appendChild(a);
    a.click();
    setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 0);
  }

  /* =========================================================
     Router
     ========================================================= */
  function route() {
    if (dialog.open) dialog.close();
    session = null;
    const hash = location.hash || '#/';
    const mm = hash.match(/^#\/mission\/([\w-]+)/);
    if (mm) {
      const m = MISSIONS.find((x) => x.id === mm[1]);
      if (m) renderMission(m); else renderHome();
    } else if (hash.startsWith('#/results')) {
      renderResults();
    } else {
      renderHome();
    }
    renderRank();
    window.scrollTo(0, 0);
    if (document.readyState === 'complete' && hash !== '#/' && location.hash) app.focus({ preventScroll: true });
  }

  /* =========================================================
     Events: clicks, keyboard, drag
     ========================================================= */
  let suppressClick = false;

  app.addEventListener('click', (e) => {
    if (suppressClick) { suppressClick = false; e.preventDefault(); return; }
    const action = e.target.closest('[data-action]');
    if (action) {
      const a = action.dataset.action;
      if (a === 'power' && session) powerOn();
      if (a === 'reset' && session) {
        if (window.confirm('Начать миссию заново? Всё, что уже стоит, вернётся на склад.')) {
          renderMission(session.mission);
        }
      }
      if (a === 'csv') downloadCsv();
      if (a === 'clear' && window.confirm('Стереть все результаты и звёзды на этом компьютере?')) {
        store.log = []; store.progress = {}; save(); renderResults(); renderRank();
      }
      return;
    }
    if (!session) return;

    const partBtn = e.target.closest('[data-part]');
    if (partBtn) { select(partBtn.dataset.part); return; }

    const removeBtn = e.target.closest('[data-remove]');
    if (removeBtn) { removeFromSlot(removeBtn.dataset.slot, removeBtn.dataset.remove); return; }

    const slotBtn = e.target.closest('button[data-slot]');
    if (slotBtn) {
      const id = slotBtn.dataset.slot;
      if (session.selected) place(session.selected, id);
      else if (session.placed[id].length && session.mission.layout !== 'bins') removeFromSlot(id);
      else setStatus('info', session.mission.layout === 'bins' ? 'Сначала выбери устройство из списка, потом лоток.' : 'Сначала выбери деталь из списка, потом место для неё.');
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && session && session.selected && !dialog.open) {
      const id = session.selected;
      session.selected = null;
      refresh(`part:${id}`);
      setStatus('info', 'Выбор отменён.');
    }
  });

  // Pointer drag for mouse and pen; touch uses tap, then tap.
  let drag = null;

  app.addEventListener('pointerdown', (e) => {
    if (!session || e.button !== 0 || e.pointerType === 'touch') return;
    const btn = e.target.closest('[data-part]');
    if (!btn) return;
    drag = { id: btn.dataset.part, btn, x: e.clientX, y: e.clientY, started: false, ghost: null, over: null, pointerId: e.pointerId };
  });

  document.addEventListener('pointermove', (e) => {
    if (!drag || e.pointerId !== drag.pointerId) return;
    if (!drag.started) {
      if (Math.hypot(e.clientX - drag.x, e.clientY - drag.y) < 6) return;
      drag.started = true;
      const p = partById(drag.id);
      const g = document.createElement('div');
      g.className = 'ghost';
      g.innerHTML = `<span class="part-ic${p.kind === 'device' ? ' is-device' : ''}">${icon(partIcon(p))}</span><span>${esc(p.name)}</span>`;
      document.body.appendChild(g);
      drag.ghost = g;
      drag.btn.classList.add('is-lifted');
      document.body.classList.add('is-dragging');
      const host = app.querySelector('.board, .bins-wrap');
      if (host) host.classList.add('is-targeting');
    }
    drag.ghost.style.transform = `translate(${e.clientX + 12}px, ${e.clientY + 12}px)`;
    const under = document.elementFromPoint(e.clientX, e.clientY);
    const box = under && under.closest('[data-slot-box]');
    const id = box ? box.dataset.slotBox : null;
    if (id !== drag.over) {
      if (drag.over) app.querySelector(`[data-slot-box="${drag.over}"]`)?.classList.remove('is-over');
      if (id) box.classList.add('is-over');
      drag.over = id;
    }
  });

  function endDrag(e, cancelled) {
    if (!drag || (e && e.pointerId !== drag.pointerId)) return;
    const d = drag;
    drag = null;
    if (!d.started) return;
    suppressClick = true;
    setTimeout(() => { suppressClick = false; }, 0);
    d.ghost.remove();
    document.body.classList.remove('is-dragging');
    d.btn.classList.remove('is-lifted');
    const host = app.querySelector('.board, .bins-wrap');
    if (host && !session.selected) host.classList.remove('is-targeting');
    if (d.over) app.querySelector(`[data-slot-box="${d.over}"]`)?.classList.remove('is-over');
    if (!cancelled && d.over) place(d.id, d.over);
  }

  document.addEventListener('pointerup', (e) => endDrag(e, false));
  document.addEventListener('pointercancel', (e) => endDrag(e, true));

  /* =========================================================
     Boot
     ========================================================= */
  load();
  window.addEventListener('hashchange', route);
  route();
})();
