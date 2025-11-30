function registrarEvento(tipo, ...metadados) {
  console.log("Tipo do evento:", tipo);
  console.log("Metadados:", metadados);
}

registrarEvento("click");
registrarEvento("erro", 404, "Not Found");
registrarEvento("login", "user_a", "ip:127.0.0.1", "browser:Chrome");
