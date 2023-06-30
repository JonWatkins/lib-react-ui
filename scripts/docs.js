import { execa } from "execa";
import ghpages from "gh-pages";
import minimist from "minimist";

const args = minimist(process.argv.slice(2));

const buildDocs = async () => {
  await execa("storybook", ["build"]);
};

const publicDocs = () => {
  return new Promise((resolve) => {
    ghpages.publish(
      "storybook-static",
      {
        branch: "docs",
      },
      resolve
    );
  });
};

const run = async () => {
  const { deploy } = args;

  await buildDocs();

  if (deploy) {
    await publicDocs();
  }
};

run();