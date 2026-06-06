const shortcutLinks = Array.from(document.querySelectorAll(".shortcut-card a"));
const copyButton = document.querySelector(".copy-button");

document.addEventListener("keydown", (event) => {
  if (event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) return;

  const shortcutIndex = Number(event.key) - 1;
  const link = shortcutLinks[shortcutIndex];

  if (link) {
    window.location.href = link.href;
  }
});

copyButton?.addEventListener("click", async () => {
  const link = copyButton.dataset.copy;
  if (!link) return;

  try {
    await navigator.clipboard.writeText(link);
    copyButton.textContent = "Copied";
    window.setTimeout(() => {
      copyButton.textContent = "Copy profile link";
    }, 1400);
  } catch {
    copyButton.textContent = link;
  }
});
