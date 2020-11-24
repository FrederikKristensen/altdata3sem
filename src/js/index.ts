import axios, {
    AxiosResponse, 
    AxiosError
} from "../../node_modules/axios/index"

// interface Irasp {
//     maskineId: number    
//     temperatur: number
//     lokation: number
//     dato: number
//     tid: number

// }

interface Iplant {
    planteId: number
    plantetype: string
    planteNavn: string
    maksHoejde: number
    prist: number
}


let baseurl: string = "https://corstes.azurewebsites.net/api/Plante" 

new Vue({
    el: "#app",
    data: {
        rasps: [],
        plants: []
        },
    methods: {
        getallrasps() {
            this.helperGetAndShow(baseurl)
        },
        helperGetAndShow(url: string) { 
            axios.get<Iplant[]>(url)
                .then((response: AxiosResponse<Iplant[]>) => {
                    this.plants = response.data
                })
                .catch((error: AxiosError) => {
                    alert(error.message) 
                })
        },
    }
})