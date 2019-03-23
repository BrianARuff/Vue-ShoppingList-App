const vue = new Vue({
    el: "#app",
    data: {
        items: ['Apples'],
        newItem: '',
        title: 'Shopping List',
        noTitle: true,
        noItem: false,
        alreadyHasItem: false
    },
    methods: {
        addItem: function() {
            if(!this.newItem) {
                this.noItem = true;
            }
            else if(!(this.items.includes(this.newItem))){
                this.items.push(this.newItem);
                if(this.noItem) {
                    resetNoItem();
                }
                if(this.alreadyHasItem) {
                    resetAlreadyHasItem();
                }
            } else {
                this.alreadyHasItem = true;
            }
        }
    }
});

function resetNoItem() {
    if(vue.noItem){
        vue.noItem = false;
    }
}

function resetAlreadyHasItem() {
    if(vue.alreadyHasItem){
        vue.alreadyHasItem = false;
    }
}