export function construct(list, container, itemRenderer) {
  const ListRenderer = {
    list: list,
    container: document.querySelector(container),
    itemRenderer: itemRenderer,

    render() {
      this.container.innerHTML = "";
      for (const item of list) {
        const html = this.itemRenderer.render(item);
        this.container.insertAdjacentHTML("beforeend", html);
      }
    },

    sort(sortBy, sortDir) {
      if (sortDir) {
        this.sortDir = sortDir;
      } else if (sortBy === this.sortBy) {
        if (this.sortDir === "asc") {
          this.sortDir = "desc";
        } else {
          this.sortDir = "asc";
        }
      } else {
        this.sortDir = "asc";
      }

      this.sortBy = sortBy;

    //   console.log(`sorter efter ${this.sortBy} i retning ${this.sortDir}`);

      list.sort((a, b) => {
        if (this.sortDir === "asc") {
          if (a[this.sortBy] > b[this.sortBy]) {
            return 1;
          } else {
            return -1;
          }
        } else {
          if (a[this.sortBy] < b[this.sortBy]) {
            return 1;
          } else {
            return -1;
          }
        }
      });

      this.render();
    },
  };

  return ListRenderer;
}
