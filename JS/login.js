const url = "https://go-wash-api.onrender.com/api/login";

async function loginUsuario() {
    const button= document.getElementById('submitLogin')
    button.disabled=true 
    button.innerText='Carregando...'
  let email = document.getElementById("emailLogin").value;
  let password = document.getElementById("passwordLogin").value;

  const body = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      password: password,
      user_type_id: 1,
    }),
  };

  try {
    const response = await fetch(url, body);
    const data = await response.json();


    if (!response.ok) {
      alert(`Erro ao fazer login: ${data.data.errors}`);
      console.error(data);
    } else {
      alert("Login realizado com sucesso!");
      console.log(data);
    }
  } catch (error) {
    alert(`Erro ao fazer login: ${error.message}`);
    console.error("Erro:", error);
  }

  button.disabled=false
  button.innerText="Entrar"
}