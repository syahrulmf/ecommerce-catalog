import { reactive } from "vue";

export default reactive({
  count: 1,
  product: [],
  nextCount() {
    this.count += 1;
    console.log(this.count);
  },
});
