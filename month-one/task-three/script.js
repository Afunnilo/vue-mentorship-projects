function generation(x, y) {
  if (y === "m") {
    switch (x) {
      case 0:
        return "me!";
      case 1:
        return "son";
      case 2:
        return "grandson";
      case 3:
        return "great grandson";
      case -3:
        return "great grandfather";
      case -2:
        return "grandfather";
      case -1:
        return "father";
    }
  } else if (y === "f") {
    switch (x) {
      case 1:
        return "daughter";
      case 2:
        return "granddaughter";
      case 3:
        return "great granddaughter";
      case -3:
        return "great grandmother";
      case -2:
        return "grandmother";
      case -1:
        return "mother";
      case 0:
        return "me!";
    }
  } else {
    alert("enter f for female and m for male");
  }
}
