import TextField from "./TextField";
export default {
  title: "TextField",
  // Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
};

// default task state
export const Default = () => ({
  components: { TextField },
  template: `<TextField label="Example" placeholder="Type something..."/>`,
});

// default task state
export const Invalid = () => ({
  components: { TextField },
  template: `<TextField label="Example" error="Required field" />`,
});
