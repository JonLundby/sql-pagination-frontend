export const NamesRenderer = {
  render(name) {
    const html = /*html*/ `
    <tr>
    <td>${name.first_name}</td>
    </tr>
    `;
    return html;

    // function correctGroup() {
    //   if (member.isJunior) {
    //     return "Junior";
    //   } else {
    //     return "Senior";
    //   }
    // }
  },
};
