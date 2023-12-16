import Buyable from './Buyable';

export default class Gadget implements Buyable {
    constructor(
        readonly id: number,
        readonly name: string,
        readonly model: string,
        readonly price: number,
    ) { }
}
