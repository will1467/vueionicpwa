<template>
  <ion-grid>
    <form @submit="onSubmit">
      <ion-col>
        <ion-item>
          <ion-label>Zip Code:</ion-label>
          <ion-input
            :value="zip"
            @input="zip = $event.target.value"
            placeholder="Enter US Zip Code"
          ></ion-input>
        </ion-item>
      </ion-col>
      <ion-col>
        <ion-button type="Submit" color="primary" expand="block">Find</ion-button>
      </ion-col>
    </form>
  </ion-grid>
</template>

<script>
export default {
  name: "ZipSearch",
  data() {
    return {
      zip: ""
    };
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();
      const isValidZip = /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(this.zip);

      if (!isValidZip) {
        this.showAlert();
      } else {
        this.$emit("get-zip", this.zip);
        this.zip = "";
      }
    },
    showAlert() {
      return this.$ionic.alertController
        .create({
          header: "Enter Zipcode",
          message: "Please enter a valid US zipcode",
          buttons: ["OK"]
        })
        .then(a => a.present());
    }
  }
};
</script>

export default {

}
