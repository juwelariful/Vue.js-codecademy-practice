const anim = new Vue({
    el:'#animation',
    data:{
        show: false
    }


})

const anim1 = new Vue({
    el:'#animation1',
    data:{
        show: false
    }


})

const method_app= new Vue({
    el:'#method',
    data:{
        newSkill:'',
        skills:['hmtl','css','python']
    },
    methods:{
        addNew:function(){
            this.skills.push(this.newSkill)
        },
        removeSkill:function(index){
            this.skills.splice(index, 1)
        }
    }
})