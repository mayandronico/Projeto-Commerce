// Challenge 27 

db.produtos.countDocuments({ nome: { $regex: /Mc/i } });