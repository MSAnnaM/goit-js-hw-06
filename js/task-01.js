const count = document.querySelectorAll(".item").length;
console.log(`Number of categories: ${count}`);

const title = document
  .querySelectorAll("h2")
  .forEach((elem) =>
    console.log(
      `Category: ${elem.textContent} \nElements:${elem.nextElementSibling.children.length}`
    )
  );
