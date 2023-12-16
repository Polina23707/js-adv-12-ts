import Cart from '../service/Cart';
import Book from '../domain/Book';
import MusicAlbum from '../domain/MusicAlbum';
import Gadget from '../domain/Gadget';

test('new card should be empty', () => {
  const cart = new Cart();

  expect(cart.items.length).toBe(0);
});

test('add item to cart', () => {
  const cart = new Cart();
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
  const result = [
    {
      id: 1001,
      name: 'War and Piece',
      author: 'Leo Tolstoy',
      price: 2000,
      pages: 1225
    },
    {
      id: 1008,
      name: 'Meteora',
      author: 'Linkin Park',
      price: 900
    }
  ]
  expect(cart.items).toEqual(result);
});

test('get item from cart', () => {
  const cart = new Cart();
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
  const result = [
    {
      id: 1001,
      name: 'War and Piece',
      author: 'Leo Tolstoy',
      price: 2000,
      pages: 1225
    },
    {
      id: 1008,
      name: 'Meteora',
      author: 'Linkin Park',
      price: 900
    }
  ]
  expect(cart.items).toEqual(result);
});

test('sum price in cart', () => {
  const cart = new Cart();
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));

  expect(cart.sum()).toBe(2900);
});

test('sum price with discount in cart', () => {
  const cart = new Cart();
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));

  expect(cart.sumWithDiscount(10)).toBe(2610);
});

test('delete item/items from cart by id', () => {
  const cart = new Cart();
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
  cart.delete(1001);
  const result = [
    {
      id: 1008,
      name: 'Meteora',
      author: 'Linkin Park',
      price: 900
    }
  ]
  expect(cart.items).toEqual(result);
});



test('delete all gadgets from cart by id', () => {
  const cart = new Cart();
  cart.add(new Book(1001, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new Gadget(105, 'Телефон1', 'Nokia', 12000));
  cart.add(new Gadget(105, 'Телефон2', 'Nokia', 12000));
  cart.add(new Gadget(105, 'Телефон3', 'Nokia', 12000));
 
  cart.delete(105);
  const result = [
    {
      id: 1001,
      name: 'War and Piece',
      author: 'Leo Tolstoy',
      price: 2000,
      pages: 1225
    }
  ]
  expect(cart.items).toEqual(result);
});

test('delete one gadget from cart by id', () => {
  const cart = new Cart();
  cart.add(new Gadget(105, 'Телефон1', 'Nokia', 12000));
  cart.add(new Gadget(105, 'Телефон2', 'Nokia', 12000));
  cart.add(new Gadget(105, 'Телефон3', 'Nokia', 12000));
 
  cart.deleteGadget(105);
  const result = [
    {
      id: 105,
      name: 'Телефон1',
      model: 'Nokia',
      price: 12000
    },
    {
      id: 105,
      name: 'Телефон2',
      model: 'Nokia',
      price: 12000
    }
  ]
  expect(cart.items).toEqual(result);
});