/*
    -> Modulos
    - Maneiras de separar o codigo em arquivos e usar export e import para utilizar esses modulos.
    - O export será usado no arquivo separado do principal, eo import será usado no arquivo principal,
    assim, pegando po codigo que esta com export no arquivo separado
    - import {} from "Caminho do arquivo que esta com export"
*/

import {mensagem} from "./modulos/connection"

mensagem('Oi estou importando esta função que esta na pasta modulos')