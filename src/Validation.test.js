import Validation from 'Validation/Validation.js';

it('should return text if too long or short', () {
    var random_text = 'hello';

    const res = Validation(random_text);

    return res;
});