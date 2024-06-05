<template>
    <div>
      <form @submit.prevent="submitForm">
        <div>
          <label for="name">Name:</label>
          <input type="text" id="name" v-model="form.name" />
          <div v-if="!v$.name.$pending && !v$.name.required">
            Name is required.
          </div>
        </div>
  
        <div>
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="form.email" />
          <div v-if="!v$.email.$pending && !v$.email.required">
            Email is required.
          </div>
          <div v-if="!v$.email.$pending && !v$.email.email">
            Please enter a valid email address.
          </div>
        </div>
  
        <button type="submit">Submit</button>
      </form>
    </div>
  </template>
  
  <script>
  import { ref, reactive } from 'vue';
  import { useVuelidate } from '@vuelidate/core';
  import { required, email } from '@vuelidate/validators';
  
  export default {
    name: 'MyForm',
    setup() {
      const form = reactive({
        name: '',
        email: ''
      });
  
      const rules = {
        name: { required },
        email: { required, email }
      };
  
      const v$ = useVuelidate(rules, form);
  
      function submitForm() {
        v$.value.$touch();
        if (!v$.value.$invalid) {
          // Form is valid, do what you need to do with the form values
          console.log('Form submitted:', form);
        }
      }
  
      return { form, v$, submitForm };
    }
  };
  </script>