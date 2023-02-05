let BASE = 'https://api.b7web.com.br/devsfood/api';

export default {
    getCategories: async () => {
        // GET /api/categories
        const res = await fetch(BASE+'/categories');
        const json = await res.json();
        return json;
    },
    getProducts: async (category, page, search) => {
       // GEt /products ([search, page, category])
       let fields = {};
       if(category !== 0) {
        fields.category = category;
       }
       if(page > 0) {
        fields.page = page;
       }
       if(search !== 0) {
        fields.search = search
       }
       let queryString = new URLSearchParams(fields).toString();


       const res = await fetch(BASE+'/products?'+queryString);
       const json = await res.json();
       return json;
    }
}