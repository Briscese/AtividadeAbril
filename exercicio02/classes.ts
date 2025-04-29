export class Email {
    constructor(public id: number, public name: string) {}
  }
  
  export class Person {
    constructor(public id: number, public name: string, public age: number, public emails: Email[]) {}
  }
  
  export class PersonDAO {
    isValidToInclude(p: Person): string[] {
      const errors: string[] = [];
  
      // Nome: 2 partes e apenas letras
      const nameParts = p.name.trim().split(/\s+/);
      if (nameParts.length < 2 || !/^[A-Za-zÀ-ÿ\s]+$/.test(p.name)) {
        errors.push('Nome deve conter ao menos duas partes e apenas letras');
      }
  
      // Idade
      if (p.age < 1 || p.age > 200) {
        errors.push('Idade deve estar entre 1 e 200');
      }
  
      // Emails
      if (!p.emails || p.emails.length === 0) {
        errors.push('Pessoa deve ter ao menos um email');
      } else {
        p.emails.forEach(email => {
          if (!/^[^@]+@[^@]+\.[^@]+$/.test(email.name)) {
            errors.push(`Email inválido: ${email.name}`);
          }
        });
      }
  
      return errors;
    }
  }
  