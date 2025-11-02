const products = [
    {
        id: 1,
        name: '60-2 6000 Mts. Blanco',
        description: 'Hilo de Nylon o Poliamida de Alta Tenacidad y Alta Resistencia para realizar costuras como Calzados (Zapatillas, Zapatos), Cueros (Marroquinería, Bolsos), Aparado de Calzado, Instrumentos de Camping (Carpas, Bolsas para dormir), Lonería (Botes, Camiones, Carpintería), Colchonería (Matelasse), Inflables, Cinturones de Seguridad',
        category: 'Nylon',
        categoryId: 1,
        price: 1000.00,
        code: '10602NN200',
        img: 'https://static.wixstatic.com/media/baed1c_7d6fac417fdb4041975f5326166d1e69~mv2.png/v1/fill/w_668,h_1002,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/baed1c_7d6fac417fdb4041975f5326166d1e69~mv2.png',
        stock: 4
    },
    {
        id: 4,
        name: '40-3 4000 Mts. Blanco',
        description: 'Hilo de Poliester de Alta Tenacidad y Alta Resistencia para realizar costuras como Calzados (Zapatillas, Zapatos), Cueros (Marroquinería, Bolsos), Aparado de Calzado, Instrumentos de Camping (Carpas, Bolsas para dormir), Lonería (Botes, Camiones, Carpintería), Colchonería (Matelasse).',
        category: 'Poliester',
        categoryId: 2,
        price: 900.00,
        code: '10403PN200',
        img: 'https://static.wixstatic.com/media/baed1c_f88384ca72bc43d2bbe7a36a301c9eb6~mv2.png/v1/fill/w_544,h_818,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/hilo%20de%20coser%20conotex%20fabrica%20poliester%20alta%20tenacidad%2040-3%20blanco.png',
        stock: 2
    },
    {
        id: 10,
        name: '10-3 1000 Mts. Blanco',
        description: 'Hilo de Nylon o Poliamida de Alta Tenacidad y Alta Resistencia para realizar costuras como Calzados (Zapatillas, Zapatos), Cueros (Marroquinería, Bolsos), Aparado de Calzado, Instrumentos de Camping (Carpas, Bolsas para dormir), Lonería (Botes, Camiones, Carpintería), Colchonería (Matelasse), Inflables, Cinturones de Seguridad',
        category: 'Nylon',
        categoryId: 1,
        price: 1000.00,
        code: '10103NN200',
        img: 'https://static.wixstatic.com/media/baed1c_f81a03421eb6420495c43f814ff59c28~mv2.png/v1/fill/w_526,h_818,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/hilo%20de%20coser%20conotex%20fabrica%2010-3%201000%20mts%20nylon%20blanco.png',
        stock: 5
    },
    {
        id: 2,
        name: '30-2 3000 Mts. Blanco',
        description: 'Hilo de Nylon o Poliamida de Alta Tenacidad y Alta Resistencia para realizar costuras como Calzados (Zapatillas, Zapatos), Cueros (Marroquinería, Bolsos), Aparado de Calzado, Instrumentos de Camping (Carpas, Bolsas para dormir), Lonería (Botes, Camiones, Carpintería), Colchonería (Matelasse), Inflables, Cinturones de Seguridad.',
        category: 'Nylon',
        categoryId: 1,
        price: 1000.00,
        code: '10302NN191',
        img: 'https://static.wixstatic.com/media/baed1c_005758b3b0514860b07e3633917fdd08~mv2.png/v1/fill/w_544,h_818,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/hilo%20de%20coser%20conotex%20fabrica%2030-2%203000%20mts%20nylon%20blanco.png',
        stock: 7
    },
    {
        id: 11,
        name: '20-3 2000 Mts. Negro',
        description: 'Hilo de Nylon o Poliamida de Alta Tenacidad y Alta Resistencia para realizar costuras como Calzados (Zapatillas, Zapatos), Cueros (Marroquinería, Bolsos), Aparado de Calzado, Instrumentos de Camping (Carpas, Bolsas para dormir), Lonería (Botes, Camiones, Carpintería), Colchonería (Matelasse), Inflables, Cinturones de Seguridad',
        category: 'Nylon',
        categoryId: 1,
        price: 1000.00,
        code: '10103NN200',
        img: 'https://static.wixstatic.com/media/baed1c_c1de4b9c376c4786afded2de4d5dfae0~mv2.png/v1/fill/w_554,h_802,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/hilo%20de%20coser%20conotex%20fabrica%2020-3%202000%20mts%20nylon.png',
        stock: 15
    },
    {
        id: 3,
        name: '60-2 6000 mts Beige',
        description: 'Hilo de Poliester de Alta Tenacidad y Alta Resistencia para realizar costuras como Calzados (Zapatillas, Zapatos), Cueros (Marroquinería, Bolsos), Aparado de Calzado, Instrumentos de Camping (Carpas, Bolsas para dormir), Lonería (Botes, Camiones, Carpintería), Colchonería (Matelasse).',
        category: 'Poliester',
        categoryId: 2,
        price: 1500.00,
        code: '10602PN622',
        img: 'https://static.wixstatic.com/media/baed1c_24de63ad71694c74a447e2a20e281fba~mv2.png/v1/fill/w_680,h_984,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/baed1c_24de63ad71694c74a447e2a20e281fba~mv2.png',
        stock: 3
    },
    {
        id: 5,
        name: '40-3 1000 Mts. Beige',
        description: 'Hilo de Poliester de Alta Tenacidad y Alta Resistencia para realizar costuras como Calzados (Zapatillas, Zapatos), Cueros (Marroquinería, Bolsos), Aparado de Calzado, Instrumentos de Camping (Carpas, Bolsas para dormir), Lonería (Botes, Camiones, Carpintería), Colchonería (Matelasse).',
        category: 'Poliester',
        categoryId: 2,
        price: 400.00,
        code: '30403PN622',
        img: 'https://static.wixstatic.com/media/baed1c_07e87e33ff4e4b359789f102e54bbeac~mv2.png/v1/fill/w_526,h_818,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/hilo%20de%20coser%20conotex%20fabrica%20poliester%2060-2%201500%20mts%20color.png',
        stock: 6
    },
    {
        id: 6,
        name: '60-2 6000 Mts. Blanco',
        description: 'Hilo de Poliester de Alta Tenacidad y Alta Resistencia para realizar costuras como Calzados (Zapatillas, Zapatos), Cueros (Marroquinería, Bolsos), Aparado de Calzado, Instrumentos de Camping (Carpas, Bolsas para dormir), Lonería (Botes, Camiones, Carpintería), Colchonería (Matelasse).',
        category: 'Poliester',
        categoryId: 2,
        price: 900.00,
        code: '10602PN200',
        img: 'https://static.wixstatic.com/media/baed1c_e1b5e7cdfab1438f8e8726d6222c6515~mv2.png/v1/fill/w_544,h_818,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/hilo%20de%20coser%20conotex%20fabrica%20poliester%2060-2%206000%20mts%20blanco.png',
        stock: 12
    },
    {
        id: 7,
        name: '40-2 4000 Mts. Blanco',
        description: 'Hilo de Poliester de Fibra Cortada (Spun Polyester) para realizar costuras resistentes de Indumentaria, Blanquería, Lonería, Jeans, Camperas, Colchonería, Mercería.',
        category: 'Fibra Cortada',
        categoryId: 3,
        price: 500.00,
        code: '61120FC101',
        img: 'https://static.wixstatic.com/media/baed1c_07c4b610bcb940e9b370186f39d14437~mv2.png/v1/fill/w_668,h_924,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/baed1c_07c4b610bcb940e9b370186f39d14437~mv2.png',
        stock: 9
    },
    {
        id: 8,
        name: '40-2 4000 Mts. Negro',
        description: 'Hilo de Poliester de Fibra Cortada (Spun Polyester) para realizar costuras resistentes de Indumentaria, Blanquería, Lonería, Jeans, Camperas, Colchonería, Mercería.',
        category: 'Fibra Cortada',
        categoryId: 3,
        price: 600.00,
        code: '61120FC660',
        img: 'https://static.wixstatic.com/media/baed1c_31d99ecaec7b45df8562bb6c083d234d~mv2.png/v1/fill/w_544,h_818,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/hilo%20de%20coser%20fibra%20cortada%20poliester%20algodon%20conotex%20negro%202.png',
        stock: 8
    },
    {
        id: 9,
        name: '24-2 5000 Mts. Blanco',
        description: 'Hilo de Poliester de Fibra Cortada (Spun Polyester) para realizar costuras resistentes de Indumentaria, Blanquería, Lonería, Jeans, Camperas, Colchonería, Mercería.',
        category: 'Fibra Cortada',
        categoryId: 3,
        price: 700.00,
        code: '61750FC101',
        img: 'https://static.wixstatic.com/media/baed1c_4e8e8f579338448cbddcd885fe7c1775~mv2.png/v1/fill/w_628,h_786,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/hilo%20de%20coser%20conotex%20fabrica%20hilo%20bolsero%20310%20para%20cerrar%20bolsa%202.png',
        stock: 6
    }


]

export const getProductsById = (id) => {
    let success = true;
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const idNumber = Number(id)
            const product = products?.find(prod => prod.id === idNumber)
            success && product ? resolve(product) : reject(new Error("Producto no encontrado"));
        }, 1500);
    });
};

export const getProducts = () => {
    let success = true;
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            success && products?.length ? resolve(products) : reject(new Error("Productos no encontrados"));
        }, 1500);
    });
};

export const getProductsByCategoryId = (categoryId) => {
    let success = true;
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const productsByCategory = products?.filter(product => product.categoryId === Number(categoryId));
            success && productsByCategory?.length ? resolve(productsByCategory) : reject(new Error("Productos no encontrados en Categoria seleccionada"));
        }, 1500);
    });
};