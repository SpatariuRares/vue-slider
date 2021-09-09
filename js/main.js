
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
        interval: null,
    },
    created(){
        this.startPhoto();
    },
    mounted(){
        document.addEventListener("keydown",(e)=>{
            if(e.key =="ArrowRight"){
                this.nextPhoto();
            }
            else if(e.key=="ArrowLeft"){
                this.prevPhoto();
            }
        })
    },
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
        },
        startPhoto(){
            this.interval=setInterval(() => {
                this.nextPhoto();
            },2000)
        },
        stopPhoto(){
            clearInterval(this.interval);
        },
        goPhoto(counter){
            this.counter=counter;
        }
    }
})