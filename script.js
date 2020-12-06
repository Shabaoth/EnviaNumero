enviar = document.getElementById("btn_enviar")
telefone = document.querySelector('#telefone')

enviar.addEventListener("click", function(event) {
    alert(`tel:+55${telefone.value}`)
    document.location.href = `tel:+55${telefone.value}`
})