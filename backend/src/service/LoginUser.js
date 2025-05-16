import { compare, hash } from "bcryptjs";
import { config } from "dotenv";
import { MongoClient } from "mongodb";

config({ path: "./../.env" });

export async function LoginUser(data) {
  const client = new MongoClient(process.env.URI);

  try {
    console.log("Обработка..");
    await client.connect();
    console.log("Подключение к БД");
    const db = client.db("mydb");
    console.log("Выбор коллекций");
    const users = db.collection("users");

    console.log("Подождите..");
    const user = await users.findOne({ username: data.username });

    console.log("Проверка");
    if (user) {
      const psw = data.password;
      const hashPsw = await hash(psw, 10);

      const pswValid = await compare(psw, user.password);

      console.log("userDATADB: ", user.password, "userPSW: ", hashPsw);

      if (pswValid) {
        console.log("Успешный вход!");
        return { success: true, message: "Успешный вход!" };
      }
    }
    console.log("неправильные данные");
    return { success: false, message: "неправильные данные" };
  } finally {
    console.log("БД ещё не закрылся..");
  }
}
