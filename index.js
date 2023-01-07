const { exec } = require("child_process");

const port = process.env.PORT || 3000;

const command = `json-server --watch db.json --port ${port}`;

exec(command, (err, stdout, stderr) => {
  if (err) {
    console.log("Error running exec", err);
    return;
  }
  console.log("stdout:", stdout);
  console.log("stderr:", stderr);
});
// const jsonServer = require('json-server')
// const server = jsonServer.create()
// const router = jsonServer.router('db.json')
// const middlewares = jsonServer.defaults()

// server.use(middlewares)
// server.use(router)
// server.listen(3000, () => {
//   console.log('JSON Server is running')
// })
// let res = await fetch(
//   `https://json-ufdt.onrender.com/cars/${el.id}`,
//   {
//     method: "PATCH",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({ price: edit }),
//   }
// );
// let data = await res.json();
// console.log(data);
// getData();
// }