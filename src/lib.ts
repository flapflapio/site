/**
 * When you publish a new sprint, add it to the below array (e.g. Sprint 2, add
 * 2 to the array)
 */
const sprintsCompleted = [1];

/**
 * Active caption animation
 */
const animateCaption = (selector = ".caption"): void => {
  const caption = document.querySelector(selector);
  if (!caption) return;

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

/**
 * @param resp A response from a fetch request
 * @returns The text data read from the response
 */
const readResponseBody = async (resp: Promise<Response>): Promise<string> => {
  const chunks = [];
  const reader = (await resp).body.getReader();
  let finished = false;

  while (!finished) {
    const { done, value } = await reader.read();
    if (value) chunks.push(value);
    finished = done;
  }

  return chunks.map((chunk) => new TextDecoder().decode(chunk)).join("");
};

/**
 * @param md A string with your markdown text
 * @returns A div containing rendered markdown.
 */
const markdownToDiv = (md: string): HTMLDivElement => {
  const d = document.createElement("div");
  d.textContent = md;
  return d;
};

/**
 * Append the sprint breakdowns for each sprint
 */
const appendSprints = (
  { selector, sprints } = { selector: ".sprints", sprints: sprintsCompleted }
): void => {
  const container = document.querySelector(selector);

  // Add a <div> with the rendered markdown for each of the markdown files
  Promise.allSettled(
    sprints
      .map((sprintIndex) => `md/sprint-${sprintIndex}.md`)
      .map((fileName) => fetch(fileName))
      .map(readResponseBody)
  ).then((responses) =>
    responses
      .filter(({ status }) => status === "fulfilled")
      .map((resp) => (resp as any).value)
      .map(markdownToDiv)
      .forEach((div) => container.appendChild(div))
  );
};

export { appendSprints, markdownToDiv, readResponseBody, animateCaption };
