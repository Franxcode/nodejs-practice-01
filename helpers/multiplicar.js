const fs = require("fs");
const colors = require("colors");

const crearArchivo = async (numeroBase = 5, listar, hasta) => {
	try {
		let salida = "";
		let consola = "";

		for (let i = 1; i <= hasta; i++) {
			let resultado = numeroBase * i;
			salida += `${numeroBase} x ${i} = ${resultado}\n`;
			consola += `${numeroBase} ${"x".green} ${i} ${"=".green} ${resultado}\n`;
		}
		if (listar) {
			console.log("======================".brightGreen);
			console.log("     Tabla del:".brightGreen, numeroBase);
			console.log("======================".brightGreen);

			console.log(`${consola}`);
		}

		fs.writeFileSync(`./salida/Tabla-${numeroBase}.txt`, salida);

		return `Tabla-${numeroBase}.txt`.brightRed;
	} catch (err) {
		throw err;
	}
};

module.exports = {
	crearArchivo,
};

// Otra manera de hacerlo.
// const crearArchivo = (numeroBase = 5) => {
// 	return new Promise((resolve, reject) => {
// 		console.clear();

// 		console.log("======================");
// 		console.log("     Tabla del:", numeroBase);
// 		console.log("======================");

// 		let salida = "";

// 		for (let i = 1; i <= 10; i++) {
// 			let resultado = numeroBase * i;
// 			salida += `${numeroBase} x ${i} = ${resultado}\n`;
// 		}

// 		console.log(salida);

// 		fs.writeFileSync(`Tabla-${numeroBase}.txt`, salida);

// 		resolve(`Tabla-${numeroBase}.txt`);
// 	});
// };
