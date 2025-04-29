export class Triangle {
    static classify(a: number, b: number, c: number): string {
      if (a <= 0 || b <= 0 || c <= 0) {
        return "Valores devem ser positivos";
      }
  
      if (a + b <= c || a + c <= b || b + c <= a) {
        return "Não forma triângulo";
      }
  
      if (a === b && b === c) return "Equilátero";
      if (a === b || a === c || b === c) return "Isósceles";
      return "Escaleno";
    }
  }
  