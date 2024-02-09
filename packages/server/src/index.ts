import server from '@local/prometheus/server';
import { writeFileSync } from 'node:fs';
import { join } from 'node:path';
import log from 'volog';

const app = server({
  fullServer: true,
  nanoapp: ""
});

app.post("/upload", (req, res) => {
  // Getting the name and code from the body.
  const { name, code } = req.body;
  // Writing the code to the file.
  writeFileSync(join(process.cwd(), "apps", `${name}.bundle.js`), code);
  log.info("Uploaded nanoapp", "name", name);
  // Sending the response.
  res.send("OK");
})

app.listen(5000, () => {
  log.info("Server started", "port", 5000)
})