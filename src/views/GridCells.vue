<template>
  <h1 class="header">Hello 50x50</h1>
  <div class="grid">
    <div
      v-for="cell in cells"
      :key="'' + cell.positionR + cell.positionC"
      :id="'' + cell.positionR + cell.positionC"
    >
      <button
        :class="{ yellow: cell.yellow, green: cell.green }"
        class="cell"
        type="button"
        :id="'btn-' + cell.positionR + cell.positionC"
        @click="increment(cell)"
      >
        {{ cell.value }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import { Cell } from "../models/cell.model";

let cells: Cell[] = reactive([]);

const init = () => {
  for (let r = 1; r <= 50; r++) {
    for (let c = 1; c <= 50; c++) {
      let positionR = "r" + r;
      let positionC = "c" + c;
      cells.push({
        positionR: positionR,
        positionC: positionC,
        value: 0,
        yellow: false,
        green: false,
      });
    }
  }
};
init();

const increment = (cell: Cell) => {
  let cellRow = cell.positionR;
  let cellColumn = cell.positionC;
  cells
    .filter(
      (elem: Cell) =>
        elem.positionR === cellRow || elem.positionC === cellColumn
    )
    .map((elm: Cell) => {
      return {
        ...elm,
        value: elm.value++,
        yellow:
          ((elm.yellow = true), setTimeout(() => ((elm.yellow = false), 5000))),
      };
    });
  checkFibonacci(cells);
};

const checkFibonacci = (cells: Cell[]) => {
  cells.filter((elm, i) => {
    return elm?.value !== 0 &&
      elm?.value + cells[i + 1].value === cells[i + 2].value &&
      cells[i + 1].value + cells[i + 2].value === cells[i + 3].value &&
      cells[i + 2].value + cells[i + 3].value === cells[i + 4].value
      ? [
          (elm.green = true),
          setTimeout(() => (elm.green = false), 2000),

          (cells[i + 1].green = true),
          setTimeout(() => (cells[i + 1].green = false), 2000),

          (cells[i + 2].green = true),
          setTimeout(() => (cells[i + 2].green = false), 2000),

          (cells[i + 3].green = true),
          setTimeout(() => (cells[i + 3].green = false), 2000),

          (cells[i + 4].green = true),
          setTimeout(() => (cells[i + 4].green = false), 2000),
        ]
      : false;
  });
};
</script>

<style scoped lang="scss">
@import "../assets/scss/theme";

.header {
  text-align: center;
}
.grid {
  display: grid;
  grid-template-columns: repeat(50, 1fr);
  margin: auto;
}

.cell {
  margin: 1px;
  padding: 2px;
}
.yellow {
  animation-name: yellow;
  animation-duration: 5s;
  animation-iteration-count: 1;
}

@keyframes yellow {
  0% {
    background: yellow;
  }
}
.green {
  animation-name: green;
  animation-duration: 5s;
  animation-iteration-count: 1;
}

@keyframes green {
  0% {
    background: green;
  }
}
</style>
