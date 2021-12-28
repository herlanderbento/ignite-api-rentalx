// Data Transfer Oject (Objeto de Transferência de Dados):
// é um padrão de projeto de software usado para transferir dados entre subsistemas de um software. DTOs são frequentemente usados em conjunção com objetos de acesso a dados para obter dados de um banco de dados.

interface ICreateUserDTO {
  name: string;
  email: string;
  driver_license: string;
  password: string;
  id?: string;
  avatar?: string;
}

export { ICreateUserDTO };
