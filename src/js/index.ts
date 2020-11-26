import axios, {
    AxiosResponse, 
    AxiosError
} from "../../node_modules/axios/index"

interface Irasp {
    maskineId: number
    maskineName: string    
    temperature: number
    location: number
    date: number
    time: number

}

// interface Iplant {
//     planteId: number
//     plantetype: string
//     planteNavn: string
//     maksHoejde: number
//     prist: number
// }


let baseurl: string = "http://coronatest.azurewebsites.net/api/CoronaTests" 

new Vue({
    el: "#app",
    data: {
        rasps: [],
        },
    methods: {
        getallrasps() {
            this.helperGetAndShow(baseurl)
        },
        helperGetAndShow(url: string) { 
            axios.get<Irasp[]>(url)
                .then((response: AxiosResponse<Irasp[]>) => {
                    this.plants = response.data
                })
                .catch((error: AxiosError) => {
                    alert(error.message) 
                })
        },
    }
})