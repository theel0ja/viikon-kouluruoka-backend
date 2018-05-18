function greetUser(username: string): string {
  return `Nice to meet you, ${username}!`;
}

let greeting: string = greetUser("Matti");

console.log(greeting);