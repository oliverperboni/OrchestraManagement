import { Intrumentos } from "./instrumentos";

export interface Musico {
  id?: number,
  nome : string,
  telefone:string,
  comun:number,
  instrumento:Intrumentos,
  cargo: string
}
