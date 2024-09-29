type Gender = "male" | "female";
type ActivityLevel =
  | "sedentary"
  | "lightly_active"
  | "moderately_active"
  | "very_active"
  | "super_active";

export const calculateBMR = (
  weight: number,
  height: number,
  age: number,
  gender: Gender
) => {
  if (gender == "male") {
    return 10 * weight + 6.25 * height - 5 * age + 5;
  } else {
    return 10 * weight + 6.25 * height - 5 * age - 161;
  }
};

export const getActivityMultiplier = (activityLevel: ActivityLevel): number => {
  switch (activityLevel) {
    case "sedentary":
      return 1.2;
    case "lightly_active":
      return 1.375;
    case "moderately_active":
      return 1.55;
    case "very_active":
      return 1.725;
    case "super_active":
      return 1.9;
    default:
      return 1.2;
  }
};
