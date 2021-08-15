(() => {
  if (document.INDEX_JS_LOADED) return;

  /**
   * Active caption animation
   */
  const animateCaption = () => {
    const caption = document.querySelector(".caption");

    const keyframes = [
      "Coming soon...",
      "Coming soon",
      "Coming soon.",
      "Coming soon..",
    ];

    setInterval(
      (() => {
        let frame = 0;
        return () => {
          caption.textContent = keyframes[frame];
          frame = (frame + 1) % keyframes.length;
        };
      })(),
      500
    );
  };

  animateCaption();
  document.INDEX_JS_LOADED = true;
})();
