import axios from "axios"

/**
* Receber code (string)
* Recuperar o access_token no github
* Verificar se o usuario existe no BD
* ----- Sim = Gera um token
* ----- Nao = Cria no BD, gera um token
* Retornar o token com as infos do user
*/
class AuthenticateUserService {
    async execute(code: string) {
        const url = "https://github.com/login/oauth/access_token"
        
        const response = await axios.post(url, null, {
            params: {
                client_id: process.env.GITHUB_CLIENT_ID,
                client_secrect: process.env.GITHUB_CLIENT_SECRET,
                code
            },
            headers: {
                "Accept": "application/json"
            }
        })

        return response.data
    }
}

export { AuthenticateUserService }