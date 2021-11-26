import ReactThreeTestRenderer from "@react-three/test-renderer";
import { Box } from "./components/Shapes/Box";

// fails here; works in code sandbox: https://codesandbox.io/s/react-three-test-render-example-ts-cj1re
test("mesh to have two children", async () => {
  const renderer = await ReactThreeTestRenderer.create(<Box />);
  const meshChildren = renderer.scene.children[0].allChildren;
  console.log(meshChildren);
  expect(meshChildren.length).toBe(2);
});

test("should scale on scroll", async () => {
  const renderer = await ReactThreeTestRenderer.create(<Box />);
});
