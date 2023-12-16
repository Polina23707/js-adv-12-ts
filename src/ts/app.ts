import Cart from './service/Cart';
import Book from './domain/Book';
import MusicAlbum from './domain/MusicAlbum';
import Movie from './domain/Movie';
import Gadget from './domain/Gadget';

const cart = new Cart();
// console.log(cart.items);

cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
cart.add(new MusicAlbum(1007, 'Meteora', 'Linkin Park', 900));
cart.add(new Movie(1003, 'Мстители', 'The Avengers', 900, 2012, 'США', 'Слоган', ['боевик', 'фэнтази'], '132 мин'));

cart.add(new Gadget(105, 'Телефон1', 'Nokia', 12000));
cart.add(new Gadget(105, 'Телефон2', 'Nokia', 12000));

cart.add(new Gadget(106, 'Планшет1', 'Apple', 120000));
cart.add(new Gadget(105, 'Телефон3', 'Nokia', 12000));
cart.add(new Gadget(106, 'Планшет2', 'Apple', 120000));
cart.add(new Gadget(105, 'Телефон4', 'Nokia', 12000));

// // console.log(cart.items);
console.log(cart.sum());
console.log(cart.sumWithDiscount(5));
console.log(cart.items);
cart.delete(1008);
cart.deleteGadget(105);
console.log(cart.items);
