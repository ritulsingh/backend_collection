import ErrorResponse from "../types/errorResponse.type";

const apiError = (statusCode: number, code: string, message: string = "Something went wrong", meta?: any) => {
  const response: ErrorResponse = {
    statusCode,
    data: null,
    error: {
      code,
      message,
    },
    success: false,
    meta,
  };
  return response;
};

export default apiError;
