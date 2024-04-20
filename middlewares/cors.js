function cors(req, res, next) {
  const { origin } = req.headers;

  if (allowedCors.includes(origin)) { // Если это наш друг
    res.header('Access-Control-Allow-Origin', '*');
  }

  next();
}

const allowedCors = [
  'https://practicum.yandex.ru',
  'https://students-projects.ru',
  'localhost:3000'
];

app.use(
  cors, // Добавляем CORS самым первым
  bodyParser.json(),
  express.static(path.join(__dirname, 'public')),
  mainRoute,
  gamesRouter
);

module.exports = cors; 