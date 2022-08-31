import { shallowMount } from "@vue/test-utils";
import Grid from "../../src/views/GridCells.vue";

test("displays grid", () => {
  const wrapper = shallowMount(Grid);
  expect(wrapper.text()).toContain("Hello 50x50");
});

test("Click on a cell, all values in the cells in the samerow and column are increased by 1", async () => {
  const wrapper = shallowMount(Grid);
  wrapper.find("#btn-r1c1").trigger("click");
  await wrapper.vm.$nextTick();
  expect(wrapper.find("#btn-r1c49").text()).toContain("1");
});

test("Click on a cell, empty cell will get a value of 1.", async () => {
  const wrapper = shallowMount(Grid);
  expect(wrapper.find("#btn-r16c20").text()).toContain("0");
  wrapper.find("#btn-r16c20").trigger("click");
  await wrapper.vm.$nextTick();
  expect(wrapper.find("#btn-r16c20").text()).toContain("1");
});
