import { Employee, Role, SalaryCalculator } from './trabalhador_salario';

describe('SalaryCalculator', () => {
  test('Desenvolvedor com salário >= 3000', () => {
    const emp = new Employee('Ana', 'ana@dev.com', 3000, Role.DESENVOLVEDOR);
    expect(SalaryCalculator.calculate(emp)).toBe(2400);
  });

  test('Desenvolvedor com salário < 3000', () => {
    const emp = new Employee('Ana', 'ana@dev.com', 2500, Role.DESENVOLVEDOR);
    expect(SalaryCalculator.calculate(emp)).toBe(2250);
  });

  test('DBA com salário >= 2000', () => {
    const emp = new Employee('Carlos', 'carlos@dba.com', 2500, Role.DBA);
    expect(SalaryCalculator.calculate(emp)).toBe(1875);
  });

  test('Testador com salário < 2000', () => {
    const emp = new Employee('Joana', 'joana@test.com', 1800, Role.TESTADOR);
    expect(SalaryCalculator.calculate(emp)).toBe(1530);
  });

  test('Gerente com salário >= 5000', () => {
    const emp = new Employee('Roberto', 'roberto@ger.com', 6000, Role.GERENTE);
    expect(SalaryCalculator.calculate(emp)).toBe(4200);
  });

  test('Gerente com salário < 5000', () => {
    const emp = new Employee('Roberto', 'roberto@ger.com', 4000, Role.GERENTE);
    expect(SalaryCalculator.calculate(emp)).toBe(3200);
  });
});
