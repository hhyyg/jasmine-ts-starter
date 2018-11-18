import { Message } from '../src/myapp';


describe('myapp', () => {
    it('hello', () => {
        const message = new Message();
        const actual = message.hello();

        expect(actual).toEqual('message');
    });


    it('hello2', () => {
        const message = new Message();
        const actual = message.hello();

        expect(actual).not.toBeNull();
    });
});