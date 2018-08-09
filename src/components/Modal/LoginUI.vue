<template>
    <Modal v-model="ShowModal" title=".." :options="options">
        Modal内容
    </Modal>
</template>

<script  lang="ts">
import Vue from "../../vue";
import Component from "vue-class-component";
@Component({
  props: {
    value: {
        type: Boolean,
        Boolean:false
    }
  }
})
export default class LoginUI extends Vue {
    value:any;
    options:object={
        area:"70%",
        anim:1,
        maxmin:true,
        moveOut:true,
        btn:['确定'],
    };
    get ShowModal(){
        return this.value;
    }
    set ShowModal(v:Boolean){
        this.$emit("input",v)
    }
}
</script>

<style scoped>
    
</style>