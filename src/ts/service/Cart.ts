import Buyable from '../domain/Buyable';

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        if (item.constructor.name !== 'Gadget') {
            if (!this._items.map((item) => item.constructor.name).includes(item.constructor.name)) {
                this._items.push(item);
            }
        } else {
            this._items.push(item);
        }
    }

    get items(): Buyable[] {
        return [...this._items]; 
    }

    sum(): number {
        return this._items.map((item) => item.price).reduce((sum, current) => sum + current, 0);
    }

    sumWithDiscount(discount: number): number {
        return this.sum() * (1 - discount / 100);
    }

    delete(id: number): void {
        let newCart: Buyable[] = [];
        this._items.forEach((item) => {
            if (item.id !== id) {
                newCart.push(item);
            }
        })
        this._items = newCart;
    }

    deleteGadget(id: number): void {
        let lastGadget: any = null;
        this._items.forEach((item, index) => {
            if (item.id === id) {
                if (index > lastGadget) {
                    lastGadget = index;
                }  
            }
        })
        this._items.splice(lastGadget, 1);
    }
}