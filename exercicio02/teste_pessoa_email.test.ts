import { Email, Person, PersonDAO } from './classes';

describe('PersonDAO.isValidToInclude', () => {
  const dao = new PersonDAO();

  test('Pessoa válida', () => {
    const p = new Person(1, 'João Silva', 30, [new Email(1, 'joao@email.com')]);
    expect(dao.isValidToInclude(p)).toHaveLength(0);
  });

  test('Nome inválido', () => {
    const p = new Person(1, 'João', 30, [new Email(1, 'joao@email.com')]);
    expect(dao.isValidToInclude(p)).toContain('Nome deve conter ao menos duas partes e apenas letras');
  });

  test('Idade inválida', () => {
    const p = new Person(1, 'João Silva', 0, [new Email(1, 'joao@email.com')]);
    expect(dao.isValidToInclude(p)).toContain('Idade deve estar entre 1 e 200');
  });

  test('Sem emails', () => {
    const p = new Person(1, 'João Silva', 25, []);
    expect(dao.isValidToInclude(p)).toContain('Pessoa deve ter ao menos um email');
  });

  test('Email inválido', () => {
    const p = new Person(1, 'João Silva', 25, [new Email(1, 'joaoemail.com')]);
    expect(dao.isValidToInclude(p)).toContain('Email inválido: joaoemail.com');
  });
});
