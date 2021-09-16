const app = new Vue({
    el: "#root",
    data: {
        emails: [],
    },
    mounted() {
            for (let index = 0; index < 10; index++) {
                axios.get("https://flynn.boolean.careers/exercises/api/random/mail").then((email) => {
                            if (!this.emails.includes(email)) {
                                this.emails.push(email.data.response);
                            }
                }) 
            } 
            console.log(this.emails);
            return this.emails;
    } 
})