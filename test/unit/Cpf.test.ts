import Cpf from '../../src/domain/entities/Cpf';

const validCpfs = [
    '160.455.710-96',
    '47308766870'
];

test.each(validCpfs)('Deve validar um CPF válido', function (value) {
    const cpf = new Cpf(value);
    expect(cpf).toBeDefined();
    expect(cpf.getValue()).toBe(value);
});

const cpfsWithSameDigits = [
    '111.111.111-11',
    '222.222.222-22',
    '333.333.333-33',
]

test.each(cpfsWithSameDigits)('Deve validar um CPF inválido com todos os dígitos iguais', function (value) {
    expect(() => new Cpf(value)).toThrow(new Error("Cpf Inválido"));
});

test('Deve validar um CPF inválido com tamanho maior', function () {
    expect(() => new Cpf('111.111.111-1111')).toThrow(new Error("Cpf Inválido"));
});

test('Deve validar um CPF inválido com tamanho menor', function () {
    expect(() => new Cpf('111.111.111')).toThrow(new Error("Cpf Inválido"));
});

test('Deve validar um CPF vazio', function () {
    expect(() => new Cpf('')).toThrow(new Error("Cpf Inválido"));
});