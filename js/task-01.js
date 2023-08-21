const count = document.querySelector("#categories");
console.log(`Number of categories: ${count.children.length}`);

const title = [...count.children]
  .forEach((elem) =>
  console.log(
    `Category: ${elem.firstElementChild.textContent} \nElements:${elem.lastElementChild.children.length}`
  )
);
