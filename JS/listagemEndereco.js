const urlEndereco = "https://go-wash-api.onrender.com/api/auth/address";

async function listarEnderecos() {
    let token = localStorage.getItem('token');

    try {
        const respostaApi = await fetch(urlEndereco, {
            method: "GET",
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        
    } catch (error) {
        console.error("Erro na requisição:", error);
        alert("Ocorreu um erro ao carregar os endereços.");
    }
}

document.addEventListener('DOMContentLoaded', listarEnderecos);
