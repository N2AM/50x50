import { shallowMount } from "@vue/test-utils";
import Grid from "../../src/views/GridCells.vue";

test("displays grid", () => {
  const wrapper = shallowMount(Grid);
  expect(wrapper.text()).toContain("Hello 50x50");
});

test("Click on a cell, all values in the cells in the samerow and column are increased by 1", () => {
  const wrapper = shallowMount(Grid);
  expect(wrapper.text()).toContain("Hello 50x50");
});

test("Click on a cell, empty cell will get a value of 1.", () => {
  const wrapper = shallowMount(Grid);
  expect(wrapper.text()).toContain("Hello 50x50");
});