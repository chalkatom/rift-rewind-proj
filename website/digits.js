document.addEventListener("DOMContentLoaded", () => {
    console.log("Digits script running...");
  
    function wrapDigitsInNode(node) {
      if (node.nodeType === 3) {
        if (/\d/.test(node.nodeValue)) {
          const replaced = node.nodeValue.replace(/(\d+)/g, '<span class="num">$1</span>');
          if (replaced !== node.nodeValue) {
            const wrapper = document.createElement("span");
            wrapper.innerHTML = replaced;
            node.replaceWith(...wrapper.childNodes);
          }
        }
      } else if (node.nodeType === 1) {
        if (!["SCRIPT", "STYLE", "TEXTAREA", "CODE", "PRE"].includes(node.tagName)) {
          node.childNodes.forEach(wrapDigitsInNode);
        }
      }
    }
  
    wrapDigitsInNode(document.body);
  
    const observer = new MutationObserver(mutations => {
      mutations.forEach(mutation => {
        mutation.addedNodes.forEach(node => {
          wrapDigitsInNode(node);
        });
      });
    });
  
    observer.observe(document.body, {
      childList: true,
      subtree: true
    });
  });
  