import { Triangle } from './triangulo';

describe('Triangle', () => {
  test('Triângulo escaleno válido', () => {
    expect(Triangle.classify(3, 4, 5)).toBe('Escaleno');
  });

  test('Triângulo isósceles válido - permutação 1', () => {
    expect(Triangle.classify(5, 5, 3)).toBe('Isósceles');
  });

  test('Triângulo isósceles válido - permutação 2', () => {
    expect(Triangle.classify(3, 5, 5)).toBe('Isósceles');
  });

  test('Triângulo isósceles válido - permutação 3', () => {
    expect(Triangle.classify(5, 3, 5)).toBe('Isósceles');
  });

  test('Triângulo equilátero válido', () => {
    expect(Triangle.classify(5, 5, 5)).toBe('Equilátero');
  });

  test('Valor zero', () => {
    expect(Triangle.classify(0, 4, 5)).toBe('Valores devem ser positivos');
  });

  test('Valor negativo', () => {
    expect(Triangle.classify(-1, 4, 5)).toBe('Valores devem ser positivos');
  });

  const invalidPerms = [
    [1, 2, 3],
    [3, 1, 2],
    [2, 3, 1]
  ];
  invalidPerms.forEach(([a, b, c]) => {
    test(`Soma de dois lados igual ao terceiro: ${a}, ${b}, ${c}`, () => {
      expect(Triangle.classify(a, b, c)).toBe('Não forma triângulo');
    });
  });

  const impossiblePerms = [
    [1, 2, 4],
    [2, 4, 1],
    [4, 1, 2]
  ];
  impossiblePerms.forEach(([a, b, c]) => {
    test(`Soma de dois lados menor que o terceiro: ${a}, ${b}, ${c}`, () => {
      expect(Triangle.classify(a, b, c)).toBe('Não forma triângulo');
    });
  });

  test('Todos os lados zero', () => {
    expect(Triangle.classify(0, 0, 0)).toBe('Valores devem ser positivos');
  });
});
