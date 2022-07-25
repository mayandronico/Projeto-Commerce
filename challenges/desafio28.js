// Challenge 28 

db.produtos.countDocuments({ ingredientes: { $size: 4 } });