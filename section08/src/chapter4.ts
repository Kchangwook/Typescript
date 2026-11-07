/**
 * 템플릿 리터럴 타입
 */

type Color = "red" | "black" | "green";

type Animal = "dog" | "cat" | "bird";

type ColoredAnimal = `${Color}-${Animal}`;
const coloredAnimal: ColoredAnimal = "red-dog";