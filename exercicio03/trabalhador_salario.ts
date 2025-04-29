export enum Role {
    DESENVOLVEDOR = 'DESENVOLVEDOR',
    DBA = 'DBA',
    TESTADOR = 'TESTADOR',
    GERENTE = 'GERENTE'
  }
  
  export class Employee {
    constructor(
      public name: string,
      public email: string,
      public baseSalary: number,
      public role: Role
    ) {}
  }
  
  export class SalaryCalculator {
    static calculate(employee: Employee): number {
      const { role, baseSalary } = employee;
  
      switch (role) {
        case Role.DESENVOLVEDOR:
          return baseSalary >= 3000 ? baseSalary * 0.8 : baseSalary * 0.9;
        case Role.DBA:
        case Role.TESTADOR:
          return baseSalary >= 2000 ? baseSalary * 0.75 : baseSalary * 0.85;
        case Role.GERENTE:
          return baseSalary >= 5000 ? baseSalary * 0.7 : baseSalary * 0.8;
        default:
          throw new Error('Cargo desconhecido');
      }
    }
  }
  