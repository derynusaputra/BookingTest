const c = {
  greyColor: "#D9D9D9",
  greyColor2: "#EEEEEE",
  greyDark2: "#A0A0A0",
  greyDark: "#626164",
  blackColor: "#212121",
  redColor: "#FF4D67",
  whiteColor: "#FFFFFF",
  whiteColor2: "#FAFAFA",
  redColor2: "#FF5D76",
};

const lightTheme = {
  dark: true,
  colors: {
    primary: c.whiteColor,
    background: c.whiteColor2,
    card: c.redColor,
    text: c.blackColor,
    border: c.greyDark,
    notification: c.redColor2,
    placeholder: c.greyDark2,
    descriptionText: c.greyColor,
    buttonBackground: c.greyColor2,
    // income: '#2ecc71',
    // incomeBackground: 'rgba(46, 204, 113, 0.2)',
    // expense: '#e74c3c',
    // expenseBackground: 'rgba(231, 76, 60, 0.2)',
  },
};

const darkTheme = {
  dark: false,
  colors: {
    primary: "#007AFF",
    background: "#f9f9f9",
    card: "#ffffff",
    text: "#083371",
    border: "#D8D8D8",
    notification: "#FF3B30",
    placeholder: "#9a9ea4",
    descriptionText: "#818892",
    buttonBackground: "#f1f3f7",
    income: "#2ecc71",
    // incomeBackground: 'rgba(46, 204, 113, 0.2)',
    // expense: '#e74c3c',
    // expenseBackground: 'rgba(231, 76, 60, 0.2)',
  },
};

export default { darkTheme, lightTheme };
