import Movie from '../domain/Movie';

test('new movie create correct', () => {
  const movie = new Movie(1003, 'Мстители', 'The Avengers', 900, 2012, 'США', 'Слоган', ['боевик', 'фэнтази'], '132 мин');

  const result = {
    id: 1003,
    name: 'Мстители',
    nameEng: 'The Avengers',
    price: 900,
    year: 2012,
    country: 'США',
    slogan: 'Слоган',
    genre: ['боевик', 'фэнтази'],
    time: '132 мин',
  }
  expect(movie).toEqual(result);
});
