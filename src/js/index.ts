// import axios, {
//     AxiosResponse, 
//     AxiosError
//  } from ""

interface Irasp {
    id: number
    kunid: number
    place: number
    temper: number

}

// let baseurl: string = "" 

new Vue({
    el: "#app",
    data: {
        rasps: [],
        
        },
    methods: {
        getallrasps() {
            console.log("geted all")
            this.helperGetAndShow(baseurl)
        }
    }
})