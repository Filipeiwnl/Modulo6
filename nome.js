const greetUsers = (names) => {
    // Itera sobre cada nome no array
    names.forEach(name => {
        console.log(`Olá, ${name}! Seja bem-vindo(a).`);
    });
}
const userNames = ["Alice", "Bob", "Charlie"];
greetUsers(userNames);
