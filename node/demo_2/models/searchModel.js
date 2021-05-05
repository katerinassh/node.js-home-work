const client = require('./db.js');

class SearchModel {
    async showProductsByCategory (searchCriteria) {
        const data = [];
        for (let i = 0; i < searchCriteria.length; i++) {
            let { rows } = await client.query(`SELECT products.id, products.name, manufactures.manufacture_name AS manufacture, categories.category_name AS category 
                FROM products 
                JOIN manufactures ON manufactures.id = products.manufacture_id 
                JOIN categories ON categories.id = products.category_id
                WHERE categories.id = ${searchCriteria[i]}`);
            rows = rows.map(row => JSON.stringify(row));
            data.push(...rows);
        };

        return data;
    }

    async showProductsByName (searchCriteria) {
        let { rows } = await client.query(`SELECT products.id, products.name, manufactures.manufacture_name AS manufacture, categories.category_name AS category, units.name AS units, price, img_link 
        FROM products 
        JOIN manufactures ON manufactures.id = products.manufacture_id 
        JOIN categories ON categories.id = products.category_id
        JOIN units ON units.id = products.units_id
        WHERE products.name ~ '${searchCriteria}'`);
        rows = rows.map(row => JSON.stringify(row));

        return rows;
    }

    async showProductsByManufacture (searchCriteria) {
        let { rows } = await client.query(`SELECT products.id, products.name, manufactures.manufacture_name AS manufacture, categories.category_name AS category, units.name AS units, price, img_link 
        FROM products 
        JOIN manufactures ON manufactures.id = products.manufacture_id 
        JOIN categories ON categories.id = products.category_id
        JOIN units ON units.id = products.units_id
        WHERE manufactures.manufacture_name ~ '${searchCriteria}'`);
        rows = rows.map(row => JSON.stringify(row));

        return rows;
    }

    async showProductsByNameManufacture ({ products, manufactures }) { 
        let { rows } = await client.query(`SELECT products.id, products.name, manufactures.manufacture_name AS manufacture, categories.category_name AS category, units.name AS units, price, img_link 
        FROM products 
        JOIN manufactures ON manufactures.id = products.manufacture_id 
        JOIN categories ON categories.id = products.category_id
        JOIN units ON units.id = products.units_id
        WHERE products.name ~ '${products}' AND manufactures.manufacture_name ~ '${manufactures}'`);
        rows = rows.map(row => JSON.stringify(row));

        return rows;
    }
    
    async showProductsByCategoryName ({ categories, products }) { 
        const data = [];

        for (let i = 0; i < categories.length; i++) {
            let { rows } = await client.query(`SELECT products.id, products.name, manufactures.manufacture_name AS manufacture, categories.category_name AS category 
                FROM products 
                JOIN manufactures ON manufactures.id = products.manufacture_id 
                JOIN categories ON categories.id = products.category_id
                WHERE categories.id = ${categories[i]} AND products.name ~ '${products}'`);
            rows = rows.map(row => JSON.stringify(row));
            data.push(...rows);
        };

        return data;
    }

    async showProductsByCategoryManufacture ({ categories, manufactures }) { 
        const data = [];
        
        for (let i = 0; i < categories.length; i++) {
            let { rows } = await client.query(`SELECT products.id, products.name, manufactures.manufacture_name AS manufacture, categories.category_name AS category 
                FROM products 
                JOIN manufactures ON manufactures.id = products.manufacture_id 
                JOIN categories ON categories.id = products.category_id
                WHERE categories.id = ${categories[i]} AND manufactures.manufacture_name ~ '${manufactures}'`);
            rows = rows.map(row => JSON.stringify(row));
            data.push(...rows);
        };

        return data;
    }

    async showProductsByAll ({ categories, products, manufactures }) { 
        const data = [];
        
        for (let i = 0; i < categories.length; i++) {
            let { rows } = await client.query(`SELECT products.id, products.name, manufactures.manufacture_name AS manufacture, categories.category_name AS category 
                FROM products 
                JOIN manufactures ON manufactures.id = products.manufacture_id 
                JOIN categories ON categories.id = products.category_id
                WHERE categories.id = ${categories[i]} AND (products.name ~ '${products}' AND manufactures.manufacture_name ~ '${manufactures}')`);
            rows = rows.map(row => JSON.stringify(row));
            data.push(...rows);
        };

        return data;
    }
}

const searchModel = new SearchModel();

module.exports = searchModel;