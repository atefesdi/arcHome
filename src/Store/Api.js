import axios from "axios";
import newsDetail from "./newsDetail.json";
// import qs from "qs";

const isDevelopment = process.env.NODE_ENV === "development";

// const baseURL = isDevelopment ? "http://localhost:3000/" : "/";

// axios.defaults.baseURL = baseURL + "/";

// axios.defaults.withCredentials = true;

axios.headers = {
  "Access-Control-Allow-Origin": "*",
  "Content-Type": "application/json",
};

// var promiseObject = null;

const getSampleData = (name) => {
  switch (name) {
    case "newsDetail":
      return newsDetail;
    default:
      return null;
  }
};

// const promiseTimeout = (fn, ms) => {
//   var timeout, promise;

//   promise = new Promise((resolve, reject) => {
//     timeout = setTimeout(() => {
//       resolve(fn);
//     }, ms);
//   });

//   return {
//     promise: promise,
//     cancel: function () {
//       clearTimeout(timeout);
//     },
//   };
// };

const rawResponseToResponse = (rawResponse) => {
  let messages;

  if (!rawResponse) {
    messages = [
      {
        type: 8,
        message: "پاسخی از سرور دریافت نشد",
      },
    ];
  } else if (rawResponse.status !== 200) {
    switch (rawResponse.status) {
      case 404:
        messages = [
          {
            type: 8,
            message: "آدرس درخواستی وجود ندارد",
          },
        ];
        break;
      case 500:
        messages = [
          {
            type: 8,
            message: "پردازش درخواست در سمت سرور با خطا مواجه شده است.",
          },
        ];
        break;
      case 401:
        messages = [
          {
            type: 8,
            message: "خطای عدم دسترسی",
          },
        ];
        break;
      default:
        break;
    }
  } else if (
    rawResponse &&
    rawResponse.data &&
    "isSucceed" in rawResponse.data
  ) {
    return rawResponse.data;
  } else if (
    rawResponse.data.messages &&
    rawResponse.data.messages.length > 0
  ) {
    messages = rawResponse.data.messages;
  } else if (
    rawResponse.data.captchaInputText &&
    rawResponse.data.captchaInputText.errors.length > 0
  ) {
    messages = [
      {
        type: 8,
        message: rawResponse.data.captchaInputText.errors[0],
      },
    ];
  } else {
    messages = [
      {
        type: 8,
        message: "متاسفانه خطایی پیش آمده است",
      },
    ];
  }

  if (rawResponse.data.messages) {
  }

  messages = rawResponse?.data?.messages
    ? rawResponse.data.messages
    : [
        {
          type: 8,
          message: "خطایی پیش بینی نشده",
        },
      ];

  return {
    isSucceed: false,
    messages: messages,
  };
};

export default class Api {
  static staticConstructor() {}

  static Initialize() {
    if (isDevelopment) {
      return getSampleData("flightData");
    }
    return window.flightData;
  }

  static async GetNewsDetail(data) {
    console.log(data);
    if (isDevelopment) {
      return getSampleData("newsDetail");
    }
    let rawResponse = await axios
      .get("https://dummyjson.com/products/" + data.id)
      .catch((e) => e.response);

    return rawResponseToResponse(rawResponse);
  }

  // static async Search(searchData) {
  //   if (isDevelopment) {
  //     return getSampleData("Search");
  //   }

  //   let data = {
  //     ...searchData,
  //     __RequestVerificationToken: window.antiForgeryToken,
  //   };

  //   let searchUrl = "/V4/flight/search";

  //   let rawResponse = await axios
  //     .post(searchUrl, qs.stringify(data))
  //     .catch((e) => e.response);
  //   return rawResponseToResponse(rawResponse);
  // }

  // static async SearchAirport(isInternal, key, isOrigin) {
  //   var search = async () => {
  //     if (isDevelopment) {
  //       if (isInternal) {
  //         return getSampleData("IranianAirports");
  //       }
  //       return getSampleData("Airports");
  //     }

  //     var config = {
  //       headers: {
  //         "x-requested-with": "XMLHttpRequest",
  //       },
  //     };

  //     let url = isInternal ? "/airport/iranianairports/" : "/airport/airports/";

  //     let rawResponse = await axios
  //       .get(`${url}?keyword=${key}&orginPlace=${isOrigin}`, config)
  //       .catch((e) => e.response);

  //     return rawResponse.data;
  //   };

  //   if (promiseObject && key) {
  //     promiseObject.cancel();
  //   }

  //   promiseObject = promiseTimeout(search, 600);

  //   return promiseObject.promise.then(function (result) {
  //     return result();
  //   });
  // }

  // static async Issue(data) {
  //   // if (isDevelopment) {
  //   //   return getSampleData("Issue");
  //   // }

  //   let rawResponse = await axios
  //     .post("/v3/flight/issue/", data)
  //     .catch((e) => e.response);

  //   return rawResponseToResponse(rawResponse);
  // }
}

Api.staticConstructor();
