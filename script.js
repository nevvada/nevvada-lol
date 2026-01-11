const openTopLevelItemDrawer = (event) => {
  const siblingList = event.currentTarget.nextElementSibling;
  if (!siblingList || siblingList.tagName !== "UL") {
    return;
  }

  siblingList.classList.toggle("hide");
};

document.querySelectorAll(".top-level-item-description").forEach((element) => {
  element.addEventListener("click", openTopLevelItemDrawer);
});
