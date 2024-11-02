const rawData = {
  "name-1234f": "dell",
  "name-123rt": "lenovo",
  "name-123rt2": "lenovo",
  "product-123st": "apple",
  "product-321ert": "samsung",
  "exm-34sd": "234swd",
  name: "sajib",
  product: "lenovo",
};

const convertedData = {
  name: {
    "1234f": "dell",
    "123rt": "lenovo",
  },
  product: {
    "123st": "apple",
    "321ert": "samsung",
  },
};

let convertedRawData = {};

for (const prop in rawData) {
  console.log(prop.split("-").length > 1);
  if (["name", "product"].includes(prop.split("-")[0])) {
    if (!convertedRawData[prop.split("-")[0]]) {
      convertedRawData[prop.split("-")[0]] = {
        [prop.split("-")[1]]: rawData[prop],
      };
    }
    convertedRawData[prop.split("-")[0]] = {
      ...convertedRawData[prop.split("-")[0]],
      [prop.split("-")[1]]: rawData[prop],
    };
  } else {
    convertedRawData = {
      ...convertedRawData,
      [prop]: rawData[prop],
    };
  }
}

console.log(convertedRawData);
