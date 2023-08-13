function copyToClipboard() {
    const clipboard = new Clipboard(".editor");
    clipboard.on("success", () => {
      console.log("Text copied to clipboard");
    });
    clipboard.on("error", (error) => {
      console.log("Error copying text: ", error);
    });
    clipboard.trigger("copy");
  }
  navigator.clipboard.addEventListener("success", () => {
    console.log("Text copied to clipboard");
  });