interface ErrorResponse {
  statusCode: number;
  data: null;
  error: {
    code: string;
    message: string;
  };
  success: boolean;
  meta?: any;
}

export default ErrorResponse;