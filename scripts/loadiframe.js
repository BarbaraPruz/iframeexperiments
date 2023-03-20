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
    adjustedWidth = `97vw`;
    adjustedHeight = `97vh`;
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
  const iframe95 = document.getElementById("iframe-container-95");
  const iframe93 = document.getElementById("iframe-container-93");
  iframe95.style.width = "95vw";
  iframe95.style.height = "95vh";
  iframe93.style.width = "93vw";
  iframe93.style.height = "93vh";
};
