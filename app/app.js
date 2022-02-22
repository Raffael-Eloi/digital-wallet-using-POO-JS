import { BankController } from "./controllers/BankController.js";
import { ClientController } from "./controllers/ClientController.js";

const bankController = new BankController();
const clientController = new ClientController();

const $ = document.querySelector.bind(document);

$('#formDigitalWallet').addEventListener('submit', clientController.add.bind(clientController));
$('#formDigitalWallet').addEventListener('submit', bankController.add.bind(bankController));

$('#depositButton').addEventListener('click', bankController.deposit.bind(bankController));
$('#withDrawButton').addEventListener('click', bankController.withDraw.bind(bankController));
