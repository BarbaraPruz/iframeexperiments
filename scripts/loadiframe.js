window.onload = () => {
  const iframeContainerElement = document.getElementById("iframe-container");
  //  const parent = iframeContainerElement.parentNode.parentElement;
  const windowHeight = window.innerHeight;
  const windowWidth = window.innerWidth;
  const minWidth = 500; //windowWidth < 500 ? 500 : windowWidth;
  const minHeight = 500; //windowHeight < 500 ? 500 : windowHeight;
  const maxHeight = windowHeight;
  const maxWidth = windowWidth;
  // console.log("Parent", parent);
  //  console.log("Parent w,h", parent.clientWidth, parent.clientHeight);
  //console.log("window w,h", windowWidth, windowHeight);
  // console.log("min w,h values", minWidth, minHeight);
  //   const width = parent.clientWidth;
  //   const height = parent.clientHeight;
  const width = iframeContainerElement.clientWidth;
  const height = iframeContainerElement.clientHeight;
  const adjustedWidth = width >= minWidth ? width : minWidth;
  //  const adjustedHeight = height >= minHeight ? `${height}px` : `${minHeight}px`;
  // const adjustedHeight = adjustedWidth * (16 / 9);
  console.log(
    "onload width, height and adjustments",
    width,
    height,
    adjustedWidth,
    adjustedHeight
  );
  iframeContainerElement.style.width = `${adjustedWidth}px`;
  // iframeContainerElement.style.height = `${adjustedHeight}px`;

  /*     window.addEventListener("resize", (event) => {
      console.log("resize", window.innerHeight, window.innerWidth);
      iframeContainerElement.style.width = window.innerWidth;
      iframeContainerElement.style.height = window.innerHeight;
    }); */
};
