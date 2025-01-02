import classNames from './classNames';
describe('classNames', () => {
    test('with only first param', () => {
        expect(classNames('someClass')).toBe('someClass');
    });
    test('with mods param', () => {
        expect(classNames('someClass', { mods1: true })).toBe('someClass mods1');
    });
    test('with add param', () => {
        expect(classNames('someClass', {}, ['class1', 'class2'])).toBe('someClass class1 class2');
    });
    test('with all params ', () => {
        expect(classNames('someClass', { mod1: true, mod2: false }, ['class1', 'class2'])).toBe('someClass class1 class2 mod1');
    });
});