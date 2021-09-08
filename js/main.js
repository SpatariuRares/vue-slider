
Vue.config.devtools = true;


const app = new Vue({
    el: '#root',
    data: {
        counter:0,
        photos:[
            "img/image1.jpg",
            "img/image2.jpg",
            "img/image3.jpg",
            "img/image4.jpg",
        ],
    },
    /*mounted:{

    },*/
    methods:{
        nextPhoto() {
            this.counter++;
            if (this.counter>=this.photos.length){
                this.counter=0;
            }
        },
        prevPhoto() {
            this.counter--;
            if (this.counter < 0) {
                this.counter = 3;
            }
        }
    }
})