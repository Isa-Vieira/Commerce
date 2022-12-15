db.produtos.find({},
    { nome: 1, vendidos: 1, _id: 0 })
    .sort({ nome: 1, vendidos: 1 }).limit(1);