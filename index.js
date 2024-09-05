const saveButtonEl = document.querySelector("#saveButton");
console.log("🚀 ~ saveButtonEl:", saveButtonEl);

const modal = new bootstrap.Modal("#inputModal");

// form요소
const nameEl = document.querySelector('[name="name"]');

const handleSave = () => {
  console.log("click");
  // modal.hide();
};

const handleInputChange = () => {
  const value = nameEl.value;
  console.log("🚀 value:", value);
};

saveButtonEl.addEventListener("click", handleSave);
nameEl.addEventListener("change", handleInputChange);
