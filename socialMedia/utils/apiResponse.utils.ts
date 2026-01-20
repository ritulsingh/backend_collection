import SuccessResponse from "../types/apiResponse.type";

const apiResponse = (statusCode: number, data: any, message: string = "Success") => {
  const response: SuccessResponse = {
    statusCode,
    data,
    message,
    success: statusCode < 400,
    error: null,
  };
  return response;
};

export default apiResponse;
