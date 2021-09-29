var consulta = prompt("Ingrese el numero de equipo (1-7)")
//equipo1//
var pasaT1 = ["Jugar videojuegos","Ver peliculas","Jugar futbol", "Practica senderismo", "Correr"];
var pasaT2 = ["Jugar videojuegos, Ver series, Jugar Valeyball, Practicar natacion, Leer"];
var pasaT3 = ["Jugar Ajedrez, Ver Paisajes, Jugar futbol, Pracitcar pintura, Correr"];
//equipo2//
var pasaT4 = ["Leer libros","Escuchar musica","Jugar ajedrez","Hacer ejercicio","Tomar fotos"];
var pasaT5 = ["Jugar con amigo", "Jugar Fornite", "Escuchar musica", "Ver Videos","Cocinar"];
var pasaT6 = ["Practicar touchtyping", "Practicar mecanografia", "Practicar caligrafia, Practicar Ingles, Jugar Fornite"];
//equipo3//
var pasaT7 = ["Leer","Escuchar musica","Pasar tiempo con la familia","Hacer ejercicio","Tomar fotos"]
var pasaT8 = ["Leer Inforamcion", "Ver las noticias","Cocinar", "Ver Futbol","Jugar Futbol"];
var pasaT9 = ["Leer Documentacion","Ver Videos", "Escuchar musica", "Hacer ejercicio", "Jugar Videojuegos"];
//equipo4//
var pasaT10 = ["Leer libros","Escuchar musica","Jugar ajedrez","Hacer ejercicio","Tomar fotos"];
var pasaT11 = ["Jugar videojuegos, Ver series, Jugar Valeyball, Practicar natacion, Leer"]
var pasaT12 = ["Practicar touchtyping", "Practicar mecanografia", "Practicar caligrafia, Practicar Ingles, Jugar Fornite"]
//equipo5//
var pasaT13 = ["Leer Inforamcion", "Ver las noticias","Cocinar", "Ver Futbol","Jugar Futbol"]
var pasaT14 = ["Jugar Ajedrez, Ver Paisajes, Jugar futbol, Pracitcar pintura, Correr"]
var pasaT15 = ["Jugar videojuegos","Ver peliculas","Jugar futbol", "Practica senderismo", "Correr"]
//equipo6//
var pasaT16 = ["Cocinar", "Cuidar plantas", "Jugar Videojuegos", "Practicar Ingles", "Mirar Caricaturas"]
var pasaT17 = ["Leer libros","Escuchar musica","Jugar ajedrez","Hacer ejercicio","Tomar fotos"]
var pasaT18 = ["Jugar videojuegos","Ver peliculas","Jugar futbol", "Practica senderismo", "Correr"]
//equipo7//
var pasaT19 = ["Leer Inforamcion", "Ver las noticias","Cocinar", "Ver Futbol","Jugar Futbol"]
var pasaT20 = ["Ver Peliculas","Escuchar musica","Dormir","Ir al GYM","Tomar Fotos"]

//listado alumnos//
var equipos = {
    "Equipo1" : {
            "Integrates": 3,
            "Alumnos" :{
                "Int1":{
                    "Nombre": "Pedro Perez",
                    "Edad"  : 18,
                    "Sexo"  : "Masculino",
                    "Telefono" : "55 8563 7846",
                    "Pasatiempos": pasaT1,
                    "Familiares":{
                        "Padre": "Juancho Perez",
                        "Madre" : "Mariana Martinez",
                        "Hermano" : "Milo Perez",
                        "Abuelo" : "Venustiano Perez",
                        "Abuela" : "Macaria Ortega"
                    }
                },
                 "Int2":{
                    "Nombre": "Jaime Perez",
                    "Edad"  : 18,
                    "Sexo"  : "Masculino",
                    "Telefono" : "55 7890 7846",
                    "Pasatiempos":pasaT2,
                    "Familiares":{
                        "Padre": "Remo Perez",
                        "Madre" : "Mariana Pacual",
                        "Hermano" : "Nesor Perez",
                        "Abuelo" : "Jose Perez",
                        "Abuela" : "Justa Ortega"
                    }
            },
                "Int3":{
                "Nombre": "Petro Romulo",
                "Edad"  : 18,
                "Sexo"  : "Masculino",
                "Telefono" : "55 9636 7846",
                "Pasatiempos":pasaT3,
                "Familiares":{
                    "Padre": "Juancho Romulo",
                    "Madre" : "Mila Martinez",
                    "Hermano" : "Francisco Romulo",
                    "Abuelo" : "Venustiano Romulo",
                    "Abuela" : "Mika Sharapova"
                }
        },
        
        }
    },
    "Equipo2" : {
        "Integrantes": 3,
        "Alumnos":{
            "Int1":{
                "Nombre":"Martha Sanchez",
                "Edad": 18,
                "Sexo": "Femeninio",
                "Telefono": "55 2334 2365",
                "Pasatiempos":pasaT4,
                 "Familiares":{
                    "Padre": "Pedro",
                    "Madre": "Irene Sanchez",
                    "Hermana": "Mariana Gonzales",
                    "Hermano":"Juan Gonzales",
                    "Tio": "Pablo Sanchez"
                }
            },
            "Int2":{
                "Nombre":"Alexa Bonilla",
                "Edad": 17,
                "Sexo": "Femenino",
                "Telefono": "55 2344 6578",
                "Pasatiempos":pasaT5,
                 "Familiares":{
                    "Padre": "Juan Bonilla",
                    "Madre": "Fernanda Perez",
                    "Hermana": "Mariana Gonzales",
                    "Hermano":"Juan Gonzales",
                    "Tio": "Pablo Sanchez"
                }
            },
            "Int3":{
                "Nombre":"Alejanda Alcantara",
                "Edad": 18,
                "Sexo": "Femenino",
                "Telefono": "55 5464 2345",
                "Pasatiempos":pasaT6,
                 "Familiares":{
                    "Padre": "Juan Alcantara",
                    "Madre": "Erika Perez",
                    "Hermana": "Mariana Alcantara",
                    "Hermano":"Juan Gonzales",
                    "Abuelo": "Pablo Alcantara"
                }
            }
        }


    },
    "Equipo3" : {
        "Integrantes": 3,
        "Alumnos":{
            "Int1":{
                "Nombre":"Ruben Volivares",
                "Edad": 19,
                "Sexo": "Masculino",
                "Telefono": "55 2334 2365",
                "Pasatiempos":pasaT7,
                 "Familiares":{
                    "Padre": "Pedro Volivares",
                    "Madre": "Irene Sanchez",
                    "Hermana": "Mariana Volivares",
                    "Hermano":"Juan Volivares",
                    "Tio": "Pablo Volivares"
                }
            },
            "Int2":{
                "Nombre":"Cristopher Recib",
                "Edad": 19,
                "Sexo": "Masculino",
                "Telefono": "55 2435 5677",
                "Pasatiempos":pasaT8,
                 "Familiares":{
                    "Padre": "Juan Recib",
                    "Madre": "Alondra Higareda",
                    "Hermana": "Mariana Recib",
                    "Hermano":"Andrick Recib",
                    "Tio": "Pablo Recib"
                }
            },
            "Int3":{
                "Nombre":"Alejandro Oraca",
                "Edad": 17,
                "Sexo": "Maculino",
                "Telefono": "55 4456 6578",
                "Pasatiempos":pasaT9,
                 "Familiares":{
                    "Padre": "Juan Oraca ",
                    "Madre": "Fernanda Uriel",
                    "Hermana":"Mari Oraca",
                    "Hermano":"Juan Oraca",
                    "Tio": "Pablo Oraca"
                }
            }
        }


    },
    "Equipo4" :{
        "Int1":{
            "Nombre": "Vicente Perez",
            "Edad"  : 19,
            "Sexo"  : "Masculino",
            "Telefono" : "55 8963 7846",
            "Pasatiempos":pasaT10,
            "Familiares":{
                "Padre": "Silvano Perez",
                "Madre" : "Mariana Sanchez",
                "Hermano" : "Rogrigo Perez",
                "Abuelo" : "Oscar Perez",
                "Abuela" : "Macaria Mons"
            }
        },
         "Int2":{
            "Nombre": "Jaime Stanley",
            "Edad"  : 18,
            "Sexo"  : "Masculino",
            "Telefono" : "55 7890 7846",
            "Pasatiempos":pasaT11,
            "Familiares":{
                "Padre": "Paco Stanley",
                "Madre" : "Mariana Pascual",
                "Hermano" : "Nestor Araujo",
                "Abuelo" : "Jose Stanley",
                "Abuela" : "Justa Smith"
            }
        },
        "Int3":{
            "Nombre": "Jaime Lozano",
            "Edad"  : 18,
            "Sexo"  : "Masculino",
            "Telefono" : "55 7890 7846",
            "Pasatiempos":pasaT12,
            "Familiares":{
                "Padre": "Paco Stanley",
                "Madre" : "Mariana Pascual",
                "Hermano" : "Irnving Lozano",
                "Abuelo" : "Jose Lozano",
                "Abuela" : "Justa Sierra"
            }
        }   
    },
    "Equipo5" :{
        "Integrantes": 3,
        "Alumnos":{
            "Int1":{
                "Nombre":"Miriam Sanchez",
                "Edad": 18,
                "Sexo": "Femeninio",
                "Telefono": "55 2334 2365",
                "Pasatiempos":pasaT13,
                 "Familiares":{
                    "Padre": "Pedro Santoro",
                    "Madre": "Irene Sanchez",
                    "Hermana": "Mariana Gonzales",
                    "Hermano":"Juan Gonzales",
                    "Tio": "Pablo Sanchez"
                }
            },
            "Int2":{
                "Nombre":"Alexadra Bonilla",
                "Edad": 17,
                "Sexo": "Femenino",
                "Telefono": "55 2344 6578",
                "Pasatiempos":pasaT14,
                 "Familiares":{
                    "Padre": "Juan Bonilla",
                    "Madre": "Fernanda Perez",
                    "Hermana": "Mariana Gonzales",
                    "Hermano":"Juan Gonzales",
                    "Tio": "Pablo Sanchez"
                }
            },
            "Int3":{
                "Nombre":"Rita Alcantara",
                "Edad": 18,
                "Sexo": "Femenino",
                "Telefono": "55 5464 2345",
                "Pasatiempos":pasaT15,
                 "Familiares":{
                    "Padre": "Juan Alcantara",
                    "Madre": "Erika Perez",
                    "Hermana": "Mariana Alcantara",
                    "Hermano":"Juan Gonzales",
                    "Abuelo": "Pablo Alcantara"
                }
            }
        }


    },
    "Equipo6" :{
        "Integrantes": 3,
        "Alumnos":{
            "Int1":{
                "Nombre":"Martha Sanchez",
                "Edad": 21,
                "Sexo": "Femeninio",
                "Telefono": "55 2394 2365",
                "Pasatiempos":pasaT16,
                 "Familiares":{
                    "Padre": "Izawa Rimuru",
                    "Madre": "Irene Murano",
                    "Hermana": "Maribel Gonzales",
                    "Hermano":"Juan Gonzales",
                    "Tio": "Pablo Sanchez"
                }
            },
            "Int2":{
                "Nombre":"Luisa Bonilla",
                "Edad": 17,
                "Sexo": "Femenino",
                "Telefono": "55 2344 6578",
                "Pasatiempos":pasaT17,
                 "Familiares":{
                    "Padre": "Juan Bonilla",
                    "Madre": "Fernanda Perez",
                    "Hermana": "Mariana Gonzales",
                    "Hermano":"Juan Gonzales",
                    "Tio": "Pablo Sanchez"
                }
            },
            "Int3":{
                "Nombre":"Soledad Alcantara",
                "Edad": 18,
                "Sexo": "Femenino",
                "Telefono": "55 5464 2845",
                "Pasatiempos":pasaT18,
                 "Familiares":{
                    "Padre": "Juan Alcantara",
                    "Madre": "Erika Perez",
                    "Hermana": "Mariana Pedroza",
                    "Hermano":"Juan Gonzales",
                    "Abuelo": "Pablo Alcantara"
                }
            }
        }

    },
    "Equipo7" :{
        "Integrantes": 2,
        "Alumnos":{
            "Int1":{
                "Nombre":"Martin Rulo",
                "Edad": 21,
                "Sexo": "Masculino",
                "Telefono": "55 2394 2365",
                "Pasatiempos":pasaT19,
                 "Familiares":{
                    "Padre": "Imanuel Rulo",
                    "Madre": "Irina Baeva",
                    "Hermana": "Maribel Rulo",
                    "Hermano":"Juan Rulo",
                    "Tio": "Eder Sanchez"
                }
            },
            "Int2":{
                "Nombre":"Andrea Serves",
                "Edad": 17,
                "Sexo": "Femenino",
                "Telefono": "55 4566 5665",
                "Pasatiempos":pasaT20,
                 "Familiares":{
                    "Padre": "Casemiro Serves",
                    "Madre": "Maira Rios",
                    "Hermana": "Tamara Serves",
                    "Hermano":"Juan Serves",
                    "Tio": "Pablo Serves"
                }
                }
            }
        }
    }


switch (consulta) {
    case "1":
        console.log(equipos["Equipo1"])
        break;
    case "2":
        console.log(equipos["Equipo2"])
        break;
    case "3":
        console.log(equipos["Equipo3"])
        break;
    case "4":
        console.log(equipos["Equipo4"])
        break;
    case "5":
        console.log(equipos["Equipo5"])
        break; 
    case "6":
        console.log(equipos["Equipo6"])
        break;
    case "7":
        console.log(equipos["Equipo7"])
        break;
    default:
        console.log("Este equipo no es valido recague la pagina")
        break;
}