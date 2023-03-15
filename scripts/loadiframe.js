window.onload = () => {
  const iframeContainerElement = document.getElementById("iframe-container");
  const parent = iframeContainerElement.parentNode.parentElement;
  console.log("Parent", parent);
  console.log("Parent w,h", parent.clientWidth, parent.clientHeight);
  //   const width = parent.clientWidth;
  //   const height = parent.clientHeight;
  const width = iframeContainerElement.clientWidth;
  const height = iframeContainerElement.clientHeight;
  const adjustedWidth = width >= 500 ? `${width}px` : "500px";
  const adjustedHeight = height >= 500 ? `${height}px` : "500px";
  console.log(
    "onload width, height and adjustments",
    width,
    height,
    adjustedWidth,
    adjustedHeight
  );
  iframeContainerElement.style.width = adjustedWidth;
  iframeContainerElement.style.height = adjustedHeight;

  /*     window.addEventListener("resize", (event) => {
      console.log("resize", window.innerHeight, window.innerWidth);
      iframeContainerElement.style.width = window.innerWidth;
      iframeContainerElement.style.height = window.innerHeight;
    }); */
};
