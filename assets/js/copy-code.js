
const copyIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-copy" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1z"/></svg>`

const checkCircle = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle" viewBox="0 0 16 16"><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/><path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05"/></svg>`

document.querySelectorAll("pre").forEach(pre => {
  const div = document.createElement("div");
  div.style.display = "flex";
  div.style.justifyContent = "end";
  div.style.position = "relative";
  const button = document.createElement("button");
  button.innerHTML = copyIcon;
  button.classList.add("btn", "btn--small", "btn__icon");
  button.style.position = "absolute";
  button.style.top = "12px";
  button.style.right = "12px";
  button.title = "Copiar";
  div.appendChild(button)
  pre.parentElement.insertBefore(div, pre);
  button.addEventListener("click", () => {
    navigator.clipboard.writeText(pre.innerText).then(() => {
      button.classList.add("btn--active");
      button.innerHTML = checkCircle;
      setTimeout(() => {
        button.classList.remove("btn--active");
        button.innerHTML = copyIcon;
      }, 1000)
    }).catch(() => {
      // Do Nothing
    });
  })
})
