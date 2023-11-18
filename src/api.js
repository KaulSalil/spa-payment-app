const mockApiRequest = async (requestData) => {
  console.log(`requestData:${JSON.stringify(requestData)}`);
  return new Promise((resolve, reject) => {
    if (
      requestData.to &&
      !requestData.to.includes("error") &&
      requestData.amount
    ) {
      resolve({ status: 200, data: { message: "Payment Successful" } });
    } else if (requestData.to === "error400@b.com") {
      reject({ status: 400, data: { message: "Bad Request" } });
    } else if (requestData.to === "error401@b.com") {
      reject({ status: 401, data: { message: "Unauthorized" } });
    } else if (requestData.to === "error500@b.com") {
      reject({ status: 500, data: { message: "Internal Server Error" } });
    } else {
      reject({ status: 200, data: { message: "Payment Successful" } });
    }
  });
};

export { mockApiRequest };
