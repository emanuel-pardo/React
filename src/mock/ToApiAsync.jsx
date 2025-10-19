const products = [
    {
        id: 1,
        name: '60-2 6000 Mts. Blanco',
        description: 'Hilo de Nylon o Poliamida de Alta Tenacidad y Alta Resistencia para realizar costuras como Calzados (Zapatillas, Zapatos), Cueros (Marroquinería, Bolsos), Aparado de Calzado, Instrumentos de Camping (Carpas, Bolsas para dormir), Lonería (Botes, Camiones, Carpintería), Colchonería (Matelasse), Inflables, Cinturones de Seguridad',
        category: 'Nylon',
        price: 1000.00,
        code: '10602NN200',
        img: '',
        stock: 4
    },
    {
        id: 2,
        name: '60-2 6000 Mts. Negro',
        description: 'Hilo de Nylon o Poliamida de Alta Tenacidad y Alta Resistencia para realizar costuras como Calzados (Zapatillas, Zapatos), Cueros (Marroquinería, Bolsos), Aparado de Calzado, Instrumentos de Camping (Carpas, Bolsas para dormir), Lonería (Botes, Camiones, Carpintería), Colchonería (Matelasse), Inflables, Cinturones de Seguridad.',
        category: 'Nylon',
        price: 2000.00,
        code: '10602NN191',
        img: '',
        stock: 7
    },
    {
        id: 3,
        name: '60-2 6000 mts Beige',
        description: 'Hilo de Poliester de Alta Tenacidad y Alta Resistencia para realizar costuras como Calzados (Zapatillas, Zapatos), Cueros (Marroquinería, Bolsos), Aparado de Calzado, Instrumentos de Camping (Carpas, Bolsas para dormir), Lonería (Botes, Camiones, Carpintería), Colchonería (Matelasse).',
        category: 'Poliester',
        price: 1500.00,
        code: '10602PN622',
        img: '',
        stock: 3
    },
    {
        id: 4,
        name: '40-3 4000 Mts. Blanco',
        description: 'Hilo de Poliester de Alta Tenacidad y Alta Resistencia para realizar costuras como Calzados (Zapatillas, Zapatos), Cueros (Marroquinería, Bolsos), Aparado de Calzado, Instrumentos de Camping (Carpas, Bolsas para dormir), Lonería (Botes, Camiones, Carpintería), Colchonería (Matelasse).',
        category: 'Poliester',
        price: 900.00,
        code: '10403PN200',
        img: '',
        stock: 2
    },
    {
        id: 5,
        name: '40-3 4000 Mts. Negro',
        description: 'Hilo de Poliester de Alta Tenacidad y Alta Resistencia para realizar costuras como Calzados (Zapatillas, Zapatos), Cueros (Marroquinería, Bolsos), Aparado de Calzado, Instrumentos de Camping (Carpas, Bolsas para dormir), Lonería (Botes, Camiones, Carpintería), Colchonería (Matelasse).',
        category: 'Poliester',
        price: 1400.00,
        code: '10403PN191',
        img: '',
        stock: 6
    },
    {
        id: 6,
        name: '60-2 6000 Mts. Blanco',
        description: 'Hilo de Poliester de Alta Tenacidad y Alta Resistencia para realizar costuras como Calzados (Zapatillas, Zapatos), Cueros (Marroquinería, Bolsos), Aparado de Calzado, Instrumentos de Camping (Carpas, Bolsas para dormir), Lonería (Botes, Camiones, Carpintería), Colchonería (Matelasse).',
        category: 'Poliester',
        price: 900.00,
        code: '10602PN200',
        img: '',
        stock: 12
    },
    {
        id: 7,
        name: '40-2 4000 Mts. Blanco',
        description: 'Hilo de Poliester de Fibra Cortada (Spun Polyester) para realizar costuras resistentes de Indumentaria, Blanquería, Lonería, Jeans, Camperas, Colchonería, Mercería.',
        category: 'Fibra Cortada',
        price: 500.00,
        code: '61120FC101',
        img: '',
        stock: 9
    },
    {
        id: 8,
        name: '40-2 4000 Mts. Negro',
        description: 'Hilo de Poliester de Fibra Cortada (Spun Polyester) para realizar costuras resistentes de Indumentaria, Blanquería, Lonería, Jeans, Camperas, Colchonería, Mercería.',
        category: 'Fibra Cortada',
        price: 600.00,
        code: '61120FC660',
        img: '',
        stock: 8
    },
    {
        id: 9,
        name: '24-2 5000 Mts. Blanco',
        description: 'Hilo de Poliester de Fibra Cortada (Spun Polyester) para realizar costuras resistentes de Indumentaria, Blanquería, Lonería, Jeans, Camperas, Colchonería, Mercería.',
        category: 'Fibra Cortada',
        price: 700.00,
        code: '61750FC101',
        img: '',
        stock: 6
    },
    {
        id: 10,
        name: '10-3 1000 Mts. Blanco',
        description: 'Hilo de Nylon o Poliamida de Alta Tenacidad y Alta Resistencia para realizar costuras como Calzados (Zapatillas, Zapatos), Cueros (Marroquinería, Bolsos), Aparado de Calzado, Instrumentos de Camping (Carpas, Bolsas para dormir), Lonería (Botes, Camiones, Carpintería), Colchonería (Matelasse), Inflables, Cinturones de Seguridad',
        category: 'Nylon',
        price: 1000.00,
        code: '10103NN200',
        img: '',
        stock: 5
    },
    {
        id: 11,
        name: '20-3 2000 Mts. Negro',
        description: 'Hilo de Nylon o Poliamida de Alta Tenacidad y Alta Resistencia para realizar costuras como Calzados (Zapatillas, Zapatos), Cueros (Marroquinería, Bolsos), Aparado de Calzado, Instrumentos de Camping (Carpas, Bolsas para dormir), Lonería (Botes, Camiones, Carpintería), Colchonería (Matelasse), Inflables, Cinturones de Seguridad',
        category: 'Nylon',
        price: 1000.00,
        code: '10103NN200',
        img: '',
        stock: 15
    }

]

export const getProducts = () => {
    let success = true;

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            success ? resolve(products) : reject("Intente nuevamente más tarde");
        }, 1500);
    });
};