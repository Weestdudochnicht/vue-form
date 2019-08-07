<template>
    <div class="form-group">
        <label :class="{'invalid':item.valid === false}"> {{item.label}}
            <input 
                class="form-control"
                v-model.lazy="item.value"
                :name="item.name"
                :id="item.id"
                :placeholder="item.placeholder"
                :pattern="item.pattern"
                required="{item.required}"
            />
        </label>
        <small v-if="item.description" class="form-text text-muted">{{item.description}}</small>
        <small v-if="item.error && item.valid === false" class="form-text text-muted">{{item.error}}</small>
    </div>
</template>
<script>
export default {
    Name:"Input",
    props: [
        "item"
    ],
    updated: function() {
        const {required, value, pattern} = this.item;
        
        const regex = RegExp(pattern);
        let valid = false;

        if(required &&  value) {
            valid = regex.test(value);
        }

        this.item.valid = valid;
    }
}
</script>

<style scoped>
    .invalid{
        color:red;
    }
    .invalid > input {
        border: 2px solid red;
    }
</style>


