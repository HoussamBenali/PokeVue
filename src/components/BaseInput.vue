<template>
    <div class="form-group">
        <label for=""><b>{{ label }}</b></label>
        <input 
            :type="type"
            v-on:input="$emit('input', $event.target.value)"
            :class="{
                'is-valid':!validator.$error && validator.$dirty,
                'is-invalid':validator.$error
            }"
            class="form-control" 
            />

    </div>
</template>

<script>
export default {
    props: {
        label: {
            type:String,
            required: true
        },
        type: {
            type: String,
            default: 'text',
            validator (value) {
                return ['text','email','password'].includes(value)
            }
        },
        value: {
            type: String,
            require: true
        },
        validator: {
            type: Object,
            require: true
        }
    }
}
</script>