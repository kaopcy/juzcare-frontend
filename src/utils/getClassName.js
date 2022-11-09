export const classname = (...arg) => arg.reduce((acc, cur) => cur ? `${acc} ${cur} ` : acc, "");

