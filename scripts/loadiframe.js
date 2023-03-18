window.onload = () => {
  const iframeContainerElement = document.getElementById("iframe-container");
  const iframeElement = document.getElementById("responsive-iframe");

  const minWidth = 700;
  const minHeight = 850;
  const width = iframeContainerElement.clientWidth;
  const height = iframeContainerElement.clientHeight;
  let adjustedWidth;
  let adjustedHeight;
  let aspectRatio;
  if (width < minWidth) {
    adjustedWidth = `100vw`;
    adjustedHeight = `100vh`;
  } else {
    adjustedWidth = `${width}px`;
    if (width * (4 / 3) > minHeight) {
      aspectRatio = "4/3";
    } else {
      adjustedHeight = minHeight;
    }
  }

  console.log(
    "onload width, height, and settings",
    width,
    height,
    adjustedWidth,
    adjustedHeight,
    aspectRatio
  );

  iframeContainerElement.style.width = adjustedWidth;
  if (adjustedHeight) iframeContainerElement.style.height = adjustedHeight;
  if (aspectRatio) {
    iframeElement.style.aspectRatio = aspectRatio;
  }
};
