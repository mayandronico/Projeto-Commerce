// Challenge 22 

db.produtos.updateMany({}, { $set: { vendasPorDia: [0, 0, 0, 0, 0, 0, 0] } });
db.produtos.updateMany({ nome: "Big Mac" }, { $set: { vendasPorDia: [0, 0, 0, 60, 0, 0, 0] } });
db.produtos.updateMany({ tags: "bovino" }, { $set: { vendasPorDia: [0, 0, 0, 60, 0, 0, 120] } });
db.produtos.find({}, { _id: 0, nome: 1, vendasPorDia: 1 });