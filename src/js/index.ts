import axios, {
    AxiosResponse, 
    AxiosError
} from "../../node_modules/axios/index"

interface Irasp {
    machineId: number
    machineName: string    
    temperature: number
    location: number
    date: number
    time: number

}




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
                    console.log(response.data)
                    this.rasps = response.data
                    console.log(this.rasps)
                })
                .catch((error: AxiosError) => {
                    alert(error.message) 
                })
        },
    }
})