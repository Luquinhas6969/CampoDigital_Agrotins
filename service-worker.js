function salvarAnimal() {
    let animal = prompt("Digite o tipo de animal: ");

    localStorage.setItem("animal", animal);

    alert("Animal Salvo!");
}