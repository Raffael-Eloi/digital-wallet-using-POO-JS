import { BankController } from "./controllers/BankController.js";
import { ClientController } from "./controllers/ClientController.js";

const bankController = new BankController();
const clientController = new ClientController();

const $ = document.querySelector.bind(document);

$('#depositButton').addEventListener('click', bankController.deposit.bind(controller)); // TESTAR SEM CONTROLLER PARA VER

$('#withDrawButton').addEventListener('click', bankController.withDraw.bind(controller));

$('#clientButtonSubmit').addEventListener('click', clientController.VERIFYWHATISTHENAME.bind(clientController));
