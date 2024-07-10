// 3. Using Object.keys(), Object.values(), and Object.entries()
const settings = {
  theme: "dark",
  notifications: true,
  volume: 70,
};

// Use Object.keys() to get and log an array of the object’s property names.
const keys = Object.keys(settings);
console.log(keys);
// Use Object.values() to get and log an array of the object’s property values.
const values = Object.values(settings);
console.log(values);
// Use Object.entries() to get and log an array of key-value pairs.
const entries = Object.entries(settings);
console.log(entries);
// Check if the settings object has a volume property and log the result.
console.log("volume" in settings);
