import { v4 as uuidV4 } from "uuid";
import { hash } from "bcrypt";
import createConnection from "../index";

async function create() {
  const connection = await createConnection();

  const id = uuidV4();
  const password = await hash("admin", 8);

  await connection.query(
    `INSERT INTO USERS(id, name, email, password, "isAdmin", driver_license)
    VALUES('${id}', 'admin', 'admin@rentx.co.ao', '${password}', true, 'XXXX')
    `
  );
}

create().then(() => console.log("User admin created!"));
